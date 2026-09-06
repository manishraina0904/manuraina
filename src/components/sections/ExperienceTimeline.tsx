"use client";

import React, { useState } from "react";
import { TIMELINE_EXPERIENCE, ExperienceItem } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import { Briefcase, GraduationCap, Trophy, Award, Calendar, MapPin, CheckCircle, ExternalLink } from "lucide-react";

export default function ExperienceTimeline() {
  const [activeType, setActiveType] = useState<string>("all");

  const filterItems = TIMELINE_EXPERIENCE.filter((item) => {
    if (activeType === "all") return true;
    if (activeType === "research") return item.type === "Research" || item.type === "Internship";
    if (activeType === "education") return item.type === "Education";
    if (activeType === "certification") return item.type === "Certification" || !!item.certificateUrl;
    return item.type.toLowerCase() === activeType.toLowerCase();
  });

  const getIcon = (type: ExperienceItem["type"]) => {
    switch (type) {
      case "Research":
        return <Award className="w-4 h-4 text-accent-cyan" />;
      case "Education":
        return <GraduationCap className="w-4 h-4 text-accent-violet" />;
      case "Hackathon":
        return <Trophy className="w-4 h-4 text-accent-emerald" />;
      case "Internship":
        return <Briefcase className="w-4 h-4 text-accent-cyan" />;
      case "Certification":
        return <Trophy className="w-4 h-4 text-accent-emerald" />;
      default:
        return <Calendar className="w-4 h-4 text-muted" />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      {/* AMBIENT BACKLIGHT */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-cyan/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                03 // Career Milestones &amp; Education
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight">
              Experience &amp; Track Record
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All" },
              { id: "research", label: "Research & Internships" },
              { id: "education", label: "Education" },
              { id: "certification", label: "Certifications" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveType(tab.id)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all ${
                  activeType === tab.id
                    ? "bg-foreground text-background font-semibold shadow-md"
                    : "bg-surface-elevated text-muted hover:text-foreground border border-white/6"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TIMELINE CONTAINER WITH GLOWING VERTICAL RAIL */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-12">
          {filterItems.map((item, i) => (
            <TextReveal key={i} delay={i * 0.08}>
              <div className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-surface-elevated border border-white/20 flex items-center justify-center group-hover:border-accent-cyan group-hover:scale-110 transition-all duration-300 shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan group-hover:shadow-[0_0_8px_#A855F7] transition-shadow" />
                </div>

                {/* Content Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-surface-card/80 border border-white/8 hover:border-white/20 transition-all duration-300 backdrop-blur-xl group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  {/* Top Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                        {getIcon(item.type)}
                      </span>
                      <span className="font-mono text-xs font-semibold text-accent-cyan uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs text-muted">
                      <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-foreground">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Role & Org */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-1">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-accent-violet flex items-center gap-2 mb-3">
                    <span>{item.organization}</span>
                    {item.location && (
                      <span className="text-xs text-muted font-normal flex items-center gap-1 font-mono">
                        • <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                    )}
                  </div>

                  {/* Verified Certificate Link if available */}
                  {item.certificateUrl && (
                    <div className="mb-4">
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 hover:bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan font-mono text-xs transition-all group/cert"
                      >
                        <ExternalLink className="w-3.5 h-3.5 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform" />
                        <span>View Verified Certificate</span>
                      </a>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/85 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/6">
                    {item.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
