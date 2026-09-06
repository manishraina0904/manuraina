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
    statusSuccess: "100% DAG PASS // 96% STEP SUCCESS",
    summary:
      "A custom multi-agent orchestration kernel routing tasks across 12 specialized agents via a JSON-based DAG, supporting 12 task categories and 30+ sub-actions, with a custom MCP client integrating 6 MCP servers and 10 built-in tools.",
    thumbnail: "/assets/project-nexus.png",
    githubUrl: "https://github.com/manishraina0904/Nexus-AI-OS-v2.0-Autonomous-Multi-Agent-Workspace-AI-Orchestration-Platform",
    tags: ["Multi-Agent DAG", "MCP Protocol", "LangGraph", "FastAPI", "Qdrant RAG", "React"],
    metrics: [
      { label: "Specialized Agents", value: "12", subtext: "JSON-based DAG Routing" },
      { label: "Pass Rate", value: "100%", subtext: "4/4 Tests & 6/6 Workflows" },
      { label: "Workflow Latency", value: "3.8–4.2s", subtext: "Full 4-Step Workflows" },
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
      "Engineered multi-agent orchestration kernel routing tasks across 12 specialized agents via a JSON-based DAG",
      "Supports 12 distinct task categories and 30+ sub-actions with dynamic task decomposition and supervisor gates",
      "Custom Model Context Protocol (MCP) client integrating 6 MCP servers and 10 built-in tools over stdio JSON-RPC",
      "Achieved 100% pass rate on integration tests (4/4) and DAG workflows (6/6), with 96% task-step success (24/25)",
      "High-performance async execution completing full 4-step agentic workflows in 3.8–4.2 seconds",
      "Hybrid storage architecture integrating PostgreSQL, MongoDB, Redis, and Qdrant vector memory",
    ],
    techStack: [
      { category: "Agent Core & MCP", items: ["LangChain", "LangGraph", "MCP (Model Context Protocol)", "Custom DAG Engine", "Function Calling"] },
      { category: "Backend & Systems", items: ["Python", "FastAPI", "AsyncIO", "Pydantic v2", "WebSockets"] },
      { category: "Databases & Vector", items: ["Qdrant Vector DB", "PostgreSQL", "MongoDB", "Redis"] },
      { category: "Frontend Interface", items: ["React.js", "TypeScript", "Tailwind CSS", "Live State DAG"] },
    ],
    outcomes: [
      "Achieved 100% pass rate on integration tests (4/4) and DAG workflows (6/6) with 96% task-step success (24/25)",
      "Completed full 4-step workflows end-to-end in 3.8–4.2 seconds with reliable task dispatch",
      "Integrated 6 MCP servers and 10 built-in tools via custom stdio JSON-RPC agent client",
    ],
  },
  {
    id: "ai-career-skill-intelligence",
    title: "AI Career Skill Intelligence Platform",
    tagline: "Full-Stack Skill-Gap Platform (FastAPI, React, PostgreSQL) with ML Regressor",
    category: "Full-Stack AI",
    featured: true,
    statusBadge: "SKILL GAP ENGINE: ACTIVE",
    statusSuccess: "98.2% EXTRACTION // 65.3ms END-TO-END",
    summary:
      "A full-stack skill-gap platform (FastAPI, React, PostgreSQL) with 39 REST endpoints, parsing 55 resumes at 98.2% extraction accuracy and computing readiness scores in 65.3ms end-to-end, trained on 32,217 job listings across 3,947 companies.",
    thumbnail: "/assets/project-career.png",
    githubUrl: "https://github.com/manishraina0904/ai-carrer-skill-gap-platform",
    tags: ["Full-Stack AI", "FastAPI", "React", "PostgreSQL", "Web Scraping", "NLP Semantic Match"],
    metrics: [
      { label: "Parsing Accuracy", value: "98.2%", subtext: "55 Resumes Evaluated" },
      { label: "Readiness Latency", value: "65.3ms", subtext: "End-to-End Computation" },
      { label: "Market Dataset", value: "32,217", subtext: "3,947 Companies & 94k Skills" },
    ],
    overview:
      "A full-stack career intelligence and skill-gap platform designed to extract, rank, and match developer skills against live tech market demands using 39 REST endpoints, NLP resume parsing, vector embeddings, and real-time scrapers.",
    problem:
      "Candidate profiles and job descriptions use varying terminology for identical competencies, causing traditional keyword-matching ATS systems to fail and obscuring real market skill demand trends.",
    solution:
      "Architected a full-stack skill-gap platform (FastAPI, React, PostgreSQL) with 39 REST endpoints, parsing 55 resumes at 98.2% extraction accuracy and computing readiness scores in 65.3ms end-to-end, coupled with a RandomForest regressor trained on 32,217 job listings.",
    architecture: {
      input: "Candidate resumes (PDF/Text) and scraped tech job postings",
      processing: "NLP entity extraction, skill vector embeddings calculation, semantic cosine matching & trend regression",
      output: "Interactive skill trend dashboard, candidate match scores, and personalized gap roadmaps",
      storage: "PostgreSQL relational schema with optimized indexing on skill frequencies and candidate profiles",
      description: "FastAPI REST backend with 39 endpoints powering asynchronous data pipelines and responsive React frontend.",
    },
    keyFeatures: [
      "Architected full-stack skill-gap platform (FastAPI, React, PostgreSQL) with 39 production REST endpoints",
      "NLP resume parsing engine parsing 55 resumes at 98.2% extraction accuracy in 65.3ms end-to-end",
      "Processed 32,217 job listings across 3,947 companies, feature-engineering 94,766 skill attributes",
      "Trained a RandomForest skill-demand regressor achieving R² = 0.9998 on market trend predictions",
      "Generated personalized readiness scores for 50+ candidate profiles (average 64.5%, top score 92%)",
      "Embedding-based semantic matching and automated Playwright scrapers indexing live job postings",
    ],
    techStack: [
      { category: "Backend & API", items: ["Python", "FastAPI (39 Endpoints)", "PostgreSQL", "SQLAlchemy", "Pydantic"] },
      { category: "ML & NLP", items: ["RandomForest Regressor", "Embedding Models", "NLP Tokenizers", "Scikit-Learn"] },
      { category: "Scraping & Data", items: ["Playwright", "BeautifulSoup", "Pandas", "Feature Engineering"] },
      { category: "Frontend", items: ["React.js", "TypeScript", "Tailwind CSS", "Recharts"] },
    ],
    outcomes: [
      "Processed 32,217 job listings across 3,947 companies, feature-engineering 94,766 skills",
      "Trained a RandomForest skill-demand regressor achieving an R² score of 0.9998",
      "Parsed 55 candidate resumes at 98.2% extraction accuracy with 65.3ms end-to-end scoring",
    ],
  },
  {
    id: "heart-disease-survival-prediction",
    title: "Heart Disease Survival Prediction Framework",
    tagline: "Survival-Risk Forecasting with LightGBM, IPCW Weighting & Cross-Validation",
    category: "Healthcare ML",
    featured: true,
    statusBadge: "LIGHTGBM + IPCW SURVIVAL MODEL",
    statusSuccess: "91.89% MEAN CV-AUC // +15.46% VS COX PH",
    summary:
      "A survival prediction model (LightGBM + IPCW) on 897 patient records with 13 clinical features, handling 67.89% censored observations via inverse probability of censoring weighting, achieving 91.89% mean cross-validation AUC (±1.37%) and outperforming Cox Proportional Hazards by 15.46% at the 180-day horizon.",
    thumbnail: "/assets/project-heart.png",
    githubUrl: "https://github.com/manishraina0904/Heart-Disease-Survival-Prediction-Framework",
    tags: ["Healthcare ML", "LightGBM", "IPCW Weighting", "Scikit-Learn", "Model Calibration", "Python"],
    metrics: [
      { label: "Mean CV-AUC", value: "91.89%", subtext: "±1.37% across 5 Folds (75 Runs)" },
      { label: "Censoring Handled", value: "67.89%", subtext: "IPCW Inverse Weighting" },
      { label: "Cox PH Outperformance", value: "+15.46%", subtext: "ROC-AUC 0.8534 -> 0.9026 (180d)" },
    ],
    overview:
      "A clinical survival prediction system engineered to handle right-censored patient data from a heart disease clinical dataset, combining LightGBM gradient boosting with IPCW weighting and rigorous statistical calibration.",
    problem:
      "Clinical outcome datasets frequently suffer from right-censoring where patient follow-up ends before the event occurs. Standard ML classifiers produce biased survival probabilities that jeopardize clinical decision-making.",
    solution:
      "Built a survival prediction model (LightGBM + IPCW) on 897 patient records with 13 clinical features, handling 67.89% censored observations via inverse probability of censoring weighting, achieving 91.89% mean cross-validation AUC (±1.37% across 5 folds, 75 tuning fit-runs) and outperforming Cox Proportional Hazards baseline by 15.46% at 180 days.",
    architecture: {
      input: "Clinical patient biomarkers (blood pressure, serum cholesterol, ECG, age, medical history)",
      processing: "Robust feature scaling, IPCW censoring weighting, LightGBM survival training, and Isotonic probability calibration",
      output: "Calibrated survival risk probabilities, cross-validation discrimination metrics, and feature importance",
      storage: "Clinical benchmark dataset stores with reproducible experiment tracking",
      description: "Rigorous ML pipeline engineered in Python with full statistical validation and calibration curves.",
    },
    keyFeatures: [
      "Built survival prediction model (LightGBM + IPCW) on 897 patient records with 13 clinical features",
      "Handled 67.89% censored observations via inverse probability of censoring weighting (IPCW)",
      "Achieved 91.89% mean cross-validation AUC (±1.37% across 5 folds and 75 tuning fit-runs)",
      "Outperformed a Cox Proportional Hazards baseline by 15.46% at the 180-day horizon (ROC-AUC 0.8534 to 0.9026)",
      "Applied Scikit-learn for 5-fold cross-validation and probability calibration",
      "SHAP-based clinical feature interpretability providing transparent risk attribution",
    ],
    techStack: [
      { category: "ML Modeling", items: ["LightGBM", "Scikit-Learn", "Lifelines", "IPCW Weighting"] },
      { category: "Statistical Evaluation", items: ["5-Fold Cross-Validation", "Isotonic Calibration", "ROC-AUC", "Cox PH Baseline"] },
      { category: "Data Science", items: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"] },
    ],
    outcomes: [
      "Achieved 91.89% mean cross-validation AUC (±1.37% across 5 folds, 75 tuning fit-runs)",
      "Outperformed a Cox Proportional Hazards baseline by 15.46% at the 180-day horizon (ROC-AUC 0.8534 to 0.9026)",
      "Successfully mitigated right-censoring bias across 67.89% observations using IPCW weighting",
    ],
  },
  {
    id: "ai-voice-receptionist",
    title: "AI Voice Receptionist (Speech-to-Speech AI Assistant)",
    tagline: "Speech-to-Speech Assistant with DeepFace Vision & Gmail IMAP Briefing",
    category: "Speech AI",
    featured: true,
    statusBadge: "SPEECH-TO-SPEECH ASSISTANT: ACTIVE",
    statusSuccess: "88% INTENT ACCURACY // 91.7% FACE CV",
    summary:
      "A speech-to-speech voice assistant achieving 88% intent recognition accuracy across 50 test queries, with 1.2–1.6s speech-to-response latency and offline pyttsx3 TTS (80–120ms), with real-time face-recognition (DeepFace, VGG-Face, OpenCV) achieving 91.7% accuracy across 60 live trials (~450–650ms/frame), plus automated Gmail IMAP email briefing.",
    thumbnail: "/assets/project-voice.png",
    githubUrl: "https://github.com/manishraina0904/AI-Voice-Receptionist-",
    tags: ["SpeechRecognition", "PyAudio", "pyttsx3", "DeepFace", "VGG-Face", "OpenCV", "Gmail IMAP"],
    metrics: [
      { label: "Intent Accuracy", value: "88%", subtext: "Across 50 Test Queries" },
      { label: "Speech Latency", value: "1.2–1.6s", subtext: "Offline TTS in 80–120ms" },
      { label: "Face Recognition", value: "91.7%", subtext: "DeepFace / VGG-Face (60 Trials)" },
    ],
    overview:
      "A full-duplex conversational voice assistant integrating speech-to-text input capture, offline voice generation, rule-based conversation logic, DeepFace visual facial recognition, and automated Gmail IMAP briefing.",
    problem:
      "Conventional reception kiosks require manual touchscreen inputs and lack multimodal awareness of returning visitors or conversational context during receptionist interactions.",
    solution:
      "Built a speech-to-speech voice assistant achieving 88% intent recognition accuracy across 50 test queries with 1.2–1.6s latency and 80–120ms pyttsx3 TTS, with real-time face recognition (DeepFace, VGG-Face, OpenCV) achieving 91.7% accuracy across 60 live trials at ~450–650ms per frame, plus automated Gmail IMAP briefing.",
    architecture: {
      input: "Microphone audio stream (PyAudio) + webcam video feed (OpenCV)",
      processing: "Speech recognition transcription + DeepFace/VGG-Face matching + dialogue state machine + Gmail IMAP parser",
      output: "Natural synthesized speech output (pyttsx3 offline) and automated email briefings",
      storage: "Visitor profile face embeddings and query dialogue history",
      description: "Python event-driven loop coordinating audio capture, facial recognition, and conversational execution.",
    },
    keyFeatures: [
      "Built a speech-to-speech voice assistant achieving 88% intent recognition accuracy across 50 test queries",
      "1.2–1.6s speech-to-response latency and offline pyttsx3 TTS generating responses in 80–120ms",
      "Integrated real-time face-recognition layer (DeepFace, VGG-Face, OpenCV) achieving 91.7% accuracy across 60 live trials",
      "Fast inference at ~450–650ms per frame for immediate visitor identification",
      "Automated Gmail IMAP email briefing workflow summarizing appointments and visitor notes",
      "Rule-based conversation logic for automated query handling and appointment routing",
    ],
    techStack: [
      { category: "Audio & Speech", items: ["SpeechRecognition", "PyAudio", "pyttsx3 (Offline TTS)"] },
      { category: "Computer Vision", items: ["DeepFace", "VGG-Face", "OpenCV", "dlib"] },
      { category: "Integrations & Core", items: ["Gmail IMAP API", "Python 3.11", "Threading"] },
    ],
    outcomes: [
      "Achieved 88% intent recognition accuracy across 50 benchmark queries with 1.2–1.6s latency",
      "Integrated real-time face-recognition layer achieving 91.7% accuracy across 60 live trials",
      "Engineered automated Gmail IMAP email briefing for hands-free office operations",
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
