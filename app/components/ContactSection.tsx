"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Loader2 } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function ContactSection() {
  const { contactSection } = PORTFOLIO_DATA;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 5000);
      } else {
        alert("Failed to send message. Please try again or email fatma.ali.mansour1@gmail.com directly.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Network error. Please try again or email fatma.ali.mansour1@gmail.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contactSection.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Dark Contrast Card */}
      <div className="relative rounded-[2.5rem] bg-[#141414] text-[#F5F5F4] p-8 sm:p-12 md:p-16 border border-stone-800 shadow-2xl overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-burgundy)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Info (Cols 1-6) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[var(--accent-burgundy)] uppercase">
                {contactSection.section}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial font-bold text-white leading-tight">
                {contactSection.title}
              </h2>
              <p className="text-lg text-stone-400 font-normal">
                {contactSection.subtitle}
              </p>
            </div>

            {/* Direct Contact Details Stack */}
            <div className="space-y-4 pt-2">
              {/* Email with Copy Action */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-[var(--accent-burgundy)] transition-all group">
                <a
                  href={`mailto:${contactSection.email}`}
                  className="flex items-center gap-4 flex-1"
                >
                  <div className="p-3 rounded-xl bg-stone-800 text-[var(--accent-burgundy)] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-semibold uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-base font-medium text-white group-hover:text-[var(--accent-burgundy)] transition-colors">
                      {contactSection.email}
                    </p>
                  </div>
                </a>

                {/* Copy Button */}
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2.5 rounded-xl bg-stone-800 text-stone-300 hover:text-white hover:bg-[var(--accent-burgundy)] transition-all flex items-center gap-1.5 text-xs font-medium"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <a
                href={`tel:${contactSection.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-[var(--accent-burgundy)] transition-all group"
              >
                <div className="p-3 rounded-xl bg-stone-800 text-[var(--accent-burgundy)] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-semibold uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-base font-medium text-white group-hover:text-[var(--accent-burgundy)] transition-colors">
                    {contactSection.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/80 border border-stone-800">
                <div className="p-3 rounded-xl bg-stone-800 text-[var(--accent-burgundy)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-semibold uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-base font-medium text-white">
                    {contactSection.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Contact Form (Cols 7-12) */}
          <div className="lg:col-span-6 bg-stone-900/90 p-8 sm:p-10 rounded-3xl border border-stone-800 backdrop-blur-md">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-serif-editorial font-bold text-white">
                  Message Sent!
                </h3>
                <p className="text-sm text-stone-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>. Your message has been sent to <span className="text-[var(--accent-burgundy)] font-mono text-xs">{contactSection.email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-serif-editorial font-bold text-white mb-2">
                  Send a Direct Message
                </h3>

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-[var(--accent-burgundy)] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-[var(--accent-burgundy)] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-[var(--accent-burgundy)] transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[var(--accent-burgundy)] text-white font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Fatma Ali. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a
              href={contactSection.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent-burgundy)] transition-colors flex items-center gap-1.5 font-medium"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={contactSection.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent-burgundy)] transition-colors flex items-center gap-1.5 font-medium"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
