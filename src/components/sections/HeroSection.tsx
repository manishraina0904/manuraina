"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import HeroScene3D from "@/components/3d/HeroScene3D";
import MagneticButton from "@/components/animations/MagneticButton";
import { ArrowDown, ArrowUpRight, Download, Sparkles, Terminal, Shield, Activity } from "lucide-react";

interface HeroSectionProps {
  onResumeClick?: () => void;
}

export default function HeroSection({ onResumeClick }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect for roles
  useEffect(() => {
    const roles = PERSONAL_INFO.roles;
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between overflow-hidden"
    >
      {/* BACKGROUND AMBIENT RADIAL LIGHTS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-cyan/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-accent-violet/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* TOP STATUS HUD CHIP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated/90 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
            </span>
            <span className="font-mono text-[11px] text-muted tracking-wider uppercase">
              {PERSONAL_INFO.systemStatus}
            </span>
          </div>

          {/* Research & Status Telemetry Badges */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/5 text-muted">
              [RESEARCH] NIT DELHI 2025
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/5 text-accent-cyan">
              [AI_OS] MULTI-AGENT READY
            </span>
          </div>
        </div>

        {/* HERO MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY & VALUE PROPOSITION */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* ROLE PILLS */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-accent-cyan uppercase tracking-wider">
                Full Stack Developer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-accent-violet uppercase tracking-wider">
                AI / ML Engineer
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-muted uppercase tracking-wider">
                Product Builder
              </span>
            </div>

            {/* EDITORIAL HEADLINE */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-foreground leading-[1.05] mb-5">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-white to-accent-violet">
                Intelligent
              </span>{" "}
              Systems.
            </h1>

            {/* LIVE TYPING SUBTITLE */}
            <div className="h-8 sm:h-9 flex items-center font-mono text-base sm:text-lg text-foreground/90 mb-5">
              <span className="text-muted mr-2 font-normal">Architecting &amp;</span>
              <span className="text-accent-cyan font-semibold">
                {PERSONAL_INFO.roles[roleIndex].substring(0, charIndex)}
              </span>
              <span className="inline-block w-2 h-5 bg-accent-cyan ml-1 animate-pulse" />
            </div>

            {/* VALUE STATEMENT */}
            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-8">
              Hi, I'm <strong className="text-foreground font-semibold">Manish Raina</strong>. I build intelligent, high-performance digital products where advanced machine learning, scalable backend architecture, and thoughtful interface engineering meet.
            </p>

            {/* ACTION CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <MagneticButton>
                <Link
                  href="#projects"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-white/90 transition-all shadow-[0_4px_24px_rgba(255,255,255,0.15)] group"
                >
                  <span>Explore Selected Work</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={onResumeClick}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-surface-elevated hover:bg-surface-elevated/80 border border-white/10 font-mono text-xs text-foreground transition-all"
                  aria-label="View Resume Modal"
                >
                  <Download className="w-4 h-4 text-accent-cyan" />
                  <span>Download Resume</span>
                </button>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="#contact"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-muted hover:text-foreground transition-all"
                >
                  <span>Get in Touch</span>
                </Link>
              </MagneticButton>
            </div>

            {/* LIVE PROFILE & EXPERTISE CHIP */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-surface-card border border-white/8 backdrop-blur-md">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 shrink-0">
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-foreground">Manish Raina</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                  <span className="text-[10px] font-mono text-muted uppercase">NIT Delhi Alum / PIET</span>
                </div>
                <p className="text-muted text-[11px] mt-0.5 line-clamp-1">
                  Python, FastAPI, Multi-Agent Systems, React &amp; Deep ML Pipelines
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D INTERACTIVE HERO EXPERIENCE */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[420px] lg:min-h-[560px]">
            {/* Ambient Backlight Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-cyan/15 to-accent-violet/15 blur-3xl -z-10" />

            {/* 3D Canvas */}
            <div className="w-full h-full relative">
              <HeroScene3D />
            </div>

            {/* FLOATING TELEMETRY CORNER BADGES */}
            <div className="absolute top-2 right-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-elevated/90 border border-white/10 backdrop-blur-md text-[10px] font-mono text-muted pointer-events-none">
              <Activity className="w-3 h-3 text-accent-cyan" />
              <span>FPS: 60 // 3D CORE</span>
            </div>

            <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-elevated/90 border border-white/10 backdrop-blur-md text-[10px] font-mono text-muted pointer-events-none">
              <Shield className="w-3 h-3 text-accent-violet" />
              <span>ZERO DEPENDENCY LOSS</span>
            </div>
          </div>
        </div>

        {/* BOTTOM AUTHENTIC STAT METRICS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 pt-8 border-t border-white/8">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-2xl bg-surface-card/60 border border-white/6 hover:border-white/15 transition-all group"
            >
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-foreground mb-1 group-hover:text-accent-cyan transition-colors">
                {stat.value}
                <span className="text-accent-cyan">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm text-muted font-sans font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
