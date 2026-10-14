import React, { useEffect, useState } from 'react';
import './ComponentStyles.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const handleHover = (e) => {
      if (e.target && e.target.closest('a, button, .interactive, .project-card-3d, .skill-pill, .achievement-card-3d')) {
        setHover(true);
      } else {
        setHover(false);
      }
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${isHover ? 'hover' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;
