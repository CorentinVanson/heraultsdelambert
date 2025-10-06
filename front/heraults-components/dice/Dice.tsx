import React, { useRef, useState, useMemo, forwardRef, useImperativeHandle } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics, RigidBody, ConvexHullCollider, RapierRigidBody, CuboidCollider } from '@react-three/rapier';
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
// Force chaque triangle du D10 à pointer vers le centre de sa zone dédiée sur la texture (2x5)
// Remap les UVs du D10 pour que chaque face utilise une zone dédiée de la texture (2x5)
function remapD10UVs(geometry: THREE.BufferGeometry) {
    console.log("Remapping D10 UVs (non-indexed)");
    let uv = geometry.attributes.uv;
    const pos = geometry.attributes.position;
    // Si le buffer UV n'existe pas ou n'a pas la bonne taille, on le crée
    const vertexCount = pos.count;
    if (!uv || uv.count !== vertexCount) {
        const uvArray = new Float32Array(vertexCount * 2);
        geometry.setAttribute('uv', new THREE.BufferAttribute(uvArray, 2));
        uv = geometry.attributes.uv;
    }
    const uvArr = uv.array as Float32Array;
    // Mapping manuel : face i → valeur j
    // Par défaut, correspondance directe (modifiable)
    const faceToValue = [0,1,2,3,4,5,6,7,8,9]; // Modifie ce tableau selon la correspondance réelle
    // 10 zones : grille 2x5
    const zones = [
        [0,0], [1,0], [2,0], [3,0], [4,0],
        [0,1], [1,1], [2,1], [3,1], [4,1]
    ];
    const zoneW = 1/5, zoneH = 1/2;
    for (let face = 0; face < 10; face++) {
        const valueIdx = faceToValue[face];
        const [col, row] = zones[valueIdx];
        // Centre de la zone
        const u = col * zoneW + 0.5 * zoneW;
        const v = row * zoneH + 0.5 * zoneH;
        let logStr = `D10 Triangle ${face}: vertex indices [`;
        for (let vtx = 0; vtx < 3; vtx++) {
            const idx = face * 3 + vtx;
            uvArr[idx * 2] = u;
            uvArr[idx * 2 + 1] = v;
            logStr += idx + (vtx < 2 ? ', ' : '');
        }
        logStr += `], UV zone center=(${u.toFixed(2)}, ${v.toFixed(2)}), valueIdx=${valueIdx}`;
        console.log(logStr);
    }
    uv.needsUpdate = true;
}
// Remap les UVs du cube pour que chaque face utilise une zone dédiée de la texture (2x3)
function remapCubeUVs(geometry: THREE.BoxGeometry) {
    const uv = geometry.attributes.uv;
    if (!uv) return;
    const uvArr = uv.array as Float32Array;
    // 6 faces, chaque face = 2 triangles = 4 sommets
    // On veut 6 zones : grille 2x3
    const zones = [
        [0,0], [1,0], [2,0],
        [0,1], [1,1], [2,1]
    ];
    const zoneW = 1/3, zoneH = 1/2;
    for (let face = 0; face < 6; face++) {
        const [col, row] = zones[face];
        for (let v = 0; v < 4; v++) {
            const idx = face * 8 + v * 2;
            // Remap UVs dans la zone
            uvArr[idx]   = col * zoneW + uvArr[idx] * zoneW;
            uvArr[idx+1] = row * zoneH + uvArr[idx+1] * zoneH;
        }
    }
    uv.needsUpdate = true;
}

const createUVTexture = (geometry: THREE.BufferGeometry, values: (string | number)[]) => {
    const canvas = document.createElement('canvas');
    const size = 1024;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return new THREE.MeshStandardMaterial({ color: 'ivory', flatShading: true });

    ctx.fillStyle = 'ivory';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = 'black';
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Placement spécifique selon le type de dé
    if (values.length === 6) { // D6
        // Chaque chiffre est dessiné dans une zone carrée de la texture (2x3)
        for (let i = 0; i < 6; i++) {
            // Dessine le chiffre dans une sous-zone dédiée
            const col = i % 3;
            const row = Math.floor(i / 3);
            const zoneW = size / 3;
            const zoneH = size / 2;
            ctx.save();
            ctx.beginPath();
            ctx.rect(col * zoneW, row * zoneH, zoneW, zoneH);
            ctx.clip();
            ctx.clearRect(col * zoneW, row * zoneH, zoneW, zoneH);
            ctx.fillStyle = 'ivory';
            ctx.fillRect(col * zoneW, row * zoneH, zoneW, zoneH);
            ctx.fillStyle = 'black';
            ctx.font = 'bold 120px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(values[i].toString(), (col + 0.5) * zoneW, (row + 0.5) * zoneH);
            ctx.restore();
        }
    } else if (values.length === 8) { // D8
        const uv = geometry.attributes.uv;
        const uvArr = uv.array as Float32Array;
        const faceCount = values.length;
        const vertsPerFace = uvArr.length / 2 / faceCount;
        for (let i = 0; i < faceCount; i++) {
            let u = 0, v = 0;
            for (let j = 0; j < vertsPerFace; j++) {
                u += uvArr[(i * vertsPerFace + j) * 2];
                v += uvArr[(i * vertsPerFace + j) * 2 + 1];
            }
            u /= vertsPerFace;
            v /= vertsPerFace;
            const x = u * size;
            const y = (1 - v) * size;
            ctx.fillText(values[i].toString(), x, y);
        }
    } else if (values.length === 12) { // D12
        // Faces réparties en cercle
        const r = size * 0.42;
        const cx = size / 2, cy = size / 2;
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * 2 * Math.PI - Math.PI/2;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            ctx.fillText(values[i].toString(), x, y);
        }
    } else if (values.length === 20) { // D20
        // Faces réparties en cercle
        const r = size * 0.48;
        const cx = size / 2, cy = size / 2;
        for (let i = 0; i < 20; i++) {
            const angle = (i / 20) * 2 * Math.PI - Math.PI/2;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            ctx.fillText(values[i].toString(), x, y);
        }
    } else if (values.length === 10) { // D10
        // Affiche la valeur réelle du dé dans chaque zone (grille 2x5)
        for (let i = 0; i < 10; i++) {
            const col = i % 5;
            const row = Math.floor(i / 5);
            const zoneW = size / 5;
            const zoneH = size / 2;
            ctx.save();
            ctx.beginPath();
            ctx.rect(col * zoneW, row * zoneH, zoneW, zoneH);
            ctx.clip();
            ctx.clearRect(col * zoneW, row * zoneH, zoneW, zoneH);
            ctx.fillStyle = 'ivory';
            ctx.fillRect(col * zoneW, row * zoneH, zoneW, zoneH);
            ctx.fillStyle = 'black';
            ctx.font = 'bold 120px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(values[i].toString(), (col + 0.5) * zoneW, (row + 0.5) * zoneH);
            ctx.restore();
        }
        // Log l'ordre des faces du D10
        if (geometry && geometry.index) {
            const idxArr = geometry.index.array as Uint16Array | Uint32Array | number[];
            let faceLog = '';
            for (let face = 0; face < 10; face++) {
                faceLog += `Face ${face}: indices [`;
                for (let vtx = 0; vtx < 3; vtx++) {
                    faceLog += idxArr[face * 3 + vtx] + (vtx < 2 ? ', ' : '');
                }
                faceLog += '], ';
            }
            console.log('D10 face order:', faceLog);
        }
    } else {
        // Placement générique en grille
        const n = Math.ceil(Math.sqrt(values.length));
        for (let i = 0; i < values.length; i++) {
            const x = ((i % n) + 0.5) * size / n;
            const y = (Math.floor(i / n) + 0.5) * size / n;
            ctx.fillText(values[i].toString(), x, y);
        }
    }
    return new THREE.MeshStandardMaterial({ map: new THREE.CanvasTexture(canvas), flatShading: true });
};

// Hook personnalisé pour la physique (pour éviter la répétition)
const useDicePhysics = (ref: React.RefObject<RapierRigidBody>, onRollEnd: (result: number | string) => void, geometry: THREE.BufferGeometry, values: (string | number)[], resultType: 'face' | 'vertex') => {
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
    const rigidBodyRef = useRef<RapierRigidBody>(null!);
    const { geometry, values } = useMemo(() => {
        const geom = new BoxGeometry(1.4, 1.4, 1.4);
        remapCubeUVs(geom);
        const vals = [1, 2, 3, 4, 5, 6];
        return { geometry: geom, values: vals };
    }, []);
    const material = useMemo(() => createUVTexture(geometry, values), [geometry, values]);
    const { roll } = useDicePhysics(rigidBodyRef, onRollEnd, geometry, values, 'face');
    useImperativeHandle(ref, () => ({ roll }));
    return (
        <RigidBody ref={rigidBodyRef} position={position} colliders={false}>
            <CuboidCollider args={[0.7, 0.7, 0.7]} />
            <mesh geometry={geometry} material={material} castShadow receiveShadow />
        </RigidBody>
    );
});

// --- Composants D8, D12, D20 (corrigés) ---
const createPolyhedralDice = (createGeometry: () => THREE.BufferGeometry, values: (number|string)[]) => {
    return forwardRef<DiceApi, DiceComponentProps>(({ onRollEnd, position }, ref) => {
        const rigidBodyRef = useRef<RapierRigidBody>(null!);
        const geom = useMemo(() => createGeometry(), []); // Crée la géométrie une seule fois
        const material = useMemo(() => createUVTexture(geom, values), [geom, values]);
        const { roll } = useDicePhysics(rigidBodyRef, onRollEnd, geom, values, 'face');
        useImperativeHandle(ref, () => ({ roll }));

        // On applique une texture unique mappée par UV
        return (
            <RigidBody ref={rigidBodyRef} position={position}>
                <mesh geometry={geom} material={material} castShadow receiveShadow />
            </RigidBody>
        );
    });
};

const D8 = createPolyhedralDice(() => new OctahedronGeometry(1.2), [1,2,3,4,5,6,7,8]);
const D12 = createPolyhedralDice(() => new DodecahedronGeometry(1.2), [1,2,3,4,5,6,7,8,9,10,11,12]);
const D20 = createPolyhedralDice(() => new IcosahedronGeometry(1.2), [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);


// --- Composant D10 ---

const D10UV = forwardRef<DiceApi, DiceComponentProps & { isTens?: boolean }>(({ onRollEnd, position, isTens }, ref) => {
    const rigidBodyRef = useRef<RapierRigidBody>(null!);
    const obj = useLoader(OBJLoader, '/Dice_10_HP.obj');
    // Trouve le premier mesh dans l'objet importé
    const mesh = useMemo<THREE.Mesh | null>(() => {
        let found: THREE.Mesh | null = null;
        obj.traverse(child => {
            if ((child as THREE.Mesh).isMesh && !found) found = child as THREE.Mesh;
        });
        return found;
    }, [obj]);
    const values = isTens ? ['00','10','20','30','40','50','60','70','80','90'] : [0,1,2,3,4,5,6,7,8,9];
    const material = useMemo(() => mesh ? createUVTexture(mesh.geometry, values) : undefined, [mesh, values]);
    const { roll } = useDicePhysics(rigidBodyRef, onRollEnd, mesh?.geometry, values, 'face');
    useImperativeHandle(ref, () => ({ roll }));
    if (!mesh || !material) return null;
    return (
        <RigidBody ref={rigidBodyRef} position={position}>
            <primitive object={mesh} material={material} castShadow receiveShadow />
        </RigidBody>
    );
});

// --- Composant D4 ---
const D4 = forwardRef<DiceApi, DiceComponentProps>(({ onRollEnd, position }, ref) => {
    const rigidBodyRef = useRef<RapierRigidBody>(null!);
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
        case 'd10': return <D10UV ref={dice1Ref} onRollEnd={(res) => handleRollEnd(res, 1)} position={[0,5,0]} />;
        case 'd12': return <D12 ref={dice1Ref} onRollEnd={(res) => handleRollEnd(res, 1)} position={[0,5,0]} />;
        case 'd20': return <D20 ref={dice1Ref} onRollEnd={(res) => handleRollEnd(res, 1)} position={[0,5,0]} />;
        case 'd100': return (
            <>
                <D10UV ref={dice1Ref} isTens={true} onRollEnd={(res) => handleRollEnd(res, 1)} position={[-1.5, 5, 0]}/>
                <D10UV ref={dice2Ref} onRollEnd={(res) => handleRollEnd(res, 2)} position={[1.5, 5, 0]}/>
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