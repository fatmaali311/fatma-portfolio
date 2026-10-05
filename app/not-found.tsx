import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-body)] flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--accent-burgundy)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full text-center space-y-8 p-10 sm:p-14 rounded-[2.5rem] bg-[var(--bg-card)] border border-[var(--bg-border)] shadow-2xl relative z-10">
        {/* Cursive Handwriting Note */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 rotate-2">
          <p className="font-handwritten text-xl text-[var(--text-heading)] font-bold">
            Lost in code?
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-7xl sm:text-9xl font-serif-editorial font-bold text-[var(--accent-burgundy)] tracking-tight">
            404
          </h1>

          <h2 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[var(--text-heading)]">
            Page Not Found
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-body)] max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track to explore Fatma Ali's work.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[var(--bg-border)] text-xs font-semibold uppercase tracking-wider">
          <Link
            href="/#about"
            className="p-3 rounded-xl bg-[var(--bg-page)] border border-[var(--bg-border)] hover:border-[var(--accent-burgundy)] text-[var(--text-heading)] transition-all"
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="p-3 rounded-xl bg-[var(--bg-page)] border border-[var(--bg-border)] hover:border-[var(--accent-burgundy)] text-[var(--text-heading)] transition-all"
          >
            Projects
          </Link>
          <Link
            href="/#experience"
            className="p-3 rounded-xl bg-[var(--bg-page)] border border-[var(--bg-border)] hover:border-[var(--accent-burgundy)] text-[var(--text-heading)] transition-all"
          >
            Experience
          </Link>
          <Link
            href="/#contact"
            className="p-3 rounded-xl bg-[var(--bg-page)] border border-[var(--bg-border)] hover:border-[var(--accent-burgundy)] text-[var(--text-heading)] transition-all"
          >
            Contact
          </Link>
        </div>

        {/* Primary CTA */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--accent-burgundy)] text-white font-medium text-sm hover:opacity-95 shadow-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
