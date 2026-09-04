"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, isReducedMotion } from "@/lib/gsap";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (isReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0, x: 0 });
      return;
    }

    const yVal = direction === "up" ? 36 : direction === "down" ? -36 : 0;
    const xVal = direction === "left" ? 36 : direction === "right" ? -36 : 0;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: yVal,
        x: xVal,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === el) t.kill();
      });
    };
  }, [delay, direction]);

  return (
    <div ref={containerRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
