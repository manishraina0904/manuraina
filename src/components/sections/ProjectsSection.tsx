"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectDetail } from "@/data/projectsData";
import TextReveal from "@/components/animations/TextReveal";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, Github, Sparkles, Layers, Activity } from "lucide-react";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Selected Work" },
    { id: "multi-agent", label: "Multi-Agent & Generative AI" },
    { id: "ml", label: "Applied ML & Healthcare" },
    { id: "security", label: "Security & Backend APIs" },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === "all") return true;
    if (filter === "multi-agent") return p.category === "Multi-Agent AI" || p.category === "Speech AI";
    if (filter === "ml") return p.category === "Healthcare ML" || p.category === "Cybersecurity & CV";
    if (filter === "security") return p.category === "Security API" || p.category === "Full-Stack AI" || p.category === "NLP & RecSys";
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION TITLE & HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                02 // Selected Work &amp; Case Studies
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-foreground tracking-tight">
              Featured Systems
            </h2>
          </div>

          <p className="text-muted text-sm sm:text-base max-w-md">
            Production-engineered multi-agent workspaces, clinical survival models, and high-throughput security APIs.
          </p>
        </div>

        {/* CATEGORY FILTER CHIPS */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                filter === cat.id
                  ? "bg-foreground text-background font-semibold shadow-[0_0_16px_rgba(255,255,255,0.2)]"
                  : "bg-surface-elevated text-muted hover:text-foreground border border-white/6 hover:border-white/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <TextReveal key={project.id} delay={i * 0.08}>
              <div
                onClick={() => setSelectedProject(project)}
                data-cursor-type="VIEW"
                className="group relative h-full flex flex-col justify-between rounded-3xl bg-surface-card border border-white/8 hover:border-accent-cyan/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] cursor-pointer"
              >
                <div>
                  {/* TOP TELEMETRY CHIP & STATUS */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 font-mono text-[10px] text-accent-cyan uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-muted flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                      {project.statusSuccess}
                    </span>
                  </div>

                  {/* PREVIEW VISUAL WITH LIVE HUD OVERLAY */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-surface">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Telemetry Badge on Image */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-surface-elevated/80 border border-white/10 backdrop-blur-md font-mono text-[9px] text-foreground uppercase tracking-widest">
                      {project.statusBadge}
                    </div>
                  </div>

                  {/* TITLE & SUMMARY */}
                  <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-accent-cyan transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* BOTTOM METRICS & ACTIONS */}
                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-[10px] text-muted group-hover:text-foreground transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-white/5 font-mono text-[10px] text-muted">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Link Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/8">
                    <span className="font-mono text-xs font-semibold text-accent-cyan group-hover:underline flex items-center gap-1">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor-type="OPEN"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-muted hover:text-foreground transition-all"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>

      {/* CASE STUDY MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
