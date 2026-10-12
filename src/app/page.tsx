"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import CinematicCanvas from "@/components/3d/CinematicCanvas";
import CinematicHero from "@/components/sections/CinematicHero";
import CinematicManifesto from "@/components/sections/CinematicManifesto";
import TechMarquee from "@/components/sections/TechMarquee";
import CinematicProjects from "@/components/sections/CinematicProjects";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import EngineeringApproach from "@/components/sections/EngineeringApproach";
import DesignEngineering from "@/components/sections/DesignEngineering";
import MetricsSection from "@/components/sections/MetricsSection";
import ServicesCards from "@/components/sections/ServicesCards";
import ResumeSection from "@/components/sections/ResumeSection";
import RetroTerminalMockup from "@/components/sections/RetroTerminalMockup";
import AvailabilityCalendar from "@/components/sections/AvailabilityCalendar";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import AIAssistant from "@/components/ai/AIAssistant";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-accent-violet/25 selection:text-accent-violet overflow-x-hidden">
      {/* 1. PERSISTENT WEBGL CINEMATIC HERO ENGINE */}
      <CinematicCanvas />

      {/* 2. FLOATING TOP NAVIGATION BAR */}
      <Navbar
        onResumeClick={() => setIsResumeModalOpen(true)}
        onAIChatClick={() => setIsAIChatOpen(true)}
      />

      <main className="flex-1 relative z-10">
        {/* SECTION 1: HERO & IDENTITY (0–3s) */}
        <CinematicHero onResumeClick={() => setIsResumeModalOpen(true)} />

        {/* SECTION 2: TRUST & PRODUCTION TOOLING STRIP (3–6s) */}
        <TechMarquee />

        {/* SECTION 3: CORE PHILOSOPHY & ARCHITECTURAL PILLARS (6–11s) */}
        <CinematicManifesto />

        {/* SECTION 4 & 5: FEATURED SYSTEMS & 3D PERSPECTIVE GALLERY (11–27s) */}
        <CinematicProjects />

        {/* SECTION 6: RETRO CYBERDECK MONITOR & TECHNICAL WORKSPACE (27–31s) */}
        <RetroTerminalMockup />

        {/* SKILLS CLUSTER MATRIX */}
        <SkillsSection />

        {/* SECTION 7: AVAILABILITY & SPRINT MILESTONES CALENDAR (31–34s) */}
        <AvailabilityCalendar />

        {/* EXPERIENCE & RESEARCH TIMELINE */}
        <ExperienceTimeline />

        {/* SECTION 8: SIGNATURE 3D HOLOGRAPHIC PASS & OUTCOME METRICS (34–43s) */}
        <MetricsSection />

        {/* SECTION 9: ENGINEERING APPROACH & COMPARISON CAPABILITIES (43–46s) */}
        <EngineeringApproach />

        {/* DESIGN + ENGINEERING SYNTHESIS */}
        <DesignEngineering />

        {/* SERVICES / 3-TIER CAPABILITY CARDS */}
        <section id="services">
          <ServicesCards />
        </section>

        {/* RESUME MODAL & SECTION */}
        <ResumeSection
          isModalOpen={isResumeModalOpen}
          onCloseModal={() => setIsResumeModalOpen(false)}
          onOpenModal={() => setIsResumeModalOpen(true)}
        />

        {/* SECTION 10: CLOSING CONTACT & DIALOGUE (46–54s) */}
        <ContactSection />
      </main>

      {/* FOOTER — 3D Topographic Mountain Wireframe Mesh */}
      <Footer />

      {/* CONVERSATIONAL AI PORTFOLIO ASSISTANT */}
      <AIAssistant
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
        onOpen={() => setIsAIChatOpen(true)}
      />
    </div>
  );
}
