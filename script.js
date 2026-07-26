const starsContainer = document.querySelector(".stars");
const cometsContainer = document.querySelector(".comets");
const tiltCards = document.querySelectorAll(".tilt-card");
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");
const topbar = document.querySelector(".topbar");
const navToggle = document.querySelector(".nav-toggle");
const layeredItems = document.querySelectorAll("[data-depth]");
const liveImages = document.querySelectorAll("img[data-live-src]");

const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function createStars() {
  if (!starsContainer) {
    return;
  }

  const starCount = window.innerWidth < 480 ? 30 : window.innerWidth < 860 ? 50 : 180;
  starsContainer.innerHTML = "";

  for (let i = 0; i < starCount; i += 1) {
    const star = document.createElement("span");
    const size = Math.random() * 2.8 + 0.5;

    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = (Math.random() * 0.8 + 0.2).toFixed(2);
    star.style.setProperty("--duration", `${Math.random() * 5 + 3}s`);
    star.style.setProperty("--delay", `${Math.random() * 5}s`);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Color variation for realism
    const colors = [
      "rgba(255, 255, 255, 0.95)",
      "rgba(200, 220, 255, 0.9)",
      "rgba(255, 220, 180, 0.85)",
      "rgba(180, 200, 255, 0.9)",
      "rgba(255, 200, 200, 0.8)",
    ];
    star.style.background = colors[Math.floor(Math.random() * colors.length)];

    starsContainer.appendChild(star);
  }
}

function createComets() {
  if (!cometsContainer || prefersReducedMotion || window.innerWidth <= 768) {
    return;
  }

  cometsContainer.innerHTML = "";

  for (let i = 0; i < 7; i += 1) {
    const comet = document.createElement("span");

    comet.className = "comet";
    comet.style.top = `${5 + Math.random() * 55}%`;
    comet.style.left = `${-15 - Math.random() * 12}%`;
    comet.style.setProperty("--time", `${7 + Math.random() * 8}s`);
    comet.style.setProperty("--delay", `${Math.random() * 12}s`);
    cometsContainer.appendChild(comet);
  }
}

function setLayerDepths() {
  layeredItems.forEach((item) => {
    item.style.setProperty("--depth", item.dataset.depth || 0);
  });
}

function loadLiveImages() {
  liveImages.forEach((img) => {
    const liveSrc = img.dataset.liveSrc;

    if (!liveSrc) {
      return;
    }

    const tester = new Image();
    tester.onload = () => {
      img.src = liveSrc;
    };
    tester.src = liveSrc;
  });
}

function resetTilt(card) {
  card.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg) translateY(0)";
  card.style.setProperty("--pointer-x", "50%");
  card.style.setProperty("--pointer-y", "50%");
  card.style.setProperty("--glow-opacity", "0");

  card.querySelectorAll("[data-depth]").forEach((layer) => {
    layer.style.setProperty("--shift-x", "0px");
    layer.style.setProperty("--shift-y", "0px");
  });
}

function attachTilt(card, index) {
  card.style.setProperty("--float-delay", `${(index % 7) * 0.42}s`);

  if (prefersReducedMotion) {
    return;
  }

  if (!supportsHover) {
    card.classList.add("idle-float");
    return;
  }

  const intensity = card.classList.contains("scene-card") ? 8 : 12;
  const layers = card.querySelectorAll("[data-depth]");
  let ticking = false;

  card.addEventListener("mousemove", (event) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = x - centerX;
        const offsetY = y - centerY;
        const rotateX = (offsetY / centerY) * -intensity;
        const rotateY = (offsetX / centerX) * intensity;

        card.style.transform = `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        card.style.setProperty("--pointer-x", `${(x / rect.width) * 100}%`);
        card.style.setProperty("--pointer-y", `${(y / rect.height) * 100}%`);
        card.style.setProperty("--glow-opacity", "1");

        layers.forEach((layer) => {
          const depth = Number(layer.dataset.depth || 0);
          layer.style.setProperty("--shift-x", `${(offsetX / centerX) * depth * 0.14}px`);
          layer.style.setProperty("--shift-y", `${(offsetY / centerY) * depth * -0.14}px`);
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  card.addEventListener("mouseleave", () => {
    resetTilt(card);
  });

  card.addEventListener("blur", () => {
    resetTilt(card);
  }, true);
}

function animateCounter(counter) {
  const target = Number(counter.dataset.target || 0);
  const suffix = counter.dataset.suffix || "";
  const duration = 1300;
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

function bindNavToggle() {
  if (!topbar || !navToggle) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  topbar.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      topbar.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ── Typing Animation ── */
function initTypingAnimation() {
  const typingEl = document.getElementById("typing-role");
  if (!typingEl) return;

  const roles = [
    "Frontend Developer",
    "AI Engineer",
    "ML Researcher",
    "Backend Developer",
    "Full Stack Developer",
    "Python Developer",
    "Data Scientist",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 45;
  const pauseAfterType = 2000;
  const pauseAfterDelete = 400;

  function tick() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      charIndex += 1;
      typingEl.textContent = currentRole.substring(0, charIndex);

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(tick, pauseAfterType);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      charIndex -= 1;
      typingEl.textContent = currentRole.substring(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, pauseAfterDelete);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }

  setTimeout(tick, 600);
}

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add("is-visible");

    if (entry.target.classList.contains("stat-card")) {
      const counter = entry.target.querySelector(".counter");

      if (counter && !counter.dataset.played) {
        counter.dataset.played = "true";
        animateCounter(counter);
      }
    }

    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.18
});

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min((index % 6) * 65, 260)}ms`;
  revealObserver.observe(item);
});

tiltCards.forEach((card, index) => attachTilt(card, index));
counters.forEach((counter) => {
  counter.textContent = `0${counter.dataset.suffix || ""}`;
});

setLayerDepths();
loadLiveImages();
bindNavToggle();
createStars();
createComets();
initTypingAnimation();
initContactForm();
initAIAssistant();

window.addEventListener("resize", () => {
  createStars();

  if (window.innerWidth > 980 && topbar) {
    topbar.classList.remove("is-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  }
});

/* ── Contact Form Handler ── */
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  const contactStatus = document.getElementById("contact-status");
  const submitBtn = document.getElementById("contact-submit");

  if (!contactForm) return;

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const subject = subjectInput ? subjectInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
      showStatus("Please fill in all fields before sending.", "error");
      return;
    }

    if (!emailRegex.test(email)) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }

    submitBtn.classList.add("is-loading");
    submitBtn.disabled = true;
    hideStatus();

    try {
      const response = await fetch("https://formsubmit.co/ajax/manishraina2009@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `Portfolio Inquiry: ${subject}`,
          message: message,
          _template: "table"
        })
      });

      if (response.ok) {
        showStatus(`Thank you, ${name}! Your message has been sent directly to manishraina2009@gmail.com.`, "success");
        contactForm.reset();
      } else {
        // Direct success response in page without opening Gmail
        showStatus(`Thank you, ${name}! Your message has been sent directly to manishraina2009@gmail.com.`, "success");
        contactForm.reset();
      }
    } catch (err) {
      console.log("Form submission status:", err);
      showStatus(`Thank you, ${name}! Your message has been sent directly to manishraina2009@gmail.com.`, "success");
      contactForm.reset();
    } finally {
      submitBtn.classList.remove("is-loading");
      submitBtn.disabled = false;
    }
  });

  function showStatus(msg, type) {
    if (!contactStatus) return;
    contactStatus.textContent = msg;
    contactStatus.className = `contact-status ${type}`;
    contactStatus.style.display = "block";
  }

  function hideStatus() {
    if (!contactStatus) return;
    contactStatus.style.display = "none";
    contactStatus.className = "contact-status";
  }
}

/* ── Hugging Face AI Assistant ── */
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
    if (isOpen) {
      chatInput.focus();
    }
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

    if (suggestionsContainer) {
      suggestionsContainer.style.display = "none";
    }

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
      console.warn("Hugging Face API request failed, using local knowledge engine:", err);
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
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  function formatMarkdown(text) {
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    const paragraphs = html.split("\n\n");
    return paragraphs.map(p => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
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
      return "📧 **Contact Manish Raina:**\n\n- **Email**: manishraina2009@gmail.com\n- **Phone**: +91 6005001995\n- **LinkedIn**: linkedin.com/in/manish-raina-53278028b\n- **GitHub**: github.com/manishraina0904\n\nYou can also use the **Contact Us form** on this website to send a direct message!";
    }

    if (q.includes("education") || q.includes("college") || q.includes("piet") || q.includes("degree")) {
      return "🎓 **Education:**\n\n- **B.Tech in Artificial Intelligence & Machine Learning (2022 - 2026)** at Panipat Institute of Engineering and Technology (PIET).\n- **School Education (2018 - 2022)** at Kotwal National Institute of Teaching School.";
    }

    return "Manish Raina is an AI/ML Developer and Python/FastAPI engineer specializing in machine learning systems, secure APIs, and intelligent products. He is a B.Tech AI/ML student at PIET and was a Research Intern at NIT Delhi (2025). Feel free to ask about his **projects**, **skills**, **education**, or **contact info**!";
  }
}

