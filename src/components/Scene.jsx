import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { CameraRig } from './CameraRig.jsx';
import { StarField } from '../objects/StarField.jsx';
import { HeroObject } from '../objects/HeroObject.jsx';
import { SkillsConstellation } from '../objects/SkillsConstellation.jsx';
import { ProjectObjects } from '../objects/ProjectObjects.jsx';
import { AchievementsObjects } from '../objects/AchievementsObjects.jsx';
import { useDevicePerformance } from '../hooks/useDevicePerformance.js';

const Scene = () => {
  const { lowEnd } = useDevicePerformance();
  const dpr = typeof window !== 'undefined'
    ? [1, Math.min(window.devicePixelRatio || 1, 2)]
    : [1, 1];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, 7], fov: 55, near: 0.1, far: 100 }}
        gl={{
          antialias: !lowEnd,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <color attach="background" args={['#090a0f']} />
        <ambientLight intensity={0.65} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />

        <Suspense fallback={null}>
          <CameraRig />
          <StarField count={lowEnd ? 400 : 1200} />

          {/* Hero Stage (y = 0) */}
          <HeroObject />

          {/* Skills Constellation (y = -12) */}
          <SkillsConstellation position={[0, -12, 0]} />

          {/* Projects Dedicated Stages (y = -22) */}
          <ProjectObjects position={[0, -22, 0]} />

          {/* Achievements Plinths (y = -32) */}
          <AchievementsObjects position={[0, -32, 0]} />

          {/* Post Processing Effects */}
          {!lowEnd && (
            <EffectComposer>
              <Bloom
                luminanceThreshold={0.5}
                luminanceSmoothing={0.9}
                intensity={0.7}
                radius={0.6}
              />
              <Vignette eskil={false} offset={0.1} darkness={0.8} />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;
