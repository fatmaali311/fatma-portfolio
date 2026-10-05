"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, Server, Layout, Database } from "lucide-react";
import { Project } from "../data/portfolioData";
import { GithubIcon } from "./SocialIcons";


interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[var(--bg-page)] rounded-3xl border border-[var(--bg-border)] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[var(--bg-page)]/95 backdrop-blur-md border-b border-[var(--bg-border)]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[var(--accent-burgundy)] bg-[var(--accent-burgundy-light)] px-2.5 py-1 rounded-full">
              {project.number}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
              {project.tagline}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[var(--bg-border)] text-[var(--text-heading)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent-burgundy)] transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 space-y-8 overflow-y-auto">
          {/* Title & Badge */}
          <div className="space-y-2">
            {project.badge && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 mb-2">
                {project.badge}
              </span>
            )}
            <h3 className="text-3xl sm:text-4xl font-serif-editorial font-bold text-[var(--text-heading)]">
              {project.title}
            </h3>
            <p className="text-lg text-[var(--accent-burgundy)] font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Main Visual Image Banner */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[var(--bg-border)] bg-[var(--bg-card)] shadow-md">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Secondary CMS Image if available */}
          {project.cmsImage && (
            <div className="space-y-2">
              <h4 className="text-sm uppercase tracking-wider font-bold text-[var(--text-muted)] flex items-center gap-2">
                <Layout className="w-4 h-4 text-[var(--accent-burgundy)]" />
                <span>CMS Dashboard Interface</span>
              </h4>
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[var(--bg-border)] bg-[var(--bg-card)] shadow-md">
                <Image
                  src={project.cmsImage}
                  alt={`${project.title} CMS Dashboard`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Long Description */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-wider font-bold text-[var(--text-muted)]">
              Project Overview
            </h4>
            <p className="text-base text-[var(--text-body)] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider font-bold text-[var(--text-muted)]">
              Key Features & Implementation
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--bg-border)]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent-burgundy)] shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--text-heading)] leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Architecture Notes */}
          {project.architectureNotes && (
            <div className="p-5 rounded-2xl bg-[var(--dark-surface)] text-[var(--dark-surface-text)] border border-stone-800 space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-bold text-amber-200/90 flex items-center gap-2">
                <Server className="w-4 h-4 text-[var(--accent-burgundy)]" />
                <span>Architecture Highlights</span>
              </h4>
              <ul className="space-y-2 text-xs font-mono text-stone-300">
                {project.architectureNotes.map((note, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-[var(--accent-burgundy)]">❯</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <h4 className="text-sm uppercase tracking-wider font-bold text-[var(--text-muted)]">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--bg-card)] border border-[var(--bg-border)] text-[var(--text-heading)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[var(--bg-page)] border-t border-[var(--bg-border)] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full text-sm font-medium border border-[var(--bg-border)] text-[var(--text-heading)] hover:bg-[var(--bg-card-hover)]"
          >
            Close Details
          </button>

          <div className="flex items-center space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border border-[var(--bg-border)] text-[var(--text-heading)] hover:border-[var(--accent-burgundy)] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Code Repository</span>
              </a>
            )}


            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[var(--accent-burgundy)] text-white hover:opacity-90 transition-opacity"
              >
                <span>Visit Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
