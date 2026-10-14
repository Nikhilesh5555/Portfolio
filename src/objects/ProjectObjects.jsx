import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const ProjectObjects = ({ position = [0, -22, 0] }) => {
  const ciniRef = useRef();
  const agroScopeRef = useRef();
  const cropRef = useRef();

  useFrame((_, delta) => {
    if (ciniRef.current) {
      ciniRef.current.rotation.y += delta * 0.35;
      ciniRef.current.rotation.x += delta * 0.2;
    }
    if (agroScopeRef.current) {
      agroScopeRef.current.rotation.x += delta * 0.28;
      agroScopeRef.current.rotation.y += delta * 0.38;
    }
    if (cropRef.current) {
      cropRef.current.rotation.x -= delta * 0.22;
      cropRef.current.rotation.z += delta * 0.32;
    }
  });

  return (
    <group position={position}>
      {/* 01: CINI Stage (Neural Matrix Dodecahedron & Film Ring) */}
      <group position={[3.2, 2.5, 0]} ref={ciniRef}>
        <mesh>
          <dodecahedronGeometry args={[1.3, 0]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#7c3aed"
            emissiveIntensity={0.65}
            roughness={0.2}
            metalness={0.85}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[1.8, 0.05, 16, 64]} />
          <meshStandardMaterial
            color="#c4b5fd"
            emissive="#8b5cf6"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.6, 1]} />
          <meshStandardMaterial
            color="#6366f1"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
        <pointLight color="#8b5cf6" intensity={2.5} distance={7} />
        <pointLight color="#6366f1" intensity={2} distance={6} position={[1, 1, 1]} />
      </group>

      {/* 02: AgroScope Stage (Centerpiece Organic Torus Knot) */}
      <group position={[-3.2, -1.5, 0]} ref={agroScopeRef}>
        <mesh>
          <torusKnotGeometry args={[1.35, 0.42, 128, 32, 2, 3]} />
          <meshStandardMaterial
            color="#10b981"
            emissive="#059669"
            emissiveIntensity={0.6}
            roughness={0.25}
            metalness={0.8}
          />
        </mesh>
        <mesh>
          <torusKnotGeometry args={[1.4, 0.43, 64, 16, 2, 3]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.3}
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>
        <pointLight color="#10b981" intensity={2.2} distance={7} />
        <pointLight color="#f59e0b" intensity={1.8} distance={6} position={[1, 1, 1]} />
      </group>

      {/* 03: Smart Crop Advisory Stage (Icosahedron Facet) */}
      <group position={[3.2, -5.5, 0]} ref={cropRef}>
        <mesh>
          <icosahedronGeometry args={[1.15, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.65}
            roughness={0.3}
            metalness={0.85}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.45, 1]} />
          <meshStandardMaterial
            color="#8b5cf6"
            wireframe
            transparent
            opacity={0.25}
          />
        </mesh>
        <pointLight color="#06b6d4" intensity={2} distance={6} />
      </group>
    </group>
  );
};

