"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBuilding } from "react-icons/fa6";
import {
  FiBriefcase,
  FiDollarSign,
  FiLogIn,
  FiMenu,
  FiMoon,
  FiSun,
  FiUserPlus,
  FiX,
} from "react-icons/fi";
import { SiLoop } from "react-icons/si";

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;

    const savedTheme = localStorage.getItem("hireloop-theme");
    if (savedTheme) return savedTheme === "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("hireloop-theme", theme);
  }, [isDark]);

  const navItems = [
    { label: "Browse Jobs", href: "/browse-jobs", icon: FiBriefcase },
    { label: "Company", href: "/", icon: FaBuilding },
    { label: "Pricing", href: "#", icon: FiDollarSign },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-5 md:px-8">
      <nav
        className="fade-up mx-auto flex w-full max-w-6xl items-center rounded-2xl border border-(--nav-border) bg-(--nav-bg)/92 px-4 py-3 text-(--text-primary) shadow-(--shadow-lg) ring-1 ring-white/10 backdrop-blur-xl md:px-6"
        style={{ "--delay": "40ms" }}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-orange-500 text-white shadow-[0_8px_18px_rgba(37,99,235,0.45)]">
            <SiLoop className="text-lg" />
          </span>
          <span className="text-3xl font-extrabold leading-none tracking-tight">
            <span className="text-sky-500">hire</span>
            <span className="text-orange-500">loop</span>
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-(--text-secondary) transition hover:bg-(--soft-bg) hover:text-(--text-primary)"
              >
                <Icon className="text-base text-cyan-500/90 opacity-90 transition group-hover:opacity-100" />
                {item.label}
              </Link>
            );
          })}

          <span className="mx-1 h-6 w-px bg-(--divider)" />

          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--divider) bg-(--soft-bg) text-(--text-secondary) transition hover:text-(--text-primary)"
          >
            {isDark ? (
              <FiSun className="text-lg" />
            ) : (
              <FiMoon className="text-lg" />
            )}
          </button>

          <Link
            href="/"
            className="group ml-2 inline-flex items-center gap-2 rounded-xl border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-500 transition hover:bg-indigo-500/15"
          >
            <FiLogIn className="text-base" />
            Sign In
          </Link>

          <Link
            href="/browse-jobs"
            className="pulse-glow inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(59,130,246,0.45)] transition hover:brightness-110"
          >
            <FiUserPlus className="text-base" />
            Get Started
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle theme"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--divider) bg-(--soft-bg) text-(--text-secondary)"
          >
            {isDark ? (
              <FiSun className="text-lg" />
            ) : (
              <FiMoon className="text-lg" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--divider) bg-(--soft-bg) text-(--text-secondary)"
          >
            {mobileOpen ? (
              <FiX className="text-lg" />
            ) : (
              <FiMenu className="text-lg" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fade-up mx-auto mt-3 w-full max-w-6xl rounded-2xl border border-(--nav-border) bg-(--nav-bg)/95 p-3 shadow-(--shadow-lg) ring-1 ring-white/10 md:hidden"
          style={{ "--delay": "90ms" }}
        >
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-(--text-secondary) hover:bg-(--soft-bg) hover:text-(--text-primary)"
                >
                  <Icon className="text-base text-cyan-500/90" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-3 flex flex-col gap-2 border-t border-(--divider) pt-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-500"
            >
              <FiLogIn className="text-base" />
              Sign In
            </Link>
            <Link
              href="/browse-jobs"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
            >
              <FiUserPlus className="text-base" />
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
