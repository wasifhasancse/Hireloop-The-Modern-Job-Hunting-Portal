import CTABanner from "@/components/CTABanner/CTABanner";
import FeaturesJob from "@/components/FeaturesJob/FeaturesJob";
import Hero from "@/components/Hero/Hero";
import JobDiscover from "@/components/JobDiscover/JobDiscover";
import Navbar from "@/components/Navbar/Navbar";
import Pricing from "@/components/Pricing/Pricing";
import Stats from "@/components/Stats/Stats";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start gap-8 px-4 pb-16 pt-8 sm:gap-10 md:px-8 md:pt-10">
        <Hero />
        <Stats />
        <FeaturesJob />
        <Pricing />
        <JobDiscover />
        <CTABanner />
      </main>
    </div>
  );
}
