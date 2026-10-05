"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowUpRight, Trophy, Eye, Search, Filter, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Laravel", "React / Next.js", "Hackathon"];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesCategory = true;
      if (activeCategory === "Full-Stack") {
        matchesCategory = project.subtitle.includes("Full-Stack") || project.tags.includes("Next.js") || project.tags.includes("Laravel");
      } else if (activeCategory === "Laravel") {
        matchesCategory = project.tags.includes("Laravel") || project.tags.includes("PHP");
      } else if (activeCategory === "React / Next.js") {
        matchesCategory = project.tags.includes("React") || project.tags.includes("Next.js");
      } else if (activeCategory === "Hackathon") {
        matchesCategory = !!project.badge;
      }

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchQuery, activeCategory]);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-burgundy)] uppercase">
              03. SELECTED WORK
            </span>
            <div className="h-[1px] w-12 bg-[var(--accent-burgundy)]/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif-editorial font-bold text-[var(--text-heading)]">
            Projects I've Built
          </h2>
        </div>
        <p className="text-base text-[var(--text-body)] max-w-md">
          A collection of real-world projects where I turned ideas into functional and user-friendly web applications.
        </p>
      </div>

      {/* Search Bar & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--bg-border)]">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[var(--accent-burgundy)] text-white shadow-sm"
                  : "bg-[var(--bg-page)] border border-[var(--bg-border)] text-[var(--text-heading)] hover:border-[var(--accent-burgundy)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Real-time Search Box */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by tech or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[var(--bg-page)] border border-[var(--bg-border)] text-xs text-[var(--text-heading)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-burgundy)] transition-colors"
          />
        </div>
      </div>

      {/* Projects Showcase Stack */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--bg-border)] space-y-3">
          <Sparkles className="w-10 h-10 text-[var(--accent-burgundy)] mx-auto animate-pulse" />
          <p className="text-lg font-serif-editorial font-bold text-[var(--text-heading)]">
            No projects found matching your search.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="text-xs font-semibold text-[var(--accent-burgundy)] underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-[var(--bg-card)] border border-[var(--bg-border)] hover:border-[var(--accent-burgundy)]/60 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Visual Screenshot Side */}
              <div
                className={`lg:col-span-7 p-6 md:p-10 flex items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200 dark:from-stone-900 dark:to-stone-950 relative overflow-hidden min-h-[320px] ${
                  idx % 2 === 1 ? "order-1 lg:order-2" : ""
                }`}
              >
                {/* Browser Device Frame */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-stone-300 dark:border-stone-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="h-7 bg-stone-200 dark:bg-stone-800 border-b border-stone-300 dark:border-stone-700 px-3 flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <div className="mx-auto text-[10px] font-mono text-stone-500 dark:text-stone-400 truncate max-w-[180px]">
                      {project.title.toLowerCase().replace(/\s+/g, "")}.dev
                    </div>
                  </div>
                  <div className="relative w-full h-[calc(100%-28px)]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* View Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4 text-[var(--accent-burgundy)]" />
                    <span>View Project Details</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div
                className={`lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-6 ${
                  idx % 2 === 1 ? "order-2 lg:order-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--accent-burgundy)]">
                      {project.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
                      {project.tagline}
                    </span>
                  </div>

                  {project.badge && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      <span>{project.badge}</span>
                    </div>
                  )}

                  <h3 className="text-3xl font-serif-editorial font-bold text-[var(--text-heading)] group-hover:text-[var(--accent-burgundy)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--accent-burgundy)]">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-[var(--text-body)] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Action CTA */}
                <div className="space-y-5 pt-4 border-t border-[var(--bg-border)]">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[var(--bg-page)] border border-[var(--bg-border)] text-[var(--text-heading)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--accent-burgundy)] group-hover:translate-x-1 transition-transform">
                    <span>View project details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
