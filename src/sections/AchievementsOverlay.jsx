import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio.js';
import './SectionStyles.css';

const AchievementsOverlay = () => {
  return (
    <section id="achievements" className="portfolio-section" aria-label="Achievements and Accolades">
      <div className="section-container">
        <div className="section-tag">
          <i className="fa-solid fa-trophy" style={{ fontSize: '0.75rem' }}></i>
          <span>Recognition &amp; Honors</span>
        </div>
        <h2 className="section-title">
          Competitive <span className="highlight">Accolades</span>
        </h2>
        <p className="section-subtitle">
          National and institutional milestones earned through competitive hackathons, innovation challenges, and engineering sprints.
        </p>

        <div className="achievements-grid-3d">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              className="achievement-card-3d interactive"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div className="achieve-icon">{item.icon}</div>
                <h3 className="achieve-title">{item.title}</h3>
                <p className="achieve-desc">{item.description}</p>
              </div>

              <div>
                <span className={`achieve-badge ${item.badgeClass}`}>{item.badge}</span>
                <div>
                  <a
                    href={item.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="verify-btn interactive"
                    aria-label={`Verify credential for ${item.title}`}
                  >
                    <span>Verify Credential</span>
                    <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.75rem' }}></i>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsOverlay;

