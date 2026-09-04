"use client";

import React from "react";
import { MANIFESTO_TEXT, CORE_PILLARS } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import { Cpu, FlaskConical, ShieldCheck, Layers, Sparkles, ArrowRight } from "lucide-react";

export default function Manifesto() {
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
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-accent-violet/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER TAG */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-cyan" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            01 // Engineering Philosophy &amp; Core Pillars
          </span>
        </div>

        {/* MANIFESTO EDITORIAL QUOTE BOX */}
        <TextReveal>
          <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-surface-card border border-white/8 backdrop-blur-xl mb-16 md:mb-24 overflow-hidden group">
            {/* Subtle Gradient Hover Spotlight */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-cyan/10 via-accent-violet/5 to-transparent blur-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="max-w-3xl">
              <p className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight leading-relaxed mb-6">
                "{MANIFESTO_TEXT.quoteLine1}{" "}
                <span className="text-muted font-normal">
                  {MANIFESTO_TEXT.quoteLine2}
                </span>{" "}
                {MANIFESTO_TEXT.quoteLine3}{" "}
                <span className="text-muted font-normal">
                  {MANIFESTO_TEXT.quoteLine4}
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet font-semibold">
                  {MANIFESTO_TEXT.quoteLine5}
                </span>"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <span className="font-display font-bold text-sm text-foreground">
                  {MANIFESTO_TEXT.author}
                </span>
                <span className="text-xs text-muted font-mono">
                  — Full Stack Developer &amp; AI Engineer
                </span>
              </div>
            </div>
          </div>
        </TextReveal>

        {/* 4 CORE PILLARS GRID */}
        <div>
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight mb-3">
              How I Engineer Products
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Software engineering is more than just passing tests—it is the disciplined synthesis of mathematical rigor, resilient backend architectures, and seamless user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_PILLARS.map((pillar, i) => (
              <TextReveal key={pillar.number} delay={i * 0.1}>
                <div className="relative h-full p-8 rounded-2xl bg-surface-card/70 border border-white/6 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between">
                  {/* Card Header with Number & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getIcon(pillar.icon)}
                      </div>
                      <span className="font-mono text-sm font-semibold text-muted/60 group-hover:text-foreground transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-1 group-hover:text-accent-cyan transition-colors">
                      {pillar.title}
                    </h3>
                    <div className="font-mono text-xs text-accent-violet font-medium mb-4">
                      {pillar.tagline}
                    </div>

                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/6">
                    {pillar.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-[10px] text-muted-foreground group-hover:text-foreground transition-colors"
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
