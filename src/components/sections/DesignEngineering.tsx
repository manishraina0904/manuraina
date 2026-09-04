"use client";

import React from "react";
import TextReveal from "@/components/animations/TextReveal";
import { Sparkles, Code2, Database, BrainCircuit, MousePointerClick, Cpu } from "lucide-react";

export default function DesignEngineering() {
  const nodes = [
    { title: "Design & UX", icon: Sparkles, color: "text-accent-cyan", desc: "Intuitive workflows, typography, and zero-clutter visual hierarchy." },
    { title: "Frontend & 3D", icon: Code2, color: "text-accent-violet", desc: "Next.js, Three.js WebGL shaders, 60fps GSAP motion, and fluid responsiveness." },
    { title: "Backend & Security", icon: Database, color: "text-accent-emerald", desc: "FastAPI async services, JWT/RBAC security guards, and PostgreSQL relations." },
    { title: "AI & Neural Logic", icon: BrainCircuit, color: "text-accent-cyan", desc: "Multi-agent DAGs, LightGBM survival calibration, and NLP sentiment pipelines." },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextReveal>
          <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-surface-card border border-white/8 backdrop-blur-2xl overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-accent-cyan/10 via-accent-violet/10 to-transparent blur-3xl pointer-events-none -z-10" />

            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan mb-2 inline-block">
                06 // Design + Engineering Synthesis
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight mb-4">
                Design is not separate from engineering.
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                The most impactful software is created when sophisticated machine learning models and bulletproof backends are presented through frictionless, tactile digital interfaces.
              </p>
            </div>

            {/* 4 INTERCONNECTED NODES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/8">
              {nodes.map((node, i) => {
                const IconComponent = node.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-surface-elevated/70 border border-white/6 hover:border-white/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className={`w-5 h-5 ${node.color}`} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-accent-cyan transition-colors">
                      {node.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
