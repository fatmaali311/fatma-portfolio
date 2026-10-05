"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function ExperienceSection() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-burgundy)] uppercase">
            02. EXPERIENCE
          </span>
          <div className="h-[1px] w-12 bg-[var(--accent-burgundy)]/40" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[var(--text-heading)]">
          My Professional Journey
        </h2>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-[var(--bg-border)] ml-4 md:ml-8 pl-8 md:pl-12 space-y-14">
        {experience.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full border-4 border-[var(--bg-page)] bg-[var(--accent-burgundy)] group-hover:scale-125 transition-transform duration-300 shadow-md" />

            <div className="p-6 md:p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--bg-border)] hover:border-[var(--accent-burgundy)]/50 transition-all duration-300 shadow-sm hover:shadow-md space-y-4">
              {/* Top Row: Year Tag & Company */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--bg-border)]/60 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--accent-burgundy)] bg-[var(--accent-burgundy-light)] px-3 py-1.5 rounded-full border border-[var(--accent-burgundy-border)]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.year}</span>
                </div>

                {item.location && (
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>

              {/* Title & Company */}
              <div>
                <h3 className="text-2xl font-serif-editorial font-bold text-[var(--text-heading)] group-hover:text-[var(--accent-burgundy)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-[var(--text-muted)] flex items-center gap-2 mt-1">
                  <Briefcase className="w-4 h-4 text-[var(--accent-burgundy)]" />
                  <span>{item.company}</span>
                </p>
              </div>

              {/* Bullets List */}
              {item.bullets.length > 0 && (
                <ul className="space-y-2.5 pt-2 text-sm text-[var(--text-body)]">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[var(--accent-burgundy)] font-bold mt-1">
                        •
                      </span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
