"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[var(--bg-border)]/40">
      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-burgundy)] uppercase">
            03. ACADEMIC & EDUCATION
          </span>
          <div className="h-[1px] w-12 bg-[var(--accent-burgundy)]/40" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[var(--text-heading)]">
          Education & Qualifications
        </h2>
        <p className="text-sm md:text-base text-[var(--text-muted)] max-w-2xl">
          Solid academic foundation in Computer Science, software engineering methodologies, and hands-on open-source development tracks.
        </p>
      </div>

      {/* Cards Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-3xl bg-[var(--bg-card)] border border-[var(--bg-border)] p-8 hover:border-[var(--accent-burgundy)]/60 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between space-y-6"
          >
            {/* Top Badge & Year */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-[var(--accent-burgundy-light)] text-[var(--accent-burgundy)] border border-[var(--accent-burgundy-border)] group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent-burgundy)] bg-[var(--accent-burgundy-light)] px-3 py-1.5 rounded-full border border-[var(--accent-burgundy-border)]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.year}</span>
                </div>
              </div>

              {/* Degree & Institution */}
              <div>
                <h3 className="text-xl font-serif-editorial font-bold text-[var(--text-heading)] group-hover:text-[var(--accent-burgundy)] transition-colors leading-snug">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-[var(--text-muted)] mt-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[var(--accent-burgundy)]" />
                  <span>{item.institution}</span>
                </p>
                <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 mt-1 opacity-80">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-[var(--text-body)] leading-relaxed pt-2 border-t border-[var(--bg-border)]/60">
                {item.description}
              </p>
            </div>

            {/* Key Courses / Specializations */}
            {item.courses && item.courses.length > 0 && (
              <div className="pt-4 border-t border-[var(--bg-border)]/60 space-y-2.5">
                <p className="text-xs font-mono font-bold text-[var(--text-heading)] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[var(--accent-burgundy)]" />
                  <span>Key Coursework</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.courses.map((course, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[var(--bg-page)] text-[var(--text-body)] border border-[var(--bg-border)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
