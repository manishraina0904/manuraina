"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Cpu, Activity, Play, RefreshCw, Sparkles, Shield, CheckCircle2 } from "lucide-react";
import TextReveal from "@/components/animations/TextReveal";

export default function RetroTerminalMockup() {
  const [activeTab, setActiveTab] = useState<"agents" | "ml" | "telemetry">("agents");
  const [isRunning, setIsRunning] = useState(true);
  const [scanlines, setScanlines] = useState(true);
  const [simStep, setSimStep] = useState(0);

  // Simulated live execution loop
  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSimStep((prev) => (prev + 1) % 8);
    }, 1800);
    return () => clearInterval(interval);
  }, [isRunning]);

  const agentLogs = [
    { time: "11:24:02.108", type: "INIT", text: "LangGraph Kernel: Initializing Multi-Agent DAG Orchestrator..." },
    { time: "11:24:02.342", type: "ROUTER", text: "Query decomposed into 3 sub-tasks: [vector_retrieval, code_gen, validation]" },
    { time: "11:24:02.610", type: "MCP", text: "Connecting to MCP Tool Server @ stdio://nexus-os:8000 -> OK" },
    { time: "11:24:02.890", type: "EXEC", text: "Agent[Researcher]: Executing semantic search across Qdrant (top_k=8, cosine_score=0.942)" },
    { time: "11:24:03.112", type: "PLAN", text: "Agent[Architect]: Synthesizing schema constraints & FastAPI endpoints..." },
    { time: "11:24:03.450", type: "VALID", text: "Agent[Verifier]: Running deterministic assertion checks on generated artifacts... PASS" },
    { time: "11:24:03.780", type: "DAG", text: "State Machine converged in 672ms. Response streamed to client." },
    { time: "11:24:04.010", type: "IDLE", text: "Listening on WebSocket ws://0.0.0.0:8000/ws/telemetry (Heartbeat 100%)" },
  ];

  const mlLogs = [
    { time: "00:01:14", type: "DATA", text: "Loaded Cleveland & Hungarian heart disease cohort (n=1,025 records)" },
    { time: "00:01:15", type: "PREP", text: "IPCW Weighting: Inverse probability of censoring weights calculated." },
    { time: "00:01:18", type: "TRAIN", text: "LightGBM Survival Regressor: Boosting round 120/500 (learning_rate=0.03)" },
    { time: "00:01:22", type: "EVAL", text: "Stratified 5-Fold Cross-Validation: Mean AUC = 91.89% (std: 0.014)" },
    { time: "00:01:24", type: "BENCH", text: "Baseline Comparison: Cox Proportional Hazards AUC = 84.12% -> +7.77% gain" },
    { time: "00:01:26", type: "CALIB", text: "Platt Scaling calibration curve: Brier score reduced from 0.182 to 0.119" },
    { time: "00:01:28", type: "EXPORT", text: "ONNX Runtime model exported: inference latency = 8.4ms per patient payload" },
    { time: "00:01:30", type: "READY", text: "Model registered: 'heart-disease-survival-v2.onnx' -> Deployed to FastAPI" },
  ];

  const telemetryData = [
    { label: "Kernel Status", val: "ACTIVE // NOMINAL", color: "text-accent-emerald" },
    { label: "Orchestrator Uptime", val: "99.98% (Production)", color: "text-foreground" },
    { label: "Active MCP Servers", val: "4 Servers Connected", color: "text-accent-violet" },
    { label: "Vector DB Embeddings", val: "52,140 Qdrant Vectors", color: "text-foreground" },
    { label: "P99 Inference Latency", val: "38.2 ms", color: "text-accent-emerald" },
    { label: "API Framework", val: "FastAPI Async + WebSockets", color: "text-foreground" },
    { label: "DAG Pass Rate", val: "100% Deterministic Gates", color: "text-accent-violet" },
    { label: "Security Guardrails", val: "JWT + Strict RBAC", color: "text-accent-emerald" },
  ];

  return (
    <section className="py-24 md:py-36 relative select-none z-10 overflow-hidden bg-[#05030A]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-accent-violet/6 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <TextReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/25 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent-violet font-medium">
                Section 06 // Technical Workspace
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-foreground tracking-tight mb-4">
              Inside the engineering console.
            </h2>
            <p className="text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Interactive terminal telemetry illustrating autonomous multi-agent task execution, clinical ML training runs, and production API health.
            </p>
          </div>
        </TextReveal>

        {/* RETRO-FUTURISTIC CRT CYBERDECK MONITOR (DesignCode Reference 28s) */}
        <div className="relative max-w-5xl mx-auto rounded-[32px] p-4 sm:p-7 md:p-8 bg-[#0c0915] border border-white/12 shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_50px_rgba(139,92,246,0.18)]">
          {/* Metallic Top Bar with hardware screws */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/8">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white/10 border border-white/20 inline-block" />
              <span className="w-3 h-3 rounded-full bg-white/10 border border-white/20 inline-block" />
              <span className="w-3 h-3 rounded-full bg-white/10 border border-white/20 inline-block" />
              <span className="font-mono text-xs text-muted ml-3 hidden sm:inline">
                CONSOLE MODEL: MK-VII // SYSTEM ARCHITECTURE TERMINAL
              </span>
            </div>

            {/* Hardware Status LEDs */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
                <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                <span>PWR</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
                <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
                <span>DAG</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
                <span className="w-2 h-2 rounded-full bg-accent-purple" />
                <span>RX/TX</span>
              </div>
            </div>
          </div>

          {/* MAIN MONITOR BODY: SCREEN + RIGHT CONTROL DIAL PANEL */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* LEFT / CENTER: CRT SCREEN BEZEL */}
            <div className="lg:col-span-9 relative rounded-2xl bg-[#06030c] border border-accent-violet/30 p-4 sm:p-6 overflow-hidden shadow-[inset_0_0_40px_rgba(139,92,246,0.15)] flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
              {/* Optional CRT Scanline Layer */}
              {scanlines && (
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20 z-20"
                  style={{
                    background: "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 3px)",
                  }}
                />
              )}

              {/* CRT Phosphor Glow Vignette */}
              <div className="absolute inset-0 pointer-events-none bg-radial-mesh opacity-30 z-10" />

              <div>
                {/* Terminal Window Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-white/10 relative z-30">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-accent-violet" />
                    <span className="font-mono text-xs font-bold text-foreground">
                      bash — manish@system-kernel:~
                    </span>
                  </div>

                  {/* Terminal Tabs */}
                  <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/8">
                    <button
                      onClick={() => setActiveTab("agents")}
                      className={`px-2.5 py-1 rounded font-mono text-[11px] transition-all ${
                        activeTab === "agents"
                          ? "bg-accent-violet/30 text-white font-bold border border-accent-violet/50 shadow-[0_0_10px_rgba(139,92,246,0.4)]"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      multi_agent.py
                    </button>
                    <button
                      onClick={() => setActiveTab("ml")}
                      className={`px-2.5 py-1 rounded font-mono text-[11px] transition-all ${
                        activeTab === "ml"
                          ? "bg-accent-violet/30 text-white font-bold border border-accent-violet/50 shadow-[0_0_10px_rgba(139,92,246,0.4)]"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      survival_ml.py
                    </button>
                    <button
                      onClick={() => setActiveTab("telemetry")}
                      className={`px-2.5 py-1 rounded font-mono text-[11px] transition-all ${
                        activeTab === "telemetry"
                          ? "bg-accent-violet/30 text-white font-bold border border-accent-violet/50 shadow-[0_0_10px_rgba(139,92,246,0.4)]"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      telemetry.sh
                    </button>
                  </div>
                </div>

                {/* TERMINAL CONTENT BY TAB */}
                <div className="font-mono text-xs leading-relaxed space-y-2 relative z-30">
                  {activeTab === "agents" && (
                    <div className="space-y-2">
                      <div className="text-muted text-[11px] mb-2">
                        # Autonomous LangGraph Multi-Agent Kernel Orchestration Log
                      </div>
                      {agentLogs.slice(0, simStep + 1).map((log, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="text-white/30 text-[10px] shrink-0 font-light">{log.time}</span>
                          <span className="px-1.5 py-0.2 rounded bg-accent-violet/20 border border-accent-violet/35 text-[9px] text-accent-violet font-semibold shrink-0">
                            {log.type}
                          </span>
                          <span className="text-foreground/90">{log.text}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-1.5 text-accent-violet pt-1">
                        <span className="inline-block w-2 h-4 bg-accent-violet animate-pulse" />
                        <span className="text-[11px] text-muted">Awaiting next DAG state transition...</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "ml" && (
                    <div className="space-y-2">
                      <div className="text-muted text-[11px] mb-2">
                        # NIT Delhi Clinical Survival Analysis Pipeline (LightGBM + IPCW)
                      </div>
                      {mlLogs.slice(0, simStep + 1).map((log, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="text-white/30 text-[10px] shrink-0 font-light">{log.time}</span>
                          <span className="px-1.5 py-0.2 rounded bg-accent-purple/20 border border-accent-purple/35 text-[9px] text-accent-purple font-semibold shrink-0">
                            {log.type}
                          </span>
                          <span className="text-foreground/90">{log.text}</span>
                        </div>
                      ))}
                      <div className="flex items-center gap-1.5 text-accent-emerald pt-1">
                        <span className="inline-block w-2 h-4 bg-accent-emerald animate-pulse" />
                        <span className="text-[11px] text-muted">Model calibrated. 91.89% CV AUC Verified.</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "telemetry" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {telemetryData.map((item, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/6 flex flex-col justify-between">
                          <span className="text-[10px] uppercase text-muted font-mono">{item.label}</span>
                          <span className={`text-xs font-bold font-mono mt-1 ${item.color}`}>
                            {item.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Terminal Bottom Status */}
              <div className="pt-4 mt-6 border-t border-white/8 flex items-center justify-between font-mono text-[11px] text-muted relative z-30">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald" />
                  <span>Sub-100ms Inference SLA</span>
                </span>
                <span className="text-accent-violet">UTF-8 // TCP:8000</span>
              </div>
            </div>

            {/* RIGHT SIDE: HARDWARE KNOBS & CONTROLS */}
            <div className="lg:col-span-3 flex flex-col justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/8">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-muted mb-4 font-semibold">
                  // Physical Controls
                </div>

                {/* Control Toggles */}
                <div className="space-y-4">
                  {/* Loop Toggle */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-foreground font-medium">Loop Simulation</span>
                      <button
                        onClick={() => setIsRunning(!isRunning)}
                        className={`p-1.5 rounded-lg border transition-all ${
                          isRunning
                            ? "bg-accent-violet/20 border-accent-violet/40 text-accent-violet"
                            : "bg-white/5 border-white/10 text-muted"
                        }`}
                      >
                        <Play className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="font-mono text-[10px] text-muted block">
                      {isRunning ? "Simulating live DAG" : "Paused"}
                    </span>
                  </div>

                  {/* Scanlines Toggle */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-foreground font-medium">CRT Scanlines</span>
                      <button
                        onClick={() => setScanlines(!scanlines)}
                        className={`px-2.5 py-1 rounded-lg border font-mono text-[10px] transition-all ${
                          scanlines
                            ? "bg-accent-violet/20 border-accent-violet/40 text-accent-violet"
                            : "bg-white/5 border-white/10 text-muted"
                        }`}
                      >
                        {scanlines ? "ON" : "OFF"}
                      </button>
                    </div>
                    <span className="font-mono text-[10px] text-muted block">
                      Authentic cathode raster
                    </span>
                  </div>

                  {/* Rotary Dial Visual Mockup */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/6 text-center">
                    <div className="font-mono text-[10px] text-muted uppercase mb-2">Tuning Dial</div>
                    <div className="w-14 h-14 rounded-full mx-auto bg-gradient-to-br from-[#241a38] to-[#0c0915] border-2 border-white/15 shadow-inner flex items-center justify-center relative cursor-pointer hover:border-accent-violet/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-accent-violet shadow-[0_0_8px_#8b5cf6]" />
                      <div className="absolute top-1.5 w-1 h-3 bg-white/40 rounded-full" />
                    </div>
                    <div className="font-mono text-[9px] text-muted mt-2">V-FREQ: 60Hz</div>
                  </div>
                </div>
              </div>

              {/* Reset Loop Button */}
              <button
                onClick={() => setSimStep(0)}
                className="w-full mt-4 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-accent-violet/15 border border-white/10 hover:border-accent-violet/30 font-mono text-xs text-muted hover:text-accent-violet transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Re-run Cycle</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
