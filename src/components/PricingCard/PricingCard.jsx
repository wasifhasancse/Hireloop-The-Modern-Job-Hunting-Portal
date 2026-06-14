import { FiArrowRight, FiCheck } from "react-icons/fi";

const PricingCard = ({
  name,
  price,
  description,
  features,
  highlighted,
  badge,
  buttonText,
  delay,
}) => {
  return (
    <article
      className="fade-up group relative flex flex-col h-full overflow-hidden rounded-3xl border shadow-(--shadow-lg) transition-all duration-500 hover:shadow-(--shadow-xl)"
      style={{ "--delay": `${delay}ms` }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-cyan-500/3 to-transparent" />
      </div>

      {/* Highlighted card styling */}
      {highlighted ? (
        <>
          <div className="absolute inset-0 -z-20 bg-linear-to-br from-indigo-500/20 via-cyan-500/12 to-purple-500/8" />
          <div className="border border-indigo-500/50 bg-(--nav-bg) ring-2 ring-indigo-500/40 shadow-2xl shadow-indigo-500/10" />
          {/* Shine effect on highlighted */}
          <div
            className="absolute inset-0 -z-10 bg-linear-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-pulse"
            style={{ animationDuration: "3s" }}
          />
        </>
      ) : (
        <>
          <div className="border border-(--divider) bg-(--nav-bg)/70 backdrop-blur-sm transition-all duration-300 group-hover:border-indigo-500/40 group-hover:bg-(--nav-bg)/95" />
        </>
      )}

      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-7 md:p-8 lg:p-10">
        {/* Top badge and name row */}
        <div className="flex items-start justify-between gap-3 mb-2">
          {/* Badge */}
          {badge && (
            <div
              className="fade-up inline-flex items-center gap-1 rounded-full bg-linear-to-r from-purple-500/25 to-pink-500/25 px-3 py-1.5 ring-1 ring-purple-500/50 backdrop-blur-sm"
              style={{ "--delay": `${delay + 20}ms` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                {badge}
              </span>
            </div>
          )}

          {/* Icon placeholder for tier indication */}
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur transition-all duration-300 ${
              highlighted
                ? "bg-linear-to-br from-indigo-500/30 to-cyan-500/20 ring-2 ring-indigo-500/30"
                : "bg-slate-900/10 ring-1 ring-white/10 group-hover:ring-indigo-500/30"
            }`}
          >
            <span
              className={`text-lg font-bold ${highlighted ? "text-indigo-400" : "text-(--text-muted)"}`}
            >
              {name === "Starter" ? "📱" : name === "Growth" ? "⚡" : "👑"}
            </span>
          </div>
        </div>

        {/* Plan Name */}
        <h3 className="text-2xl font-bold text-(--text-primary) tracking-tight">
          {name}
        </h3>

        {/* Price with smooth transition */}
        <div className="mt-5 relative h-16 flex items-end">
          <div className="flex items-baseline gap-2 transition-all duration-500">
            <span className="text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400 tracking-tight">
              ${price}
            </span>
            <span className="text-sm font-semibold text-(--text-muted) pb-2">
              /mo
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-(--text-secondary) font-medium">
          {description}
        </p>

        {/* Divider */}
        <div className="mt-6 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

        {/* Features List with staggered animations */}
        <ul className="mt-6 flex flex-1 flex-col gap-4">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="fade-up flex items-start gap-3.5 text-sm leading-6 text-(--text-secondary) group/item"
              style={{ "--delay": `${delay + 100 + idx * 50}ms` }}
            >
              <div className="shrink-0 mt-0.5">
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-cyan-500/20 ring-1 ring-cyan-500/40 transition-all duration-300 group-hover/item:bg-cyan-500/30 group-hover/item:ring-cyan-500/60">
                  <FiCheck className="h-3 w-3 text-cyan-400 font-bold" />
                </div>
              </div>
              <span className="font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`fade-up mt-8 group/btn relative w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold transition-all duration-300 overflow-hidden ${
            highlighted
              ? "bg-linear-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-1 active:translate-y-0"
              : "border border-(--divider) bg-(--surface-bg)/80 text-(--text-primary) hover:bg-(--nav-bg) hover:border-indigo-500/60 hover:shadow-(--shadow-md) active:bg-(--surface-bg)"
          }`}
          style={{ "--delay": `${delay + 380}ms` }}
        >
          <span className="relative z-10 flex items-center gap-2">
            {buttonText}
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </span>
        </button>
      </div>
    </article>
  );
};

export default PricingCard;
