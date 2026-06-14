import JobCard from "@/components/JobCard/JobCard";
import { jobs } from "@/data/jobs";
import Link from "next/link";

const JobDiscover = () => {
  return (
    <section className="relative mt-8 w-full rounded-3xl border border-(--surface-border) bg-(--surface-bg)/75 px-4 py-10 shadow-[0_22px_70px_rgba(4,10,24,0.25)] ring-1 ring-white/8 backdrop-blur-xl sm:px-6 md:px-8 md:py-14">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -top-16 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-indigo-500/14 blur-3xl" />
      </div>

      <div className="relative">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-indigo-400 sm:text-sm">
          Smart Job Discovery
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl font-black leading-tight text-(--text-primary) sm:text-4xl md:text-5xl">
          The roles you&apos;d never find by searching
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 md:gap-5">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:mt-10">
          <Link
            href="/browse-jobs"
            className="inline-flex items-center justify-center rounded-2xl border border-(--divider) bg-(--nav-bg) px-6 py-3 text-sm font-semibold text-(--text-primary) shadow-[0_8px_24px_rgba(4,10,24,0.18)] transition hover:border-cyan-500/50 hover:text-cyan-500"
          >
            View all job open
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobDiscover;
