// ─── PORTFOLIO DATA ─────────────────────────────────────────────────────────
// Single source of truth. Edit here to update any section of the site.

export const personal = {
  name: 'R. Nethra Nikhilesh',
  nickname: 'Nikhil',
  initials: 'RN²',
  tagline: 'Crafting Code & Creating Impact',
  roles: [
    'Full-Stack Developer',
    'Machine Learning Engineer',
    'Co-Founder @ AgroScope',
    'CSE @ SRMIST',
  ],
  bio: [
    'I\'m a B.Tech Computer Science Engineering student at SRM Institute of Science and Technology (Ramapuram) with a CGPA of 9.18 — graduating in 2027.',
    'Co-founder of AgroScope, an AI-powered agricultural waste management marketplace incubated by SRM\'s DEI cell. I build scalable full-stack web applications and machine learning systems that address real-world challenges.',
    'Actively seeking software engineering and machine learning internships, technical roles, and high-impact product teams.',
  ],
  status: 'Open to Opportunities',
  location: 'Chennai, Tamil Nadu, India',
  email: 'rn6591@srmist.edu.in',
  phone: '+91 9392874400',
  github: 'https://github.com/Nikhilesh5555',
  linkedin: 'https://www.linkedin.com/in/nethra-nikhilesh-r-1ba092309',
  resume: '/resume.html',
  university: 'SRM Institute of Science and Technology',
  degree: 'B.Tech – Computer Science & Engineering',
  batch: '2023 – 2027',
  cgpa: '9.18',
};

export const stats = [
  { value: '9.18', label: 'CGPA', suffix: '', decimal: true },
  { value: '10',   label: 'Projects Built', suffix: '+', decimal: false },
  { value: '3',    label: 'Certifications', suffix: '+', decimal: false },
  { value: '4',    label: 'Hackathon Wins & Accolades', suffix: '', decimal: false },
];

// Technical Fluency (Java removed; Python, REST APIs, Streamlit, Scikit-learn added)
export const skills = [
  // Languages
  { name: 'Python', pct: 92, cat: 'Languages', icon: 'fa-brands fa-python', level: 'Advanced' },
  { name: 'JavaScript', pct: 88, cat: 'Languages', icon: 'fa-brands fa-js', level: 'Advanced' },
  { name: 'HTML5', pct: 94, cat: 'Languages', icon: 'fa-brands fa-html5', level: 'Expert' },
  { name: 'CSS3', pct: 90, cat: 'Languages', icon: 'fa-brands fa-css3-alt', level: 'Advanced' },

  // AI & Machine Learning
  { name: 'Machine Learning', pct: 86, cat: 'AI & ML', icon: 'fa-solid fa-brain', level: 'Proficient' },
  { name: 'Scikit-learn', pct: 85, cat: 'AI & ML', icon: 'fa-solid fa-chart-line', level: 'Proficient' },
  { name: 'Streamlit', pct: 88, cat: 'AI & ML', icon: 'fa-solid fa-bolt', level: 'Advanced' },
  { name: 'Pandas', pct: 86, cat: 'AI & ML', icon: 'fa-solid fa-table', level: 'Proficient' },

  // Web & Frameworks
  { name: 'React.js', pct: 84, cat: 'Frameworks', icon: 'fa-brands fa-react', level: 'Proficient' },
  { name: 'REST APIs', pct: 88, cat: 'Frameworks', icon: 'fa-solid fa-network-wired', level: 'Advanced' },
  { name: 'Flask', pct: 75, cat: 'Frameworks', icon: 'fa-solid fa-server', level: 'Intermediate' },
  { name: 'Frontend Dev', pct: 90, cat: 'Frameworks', icon: 'fa-solid fa-laptop-code', level: 'Advanced' },

  // Core CS & Databases
  { name: 'Data Structures and Algorithms', pct: 88, cat: 'Core CS', icon: 'fa-solid fa-diagram-project', level: 'Advanced' },
  { name: 'Object-Oriented Programming', pct: 90, cat: 'Core CS', icon: 'fa-solid fa-cubes', level: 'Advanced' },
  { name: 'DBMS', pct: 85, cat: 'Core CS', icon: 'fa-solid fa-database', level: 'Proficient' },
  { name: 'PostgreSQL', pct: 82, cat: 'Core CS', icon: 'fa-solid fa-server', level: 'Proficient' },

  // Tools & Platforms
  { name: 'Git', pct: 88, cat: 'Tools', icon: 'fa-brands fa-git-alt', level: 'Advanced' },
  { name: 'GitHub', pct: 90, cat: 'Tools', icon: 'fa-brands fa-github', level: 'Advanced' },
];

export const skillCategories = [
  'All',
  'Languages',
  'AI & ML',
  'Frameworks',
  'Core CS',
  'Tools',
];

export const projects = [
  {
    id: 'cini-movie-recommendation',
    number: '01',
    title: 'CINI – Movie Recommendation System',
    subtitle: 'Content-Based Machine Learning Recommendation Engine',
    description:
      'CINI is a content-based movie recommendation web application that recommends movies similar to a movie selected by the user. It analyzes movie genres and converts textual genre information into numerical features using TF-IDF. Cosine similarity is then used to calculate similarity between movies and identify relevant recommendations. The application uses a movie dataset processed with Pandas and Scikit-learn and provides an interactive user interface built with Streamlit.',
    role: 'ML Engineer & Developer',
    badge: 'Machine Learning · Streamlit Live',
    tech: [
      'Python',
      'Machine Learning',
      'Pandas',
      'Scikit-learn',
      'TF-IDF Vectorization',
      'Cosine Similarity',
      'Streamlit',
      'Git & GitHub',
      'Streamlit Community Cloud',
    ],
    github: 'https://github.com/Nikhilesh5555/movie-recommendation-system',
    demo: 'https://movie-recommendation-system-fzqsm47cdo5keubvuyjmrp.streamlit.app/',
    flagship: true,
    visualType: 'cinema',
    accent: '#8b5cf6', // refined violet
    accentSecondary: '#6366f1', // indigo
  },
  {
    id: 'agroscope',
    number: '02',
    title: 'AgroScope',
    subtitle: 'Smart Agricultural Waste Management Platform',
    description:
      'AI-powered agricultural waste management marketplace that uses machine learning and computer vision to analyze agricultural waste, connect farmers with buyers, and promote sustainable farming. Incubated by SRM\'s DEI cell.',
    role: 'Co-Founder & Full-Stack Developer',
    badge: 'Co-Founder · SRM DEI Incubated',
    tech: [
      'Python',
      'Machine Learning',
      'Computer Vision',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Leaflet.js',
      'JWT Auth',
    ],
    github: 'https://github.com/Nikhilesh5555',
    demo: 'https://www.agro-scope.online/home',
    flagship: true,
    visualType: 'leaf',
    accent: '#10b981', // emerald
    accentSecondary: '#8b5cf6', // violet secondary
  },
  {
    id: 'smart-crop',
    number: '03',
    title: 'Smart Crop Advisory System',
    subtitle: 'AI-Assisted Agricultural Decision Tool',
    description:
      'Smart agricultural platform providing AI-driven crop recommendations using real-time weather data and live market insights to support better, data-informed farming decisions.',
    role: 'Lead Developer',
    badge: 'AI · Agricultural Tech',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'Weather API', 'Market API', 'AIML'],
    github: 'https://github.com/Nikhilesh5555',
    demo: '',
    flagship: false,
    visualType: 'crop',
    accent: '#06b6d4', // cyan
    accentSecondary: '#8b5cf6', // violet
  },
];

export const achievements = [
  {
    id: 'hackmind',
    icon: '🏆',
    title: 'Hack Mind Winner',
    description: 'Winner of Hack Mind competition for innovative API-based solution development.',
    badge: '🥇 Winner',
    badgeClass: 'winner',
    verifyUrl: '/HACKMIND.jpg',
    verifyType: 'image',
  },
  {
    id: 'redhat',
    icon: '🏆',
    title: 'RED-HAT Winner',
    description: 'Winner at RED-HAT event showcasing technical problem-solving and systems thinking.',
    badge: '🥇 Winner',
    badgeClass: 'winner',
    verifyUrl: 'https://drive.google.com/file/d/1y3hH6AJeG6-HGsgbRZ8q62x2TSWwCR1v/view?usp=drive_link',
    verifyType: 'link',
  },
  {
    id: 'sih',
    icon: '⭐',
    title: 'SIH Qualifier',
    description: 'Qualified for Smart India Hackathon — national-level innovation challenge.',
    badge: '✅ Qualified',
    badgeClass: 'qualified',
    verifyUrl: 'https://drive.google.com/file/d/1PYlSaRfcgXJPyYq1Q8y7He7fYK3MHbE_/view?usp=drive_link',
    verifyType: 'link',
  },
  {
    id: 'innohack',
    icon: '⭐',
    title: 'INNOHACK Participant',
    description: 'Participated in AI and Machine Learning innovation challenge.',
    badge: '💡 Participant',
    badgeClass: 'participant',
    verifyUrl: '/innohack-certificate.pdf',
    verifyType: 'pdf',
  },
];

export const education = [
  {
    year: '2023 – 2027',
    degree: 'B.Tech – Computer Science & Engineering',
    school: 'SRM Institute of Science and Technology',
    score: 'CGPA: 9.18 / 10.0',
    current: true,
  },
  {
    year: 'Intermediate',
    degree: 'Class XII – MPC',
    school: 'Sri Chaitanya Academy Junior College',
    score: 'Percentage: 87.4%',
    current: false,
  },
  {
    year: 'School',
    degree: 'Class X',
    school: 'RK Model School',
    score: 'Percentage: 100% 🎉',
    current: false,
  },
];

export const certifications = [
  { icon: '☕', name: 'Java Programming', issuer: 'Udemy • Verified Certificate' },
  { icon: '🌐', name: 'HTML5, Python & Flask Framework', issuer: 'Udemy • Verified Certificate' },
  { icon: '🧮', name: 'Design & Analysis of Algorithms', issuer: 'Simplilearn • Verified Certificate' },
];

export const languages = [
  { name: 'English', level: 90, label: 'Professional' },
  { name: 'Tamil',   level: 100, label: 'Native' },
  { name: 'Telugu',  level: 85, label: 'Fluent' },
  { name: 'Hindi',   level: 55, label: 'Conversational' },
];

