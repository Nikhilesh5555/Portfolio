import React, { Component, useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingScreen from './components/LoadingScreen.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Scene from './components/Scene.jsx';
import HeroOverlay from './sections/HeroOverlay.jsx';
import AboutOverlay from './sections/AboutOverlay.jsx';
import SkillsOverlay from './sections/SkillsOverlay.jsx';
import ProjectsOverlay from './sections/ProjectsOverlay.jsx';
import AchievementsOverlay from './sections/AchievementsOverlay.jsx';
import StatsOverlay from './sections/StatsOverlay.jsx';
import ContactOverlay from './sections/ContactOverlay.jsx';
import MobileFallback from './components/MobileFallback.jsx';
import { getDevicePerformance } from './hooks/useDevicePerformance.js';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

// ─── Error Boundary to prevent full blank-screen crashes ─────────────────────
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error('[Portfolio Error Boundary]', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', height: '100vh', background: '#0a0a0f',
          color: '#fff', fontFamily: 'Space Grotesk, sans-serif', gap: '1rem'
        }}>
          <h1 style={{ fontSize: '2rem', margin: 0 }}>R Nethra Nikhilesh</h1>
          <p style={{ opacity: 0.6 }}>Loading experience…</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '0.6rem 1.4rem', background: '#6366f1', border: 'none',
              borderRadius: '8px', color: '#fff', cursor: 'pointer', fontSize: '1rem'
            }}
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── Main App ─────────────────────────────────────────────────────────────────
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFallback] = useState(() => {
    if (typeof window !== 'undefined') {
      return getDevicePerformance().prefersReducedMotion;
    }
    return false;
  });
  const lenisRef = useRef(null);

  useEffect(() => {
    if (isMobileFallback) {
      return;
    }

    // ✅ Lenis v1.0.x compatible API — removed deprecated smooth/direction/gestureDirection
    let lenis;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothTouch: false,
      });
    } catch (e) {
      console.warn('[Lenis] init failed, falling back to native scroll', e);
      return;
    }
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, [isMobileFallback]);

  if (isMobileFallback) {
    return <MobileFallback />;
  }

  return (
    <ErrorBoundary>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <Navbar />
      <ScrollProgress />
      <Scene />
      <HeroOverlay />
      <AboutOverlay />
      <SkillsOverlay />
      <ProjectsOverlay />
      <AchievementsOverlay />
      <StatsOverlay />
      <ContactOverlay />
    </ErrorBoundary>
  );
};

export default App;
