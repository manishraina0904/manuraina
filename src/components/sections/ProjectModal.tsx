"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ProjectDetail } from "@/data/projectsData";
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, ArrowRight, ShieldCheck } from "lucide-react";

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-background/90 backdrop-blur-2xl transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* MODAL CONTAINER */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-surface-elevated border border-white/12 rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* MODAL HEADER */}
        <div className="p-6 sm:p-8 border-b border-white/8 flex items-start justify-between gap-4 bg-surface/50 backdrop-blur-md sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-[10px] font-mono text-accent-cyan uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-muted uppercase">
                {project.statusBadge}
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-foreground">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted font-mono mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-all shrink-0"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL BODY (SCROLLABLE) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 custom-scrollbar">
          {/* HERO VISUAL & METRICS */}
          <div className="relative w-full aspect-video sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-surface">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

            {/* In-Image Metrics Strip */}
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 p-3 rounded-xl bg-surface-elevated/85 border border-white/10 backdrop-blur-md">
              {project.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-bold text-xs sm:text-sm text-accent-cyan">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-muted font-mono truncate">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 01 & 02: OVERVIEW & THE PROBLEM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                01 // Overview
              </span>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-violet">
                02 // The Problem
              </span>
              <p className="text-sm text-muted leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>

          {/* 03: THE SOLUTION */}
          <div className="p-6 rounded-2xl bg-surface/50 border border-white/8 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-emerald">
              03 // Engineered Solution
            </span>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* 04: ARCHITECTURE SNAPSHOT */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
              04 // Architecture &amp; Data Pipeline
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <small className="font-mono text-[10px] text-muted uppercase">Input Interface</small>
                <div className="text-xs font-medium text-foreground mt-1">{project.architecture.input}</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <small className="font-mono text-[10px] text-muted uppercase">Processing Core</small>
                <div className="text-xs font-medium text-foreground mt-1">{project.architecture.processing}</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <small className="font-mono text-[10px] text-muted uppercase">Output Deliverable</small>
                <div className="text-xs font-medium text-foreground mt-1">{project.architecture.output}</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <small className="font-mono text-[10px] text-muted uppercase">Storage &amp; State</small>
                <div className="text-xs font-medium text-foreground mt-1">{project.architecture.storage}</div>
              </div>
            </div>

            <p className="text-xs text-muted font-mono leading-relaxed bg-surface p-3.5 rounded-xl border border-white/5">
              💡 {project.architecture.description}
            </p>
          </div>

          {/* 05: KEY FEATURES */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground">
              05 // Key Features
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground/90 leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 06: TECH STACK MATRIX */}
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground">
              06 // Technology Matrix
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.techStack.map((category, i) => (
                <div key={i} className="p-4 rounded-xl bg-surface/80 border border-white/6">
                  <h4 className="font-mono text-[11px] font-semibold text-accent-cyan uppercase mb-2">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 07: VERIFIED OUTCOMES */}
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-emerald">
              07 // Verified Engineering Outcomes
            </span>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald shrink-0 mt-1.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MODAL FOOTER WITH LINKS */}
        <div className="p-6 sm:p-8 border-t border-white/8 bg-surface/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-semibold text-xs hover:bg-white/90 transition-all shadow-md"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Source</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-xs text-muted hover:text-foreground transition-all"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
