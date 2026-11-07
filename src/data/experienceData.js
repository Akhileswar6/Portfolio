export const workExperienceData = [
  {
    id: 'udr-crafts',
    role: 'Full Stack Intern',
    organization: 'Udr Crafts',
    location: 'Remote',
    period: 'July 2026 — Present',
    current: true,
    tagline: 'Delivery Partner Portal & Enterprise MERN Architecture',
    description: 'Architecting a full-stack Delivery Partner Portal leveraging the MERN stack with automated onboarding pipelines, secure role-based authentication, and responsive client interfaces.',
    responsibilities: [
      'Developed a Delivery Partner Portal using the MERN stack (MongoDB, Express.js, React.js, Node.js), implementing authentication, partner onboarding, profile management, and document upload workflows.',
      'Built RESTful APIs and secure backend services while developing responsive React interfaces, following clean architecture and Git-based collaborative development practices.'
    ],
    tech: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Authentication', 'RESTful APIs', 'Git'],
    badge: 'Current Internship',
    metrics: [
      { label: 'Architecture', value: 'Clean & Modular' },
      { label: 'Workflow', value: 'End-to-End Portal' },
      { label: 'Status', value: 'Active Intern' }
    ]
  },
  {
    id: 'infosys-springboard',
    role: 'Intern',
    organization: 'Infosys Springboard',
    location: 'Remote',
    period: 'July 2026 — September 2026',
    current: false,
    tagline: 'AI-Powered Job Portal & Automated ATS Resume Screening',
    description: 'Engineered an enterprise Job Portal with role-based recruiter and candidate dashboards, integrating an AI-driven resume parsing and ATS candidate scoring system.',
    responsibilities: [
      'Developed a full-stack Job Portal with role-based dashboards, enabling candidates to search and apply for jobs while allowing recruiters to post openings, manage applications, and send email notifications.',
      'Built an AI-powered Resume Evaluation and ATS Scoring System that extracts key skills, analyzes resumes, ranks candidates, and generates recruiter-facing reports.',
      'Architected RESTful APIs and optimized database schemas for job postings, application tracking, AI-based resume screening, and personalized job recommendations.'
    ],
    tech: ['Full Stack', 'AI Resume Evaluation', 'ATS Scoring', 'RESTful APIs', 'Database Optimization', 'Email Notifications', 'Authentication'],
    badge: 'Completed • Sept 2026',
    metrics: [
      { label: 'AI Screening', value: 'ATS Evaluation' },
      { label: 'Dashboards', value: 'Role-Based Portals' },
      { label: 'Completion', value: 'September 2026' }
    ]
  },
  {
    id: 'flyrank-ai',
    role: 'Backend AI Engineer Intern',
    organization: 'FlyRank',
    location: 'Tirupati, India • Remote',
    period: 'July 2026 — August 2026',
    current: false,
    tagline: 'FastAPI Microservices, Supabase Auth & Multi-Platform Webhook Engine',
    description: 'Constructed production FastAPI microservices secured with Supabase Auth/JWT, alongside an adapter-patterned multi-platform publishing engine containerized with Docker.',
    responsibilities: [
      'Developed RESTful APIs using FastAPI with CRUD operations, input validation, standardized HTTP responses, and interactive Swagger/OpenAPI documentation, secured with Supabase Auth and JWT via reusable middleware for protected routes and session management.',
      'Designed a multi-platform publishing system using the Adapter Pattern, enabling encrypted OAuth token storage, rate-limit handling, and automatic retry mechanisms.',
      'Containerized the application using Docker and built a reliable job scheduling system with webhook processing for automated content publishing.'
    ],
    tech: ['FastAPI', 'Python', 'Supabase Auth', 'JWT', 'Docker', 'Adapter Pattern', 'Webhooks', 'Swagger/OpenAPI', 'OAuth'],
    badge: 'Completed Internship',
    metrics: [
      { label: 'API Security', value: 'JWT & Supabase' },
      { label: 'Architecture', value: 'Adapter Pattern' },
      { label: 'Deployment', value: 'Docker Container' }
    ]
  },
  {
    id: 'gssoc-contributor',
    role: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code (GSSoC 2026)',
    location: 'Global Open Source Community',
    period: 'May 2026 — August 2026',
    current: false,
    tagline: 'High-Impact Community Engineering & Component Architecture',
    description: 'Selected as an official open-source contributor among thousands of applicants to build, test, and refine high-impact community repositories.',
    responsibilities: [
      'Submitted reviewed pull requests addressing performance bottlenecks and accessibility issues in React/Node codebases.',
      'Mentored emerging contributors on Git collaboration, atomic pull requests, and CI/CD best practices.',
      'Refactored frontend component libraries to achieve strict WCAG AA compliance standards.'
    ],
    tech: ['React.js', 'JavaScript', 'Git', 'GitHub Actions', 'Open Source', 'Code Review'],
    badge: 'Selected Contributor',
    metrics: [
      { label: 'PR Review', value: '100% Accepted' },
      { label: 'Program Reach', value: 'Global GSSoC' },
      { label: 'Accessibility', value: 'WCAG AA Level' }
    ]
  }
];

export const educationData = [
  {
    id: 'svce-btech',
    degree: 'B.Tech in Cyber Security',
    field: 'Computer Science and Engineering(Cyber Security)',
    specialization: 'Cyber Security',
    institution: 'Sri Venkateswara College of Engineering',
    location: 'Tirupati, India',
    period: 'Aug 2024 — May 2027 (Expected)',
    current: true,
    scoreType: 'CGPA Distinction',
    score: '9.13 / 10.0',
    description: 'Advanced collegiate curriculum specializing in defensive systems, cryptographic protocols, distributed architecture, and resilient web infrastructure.',
    highlights: [
      'Maintained consistent semester academic distinction with a 9.13 Cumulative Grade Point Average.',
      'Conducted vulnerability testing simulations, web exploitation labs, and threat model analysis.',
      'Active leadership in regional technical symposiums, code challenges, and cyber defense workshops.'
    ],
    coursework: [
      'Application Security',
      'Network Cryptography',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems & Linux Kernel',
      'Cloud Architecture'
    ]
  },
  {
    id: 'kvsrit-diploma',
    degree: 'Diploma in Computer Engineering',
    field: 'Computer Engineering',
    specialization: 'Computer Engineering',
    institution: 'Dr. K.V. Subba Reddy Institute of Technology',
    location: 'Kurnool, India',
    period: 'Nov 2021 — May 2024',
    current: false,
    scoreType: 'Aggregate Percentage',
    score: '82.44%',
    description: 'Rigorous 3-year foundational technical training spanning low-level computing, object-oriented systems, and relational databases.',
    highlights: [
      'Graduated with 82.44% aggregate distinction across all academic semesters.',
      'Developed student record management capstone platforms with role-based security access.',
      'Mastered core computing fundamentals, algorithmic thinking, and relational SQL design.'
    ],
    coursework: [
      'C / C++ Programming',
      'Java Enterprise Foundations',
      'Relational Database (SQL)',
      'Computer Architecture',
      'Web Technology Basics',
      'Software Engineering Principles'
    ]
  }
];

export const certificationsData = [
  {
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    year: '2025',
    image: './assets/Certifications/Github Foundations_page-0001.jpg',
    pdf: './assets/Certifications/Github Foundations.pdf',
    skills: 'Version Control, Actions, Collaboration, Enterprise'
  },
  {
    title: 'Oracle Cloud Infrastructure (OCI)',
    issuer: 'Oracle',
    year: '2025',
    image: './assets/Certifications/OCI Foundations_page-0001.jpg',
    pdf: './assets/Certifications/OCI Foundations.pdf',
    skills: 'Cloud Architecture, Identity, Virtual Networking, Storage'
  },
  {
    title: 'Cyber Security',
    issuer: 'Cisco Networking Academy',
    year: '2022',
    image: './assets/Certifications/Cisco-Cyber Security_page-0001.jpg',
    pdf: './assets/Certifications/Cisco-Cyber Security.pdf',
    skills: 'Threat Analysis, Cryptography, Defense-in-Depth, Compliance'
  },
  {
    title: 'Python Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    image: './assets/Certifications/Cisco-Python Essentials1_page-0001.jpg',
    pdf: './assets/Certifications/Cisco-Python Essentials1.pdf',
    skills: 'OOP, File Processing, Data Structures, Modular Code'
  }
];

// Backward compatibility export
export const experienceData = [
  ...workExperienceData,
  ...educationData
];
