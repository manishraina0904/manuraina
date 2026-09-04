"use client";

import React from "react";
import Image from "next/image";
import { MARQUEE_SKILLS } from "@/data/portfolioData";

export default function TechMarquee() {
  // Triple the items for perfectly seamless infinite CSS loop
  const loopSkills = [...MARQUEE_SKILLS, ...MARQUEE_SKILLS, ...MARQUEE_SKILLS];

  return (
    <section className="py-12 border-y border-white/6 bg-surface/30 backdrop-blur-sm overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          // Production Tech Stack &amp; Tooling
        </span>
        <span className="font-mono text-[11px] text-muted/60 hidden sm:inline">
          Continuous Integration • Scalable APIs • Deep Learning
        </span>
      </div>

      {/* INFINITE DUAL MARQUEE TRACK */}
      <div className="relative w-full flex overflow-x-hidden mask-gradient">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 items-center gap-4 animate-marquee hover:[animation-play-state:paused] py-2">
          {loopSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-elevated/70 border border-white/8 hover:border-accent-cyan/40 hover:bg-surface-elevated transition-all duration-300 group"
            >
              {skill.icon ? (
                <div className="relative w-4 h-4 shrink-0">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.85)] transition-all"
                  />
                </div>
              ) : (
                <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              )}
              <span className="font-mono text-xs text-foreground/90 font-medium group-hover:text-accent-cyan transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
