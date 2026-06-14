import features from "@/data/features";
import { FaBuilding } from "react-icons/fa6";
import {
  FiAward,
  FiBarChart2,
  FiBookmark,
  FiFileText,
  FiSearch,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const FeaturesJob = () => {
  const iconMap = {
    FiSearch: FiSearch,
    FiBarChart2: FiBarChart2,
    FiBuilding: FaBuilding,
    FiBookmark: FiBookmark,
    FiZap: FiZap,
    FiFileText: FiFileText,
    FiTrendingUp: FiTrendingUp,
    FiAward: FiAward,
  };

  const colorMap = {
    cyan: "text-cyan-400",
    indigo: "text-indigo-400",
    sky: "text-sky-400",
    purple: "text-purple-400",
    amber: "text-amber-400",
    rose: "text-rose-400",
    emerald: "text-emerald-400",
    orange: "text-orange-400",
  };

  return (
    <section
      className="fade-up relative w-full overflow-hidden rounded-3xl border border-(--surface-border) bg-(--surface-bg)/88 px-4 py-10 shadow-(--shadow-xl) ring-1 ring-white/10 backdrop-blur-xl sm:px-6 md:px-10 md:py-16"
      style={{ "--delay": "180ms" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="float-drift absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div
          className="float-drift absolute -right-20 bottom-1/3 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"
          style={{ animationDelay: "800ms" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p
          className="fade-up text-center text-xs font-semibold uppercase tracking-[0.14em] text-indigo-400 sm:text-sm"
          style={{ "--delay": "240ms" }}
        >
          Features Job
        </p>

        <h2
          className="fade-up mx-auto mt-3 max-w-3xl text-center text-3xl font-black leading-tight text-(--text-primary) sm:text-4xl md:text-5xl"
          style={{ "--delay": "320ms" }}
        >
          Everything you need to succeed
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-14 md:gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const colorClass = colorMap[feature.color];

            return (
              <article
                key={feature.id}
                className="fade-up group relative overflow-hidden rounded-2xl border border-(--divider) bg-(--nav-bg)/90 p-5 shadow-(--shadow-md) backdrop-blur transition hover:-translate-y-1 hover:border-cyan-500/40 sm:p-6 md:p-5"
                style={{ "--delay": `${380 + index * 80}ms` }}
              >
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-white/0 via-white/0 to-white/0 transition group-hover:from-indigo-500/5 group-hover:via-cyan-500/3 group-hover:to-white/0" />

                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-(--soft-bg) ring-1 ring-white/20 group-hover:ring-cyan-500/40 transition">
                  <Icon className={`text-xl ${colorClass}`} />
                </div>

                <h3 className="mt-4 text-base font-bold leading-tight text-(--text-primary) sm:text-lg">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-(--text-secondary) sm:text-sm">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesJob;
