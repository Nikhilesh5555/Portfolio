import React from 'react';
import { motion } from 'framer-motion';
import { personal, languages } from '../data/portfolio.js';
import './SectionStyles.css';

const AboutOverlay = () => {
  return (
    <section id="about" className="portfolio-section" aria-label="About R Nethra Nikhilesh">
      <div className="section-container">
        <div className="section-tag">
          <i className="fa-regular fa-user" style={{ fontSize: '0.75rem' }}></i>
          <span>About Me</span>
        </div>
        <h2 className="section-title">
          Engineering Impact &amp; <span className="highlight">Solving Real Problems</span>
        </h2>
        <p className="section-subtitle">
          Computer science engineer blending rigorous software engineering fundamentals with applied machine learning and entrepreneurial drive.
        </p>

        <div className="about-grid">
          <motion.div
            className="about-photo-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-photo-card glass">
              <img src="/profile.png" alt={`${personal.name} profile`} />
              <div className="about-badge-floating">
                <div className="cgpa-score">{personal.cgpa}</div>
                <div className="cgpa-tag">CGPA · SRMIST CSE</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ color: '#cbd5e1', lineHeight: 1.75, fontSize: '1.02rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {personal.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="about-info-pills">
              <div className="info-pill">
                <div className="info-pill-label">University</div>
                <div className="info-pill-val">{personal.university}</div>
              </div>
              <div className="info-pill">
                <div className="info-pill-label">Degree</div>
                <div className="info-pill-val">{personal.degree}</div>
              </div>
              <div className="info-pill">
                <div className="info-pill-label">Graduation Batch</div>
                <div className="info-pill-val">{personal.batch}</div>
              </div>
              <div className="info-pill">
                <div className="info-pill-label">Availability</div>
                <div className="info-pill-val" style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span className="live-indicator-dot"></span>
                  <span>{personal.status}</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.85rem', fontWeight: 600 }}>
                Spoken &amp; Written Languages
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem' }}>
                {languages.map((lang, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.7rem 0.95rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                      <span style={{ color: '#f1f5f9', fontWeight: 500 }}>{lang.name}</span>
                      <span style={{ color: '#c4b5fd', fontSize: '0.78rem' }}>{lang.label}</span>
                    </div>
                    <div style={{ height: '3px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: `${lang.level}%`, height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #34d399)' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverlay;

