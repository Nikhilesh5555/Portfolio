import React, { useEffect, useState } from 'react';

/** Simple thin progress bar at top, width reflects scroll progress */
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const pct = (scrolled / height) * 100;
      setProgress(pct);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div id="scroll-progress" style={{ width: `${progress}%` }} />;
};

export default ScrollProgress;
