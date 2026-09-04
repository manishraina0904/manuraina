"use client";

import React, { useState } from "react";
import { ENGINEERING_STEPS } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function EngineeringApproach() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="py-20 md:py-32 relative bg-surface/20 border-y border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              05 // Engineering Rigor &amp; Execution
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight mb-4">
            How I Think &amp; Build
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Building complex software requires an uncompromising commitment to systems thinking—eliminating hidden assumptions, designing strict contract boundaries, and delivering verifiable reliability.
          </p>
        </div>

        {/* 4-STEP ENGINEERING PIPELINE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGINEERING_STEPS.map((step, idx) => (
            <TextReveal key={step.step} delay={idx * 0.1}>
              <div
                onClick={() => setActiveStep(idx)}
                className={`h-full p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  activeStep === idx
                    ? "bg-surface-elevated border-accent-violet/60 shadow-[0_12px_40px_rgba(168,85,247,0.25)]"
                    : "bg-surface-card border-white/8 hover:border-white/20"
                }`}
              >
                <div>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-extrabold text-3xl text-foreground/40 group-hover:text-accent-cyan transition-colors">
                      {step.step}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    {step.title}
                  </h3>
                  <div className="font-mono text-xs text-accent-cyan mb-4 font-medium">
                    {step.subtitle}
                  </div>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Specific Action Points */}
                <div className="space-y-2.5 pt-4 border-t border-white/8">
                  {step.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-foreground/80 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
