"use client";

import Link from "next/link";
import {
  FiArrowUpRight,
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { SiLoop } from "react-icons/si";

const LINKS = [
  {
    heading: "Product",
    items: [
      { label: "Job Discovery", href: "/browse-jobs" },
      { label: "Worker AI", href: "#" },
      { label: "Companies", href: "#" },
      { label: "Salary Data", href: "#" },
    ],
  },
  {
    heading: "Navigations",
    items: [
      { label: "Help Center", href: "#" },
      { label: "Career Library", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Brand Guideline", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
];

const SOCIALS = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FiTwitter, href: "#", label: "Twitter" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiGithub, href: "#", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="relative mt-0 w-full border-t border-(--divider) bg-(--nav-bg)">
      {/* Top subtle gradient accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5 md:py-16">
          {/* Brand column — takes 2 cols on large */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/30 transition group-hover:shadow-indigo-500/50">
                <SiLoop className="h-4 w-4 text-white" />
              </span>
              <span className="text-xl font-black tracking-tight text-(--text-primary)">
                hire
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-cyan-400">
                  loop
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-(--text-secondary)">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* Newsletter micro-form */}
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-(--text-muted)">
                Stay in the loop
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <div className="relative flex-1">
                  <FiMail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-(--text-muted)" />
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-(--divider) bg-(--surface-bg) py-2.5 pl-9 pr-3 text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none transition focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-indigo-500/30 active:translate-y-0"
                >
                  Join
                </button>
              </form>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-xl border border-(--divider) bg-(--surface-bg) text-(--text-muted) transition hover:border-indigo-500/50 hover:bg-(--soft-bg) hover:text-indigo-400"
                >
                  <Icon className="h-4 w-4 transition group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINKS.map(({ heading, items }) => (
            <div key={heading}>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-(--text-primary)">
                {heading}
              </p>
              <ul className="flex flex-col gap-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-1 text-sm text-(--text-secondary) transition hover:text-indigo-400"
                    >
                      {label}
                      <FiArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0 transition-all group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-(--divider) py-6 sm:flex-row">
          <p className="text-xs text-(--text-muted)">
            © {new Date().getFullYear()} hireloop · Programming Hero. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="text-xs text-(--text-muted) transition hover:text-indigo-400"
            >
              Terms &amp; Policy
            </Link>
            <span className="h-3 w-px bg-(--divider)" />
            <Link
              href="#"
              className="text-xs text-(--text-muted) transition hover:text-indigo-400"
            >
              Privacy Guideline
            </Link>
            <span className="h-3 w-px bg-(--divider)" />
            <Link
              href="#"
              className="text-xs text-(--text-muted) transition hover:text-indigo-400"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
