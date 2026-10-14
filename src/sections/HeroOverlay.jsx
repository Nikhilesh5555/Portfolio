import React from 'react';
import { motion } from 'framer-motion';
import { personal, stats } from '../data/portfolio.js';
import './SectionStyles.css';

const HeroOverlay = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="portfolio-section" aria-label="Introduction">
      <div className="section-container">
        <motion.div
          className="hero-content-box"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-tag">
            <span className="hero-status-pulse"></span>
            <span>{personal.status} · B.Tech CSE @ SRMIST</span>
          </div>

          <h1 className="hero-name">
            <span className="accent-name">{personal.name}</span>
          </h1>

          <h2 className="hero-tagline">
            Full-Stack Developer &amp; <span className="role-highlight">Machine Learning Engineer</span>
          </h2>

          <p className="hero-bio-short">
            Computer Science Engineering student at <strong>{personal.university}</strong> (CGPA {personal.cgpa}). Co-Founder of <strong>AgroScope</strong> (SRM DEI Incubated). Specializing in intelligent systems, content-based recommendation engines, and full-stack web platforms.
          </p>

          <div className="hero-stats-row">
            {stats.map((s, idx) => (
              <div key={idx} className="hero-stat-card">
                <div className="hero-stat-val">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="hero-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn-primary-3d interactive"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('projects');
              }}
              id="cta-view-projects"
            >
              <i className="fa-solid fa-code-fork"></i>
              <span>View Projects</span>
            </a>

            <a
              href="#contact"
              className="btn-outline-3d interactive"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
              id="cta-contact-me"
            >
              <i className="fa-regular fa-paper-plane"></i>
              <span>Contact Me</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-3d interactive"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-3d interactive"
              aria-label="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroOverlay;

