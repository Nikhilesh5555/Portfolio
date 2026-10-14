import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '../data/portfolio.js';
import './SectionStyles.css';

const SkillsOverlay = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((s) => s.cat === selectedCategory);

  return (
    <section id="skills" className="portfolio-section" aria-label="Technical Fluency">
      <div className="section-container">
        <div className="section-tag">
          <i className="fa-solid fa-code" style={{ fontSize: '0.75rem' }}></i>
          <span>Technical Fluency</span>
        </div>
        <h2 className="section-title">
          Engineering &amp; <span className="highlight">Technical Skills</span>
        </h2>
        <p className="section-subtitle">
          Core competencies spanning machine learning, modern frontend and backend frameworks, system design, and database engineering.
        </p>

        {/* Category Tabs */}
        <div className="skills-category-tabs" role="tablist" aria-label="Filter skills by category">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`category-tab-btn interactive ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="skills-grid-wrapper">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                className="skill-pill interactive"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <div className="skill-pill-top">
                  <div className="skill-pill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <span className="skill-pill-level">{skill.level}</span>
                </div>

                <div>
                  <div className="skill-pill-name">{skill.name}</div>
                  <div className="skill-pill-category-tag">{skill.cat}</div>
                </div>

                <div className="skill-pill-bar">
                  <div
                    className="skill-pill-fill"
                    style={{ width: `${skill.pct}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsOverlay;

