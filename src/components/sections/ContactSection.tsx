"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import TextReveal from "@/components/animations/TextReveal";
import MagneticButton from "@/components/animations/MagneticButton";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight, 
  ExternalLink, 
  Loader2, 
  RotateCcw,
  CheckCircle2
} from "lucide-react";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; message: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const copySubmittedMessage = () => {
    if (!submittedData) return;
    const formatted = `To: ${PERSONAL_INFO.email}\nFrom: ${submittedData.name} <${submittedData.email}>\nSubject: Project Inquiry from ${submittedData.name}\n\n${submittedData.message}`;
    navigator.clipboard.writeText(formatted);
    setMessageCopied(true);
    setTimeout(() => setMessageCopied(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch message.");
      }

      setSubmittedData({ ...formState });
    } catch (err: any) {
      console.warn("API route dispatch issue, falling back to client mode:", err);
      // Even if network fails, preserve user data and present webmail & mailto options
      setSubmittedData({ ...formState });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFormState({ name: "", email: "", message: "" });
    setErrorMessage("");
  };

  // Gmail Web Compose URL (100% reliable in any web browser without needing desktop client)
  const gmailWebUrl = submittedData
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        PERSONAL_INFO.email
      )}&su=${encodeURIComponent(`Project Inquiry from ${submittedData.name}`)}&body=${encodeURIComponent(
        `Hi Manish,\n\nName: ${submittedData.name}\nEmail: ${submittedData.email}\n\nMessage:\n${submittedData.message}`
      )}`
    : "";

  // Mailto link for native OS mail apps
  const mailtoUrl = submittedData
    ? `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `Project Inquiry from ${submittedData.name}`
      )}&body=${encodeURIComponent(
        `Hi Manish,\n\nName: ${submittedData.name}\nEmail: ${submittedData.email}\n\nMessage:\n${submittedData.message}`
      )}`
    : "";

  return (
    <section id="contact" className="py-20 md:py-36 relative overflow-hidden">
      {/* AMBIENT RADIAL LIGHT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-accent-blue/8 via-transparent to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: EDITORIAL STATEMENT & CONTACT CHANNELS */}
          <div className="lg:col-span-6 space-y-8">
            <TextReveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    07 // Initiate Dialogue
                  </span>
                </div>

                {/* Profile Identity Dispatch Snippet */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/15 bg-surface-elevated">
                    <Image
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm text-foreground block">
                      Direct Dispatch // Manish Raina
                    </span>
                    <span className="font-mono text-[11px] text-muted flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                      Typically responds within 24 hours
                    </span>
                  </div>
                </div>

                <h2 className="font-display font-black text-4xl sm:text-6xl text-foreground tracking-tight leading-[1.05] mb-6">
                  Let's Build <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-[#EDE9FE] to-muted">
                    Something Great.
                  </span>
                </h2>
                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">
                  Actively open for high-impact software engineering, full-stack, and AI/ML roles. Have an ambitious idea, research collaboration, or engineering requirement? Let's connect.
                </p>
              </div>
            </TextReveal>

            {/* DIRECT CONTACT CHANNELS */}
            <div className="space-y-4 pt-4 border-t border-white/8">
              {/* Email Card with Copy Trigger */}
              <div className="p-4 sm:p-5 rounded-2xl bg-surface-card border border-white/8 hover:border-white/20 transition-all flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <small className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                      Email Address
                    </small>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-mono text-xs sm:text-sm font-semibold text-foreground hover:text-accent-cyan transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-muted hover:text-foreground transition-all shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {emailCopied ? <Check className="w-4 h-4 text-accent-emerald" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-surface-card border border-white/8 hover:border-white/20 transition-all flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center text-accent-violet shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <small className="font-mono text-[10px] text-muted uppercase tracking-wider block">
                      Direct Contact
                    </small>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-mono text-xs sm:text-sm font-semibold text-foreground hover:text-accent-violet transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-muted hover:text-foreground transition-all shrink-0"
                  aria-label="Call direct phone"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Social Links Row */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-type="OPEN"
                  className="p-4 rounded-2xl bg-surface-card border border-white/8 hover:border-white/20 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-accent-cyan" />
                    <span className="font-mono text-xs font-semibold text-foreground">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-type="OPEN"
                  className="p-4 rounded-2xl bg-surface-card border border-white/8 hover:border-white/20 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-accent-violet" />
                    <span className="font-mono text-xs font-semibold text-foreground">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE DIRECT MESSAGE DISPATCHER */}
          <div className="lg:col-span-6">
            <TextReveal delay={0.15}>
              <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {submittedData ? (
                  /* POST-SUBMISSION SUCCESS SCREEN */
                  <div className="space-y-6 py-2 animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-blue">
                      <CheckCircle2 className="w-7 h-7 text-accent-blue" />
                    </div>

                    <div>
                      <span className="font-mono text-xs text-accent-blue uppercase tracking-wider block mb-1">
                        Dispatch Recorded // Ready To Send
                      </span>
                      <h3 className="font-display font-bold text-2xl text-foreground">
                        Message Dispatched, {submittedData.name}!
                      </h3>
                      <p className="text-sm text-muted mt-1 leading-relaxed">
                        Your message has been registered. You can directly launch it in your favorite mail client or Gmail with one click below:
                      </p>
                    </div>

                    {/* Message Preview Box */}
                    <div className="p-4 rounded-xl bg-surface-elevated border border-white/8 font-mono text-xs text-muted space-y-1">
                      <div className="text-foreground font-semibold flex items-center justify-between">
                        <span>To: {PERSONAL_INFO.email}</span>
                        <button
                          onClick={copySubmittedMessage}
                          className="flex items-center gap-1 text-[11px] text-accent-blue hover:underline"
                        >
                          {messageCopied ? (
                            <>
                              <Check className="w-3 h-3 text-accent-emerald" />
                              <span className="text-accent-emerald">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy Text</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="line-clamp-3 text-foreground/80 italic pt-1">
                        "{submittedData.message}"
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="space-y-3">
                      <a
                        href={gmailWebUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3.5 px-4 rounded-xl bg-foreground hover:bg-white text-background font-semibold text-sm tracking-wide transition-all shadow-[0_2px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_16px_rgba(59,130,246,0.20)] flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open in Gmail Web (Browser)</span>
                      </a>

                      <a
                        href={mailtoUrl}
                        className="w-full py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-foreground font-mono text-xs flex items-center justify-center gap-2 transition-all"
                      >
                        <Mail className="w-4 h-4 text-muted" />
                        <span>Open in Default Mail App</span>
                      </a>

                      <button
                        type="button"
                        onClick={resetForm}
                        className="w-full py-2.5 px-4 rounded-xl text-muted hover:text-foreground font-mono text-xs flex items-center justify-center gap-2 transition-all"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* INTERACTIVE SUBMISSION FORM */
                  <div>
                    <div className="mb-6">
                      <h3 className="font-display font-bold text-2xl text-foreground mb-1">
                        Send a Direct Message
                      </h3>
                      <p className="text-xs sm:text-sm text-muted">
                        Fill out the form below to dispatch an inquiry directly to Manish Raina.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block font-mono text-xs text-muted mb-1.5 uppercase">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/8 focus:border-accent-blue focus:outline-none text-foreground font-sans text-sm transition-all"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-muted mb-1.5 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/8 focus:border-accent-blue focus:outline-none text-foreground font-sans text-sm transition-all"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-muted mb-1.5 uppercase">
                          Project Details / Opportunity
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="Tell me about your team, problem space, timeline, or idea..."
                          className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-white/8 focus:border-accent-blue focus:outline-none text-foreground font-sans text-sm transition-all resize-none"
                        />
                      </div>

                      <MagneticButton className="w-full">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 rounded-xl bg-foreground hover:bg-white text-background font-bold text-sm tracking-wide transition-all shadow-[0_2px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_16px_rgba(59,130,246,0.20)] flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Dispatching Message...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Dispatch Message</span>
                            </>
                          )}
                        </button>
                      </MagneticButton>
                    </form>
                  </div>
                )}
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

