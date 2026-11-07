export const projectsData = [
  {
    id: 'artistic-platform',
    number: '01',
    title: 'Artistic',
    subtitle: 'MERN Stack • Google OAuth',
    category: 'Full Stack & Art Platform',
    featured: true,
    year: '2026',
    description: 'An editorial-grade creative commerce and portfolio platform bridging digital creators with patrons. Built with MongoDB, Express, React, and Node.js, featuring secure OAuth authentication, dynamic artwork upload and cataloging, custom curation dashboards, and zero-latency image processing.',
    details: 'Developed specifically to solve creator monetization challenges, Artistic allows artists to publish collections with automated watermark protection, customizable gallery themes, and transparent commission checkout. Engineered with responsive performance scoring 98+ on Lighthouse.',
    image: './assets/Projects/artistic.png',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'AWS', 'Tailwind CSS', 'Google OAuth'],
    github: 'https://github.com/Akhileswar6/artistic',
    live: 'https://artistic-zeta.vercel.app/',
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Media Compression', value: '65% faster load' },
      { label: 'Security Layer', value: 'OAuth 2.0 & JWT' }
    ]
  },
  {
    id: 'udrcraft-student-info',
    number: '02',
    title: 'Student Info Manager',
    subtitle: 'Firebase Realtime • Docker',
    category: 'Cloud Application',
    featured: true,
    year: '2026',
    description: 'A cloud-native management and dispatch platform designed for high-concurrency record tracking, student data governance, and operational analytics. Containerized using Docker for reproducible deployment cycles across distributed environments.',
    details: 'Implements live reactive state sync with Firebase Realtime Database, role-based permission tiers (Admin, Faculty, Student), and comprehensive audit trails. Designed with high-density editorial dashboard views and automated data export capabilities.',
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
    description: 'A precision currency intelligence suite providing real-time exchange rates across 150+ global fiat currencies. Built with strict TypeScript typings, client-side rate caching, offline fallback mechanisms, and historical trend comparison graphs.',
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

