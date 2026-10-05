"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled Error captured in error boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-body)] flex items-center justify-center p-6 sm:p-12">
      <div className="max-w-xl w-full text-center space-y-8 p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--bg-border)] shadow-2xl relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent-burgundy)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-[var(--accent-burgundy-light)] border border-[var(--accent-burgundy-border)] text-[var(--accent-burgundy)] mx-auto flex items-center justify-center shadow-inner">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-burgundy)] uppercase">
            500 — Application Error
          </span>

          <h1 className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[var(--text-heading)]">
            Something Went Wrong
          </h1>

          <p className="text-base text-[var(--text-body)] leading-relaxed">
            An unexpected error occurred while rendering this page. Don't worry, your data is safe and our systems have logged the issue.
          </p>

          {error.digest && (
            <p className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-page)] p-2 rounded-lg border border-[var(--bg-border)] inline-block">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-[var(--bg-border)]">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-burgundy)] text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[var(--bg-border)] bg-[var(--bg-page)] text-[var(--text-heading)] hover:bg-[var(--bg-card-hover)] font-medium text-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
}
