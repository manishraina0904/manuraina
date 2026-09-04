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
            ACT I // PROLOGUE
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-muted">
            [RESEARCH] NIT DELHI
          </span>
        </div>
      </div>

      {/* CENTER EDITORIAL & HOLOGRAPHIC OPERATOR PROFILE SHOT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8 sm:py-12">
        {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY */}
        <div className="lg:col-span-7 text-left">
          {/* Mobile Profile Display - Refined Professional Portal */}
          <div className="flex items-center gap-3.5 mb-6 lg:hidden">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-white/15 shadow-[0_4px_16px_rgba(0,0,0,0.6),0_0_12px_rgba(59,130,246,0.15)] bg-gradient-to-b from-[#0c1427] to-[#05030A]">
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
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-foreground font-medium uppercase tracking-wider">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-[#DBEAFE] to-muted">
              Raina
            </span>
          </h1>

          {/* Dynamic Typing Role Subtitle */}
          <div className="h-8 sm:h-10 flex items-center font-mono text-base sm:text-xl text-foreground/90 mb-6">
            <span className="text-muted mr-2 font-normal">Architecting &amp;</span>
            <span className="text-accent-blue font-semibold">
              {PERSONAL_INFO.roles[roleIndex].substring(0, charIndex)}
            </span>
            <span className="inline-block w-2 h-5 bg-accent-blue ml-1 animate-pulse" />
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
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-bold text-sm hover:bg-white transition-all shadow-[0_2px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.20)] group"
              >
                <span>Explore Selected Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onResumeClick}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 font-mono text-xs text-foreground transition-all hover:border-white/20"
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

        {/* RIGHT COLUMN: REFINED PROFESSIONAL PORTRAIT WITH THIN ELEGANT ORBITAL RING */}
        <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end items-center">
          <div className="relative flex flex-col items-center select-none">
            {/* Subtle atmospheric ambient light behind portrait (restrained, no neon bloom) */}
            <div className="absolute inset-0 -m-8 bg-radial-mesh opacity-50 rounded-full blur-2xl pointer-events-none -z-10" />

            {/* Thin, elegant orbital ring - hairline, subtle, sophisticated */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] xl:w-[480px] h-[210px] xl:h-[230px] rounded-[100%] border pointer-events-none -rotate-[16deg]"
              style={{
                borderColor: "rgba(59, 130, 246, 0.25)",
                boxShadow: "0 0 16px rgba(59, 130, 246, 0.10)",
              }}
            />

            {/* Secondary whisper-thin counter orbital line */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] xl:w-[450px] h-[190px] xl:h-[210px] rounded-[100%] border border-white/[0.04] pointer-events-none rotate-[42deg]"
            />

            {/* Refined Circular Portrait Frame */}
            <div 
              className="relative w-[320px] h-[320px] sm:w-[370px] sm:h-[370px] xl:w-[410px] xl:h-[410px] rounded-full p-[1.5px] bg-gradient-to-b from-white/15 via-accent-blue/20 to-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_24px_rgba(59,130,246,0.12)] transition-transform duration-700 hover:scale-[1.01]"
            >
              {/* Inner Portal Container with Dark Sophisticated Background */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#0c1427] via-[#060b17] to-[#05030A]">
                {/* Subtle volumetric rim-light aura centered behind the head */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 50% 32%, rgba(59, 130, 246, 0.18) 0%, transparent 60%)",
                  }}
                />

                {/* High-Clarity Portrait with subtle natural rim lighting */}
                <Image
                  src={PERSONAL_INFO.profileImage}
                  alt="Manish Raina — AI/ML Engineer & Systems Architect"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-top scale-105 translate-y-1 transition-all duration-700"
                  style={{
                    filter: "drop-shadow(0 0 14px rgba(59, 130, 246, 0.18)) contrast(1.04) brightness(1.03)",
                  }}
                  priority
                />

                {/* Organic bottom-inside blend into #05030A */}
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#05030A] via-[#05030A]/60 to-transparent pointer-events-none rounded-b-full" />
              </div>
            </div>

            {/* Clean Minimalist Telemetry - Understated, high-end */}
            <div className="flex items-center gap-2.5 mt-5 font-mono text-[11px] text-muted tracking-wider">
              <span className="relative flex h-1.5 w-1.5">
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-blue" />
              </span>
              <span className="text-foreground font-medium">Manish Raina</span>
              <span className="text-white/15">•</span>
              <span className="text-muted">NIT Delhi ML Intern</span>
              <span className="text-white/15">•</span>
              <span className="text-muted">B.Tech AIML</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM METRICS STRIP & CINEMATIC SCROLL PROMPT */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 w-full sm:w-auto">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                {stat.value}
                <span className="text-accent-blue">{stat.suffix}</span>
              </span>
              <span className="text-[11px] font-mono text-muted uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-muted">
          <span>SCENE I // SCROLL TO BEGIN FILM</span>
          <ChevronDown className="w-4 h-4 text-muted" />
        </div>
      </div>
    </section>
  );
}
