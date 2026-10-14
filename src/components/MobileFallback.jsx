import React from 'react';
import Navbar from './Navbar.jsx';
import HeroOverlay from '../sections/HeroOverlay.jsx';
import AboutOverlay from '../sections/AboutOverlay.jsx';
import SkillsOverlay from '../sections/SkillsOverlay.jsx';
import ProjectsOverlay from '../sections/ProjectsOverlay.jsx';
import AchievementsOverlay from '../sections/AchievementsOverlay.jsx';
import StatsOverlay from '../sections/StatsOverlay.jsx';
import ContactOverlay from '../sections/ContactOverlay.jsx';
import ScrollProgress from './ScrollProgress.jsx';

const MobileFallback = () => {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#090a0f', overflowX: 'hidden' }}>
      <ScrollProgress />
      <Navbar />
      <HeroOverlay />
      <AboutOverlay />
      <SkillsOverlay />
      <ProjectsOverlay />
      <AchievementsOverlay />
      <StatsOverlay />
      <ContactOverlay />
    </div>
  );
};

export default MobileFallback;
