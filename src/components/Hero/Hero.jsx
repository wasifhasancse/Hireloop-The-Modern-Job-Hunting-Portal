import { FiMapPin, FiSearch, FiStar } from "react-icons/fi";

const Hero = () => {
  const trendingTags = [
    "Product Designer",
    "AI Engineering",
    "DevOps Engineer",
    "Frontend Developer",
  ];

  return (
    <section
      className="fade-up relative w-full overflow-hidden rounded-3xl border border-(--surface-border) bg-(--surface-bg)/88 px-4 py-10 shadow-(--shadow-xl) ring-1 ring-white/10 backdrop-blur-xl sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-14"
      style={{ "--delay": "120ms" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="float-drift absolute -left-20 top-0 h-56 w-56 rounded-full bg-cyan-500/16 blur-3xl" />
        <div
          className="float-drift absolute -right-12 top-8 h-52 w-52 rounded-full bg-indigo-500/14 blur-3xl"
          style={{ animationDelay: "700ms" }}
        />
        <div
          className="float-drift absolute bottom-0 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-orange-500/12 blur-3xl"
          style={{ animationDelay: "1200ms" }}
        />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <div
          className="fade-up inline-flex items-center gap-2 rounded-full border border-(--divider) bg-(--soft-bg) px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-(--text-secondary)"
          style={{ "--delay": "220ms" }}
        >
          <FiStar className="text-sm text-cyan-500" />
          <span>50,000+ new jobs this month</span>
        </div>

        <h1
          className="fade-up mt-5 max-w-3xl text-3xl font-black leading-tight text-(--text-primary) sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ "--delay": "320ms" }}
        >
          Find Your Dream Job Today
        </h1>

        <p
          className="fade-up mt-4 max-w-2xl text-sm leading-7 text-(--text-secondary) sm:mt-5 sm:text-base md:text-lg"
          style={{ "--delay": "420ms" }}
        >
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role faster.
        </p>

        <div
          className="fade-up mt-7 w-full max-w-3xl rounded-2xl border border-(--divider) bg-(--nav-bg)/92 p-2 shadow-(--shadow-lg) backdrop-blur md:mt-8 md:p-2.5"
          style={{ "--delay": "520ms" }}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <label className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-transparent px-3 py-2.5 text-(--text-secondary) transition focus-within:border-cyan-500/45 focus-within:bg-(--soft-bg)">
              <FiSearch className="shrink-0 text-base text-cyan-500" />
              <input
                type="text"
                placeholder="Job title, skill or company"
                className="w-full min-w-0 bg-transparent text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none"
              />
            </label>

            <div className="hidden h-7 w-px bg-(--divider) md:block" />

            <label className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-transparent px-3 py-2.5 text-(--text-secondary) transition focus-within:border-cyan-500/45 focus-within:bg-(--soft-bg)">
              <FiMapPin className="shrink-0 text-base text-indigo-500" />
              <input
                type="text"
                placeholder="Location or Remote"
                className="w-full min-w-0 bg-transparent text-sm text-(--text-primary) placeholder:text-(--text-muted) outline-none"
              />
            </label>

            <button
              type="button"
              className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-400 px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.45)] transition hover:brightness-110 md:w-12"
              aria-label="Search jobs"
            >
              <FiSearch className="text-lg" />
            </button>
          </div>
        </div>

        <div
          className="fade-up mt-5 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2 text-xs sm:text-sm"
          style={{ "--delay": "620ms" }}
        >
          <span className="font-medium text-(--text-muted)">
            Trending Position
          </span>
          {trendingTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="rounded-full border border-(--divider) bg-(--soft-bg) px-3 py-1.5 font-medium text-(--text-secondary) transition hover:border-cyan-500/50 hover:text-(--text-primary)"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
