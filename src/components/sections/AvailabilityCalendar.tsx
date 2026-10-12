"use client";

import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, MapPin, Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";

interface CalendarEvent {
  day: number;
  month: string;
  type: "completed" | "research" | "available" | "active";
  title: string;
  badge: string;
}

export default function AvailabilityCalendar() {
  const [selectedDay, setSelectedDay] = useState<number>(24);

  // Calendar days setup for October - November 2026
  const calendarEvents: Record<number, CalendarEvent> = {
    5: { day: 5, month: "OCT", type: "completed", title: "LangGraph Multi-Agent Kernel v2.6 Shipped", badge: "Production Release" },
    9: { day: 9, month: "OCT", type: "research", title: "NIT Delhi Heart Disease Survival Model Benchmarked (91.89% AUC)", badge: "Research Paper" },
    14: { day: 14, month: "OCT", type: "active", title: "FastAPI Async Security & JWT Authentication Hardening", badge: "Engineering Sprint" },
    18: { day: 18, month: "OCT", type: "active", title: "Qdrant Vector DB Semantic Search Indexing Upgrade", badge: "Infrastructure" },
    24: { day: 24, month: "OCT", type: "available", title: "Open for Full-Time AI/ML Engineering & Systems Architect Roles", badge: "High Availability" },
    28: { day: 28, month: "OCT", type: "available", title: "Open for High-Impact Technical Consultations & Contract Sprints", badge: "High Availability" },
    31: { day: 31, month: "OCT", type: "available", title: "Q4 2026 Sprint Capacity Open", badge: "High Availability" },
  };

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const activeEvent = calendarEvents[selectedDay] || {
    day: selectedDay,
    month: "OCT",
    type: "available",
    title: "Engineering Availability Open for High-Impact Roles & Collaborations",
    badge: "Available Slot",
  };

  return (
    <section id="availability" className="py-24 md:py-36 relative select-none z-10 overflow-hidden bg-[#05030A]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-accent-violet/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <TextReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent-violet font-medium">
                Section 07 // Availability &amp; Engineering Schedule
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight mb-4">
              Sprint milestones &amp; availability.
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Real-time engineering schedule showing completed project deliverables, research cycles, and open availability for full-time AI/ML roles.
            </p>
          </div>
        </TextReveal>

        {/* DARK CALENDAR INTERFACE PANEL (Matching DesignCode Reference 32s) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0c0915] border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_24px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(139,92,246,0.12)]">
          {/* Calendar Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-violet/15 border border-accent-violet/30 flex items-center justify-center text-accent-violet">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-foreground">
                  October 2026 — November 2026
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-muted mt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-accent-violet" />
                    <span>New Delhi, India</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-muted" />
                    <span>IST (UTC+5:30) / Remote Worldwide</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/30 font-mono text-xs text-accent-emerald font-semibold w-fit">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
              <span>OPEN FOR HIGH-IMPACT ROLES</span>
            </div>
          </div>

          {/* Weekday Labels Grid */}
          <div className="grid grid-cols-7 gap-2 mb-2 text-center">
            {weekDays.map((d) => (
              <span key={d} className="font-mono text-[11px] text-muted font-semibold py-1">
                {d}
              </span>
            ))}
          </div>

          {/* Calendar Days Matrix */}
          <div className="grid grid-cols-7 gap-2 sm:gap-2.5">
            {/* 3 offset empty spaces for Wednesday start */}
            <div className="h-12 sm:h-16 rounded-xl bg-white/[0.01] border border-transparent opacity-20" />
            <div className="h-12 sm:h-16 rounded-xl bg-white/[0.01] border border-transparent opacity-20" />

            {daysInMonth.map((day) => {
              const event = calendarEvents[day];
              const isSelected = selectedDay === day;
              const isAvailable = event?.type === "available";

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`relative h-12 sm:h-16 rounded-xl p-1.5 sm:p-2 text-left transition-all duration-300 flex flex-col justify-between group ${
                    isSelected
                      ? "bg-accent-violet/25 border-2 border-accent-violet shadow-[0_0_20px_rgba(139,92,246,0.5)] scale-[1.03] z-10"
                      : isAvailable
                      ? "bg-[#160e29]/90 border border-accent-violet/40 hover:border-accent-violet hover:bg-[#1d1238]"
                      : event
                      ? "bg-[#110c20]/80 border border-white/12 hover:border-white/30"
                      : "bg-[#080510]/80 border border-white/5 hover:border-white/15 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-mono text-xs sm:text-sm font-semibold ${
                        isSelected
                          ? "text-white font-bold"
                          : isAvailable
                          ? "text-accent-violet"
                          : "text-foreground/80"
                      }`}
                    >
                      {day}
                    </span>

                    {/* Dot indicators */}
                    {isAvailable && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-pulse" />
                    )}
                    {event && !isAvailable && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                    )}
                  </div>

                  {/* Micro label for events */}
                  {event && (
                    <span
                      className={`hidden sm:block text-[9px] font-mono truncate ${
                        isAvailable ? "text-accent-violet font-semibold" : "text-muted"
                      }`}
                    >
                      {event.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Selected Event Details Card */}
          <div className="mt-8 p-5 rounded-2xl bg-[#120d22] border border-accent-violet/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-accent-violet/20 border border-accent-violet/40 flex items-center justify-center text-accent-violet shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-accent-violet font-bold">
                    OCTOBER {selectedDay}, 2026
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 font-mono text-[10px] text-muted">
                    {activeEvent.badge}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-foreground mt-1">
                  {activeEvent.title}
                </h4>
                <p className="font-mono text-xs text-muted mt-0.5">
                  Collaborative availability: Multi-Agent Systems, PyTorch ML training, and high-throughput FastAPI microservices.
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-accent-violet hover:bg-accent-violet-light text-white font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(139,92,246,0.35)] flex items-center gap-2 shrink-0 self-start sm:self-auto"
            >
              <span>Connect Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
