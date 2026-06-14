import JobCard from "@/components/JobCard/JobCard";
import Navbar from "@/components/Navbar/Navbar";
import { jobs } from "@/data/jobs";

const BrowseJobs = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 md:px-8 md:pt-10">
        <section className="rounded-3xl border border-(--surface-border) bg-(--surface-bg)/80 p-5 shadow-[0_24px_70px_rgba(4,10,24,0.25)] ring-1 ring-white/8 backdrop-blur-xl sm:p-7 md:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-indigo-400">
            Browse Jobs
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-(--text-primary) sm:text-4xl md:text-5xl">
            Explore high-impact roles curated for modern teams.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-(--text-secondary) sm:text-base">
            Filter by location, work mode, and compensation to find the position
            that fits your next career move.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BrowseJobs;
