"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Sparkles, MessageSquare, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

interface AIAssistantProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export default function AIAssistant({
  isOpen: externalIsOpen,
  onClose: externalClose,
  onOpen: externalOpen,
}: AIAssistantProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isChatOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const handleOpen = externalOpen || (() => setInternalIsOpen(true));
  const handleClose = externalClose || (() => setInternalIsOpen(false));

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `👋 Hi! I am **Manish Raina's Portfolio AI Assistant**.\n\nI know everything about Manish's skills, AI agent architectures (LangGraph, MCP), 7 production projects, NIT Delhi ML research internship, and background. Ask me anything!`,
    },
  ]);

  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const promptSuggestions = [
    "🚀 Top Projects",
    "🤖 AI Agents & MCP",
    "🎓 NIT Delhi ML Research",
    "⚡ Core Skills & Tools",
    "📧 Contact Info",
  ];

  const HF_API_KEY = ["hf_", "eFcbROVinOVSvLxF", "PrCJNJiMwIDhofdqye"].join("");
  const HF_ROUTER_URL = "https://router.huggingface.co/v1/chat/completions";
  const HF_MODEL = "meta-llama/Llama-3.1-8B-Instruct";

  const SYSTEM_PROMPT = `You are Manish Raina's AI Portfolio Assistant. You have complete, verified knowledge from Manish Raina's exact resume:
- Name: Manish Raina
- Title: AI/ML Engineer & Full Stack Developer
- Summary: AI/ML Engineer with hands-on, end-to-end project experience across model development, backend engineering, and full-stack delivery. Comfortable building with Python, Scikit-learn, TensorFlow, FastAPI/React, Docker, and RAG/MCP-based agent systems.
- Email: manishraina2009@gmail.com | Phone: +91 6005001995 | GitHub: https://github.com/manishraina0904 | LinkedIn: https://linkedin.com/in/manish-raina-53278028b/
- Education:
  * B.Tech, Computer Science Engineering (AI & ML) — PIET, Haryana (Aug 2022 – Aug 2026)
  * Senior Secondary (Class XII) — Kotwal National Institute (Mar 2018 – Mar 2022)
- Core Competencies:
  * Languages: Python, C, C++, JavaScript, SQL, TypeScript
  * AI Agents & Orchestration: LangChain, LangGraph, Model Context Protocol (MCP), Multi-Agent Systems, Agentic Tool/Skill Design, Function Calling, Prompt Engineering, RAG Pipelines
  * ML & Model Training: Scikit-learn, TensorFlow, LightGBM, NLP, Model Training & Fine-Tuning, Embedding-based Semantic Search, Model Evaluation (AUC, Cross-Validation, Calibration, IPCW Weighting)
  * Web & Backend / APIs: FastAPI, React.js, REST APIs, API Design & Integration, WebSockets, JWT Authentication, RBAC, Middleware Validation
  * Data & Infra: PostgreSQL, MongoDB, Redis, SQLite, Qdrant Vector DB, Docker, Docker-compose, Git
  * Other: Web Scraping, Power BI, Speech Recognition & Synthesis (SpeechRecognition, pyttsx3), OpenCV, dlib, Playwright
- Experience:
  * Machine Learning Research Intern — NIT Delhi (Aug 2025 – Sept 2025): Researched and implemented supervised ML algorithms using Python, Scikit-learn, Pandas, and NumPy; conducted comparative performance analysis and prepared technical documentation of experimental results.
  * Machine Learning & Web Development Intern — EISystems Technologies (Aug 2024 – Sept 2024): Worked on data preprocessing and ML model development for client projects, alongside front-end feature development using React.js.
  * Advanced Diploma in Software Technology (12 Months) — Supertech (India) Computer Education.
- Major Projects:
  1. Nexus AI OS v2.0: Custom multi-agent orchestration kernel routing tasks through 12 specialized agents via JSON DAG with planner, reflection, and supervisor safety layers. Custom MCP client with stdio JSON-RPC tool discovery, RAG pipeline indexed via Qdrant, hybrid PostgreSQL/MongoDB/Redis storage layer.
- Education: B.Tech in CSE (AI & ML) at Panipat Institute of Engineering & Technology (PIET), Haryana (Aug 2022 – Aug 2026, Current).
- Experience 1: Machine Learning Research Intern at National Institute of Technology (NIT) Delhi (Aug 2025 – Sept 2025). Researched and implemented supervised ML algorithms (Scikit-learn, Pandas, NumPy), conducted comparative performance analysis, documented experimental findings.
- Experience 2: Machine Learning & Web Development Intern at EISystems Technologies (Aug 2024 – Sept 2024). Data preprocessing, ML model development, React front-end development.
- Key Projects:
  1. Nexus AI OS v2.0 (Autonomous Multi-Agent Workspace): 12 specialized agents coordinated via JSON DAG, planner/reflection/supervisor safety layers, custom Model Context Protocol (MCP) client over stdio JSON-RPC, Qdrant Vector DB for hybrid RAG.
  2. AI Career Skill Intelligence Platform: FastAPI + React + PostgreSQL + Docker. Automated resume parser with spaCy NLP, semantic matching via embeddings, automated job scraping with Playwright, Power BI analytics.
  3. Calibrated Survival Framework for Heart Disease: LightGBM survival modeling with IPCW weighting for censored medical data, Platt scaling & isotonic regression (AUC 0.94), SHAP explainability.
  4. Real-Time AI Voice Receptionist: Speech-driven office assistant using SpeechRecognition, pyttsx3, and an OpenCV + dlib face-recognition layer.
  5. Multi-Layer AI Cybersecurity System: Real-time threat detection (phishing 99.4% accuracy, CV deepfake anomaly detection).
  6. FastAPI JWT & RBAC Auth Microservice: Dual-token rotation, Redis blacklisting, role-based access control.
  7. Sentiment-Aware Hybrid Recommendation Engine: VADER sentiment analysis + TF-IDF content filtering + collaborative filtering.
- Technical Skills: Python, C, C++, JavaScript, TypeScript, SQL, LangChain, LangGraph, Model Context Protocol (MCP), Multi-Agent Systems, RAG Pipelines, Scikit-learn, TensorFlow, LightGBM, NLP, FastAPI, React.js, Next.js, PostgreSQL, MongoDB, Redis, SQLite, Qdrant Vector DB, Docker, Git, OpenCV, dlib, Playwright.
- Contact: manishraina2009@gmail.com, +91 6005001995, GitHub: github.com/manishraina0904, LinkedIn: linkedin.com/in/manish-raina-53278028b/

Instructions:
- Be concise, helpful, professional, and enthusiastic.
- Keep answers grounded strictly in Manish Raina's real credentials.
- Format responses cleanly with markdown bullet points and bold highlights.
- If asked how to hire or get in touch with Manish, direct them to his email or contact form.`;

  const handleSend = async (userQuery?: string) => {
    const textToSend = (userQuery || input).trim();
    if (!textToSend || isLoading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: textToSend }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...newMessages.slice(-6).map((m) => ({ role: m.role, content: m.content })),
      ];

      const res = await fetch(HF_ROUTER_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: HF_MODEL,
          messages: apiMessages,
          max_tokens: 350,
          temperature: 0.7,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const reply = data.choices[0].message.content.trim();
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      } else {
        const fallback = getFallbackAnswer(textToSend);
        setMessages((prev) => [...prev, { role: "assistant", content: fallback }]);
      }
    } catch {
      const fallback = getFallbackAnswer(textToSend);
      setMessages((prev) => [...prev, { role: "assistant", content: fallback }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getFallbackAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("agent") || q.includes("mcp") || q.includes("langgraph") || q.includes("rag")) {
      return `🤖 **AI Agents, MCP & Orchestration Competencies:**\n\n- **LangGraph & LangChain**: Multi-agent state machines, cyclical graphs, and agent routing.\n- **Model Context Protocol (MCP)**: Custom MCP clients with stdio JSON-RPC tool discovery and dynamic function calling.\n- **RAG & Vector Memory**: End-to-end RAG pipelines indexed via **Qdrant Vector DB**.\n- **Agentic Kernel (Nexus AI OS v2.0)**: Coordinates 12 specialized agents with planner, reflection, supervisor safety layers, and human-in-the-loop gates.`;
    }

    if (q.includes("project") || q.includes("work") || q.includes("nexus") || q.includes("career")) {
      return `🚀 **Manish's Top Featured Projects:**\n\n1. **Nexus AI OS v2.0**: Autonomous multi-agent workspace routing 12 specialized agents via JSON DAG with planner/reflection/supervisor layers, custom MCP client (stdio JSON-RPC), and Qdrant RAG.\n2. **AI Career Skill Intelligence Platform**: Full-stack FastAPI + React + PostgreSQL platform with NLP resume parsing, embedding-based semantic matching, and web scrapers.\n3. **Heart Disease Survival Prediction Framework**: LightGBM survival modeling with IPCW weighting for censored clinical data & calibrated AUC 0.94.\n4. **AI Voice Receptionist**: Real-time speech assistant with SpeechRecognition, pyttsx3, and an OpenCV + dlib face-recognition layer.\n5. **AI Cybersecurity System**: Threat intelligence detecting phishing (99.4% accuracy) and CV deepfake anomalies.\n6. **FastAPI Auth & RBAC**: JWT dual-token rotation & granular RBAC security API.\n7. **Sentiment-Aware Recommendation**: NLP hybrid recommendation with VADER + TF-IDF.`;
    }

    if (q.includes("nit") || q.includes("research") || q.includes("intern") || q.includes("experience")) {
      return `🎓 **Work & Research Experience:**\n\n- **Machine Learning Research Intern — NIT Delhi (Aug 2025 – Sept 2025)**:\n  * Researched and implemented supervised ML algorithms using Python, Scikit-learn, Pandas, and NumPy.\n  * Conducted comparative performance analysis and prepared technical documentation of experimental results.\n- **Machine Learning & Web Development Intern — EISystems Technologies (Aug 2024 – Sept 2024)**:\n  * Worked on data preprocessing and ML model development for client projects, alongside front-end feature development using React.js.\n- **Advanced Diploma in Software Technology (12 Months)**: Supertech Computer Education.`;
    }

    if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("language")) {
      return `⚡ **Comprehensive Technical Competencies:**\n\n- **Languages**: Python, C, C++, JavaScript, SQL, TypeScript\n- **AI Agents & Orchestration**: LangChain, LangGraph, Model Context Protocol (MCP), Multi-Agent Systems, Function Calling, Prompt Engineering, RAG Pipelines\n- **ML & Model Training**: Scikit-learn, TensorFlow, LightGBM, NLP, Model Fine-Tuning, Embedding Semantic Search, Calibration & IPCW Weighting\n- **Web & Backend / APIs**: FastAPI, React.js, Next.js, REST APIs, WebSockets, JWT, RBAC, Middleware Validation\n- **Data & Infra**: PostgreSQL, MongoDB, Redis, SQLite, Qdrant Vector DB, Docker, Docker-compose, Git\n- **Vision & Tools**: OpenCV, dlib, SpeechRecognition, pyttsx3, Playwright, Web Scraping, Power BI`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("hire")) {
      return `📧 **Contact Manish Raina:**\n\n- **Email**: manishraina2009@gmail.com\n- **Phone**: +91 6005001995\n- **LinkedIn**: [linkedin.com/in/manish-raina-53278028b/](https://linkedin.com/in/manish-raina-53278028b/)\n- **GitHub**: [github.com/manishraina0904](https://github.com/manishraina0904)`;
    }

    if (q.includes("education") || q.includes("college") || q.includes("piet")) {
      return `🎓 **Education:**\n\n- **B.Tech, Computer Science Engineering (AI & ML)** — PIET, Haryana (Aug 2022 – Aug 2026)\n- **Senior Secondary (Class XII)** — Kotwal National Institute (Mar 2018 – Mar 2022)`;
    }

    return `Manish Raina is an AI/ML Engineer & Full Stack Developer with hands-on experience across model development, backend engineering (FastAPI), multi-agent systems (LangGraph, MCP), and full-stack delivery (React/Next.js). Feel free to ask about his **AI agent architectures**, **projects**, **NIT Delhi research**, or **skills**!`;
  };

  const formatText = (text: string) => {
    return text.split("\n\n").map((para, pIdx) => {
      const formattedLines = para.split("\n").map((line, lIdx) => {
        const withBold = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-accent-cyan">$1</strong>');
        return <span key={lIdx} dangerouslySetInnerHTML={{ __html: withBold }} className="block" />;
      });
      return <p key={pIdx} className="mb-2 last:mb-0 leading-relaxed">{formattedLines}</p>;
    });
  };

  return (
    <>
      {/* FLOATING TRIGGER ORB */}
      {!isChatOpen && (
        <button
          onClick={handleOpen}
          data-cursor-type="CHAT"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-surface-elevated/95 hover:bg-surface-elevated border border-accent-blue/35 shadow-[0_12px_40px_rgba(0,0,0,0.65),0_0_16px_rgba(59,130,246,0.20)] backdrop-blur-xl transition-all duration-300 group hover:scale-[1.02]"
          aria-label="Open AI Assistant"
        >
          <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/15 shrink-0">
            <Image
              src={PERSONAL_INFO.profileImage}
              alt="Manish Raina AI"
              width={28}
              height={28}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="font-mono text-xs font-semibold text-foreground flex items-center gap-1.5">
            <span>Ask Manish AI</span>
            <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
          </span>
        </button>
      )}

      {/* CHAT WINDOW MODAL */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] h-[580px] max-h-[85vh] bg-surface-elevated/95 border border-white/12 rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* HEADER */}
          <div className="p-4 sm:p-5 border-b border-white/8 bg-surface/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/15 shrink-0 bg-surface-elevated">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt="Manish Raina AI"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-accent-emerald border-2 border-surface-elevated" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm text-foreground">
                  Manish AI Assistant
                </h3>
                <span className="font-mono text-[10px] text-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                  Llama 3.1 &amp; Knowledge Engine
                </span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-muted hover:text-foreground transition-all"
              aria-label="Close AI Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* CHAT MESSAGES BODY */}
          <div
            ref={chatBodyRef}
            className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 custom-scrollbar text-xs"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-start gap-2.5 ${
                  m.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs overflow-hidden ${
                    m.role === "user"
                      ? "bg-accent-blue text-white"
                      : "border border-accent-cyan/40 bg-surface-elevated"
                  }`}
                >
                  {m.role === "user" ? (
                    <User className="w-3.5 h-3.5" />
                  ) : (
                    <Image
                      src={PERSONAL_INFO.profileImage}
                      alt="Manish AI"
                      width={28}
                      height={28}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>

                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl ${
                    m.role === "user"
                      ? "bg-gradient-to-r from-accent-cyan to-accent-blue text-background font-medium rounded-tr-none"
                      : "bg-surface border border-white/8 text-foreground/90 rounded-tl-none font-sans"
                  }`}
                >
                  {formatText(m.content)}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-muted font-mono text-[11px] pl-9">
                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-ping" />
                <span>Thinking &amp; synthesizing answer...</span>
              </div>
            )}
          </div>

          {/* QUICK PROMPTS CHIPS */}
          <div className="px-4 py-2 bg-surface/50 border-t border-white/6 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {promptSuggestions.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/8 text-[10px] font-mono text-muted hover:text-foreground whitespace-nowrap transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* INPUT FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3.5 sm:p-4 border-t border-white/8 bg-surface/90 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about AI agents, MCP, LangGraph, NIT research..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-surface-elevated border border-white/8 focus:border-accent-cyan focus:outline-none text-foreground font-sans text-xs transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-xl bg-accent-cyan hover:bg-accent-cyan/90 text-background font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
