import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const HeroObject = () => {
  const groupRef = useRef();
  const innerRef = useRef();
  const ringRef = useRef();

  // Generate DNA-helix-meets-circuit nodes
  const helixPoints = useMemo(() => {
    const points = [];
    const count = 36;
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 4;
      const x = Math.sin(t) * 1.6;
      const y = (i / count) * 6 - 3;
      const z = Math.cos(t) * 1.6;
      points.push(new THREE.Vector3(x, y, z));
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x += delta * 0.35;
      innerRef.current.rotation.z += delta * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime) * 0.2;
      ringRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[2.5, 0, 0]}>
      {/* Central Data Crystal */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.65}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Wireframe Cage */}
      <mesh>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#4f46e5"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Orbiting Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.5, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#c4b5fd"
          emissive="#a78bfa"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Helix Circuit Nodes */}
      {helixPoints.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial
            color={idx % 2 === 0 ? '#8b5cf6' : '#c4b5fd'}
            emissive={idx % 2 === 0 ? '#8b5cf6' : '#c4b5fd'}
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}

      <pointLight color="#8b5cf6" intensity={2.2} distance={8} />
      <pointLight color="#6366f1" intensity={1.6} distance={6} position={[0, -2, 0]} />
    </group>
  );
};

