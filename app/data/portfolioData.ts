export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  availability: string;
}

export interface Fact {
  title: string;
  text: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  type: string;
  tagline: string;
  tags: string[];
  description: string;
  longDescription: string;
  badge?: string;
  features: string[];
  architectureNotes?: string[];
  image: string;
  cmsImage?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  company: string;
  location?: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  year: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  courses: string[];
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "Fatma Ali",
    headline: "Full-Stack Web Developer",
    contact: {
      location: "Damietta, Egypt",
      phone: "+20 10 5055 9237",
      email: "fatma.ali.mansour1@gmail.com",
      github: "https://github.com/fatmaali311",
      linkedin: "https://linkedin.com/in/fatmaali311",
      availability: "Available for new opportunities",
    } as ContactInfo,
  },

  hero: {
    eyebrow: "FULL-STACK WEB DEVELOPER",
    title: "Fatma Ali",
    description:
      "I build modern web applications, scalable APIs, and practical digital experiences.",
    primaryCta: "View My Work",
    secondaryCta: "Get In Touch",
    decorativeNote: "Build.\nConnect.\nCreate.",
    heroImage: "/images/hero_desk.png",
  },

  about: {
    section: "01. ABOUT ME",
    title: "I like understanding\nhow things work.",
    description:
      "From designing APIs and databases to building interfaces people actually use, I enjoy turning ideas into practical web applications. I’m always curious, committed to learning, and I value teamwork and clean, maintainable code.",
    facts: [
      {
        title: "Based in",
        text: "Egypt",
      },
      {
        title: "Focus",
        text: "Full-Stack Development",
      },
      {
        title: "Background",
        text: "Open Source (ITI)",
      },
      {
        title: "Currently",
        text: "React, Next.js, Laravel & NestJS",
      },
    ] as Fact[],
    quote: "Better systems, Better experiences.",
    signature: "Fatma Ali",
    profileImage: "/images/fatma_profile.png",
  },

  projects: [
    {
      id: "clathra",
      number: "01",
      title: "ClathraEnergies",
      subtitle: "Corporate Website + CMS",
      type: "clathra",
      tagline: "Freelance · 2026",
      tags: ["Next.js", "React", "Tailwind CSS", "NestJS", "MongoDB", "Framer Motion"],
      description:
        "A multilingual corporate website and content management system developed for ClathraEnergies.",
      longDescription:
        "Developed the complete multilingual corporate web presence and administration platform for ClathraEnergies. Engineered dynamic localization switching, seamless REST API integration with an existing NestJS backend, and a high-performance content management dashboard.",
      features: [
        "Multilingual corporate website supporting English, French, and Chinese (EN / FR / ZH)",
        "Custom content management dashboard built with React for real-time content updates",
        "Robust REST API integration with NestJS backend service & MongoDB database",
        "Modern, accessible UI with Tailwind CSS and Framer Motion micro-animations",
        "Production deployment, SEO optimization, and back-end integration enhancements",
      ],
      architectureNotes: [
        "Frontend: Next.js App Router, TypeScript, Tailwind CSS, Framer Motion",
        "CMS Frontend: React, Dynamic Form Builders, State Management",
        "Backend Integration: NestJS REST API, MongoDB Database, JWT Authentication",
      ],
      image: "/images/clathra_preview.png",
      cmsImage: "/images/clathra_cms.png",
      liveUrl: "#",
      githubUrl: "https://github.com/fatmaali311",
    },
    {
      id: "uniti",
      number: "02",
      title: "UnITI",
      subtitle: "Professional Community Platform",
      type: "uniti",
      tagline: "Graduation Project · 3rd Place",
      badge: "🏆 3rd Place — Alqemam Hackathon",
      tags: ["Laravel", "React", "MySQL", "Sanctum", "Tailwind CSS"],
      description:
        "A platform connecting ITI students, alumni and companies. 3rd place at Alqemam Hackathon.",
      longDescription:
        "UnITI is an enterprise community platform designed to bridge the gap between ITI students, alumni, and recruiting companies. Provides talent discovery, job listings, interactive post feeds, and mentorship networking.",
      features: [
        "Multi-role authentication & permission matrix (Student, Alumni, Company Admin)",
        "Student & Alumni discovery directory with skills search & location filters",
        "Job posting & application portal with tracking dashboard for companies",
        "Interactive social feed for community discussions, announcements, and events",
      ],
      architectureNotes: [
        "Frontend: React SPA with clean modular component architecture",
        "Backend: Laravel REST API with Sanctum Token Authentication",
        "Database: MySQL relational database with optimized indexing for fast search",
      ],
      image: "/images/uniti_preview.png",
      liveUrl: "#",
      githubUrl: "https://github.com/fatmaali311",
    },
    {
      id: "hotel",
      number: "03",
      title: "Hotel Management System",
      subtitle: "Web Application",
      type: "hotel",
      tagline: "Full-Stack Web Application",
      tags: ["Laravel", "Sanctum", "Inertia.js", "React", "MySQL"],
      description:
        "Comprehensive hotel operations management system for reservation control and guest services.",
      longDescription:
        "An intuitive administrative system designed to streamline hotel operations. Enables front desk staff to manage room reservations, process check-ins and check-outs, generate automated billing statements, and analyze occupancy trends.",
      features: [
        "Interactive room availability matrix and reservation calendar",
        "Guest check-in & check-out lifecycle management with billing summary",
        "Administrative dashboard with real-time occupancy metrics and revenue statistics",
        "Role-based access for receptionists, managers, and system administrators",
      ],
      architectureNotes: [
        "Framework: Laravel with Inertia.js for seamless React UI integration without API overhead",
        "Database: MySQL with transactional integrity for reservation booking",
      ],
      image: "/images/clathra_cms.png",
      liveUrl: "#",
      githubUrl: "https://github.com/fatmaali311",
    },
    {
      id: "meeting",
      number: "04",
      title: "Education Meeting System",
      subtitle: "Web Application",
      type: "meeting",
      tagline: "Web Application",
      tags: ["PHP", "PDO", "MySQL", "Bootstrap", "JavaScript"],
      description:
        "Virtual meeting and session management portal tailored for educational institutes.",
      longDescription:
        "A lightweight web platform built to manage educational video sessions, student attendance tracking, and lecture resource distribution cleanly and reliably.",
      features: [
        "Online lecture room scheduling and instructor assignments",
        "Automated student attendance tracking with exportable reports",
        "Resource sharing portal for presentation slides, assignments, and recorded links",
      ],
      architectureNotes: [
        "Core Tech: Pure PHP with Object-Oriented PDO database handler",
        "Security: Prepared statements against SQL injection and input sanitization",
      ],
      image: "/images/education_preview.png",
      liveUrl: "#",
      githubUrl: "https://github.com/fatmaali311",
    },
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      year: "2026",
      title: "Freelance Full-Stack Web Developer",
      company: "ClathraEnergies",
      location: "Remote / Egypt",
      bullets: [
        "Developed the main multilingual corporate website using Next.js, React, Tailwind CSS, and Framer Motion.",
        "Designed and implemented a custom CMS dashboard in React for dynamic content management.",
        "Integrated frontend applications with an existing NestJS/MongoDB backend architecture through REST APIs.",
        "Implemented localization features (EN/FR/ZH) and high-fidelity responsive UI layouts.",
        "Collaborated on backend improvements and led product deployment.",
      ],
    },
    {
      id: "exp-2",
      year: "2024 — 2025",
      title: "ITI — Open Source Development Track",
      company: "Information Technology Institute (ITI)",
      location: "9-month diploma · Mansoura",
      bullets: [
        "Completed an intensive 9-month professional software engineering diploma focused on open-source technologies.",
        "Built full-stack applications with React, Next.js, Angular, Vue, Laravel, Node.js, Express, and Django.",
        "Designed relational & non-relational database schemas with MySQL, PostgreSQL, and MongoDB.",
        "Applied best practices in clean code, design patterns, version control (Git), Docker containerization, and RESTful API architecture.",
      ],
    },
    {
      id: "exp-3",
      year: "2024",
      title: "Training Courses (ECCD + UN Women)",
      company: "ECCD & UN Women Initiative",
      location: "Mansoura, Egypt",
      bullets: [
        "Completed specialized technical training covering Laravel framework fundamentals, PHP OOP, and backend development basics.",
        "Participated in hands-on practical web development projects and collaborative team exercises.",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      id: "edu-1",
      year: "2020 — 2024",
      degree: "Bachelor of Computers & Information (Computer Science)",
      institution: "Mansoura University",
      location: "Mansoura, Egypt",
      description:
        "Comprehensive undergraduate software engineering education specializing in Computer Science, Data Structures, Algorithms, Systems Architecture, and Database Management.",
      courses: [
        "Data Structures & Algorithms",
        "Software Engineering & Design Patterns",
        "Database Management Systems (RDBMS)",
        "Object-Oriented Programming (OOP)",
        "Web Technologies & API Design",
        "Operating Systems & Computer Networks",
      ],
    },
    {
      id: "edu-2",
      year: "2024 — 2025",
      degree: "9-Month Professional Engineering Diploma (Open Source Track)",
      institution: "Information Technology Institute (ITI)",
      location: "Mansoura Branch, Egypt",
      description:
        "Intensive full-stack software development diploma covering modern web frameworks, cloud deployment, and team project delivery.",
      courses: [
        "Full-Stack Web Development (React, Next.js, Laravel, NestJS)",
        "Database Architecture & Optimization (MySQL, MongoDB, PostgreSQL)",
        "RESTful API & Microservices Engineering",
        "Version Control (Git), Docker & CI/CD Pipelines",
      ],
    },
    {
      id: "edu-3",
      year: "2024",
      degree: "Specialized Web & Backend Development Certificate",
      institution: "ECCD & UN Women Initiative",
      location: "Egypt",
      description:
        "Focused technical certificate in modern PHP, Laravel framework architecture, database normalization, and web application security.",
      courses: [
        "Laravel Framework Architecture",
        "PHP Object-Oriented Programming",
        "Database Security & Prepared Statements",
      ],
    },
  ] as EducationItem[],

  skills: {
    intro:
      "Here are the tools and technologies I use to build scalable and efficient web applications.",
    categories: [
      {
        title: "Frontend",
        skills: [
          "React",
          "Next.js",
          "Angular",
          "Vue.js",
          "Tailwind CSS",
          "Bootstrap",
          "TypeScript",
          "JavaScript (ES6+)",
          "Framer Motion",
        ],
      },
      {
        title: "Backend",
        skills: [
          "Laravel",
          "Node.js",
          "Express",
          "Django",
          "PHP",
          "RESTful APIs",
          "NestJS",
        ],
      },
      {
        title: "Databases",
        skills: ["MySQL", "MongoDB", "PostgreSQL", "Database Schema Design"],
      },
      {
        title: "Tools & Others",
        skills: [
          "Git",
          "GitHub",
          "Docker",
          "Linux",
          "Web Services",
          "Bash",
          "Postman",
          "Vercel",
        ],
      },
    ] as SkillCategory[],
    decorativeNote: "Keep learning\nKeep building",
  },

  contactSection: {
    section: "05. CONTACT",
    title: "Have a project\nin mind?",
    subtitle: "Let's build something useful.",
    email: "fatma.ali.mansour1@gmail.com",
    phone: "+20 10 5055 9237",
    location: "Damietta, Egypt",
    github: "https://github.com/fatmaali311",
    linkedin: "https://linkedin.com/in/fatmaali311",
  },
};
