export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  description: string;
  badge?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location?: string;
  type: "Research" | "Internship" | "Hackathon" | "Education" | "Certification";
  description: string;
  highlights: string[];
  technologies: string[];
  certificateUrl?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  periodOrYear?: string;
  certificateUrl: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
    category: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Manish Raina",
  title: "AI/ML Engineer",
  profileSummary:
    "AI/ML Engineer with hands-on, end-to-end project experience across model development, backend engineering, and full-stack delivery. Proven track record shipping multi-agent orchestration systems, production ML pipelines, and full-stack apps with measurable accuracy, latency, and reliability gains using Python, Scikit-learn, TensorFlow, FastAPI, React, Docker, and RAG/MCP-based agent systems.",
  subtitle:
    "Building production AI agents, calibrated machine learning systems, and high-throughput full-stack architectures.",
  status: "OPEN TO AI/ML & PRODUCTION ENGINEERING ROLES",
  systemStatus: "SYSTEM ONLINE // AI AGENT KERNEL ACTIVE",
  email: "manishraina2009@gmail.com",
  phone: "+91 6005001995",
  github: "https://github.com/manishraina0904",
  linkedin: "https://linkedin.com/in/manish-raina-53278028b/",
  portfolioUrl: "https://manuraina.vercel.app/",
  resumePath: "/assets/Manish-Raina-Resume.pdf",
  profileImage: "/assets/manish-profile.png",
  avatarFallback: "/assets/profile-fallback.svg",
  stats: [
    { value: 4, suffix: "+", label: "Production AI & Full-Stack Projects" },
    { value: 24, suffix: "+", label: "Core Competencies & Frameworks" },
    { value: 2, suffix: "", label: "NIT Delhi & Industry Internships" },
    { value: 100, suffix: "%", label: "Integration & DAG Pass Rate" },
  ],
  roles: [
    "AI/ML Engineer",
    "AI Agents & MCP Orchestration",
    "FastAPI & High-Throughput APIs",
    "LangGraph & RAG Pipelines",
    "Model Fine-Tuning & Calibration",
    "Multi-Agent DAG Workflows",
  ],
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Machine Learning with Python",
    issuer: "EISystems Technologies",
    periodOrYear: "Internship Certificate",
    certificateUrl: "https://drive.google.com/file/d/1wiUMfkrPU6F5Z7An14tbEeGEdogFOqlm/view?usp=sharing",
  },
  {
    title: "Machine Learning Research Internship",
    issuer: "NIT Delhi",
    periodOrYear: "2025",
    certificateUrl: "https://drive.google.com/file/d/1pakLcO8sOsIdUXjiQE_s5NdITrOaMe3l/view?usp=sharing",
  },
  {
    title: "Advanced Diploma in Software Technology (12 Months)",
    issuer: "Supertech (India) Computer Education",
    periodOrYear: "12 Months Program",
    certificateUrl: "https://drive.google.com/file/d/1jK7erUVej53BwAVkic_3BzsDc3MVfMsv/view?usp=sharing",
  },
];

export const MANIFESTO_TEXT = {
  quoteLine1: "A beautifully crafted AI system feels different.",
  quoteLine2: "Because you never have to look at the complexity built to handle a thousand moving parts.",
  quoteLine3: "You can feel the care.",
  quoteLine4: "That moment when invisible complexity gives you absolute clarity.",
  quoteLine5: "That's exactly what I build.",
  author: "Manish Raina",
};

export const CORE_PILLARS = [
  {
    number: "01",
    title: "AI Agents & Orchestration",
    tagline: "LangGraph, MCP & Multi-Agent DAGs",
    description:
      "Engineering custom multi-agent kernels, Model Context Protocol (MCP) clients, autonomous task decomposition, and RAG pipelines with Qdrant vector memory.",
    icon: "Cpu",
    tech: ["LangGraph", "LangChain", "MCP Protocol", "RAG Pipelines", "Function Calling"],
  },
  {
    number: "02",
    title: "Applied ML & Model Training",
    tagline: "Rigorous Training, Fine-Tuning & Calibration",
    description:
      "Conducted applied research at NIT Delhi focusing on supervised algorithms, LightGBM survival modeling with IPCW weighting, and statistical calibration curves.",
    icon: "FlaskConical",
    tech: ["NIT Delhi 2025", "LightGBM", "IPCW Weighting", "Scikit-Learn", "TensorFlow"],
  },
  {
    number: "03",
    title: "FastAPI & Backend Systems",
    tagline: "High-Throughput APIs & Secure Microservices",
    description:
      "Architecting asynchronous Python backends with JWT authentication, granular RBAC, WebSockets, middleware validation, and Postgres/Redis/Mongo persistence.",
    icon: "ShieldCheck",
    tech: ["FastAPI", "WebSockets", "JWT/RBAC", "PostgreSQL", "Docker"],
  },
  {
    number: "04",
    title: "End-to-End Product Engineering",
    tagline: "Full-Stack Synthesis & Modern Interfaces",
    description:
      "Delivering complete digital products from web scraping (Playwright/BeautifulSoup) and vector search to reactive React/Next.js interfaces.",
    icon: "Layers",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Qdrant Vector DB"],
  },
];

export const TIMELINE_EXPERIENCE: ExperienceItem[] = [
  {
    period: "Aug 2025 – Sept 2025",
    role: "Machine Learning Research Intern",
    organization: "NIT Delhi (National Institute of Technology)",
    location: "New Delhi, India",
    type: "Research",
    description:
      "Researched and implemented supervised machine learning algorithms using Python, Scikit-learn, Pandas, and NumPy; conducted comparative performance analysis and prepared technical documentation.",
    highlights: [
      "Researched and implemented supervised machine learning algorithms using Python, Scikit-learn, Pandas, and NumPy",
      "Conducted comparative performance analysis and empirical benchmarking across baseline models",
      "Prepared comprehensive technical documentation and experimental result logs",
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Comparative Analysis", "Technical Documentation"],
    certificateUrl: "https://drive.google.com/file/d/1pakLcO8sOsIdUXjiQE_s5NdITrOaMe3l/view?usp=sharing",
  },
  {
    period: "Aug 2024 – Sept 2024",
    role: "Machine Learning & Web Development Intern",
    organization: "EISystems Technologies",
    location: "Industry Internship",
    type: "Internship",
    description:
      "Worked on data preprocessing and ML model development for client projects, alongside front-end feature development using React.js.",
    highlights: [
      "Worked on end-to-end data preprocessing and ML model development for client projects",
      "Engineered front-end feature development and interactive UI dashboards using React.js",
      "Integrated machine learning inferences with responsive front-end applications",
    ],
    technologies: ["Python", "Scikit-Learn", "React.js", "Data Preprocessing", "Web Development"],
    certificateUrl: "https://drive.google.com/file/d/1wiUMfkrPU6F5Z7An14tbEeGEdogFOqlm/view?usp=sharing",
  },
  {
    period: "Aug 2022 – Aug 2026",
    role: "B.Tech, Computer Science Engineering (AI & ML)",
    organization: "PIET, Haryana (Panipat Institute of Engineering & Technology)",
    location: "Haryana, India",
    type: "Education",
    description:
      "4-year undergraduate engineering degree specializing in Artificial Intelligence, Machine Learning, Multi-Agent Systems, Data Structures, and Distributed Backend Architecture.",
    highlights: [
      "Specialized in AI/ML architectures, Deep Learning, and Multi-Agent Systems",
      "Architected multi-agent orchestrator kernels, custom MCP clients, and full-stack platforms",
      "Built production systems in clinical survival modeling and intelligent career skill analytics",
    ],
    technologies: ["AI & ML", "Data Structures & Algorithms", "Python", "FastAPI", "React", "DBMS"],
  },
  {
    period: "Mar 2018 – Mar 2022",
    role: "Senior Secondary (Class XII)",
    organization: "Kotwal National Institute",
    location: "Jammu & Kashmir, India",
    type: "Education",
    description:
      "Academic foundation in physical sciences, analytical problem solving, mathematics, and introductory computing.",
    highlights: [
      "Strong analytical foundation in Mathematics and Physical Sciences",
      "Self-directed explorations in procedural C and Python programming",
    ],
    technologies: ["Mathematics", "Computer Science", "Physics"],
  },
  {
    period: "12 Months Program",
    role: "Advanced Diploma in Software Technology",
    organization: "Supertech (India) Computer Education",
    location: "Jammu & Kashmir, India",
    type: "Certification",
    description:
      "Comprehensive 12-month program strengthening software fundamentals, C, C++, and structured database design.",
    highlights: [
      "Deep foundations in C, C++, data structures, and modular software architectures",
      "Relational database design and structured SQL querying",
    ],
    technologies: ["C", "C++", "SQL", "Software Architecture"],
    certificateUrl: "https://drive.google.com/file/d/1jK7erUVej53BwAVkic_3BzsDc3MVfMsv/view?usp=sharing",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI Agents & Orchestration",
    subtitle: "Multi-agent systems, MCP protocols & RAG",
    icon: "BrainCircuit",
    skills: [
      { name: "LangChain", icon: "/assets/skill-langchain.svg", category: "Agents" },
      { name: "LangGraph", icon: "/assets/skill-langchain.svg", category: "Agents" },
      { name: "Model Context Protocol (MCP)", icon: "/assets/space-signal.svg", category: "Agents" },
      { name: "Multi-Agent Systems", icon: "/assets/space-signal.svg", category: "Agents" },
      { name: "Agentic Tool/Skill Design", icon: "/assets/skill-fastapi.svg", category: "Agents" },
      { name: "Function Calling", icon: "/assets/skill-python.svg", category: "Agents" },
      { name: "Prompt Engineering", icon: "/assets/space-signal.svg", category: "Agents" },
      { name: "RAG Pipelines", icon: "/assets/skill-langchain.svg", category: "Agents" },
    ],
  },
  {
    title: "ML & Model Training",
    subtitle: "LightGBM, fine-tuning, evaluation & calibration",
    icon: "Cpu",
    skills: [
      { name: "Scikit-learn", icon: "/assets/skill-scikit.svg", category: "ML" },
      { name: "TensorFlow", icon: "/assets/skill-tensorflow.svg", category: "ML" },
      { name: "LightGBM", icon: "/assets/skill-scikit.svg", category: "ML" },
      { name: "NLP", icon: "/assets/skill-nlp.svg", category: "ML" },
      { name: "Model Training & Fine-Tuning", icon: "/assets/skill-tensorflow.svg", category: "ML" },
      { name: "Embedding-based Semantic Search", icon: "/assets/space-signal.svg", category: "ML" },
      { name: "Model Evaluation (AUC, CV)", icon: "/assets/skill-scikit.svg", category: "ML" },
      { name: "Calibration & IPCW Weighting", icon: "/assets/skill-scikit.svg", category: "ML" },
    ],
  },
  {
    title: "Web & Backend / APIs",
    subtitle: "FastAPI, React.js, WebSockets & Security",
    icon: "Server",
    skills: [
      { name: "FastAPI", icon: "/assets/skill-fastapi.svg", category: "Backend" },
      { name: "React.js", icon: "/assets/skill-react.svg", category: "Frontend" },
      { name: "REST APIs", icon: "/assets/skill-fastapi.svg", category: "Backend" },
      { name: "API Design & Integration", icon: "/assets/skill-fastapi.svg", category: "Backend" },
      { name: "WebSockets", icon: "/assets/space-signal.svg", category: "Backend" },
      { name: "JWT Authentication", icon: "/assets/skill-fastapi.svg", category: "Security" },
      { name: "RBAC (Access Control)", icon: "/assets/skill-fastapi.svg", category: "Security" },
      { name: "Middleware Validation", icon: "/assets/skill-python.svg", category: "Backend" },
    ],
  },
  {
    title: "Data & Infrastructure",
    subtitle: "Databases, vector stores & containerization",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", icon: "/assets/skill-postgresql.svg", category: "DB" },
      { name: "MongoDB", icon: "/assets/skill-mongodb.svg", category: "DB" },
      { name: "Redis", icon: "/assets/skill-mongodb.svg", category: "Cache" },
      { name: "SQLite", icon: "/assets/skill-sql.svg", category: "DB" },
      { name: "Qdrant Vector DB", icon: "/assets/space-signal.svg", category: "VectorDB" },
      { name: "Docker", icon: "/assets/skill-docker.svg", category: "DevOps" },
      { name: "Docker-compose", icon: "/assets/skill-docker.svg", category: "DevOps" },
      { name: "Git", icon: "/assets/skill-git.svg", category: "DevOps" },
    ],
  },
  {
    title: "Languages",
    subtitle: "Core programming & query languages",
    icon: "Terminal",
    skills: [
      { name: "Python", icon: "/assets/skill-python.svg", category: "Language" },
      { name: "C", icon: "/assets/skill-c.svg", category: "Language" },
      { name: "C++", icon: "/assets/skill-cpp.svg", category: "Language" },
      { name: "JavaScript", icon: "/assets/skill-javascript.svg", category: "Language" },
      { name: "SQL", icon: "/assets/skill-sql.svg", category: "Language" },
      { name: "TypeScript", icon: "/assets/skill-javascript.svg", category: "Language" },
    ],
  },
  {
    title: "Specialized Tools & Vision",
    subtitle: "Scraping, speech, computer vision & analytics",
    icon: "Cpu",
    skills: [
      { name: "Web Scraping", icon: "/assets/skill-pandas.svg", category: "Scraping" },
      { name: "Playwright", icon: "/assets/skill-pandas.svg", category: "Scraping" },
      { name: "Power BI", icon: "/assets/skill-powerbi.svg", category: "Analytics" },
      { name: "Speech Recognition & Synthesis", icon: "/assets/space-signal.svg", category: "Speech" },
      { name: "OpenCV", icon: "/assets/skill-opencv.svg", category: "Vision" },
      { name: "dlib", icon: "/assets/skill-opencv.svg", category: "Vision" },
    ],
  },
];

export const MARQUEE_SKILLS = [
  { name: "Python", icon: "/assets/skill-python.svg" },
  { name: "LangChain", icon: "/assets/skill-langchain.svg" },
  { name: "LangGraph", icon: "/assets/skill-langchain.svg" },
  { name: "Model Context Protocol (MCP)", icon: "/assets/space-signal.svg" },
  { name: "FastAPI", icon: "/assets/skill-fastapi.svg" },
  { name: "React.js", icon: "/assets/skill-react.svg" },
  { name: "TypeScript", icon: "/assets/skill-javascript.svg" },
  { name: "Scikit-Learn", icon: "/assets/skill-scikit.svg" },
  { name: "TensorFlow", icon: "/assets/skill-tensorflow.svg" },
  { name: "LightGBM", icon: "/assets/skill-scikit.svg" },
  { name: "Qdrant Vector DB", icon: "/assets/space-signal.svg" },
  { name: "PostgreSQL", icon: "/assets/skill-postgresql.svg" },
  { name: "Docker", icon: "/assets/skill-docker.svg" },
  { name: "Redis", icon: "/assets/skill-mongodb.svg" },
  { name: "OpenCV & dlib", icon: "/assets/skill-opencv.svg" },
  { name: "Playwright", icon: "/assets/skill-pandas.svg" },
  { name: "RAG Pipelines", icon: "/assets/space-signal.svg" },
  { name: "C++", icon: "/assets/skill-cpp.svg" },
];

export const ENGINEERING_STEPS = [
  {
    step: "01",
    title: "Understand & Model",
    subtitle: "Requirements, Invariant Constraints & Data Dynamics",
    description:
      "Deeply dissect the core technical bottleneck, define explicit mathematical or architectural boundaries, and model data pipelines and agent topology upfront.",
    points: [
      "Define failure modes and multi-agent safety gates",
      "Model domain data schemas (Pydantic / SQL DDL)",
      "Determine latency, memory, and throughput targets",
    ],
  },
  {
    step: "02",
    title: "Architect & Design",
    subtitle: "MCP Tool Discovery, DAG Flow & State Layers",
    description:
      "Design clean modular microservices, decoupled state machines, typed MCP tool discovery, and tiered storage before writing production code.",
    points: [
      "Draft strict Pydantic/TypeScript contract schemas",
      "Plan asynchronous task queues, Redis caches & Qdrant vector memory",
      "Design human-in-the-loop safety gates",
    ],
  },
  {
    step: "03",
    title: "Engineer & Build",
    subtitle: "Agent Routing, Calibration & Production APIs",
    description:
      "Write high-performance, maintainable code with strict typing, secure JWT/RBAC authorization walls, algorithmic optimizations, and automated testing.",
    points: [
      "Implement robust error recovery and live WebSockets telemetry",
      "Deploy vector semantic search and relational indexes",
      "Craft smooth 60fps animations and accessible UX",
    ],
  },
  {
    step: "04",
    title: "Benchmark & Refine",
    subtitle: "Profiling, Calibration, Audit & Production Hardening",
    description:
      "Continuously benchmark response latency, calibrate ML model probabilities, test security barriers, and optimize Docker container pipelines for rapid delivery.",
    points: [
      "Perform model calibration & IPCW survival evaluation",
      "Audit security against OWASP Top 10 vulnerabilities",
      "Benchmark sub-100ms API inference latency",
    ],
  },
];
