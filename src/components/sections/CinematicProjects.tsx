"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { PROJECTS_DATA, ProjectDetail } from "@/data/projectsData";
import ProjectModal from "./ProjectModal";
import TextReveal from "@/components/animations/TextReveal";
import { ArrowUpRight, Github, Sparkles, CheckCircle2 } from "lucide-react";

export default function CinematicProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filterCategories = [
    { label: "All", value: "All", count: PROJECTS_DATA.length },
    { label: "AI Agents", value: "Multi-Agent AI", count: 1 },
    { label: "Applied ML", value: "ML", count: 2 },
    { label: "Full-Stack", value: "Full-Stack", count: 2 },
    { label: "Vision & Speech", value: "Vision & Speech", count: 2 },
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
      {/* AMBIENT VIOLET RADIAL LIGHTING */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-accent-violet/12 via-accent-purple/8 to-transparent blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-to-tl from-accent-purple/8 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                03 // Architecture Gallery
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-foreground tracking-tight">
              Featured Systems
            </h2>
            <p className="text-muted text-sm sm:text-base mt-2 max-w-xl">
              All {PROJECTS_DATA.length} verified production systems — spanning autonomous agent kernels, calibrated clinical ML, and high-throughput security APIs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-surface-elevated border border-accent-violet/20 font-mono text-xs text-foreground font-semibold flex items-center gap-2 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
              <span>{PROJECTS_DATA.length} Production Systems</span>
            </span>
          </div>
        </div>

        {/* SIGNATURE 3D PERSPECTIVE PROJECT SHOWCASE (DesignCode Reference 18s-22s) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="font-display font-black text-2xl sm:text-4xl text-foreground tracking-tight">
              Built to ship faster.
            </h3>
            <p className="font-mono text-xs text-muted mt-1">
              Select any architecture to inspect full source code, benchmark data &amp; DAG topology
            </p>
          </div>

          {/* 3D PERSPECTIVE ROW WITH GLOSSY FLOOR REFLECTIONS */}
          <div
            className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 items-center py-6 px-4"
            style={{ perspective: "1200px" }}
          >
            {PROJECTS_DATA.slice(0, 3).map((proj, pIdx) => {
              const rotation = pIdx === 0 ? "rotateY(14deg) rotateX(4deg)" : pIdx === 2 ? "rotateY(-14deg) rotateX(4deg)" : "rotateY(0deg) translateZ(24px)";
              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="group cursor-pointer flex flex-col items-center"
                >
                  {/* Primary 3D Tilted Mockup */}
                  <div
                    style={{
                      transform: rotation,
                      transformStyle: "preserve-3d",
                      transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s ease",
                    }}
                    className="relative w-full rounded-2xl bg-[#0c0a15] border border-white/12 p-3 sm:p-4 group-hover:border-accent-violet/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_24px_rgba(139,92,246,0.15)] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(139,92,246,0.30)] group-hover:-translate-y-2"
                  >
                    {/* Mockup Thumbnail */}
                    <div className="relative w-full h-44 lg:h-52 rounded-xl overflow-hidden mb-3 bg-[#080410] border border-white/8">
                      <Image
                        src={proj.thumbnail}
                        alt={proj.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        sizes="33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05030A]/80 via-transparent to-transparent" />
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-[10px] text-accent-violet font-semibold uppercase">
                        {proj.category}
                      </span>
                      <span className="font-mono text-[9px] text-accent-emerald">
                        ● {proj.statusSuccess}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-foreground group-hover:text-accent-violet transition-colors truncate">
                      {proj.title}
                    </h4>
                  </div>

                  {/* GLOSSY MIRROR FLOOR REFLECTION (Reference 18s-22s) */}
                  <div
                    style={{
                      transform: `${rotation} scaleY(-1)`,
                      transformOrigin: "top center",
                      maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 65%)",
                      WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 65%)",
                    }}
                    className="w-[92%] h-20 rounded-b-2xl bg-[#0c0a15] border border-white/5 opacity-40 pointer-events-none -mt-1 blur-[0.5px]"
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={proj.thumbnail}
                        alt="reflection"
                        fill
                        className="object-cover object-bottom"
                        sizes="33vw"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {filterCategories.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition-all duration-300 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? "bg-accent-violet/15 border border-accent-violet/45 text-foreground font-medium shadow-[0_0_16px_rgba(139,92,246,0.20)]"
                    : "bg-surface-elevated/70 hover:bg-surface-elevated border border-white/8 text-muted hover:text-foreground"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 rounded-full ${
                    isActive
                      ? "bg-accent-violet text-white font-bold"
                      : "bg-white/10 text-muted"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* PROJECTS GRID WITH PERSPECTIVE TILT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <TextReveal key={project.id} delay={idx * 0.08}>
              <div
                className="perspective-card h-full"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  onClick={() => setSelectedProject(project)}
                  data-cursor-type="VIEW"
                  className={`tilt-inner group relative h-full rounded-3xl bg-surface-card/85 border backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer overflow-hidden transition-all duration-500 ${
                    hoveredCard === idx
                      ? "border-accent-violet/40 shadow-[0_24px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(139,92,246,0.15)] -translate-y-1.5"
                      : "border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  {/* Violet hover gradient aura */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-accent-violet/10 via-accent-purple/5 to-transparent blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-purple/8 to-transparent blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-600" />

                  <div>
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 font-mono text-[10px] text-accent-violet uppercase tracking-wider font-medium">
                        {project.category}
                      </span>
                      <span className="font-mono text-[10px] text-accent-emerald flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                        {project.statusSuccess}
                      </span>
                    </div>

                    {/* Thumbnail — with perspective float effect */}
                    <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden mb-6 border border-white/8 group-hover:border-accent-violet/25 transition-all bg-surface-elevated">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05030A]/90 via-[#05030A]/20 to-transparent opacity-70" />
                      {/* Violet corner glow on hover */}
                      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent-violet/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-accent-violet transition-colors mb-1.5 leading-tight">
                      {project.title}
                    </h3>
                    <div className="font-mono text-xs text-accent-violet font-medium mb-3">
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
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/6 font-mono text-[10px] text-muted group-hover:text-foreground group-hover:border-accent-violet/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/8">
                      <span className="font-mono text-xs font-semibold text-foreground group-hover:text-accent-violet flex items-center gap-1.5 transition-colors">
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        data-cursor-type="OPEN"
                        className="p-2.5 rounded-full bg-white/5 hover:bg-accent-violet/15 border border-white/10 hover:border-accent-violet/40 text-muted hover:text-accent-violet transition-all shrink-0"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>

        {/* METRICS COUNTER STRIP */}
        <div className="mt-16 p-6 rounded-3xl bg-surface-card/60 border border-accent-violet/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.08)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-accent-violet/15 border border-accent-violet/30 flex items-center justify-center text-accent-violet">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-sm text-foreground block">
                {PROJECTS_DATA.length} OF {PROJECTS_DATA.length} PRODUCTION SYSTEMS VERIFIED
              </span>
              <span className="font-mono text-xs text-muted">
                End-to-end codebases, benchmarks, and interactive case studies.
              </span>
            </div>
          </div>

          <a
            href="https://github.com/manishraina0904"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-accent-violet/10 hover:bg-accent-violet/20 border border-accent-violet/30 font-mono text-xs text-accent-violet transition-all flex items-center gap-2 shrink-0 hover:shadow-[0_0_20px_rgba(139,92,246,0.20)]"
          >
            <span>Explore All on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* PROJECT MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
