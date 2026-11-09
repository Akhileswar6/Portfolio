export const projectsData = [
  {
    id: 'artistic-platform',
    number: '01',
    title: 'Artistic',
    subtitle: 'MERN Stack • Google OAuth',
    category: 'Full Stack & Art Platform',
    featured: true,
    year: '2026',
    description: 'Artistic is a full-stack custom art platform built using the MERN stack, designed to connect customers with artists through personalized artwork ordering and streamlined order management.',
    details: 'The platform features secure passwordless authentication using JWT, Google OAuth, and Email OTP, along with a structured 6-stage order lifecycle to manage the complete journey from order placement to delivery. It includes a role-based Admin Dashboard with interactive revenue and user analytics powered by Chart.js and Recharts, providing insights into platform performance. ',
    desc:'On the backend, I architected scalable RESTful APIs, optimized MongoDB schemas, and implemented a two-stage payment workflow with automated PDF invoice generation. AWS S3 integration enables secure storage and management of high-resolution artwork.',
    image: './assets/Projects/artistic.png',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Tailwind CSS', 'Google OAuth'],
    github: 'https://github.com/Akhileswar6/artistic',
    live: 'https://artistic-zeta.vercel.app/'
  },
  {
    id: 'udrcraft-student-info',
    number: '02',
    title: 'Student Info Manager',
    subtitle: 'Firebase Realtime • Docker',
    category: 'Cloud Application',
    featured: true,
    year: '2026',
    description: 'A responsive Student Information Management System built to simplify student record management with CRUD operations and real-time synchronization using Firebase Realtime Database. Containerized with Docker and deployed through an end-to-end DevOps workflow using Firebase Hosting.',
    details: 'Developed core CRUD functionalities to manage student information efficiently, with Firebase Realtime Database enabling instant data updates and synchronization. Containerized the application using Docker to ensure a consistent development and deployment environment.',
    desc:'Implemented an end-to-end DevOps workflow and deployed the application using Firebase Hosting, making it accessible through a live web environment.',
    image: './assets/Projects/student-info.png',
    tech: ['HTML5/Modern JS', 'Firebase DB', 'Docker', 'REST API', 'Tailwind', 'Authentication'],
    github: 'https://github.com/Akhileswar6/Student-info',
    live: 'https://info-manger-ef6c6.web.app/',
    metrics: [
      { label: 'Realtime Latency', value: '< 120ms' },
      { label: 'Containerization', value: 'Docker Alpine' },
      { label: 'Sync Consistency', value: '99.9%' }
    ]
  },
  {
    id: 'easy-exchange',
    number: '03',
    title: 'Easy Exchange',
    subtitle: 'TypeScript • Financial API Integration',
    category: 'Fintech & Application',
    featured: true,
    year: '2026',
    description: 'A real-time Currency Converter supporting 150+ global currencies, providing accurate exchange rate conversions through live API integration. Features an intuitive interface for seamless currency conversion and easy access to international exchange rates.',
    details: 'Features sub-millisecond calculation engine, intuitive multi-currency pinboard, and zero layout shift transitions. Crafted with luxury typography and minimal keyboard-first shortcuts for seamless conversion on desktop and mobile.',
    image: './assets/Projects/easy-exchange.png',
    tech: ['TypeScript', 'React.js', 'Financial APIs', 'Tailwind CSS', 'Local Caching'],
    github: 'https://github.com/Akhileswar6/Easy_Exchange',
    live: 'https://easy-exchange-iota.vercel.app/',
    metrics: [
      { label: 'Supported Currencies', value: '150+' },
      { label: 'Calculation Latency', value: 'Instant (0ms)' },
      { label: 'Offline Resiliency', value: 'IndexedDB cached' }
    ]
  },
  
];

