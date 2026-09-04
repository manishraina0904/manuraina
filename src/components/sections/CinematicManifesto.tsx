"use client";

import React from "react";
import Image from "next/image";
import { MANIFESTO_TEXT, CORE_PILLARS, PERSONAL_INFO } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import { Cpu, FlaskConical, ShieldCheck, Layers, Sparkles } from "lucide-react";

export default function CinematicManifesto() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-6 h-6 text-accent-cyan" />;
      case "FlaskConical":
        return <FlaskConical className="w-6 h-6 text-accent-violet" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-accent-cyan" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-accent-emerald" />;
      default:
        return <Sparkles className="w-6 h-6 text-accent-cyan" />;
    }
  };

  return (
    <section id="about" className="py-24 md:py-36 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ACT II MARKER */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-cyan" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            ACT II // THE PHILOSOPHY &amp; KERNEL IGNITION
          </span>
        </div>

        {/* CINEMATIC EDITORIAL QUOTE BOX - MINIMALIST DESIGN-FORWARD TYPOGRAPHY */}
        <TextReveal>
          <div className="relative p-6 sm:p-12 md:p-16 lg:p-20 rounded-3xl bg-surface-card/60 border border-white/8 backdrop-blur-2xl mb-20 overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-cyan/10 via-accent-violet/5 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="max-w-4xl">
              {/* Minimalist Design Quote Mark */}
              <div className="font-serif text-4xl sm:text-5xl text-accent-cyan/40 leading-none select-none mb-4 sm:mb-6">
                “
              </div>

              {/* Fluid, High-Design Smooth Typography */}
              <blockquote className="space-y-4 sm:space-y-6 mb-10 text-left">
                <p className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-foreground tracking-[-0.02em] leading-snug sm:leading-tight">
                  A beautifully crafted AI system feels different.
                </p>
                <p className="font-sans font-light text-base sm:text-xl md:text-2xl text-muted leading-relaxed sm:leading-relaxed">
                  Because you never have to look at the complexity built to handle a thousand moving parts. You can feel the care.
                </p>
                <p className="font-sans font-semibold text-lg sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-foreground via-[#EDE9FE] to-muted tracking-tight leading-snug">
                  That moment when invisible complexity gives you absolute clarity — that's exactly what I build.
                </p>
              </blockquote>

              {/* Minimal Author Signature Block */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/8">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-white/15 bg-gradient-to-b from-[#130d22] to-[#05030A] shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={MANIFESTO_TEXT.author}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover object-top scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-base sm:text-lg text-foreground">
                      {MANIFESTO_TEXT.author}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-muted uppercase tracking-wider">
                      NIT Delhi Intern
                    </span>
                  </div>
                  <span className="text-muted text-xs sm:text-sm font-sans block mt-0.5">
                    AI/ML Engineer &amp; Full Stack Developer • Systems Architect
                  </span>
                </div>
              </div>
            </div>
          </div>
        </TextReveal>

        {/* 4 CORE PILLARS GRID */}
        <div>
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight mb-4">
              Core Architectural Pillars
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Synthesizing autonomous agent orchestration, statistical machine learning calibration, and hardened asynchronous backend microservices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_PILLARS.map((pillar, i) => (
              <TextReveal key={pillar.number} delay={i * 0.1}>
                <div className="h-full p-8 rounded-3xl bg-surface-card/80 border border-white/8 hover:border-accent-cyan/40 transition-all duration-500 backdrop-blur-xl group flex flex-col justify-between hover:-translate-y-1 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getIcon(pillar.icon)}
                      </div>
                      <span className="font-display font-black text-2xl text-foreground/30 group-hover:text-accent-cyan transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-foreground mb-1 group-hover:text-accent-cyan transition-colors">
                      {pillar.title}
                    </h3>
                    <div className="font-mono text-xs text-accent-violet font-semibold mb-4">
                      {pillar.tagline}
                    </div>

                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/8">
                    {pillar.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-[10px] text-muted group-hover:text-foreground transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
