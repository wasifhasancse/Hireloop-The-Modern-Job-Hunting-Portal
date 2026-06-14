import Link from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiUser,
  FiZap,
} from "react-icons/fi";

const TRUST_ITEMS = [
  { icon: FiCheckCircle, label: "No credit card required" },
  { icon: FiZap, label: "Live matches in 24 h" },
  { icon: FiBriefcase, label: "Free forever on Starter" },
];

const CTABanner = () => {
  return (
    <section
      className="fade-up relative w-full overflow-hidden rounded-3xl"
      style={{ "--delay": "200ms", boxShadow: "var(--cta-shadow)" }}
    >
      {/* ── Layered background ────────────────────────────────── */}
      {/* Base fill — adapts per theme via CSS var */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--cta-bg-base)" }}
      />

      {/* Primary glow — large hemisphere rising from bottom-center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 115%, var(--cta-glow-primary), var(--cta-glow-secondary), transparent 68%)",
        }}
      />

      {/* Subtle top edge vignette so content doesn't float */}
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/20 to-transparent" />

      {/* Border ring */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1"
        style={{ boxShadow: `inset 0 0 0 1px var(--cta-border)` }}
      />

      {/* ── Grid / hemisphere mesh ─────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            `repeating-linear-gradient(0deg, transparent, transparent 39px, var(--cta-grid-color) 40px),` +
            `repeating-linear-gradient(90deg, transparent, transparent 39px, var(--cta-grid-color) 40px)`,
          maskImage:
            "radial-gradient(ellipse 95% 85% at 50% 105%, black 25%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 85% at 50% 105%, black 25%, transparent 72%)",
        }}
      />

      {/* ── Animated glow blobs ────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="float-drift absolute left-1/2 top-2/3 h-112 w-md -translate-x-1/2 rounded-full bg-indigo-600/25 blur-3xl" />
        <div
          className="float-drift absolute left-[18%] bottom-0 h-52 w-52 rounded-full bg-violet-600/20 blur-3xl"
          style={{ animationDelay: "1400ms" }}
        />
        <div
          className="float-drift absolute right-[18%] bottom-0 h-52 w-52 rounded-full bg-purple-600/20 blur-3xl"
          style={{ animationDelay: "700ms" }}
        />
        {/* Subtle top-left accent */}
        <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-indigo-900/30 blur-3xl" />
      </div>

      {/* ── Content ───────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center sm:px-10 sm:py-24 md:py-28 lg:py-32">
        {/* Eyebrow pill */}
        <div
          className="fade-up mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-md"
          style={{
            border: "1px solid var(--cta-eyebrow-border)",
            background: "var(--cta-eyebrow-bg)",
            "--delay": "280ms",
          }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300">
            AI-Powered Matching
          </span>
        </div>

        {/* Headline */}
        <h2
          className="fade-up mx-auto max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ "--delay": "360ms" }}
        >
          Your next role is
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 via-violet-300 to-purple-300">
            already looking for you
          </span>
        </h2>

        {/* Sub-headline */}
        <p
          className="fade-up mt-6 max-w-lg text-sm leading-7 sm:text-base"
          style={{ color: "var(--cta-sub)", "--delay": "440ms" }}
        >
          Build a profile in three minutes. The matches start arriving tomorrow
          morning — no job-board hunting required.
        </p>

        {/* CTA buttons */}
        <div
          className="fade-up mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          style={{ "--delay": "520ms" }}
        >
          {/* Primary */}
          <Link
            href="/browse-jobs"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30 active:translate-y-0"
          >
            {/* Shimmer sweep */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-indigo-200/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <FiUser className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative">Create a free account</span>
          </Link>

          {/* Secondary ghost */}
          <Link
            href="#pricing"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/8 px-8 py-4 text-sm font-bold text-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/14 hover:text-white active:translate-y-0"
          >
            View pricing
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Trust row */}
        <div
          className="fade-up mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          style={{ "--delay": "620ms" }}
        >
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 text-xs font-medium"
              style={{ color: "var(--cta-trust)" }}
            >
              <Icon className="h-3.5 w-3.5 text-indigo-400/80" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
