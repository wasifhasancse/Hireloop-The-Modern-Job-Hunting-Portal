import Hero from "@/components/Hero/Hero";
import JobDiscover from "@/components/JobDiscover/JobDiscover";
import Navbar from "@/components/Navbar/Navbar";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start px-4 pb-16 pt-8 md:px-8 md:pt-10">
        <Hero />
        <Stats />
        <JobDiscover />
      </main>
    </div>
  );
}
