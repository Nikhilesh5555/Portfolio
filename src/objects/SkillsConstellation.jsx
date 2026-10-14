import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { skills } from '../data/portfolio.js';

export const SkillsConstellation = ({ position = [0, -12, 0] }) => {
  const groupRef = useRef();

  // Create coordinates for each skill node around a sphere
  const nodes = useMemo(() => {
    return skills.map((s, idx) => {
      const phi = Math.acos(-1 + (2 * idx) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      const radius = 3.2;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      return {
        ...s,
        pos: [x, y, z],
      };
    });
  }, []);

  // Connect neighboring nodes with lines
  const linePairs = useMemo(() => {
    const pairs = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = new THREE.Vector3(...nodes[i].pos).distanceTo(new THREE.Vector3(...nodes[j].pos));
        if (d < 3.2) {
          pairs.push([nodes[i].pos, nodes[j].pos]);
        }
      }
    }
    return pairs;
  }, [nodes]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Skill Nodes */}
      {nodes.map((n, i) => (
        <group key={i} position={n.pos}>
          <mesh>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial
              color="#8b5cf6"
              emissive="#7c3aed"
              emissiveIntensity={1.4}
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.26, 12, 12]} />
            <meshBasicMaterial
              color="#c4b5fd"
              wireframe
              transparent
              opacity={0.35}
            />
          </mesh>
        </group>
      ))}

      {/* Constellation Connecting Lines */}
      {linePairs.map((pair, idx) => (
        <Line
          key={idx}
          points={pair}
          color="#8b5cf6"
          lineWidth={1}
          transparent
          opacity={0.25}
        />
      ))}
    </group>
  );
};

