import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-body)] flex flex-col items-center justify-center p-6 space-y-6">
      {/* Brand Monogram Loading Pulse */}
      <div className="relative">
        <div className="w-16 h-16 rounded-2xl bg-[var(--accent-burgundy)] border border-[var(--accent-burgundy-border)] text-white font-serif-editorial font-bold text-2xl flex items-center justify-center shadow-xl animate-pulse">
          FA
        </div>
        <div className="absolute -inset-2 rounded-3xl border border-[var(--accent-burgundy)]/30 animate-ping pointer-events-none" />
      </div>

      <div className="text-center space-y-2">
        <p className="text-sm font-serif-editorial font-semibold text-[var(--text-heading)] tracking-wide">
          Fatma Ali — Portfolio
        </p>
        <p className="text-xs font-handwritten text-[var(--accent-burgundy)] text-lg">
          Crafting web experiences...
        </p>
      </div>

      {/* Skeleton Mock Bar */}
      <div className="w-48 h-1.5 bg-[var(--bg-border)] rounded-full overflow-hidden">
        <div className="w-1/2 h-full bg-[var(--accent-burgundy)] rounded-full animate-bounce" />
      </div>
    </div>
  );
}
