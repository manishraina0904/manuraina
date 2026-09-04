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
          DEFAULT: "#060913",
          elevated: "#0C1222",
          card: "rgba(12, 18, 34, 0.7)",
          hover: "rgba(20, 28, 50, 0.85)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.14)",
          glow: "rgba(59, 130, 246, 0.2)",
        },
        accent: {
          blue: "#3B82F6", // Primary Electric Blue
          "blue-deep": "#1D4ED8", // Deep Cobalt Blue
          "blue-glow": "rgba(59, 130, 246, 0.25)",
          purple: "#3B82F6", // Primary Blue (Aliased for compatibility)
          violet: "#2563EB", // Royal Blue Alias
          "purple-deep": "#1D4ED8", // Deep Blue Alias
          "purple-glow": "rgba(59, 130, 246, 0.25)",
          cyan: "#38BDF8", // Secondary Sky/Cyan Accent
          "cyan-dim": "rgba(56, 189, 248, 0.12)",
          emerald: "#10B981",
        },
        muted: {
          DEFAULT: "#A1AABF", // Secondary Text with subtle cool slate tone
          foreground: "#737E96",
        }
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
      },
      keyframes: {
        glowPing: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      backgroundImage: {
        "radial-mesh": "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08) 0%, rgba(29, 78, 216, 0.03) 40%, transparent 80%)",
        "radial-hero": "radial-gradient(ellipse 70% 40% at 50% -10%, rgba(59, 130, 246, 0.12), transparent 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(59, 130, 246, 0.02) 100%)",
        "accent-gradient": "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #1D4ED8 100%)",
        "purple-glow": "radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(29, 78, 216, 0.04) 50%, transparent 80%)",
        "blue-glow": "radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(29, 78, 216, 0.04) 50%, transparent 80%)",
      },
    },
  },
  plugins: [],
};
export default config;
