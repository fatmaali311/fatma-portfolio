"use client";

import React from "react";
import Image from "next/image";
import { Compass, Code2, Layers, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function AboutSection() {
  const { about } = PORTFOLIO_DATA;

  const factIcons = [
    <Compass className="w-5 h-5 text-[var(--accent-burgundy)]" key="1" />,
    <Code2 className="w-5 h-5 text-[var(--accent-burgundy)]" key="2" />,
    <Layers className="w-5 h-5 text-[var(--accent-burgundy)]" key="3" />,
    <Cpu className="w-5 h-5 text-[var(--accent-burgundy)]" key="4" />,
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-burgundy)] uppercase">
          {about.section}
        </span>
        <div className="h-[1px] w-12 bg-[var(--accent-burgundy)]/40" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Text & Facts (Cols 1-7) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial font-bold text-[var(--text-heading)] leading-tight">
            I like understanding <br />
            how things <span className="text-[var(--accent-burgundy)] italic">work.</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-[var(--text-body)] leading-relaxed font-normal">
            {about.description}
          </p>

          {/* 4 Quick Facts Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {about.facts.map((fact, index) => (
              <div
                key={fact.title}
                className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--bg-border)] hover:border-[var(--accent-burgundy)]/50 transition-all hover:shadow-md"
              >
                <div className="mb-3">{factIcons[index % factIcons.length]}</div>
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-1">
                  {fact.title}
                </p>
                <p className="text-sm font-semibold text-[var(--text-heading)]">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>

          {/* Quote & Signature Box */}
          <div className="p-8 rounded-3xl bg-[var(--dark-surface)] text-[var(--dark-surface-text)] relative overflow-hidden shadow-xl border border-stone-800">
            <div className="relative z-10 space-y-3">
              <span className="text-4xl text-[var(--accent-burgundy)] font-serif-editorial">“</span>
              <p className="text-xl sm:text-2xl font-serif-editorial italic font-medium leading-snug">
                {about.quote}
              </p>
              <div className="flex justify-end pt-2">
                <span className="font-handwritten text-3xl text-amber-200/90 font-bold">
                  ~ {about.signature}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Portrait (Cols 8-12) */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Background Accent Frame */}
            <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-[var(--accent-burgundy)]/30 -rotate-2" />

            {/* Profile Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--bg-border)] bg-[var(--bg-card)] aspect-[4/5]">
              <Image
                src={about.profileImage}
                alt="Fatma Ali - Full Stack Web Developer"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />

              {/* Decorative Corner Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[var(--bg-page)]/90 backdrop-blur-md border border-[var(--bg-border)]">
                <p className="text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider">
                  Fatma Ali
                </p>
                <p className="text-xs text-[var(--text-muted)] font-serif-editorial italic">
                  Passionate about clean architecture & practical web apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
