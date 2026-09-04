"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import { BrainCircuit, Server, Layout, Terminal, Sparkles, Check, Database, Cpu } from "lucide-react";

export default function SkillsSection() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-accent-cyan" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-accent-violet" />;
      case "Server":
        return <Server className="w-5 h-5 text-accent-cyan" />;
      case "Database":
        return <Database className="w-5 h-5 text-accent-emerald" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-accent-violet" />;
      default:
        return <Sparkles className="w-5 h-5 text-accent-cyan" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                04 // Technical Matrix &amp; Core Competencies
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight">
              Skills &amp; Technology Clusters
            </h2>
          </div>

          <p className="text-muted text-sm sm:text-base max-w-md">
            Architectural competencies across multi-agent orchestration, MCP protocols, calibrated machine learning, and scalable FastAPI backend services.
          </p>
        </div>

        {/* SKILLS CLUSTER MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <TextReveal key={category.title} delay={idx * 0.08}>
              <div className="h-full p-7 rounded-3xl bg-surface-card border border-white/8 hover:border-white/20 transition-all duration-300 backdrop-blur-xl flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getCategoryIcon(category.icon)}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent-cyan transition-colors">
                          {category.title}
                        </h3>
                        <span className="font-mono text-[11px] text-muted line-clamp-1">
                          {category.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-elevated/80 border border-white/6 hover:border-accent-cyan/30 hover:bg-surface-elevated transition-all group/item"
                      >
                        {skill.icon ? (
                          <div className="relative w-3.5 h-3.5 shrink-0">
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              fill
                              className="object-contain filter group-hover/item:drop-shadow-[0_0_6px_rgba(168,85,247,0.75)] transition-all"
                            />
                          </div>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                        )}
                        <span className="font-mono text-[11px] text-foreground/90 font-medium truncate" title={skill.name}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Bar Indicator */}
                <div className="mt-6 pt-4 border-t border-white/6 flex items-center justify-between text-[11px] font-mono text-muted">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>Production Grade</span>
                  </span>
                  <span>{category.skills.length} Competencies</span>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
