"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import { FileText, Download, Eye, X, ExternalLink, CheckCircle } from "lucide-react";

interface ResumeSectionProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
  onOpenModal?: () => void;
}

export default function ResumeSection({
  isModalOpen: externalIsOpen,
  onCloseModal: externalClose,
  onOpenModal: externalOpen,
}: ResumeSectionProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isModalOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const handleOpen = externalOpen || (() => setInternalIsOpen(true));
  const handleClose = externalClose || (() => setInternalIsOpen(false));

  return (
    <>
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <TextReveal>
            <div className="relative p-8 sm:p-12 rounded-3xl bg-surface-card border border-white/10 backdrop-blur-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Background gradient ambient */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent-violet/15 blur-3xl pointer-events-none -z-10" />

              <div className="max-w-xl text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    Curriculum Vitae // Verified
                  </span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-4xl text-foreground tracking-tight mb-3">
                  Want the complete picture?
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Review my full academic curriculum at PIET (AIML), applied research internship at NIT Delhi, comprehensive production projects, and verified technical competencies.
                </p>

                <div className="flex items-center gap-4 text-xs font-mono text-muted">
                  <span className="flex items-center gap-1.5 text-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>Updated 2026 Edition</span>
                  </span>
                  <span>• PDF Format</span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                <MagneticButton>
                  <button
                    onClick={handleOpen}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-elevated hover:bg-surface-elevated/80 border border-white/12 font-mono text-xs text-foreground transition-all"
                    aria-label="View Resume Preview"
                  >
                    <Eye className="w-4 h-4 text-accent-cyan" />
                    <span>View Resume</span>
                  </button>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={PERSONAL_INFO.resumePath}
                    download="Manish-Raina-Resume.pdf"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-foreground hover:bg-white text-background font-semibold text-xs shadow-[0_2px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_16px_rgba(59,130,246,0.20)] transition-all"
                    aria-label="Download Manish Raina Resume PDF"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* IN-BROWSER RESUME PREVIEW MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-6">
          <div
            className="fixed inset-0 bg-background/90 backdrop-blur-2xl transition-opacity"
            onClick={handleClose}
            aria-hidden="true"
          />

          <div className="relative w-full max-w-5xl h-[88vh] bg-surface-elevated border border-white/12 rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-white/8 flex items-center justify-between gap-4 bg-surface/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-accent-cyan" />
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-foreground leading-none">
                    Manish Raina — Resume
                  </h3>
                  <span className="font-mono text-[11px] text-muted">
                    AI/ML Engineer
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Manish-Raina-Resume.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-cyan text-background font-semibold text-xs transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-all"
                  aria-label="Close resume viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 w-full bg-surface">
              <iframe
                src={`${PERSONAL_INFO.resumePath}#toolbar=0`}
                className="w-full h-full border-0"
                title="Manish Raina Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
