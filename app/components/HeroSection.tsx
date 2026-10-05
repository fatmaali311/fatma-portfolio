"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function HeroSection() {
  const { hero, identity } = PORTFOLIO_DATA;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between overflow-hidden"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--accent-burgundy)]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Text Column (Cols 1-7) */}
        <div className="lg:col-span-7 space-y-8 z-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-burgundy-light)] border border-[var(--accent-burgundy-border)] text-[var(--accent-burgundy)] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{hero.eyebrow}</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-editorial font-bold text-[var(--text-heading)] tracking-tight leading-[0.95]">
              Fatma <span className="text-[var(--accent-burgundy)]">Ali</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[var(--text-body)] max-w-xl leading-relaxed font-normal">
            {hero.description}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[var(--accent-burgundy)] text-white font-medium text-sm hover:opacity-95 hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[var(--bg-border)] text-[var(--text-heading)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent-burgundy)] font-medium text-sm transition-all"
            >
              <span>{hero.secondaryCta}</span>
            </a>
          </div>

          {/* Social Icons Strip */}
          <div className="flex items-center space-x-6 pt-4 text-[var(--text-muted)]">
            <a
              href={identity.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-[var(--accent-burgundy)] transition-colors group"
            >
              <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>

            <span className="text-[var(--bg-border)]">•</span>

            <a
              href={identity.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-[var(--accent-burgundy)] transition-colors group"
            >
              <LinkedinIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>

            <span className="text-[var(--bg-border)]">•</span>

            <a
              href={`mailto:${identity.contact.email}`}
              className="flex items-center gap-2 text-sm font-medium hover:text-[var(--accent-burgundy)] transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Visual Column (Cols 8-12) */}
        <div className="lg:col-span-5 relative">
          {/* Cursive Handwriting Decorative Note */}
          <div className="absolute -top-10 -right-4 z-20 hidden sm:block rotate-6">
            <div className="bg-amber-100/90 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 backdrop-blur-md px-5 py-3 rounded-2xl shadow-md">
              <p className="font-handwritten text-2xl text-[var(--text-heading)] leading-tight whitespace-pre-line font-bold">
                {hero.decorativeNote}
              </p>
            </div>
          </div>

          {/* Hero Image Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--bg-border)] bg-[var(--bg-card)] group">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={hero.heroImage}
                alt="Fatma Ali Workstation Setup"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Status Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[var(--bg-page)]/90 backdrop-blur-md border border-[var(--bg-border)] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-medium text-[var(--text-heading)]">
                  {identity.contact.availability}
                </span>
              </div>
              <span className="text-[var(--text-muted)] font-serif-editorial italic">
                Damietta, EG
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="pt-12 flex items-center justify-between text-xs text-[var(--text-muted)] border-t border-[var(--bg-border)]/50">
        <a
          href="#about"
          className="flex items-center gap-2 hover:text-[var(--accent-burgundy)] transition-colors group"
        >
          <div className="w-5 h-8 rounded-full border border-[var(--bg-border)] flex items-start justify-center p-1 group-hover:border-[var(--accent-burgundy)]">
            <div className="w-1 h-2 rounded-full bg-[var(--accent-burgundy)] animate-bounce" />
          </div>
          <span className="uppercase tracking-widest font-semibold text-[10px]">
            Scroll to explore
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-6 font-mono text-[11px]">
          <span>React • Next.js • Laravel</span>
          <span>•</span>
          <span>Open Source</span>
        </div>
      </div>
    </section>
  );
}
