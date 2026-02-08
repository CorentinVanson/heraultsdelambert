import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import {
  Box,
  Button,
  ButtonText,
  HStack,
  Link,
} from "../../components/ui";
import { useNavigation } from "@react-navigation/native";

  function D20() {
      const ref = useRef<THREE.Mesh>(null);
      useFrame(() => {
          if (ref.current) {
              ref.current.rotation.x += 0.005;
              ref.current.rotation.y += 0.005;
          }
      });

      const geometry = useMemo(() => new THREE.IcosahedronGeometry(2), []);
      const material = useMemo(() => new THREE.MeshStandardMaterial({
          color: '#273840',
          roughness: 0.8,
          metalness: 0.2
      }), []);

      return (
          <mesh ref={ref} geometry={geometry} material={material} />
      );
  }

  function Scene() {
      return (
          <>
              <ambientLight intensity={0.5} />
              <directionalLight position={[1, 1, 1]} intensity={5} />
              <D20 />
          </>
      );
  }

const HeraultsHomeFold = () => {
  const navigation = useNavigation();
  return (
    <Box className="w-full flex items-center">
        <Box className="relative h-[100vh] overflow-hidden flex flex-col items-center justify-center w-full">
            <Canvas className="absolute top-0 left-0 w-full h-full -z-10">
              <Scene />
            </Canvas>
            <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-t from-herault-bg-dark-transparent to-transparent"></div>
            <Box className="absolute z-10 p-12 max-w-4xl text-center h-full flex justify-center">
                <h1 className="grenze text-8xl leading-none text-white">Rejoignez l'aventure.</h1>
                <p className="mt-4 text-2xl font-light text-white">Explorez de nouveaux mondes, créez des histoires épiques et rencontrez des passionnés de jeu de rôle et de jeu de plateau à Lambersart.</p>
                <HStack className="mt-8 flex justify-center space-x-4">
                  <Link href="https://www.helloasso.com/associations/heraults-de-lambert/adhesions/inscriptions-2022-2023" isExternal>
                    <Button className="bg-secondary-500 p-4 rounded-lg font-bold text-lg">
                      <ButtonText>Adhérer</ButtonText>
                    </Button>
                  </Link>
                  <Button className="bg-herault-bg-light p-4 rounded-lg font-bold text-lg" onPress={() => navigation.navigate('Club')}>
                    <ButtonText>Le club</ButtonText>
                  </Button>
                </HStack>
            </Box>
        </Box>
    </Box>
  );
};

export default HeraultsHomeFold;
