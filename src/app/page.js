import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center px-4 pb-16 pt-10 md:px-8">
        <section className="w-full rounded-3xl border border-(--surface-border) bg-(--surface-bg) p-8 shadow-[0_30px_70px_rgba(0,0,0,0.12)] md:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-(--text-muted)">
            Smarter hiring starts here
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-(--text-primary) md:text-6xl">
            Find top talent faster with a hiring flow people actually enjoy.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-(--text-secondary) md:text-lg">
            This navbar includes responsive navigation, themed visuals, and
            icon-based actions to match your requested style.
          </p>
        </section>
      </main>
    </div>
  );
}
