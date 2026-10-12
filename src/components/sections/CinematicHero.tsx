"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import MagneticButton from "@/components/animations/MagneticButton";
import { ArrowUpRight, Download, Sparkles, ChevronDown } from "lucide-react";

interface CinematicHeroProps {
  onResumeClick?: () => void;
}

export default function CinematicHero({ onResumeClick }: CinematicHeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = PERSONAL_INFO.roles;
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
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
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 select-none"
    >
      {/* SIGNATURE VERTICAL VIOLET LASER BEAM (DesignCode Reference 0s-3s) */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex flex-col items-center justify-end overflow-hidden">
        {/* Ultra-bright vertical laser core ray */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-t from-accent-violet via-accent-purple/80 to-transparent shadow-[0_0_15px_#8b5cf6,0_0_35px_#a855f7]" />
        {/* Volumetric laser beam glow */}
        <div className="absolute top-0 bottom-0 w-[48px] bg-gradient-to-t from-accent-violet/40 via-accent-purple/20 to-transparent blur-md" />
        {/* Soft atmospheric ambient violet cone */}
        <div className="absolute top-0 bottom-0 w-[320px] bg-gradient-to-t from-accent-violet/25 via-accent-purple/10 to-transparent blur-3xl" />
        {/* Horizon flare bar at bottom */}
        <div className="absolute bottom-0 w-full max-w-4xl h-[2px] bg-gradient-to-r from-transparent via-accent-violet to-transparent shadow-[0_0_25px_#8b5cf6]" />
        <div className="absolute bottom-0 w-[700px] h-[40px] bg-gradient-to-t from-accent-violet/35 to-transparent blur-xl" />
      </div>

      {/* SCENE I IDENTIFIER & TELEMETRY */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald" />
          </span>
          <span className="font-mono text-[11px] text-muted tracking-wider uppercase">
            {PERSONAL_INFO.systemStatus}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.03] border border-white/8 text-muted">
            AI // ML Engineer
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet/90">
            NIT Delhi Researcher
          </span>
        </div>
      </div>

      {/* CENTER EDITORIAL & HOLOGRAPHIC OPERATOR PROFILE SHOT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8 sm:py-12">
        {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY */}
        <div className="lg:col-span-7 text-left">
          {/* Mobile Profile Display */}
          <div className="flex items-center gap-3.5 mb-6 lg:hidden">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-accent-violet/30 shadow-[0_4px_16px_rgba(0,0,0,0.6),0_0_12px_rgba(139,92,246,0.25)] bg-gradient-to-b from-[#130d22] to-[#05030A]">
              <Image
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                width={64}
                height={64}
                className="w-full h-full object-cover object-top scale-105"
                style={{
                  filter: "contrast(1.04) brightness(1.03)",
                }}
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-sm text-foreground">
                  {PERSONAL_INFO.name}
                </span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-emerald" />
                </span>
              </div>
              <span className="font-mono text-[11px] text-muted block">
                NIT Delhi ML Research • B.Tech AIML
              </span>
            </div>
          </div>

          {/* Role Category Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-md bg-accent-violet/10 border border-accent-violet/30 font-mono text-xs text-accent-violet font-medium uppercase tracking-wider">
              AI/ML Engineer
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/8 font-mono text-xs text-muted uppercase tracking-wider">
              Multi-Agent &amp; MCP
            </span>
            <span className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/8 font-mono text-xs text-muted uppercase tracking-wider">
              Full Stack Builder
            </span>
          </div>

          {/* Large Cinematic Title */}
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-foreground leading-[0.98] mb-6">
            Manish <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent-violet-light to-accent-purple">
              Raina
            </span>
          </h1>

          {/* Dynamic Typing Role Subtitle */}
          <div className="h-8 sm:h-10 flex items-center font-mono text-base sm:text-xl text-foreground/90 mb-6">
            <span className="text-muted mr-2 font-normal">Architecting &amp;</span>
            <span className="text-accent-violet font-semibold">
              {PERSONAL_INFO.roles[roleIndex].substring(0, charIndex)}
            </span>
            <span className="inline-block w-2 h-5 bg-accent-violet ml-1 animate-pulse" />
          </div>

          {/* Profile Statement */}
          <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-8">
            {PERSONAL_INFO.profileSummary}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-4 lg:mb-0">
            <MagneticButton>
              <Link
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent-violet text-white font-bold text-sm hover:bg-accent-violet-light transition-all shadow-[0_2px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_24px_rgba(139,92,246,0.45)] group"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onResumeClick}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 font-mono text-xs text-foreground transition-all hover:border-accent-violet/30"
                aria-label="View Resume"
              >
                <Download className="w-4 h-4 text-muted" />
                <span>Download Resume</span>
              </button>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-full text-xs font-mono text-muted hover:text-foreground hover:bg-white/[0.04] border border-transparent hover:border-white/10 transition-all"
              >
                <span>Get in Touch</span>
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* RIGHT COLUMN: REFINED TELEMETRY & STATUS CARD (DesignCode Reference Widget 2s) */}
        <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end items-center">
          <div className="relative w-full max-w-md select-none">
            {/* Ambient violet glow aura */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-violet/20 via-accent-purple/10 to-transparent rounded-3xl blur-2xl pointer-events-none -z-10" />

            {/* Main Telemetry & Operator Card */}
            <div className="relative rounded-3xl bg-[#0c0a14]/90 border border-white/10 backdrop-blur-2xl p-6 shadow-[0_24px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.12)]">
              {/* Card Top Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-medium">
                    AI AGENT KERNEL // ACTIVE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-accent-violet px-2.5 py-0.5 rounded-full bg-accent-violet/10 border border-accent-violet/20 font-semibold">
                  v2.6.4
                </span>
              </div>

              {/* Portrait & Operator Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-accent-violet/35 shadow-[0_4px_16px_rgba(0,0,0,0.6),0_0_16px_rgba(139,92,246,0.25)] bg-gradient-to-b from-[#180f2b] to-[#05030A]">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt="Manish Raina — AI/ML Engineer"
                    fill
                    sizes="80px"
                    className="object-cover object-top scale-105"
                    priority
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <div className="font-mono text-xs text-accent-violet font-medium mt-0.5">
                    AI/ML Engineer &amp; Researcher
                  </div>
                  <div className="font-mono text-[11px] text-muted mt-1">
                    National Institute of Technology, Delhi
                  </div>
                </div>
              </div>

              {/* Live Benchmark & Telemetry Metrics (Reference 2s counter style) */}
              <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-white/[0.02] border border-white/6 mb-5">
                <div className="text-center">
                  <div className="font-display font-black text-xl text-foreground">
                    7<span className="text-accent-violet">+</span>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted mt-0.5">
                    Systems
                  </div>
                </div>
                <div className="text-center border-x border-white/6">
                  <div className="font-display font-black text-xl text-foreground">
                    95<span className="text-accent-emerald">%</span>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted mt-0.5">
                    Accuracy
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-display font-black text-xl text-foreground">
                    50K<span className="text-accent-purple">+</span>
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-muted mt-0.5">
                    Records
                  </div>
                </div>
              </div>

              {/* Core Frameworks Pill Grid */}
              <div className="space-y-2 mb-5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted">
                  Active Frameworks
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["LangGraph", "MCP Protocol", "FastAPI", "LightGBM", "PyTorch", "Qdrant"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/8 font-mono text-[10px] text-foreground/90 hover:border-accent-violet/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Footer Badge */}
              <div className="flex items-center justify-between pt-4 border-t border-white/8 text-[11px] font-mono">
                <span className="text-muted">Status:</span>
                <span className="text-accent-emerald font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                  Available for High-Impact Roles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM METRICS STRIP & SCROLL PROMPT */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 w-full sm:w-auto">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                {stat.value}
                <span className="text-accent-violet">{stat.suffix}</span>
              </span>
              <span className="text-[11px] font-mono text-muted uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-muted">
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 text-muted" />
        </div>
      </div>
    </section>
  );
}
