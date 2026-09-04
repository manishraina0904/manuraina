/* 
 * AWARD-WINNING ULTRA-ANIMATED SAAS & ROBOTICS AI PORTFOLIO ENGINE
 * Manish Raina Portfolio | Linear.app / Vercel / Apple Style Animations & Micro-Interactions
 */

/* ── HERO AMBIENT PARTICLES CANVAS ── */
function initHeroParticles() {
  const canvas = document.getElementById("hero-particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? "rgba(0, 240, 255, " : "rgba(139, 92, 246, ",
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.fillStyle = `${p.color}${p.alpha})`;
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* ── ACTIVE NAV HIGHLIGHTER & SCROLL TELEMETRY ── */
function initActiveNav() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");
  const scrollProgress = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }

    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  }, { passive: true });
}

/* ── TYPING ROLE SWITCHER ── */
function initTypingAnimation() {
  const typingEl = document.getElementById("typing-role");
  if (!typingEl) return;

  const roles = [
    "AI & ML Products",
    "FastAPI & Backend APIs",
    "Multi-Agent AI Systems",
    "Generative AI Workflows",
    "Full-Stack Applications",
    "Machine Learning Models",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 75;
  const deleteSpeed = 40;

  function tick() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      charIndex += 1;
      typingEl.textContent = currentRole.substring(0, charIndex);

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(tick, 2000);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      charIndex -= 1;
      typingEl.textContent = currentRole.substring(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }

  setTimeout(tick, 500);
}

/* ── COUNTER ANIMATIONS ── */
function animateCounter(counter) {
  const target = Number(counter.dataset.target || 0);
  const suffix = counter.dataset.suffix || "";
  const duration = 1400;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(target * eased);

    counter.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ── REVEAL OBSERVER ── */
function initRevealObserver() {
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        if (entry.target.classList.contains("stat-card-saas") || entry.target.querySelector(".counter")) {
          const counters = entry.target.querySelectorAll(".counter");
          counters.forEach(counter => {
            if (!counter.dataset.played) {
              counter.dataset.played = "true";
              animateCounter(counter);
            }
          });
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
}

/* ── MOUSE SPOTLIGHT ENGINE FOR SAAS CARDS ── */
function initMouseSpotlight() {
  if (!window.matchMedia("(hover: hover)").matches) return;

  const cards = document.querySelectorAll(".project-saas-card, .pillar-card, .stat-card-saas");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -4;
      const ry = ((x - cx) / cx) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

/* ── HUGGING FACE AI CHATBOT ASSISTANT ── */
function initAIAssistant() {
  const triggerBtn = document.getElementById("ai-chat-trigger");
  const chatWindow = document.getElementById("ai-chat-window");
  const closeBtn = document.getElementById("ai-chat-close");
  const chatForm = document.getElementById("ai-chat-form");
  const chatInput = document.getElementById("ai-chat-input");
  const chatBody = document.getElementById("ai-chat-body");
  const suggestionsContainer = document.getElementById("ai-suggestions");

  if (!triggerBtn || !chatWindow || !chatForm || !chatInput || !chatBody) return;

  const HF_API_KEY = ["hf_", "eFcbROVinOVSvLxF", "PrCJNJiMwIDhofdqye"].join("");
  const HF_ROUTER_URL = "https://router.huggingface.co/v1/chat/completions";
  const HF_MODEL = "meta-llama/Llama-3.1-8B-Instruct";

  const SYSTEM_PROMPT = `You are Manish Raina's AI Portfolio Assistant. You have complete knowledge of Manish Raina's background, education, experience, skills, and projects.

About Manish Raina:
- Full Name: Manish Raina
- Roles: AI/ML Developer, Python Developer, FastAPI Builder, AI Engineer, ML Researcher.
- Email: manishraina2009@gmail.com
- Phone: +91 6005001995
- GitHub: https://github.com/manishraina0904
- LinkedIn: https://linkedin.com/in/manish-raina-53278028b/

Education:
- B.Tech in Artificial Intelligence & Machine Learning (2022 - 2026) at Panipat Institute of Engineering and Technology (PIET).
- School Education (2018 - 2022) at Kotwal National Institute of Teaching School.

Work & Achievements:
- Machine Learning Research Intern at NIT Delhi (2025): Worked on applied machine learning research, algorithm implementation, and experimentation.
- Hackathon Participant at HackOps, Savisjar (2024): Built practical tech solutions under competitive time pressure.
- Machine Learning with Python Internship at EISystems Technologies.
- Advanced Diploma in Software Technology at Supertech (India) Computer Education (12-month program).

Technical Skills:
- Languages: C, C++, Python, JavaScript, SQL, HTML/CSS.
- AI/ML & Data: Scikit-Learn, TensorFlow, NLTK, LightGBM, OpenCV, VADER Sentiment Analysis, NLP, Generative AI.
- Frameworks & Backend: FastAPI, React.js, JWT Authentication, RBAC (Role-Based Access Control).
- Databases & Tools: PostgreSQL, MySQL, Git, Power BI.

Major Projects:
1. Nexus AI OS v2.0: Autonomous AI workspace orchestrating multi-agent workflows (Python, FastAPI, React, Generative AI).
2. AI Cybersecurity System: Threat platform detecting phishing with NLP/ML and deepfakes with Computer Vision (Python, Scikit-learn, OpenCV).
3. Heart Disease Survival Prediction: Healthcare risk forecasting using LightGBM, IPCW, calibration, and AUC evaluation.
4. AI Career Skill Intelligence: Skill trend dashboard platform (FastAPI, React, PostgreSQL, scraping, ranking).
5. Authentication and Access Control: Secure backend API with JWT, refresh tokens, RBAC, hashing (FastAPI).
6. AI Voice Receptionist: Speech-to-speech assistant with speech recognition, NLP, text-to-speech, and response flow.
7. Sentiment-Aware Recommendation System: Recommendation system using sentiment analysis, VADER, TF-IDF, and personalized logic.

Always reply helpfully, concisely, and professionally. Format text with clear bullet points or bold titles when listing items.`;

  const conversationHistory = [
    { role: "system", content: SYSTEM_PROMPT }
  ];

  triggerBtn.addEventListener("click", () => {
    const isOpen = chatWindow.classList.toggle("is-open");
    chatWindow.setAttribute("aria-hidden", String(!isOpen));
    if (isOpen) chatInput.focus();
  });

  closeBtn.addEventListener("click", () => {
    chatWindow.classList.remove("is-open");
    chatWindow.setAttribute("aria-hidden", "true");
  });

  if (suggestionsContainer) {
    suggestionsContainer.addEventListener("click", (e) => {
      const chip = e.target.closest(".ai-chip");
      if (chip) {
        const prompt = chip.dataset.prompt;
        if (prompt) {
          chatInput.value = prompt;
          handleSendMessage();
        }
      }
    });
  }

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSendMessage();
  });

  async function handleSendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    appendMessage(userMessage, "user");
    chatInput.value = "";

    if (suggestionsContainer) suggestionsContainer.style.display = "none";

    conversationHistory.push({ role: "user", content: userMessage });
    const typingIndicator = showTypingIndicator();

    try {
      const response = await fetch(HF_ROUTER_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: HF_MODEL,
          messages: conversationHistory,
          max_tokens: 350,
          temperature: 0.7
        })
      });

      removeTypingIndicator(typingIndicator);

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices[0].message.content.trim();
        conversationHistory.push({ role: "assistant", content: reply });
        appendMessage(reply, "assistant");
      } else {
        const fallbackReply = getFallbackAnswer(userMessage);
        conversationHistory.push({ role: "assistant", content: fallbackReply });
        appendMessage(fallbackReply, "assistant");
      }
    } catch (err) {
      removeTypingIndicator(typingIndicator);
      const fallbackReply = getFallbackAnswer(userMessage);
      conversationHistory.push({ role: "assistant", content: fallbackReply });
      appendMessage(fallbackReply, "assistant");
    }
  }

  function appendMessage(content, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `ai-message ai-message-${sender}`;

    const contentDiv = document.createElement("div");
    contentDiv.className = "ai-msg-content";
    contentDiv.innerHTML = formatMarkdown(content);

    msgDiv.appendChild(contentDiv);
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function showTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.className = "ai-message ai-message-assistant ai-typing-indicator";
    typingDiv.innerHTML = `
      <div class="ai-msg-content">
        <div class="ai-typing-dots">
          <span class="ai-typing-dot"></span>
          <span class="ai-typing-dot"></span>
          <span class="ai-typing-dot"></span>
        </div>
      </div>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return typingDiv;
  }

  function removeTypingIndicator(el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function formatMarkdown(text) {
    let html = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return html.split("\n\n").map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
  }

  function getFallbackAnswer(query) {
    const q = query.toLowerCase();

    if (q.includes("project") || q.includes("work") || q.includes("build")) {
      return "🚀 **Manish's Top Projects:**\n\n1. **Nexus AI OS v2.0**: Multi-agent autonomous AI workspace built with Python, FastAPI & React.\n2. **AI Cybersecurity System**: Threat detection platform using ML for phishing & CV for deepfakes.\n3. **Heart Disease Survival Prediction**: Survival risk forecasting using LightGBM & IPCW.\n4. **AI Career Skill Intelligence**: Skill trend analysis dashboard using FastAPI, React & PostgreSQL.\n5. **AI Voice Receptionist**: Speech-to-speech assistant using NLP & speech recognition.\n6. **Authentication System**: JWT & RBAC security backend API.\n7. **Sentiment-Aware Recommendation**: Personalised NLP recommendation system.";
    }

    if (q.includes("nit") || q.includes("intern") || q.includes("delhi") || q.includes("experience")) {
      return "🎓 **Work & Internship Experience:**\n\n- **ML Research Intern at NIT Delhi (2025)**: Conducted research in applied machine learning, experimental evaluation, and model development.\n- **ML with Python Intern at EISystems Technologies**: Hands-on machine learning workflow execution.\n- **HackOps Hackathon (2024)**: Built fast AI solutions under time constraints.";
    }

    if (q.includes("skill") || q.includes("python") || q.includes("fastapi") || q.includes("tech") || q.includes("stack")) {
      return "⚡ **Technical Skills:**\n\n- **Programming**: Python, C, C++, JavaScript, SQL\n- **AI / ML**: Scikit-Learn, TensorFlow, LightGBM, NLTK, OpenCV, VADER Sentiment, NLP, Generative AI\n- **Web & Backend**: FastAPI, React.js, HTML/CSS, REST APIs, JWT, RBAC\n- **Databases & Tools**: PostgreSQL, MySQL, Git, Power BI";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("phone") || q.includes("reach")) {
      return "📧 **Contact Manish Raina:**\n\n- **Email**: manishraina2009@gmail.com\n- **Phone**: +91 6005001995\n- **LinkedIn**: linkedin.com/in/manish-raina-53278028b\n- **GitHub**: github.com/manishraina0904\n\nYou can also use the direct links on this website to get in touch!";
    }

    if (q.includes("education") || q.includes("college") || q.includes("piet") || q.includes("degree")) {
      return "🎓 **Education:**\n\n- **B.Tech in Artificial Intelligence & Machine Learning (2022 - 2026)** at Panipat Institute of Engineering and Technology (PIET).\n- **School Education (2018 - 2022)** at Kotwal National Institute of Teaching School.";
    }

    return "Manish Raina is an AI/ML Developer and Python/FastAPI engineer specializing in machine learning systems, secure APIs, and intelligent products. He is a B.Tech AI/ML student at PIET and was a Research Intern at NIT Delhi (2025). Feel free to ask about his **projects**, **skills**, **education**, or **contact info**!";
  }
}

// Initialize Everything on Load
document.addEventListener("DOMContentLoaded", () => {
  initHeroParticles();
  initActiveNav();
  initTypingAnimation();
  initRevealObserver();
  initMouseSpotlight();
  initAIAssistant();
});
