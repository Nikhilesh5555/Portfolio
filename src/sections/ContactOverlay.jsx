import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/portfolio.js';
import './SectionStyles.css';

const ContactOverlay = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSent(true);
  };

  return (
    <section id="contact" className="portfolio-section" style={{ paddingBottom: '3rem' }} aria-label="Contact Information">
      <div className="section-container">
        <div className="section-tag">
          <i className="fa-regular fa-paper-plane" style={{ fontSize: '0.75rem' }}></i>
          <span>Get In Touch</span>
        </div>
        <h2 className="section-title">
          Let's <span className="highlight">Connect</span>
        </h2>
        <p className="section-subtitle">
          Open to software engineering and machine learning internships, technical roles, campus placements, and collaborative ventures.
        </p>

        <div className="contact-grid-3d">
          <motion.div
            className="contact-card-glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f8fafc', letterSpacing: '-0.02em' }}>
              Have an opportunity or project?
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem' }}>
              Whether you are hiring for an engineering role, looking for a developer with machine learning and full-stack expertise, or discussing technical projects, I'd love to connect.
            </p>

            <div className="contact-detail-row">
              <div className="contact-icon-box">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <div className="contact-lbl">Direct Email</div>
                <a
                  href={`mailto:${personal.email}`}
                  className="contact-val interactive"
                  style={{ color: '#c4b5fd' }}
                  aria-label={`Send email to ${personal.email}`}
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon-box">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <div className="contact-lbl">Phone</div>
                <a
                  href={`tel:${personal.phone}`}
                  className="contact-val interactive"
                  aria-label={`Call ${personal.phone}`}
                >
                  {personal.phone}
                </a>
              </div>
            </div>

            <div className="contact-detail-row">
              <div className="contact-icon-box">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <div className="contact-lbl">Location</div>
                <div className="contact-val">{personal.location}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.25rem', flexWrap: 'wrap' }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-3d interactive"
                style={{ padding: '0.65rem 1.35rem', fontSize: '0.9rem' }}
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
                style={{ padding: '0.65rem 1.35rem', fontSize: '0.9rem' }}
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-card-glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {formSent ? (
              <div style={{ textAlign: 'center', padding: '3.5rem 1.5rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem', color: '#8b5cf6' }}>
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#f8fafc', marginBottom: '0.5rem' }}>
                  Message Received!
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>
                  Thank you for reaching out. I'll get back to you promptly at <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  className="btn-outline-3d interactive"
                  style={{ marginTop: '1.75rem' }}
                  onClick={() => {
                    setFormSent(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Contact Form">
                <div className="form-group-3d">
                  <label htmlFor="contact-name" className="form-label-3d">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="form-input-3d"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group-3d">
                  <label htmlFor="contact-email" className="form-label-3d">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="form-input-3d"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group-3d">
                  <label htmlFor="contact-subject" className="form-label-3d">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Internship / Full-time Opportunity / Project"
                    className="form-input-3d"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group-3d">
                  <label htmlFor="contact-message" className="form-label-3d">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows="4"
                    placeholder="Briefly describe your requirements or inquiry..."
                    className="form-input-3d"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary-3d interactive"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id="submit-contact-btn"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <footer className="portfolio-footer">
          <div className="footer-logo">
            {personal.initials}
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} {personal.name} · Built with React &amp; Three.js · All rights reserved.
          </div>
          <div className="footer-socials" aria-label="Social links">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link interactive"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link interactive"
              aria-label="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="footer-social-link interactive"
              aria-label="Send direct email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactOverlay;

