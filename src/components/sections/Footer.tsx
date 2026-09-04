"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST / Local time
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
    <footer className="py-12 border-t border-white/8 bg-surface/60 backdrop-blur-xl relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-white/6">
          {/* Brand identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="#home" className="font-display font-black text-xl text-foreground mb-1">
              {PERSONAL_INFO.name}
            </Link>
            <p className="font-mono text-xs text-muted">
              Full Stack Developer &amp; AI Engineer • NIT Delhi Alum / PIET
            </p>
          </div>

          {/* Live Clock Telemetry */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/8 font-mono text-xs text-muted">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            <span>LOCAL TIME (IST): {currentTime || "09:30:00 PM"}</span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-muted hover:text-foreground transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-muted hover:text-foreground transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-muted hover:text-foreground transition-all"
              aria-label="Email Manish Raina"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan transition-all ml-2"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with Next.js, Three.js &amp; GSAP
          </p>
        </div>
      </div>
    </footer>
  );
}
