"use client";

import React from "react";
import TextReveal from "@/components/animations/TextReveal";
import { ArrowUpRight, BrainCircuit, Server, Layers } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: BrainCircuit,
    tier: "AI / ML Engineering",
    tagline: "Intelligent systems that learn.",
    description:
      "Multi-agent orchestration, LLM pipelines, NLP, computer vision, and calibrated clinical ML. From data exploration to production deployment.",
    features: [
      "Multi-Agent AI & MCP Protocols",
      "LightGBM / XGBoost survival models",
      "NLP sentiment & recommendation",
      "Computer vision & speech pipelines",
      "Model calibration & benchmarking",
      "FastAPI ML inference endpoints",
    ],
    cta: "See ML Projects",
    href: "#projects",
    accent: "violet",
    accentClass: "text-accent-violet",
    borderClass: "border-accent-violet/40",
    bgClass: "bg-accent-violet/10",
    iconBg: "bg-accent-violet/15",
    glowClass: "from-accent-violet/15 via-accent-purple/8",
    featured: true,
  },
  {
    icon: Server,
    tier: "Backend Engineering",
    tagline: "Infrastructure built to scale.",
    description:
      "High-throughput REST APIs, JWT/RBAC security layers, PostgreSQL schemas, and async FastAPI services engineered for production reliability.",
    features: [
      "FastAPI async REST APIs",
      "JWT / RBAC security guards",
      "PostgreSQL & relational modeling",
      "Redis caching & task queues",
      "API rate limiting & logging",
      "Docker containerization",
    ],
    cta: "See Backend Work",
    href: "#projects",
    accent: "purple",
    accentClass: "text-accent-purple",
    borderClass: "border-white/10",
    bgClass: "bg-accent-purple/8",
    iconBg: "bg-accent-purple/15",
    glowClass: "from-accent-purple/10 via-transparent",
    featured: false,
  },
  {
    icon: Layers,
    tier: "Intelligent Products",
    tagline: "Design meets deep intelligence.",
    description:
      "Full-stack React / Next.js applications with AI at the core. Thoughtful design, WebGL visuals, and real-time interactivity that ship.",
    features: [
      "React / Next.js full-stack apps",
      "Three.js & WebGL experiences",
      "GSAP scroll-driven animations",
      "Real-time AI chat interfaces",
      "Responsive design systems",
      "Vercel / cloud deployment",
    ],
    cta: "Get in Touch",
    href: "#contact",
    accent: "emerald",
    accentClass: "text-accent-emerald",
    borderClass: "border-white/10",
    bgClass: "bg-accent-emerald/8",
    iconBg: "bg-accent-emerald/15",
    glowClass: "from-accent-emerald/8 via-transparent",
    featured: false,
  },
];

export default function ServicesCards() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-accent-violet/8 via-accent-purple/5 to-transparent blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TextReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-violet" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                What I Build // Capabilities
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight mb-4">
              Engineering Disciplines
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Three intersecting pillars — each a standalone specialty,
              most powerful when combined.
            </p>
          </div>
        </TextReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <TextReveal key={s.tier} delay={i * 0.12}>
                <div
                  className={`relative h-full p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 group hover:-translate-y-1.5 overflow-hidden ${
                    s.featured
                      ? `${s.borderClass} bg-surface-card shadow-[0_0_40px_rgba(139,92,246,0.12)]`
                      : `${s.borderClass} bg-surface-card`
                  } hover:shadow-[0_24px_60px_rgba(0,0,0,0.6)]`}
                >
                  {/* Corner glow */}
                  <div className={`absolute top-0 left-0 w-64 h-64 bg-gradient-to-br ${s.glowClass} to-transparent blur-3xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Featured indicator */}
                  {s.featured && (
                    <div className="mb-5">
                      <span className="px-3 py-1 rounded-full bg-accent-violet/15 border border-accent-violet/35 font-mono text-[10px] text-accent-violet uppercase tracking-wider">
                        ✦ Primary Expertise
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${s.iconBg} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <Icon className={`w-7 h-7 ${s.accentClass}`} />
                  </div>

                  {/* Content */}
                  <div className={`font-mono text-xs ${s.accentClass} font-semibold uppercase tracking-wider mb-2`}>
                    {s.tier}
                  </div>
                  <h3 className="font-display font-black text-2xl text-foreground mb-3 tracking-tight">
                    {s.tagline}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-8">
                    {s.description}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-2.5 mb-8">
                    {s.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2.5 text-xs text-foreground/80">
                        <span className={`w-1.5 h-1.5 rounded-full ${s.bgClass} border ${s.borderClass} shrink-0`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={s.href}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs font-semibold transition-all ${
                      s.featured
                        ? "bg-accent-violet text-white hover:bg-accent-violet-light shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:shadow-[0_4px_30px_rgba(139,92,246,0.50)]"
                        : "bg-white/5 hover:bg-white/10 border border-white/10 text-foreground"
                    }`}
                  >
                    <span>{s.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </TextReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
