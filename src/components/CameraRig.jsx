import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const CameraRig = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const scrollPct = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollPct.current = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useFrame(() => {
    // Total vertical flight distance down the 3D scene
    const targetY = -scrollPct.current * 42;
    const targetZ = 6.5 + Math.sin(scrollPct.current * Math.PI) * 2;
    const targetX = Math.sin(scrollPct.current * Math.PI * 2) * 1.5 + mouse.current.x * 0.4;

    // Smooth lerp camera position
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.08);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY + mouse.current.y * 0.3, 0.08);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.08);

    // Look slightly ahead of current position
    const lookTarget = new THREE.Vector3(0, targetY - 0.5, 0);
    camera.lookAt(lookTarget);
  });

  return null;
};
