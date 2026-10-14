import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ComponentStyles.css';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(15);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShow(false);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 18 + 7), 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <div className="loader-content">
            <div className="loader-logo-wrapper">
              <svg className="loader-svg" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                <circle className="loader-circle-bg" cx="50" cy="50" r="45" />
                <circle
                  className="loader-circle"
                  cx="50"
                  cy="50"
                  r="45"
                  style={{
                    strokeDasharray: circumference,
                    strokeDashoffset: strokeDashoffset,
                  }}
                />
              </svg>
              <div className="loader-logo">RN²</div>
            </div>
            <div className="loader-pct">{progress}%</div>
            <p className="loader-text">Initializing 3D World & Spatial Engines...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
