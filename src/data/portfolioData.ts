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
  type: "Research" | "Internship" | "Hackathon" | "Education";
  description: string;
  highlights: string[];
  technologies: string[];
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
  title: "AI/ML Engineer & Full Stack Developer",
  profileSummary:
    "AI/ML Engineer with hands-on, end-to-end project experience across model development, backend engineering, and full-stack delivery. Comfortable building with Python, Scikit-learn, TensorFlow, FastAPI/React, Docker, and RAG/MCP-based agent systems.",
  subtitle:
    "Building production AI agents, calibrated machine learning systems, and high-throughput full-stack architectures.",
  status: "OPEN TO AI/ML & PRODUCTION ENGINEERING ROLES",
  systemStatus: "SYSTEM ONLINE // AI AGENT KERNEL ACTIVE",
  email: "manishraina2009@gmail.com",
  phone: "+91 6005001995",
  github: "https://github.com/manishraina0904",
  linkedin: "https://linkedin.com/in/manish-raina-53278028b/",
  resumePath: "/assets/Manish-Raina-Resume.pdf",
  profileImage: "/assets/manish-profile.png",
  avatarFallback: "/assets/profile-fallback.svg",
  stats: [
    { value: 5, suffix: "+", label: "Production AI & Full-Stack Projects" },
    { value: 24, suffix: "+", label: "Core Competencies & Frameworks" },
    { value: 2, suffix: "", label: "NIT Delhi & Industry Internships" },
    { value: 100, suffix: "%", label: "Engineering Rigor & Delivery" },
  ],
  roles: [
    "AI Agents & MCP Orchestration",
    "FastAPI & High-Throughput APIs",
    "LangGraph & RAG Pipelines",
    "Model Fine-Tuning & Calibration",
    "Modern Full-Stack Applications",
    "Multi-Agent DAG Workflows",
  ],
};

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
      "Researched and implemented supervised machine learning algorithms using Python, Scikit-learn, Pandas, and NumPy; conducted comparative performance analysis and prepared technical documentation of experimental results.",
    highlights: [
      "Researched and implemented supervised machine learning algorithms with Scikit-learn and NumPy",
      "Conducted comparative performance analysis and empirical benchmarking across model baselines",
      "Prepared comprehensive technical documentation and experimental result logs for academic review",
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "ML Benchmarking", "Statistical Analysis"],
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
      "Engineered end-to-end data preprocessing pipelines and feature engineering modules",
      "Trained supervised machine learning models tailored for client requirements",
      "Developed responsive frontend dashboard features and telemetry views using React.js",
    ],
    technologies: ["Python", "Scikit-Learn", "React.js", "Data Preprocessing", "Web Development"],
  },
  {
    period: "Aug 2022 – Aug 2026",
    role: "B.Tech in Computer Science Engineering (AI & ML)",
    organization: "Panipat Institute of Engineering and Technology (PIET)",
    location: "Haryana, India",
    type: "Education",
    description:
      "4-year undergraduate engineering degree specializing in Artificial Intelligence, Machine Learning, Multi-Agent Systems, Data Structures, and Distributed Backend Architecture.",
    highlights: [
      "Specialized in AI/ML architectures, Deep Learning, and Computer Vision",
      "Architected multi-agent orchestrator kernels, MCP protocols, and full-stack platforms",
      "Built capstone projects in clinical survival modeling and intelligent career scraping",
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
      "Early self-directed explorations in procedural C and Python programming",
    ],
    technologies: ["Mathematics", "Computer Science", "Physics"],
  },
  {
    period: "12 Months Program",
    role: "Advanced Diploma in Software Technology",
    organization: "Supertech (India) Computer Education",
    location: "Jammu & Kashmir, India",
    type: "Education",
    description:
      "Comprehensive 12-month program strengthening software fundamentals, C, C++, and structured database design.",
    highlights: [
      "Deep foundations in C, C++, algorithms, and modular software architectures",
      "Relational database design and structured SQL querying",
    ],
    technologies: ["C", "C++", "SQL", "Software Architecture"],
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
    subtitle: "Neural networks, fine-tuning & evaluation",
    icon: "Cpu",
    skills: [
      { name: "Scikit-learn", icon: "/assets/skill-scikit.svg", category: "ML" },
      { name: "TensorFlow", icon: "/assets/skill-tensorflow.svg", category: "ML" },
      { name: "LightGBM", icon: "/assets/skill-scikit.svg", category: "ML" },
      { name: "NLP & Tokenization", icon: "/assets/skill-nlp.svg", category: "ML" },
      { name: "Model Training & Fine-Tuning", icon: "/assets/skill-tensorflow.svg", category: "ML" },
      { name: "Embedding-based Semantic Search", icon: "/assets/space-signal.svg", category: "ML" },
      { name: "Model Evaluation (AUC, CV)", icon: "/assets/skill-scikit.svg", category: "ML" },
      { name: "Calibration & IPCW Weighting", icon: "/assets/skill-scikit.svg", category: "ML" },
    ],
  },
  {
    title: "Web & Backend / APIs",
    subtitle: "FastAPI, React.js, security & WebSockets",
    icon: "Server",
    skills: [
      { name: "FastAPI", icon: "/assets/skill-fastapi.svg", category: "Backend" },
      { name: "React.js", icon: "/assets/skill-react.svg", category: "Frontend" },
      { name: "REST APIs & Design", icon: "/assets/skill-fastapi.svg", category: "Backend" },
      { name: "WebSockets Telemetry", icon: "/assets/space-signal.svg", category: "Backend" },
      { name: "JWT Authentication", icon: "/assets/skill-fastapi.svg", category: "Security" },
      { name: "RBAC (Access Control)", icon: "/assets/skill-fastapi.svg", category: "Security" },
      { name: "Middleware Validation", icon: "/assets/skill-python.svg", category: "Backend" },
      { name: "Next.js & Tailwind CSS", icon: "/assets/skill-react.svg", category: "Frontend" },
    ],
  },
  {
    title: "Data & Infrastructure",
    subtitle: "Databases, vector stores & DevOps",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", icon: "/assets/skill-postgresql.svg", category: "DB" },
      { name: "MongoDB", icon: "/assets/skill-mongodb.svg", category: "DB" },
      { name: "Redis", icon: "/assets/skill-mongodb.svg", category: "Cache" },
      { name: "SQLite", icon: "/assets/skill-sql.svg", category: "DB" },
      { name: "Qdrant Vector DB", icon: "/assets/space-signal.svg", category: "VectorDB" },
      { name: "Docker & Docker-compose", icon: "/assets/skill-docker.svg", category: "DevOps" },
      { name: "Git & GitHub", icon: "/assets/skill-git.svg", category: "DevOps" },
    ],
  },
  {
    title: "Languages & Vision Tools",
    subtitle: "Core code, vision, speech & scraping",
    icon: "Terminal",
    skills: [
      { name: "Python", icon: "/assets/skill-python.svg", category: "Language" },
      { name: "TypeScript", icon: "/assets/skill-javascript.svg", category: "Language" },
      { name: "JavaScript (ES6+)", icon: "/assets/skill-javascript.svg", category: "Language" },
      { name: "C & C++", icon: "/assets/skill-cpp.svg", category: "Language" },
      { name: "SQL", icon: "/assets/skill-sql.svg", category: "Language" },
      { name: "OpenCV & dlib", icon: "/assets/skill-opencv.svg", category: "Vision" },
      { name: "SpeechRecognition & pyttsx3", icon: "/assets/space-signal.svg", category: "Speech" },
      { name: "Web Scraping & Playwright", icon: "/assets/skill-pandas.svg", category: "Scraping" },
      { name: "Power BI", icon: "/assets/skill-powerbi.svg", category: "Analytics" },
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
