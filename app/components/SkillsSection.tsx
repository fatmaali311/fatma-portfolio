"use client";

import React from "react";
import { Layout, Server, Database, Wrench } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Layout className="w-6 h-6 text-[var(--accent-burgundy)]" />,
    Backend: <Server className="w-6 h-6 text-[var(--accent-burgundy)]" />,
    Databases: <Database className="w-6 h-6 text-[var(--accent-burgundy)]" />,
    "Tools & Others": <Wrench className="w-6 h-6 text-[var(--accent-burgundy)]" />,
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-burgundy)] uppercase">
              04. SKILLS
            </span>
            <div className="h-[1px] w-12 bg-[var(--accent-burgundy)]/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[var(--text-heading)]">
            Technologies I Work With
          </h2>
        </div>
        <p className="text-base text-[var(--text-body)] max-w-md">
          {skills.intro}
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {skills.categories.map((cat) => (
          <div
            key={cat.title}
            className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--bg-border)] hover:border-[var(--accent-burgundy)]/50 transition-all duration-300 shadow-md space-y-6 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[var(--bg-page)] border border-[var(--bg-border)] shadow-sm group-hover:scale-110 transition-transform">
                {categoryIcons[cat.title] || <Layout className="w-6 h-6 text-[var(--accent-burgundy)]" />}
              </div>
              <h3 className="text-2xl font-serif-editorial font-bold text-[var(--text-heading)]">
                {cat.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 rounded-xl text-xs font-medium bg-[var(--bg-page)] border border-[var(--bg-border)] text-[var(--text-heading)] hover:border-[var(--accent-burgundy)] hover:text-[var(--accent-burgundy)] transition-all shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Handwritten Note & Leaf Art */}
      <div className="mt-16 flex items-center justify-end">
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 backdrop-blur-sm shadow-sm rotate-1">
          {/* Leaf / Flora SVG Icon */}
          <svg
            className="w-8 h-8 text-[var(--accent-burgundy)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21C12 21 7 16.5 7 11C7 7.5 9.5 5 12 3C14.5 5 17 7.5 17 11C17 16.5 12 21 12 21Z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15L9.5 13" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 13L14.5 11" />
          </svg>

          <p className="font-handwritten text-2xl text-[var(--text-heading)] leading-tight whitespace-pre-line font-bold">
            {skills.decorativeNote}
          </p>
        </div>
      </div>
    </section>
  );
}
