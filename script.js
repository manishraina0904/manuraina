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

window.addEventListener("resize", () => {
  createStars();

  if (window.innerWidth > 980 && topbar) {
    topbar.classList.remove("is-open");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
    }
  }
});
