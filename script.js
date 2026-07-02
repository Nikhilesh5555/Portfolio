/* ============================================
   PREMIUM PORTFOLIO - SCRIPT.JS
   R Nethra Nikhilesh | Full Stack Java Developer
   ============================================ */

'use strict';

/* ─── DOM REFERENCES ────────────────────────── */
const loadingScreen   = document.getElementById('loading-screen');
const scrollProgress  = document.getElementById('scroll-progress');
const navbar          = document.getElementById('navbar');
const hamburger       = document.getElementById('hamburger');
const navLinks        = document.getElementById('nav-links');
const backToTop       = document.getElementById('back-to-top');
const cursor          = document.getElementById('cursor');
const cursorFollower  = document.getElementById('cursor-follower');
const contactForm     = document.getElementById('contact-form');
const formSuccess     = document.getElementById('form-success');
const typedEl         = document.getElementById('typed-text');
const footerYear      = document.getElementById('footer-year');
const canvas          = document.getElementById('particles-canvas');
const ctx             = canvas.getContext('2d');
const certificateModal = document.getElementById('certificate-modal');
const certificateIframe = document.getElementById('certificate-iframe');
const certificateImage = document.getElementById('certificate-image');
const certificateFallback = document.getElementById('certificate-modal-fallback');
const certificateOpenLink = document.getElementById('certificate-open-link');
const certificateCloseBtn = document.getElementById('certificate-modal-close');
const certificateBackdrop = document.querySelector('[data-close-modal]');
let activeCertificateUrl = '';

/* ═══════════════════════════════════════════
   1. LOADING SCREEN
═══════════════════════════════════════════ */
const loaderCircle = document.querySelector('.loader-circle');
const loaderPct = document.getElementById('loader-pct');
const loaderText = document.getElementById('loader-text');

const loaderMessages = [
  'Initializing workspace...',
  'Connecting database...',
  'Loading Java core...',
  'Styling premium UI...',
  'System ready!'
];

window.addEventListener('load', () => {
  let progress = 0;
  const totalDuration = 1800; // Total duration in ms
  const intervalTime = 20; // Update step in ms
  const baseStep = 100 / (totalDuration / intervalTime);
  
  const timer = setInterval(() => {
    // Add minor randomized steps to make it feel organic
    progress += baseStep + (Math.random() * 1.5 - 0.4);
    if (progress >= 100) {
      progress = 100;
      clearInterval(timer);
      finishLoading();
    }
    
    const displayPct = Math.floor(progress);
    if (loaderPct) loaderPct.textContent = displayPct + '%';
    
    // Update SVG stroke-dashoffset
    if (loaderCircle) {
      const circumference = 283;
      const offset = circumference - (progress / 100) * circumference;
      loaderCircle.style.strokeDashoffset = offset;
    }
    
    // Cycle messages
    const msgIdx = Math.min(Math.floor(progress / 20), loaderMessages.length - 1);
    if (loaderText) loaderText.textContent = loaderMessages[msgIdx];
  }, intervalTime);

  function finishLoading() {
    setTimeout(() => {
      if (loadingScreen) loadingScreen.classList.add('hidden');
      document.body.style.overflow = 'auto';
      // Trigger initial animations
      triggerReveal();
    }, 400);
  }
});

/* ═══════════════════════════════════════════
   2. CUSTOM CURSOR
═══════════════════════════════════════════ */
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;
let lastFollowerX = 0, lastFollowerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Smooth dual-lerp follower (clean professional style)
function animateFollower() {
  // Move primary cursor dot (faster response)
  cursorX += (mouseX - cursorX) * 0.3;
  cursorY += (mouseY - cursorY) * 0.3;
  if (cursor) {
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
  }

  // Smooth outer ring (slower spring response)
  followerX += (mouseX - followerX) * 0.08;
  followerY += (mouseY - followerY) * 0.08;

  if (cursorFollower) {
    cursorFollower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
  }

  requestAnimationFrame(animateFollower);
}
animateFollower();

// Hover effects on interactive elements (using event delegation for dynamic elements)
document.addEventListener('mouseover', (e) => {
  const hoverable = e.target.closest('a, button, .skill-card, .project-card, .achievement-card, .cert-card, .timeline-card, .stat-card, .contrib-cell');
  if (hoverable) {
    if (cursor) cursor.classList.add('hover');
    if (cursorFollower) cursorFollower.classList.add('hover');
  }
});
document.addEventListener('mouseout', (e) => {
  const hoverable = e.target.closest('a, button, .skill-card, .project-card, .achievement-card, .cert-card, .timeline-card, .stat-card, .contrib-cell');
  if (hoverable) {
    if (cursor) cursor.classList.remove('hover');
    if (cursorFollower) cursorFollower.classList.remove('hover');
  }
});

/* ═══════════════════════════════════════════
   3. PARTICLES BACKGROUND
═══════════════════════════════════════════ */
let particles = [];
const PARTICLE_COUNT = 40;

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x     = Math.random() * canvas.width;
    this.y     = Math.random() * canvas.height;
    this.r     = Math.random() * 2 + 0.8;
    this.alpha = Math.random() * 0.35 + 0.05;
    this.baseVx = (Math.random() - 0.5) * 0.25;
    this.baseVy = (Math.random() - 0.5) * 0.25;
    this.vx    = this.baseVx;
    this.vy    = this.baseVy;
  }
  update() {
    // Slow, ambient floating dust - no active repulsion forces
    this.x += this.vx * 0.4;
    this.y += this.vy * 0.4;
    
    // Bounds wrap
    if (this.x < -20) this.x = canvas.width + 20;
    if (this.x > canvas.width + 20) this.x = -20;
    if (this.y < -20) this.y = canvas.height + 20;
    if (this.y > canvas.height + 20) this.y = -20;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(112, 200, 255, ${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

// Draw connections between nearby particles and mouse
function drawConnections() {
  const mouseConnectionRadius = 160;
  const particleConnectionRadius = 110;
  
  for (let i = 0; i < particles.length; i++) {
    // Draw connection between particle and mouse cursor
    const mdx = particles[i].x - mouseX;
    const mdy = particles[i].y - mouseY;
    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
    if (mdist < mouseConnectionRadius) {
      const opacity = (1 - mdist / mouseConnectionRadius) * 0.12;
      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(mouseX, mouseY);
ctx.strokeStyle = `rgba(112, 200, 255, ${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
    
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < particleConnectionRadius) {
        const opacity = (1 - dist / particleConnectionRadius) * 0.12;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(112, 200, 255, ${opacity})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ═══════════════════════════════════════════
   4. TYPING ANIMATION
═══════════════════════════════════════════ */
const phrases = [
  'Full Stack Java Developer',
  'Java Developer',
  'Frontend Developer',
  'DSA Enthusiast'
];
let phraseIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
    setTimeout(typeLoop, 70);
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(typeLoop, 400);
      return;
    }
    setTimeout(typeLoop, 35);
  }
}
setTimeout(typeLoop, 2500);

/* ═══════════════════════════════════════════
   5. NAVBAR SCROLL BEHAVIOR
═══════════════════════════════════════════ */
function handleNavScroll() {
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
}
window.addEventListener('scroll', handleNavScroll, { passive: true });

/* ═══════════════════════════════════════════
   6. SCROLL PROGRESS INDICATOR
═══════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = pct + '%';
}, { passive: true });

/* ═══════════════════════════════════════════
   7. ACTIVE NAV LINK (INTERSECTION)
═══════════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + entry.target.id) {
          a.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.35, rootMargin: '-80px 0px -35% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ═══════════════════════════════════════════
   8. SCROLL REVEAL ANIMATIONS
═══════════════════════════════════════════ */
function triggerReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Trigger skill bars
        entry.target.querySelectorAll('.skill-progress').forEach(bar => {
          bar.style.width = bar.dataset.progress + '%';
        });
        // Trigger language bars
        entry.target.querySelectorAll('.lang-level[data-width]').forEach(bar => {
          bar.style.width = bar.dataset.width;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '-60px 0px 0px 0px' });

  reveals.forEach(el => observer.observe(el));
}
triggerReveal();

// Also observe language bars separately (inside about-right)
const langObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.lang-level[data-width]').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
      langObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.languages-section').forEach(s => langObserver.observe(s));

// Skill bars via intersection
const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-progress').forEach(bar => {
        setTimeout(() => { bar.style.width = bar.dataset.progress + '%'; }, 200);
      });
      skillBarObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skills-grid').forEach(g => skillBarObserver.observe(g));

/* ═══════════════════════════════════════════
   9. COUNTER ANIMATION (STATS)
═══════════════════════════════════════════ */
function animateCount(el) {
  const target   = parseFloat(el.dataset.target);
  const isDecimal = el.dataset.decimal === 'true';
  const suffix   = el.dataset.suffix || '';
  const duration = 2000;
  const start    = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value  = target * eased;
    el.textContent = isDecimal
      ? value.toFixed(2) + suffix
      : Math.floor(value) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = isDecimal ? target.toFixed(2) + suffix : target + suffix;
  }
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number[data-target]').forEach(animateCount);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

/* ═══════════════════════════════════════════
   10. HAMBURGER MENU
═══════════════════════════════════════════ */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ═══════════════════════════════════════════
   11. BACK TO TOP BUTTON
═══════════════════════════════════════════ */
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ═══════════════════════════════════════════
   12. CERTIFICATE PREVIEW MODAL
═══════════════════════════════════════════ */
function getDrivePreviewUrl(url) {
  const match = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return url;
}

function getPreviewUrl(url) {
  return getDrivePreviewUrl(url);
}

function isImageFile(url) {
  return /\.(jpe?g|png|gif|webp|bmp|svg)(\?|$)/i.test(url);
}

function openCertificateModal(url, title) {
  if (!certificateModal || (!certificateIframe && !certificateImage)) return;

  activeCertificateUrl = url && url !== '#' ? url : '';
  if (certificateOpenLink) {
    certificateOpenLink.href = activeCertificateUrl || '#';
  }

  // Update modal title with the achievement name
  const modalTitle = document.getElementById('certificate-modal-title');
  if (modalTitle) {
    modalTitle.textContent = title ? title + ' – Certificate' : 'Certificate Preview';
  }

  if (activeCertificateUrl) {
    if (isImageFile(activeCertificateUrl)) {
      if (certificateImage) {
        certificateImage.src = activeCertificateUrl;
        certificateImage.style.display = 'block';
      }
      if (certificateIframe) {
        certificateIframe.style.display = 'none';
        certificateIframe.src = '';
      }
    } else {
      if (certificateImage) {
        certificateImage.style.display = 'none';
        certificateImage.src = '';
      }
      if (certificateIframe) {
        certificateIframe.src = getPreviewUrl(activeCertificateUrl);
        certificateIframe.style.display = 'block';
      }
    }
    if (certificateFallback) {
      certificateFallback.style.display = 'none';
    }
  } else {
    if (certificateIframe) {
      certificateIframe.src = '';
      certificateIframe.style.display = 'none';
    }
    if (certificateImage) {
      certificateImage.src = '';
      certificateImage.style.display = 'none';
    }
    if (certificateFallback) {
      certificateFallback.style.display = 'flex';
    }
  }

  certificateModal.style.display = 'flex';
  certificateModal.style.opacity = '1';
  certificateModal.style.visibility = 'visible';
  certificateModal.style.pointerEvents = 'auto';
  certificateModal.classList.add('open');
  certificateModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function showCertificateFallback() {
  if (!certificateFallback) return;
  if (certificateIframe) certificateIframe.style.display = 'none';
  if (certificateImage) certificateImage.style.display = 'none';
  certificateFallback.style.display = 'flex';
}

function closeCertificateModal() {
  if (!certificateModal) return;

  certificateModal.classList.remove('open');
  certificateModal.style.opacity = '0';
  certificateModal.style.visibility = 'hidden';
  certificateModal.style.pointerEvents = 'none';
  certificateModal.setAttribute('aria-hidden', 'true');
  if (certificateIframe) {
    certificateIframe.src = '';
    certificateIframe.style.display = 'block';
  }
  if (certificateImage) {
    certificateImage.src = '';
    certificateImage.style.display = 'none';
  }
  if (certificateFallback) certificateFallback.style.display = 'none';
  document.body.style.overflow = '';
}


if (certificateIframe) {
  certificateIframe.addEventListener('error', () => {
    showCertificateFallback();
  });

  certificateIframe.addEventListener('load', () => {
    if (certificateIframe.src && certificateIframe.src.includes('/preview') && certificateIframe.contentDocument?.body?.innerText?.includes('Sorry')) {
      showCertificateFallback();
    }
  });
}

if (certificateCloseBtn) certificateCloseBtn.addEventListener('click', closeCertificateModal);
if (certificateBackdrop) certificateBackdrop.addEventListener('click', closeCertificateModal);
if (certificateOpenLink) {
  certificateOpenLink.addEventListener('click', () => {
    if (activeCertificateUrl) {
      window.open(activeCertificateUrl, '_blank', 'noopener,noreferrer');
    }
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCertificateModal();
});

/* ═══════════════════════════════════════════
   13. CONTACT FORM
═══════════════════════════════════════════ */
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name    = document.getElementById('contact-name').value.trim();
  const email   = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  const submitBtn = document.getElementById('contact-submit');
  submitBtn.textContent = '⏳ Sending...';
  submitBtn.disabled = true;

  // Simulate send
  setTimeout(() => {
    formSuccess.style.display = 'block';
    contactForm.reset();
    submitBtn.textContent = '✅ Sent!';
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i>&nbsp; Send Message';
      submitBtn.disabled = false;
      formSuccess.style.display = 'none';
    }, 4000);
  }, 1500);
});

/* ═══════════════════════════════════════════
   14. SMOOTH SCROLL FOR NAV LINKS
═══════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ═══════════════════════════════════════════
   15. MOUSE PARALLAX ON HERO
═══════════════════════════════════════════ */
const heroSection = document.getElementById('hero');
if (heroSection) {
  heroSection.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = heroSection.getBoundingClientRect();
    const x = ((e.clientX - left) / width  - 0.5) * 12;
    const y = ((e.clientY - top)  / height - 0.5) * 12;
    const profileFrame = document.querySelector('.profile-frame');
    const rings = document.querySelector('.hero-image-bg-rings');
    if (profileFrame) profileFrame.style.transform = `translateY(0) rotateX(${-y * 0.3}deg) rotateY(${x * 0.3}deg)`;
    if (rings) rings.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
  });
  heroSection.addEventListener('mouseleave', () => {
    const profileFrame = document.querySelector('.profile-frame');
    const rings = document.querySelector('.hero-image-bg-rings');
    if (profileFrame) profileFrame.style.transform = '';
    if (rings) rings.style.transform = '';
  });
}



/* ═══════════════════════════════════════════
   17. STAGGER ANIMATION FOR GRID ITEMS
═══════════════════════════════════════════ */
document.querySelectorAll('.achievements-grid .achievement-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll('.skills-grid .skill-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

/* ═══════════════════════════════════════════
   18. PROFILE IMAGE FALLBACK
═══════════════════════════════════════════ */
const profileImg = document.getElementById('profile-photo');
if (profileImg) {
  profileImg.addEventListener('error', () => {
    // Replace with gradient avatar if image fails
    profileImg.style.display = 'none';
    const parent = profileImg.parentElement;
    parent.style.background = 'linear-gradient(135deg, #ca4a2f, #f3c46b)';
    const initials = document.createElement('div');
    initials.textContent = 'RNN';
    initials.style.cssText = `
      position: absolute; inset: 0; display: flex; align-items: center;
      justify-content: center; font-size: 4rem; font-weight: 900;
      color: white; letter-spacing: -2px; font-family: 'Outfit', sans-serif;
    `;
    parent.appendChild(initials);
  });
}

/* ═══════════════════════════════════════════
   19. MINIMALIST CLICK RING EFFECT
   ═══════════════════════════════════════════ */
document.addEventListener('mousedown', () => {
  if (cursorFollower) {
    cursorFollower.style.width = '28px';
    cursorFollower.style.height = '28px';
    cursorFollower.style.borderColor = 'var(--accent-light)';
    cursorFollower.style.background = 'rgba(112, 200, 255, 0.16)';
  }
});

document.addEventListener('mouseup', () => {
  if (cursorFollower) {
    cursorFollower.style.width = '';
    cursorFollower.style.height = '';
    cursorFollower.style.borderColor = '';
    cursorFollower.style.background = '';
  }
});

/* ═══════════════════════════════════════════
   20. SCROLL-TRIGGERED SECTION GLOW
═══════════════════════════════════════════ */
const glowObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.setProperty('--section-glow', '1');
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('section').forEach(s => glowObserver.observe(s));

/* ═══════════════════════════════════════════
   21. PREVENT BODY SCROLL DURING LOAD
   ═══════════════════════════════════════════ */
document.body.style.overflow = 'hidden';
// Released in loading screen callback above

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

console.log('%c🚀 R Nethra Nikhilesh Portfolio', 'color:#f3c46b;font-size:18px;font-weight:800;');
console.log('%cFull Stack Java Developer | SRMIST CSE | CGPA: 9.18', 'color:#f3c46b;font-size:12px;');
console.log('%cGitHub: https://github.com/Nikhilesh5555', 'color:#f3c46b;font-size:11px;');
