"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, FileText, Sparkles } from "lucide-react";
import MagneticButton from "@/components/animations/MagneticButton";

interface NavbarProps {
  onResumeClick?: () => void;
  onAIChatClick?: () => void;
}

export default function Navbar({ onResumeClick, onAIChatClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const sectionIds = ["home", "about", "projects", "experience", "skills", "approach", "contact"];
      const current = sectionIds.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom >= 200;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Approach", href: "#approach" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 sm:px-6 pt-4 sm:pt-5 pointer-events-none`}
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-500 backdrop-blur-xl ${
            isScrolled
              ? "bg-surface-elevated/85 border-white/12 shadow-[0_12px_40px_rgba(0,0,0,0.65)] scale-100"
              : "bg-surface/60 border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] scale-[0.99]"
          }`}
        >
          {/* BRAND LOGO WITH AUTHENTIC AVATAR */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 group pr-2"
            aria-label="Manish Raina Portfolio Home"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden p-[1px] border border-white/15 bg-surface-elevated transition-transform duration-300 group-hover:scale-105 shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface-elevated">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt="Manish Raina"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="font-display font-bold text-xs text-foreground tracking-tight leading-none group-hover:text-accent-blue transition-colors">
                Manish Raina
              </span>
              <span className="font-mono text-[9px] text-muted tracking-widest uppercase mt-0.5">
                AI // Full-Stack
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 font-sans text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-full transition-all duration-300 font-medium ${
                    isActive
                      ? "text-foreground bg-white/[0.08]"
                      : "text-muted hover:text-foreground hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[2px] bg-accent-blue rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS & CTA */}
          <div className="flex items-center gap-2">
            {/* Live AI Status Chip */}
            <button
              onClick={onAIChatClick}
              data-cursor-type="CHAT"
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-[11px] font-mono text-accent-blue hover:bg-accent-blue/20 transition-all group"
              title="Chat with Manish's AI Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
              <span>AI Assistant</span>
            </button>

            {/* Resume Button */}
            <MagneticButton>
              <button
                onClick={onResumeClick}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-foreground transition-all duration-300"
                aria-label="View or Download Resume"
              >
                <FileText className="w-3.5 h-3.5 text-muted" />
                <span className="hidden sm:inline">Resume</span>
              </button>
            </MagneticButton>

            {/* Let's Talk Primary CTA */}
            <MagneticButton>
              <Link
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-foreground hover:bg-white text-background font-semibold text-xs transition-all shadow-[0_2px_8px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_16px_rgba(59,130,246,0.18)]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </MagneticButton>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10 text-foreground"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Line Indicator */}
        <div
          className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-cyan transition-all duration-75 z-50"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col justify-between p-6 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-20 flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            // Navigation
          </span>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-semibold text-foreground hover:text-accent-cyan py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-muted" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t border-white/10">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onResumeClick) onResumeClick();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-surface-elevated border border-white/10 font-mono text-sm text-foreground"
          >
            <FileText className="w-4 h-4 text-accent-cyan" />
            <span>View & Download Resume</span>
          </button>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-background font-semibold text-sm"
          >
            <span>Let's Build Something</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <div className="text-center font-mono text-[10px] text-muted">
            © 2026 {PERSONAL_INFO.name}
          </div>
        </div>
      </div>
    </>
  );
}
