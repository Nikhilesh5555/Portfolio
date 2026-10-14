import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const AchievementsObjects = ({ position = [0, -32, 0] }) => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  const plinths = [-3.6, -1.2, 1.2, 3.6];

  return (
    <group position={position} ref={groupRef}>
      {plinths.map((xPos, idx) => (
        <group key={idx} position={[xPos, 0, 0]}>
          {/* Base Plinth */}
          <mesh position={[0, -0.6, 0]}>
            <cylinderGeometry args={[0.5, 0.65, 1.2, 32]} />
            <meshStandardMaterial
              color="#0e111a"
              roughness={0.4}
              metalness={0.8}
            />
          </mesh>

          {/* Glowing Top Ring */}
          <mesh position={[0, 0.05, 0]}>
            <torusGeometry args={[0.5, 0.04, 16, 32]} />
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#7c3aed"
              emissiveIntensity={1.2}
            />
          </mesh>

          {/* Hovering Trophy Gem */}
          <mesh position={[0, 0.6, 0]}>
            <octahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial
              color={idx < 2 ? '#fbbf24' : '#8b5cf6'}
              emissive={idx < 2 ? '#f59e0b' : '#7c3aed'}
              emissiveIntensity={0.8}
              roughness={0.2}
              metalness={0.9}
            />
          </mesh>

          <pointLight
            color={idx < 2 ? '#fbbf24' : '#8b5cf6'}
            intensity={1.5}
            distance={4}
            position={[0, 0.7, 0]}
          />
        </group>
      ))}
    </group>
  );
};

