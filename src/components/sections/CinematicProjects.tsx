"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectDetail } from "@/data/projectsData";
import ProjectModal from "./ProjectModal";
import TextReveal from "@/components/animations/TextReveal";
import { ArrowUpRight, Github, Sparkles, Layers, CheckCircle2, Filter } from "lucide-react";

export default function CinematicProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterCategories = [
    { label: "All Projects", value: "All", count: PROJECTS_DATA.length },
    { label: "AI Agents & MCP", value: "Multi-Agent AI", count: 1 },
    { label: "Applied ML & Data", value: "ML", count: 2 },
    { label: "Full-Stack & APIs", value: "Full-Stack", count: 2 },
    { label: "Vision & Speech AI", value: "Vision & Speech", count: 2 },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Multi-Agent AI") return project.category === "Multi-Agent AI";
    if (activeFilter === "ML") {
      return (
        project.category === "Healthcare ML" ||
        project.category === "NLP & RecSys"
      );
    }
    if (activeFilter === "Full-Stack") {
      return (
        project.category === "Full-Stack AI" ||
        project.category === "Security API"
      );
    }
    if (activeFilter === "Vision & Speech") {
      return (
        project.category === "Speech AI" ||
        project.category === "Cybersecurity & CV"
      );
    }
    return true;
  });

  return (
    <section id="projects" className="relative py-24 md:py-36 z-10 select-none overflow-hidden">
      {/* AMBIENT RADIAL LIGHTING (BLACK & BLUE THEME) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-accent-blue/15 via-accent-cyan/10 to-transparent blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER BAR */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                ACT III // ALL ARCHITECTURE &amp; SYSTEMS
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-foreground tracking-tight">
              Featured Systems
            </h2>
            <p className="text-muted text-sm sm:text-base mt-2 max-w-xl">
              All 7 verified production projects spanning autonomous agent kernels, calibrated clinical machine learning, and high-throughput security APIs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-surface-elevated border border-white/10 font-mono text-xs text-foreground font-semibold flex items-center gap-2 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
              <span>{PROJECTS_DATA.length} Production Systems</span>
            </span>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterCategories.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition-all duration-300 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? "bg-accent-blue/15 border border-accent-blue/40 text-foreground font-medium scale-[1.01]"
                    : "bg-surface-elevated/70 hover:bg-surface-elevated border border-white/8 text-muted hover:text-foreground"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-accent-blue text-background font-bold"
                      : "bg-white/10 text-muted"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ALL PROJECTS 3D CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <TextReveal key={project.id} delay={idx * 0.08}>
              <div
                onClick={() => setSelectedProject(project)}
                data-cursor-type="VIEW"
                className="group relative h-full rounded-3xl bg-surface-card/80 border border-white/10 hover:border-accent-blue/35 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_20px_rgba(59,130,246,0.10)] cursor-pointer overflow-hidden"
              >
                {/* Subtle Hover Gradient Aura inside card */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-accent-blue/8 to-transparent blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10px] text-muted uppercase tracking-wider font-medium">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-accent-emerald flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                      {project.statusSuccess}
                    </span>
                  </div>

                  {/* Thumbnail Image Shot Frame */}
                  <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 border border-white/8 group-hover:border-white/20 transition-all bg-surface-elevated">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-accent-blue transition-colors mb-1.5 leading-tight">
                    {project.title}
                  </h3>
                  <div className="font-mono text-xs text-accent-blue font-medium mb-3">
                    {project.tagline}
                  </div>

                  {/* Summary */}
                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Bottom Tags & CTAs */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 5).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/6 font-mono text-[10px] text-muted group-hover:text-foreground transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/8">
                    <span className="font-mono text-xs font-semibold text-foreground group-hover:text-accent-blue flex items-center gap-1.5">
                      <span>Inspect Case Study &amp; Architecture</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor-type="OPEN"
                      className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-muted hover:text-foreground transition-all shrink-0"
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

        {/* BOTTOM METRICS COUNTER */}
        <div className="mt-16 p-6 rounded-3xl bg-surface-card/60 border border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-cyan">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-sm text-foreground block">
                7 OF 7 PRODUCTION SYSTEMS VERIFIED
              </span>
              <span className="font-mono text-xs text-muted">
                Each system includes end-to-end codebases, benchmarks, and interactive case studies.
              </span>
            </div>
          </div>

          <a
            href="https://github.com/manishraina0904"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-mono text-xs text-foreground transition-all flex items-center gap-2 shrink-0"
          >
            <span>Explore All on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* FULL ARCHITECTURE CASE STUDY MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
