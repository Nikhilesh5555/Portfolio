import React from 'react';
import { motion } from 'framer-motion';
import { stats, education, certifications } from '../data/portfolio.js';
import './SectionStyles.css';

const StatsOverlay = () => {
  return (
    <section id="stats" className="portfolio-section" aria-label="Education and Certifications">
      <div className="section-container">
        <div className="section-tag">
          <i className="fa-solid fa-graduation-cap" style={{ fontSize: '0.75rem' }}></i>
          <span>Academics &amp; Metrics</span>
        </div>
        <h2 className="section-title">
          Education &amp; <span className="highlight">Key Metrics</span>
        </h2>
        <p className="section-subtitle">
          Academic foundation in Computer Science at SRMIST coupled with continuous professional upskilling and verified credentials.
        </p>

        <div className="hero-stats-row" style={{ marginBottom: '3.5rem' }}>
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              className="hero-stat-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-stat-val" style={{ color: '#c4b5fd' }}>
                {s.value}
                {s.suffix}
              </div>
              <div className="hero-stat-lbl">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="stats-edu-grid">
          <div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <i className="fa-solid fa-book-open" style={{ color: '#8b5cf6', fontSize: '1rem' }}></i>
              <span>Academic Journey</span>
            </h3>
            <div className="timeline-3d">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item-3d">
                  <div className="timeline-dot-3d"></div>
                  <div className="timeline-year">{edu.year}</div>
                  <div className="timeline-degree">{edu.degree}</div>
                  <div className="timeline-school">{edu.school}</div>
                  <div className="timeline-score">{edu.score}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <i className="fa-solid fa-certificate" style={{ color: '#8b5cf6', fontSize: '1rem' }}></i>
              <span>Industry Certifications</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass"
                  style={{
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span style={{ fontSize: '1.8rem' }}>{cert.icon}</span>
                  <div>
                    <div style={{ fontWeight: 600, color: '#f8fafc', fontSize: '1.02rem' }}>
                      {cert.name}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                      {cert.issuer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsOverlay;

