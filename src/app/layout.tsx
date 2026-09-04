import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/animations/CustomCursor";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manish Raina — Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Manish Raina, Full Stack Developer and AI Engineer specializing in Multi-Agent AI systems, high-performance FastAPI backends, applied ML research at NIT Delhi, and modern interactive WebGL applications.",
  keywords: [
    "Manish Raina",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "FastAPI",
    "Python",
    "React",
    "Next.js",
    "Multi-Agent AI",
    "NIT Delhi",
    "PIET",
    "Portfolio",
  ],
  authors: [{ name: "Manish Raina", url: "https://github.com/manishraina0904" }],
  creator: "Manish Raina",
  metadataBase: new URL("https://manishraina.vercel.app"),
  openGraph: {
    title: "Manish Raina — Full Stack Developer & AI Engineer",
    description:
      "Explore intelligent multi-agent workspaces, clinical survival ML models, and high-throughput security APIs built by Manish Raina.",
    url: "https://manishraina.vercel.app",
    siteName: "Manish Raina Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Raina — Full Stack Developer & AI Engineer",
    description:
      "Explore intelligent multi-agent workspaces, clinical survival ML models, and high-throughput security APIs built by Manish Raina.",
  },
  icons: {
    icon: "/assets/profile-fallback.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manish Raina",
    jobTitle: "Full Stack Developer & AI Engineer",
    url: "https://github.com/manishraina0904",
    sameAs: [
      "https://github.com/manishraina0904",
      "https://linkedin.com/in/manish-raina-53278028b/",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "National Institute of Technology Delhi (NIT Delhi)",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Panipat Institute of Engineering and Technology (PIET)",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Multi-Agent Systems",
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
    ],
  };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-accent-cyan/20 selection:text-accent-cyan">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
