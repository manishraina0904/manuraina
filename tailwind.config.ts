import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05030A",
        foreground: "#F4F1FA",
        surface: {
          DEFAULT: "#07040F",
          elevated: "#0E0A1A",
          card: "rgba(14, 10, 26, 0.75)",
          hover: "rgba(22, 14, 40, 0.88)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.07)",
          medium: "rgba(255, 255, 255, 0.12)",
          glow: "rgba(139, 92, 246, 0.25)",
        },
        accent: {
          // Primary — Violet
          violet: "#8B5CF6",
          "violet-deep": "#6D28D9",
          "violet-light": "#A78BFA",
          "violet-glow": "rgba(139, 92, 246, 0.25)",
          // Secondary — Purple
          purple: "#A855F7",
          "purple-deep": "#7E22CE",
          "purple-glow": "rgba(168, 85, 247, 0.20)",
          // Tertiary — Fuchsia/Pink
          fuchsia: "#D946EF",
          // Cyan as a highlight
          cyan: "#67E8F9",
          "cyan-dim": "rgba(103, 232, 249, 0.10)",
          // Legacy aliases kept for compat
          blue: "#8B5CF6",
          "blue-deep": "#6D28D9",
          "blue-glow": "rgba(139, 92, 246, 0.25)",
          emerald: "#10B981",
        },
        muted: {
          DEFAULT: "#9CA3B5",
          foreground: "#6B7490",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "glow-ping": "glowPing 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "grid-pan": "gridPan 20s linear infinite",
      },
      keyframes: {
        glowPing: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gridPan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
      },
      backgroundImage: {
        "radial-mesh": "radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.10) 0%, rgba(109, 40, 217, 0.04) 40%, transparent 80%)",
        "radial-hero": "radial-gradient(ellipse 70% 40% at 50% -10%, rgba(139, 92, 246, 0.16), transparent 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(139, 92, 246, 0.03) 100%)",
        "accent-gradient": "linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 50%, #6D28D9 100%)",
        "purple-glow": "radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.14) 0%, rgba(109, 40, 217, 0.05) 50%, transparent 80%)",
        "violet-ray": "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(139, 92, 246, 0.22) 0%, rgba(109, 40, 217, 0.08) 45%, transparent 80%)",
      },
    },
  },
  plugins: [],
};
export default config;
