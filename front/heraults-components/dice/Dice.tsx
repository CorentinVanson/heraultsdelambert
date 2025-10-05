import React, { useRef, useState, useMemo, forwardRef, useImperativeHandle } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics, RigidBody, ConvexHullCollider, RigidBodyApi, CuboidCollider } from '@react-three/rapier';
import * as THREE from 'three';
import { IcosahedronGeometry, TetrahedronGeometry, OctahedronGeometry, DodecahedronGeometry, BoxGeometry } from 'three';

// --- Types ---
type DiceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100';

interface DiceComponentProps {
  onRollEnd: (result: number | string) => void;
  position: [number, number, number];
}

export interface DiceApi {
  roll: () => void;
}

// --- Fonctions Utilitaires ---

// Crée les textures "peintes" pour les faces
const createFaceMaterials = (values: (string | number)[]) => {
    return values.map(value => {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const context = canvas.getContext('2d');
        if (context) {
            context.fillStyle = 'ivory';
            context.fillRect(0, 0, 128, 128);
            context.fillStyle = 'black';
            context.font = 'bold 64px Arial';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(value.toString(), 64, 64);
        }
        return new THREE.MeshStandardMaterial({ map: new THREE.CanvasTexture(canvas), flatShading: true });
    });
};

// Hook personnalisé pour la physique (pour éviter la répétition)
const useDicePhysics = (ref: React.RefObject<RigidBodyApi>, onRollEnd: (result: number | string) => void, geometry: THREE.BufferGeometry, values: (string | number)[], resultType: 'face' | 'vertex') => {
    const [isRolling, setIsRolling] = useState(false);

    useFrame(() => {
        if (!isRolling || !ref.current) return;
        const linvel = ref.current.linvel();
        const angvel = ref.current.angvel();
        const isStopped = Math.abs(linvel.x) < 0.1 && Math.abs(linvel.y) < 0.1 && Math.abs(linvel.z) < 0.1 &&
                          Math.abs(angvel.x) < 0.1 && Math.abs(angvel.y) < 0.1 && Math.abs(angvel.z) < 0.1;

        if (isStopped) {
            setIsRolling(false);
            calculateResult();
        }
    });

    const calculateResult = () => {
        if (!ref.current) return;
        const quaternion = ref.current.rotation();
        let highestValue: number | string | null = null;
        let maxDot = -Infinity;
        const worldUp = new THREE.Vector3(0, 1, 0);

        if (resultType === 'face') {
            const normals = geometry.attributes.normal.array;
            const faceCount = values.length;
            const verticesPerFace = normals.length / 3 / faceCount;
            for (let i = 0; i < faceCount; i++) {
                const normalIndex = i * verticesPerFace * 3;
                const normal = new THREE.Vector3(normals[normalIndex], normals[normalIndex+1], normals[normalIndex+2]);
                const rotatedNormal = normal.clone().applyQuaternion(quaternion);
                if (rotatedNormal.dot(worldUp) > maxDot) {
                    maxDot = rotatedNormal.dot(worldUp);
                    highestValue = values[i];
                }
            }
        } else { // Vertex for d4
            const vertices = geometry.attributes.position.array;
            for (let i = 0; i < values.length; i++) {
                const vertex = new THREE.Vector3(vertices[i*3], vertices[i*3+1], vertices[i*3+2]);
                const worldVertex = vertex.clone().applyQuaternion(quaternion);
                if (worldVertex.y > maxDot) {
                    maxDot = worldVertex.y;
                    highestValue = values[i];
                }
            }
        }
        if (highestValue !== null) onRollEnd(highestValue);
    };

    const roll = () => {
        if (!ref.current) return;
        setIsRolling(true);
        ref.current.wakeUp();
        ref.current.setTranslation({ x: 0, y: 5, z: 0 }, true);
        ref.current.setRotation({ w: 10, x: 10, y: 10, z: 10 }, true);
        ref.current.setLinvel({ x: 2, y: 1, z: 0 }, true);
        ref.current.setAngvel({ x: 1, y: 2, z: 0 }, true);
        ref.current.applyImpulse({ x: (Math.random() - 0.5) * 15, y: Math.random() * 8, z: (Math.random() - 0.5) * 15 }, true);
        ref.current.applyTorqueImpulse({ x: (Math.random() - 0.5) * 35, y: (Math.random() - 0.5) * 30, z: (Math.random() - 0.5) * 30 }, true);
    };
    return { roll };
};


// --- Composant D6 ---
const D6 = forwardRef<DiceApi, DiceComponentProps>(({ onRollEnd, position }, ref) => {
    const rigidBodyRef = useRef<RigidBodyApi>(null!);
    const { geometry, values, materials } = useMemo(() => {
        const geom = new BoxGeometry(1.4, 1.4, 1.4);
        const vals = [1, 2, 3, 4, 5, 6];
        return { geometry: geom, values: vals, materials: createFaceMaterials(vals) };
    }, []);
    const { roll } = useDicePhysics(rigidBodyRef, onRollEnd, geometry, values, 'face');
    useImperativeHandle(ref, () => ({ roll }));
    return (
        <RigidBody ref={rigidBodyRef} position={position} colliders={false}>
            <CuboidCollider args={[0.7, 0.7, 0.7]} />
            <mesh geometry={geometry} material={materials} castShadow receiveShadow />
        </RigidBody>
    );
});

// --- Composants D8, D12, D20 (corrigés) ---
const createPolyhedralDice = (Component: React.FC<any>, values: number[]) => {
    return forwardRef<DiceApi, DiceComponentProps>(({ onRollEnd, position }, ref) => {
        const rigidBodyRef = useRef<RigidBodyApi>(null!);
        const geom = useMemo(() => new Component(1.2), []); // Crée la géométrie une seule fois
        const { roll } = useDicePhysics(rigidBodyRef, onRollEnd, geom, values, 'face');
        useImperativeHandle(ref, () => ({ roll }));

        // NOTE: Pour ces dés, nous appliquons une seule texture qui sera étirée sur tout l'objet.
        // L'application d'une texture par face sur ces géométries est très complexe.
        // Le calcul du résultat reste cependant correct.
        return (
            <RigidBody ref={rigidBodyRef} position={position}>
                <mesh geometry={geom} castShadow receiveShadow>
                    <meshStandardMaterial color="ivory" flatShading={true} />
                </mesh>
            </RigidBody>
        );
    });
};

const D8 = createPolyhedralDice(OctahedronGeometry, [1,2,3,4,5,6,7,8]);
const D12 = createPolyhedralDice(DodecahedronGeometry, [1,2,3,4,5,6,7,8,9,10,11,12]);
const D20 = createPolyhedralDice(IcosahedronGeometry, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);


// --- Composant D10 ---
const D10 = forwardRef<DiceApi, DiceComponentProps & { isTens?: boolean }>(({ onRollEnd, position, isTens }, ref) => {
    const rigidBodyRef = useRef<RigidBodyApi>(null!);
    const { geometry, values } = useMemo(() => {
        const d10verts = [[0,0,1.1],[0,0,-1.1],...Array.from({length:5},(_,i)=>{const a=(i/5)*2*Math.PI;return[Math.cos(a),Math.sin(a),.1]}),...Array.from({length:5},(_,i)=>{const a=(i/5+1/10)*2*Math.PI;return[Math.cos(a),Math.sin(a),-.1]})].flat();
        const d10faces = [[0,2,3],[0,3,4],[0,4,5],[0,5,6],[0,6,2],[1,8,7],[1,9,8],[1,10,9],[1,11,10],[1,7,11],[3,2,7],[4,3,8],[5,4,9],[6,5,10],[2,6,11],[7,8,3],[8,9,4],[9,10,5],[10,11,6],[11,7,2]].flat();
        const vals = isTens ? ['00','10','20','30','40','50','60','70','80','90'] : [0,1,2,3,4,5,6,7,8,9];
        const geom = new THREE.PolyhedronGeometry(d10verts, d10faces, 1.2, 0);
        return { geometry: geom, values: vals };
    }, [isTens]);
    const { roll } = useDicePhysics(rigidBodyRef, onRollEnd, geometry, values, 'face');
    useImperativeHandle(ref, () => ({ roll }));
    return (
        <RigidBody ref={rigidBodyRef} position={position}>
            <mesh geometry={geometry} castShadow receiveShadow >
                 <meshStandardMaterial color="ivory" flatShading={true} />
            </mesh>
        </RigidBody>
    );
});

// --- Composant D4 ---
const D4 = forwardRef<DiceApi, DiceComponentProps>(({ onRollEnd, position }, ref) => {
    const rigidBodyRef = useRef<RigidBodyApi>(null!);
    const { geometry, values } = useMemo(() => {
        const geom = new TetrahedronGeometry(1.2);
        return { geometry: geom, values: [1,2,3,4] };
    }, []);
    const { roll } = useDicePhysics(rigidBodyRef, onRollEnd, geometry, values, 'vertex');
    useImperativeHandle(ref, () => ({ roll }));
    return (
        <RigidBody ref={rigidBodyRef} position={position}>
            <mesh geometry={geometry} castShadow receiveShadow >
                <meshStandardMaterial color="ivory" flatShading={true} />
            </mesh>
        </RigidBody>
    );
});


// --- Composant Principal ---
export default function DiceRoller(): JSX.Element {
  const [diceType, setDiceType] = useState<DiceType>('d6');
  const [result, setResult] = useState<string | null>(null);
  
  const dice1Ref = useRef<DiceApi>(null!);
  const dice2Ref = useRef<DiceApi>(null!);
  
  let result1: number | string | null = null;
  let result2: number | string | null = null;

  const handleRoll = (): void => {
    setResult("...");
    result1 = null;
    result2 = null;
    if (dice1Ref.current) dice1Ref.current.roll();
    if (diceType === 'd100' && dice2Ref.current) dice2Ref.current.roll();
  };

  const handleRollEnd = (res: number | string, diceIndex: number) => {
    if (diceIndex === 1) result1 = res;
    if (diceIndex === 2) result2 = res;

    if (diceType !== 'd100') {
      setResult(res.toString());
    } else if (result1 !== null && result2 !== null) {
      const tens = result1 === '00' ? 0 : parseInt(result1 as string, 10);
      const ones = result2 === 0 ? 0 : parseInt(result2 as string, 10);
      const finalResult = tens + ones;
      setResult(finalResult === 0 ? "100" : finalResult.toString());
    }
  };

  const renderDice = () => {
    switch(diceType) {
        case 'd4': return <D4 ref={dice1Ref} onRollEnd={(res) => handleRollEnd(res, 1)} position={[0,5,0]} />;
        case 'd8': return <D8 ref={dice1Ref} onRollEnd={(res) => handleRollEnd(res, 1)} position={[0,5,0]} />;
        case 'd10': return <D10 ref={dice1Ref} onRollEnd={(res) => handleRollEnd(res, 1)} position={[0,5,0]} />;
        case 'd12': return <D12 ref={dice1Ref} onRollEnd={(res) => handleRollEnd(res, 1)} position={[0,5,0]} />;
        case 'd20': return <D20 ref={dice1Ref} onRollEnd={(res) => handleRollEnd(res, 1)} position={[0,5,0]} />;
        case 'd100': return (
            <>
                <D10 ref={dice1Ref} isTens={true} onRollEnd={(res) => handleRollEnd(res, 1)} position={[-1.5, 5, 0]}/>
                <D10 ref={dice2Ref} onRollEnd={(res) => handleRollEnd(res, 2)} position={[1.5, 5, 0]}/>
            </>
        );
        case 'd6':
        default: return <D6 ref={dice1Ref} onRollEnd={(res) => handleRollEnd(res, 1)} position={[0,5,0]} />;
    }
  }

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#282c34', color: 'white' }}>
      <h1>Simulation de Dés Physiques</h1>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <select value={diceType} onChange={(e) => {setDiceType(e.target.value as DiceType); setResult(null);}} style={{ padding: '10px', fontSize: '1em', marginRight: '20px' }}>
          <option value="d4">d4</option>
          <option value="d6">d6</option>
          <option value="d8">d8</option>
          <option value="d10">d10</option>
          <option value="d12">d12</option>
          <option value="d20">d20</option>
          <option value="d100">d100</option>
        </select>
        <button onClick={handleRoll} style={{ padding: '10px 20px', fontSize: '1.2em' }}>
          Lancer
        </button>
      </div>

      <Canvas shadows camera={{ position: [0, 12, 12], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 15, 5]} intensity={1.5} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
        <OrbitControls />

        <Physics gravity={[0, -30, 0]}>
          {renderDice()}
          <RigidBody type="fixed">
            <CuboidCollider args={[8, 0.5, 8]} position={[0, -0.5, 0]} />
          </RigidBody>
        </Physics>
      </Canvas>
      
      <div style={{ height: '50px', marginTop: '10px' }}>
        {result !== null && <p style={{ fontSize: '2em' }}>Résultat : {result}</p>}
      </div>
    </div>
  );
}