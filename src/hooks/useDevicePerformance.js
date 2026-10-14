/**
 * Utility to detect low-end devices, mobile, and prefers-reduced-motion.
 * NOTE: This is NOT a React hook — it's a plain function safe to call anywhere.
 * Returns { lowEnd, mobile, prefersReducedMotion }.
 */
export const getDevicePerformance = () => {
  if (typeof window === 'undefined') {
    return { lowEnd: true, mobile: true, prefersReducedMotion: true };
  }

  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const lowEnd = hardwareConcurrency < 4;
  const mobile = /Mobi|Android|iPhone|iPad|iPod|Touch/i.test(navigator.userAgent) || window.innerWidth < 769;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return { lowEnd, mobile, prefersReducedMotion };
};

// Backwards-compatible alias (Scene.jsx imports this)
export const useDevicePerformance = getDevicePerformance;
