import Link from "next/link";
import { FiArrowRight, FiBriefcase, FiMapPin } from "react-icons/fi";

const JobCard = ({ job, delay = 0 }) => {
  if (!job) return null;

  return (
    <article
      className="fade-up group h-full rounded-3xl border border-(--surface-border) bg-(--surface-bg)/90 p-5 shadow-(--shadow-lg) ring-1 ring-white/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-500/40 sm:p-6"
      style={{ "--delay": `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold tracking-tight text-(--text-primary) sm:text-2xl">
        {job.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-(--text-secondary)">
        {job.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium sm:text-sm">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-(--divider) bg-(--soft-bg) px-3 py-1.5 text-(--text-secondary)">
          <FiMapPin className="text-[13px] text-fuchsia-400" />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-(--divider) bg-(--soft-bg) px-3 py-1.5 text-(--text-secondary)">
          <FiBriefcase className="text-[13px] text-indigo-400" />
          {job.mode}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-(--divider) bg-(--soft-bg) px-3 py-1.5 text-(--text-secondary)">
          <span className="text-[13px] text-cyan-400">£</span>
          {job.salary}
        </span>
      </div>

      <Link
        href="/browse-jobs"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-(--text-primary) transition group-hover:text-cyan-400"
      >
        Apply Now
        <FiArrowRight className="text-base transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
};

export default JobCard;
