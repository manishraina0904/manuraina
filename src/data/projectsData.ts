export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  tagline: string;
  category: "Multi-Agent AI" | "Cybersecurity & CV" | "Healthcare ML" | "Full-Stack AI" | "Security API" | "Speech AI" | "NLP & RecSys";
  featured: boolean;
  statusBadge: string;
  statusSuccess: string;
  summary: string;
  thumbnail: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  metrics: ProjectMetric[];
  
  // Comprehensive Case Study Fields
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    input: string;
    processing: string;
    output: string;
    storage: string;
    description: string;
  };
  keyFeatures: string[];
  techStack: {
    category: string;
    items: string[];
  }[];
  outcomes: string[];
}

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "nexus-ai-os",
    title: "Nexus AI OS v2.0",
    tagline: "Autonomous Multi-Agent Workspace & AI Orchestration Platform",
    category: "Multi-Agent AI",
    featured: true,
    statusBadge: "MCP & DAG ENGINE: ACTIVE",
    statusSuccess: "12 AGENTS // 98.6% DAG SUCCESS",
    summary:
      "A custom multi-agent orchestration kernel that routes tasks through 12 specialized agents via a JSON-based DAG, with planner, reflection, supervisor safety layers, and a custom MCP client with stdio JSON-RPC tool discovery.",
    thumbnail: "/assets/project-nexus.png",
    githubUrl: "https://github.com/manishraina0904/Nexus-AI-OS-v2.0-Autonomous-Multi-Agent-Workspace-AI-Orchestration-Platform",
    tags: ["Multi-Agent DAG", "MCP Protocol", "LangGraph", "FastAPI", "Qdrant RAG", "React"],
    metrics: [
      { label: "Autonomous Agents", value: "12", subtext: "JSON-based DAG Routing" },
      { label: "Tool Discovery", value: "MCP", subtext: "stdio JSON-RPC Client" },
      { label: "Hybrid Storage", value: "4-Tier", subtext: "Qdrant, Postgres, Mongo, Redis" },
    ],
    overview:
      "Nexus AI OS v2.0 is an enterprise-grade autonomous multi-agent operating workspace. It enables users to submit complex, high-level objectives in plain natural language, which are then autonomously decomposed into a dependency-aware JSON Directed Acyclic Graph (DAG), delegated across 12 specialized agents, and executed with live telemetry and human-in-the-loop safety gates.",
    problem:
      "Traditional single-prompt LLM interfaces fail when handling multi-step engineering tasks that require continuous tool execution, reflection, sub-agent communication, and unified memory persistence across heterogeneous databases.",
    solution:
      "Engineered an orchestrated multi-agent execution kernel where a master Planner Agent dynamically routes tasks via a JSON DAG with reflection and supervisor safety layers, coupled with a custom Model Context Protocol (MCP) client for dynamic tool discovery and a Qdrant-indexed RAG pipeline.",
    architecture: {
      input: "Natural language high-level goal from user",
      processing: "Kernel routes tasks through 12 specialized agents via JSON DAG with planner, reflection & supervisor safety layers",
      output: "Coordinated tool execution logs, live streaming artifacts, and verified deliverables",
      storage: "Hybrid Qdrant (vector memory) + PostgreSQL + MongoDB + Redis cache with human-in-the-loop safety gates",
      description: "Asynchronous Python FastAPI core orchestrating reactive agents with WebSocket telemetry to a modern React frontend dashboard.",
    },
    keyFeatures: [
      "Custom multi-agent orchestration kernel with JSON-based DAG execution",
      "Planner, reflection, and supervisor safety layers for reliable execution",
      "Custom Model Context Protocol (MCP) client with stdio JSON-RPC tool discovery",
      "RAG pipeline indexed via Qdrant Vector Database with semantic retrieval",
      "Hybrid storage architecture integrating PostgreSQL, MongoDB, Redis, and Qdrant",
      "Human-in-the-loop safety gates and interactive real-time WebSockets telemetry",
    ],
    techStack: [
      { category: "Agent Core & MCP", items: ["LangChain", "LangGraph", "MCP (Model Context Protocol)", "Custom DAG Engine", "Function Calling"] },
      { category: "Backend & Systems", items: ["Python", "FastAPI", "AsyncIO", "Pydantic v2", "WebSockets"] },
      { category: "Databases & Vector", items: ["Qdrant Vector DB", "PostgreSQL", "MongoDB", "Redis"] },
      { category: "Frontend Interface", items: ["React.js", "TypeScript", "Tailwind CSS", "Live State DAG"] },
    ],
    outcomes: [
      "Built resilient multi-agent architecture executing 12 simultaneous specialized agent roles",
      "Implemented seamless stdio JSON-RPC tool discovery via the Model Context Protocol",
      "Delivered real-time telemetry with sub-second inter-agent message dispatch",
    ],
  },
  {
    id: "ai-career-skill-intelligence",
    title: "AI Career Skill Intelligence Platform",
    tagline: "Full-Stack Tech Market Trend & Resume Skill Parsing Engine",
    category: "Full-Stack AI",
    featured: true,
    statusBadge: "SKILL TREND ENGINE: ACTIVE",
    statusSuccess: "EMBEDDING SEMANTIC MATCH",
    summary:
      "An end-to-end career intelligence platform built with FastAPI, React, and PostgreSQL, implementing NLP-based resume parsing, embedding-based semantic matching, and automated web scraping.",
    thumbnail: "/assets/project-career.png",
    githubUrl: "https://github.com/manishraina0904/AI-Career-Skill-Intelligence-Platform",
    tags: ["Full-Stack AI", "FastAPI", "React", "PostgreSQL", "Web Scraping", "NLP Semantic Match"],
    metrics: [
      { label: "Matching Engine", value: "Semantic", subtext: "Embedding-based Vectors" },
      { label: "Data Pipeline", value: "Automated", subtext: "Web Scraper & Parser" },
      { label: "Backend Stack", value: "FastAPI", subtext: "PostgreSQL & React" },
    ],
    overview:
      "A full-stack career intelligence and skill analysis platform designed to extract, rank, and match developer skills against live tech market demands using NLP resume parsing, vector embeddings, and real-time scrapers.",
    problem:
      "Candidate profiles and job descriptions use varying terminology for identical competencies, causing traditional keyword-matching ATS systems to fail and obscuring real market skill demand trends.",
    solution:
      "Built an end-to-end platform in FastAPI, React, and PostgreSQL featuring NLP-based resume parsing, embedding-based semantic matching between job listings and candidate profiles, and an automated web scraper with interactive visual dashboards.",
    architecture: {
      input: "Candidate resumes (PDF/Text) and scraped tech job postings",
      processing: "NLP entity extraction, skill vector embeddings calculation, semantic cosine matching & trend regression",
      output: "Interactive skill trend dashboard, candidate match scores, and personalized gap roadmaps",
      storage: "PostgreSQL relational schema with optimized indexing on skill frequencies and candidate profiles",
      description: "FastAPI REST backend powering asynchronous data pipelines and responsive React frontend.",
    },
    keyFeatures: [
      "NLP-based resume parsing and skill-extraction pipelines for candidate profiles",
      "Embedding-based semantic matching between job listings and candidate skillsets",
      "Automated web scraper collecting and indexing live developer job postings",
      "Interactive data dashboard visualizing in-demand skill trends and co-occurrences",
      "FastAPI REST endpoints with sub-100ms response times and Swagger documentation",
    ],
    techStack: [
      { category: "Backend & API", items: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic"] },
      { category: "ML & NLP", items: ["Embedding Models", "NLP Tokenizers", "Scikit-Learn", "Cosine Similarity"] },
      { category: "Scraping & Data", items: ["Playwright", "BeautifulSoup", "Requests", "Pandas"] },
      { category: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS", "Recharts"] },
    ],
    outcomes: [
      "Automated resume parsing and semantic competency extraction across hundreds of tech profiles",
      "Delivered real-time telemetry helping developers target high-ROI technology pairings",
      "Engineered resilient full-stack architecture with clean API contracts",
    ],
  },
  {
    id: "heart-disease-survival-prediction",
    title: "Heart Disease Survival Prediction Framework",
    tagline: "Clinical Survival-Risk Forecasting with LightGBM, IPCW & Calibration",
    category: "Healthcare ML",
    featured: true,
    statusBadge: "LIGHTGBM SURVIVAL MODEL",
    statusSuccess: "AUC: 0.94 CALIBRATED",
    summary:
      "A clinical survival prediction model using LightGBM with Inverse Probability of Censoring Weighting (IPCW) to handle censored clinical outcome data, validated with cross-validation and probability calibration.",
    thumbnail: "/assets/project-heart.png",
    githubUrl: "https://github.com/manishraina0904/Heart-Disease-Survival-Prediction",
    tags: ["Healthcare ML", "LightGBM", "IPCW Weighting", "Scikit-Learn", "Model Calibration", "Python"],
    metrics: [
      { label: "Model Evaluation", value: "AUC 0.94", subtext: "Held-out Test Folds" },
      { label: "Censoring Method", value: "IPCW", subtext: "Unbiased Survival Estimation" },
      { label: "Validation", value: "Calibrated", subtext: "Cross-Validated Rigor" },
    ],
    overview:
      "A clinical survival prediction system engineered to handle right-censored patient data from a heart disease clinical dataset, combining LightGBM gradient boosting with IPCW weighting and rigorous statistical calibration.",
    problem:
      "Clinical outcome datasets frequently suffer from right-censoring where patient follow-up ends before the event occurs. Standard ML classifiers produce biased survival probabilities that jeopardize clinical decision-making.",
    solution:
      "Implemented a survival modeling pipeline using LightGBM with Inverse Probability of Censoring Weighting (IPCW), applying Scikit-learn for cross-validation and probability calibration to evaluate model discrimination and generalization across test folds.",
    architecture: {
      input: "Clinical patient biomarkers (blood pressure, serum cholesterol, ECG, age, medical history)",
      processing: "Robust feature scaling, IPCW censoring weighting, LightGBM survival training, and Isotonic probability calibration",
      output: "Calibrated survival risk probabilities, cross-validation discrimination metrics, and feature importance",
      storage: "Clinical benchmark dataset stores with reproducible experiment tracking",
      description: "Rigorous ML pipeline engineered in Python with full statistical validation and calibration curves.",
    },
    keyFeatures: [
      "LightGBM survival prediction model handling censored clinical outcome data",
      "Inverse Probability of Censoring Weighting (IPCW) for unbiased risk scoring",
      "Applied Scikit-learn for cross-validation and probability calibration",
      "AUC-based evaluation rigorously assessing model discrimination on held-out test folds",
      "SHAP-based clinical feature interpretability providing transparent risk attribution",
    ],
    techStack: [
      { category: "ML Modeling", items: ["LightGBM", "Scikit-Learn", "Lifelines", "IPCW Weighting"] },
      { category: "Statistical Evaluation", items: ["Cross-Validation", "Isotonic Calibration", "ROC-AUC", "Brier Score"] },
      { category: "Data Science", items: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"] },
    ],
    outcomes: [
      "Achieved calibrated 0.94 ROC-AUC across cross-validated held-out test folds",
      "Successfully mitigated right-censoring bias using IPCW weighting",
      "Demonstrated rigorous empirical validation adhering to clinical ML standards",
    ],
  },
  {
    id: "ai-voice-receptionist",
    title: "AI Voice Receptionist",
    tagline: "Speech-to-Speech Assistant with Face-Recognition & Conversation Flow",
    category: "Speech AI",
    featured: true,
    statusBadge: "SPEECH PIPELINE: ACTIVE",
    statusSuccess: "OPENCV & DLIB VISION",
    summary:
      "A voice assistant pipeline using SpeechRecognition and PyAudio for input capture, pyttsx3 for natural speech output, and an integrated OpenCV/dlib face-recognition layer with automated query handling.",
    thumbnail: "/assets/project-voice.png",
    githubUrl: "https://github.com/manishraina0904/AI-Voice-Receptionist",
    tags: ["SpeechRecognition", "PyAudio", "pyttsx3", "OpenCV", "dlib", "face_recognition", "Python"],
    metrics: [
      { label: "Speech Engine", value: "SpeechRecognition", subtext: "PyAudio Input Capture" },
      { label: "Speech Synthesis", value: "pyttsx3", subtext: "Natural Speech Output" },
      { label: "Vision Layer", value: "OpenCV + dlib", subtext: "face_recognition" },
    ],
    overview:
      "A full-duplex conversational voice assistant integrating speech-to-text input capture, natural speech response generation, rule-based conversation logic, and a Computer Vision face-recognition layer.",
    problem:
      "Conventional reception kiosks require manual touchscreen inputs and lack multimodal awareness of returning visitors or conversational context during receptionist interactions.",
    solution:
      "Built a voice assistant pipeline combining SpeechRecognition and PyAudio for audio capture, pyttsx3 for synthesized speech responses, and an OpenCV + dlib + face_recognition visual identification layer.",
    architecture: {
      input: "Microphone audio stream (PyAudio) + webcam video feed (OpenCV)",
      processing: "Speech recognition transcription + dlib face embedding matching + rule-based dialogue state machine",
      output: "Natural synthesized speech output (pyttsx3) and visual reception status",
      storage: "Visitor profile face embeddings and query dialogue history",
      description: "Python event-driven loop coordinating audio capture, facial recognition, and conversational execution.",
    },
    keyFeatures: [
      "SpeechRecognition and PyAudio pipeline for real-time audio input capture",
      "Natural speech output and response generation using pyttsx3",
      "Integrated OpenCV, dlib, and face_recognition for real-time visitor identification",
      "Rule-based conversation logic for automated query handling and appointment routing",
      "Resilient audio buffering logic handling environmental ambient noise",
    ],
    techStack: [
      { category: "Audio & Speech", items: ["SpeechRecognition", "PyAudio", "pyttsx3 (TTS)"] },
      { category: "Computer Vision", items: ["OpenCV", "dlib", "face_recognition library"] },
      { category: "Core & Logic", items: ["Python 3.11", "Threading", "State Machine"] },
    ],
    outcomes: [
      "Created seamless multimodal receptionist identifying visitors and holding spoken dialogue",
      "Achieved sub-200ms facial recognition latency using dlib 128D facial embeddings",
      "Delivered reliable hands-free speech interaction without manual kiosk touch inputs",
    ],
  },
  {
    id: "ai-cybersecurity-system",
    title: "AI Cybersecurity System",
    tagline: "Intelligent Phishing Detection & Computer Vision Deepfake Framework",
    category: "Cybersecurity & CV",
    featured: false,
    statusBadge: "THREAT DETECTOR: ONLINE",
    statusSuccess: "PHISHING ML: 99.4%",
    summary:
      "A dual-engine threat intelligence platform that detects phishing attacks via NLP/ML and identifies synthetic media anomalies using Computer Vision edge filters.",
    thumbnail: "/assets/project-cybersecurity.png",
    githubUrl: "https://github.com/manishraina0904/AI-Cybersecurity-System",
    tags: ["Cybersecurity", "Machine Learning", "OpenCV", "NLP", "Scikit-Learn"],
    metrics: [
      { label: "Phishing Detection", value: "99.4%", subtext: "Ensemble Accuracy" },
      { label: "Vision Filters", value: "Laplacian", subtext: "Frequency Anomaly Analysis" },
      { label: "Response Time", value: "<150ms", subtext: "Real-time Payload Scan" },
    ],
    overview:
      "A cybersecurity defensive platform combining Natural Language Processing for email header/body phishing detection with a modular Computer Vision framework for identifying synthetic deepfake media artifacts.",
    problem:
      "Social engineering and synthetic media attacks have grown increasingly sophisticated, bypassing legacy rule-based email filters and manual image verifications.",
    solution:
      "Built a hybrid classification pipeline utilizing TF-IDF feature extraction with calibrated ensemble classifiers for text threats, alongside frequency-domain and spatial gradient filters for synthetic media detection.",
    architecture: {
      input: "Email payloads, URLs, headers, and media image streams",
      processing: "NLP feature vectorization + ML ensemble classification & OpenCV spatial artifact filtering",
      output: "Threat classification score, risk categorization, and visual artifact heatmaps",
      storage: "Threat intelligence database with signature caching",
      description: "Modular Python backend evaluating multi-modal security payloads with high-throughput inference.",
    },
    keyFeatures: [
      "NLP-driven phishing classifier with TF-IDF and calibrated ML classifiers",
      "URL lexical and heuristic threat feature analysis",
      "Computer Vision blur and Laplacian variance frequency anomaly detection",
      "Automated model selection benchmarking multiple classifier architectures",
      "Interactive threat telemetry dashboard with risk scoring visualization",
    ],
    techStack: [
      { category: "Machine Learning & CV", items: ["Scikit-Learn", "OpenCV", "NumPy", "Pandas"] },
      { category: "NLP & Tokenization", items: ["NLTK", "TF-IDF Vectorization", "Regex Heuristics"] },
      { category: "Application Backend", items: ["Python", "FastAPI", "REST Architecture"] },
    ],
    outcomes: [
      "Achieved 99.4% classification accuracy on benchmark phishing email corpora",
      "Identified synthetic image edge blurs and compression inconsistencies in real-time",
      "Designed modular architecture allowing pluggable neural deepfake models",
    ],
  },
  {
    id: "authentication-access-control-system",
    title: "Authentication & Access Control System",
    tagline: "Production-Grade FastAPI Security Backend with JWT & Granular RBAC",
    category: "Security API",
    featured: false,
    statusBadge: "JWT & RBAC GUARD",
    statusSuccess: "STATUS: 200 OK",
    summary:
      "A hardened authentication microservice engineered in FastAPI featuring dual JWT token rotation, bcrypt password hashing, role-based access control, and protected endpoint decorators.",
    thumbnail: "/assets/project-auth.png",
    githubUrl: "https://github.com/manishraina0904/Authentication-and-Access-Control-System",
    tags: ["Security API", "JWT", "RBAC", "FastAPI", "Bcrypt", "PostgreSQL"],
    metrics: [
      { label: "Auth Standard", value: "JWT", subtext: "Access + Refresh Tokens" },
      { label: "Hashing", value: "Bcrypt", subtext: "Salted Cost Factor 12" },
      { label: "Security", value: "RBAC", subtext: "Granular Role Hierarchy" },
    ],
    overview:
      "A production-ready security microservice implementing the complete modern authentication lifecycle: user registration, salted bcrypt hashing, short-lived JWT access tokens, refresh token rotation, and declarative permission decorators.",
    problem:
      "Improper authentication and broken access control consistently rank among OWASP Top 10 vulnerabilities.",
    solution:
      "Architected a standalone FastAPI authentication engine utilizing stateless access tokens paired with revocable refresh tokens, strict Pydantic validation schemas, and reusable dependency injection guards.",
    architecture: {
      input: "HTTP Authentication headers, JSON credentials, and refresh tokens",
      processing: "Cryptographic signature validation, bcrypt verification, role authorization check",
      output: "Secure HttpOnly cookie payload / Bearer tokens and authorized endpoint responses",
      storage: "PostgreSQL relational user & role permission tables",
      description: "High-performance Python FastAPI service with decoupled dependency injection for auth guards.",
    },
    keyFeatures: [
      "Dual-token architecture: short-lived access JWTs and secure refresh token rotation",
      "Role-Based Access Control (RBAC) with hierarchical permission inheritance",
      "Bcrypt password hashing with per-user cryptographic salts",
      "Reusable FastAPI dependency injection decorators for clean route protection",
      "Comprehensive Swagger UI and OpenAPI documentation with security schemes",
    ],
    techStack: [
      { category: "Framework & Language", items: ["Python", "FastAPI", "Uvicorn", "Pydantic v2"] },
      { category: "Security & Crypto", items: ["PyJWT", "Passlib (Bcrypt)", "OAuth2PasswordBearer"] },
      { category: "Database & ORM", items: ["PostgreSQL", "SQLAlchemy", "Alembic Migrations"] },
    ],
    outcomes: [
      "Engineered pluggable auth module ready for drop-in use across microservice ecosystems",
      "Passed security audits against token tampering, replay attacks, and privilege escalation",
      "Maintained sub-15ms authentication overhead across protected endpoints",
    ],
  },
  {
    id: "sentiment-aware-recommendation-system",
    title: "Sentiment-Aware Recommendation System",
    tagline: "Personalized Content Recommendation with VADER Sentiment & TF-IDF Similarity",
    category: "NLP & RecSys",
    featured: false,
    statusBadge: "VADER SENTIMENT ENGINE",
    statusSuccess: "SCORE: +0.88 POSITIVE",
    summary:
      "An intelligent recommendation engine that marries content-based TF-IDF feature vectors with fine-grained VADER user sentiment polarity to deliver context-aware, highly personalized rankings.",
    thumbnail: "/assets/project-sentiment.png",
    githubUrl: "https://github.com/manishraina0904/Sentiment-Aware-Recommendation-System",
    tags: ["NLP", "VADER", "TF-IDF", "Machine Learning", "Recommendation System", "Python"],
    metrics: [
      { label: "Sentiment Engine", value: "VADER", subtext: "Rule-Based Lexicon" },
      { label: "Vector Space", value: "TF-IDF", subtext: "Cosine Similarity Matrix" },
      { label: "Hybrid Reranking", value: "Dynamic", subtext: "Polarity + Content Fit" },
    ],
    overview:
      "A dual-signal recommendation engine that analyzes both semantic item content and user review sentiments.",
    problem:
      "Standard content-based filtering algorithms blindly recommend items based on textual similarity alone, frequently recommending low-quality or heavily criticized items because they match genre keywords.",
    solution:
      "Engineered a hybrid ranking formula that weights TF-IDF cosine similarity scores with VADER sentiment compound polarities extracted from user reviews, ensuring top recommendations are both relevant and acclaimed.",
    architecture: {
      input: "Product/media descriptions and raw user review texts",
      processing: "TF-IDF vector matrix calculation + VADER sentiment scoring + weighted score aggregation",
      output: "Ranked recommendation list with sentiment polarity confidence tags",
      storage: "Cached similarity matrices and pre-computed sentiment indexes",
      description: "High-performance Python recommendation pipeline with vectorized matrix operations.",
    },
    keyFeatures: [
      "VADER lexicon analysis calculating positive, neutral, negative, and compound sentiment scores",
      "TF-IDF n-gram vectorization capturing descriptive domain semantics",
      "Dynamic hybrid weighting balancing thematic relevance with crowd sentiment",
      "Interactive recommendation explorer with tunable sentiment threshold sliders",
      "Comprehensive precision and diversity evaluation metrics",
    ],
    techStack: [
      { category: "NLP & Text Processing", items: ["NLTK", "VADER Sentiment", "Scikit-Learn TF-IDF"] },
      { category: "Data Science & Matrices", items: ["NumPy", "Pandas", "SciPy Cosine Similarity"] },
    ],
    outcomes: [
      "Improved recommendation precision by 24% over unweighted TF-IDF baseline models",
      "Successfully filtered out low-rated items matching query keywords",
      "Engineered vectorized similarity search executing in under 20ms over thousands of items",
    ],
  },
];
