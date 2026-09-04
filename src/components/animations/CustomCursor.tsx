"use client";

import React, { useEffect, useState, useRef } from "react";
import { isReducedMotion } from "@/lib/gsap";

export default function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [cursorState, setCursorState] = useState<"default" | "hover" | "drag" | "view" | "open">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Disable on touch / mobile devices or reduced motion
    if (window.matchMedia("(pointer: coarse)").matches || isReducedMotion()) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check for contextual cursor attributes on targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor-type]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor-type");
        if (type === "DRAG") {
          setCursorLabel("DRAG 360°");
          setCursorState("drag");
        } else if (type === "VIEW") {
          setCursorLabel("VIEW");
          setCursorState("view");
        } else if (type === "OPEN") {
          setCursorLabel("OPEN ↗");
          setCursorState("open");
        } else if (type === "CHAT") {
          setCursorLabel("AI CHAT");
          setCursorState("view");
        }
      } else {
        const isClickable = target.closest("a, button, input, [role='button']");
        if (isClickable) {
          setCursorLabel(null);
          setCursorState("hover");
        } else {
          setCursorLabel(null);
          setCursorState("default");
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth lerp loop for outer ring
    let animId: number;
    const lerp = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animId = requestAnimationFrame(lerp);
    };

    animId = requestAnimationFrame(lerp);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch) return null;

  const getRingStyles = () => {
    switch (cursorState) {
      case "drag":
        return "w-20 h-20 bg-accent-cyan/15 border-accent-cyan/80 text-accent-cyan scale-100";
      case "view":
        return "w-16 h-16 bg-accent-violet/20 border-accent-violet text-foreground scale-100";
      case "open":
        return "w-14 h-14 bg-foreground/10 border-white text-foreground scale-100";
      case "hover":
        return "w-12 h-12 bg-white/10 border-white/40 scale-110";
      default:
        return "w-8 h-8 bg-transparent border-white/25 scale-100";
    }
  };

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Precision Core Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-accent-cyan transition-transform duration-75 ease-out shadow-[0_0_8px_#A855F7] ${
          cursorState === "drag" || cursorState === "view" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Floating Fluid Ring with Context Badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-1/2 -mt-1/2 rounded-full border backdrop-blur-[1px] flex items-center justify-center font-mono text-[9px] font-bold tracking-wider uppercase transition-all duration-200 ease-out ${getRingStyles()}`}
        style={{
          transformOrigin: "center center",
          transform: `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {cursorLabel && <span className="drop-shadow-md select-none">{cursorLabel}</span>}
      </div>
    </div>
  );
}
