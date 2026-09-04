"use client";

import React, { useState } from "react";
import Navbar from "@/components/sections/Navbar";
import CinematicCanvas from "@/components/3d/CinematicCanvas";
import CinematicHero from "@/components/sections/CinematicHero";
import CinematicManifesto from "@/components/sections/CinematicManifesto";
import TechMarquee from "@/components/sections/TechMarquee";
import CinematicProjects from "@/components/sections/CinematicProjects";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import SkillsSection from "@/components/sections/SkillsSection";
import EngineeringApproach from "@/components/sections/EngineeringApproach";
import DesignEngineering from "@/components/sections/DesignEngineering";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import AIAssistant from "@/components/ai/AIAssistant";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-accent-cyan/25 selection:text-accent-cyan overflow-x-hidden">
      {/* 1. PERSISTENT WEBGL CINEMATIC NARRATIVE ENGINE */}
      <CinematicCanvas />

      {/* 2. FLOATING TOP NAVIGATION BAR */}
      <Navbar
        onResumeClick={() => setIsResumeModalOpen(true)}
        onAIChatClick={() => setIsAIChatOpen(true)}
      />

      <main className="flex-1 relative z-10">
        {/* ACT I: THE AWAKENING & IDENTITY */}
        <CinematicHero onResumeClick={() => setIsResumeModalOpen(true)} />

        {/* ACT II: THE PHILOSOPHY & KERNEL IGNITION */}
        <CinematicManifesto />

        {/* INTERLUDE: CONTINUOUS TECHNOLOGY MARQUEE */}
        <TechMarquee />

        {/* ACT III: THE ARCHITECTURE GALLERY (HORIZONTAL CAMERA TRACK) */}
        <CinematicProjects />

        {/* ACT IV: THE CONSTELLATION OF SKILLS & MATRIX */}
        <SkillsSection />

        {/* ACT V: THE RESEARCH & CAREER CHRONICLES */}
        <ExperienceTimeline />

        {/* ACT VI: ENGINEERING RIGOR & 4-STEP PIPELINE */}
        <EngineeringApproach />

        {/* ACT VII: DESIGN + ENGINEERING SYNTHESIS */}
        <DesignEngineering />

        {/* CURRICULUM VITAE PREVIEW & VERIFIED DOWNLOAD */}
        <ResumeSection
          isModalOpen={isResumeModalOpen}
          onCloseModal={() => setIsResumeModalOpen(false)}
          onOpenModal={() => setIsResumeModalOpen(true)}
        />

        {/* FINALE: LET'S BUILD SOMETHING EXTRAORDINARY */}
        <ContactSection />
      </main>

      {/* FOOTER TELEMETRY & BACK TO TOP */}
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
