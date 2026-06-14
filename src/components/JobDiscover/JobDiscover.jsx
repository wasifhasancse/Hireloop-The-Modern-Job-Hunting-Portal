import JobCard from "@/components/JobCard/JobCard";
import { jobs } from "@/data/jobs";
import Link from "next/link";

const JobDiscover = () => {
  return (
    <section
      className="fade-up relative mt-8 w-full rounded-3xl border border-(--surface-border) bg-(--surface-bg)/84 px-4 py-10 shadow-(--shadow-xl) ring-1 ring-white/8 backdrop-blur-xl sm:px-6 md:px-8 md:py-14"
      style={{ "--delay": "160ms" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -top-16 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-indigo-500/14 blur-3xl" />
      </div>

      <div className="relative">
        <p
          className="fade-up text-center text-xs font-semibold uppercase tracking-[0.14em] text-indigo-400 sm:text-sm"
          style={{ "--delay": "220ms" }}
        >
          Smart Job Discovery
        </p>
        <h2
          className="fade-up mx-auto mt-3 max-w-2xl text-center text-3xl font-black leading-tight text-(--text-primary) sm:text-4xl md:text-5xl"
          style={{ "--delay": "300ms" }}
        >
          The roles you&apos;d never find by searching
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-10 md:gap-5">
          {jobs.map((job, index) => (
            <JobCard key={job.id} job={job} delay={380 + index * 90} />
          ))}
        </div>

        <div
          className="fade-up mt-8 flex justify-center md:mt-10"
          style={{ "--delay": "520ms" }}
        >
          <Link
            href="/browse-jobs"
            className="pulse-glow inline-flex items-center justify-center rounded-2xl border border-(--divider) bg-(--nav-bg) px-6 py-3 text-sm font-semibold text-(--text-primary) shadow-(--shadow-md) transition hover:border-cyan-500/50 hover:text-cyan-500"
          >
            View all job open
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobDiscover;
