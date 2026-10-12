"use client";

import React from "react";
import Image from "next/image";
import { MARQUEE_SKILLS } from "@/data/portfolioData";

export default function TechMarquee() {
  // Triple the items for perfectly seamless infinite CSS loop
  const loopSkills = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS, ...MARQUEE_SKILLS];

  const primaryTools = [
    { name: "Python", icon: "/assets/skill-python.svg", desc: "Core Runtime & ML Engine" },
    { name: "PyTorch", icon: "/assets/skill-pytorch.svg", desc: "Deep Learning & Tensors" },
    { name: "LangChain", icon: "/assets/skill-langchain.svg", desc: "Agent DAGs & Tools" },
    { name: "FastAPI", icon: "/assets/skill-fastapi.svg", desc: "Asynchronous REST APIs" },
    { name: "React.js", icon: "/assets/skill-react.svg", desc: "Reactive UI Interfaces" },
    { name: "Docker", icon: "/assets/skill-docker.svg", desc: "Containerized Workflows" },
    { name: "PostgreSQL", icon: "/assets/skill-postgresql.svg", desc: "Relational Persistence" },
    { name: "Scikit-Learn", icon: "/assets/skill-scikit.svg", desc: "Statistical Calibration" },
    { name: "TensorFlow", icon: "/assets/skill-tensorflow.svg", desc: "Production Model Pipelines" },
    { name: "Git", icon: "/assets/skill-git.svg", desc: "CI/CD & Version Control" },
  ];

  return (
    <section className="py-20 md:py-28 border-y border-white/6 bg-[#05030A] relative z-10 select-none overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-violet/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/25 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent-violet font-medium">
            Section 02 // Engineering Foundations
          </span>
        </div>

        {/* Reference 4s-6s: "Trusted by 120,000+ builders..." headline equivalent */}
        <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight mb-4">
          Engineered with modern, production-grade tooling.
        </h2>
        <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          The verified stack powering multi-agent systems, clinical ML survival benchmarks, and high-throughput asynchronous services.
        </p>

        {/* FROSTED TOOL TILES GRID (Matching DesignCode Reference 4s-6s) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 mt-12">
          {primaryTools.map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-2xl bg-[#0c0a14]/80 border border-white/8 hover:border-accent-violet/40 hover:bg-[#120d22] transition-all duration-300 flex flex-col items-center justify-center text-center group shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.15)] hover:-translate-y-0.5"
            >
              <div className="relative w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-all"
                />
              </div>
              <span className="font-display font-bold text-sm text-foreground group-hover:text-accent-violet transition-colors">
                {tool.name}
              </span>
              <span className="font-mono text-[10px] text-muted mt-0.5 line-clamp-1">
                {tool.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CONTINUOUS MARQUEE TICKER */}
      <div className="relative w-full flex overflow-x-hidden mask-gradient pt-4">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#05030A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#05030A] to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 items-center gap-3.5 animate-marquee hover:[animation-play-state:paused] py-2">
          {loopSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0d0d16]/90 border border-white/8 hover:border-accent-violet/40 transition-all duration-300 group"
            >
              {skill.icon ? (
                <div className="relative w-4 h-4 shrink-0">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.90)] transition-all"
                  />
                </div>
              ) : (
                <span className="w-2 h-2 rounded-full bg-accent-violet" />
              )}
              <span className="font-mono text-xs text-foreground/90 font-medium group-hover:text-accent-violet transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
