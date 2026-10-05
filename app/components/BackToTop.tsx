"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[var(--bg-card)] border-2 border-[var(--accent-burgundy)] text-[var(--accent-burgundy)] shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    >
      {/* High Contrast Scroll Progress Ring Inside Button Border */}
      <svg
        className="w-full h-full absolute inset-0 -rotate-90 pointer-events-none p-0.5"
        viewBox="0 0 48 48"
      >
        <circle
          cx="24"
          cy="24"
          r="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="opacity-15 text-[var(--accent-burgundy)]"
        />
        <circle
          cx="24"
          cy="24"
          r="19"
          fill="none"
          stroke="var(--accent-burgundy)"
          strokeWidth="3"
          strokeDasharray="119"
          strokeDashoffset={119 - (119 * scrollProgress) / 100}
          strokeLinecap="round"
          className="transition-all duration-150"
        />
      </svg>
      <ArrowUp className="w-5 h-5 text-[var(--accent-burgundy)] group-hover:-translate-y-0.5 transition-transform relative z-10" />
    </button>
  );
}
