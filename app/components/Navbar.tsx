"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];



  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[var(--bg-page)]/90 backdrop-blur-md shadow-sm border-b border-[var(--bg-border)] py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#home"
          className="text-2xl font-serif-editorial font-bold text-[var(--text-heading)] tracking-tight flex items-center gap-2 group"
        >
          <span>
            Fatma <span className="text-[var(--accent-burgundy)]">Ali</span>
          </span>
          <span className="text-xs font-handwritten text-[var(--accent-burgundy)] text-lg">
            dev
          </span>
        </a>




        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--text-body)] hover:text-[var(--accent-burgundy)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent-burgundy)] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            className="p-2.5 rounded-full border border-[var(--bg-border)] text-[var(--text-heading)] hover:bg-[var(--bg-card-hover)] hover:border-[var(--accent-burgundy)] transition-all duration-200"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700" />
            )}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[var(--accent-burgundy)] hover:opacity-90 transition-opacity shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-[var(--bg-border)] text-[var(--text-heading)]"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[var(--text-heading)] rounded-lg border border-[var(--bg-border)]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-[var(--bg-page)]/98 backdrop-blur-lg border-b border-[var(--bg-border)] px-6 py-8 flex flex-col justify-between z-40 transition-all">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif-editorial font-medium text-[var(--text-heading)] hover:text-[var(--accent-burgundy)] transition-colors border-b border-[var(--bg-border)]/40 pb-3"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[var(--bg-border)] flex flex-col space-y-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-xl bg-[var(--accent-burgundy)] text-white font-medium text-sm tracking-wide shadow-md"
            >
              Get In Touch
            </a>
            <div className="text-center text-xs text-[var(--text-muted)] font-handwritten text-lg">
              {PORTFOLIO_DATA.identity.contact.location}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
