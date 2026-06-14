"use client";

import PricingCard from "@/components/PricingCard/PricingCard";
import pricingTiers from "@/data/pricing";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      className="fade-up relative w-full overflow-hidden rounded-3xl border border-(--surface-border) bg-(--surface-bg)/88 px-4 py-10 shadow-(--shadow-xl) ring-1 ring-white/10 backdrop-blur-xl sm:px-6 md:px-10 md:py-16"
      style={{ "--delay": "260ms" }}
    >
      {/* Background Accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="float-drift absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div
          className="float-drift absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"
          style={{ animationDelay: "800ms" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div
          className="fade-up text-center mb-4"
          style={{ "--delay": "320ms" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 sm:text-sm">
            💎 Flexible Pricing
          </p>
        </div>

        <h2
          className="fade-up mx-auto max-w-3xl text-center text-3xl font-black leading-tight text-(--text-primary) sm:text-4xl md:text-5xl"
          style={{ "--delay": "380ms" }}
        >
          Pay for the leverage,
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
            not the listings
          </span>
        </h2>

        {/* Toggle with improved design */}
        <div
          className="fade-up mt-10 flex items-center justify-center gap-2 md:mt-12"
          style={{ "--delay": "440ms" }}
        >
          <div className="relative inline-flex items-center rounded-full bg-(--surface-bg)/50 p-1.5 ring-1 ring-white/20 backdrop-blur-sm shadow-(--shadow-md)">
            {/* Active indicator background */}
            <div
              className="absolute inset-1.5 rounded-full bg-linear-to-r from-indigo-500/30 to-cyan-500/20 ring-1 ring-indigo-500/40 transition-all duration-500"
              style={{
                left: isYearly ? "50%" : "0.375rem",
                right: isYearly ? "0.375rem" : "50%",
              }}
            />

            {/* Monthly Button */}
            <button
              onClick={() => setIsYearly(false)}
              className="fade-up relative z-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 text-(--text-primary) drop-shadow-lg"
              style={{ "--delay": "500ms" }}
            >
              <span>📅</span>
              <span>Monthly</span>
            </button>

            {/* Divider */}
            <div className="mx-2 h-6 w-px bg-white/10" />

            {/* Yearly Button */}
            <button
              onClick={() => setIsYearly(true)}
              className={`fade-up relative z-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                isYearly
                  ? "text-(--text-primary) drop-shadow-lg"
                  : "text-(--text-secondary) hover:text-(--text-primary)"
              }`}
              style={{ "--delay": "560ms" }}
            >
              <span>🎯</span>
              <span>Yearly</span>
            </button>
          </div>

          {/* Savings badge */}
          {isYearly && (
            <div
              className="fade-up ml-3 inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 ring-1 ring-purple-500/50 backdrop-blur-sm"
              style={{ "--delay": "620ms" }}
            >
              <FiCheck className="h-4 w-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
                Save 25%
              </span>
            </div>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-16 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingCard
              key={tier.id}
              name={tier.name}
              price={
                isYearly ? Math.floor(tier.yearlyPrice / 12) : tier.monthlyPrice
              }
              description={tier.description}
              features={tier.features}
              highlighted={tier.highlighted}
              badge={tier.badge}
              buttonText={tier.buttonText}
              delay={660 + index * 80}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div
          className="fade-up mx-auto mt-12 max-w-3xl rounded-2xl bg-linear-to-r from-indigo-500/10 via-cyan-500/5 to-purple-500/10 border border-indigo-500/20 p-6 sm:p-8 md:mt-16"
          style={{ "--delay": "820ms" }}
        >
          <div className="flex gap-3">
            <div className="shrink-0 mt-1">
              <FiCheck className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm leading-relaxed text-(--text-secondary)">
                <span className="font-bold text-(--text-primary)">
                  All plans include
                </span>{" "}
                access to our job matching algorithm, company insights, salary
                data, and unlimited 1-click apply.{" "}
                <span className="font-semibold text-cyan-400">
                  Cancel anytime
                </span>{" "}
                — no contracts or hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
