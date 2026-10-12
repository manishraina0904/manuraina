"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const navGroups = [
  {
    label: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
    ],
  },
  {
    label: "Expertise",
    links: [
      { name: "Skills", href: "#skills" },
      { name: "Approach", href: "#approach" },
      { name: "Services", href: "#services" },
    ],
  },
  {
    label: "Connect",
    links: [
      { name: "Contact", href: "#contact" },
      { name: "GitHub", href: PERSONAL_INFO.github, external: true },
      { name: "LinkedIn", href: PERSONAL_INFO.linkedin, external: true },
    ],
  },
];

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/6 overflow-hidden select-none bg-[#040208]">
      {/* 3D TOPOGRAPHIC MOUNTAIN ELEVATION WIREFRAME LANDSCAPE (DesignCode Reference 52s-54s) */}
      <div className="absolute bottom-0 inset-x-0 h-[280px] pointer-events-none overflow-hidden opacity-60">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full text-accent-violet stroke-current fill-none"
        >
          {/* Mountain Ridge Layer 1 (Far background) */}
          <path
            d="M 0,260 Q 180,180 360,240 T 720,190 T 1080,230 T 1440,200 L 1440,320 L 0,320 Z"
            strokeWidth="0.8"
            opacity="0.25"
            fill="rgba(139, 92, 246, 0.02)"
          />
          {/* Mountain Ridge Layer 2 (Mid peaks) */}
          <path
            d="M 0,280 Q 140,140 320,210 Q 500,100 680,180 Q 860,70 1040,190 Q 1240,120 1440,240 L 1440,320 L 0,320 Z"
            strokeWidth="1.2"
            opacity="0.45"
            fill="rgba(109, 40, 217, 0.03)"
          />
          {/* Mountain Ridge Layer 3 (Foreground prominent peaks) */}
          <path
            d="M 0,300 Q 120,200 240,260 Q 380,130 520,240 Q 660,90 800,220 Q 960,110 1120,250 Q 1280,160 1440,280 L 1440,320 L 0,320 Z"
            strokeWidth="1.6"
            opacity="0.75"
          />
          {/* Elevation Contours & Wireframe Grid Ribs */}
          {Array.from({ length: 18 }).map((_, i) => {
            const x = i * 80;
            return (
              <line
                key={i}
                x1={x}
                y1={140 + Math.sin(i) * 60}
                x2={x + 30}
                y2={320}
                strokeWidth="0.6"
                strokeDasharray="2 3"
                opacity="0.3"
              />
            );
          })}
          {/* Horizontal contour slices */}
          <path d="M 0,220 Q 360,180 720,210 T 1440,190" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.35" />
          <path d="M 0,250 Q 360,210 720,240 T 1440,220" strokeWidth="0.8" strokeDasharray="5 3" opacity="0.45" />
          <path d="M 0,280 Q 360,250 720,270 T 1440,260" strokeWidth="1" opacity="0.55" />
        </svg>

        {/* Ambient violet mountain horizon glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[120px] bg-gradient-to-t from-accent-violet/15 via-accent-purple/8 to-transparent blur-2xl pointer-events-none" />
      </div>

      {/* Atmospheric gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#040208]/90 via-[#040208]/60 to-[#040208] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UPPER FOOTER: Brand + Nav Groups */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-white/6">
          {/* Brand Column */}
          <div className="md:col-span-2 flex flex-col">
            <Link href="#home" className="font-display font-black text-2xl text-foreground mb-2 hover:text-accent-violet transition-colors inline-block">
              {PERSONAL_INFO.name}
            </Link>
            <p className="font-mono text-xs text-muted mb-6 leading-relaxed max-w-xs">
              AI/ML Engineer & Full-Stack Builder. Designing and shipping intelligent products from research to production.
            </p>

            {/* Live Status */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/8 font-mono text-xs text-muted w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span>IST: {currentTime || "09:30:00 PM"}</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] hover:bg-accent-violet/15 border border-white/8 hover:border-accent-violet/40 text-muted hover:text-accent-violet transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/[0.04] hover:bg-accent-violet/15 border border-white/8 hover:border-accent-violet/40 text-muted hover:text-accent-violet transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full bg-white/[0.04] hover:bg-accent-violet/15 border border-white/8 hover:border-accent-violet/40 text-muted hover:text-accent-violet transition-all"
                aria-label="Email Manish Raina"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Link Groups */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {navGroups.map((group) => (
              <div key={group.label}>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent-violet mb-4">
                  {group.label}
                </h4>
                <nav className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target={(link as any).external ? "_blank" : undefined}
                      rel={(link as any).external ? "noreferrer" : undefined}
                      className="font-mono text-xs text-muted hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* LOWER FOOTER: Copyright + Back to Top */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted">
            Engineered with Next.js, Three.js &amp; GSAP
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-accent-violet/10 hover:bg-accent-violet/25 border border-accent-violet/30 text-accent-violet transition-all glow-pulse ml-2"
            aria-label="Scroll to top"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
