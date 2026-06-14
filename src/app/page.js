import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-start px-4 pb-16 pt-8 md:px-8 md:pt-10">
        <Hero />
      </main>
    </div>
  );
}
