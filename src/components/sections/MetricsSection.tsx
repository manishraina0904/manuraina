"use client";

import React, { useState, useRef } from "react";
import TextReveal from "@/components/animations/TextReveal";
import { Zap, Database, Trophy, Users, ShieldCheck, Sparkles, Cpu, Award } from "lucide-react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";

const metrics = [
  {
    value: "7",
    suffix: "+",
    label: "Production Systems",
    sublabel: "Autonomous agent kernels, clinical models & APIs",
    icon: Zap,
    color: "text-accent-violet",
    bg: "bg-accent-violet/10",
    border: "border-accent-violet/25",
  },
  {
    value: "50K",
    suffix: "+",
    label: "Dataset Scale",
    sublabel: "Records processed across calibrated ML pipelines",
    icon: Database,
    color: "text-accent-purple",
    bg: "bg-accent-purple/10",
    border: "border-accent-purple/25",
  },
  {
    value: "95",
    suffix: "%",
    label: "Model Accuracy",
    sublabel: "Top benchmark on survival prediction (91.89% CV AUC)",
    icon: Trophy,
    color: "text-accent-emerald",
    bg: "bg-accent-emerald/10",
    border: "border-accent-emerald/25",
  },
  {
    value: "4",
    suffix: "+",
    label: "Research Domains",
    sublabel: "Multi-Agent DAGs, Healthcare ML, NLP & Vision",
    icon: Users,
    color: "text-accent-violet",
    bg: "bg-accent-violet/10",
    border: "border-accent-violet/25",
  },
];

export default function MetricsSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative py-24 md:py-36 bg-[#05030A] select-none overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-accent-violet/6 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <TextReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent-violet font-medium">
                Section 08 // Signature Credentials &amp; Outcomes
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight mb-4">
              Verified outcomes &amp; engineer credentials.
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Every metric represents benchmarked clinical algorithms, production agent kernels, and peer-reviewed research.
            </p>
          </div>
        </TextReveal>

        {/* SIGNATURE 3D FLOATING "ENGINEER PASS" (DesignCode Reference 36s-38s) */}
        <div className="relative py-12 flex flex-col items-center justify-center">
          {/* Decorative Topographical Contour Wave Wireframe (matching 36s-38s background) */}
          <div className="absolute inset-0 max-w-4xl mx-auto opacity-35 pointer-events-none -z-10 flex items-center justify-center">
            <svg viewBox="0 0 800 400" className="w-full h-full text-accent-violet stroke-current fill-none">
              <path d="M 50,200 Q 200,80 400,200 T 750,200" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
              <path d="M 30,230 Q 220,110 400,230 T 770,230" strokeWidth="1" opacity="0.4" />
              <path d="M 70,170 Q 180,50 400,170 T 730,170" strokeWidth="0.8" opacity="0.5" />
              <path d="M 90,260 Q 240,140 400,260 T 710,260" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.7" />
              <path d="M 120,140 Q 260,30 400,140 T 680,140" strokeWidth="0.6" opacity="0.3" />
            </svg>
          </div>

          {/* Lanyard Strap & Clip at Top */}
          <div className="flex flex-col items-center">
            {/* Fabric Lanyard Ribbon */}
            <div className="w-12 h-14 bg-gradient-to-b from-[#150d28] to-[#251745] border-x border-accent-violet/30 rounded-t-sm shadow-md flex items-center justify-center">
              <div className="w-1.5 h-full bg-accent-violet/30" />
            </div>
            {/* Metallic Clasp */}
            <div className="w-8 h-4 rounded-sm bg-gradient-to-r from-gray-400 via-gray-100 to-gray-500 border border-white/40 shadow-lg -mt-0.5 z-20" />
            {/* Swivel Ring */}
            <div className="w-4 h-4 rounded-full border-2 border-gray-300 -mt-1 z-10" />
          </div>

          {/* 3D FLOATING HOLOGRAPHIC BADGE CARD */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "1000px",
            }}
            className="cursor-pointer -mt-2"
          >
            <div
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                transformStyle: "preserve-3d",
              }}
              className="relative w-[320px] sm:w-[360px] rounded-3xl bg-[#0e0a1b]/95 border-2 border-white/15 p-6 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_40px_rgba(139,92,246,0.30)] overflow-hidden"
            >
              {/* Holographic Sheen Reflection Layer */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
                style={{
                  background: isHovered
                    ? `linear-gradient(${120 + tilt.y * 5}deg, rgba(255,255,255,0.2) 0%, rgba(139,92,246,0.4) 40%, rgba(236,72,153,0.3) 70%, transparent 100%)`
                    : "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
                }}
              />

              {/* Lanyard Hole Punch Slot */}
              <div className="w-12 h-2.5 rounded-full bg-black/80 border border-white/10 mx-auto mb-5 shadow-inner" />

              {/* Card Header: Credential Level */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="font-mono text-[10px] tracking-widest text-muted uppercase font-bold">
                  PORTFOLIO PASS // 2026
                </span>
                <span className="flex items-center gap-1 font-mono text-[9px] text-accent-emerald uppercase bg-accent-emerald/10 px-2 py-0.5 rounded-full border border-accent-emerald/30 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                  AUTHENTICATED
                </span>
              </div>

              {/* Microchip Hologram + Pass Name */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-accent-violet font-semibold">
                    ROLE CREDENTIAL
                  </div>
                  <h3 className="font-display font-black text-3xl text-foreground tracking-tight leading-none mt-1">
                    PRO ACCESS
                  </h3>
                  <div className="font-mono text-xs text-muted mt-1">
                    AI/ML Systems Architect
                  </div>
                </div>

                {/* Holographic Microchip */}
                <div className="relative w-11 h-9 rounded-md bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 border border-amber-200/60 shadow-md p-1 shrink-0">
                  <div className="w-full h-full border border-amber-900/40 rounded flex flex-col justify-between">
                    <div className="w-full h-0.5 bg-amber-900/40" />
                    <div className="w-full h-0.5 bg-amber-900/40" />
                  </div>
                </div>
              </div>

              {/* Operator Identity Block */}
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.04] border border-white/8 mb-5">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-accent-violet/30 bg-gradient-to-b from-[#180f2b] to-[#05030A]">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    sizes="48px"
                    className="object-cover object-top scale-105"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-foreground">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="font-mono text-[10px] text-accent-violet font-semibold">
                    NIT Delhi ML Researcher
                  </div>
                  <div className="font-mono text-[9px] text-muted">
                    ID: MR-2026-AIML-9189
                  </div>
                </div>
              </div>

              {/* Scannable Barcode Strip (Reference 36s-38s) */}
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-[9px] font-mono text-muted mb-1.5">
                  <span>SYSTEM IDENTIFIER</span>
                  <span className="text-accent-violet">CRC-32: 0x8F94D2</span>
                </div>
                {/* Simulated Barcode */}
                <div className="h-9 w-full flex items-center justify-between gap-[2px] bg-white/5 p-1 rounded-lg">
                  {Array.from({ length: 48 }).map((_, bIdx) => {
                    const isThick = bIdx % 4 === 0 || bIdx % 7 === 0;
                    return (
                      <div
                        key={bIdx}
                        className={`h-full ${isThick ? "w-[3px] bg-foreground/90" : "w-[1px] bg-foreground/40"}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 OUTCOME METRIC CARDS UNDERNEATH (Matching Reference 40s-43s) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <TextReveal key={m.label} delay={i * 0.1}>
                <div className="relative p-7 rounded-3xl bg-[#0c0a15]/90 border border-white/8 hover:border-accent-violet/40 transition-all duration-500 backdrop-blur-xl group hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_24px_rgba(139,92,246,0.12)] overflow-hidden">
                  {/* Violet hover glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-accent-violet/12 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${m.bg} border ${m.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${m.color}`} />
                  </div>

                  {/* Number */}
                  <div className="font-display font-black text-4xl sm:text-5xl text-foreground leading-none mb-2">
                    {m.value}
                    <span className={`${m.color} text-2xl`}>{m.suffix}</span>
                  </div>

                  {/* Label */}
                  <div className="font-display font-bold text-base text-foreground mb-1">
                    {m.label}
                  </div>
                  <div className="font-mono text-xs text-muted leading-relaxed">
                    {m.sublabel}
                  </div>
                </div>
              </TextReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
