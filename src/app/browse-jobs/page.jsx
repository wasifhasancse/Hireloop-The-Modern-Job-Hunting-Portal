import JobCard from "@/components/JobCard/JobCard";
import Navbar from "@/components/Navbar/Navbar";
import { jobs } from "@/data/jobs";

const BrowseJobs = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 md:px-8 md:pt-10">
        <section
          className="fade-up relative overflow-hidden rounded-3xl border border-(--surface-border) bg-(--surface-bg)/86 p-5 shadow-(--shadow-xl) ring-1 ring-white/8 backdrop-blur-xl sm:p-7 md:p-9"
          style={{ "--delay": "120ms" }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="float-drift absolute -top-16 right-8 h-44 w-44 rounded-full bg-indigo-500/12 blur-3xl" />
          </div>

          <p
            className="fade-up relative text-sm font-semibold uppercase tracking-[0.14em] text-indigo-400"
            style={{ "--delay": "220ms" }}
          >
            Browse Jobs
          </p>
          <h1
            className="fade-up relative mt-3 text-3xl font-black leading-tight text-(--text-primary) sm:text-4xl md:text-5xl"
            style={{ "--delay": "300ms" }}
          >
            Explore high-impact roles curated for modern teams.
          </h1>
          <p
            className="fade-up relative mt-4 max-w-2xl text-sm leading-7 text-(--text-secondary) sm:text-base"
            style={{ "--delay": "380ms" }}
          >
            Filter by location, work mode, and compensation to find the position
            that fits your next career move.
          </p>

          <div className="relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {jobs.map((job, index) => (
              <JobCard key={job.id} job={job} delay={460 + index * 90} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BrowseJobs;
