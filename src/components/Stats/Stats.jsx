"use client";

import { useEffect, useRef, useState } from "react";
import { FaBuilding } from "react-icons/fa6";
import { FiBriefcase, FiStar, FiUserPlus } from "react-icons/fi";

const statsData = [
  {
    label: "Active Jobs",
    value: 50000,
    suffix: "K",
    divisor: 1000,
    icon: FiBriefcase,
    iconColor: "text-cyan-400",
  },
  {
    label: "Companies",
    value: 12000,
    suffix: "K",
    divisor: 1000,
    icon: FaBuilding,
    iconColor: "text-indigo-400",
  },
  {
    label: "Job Seekers",
    value: 2000000,
    suffix: "M",
    divisor: 1000000,
    icon: FiUserPlus,
    iconColor: "text-sky-400",
  },
  {
    label: "Satisfaction Rate",
    value: 97,
    suffix: "%",
    divisor: 1,
    icon: FiStar,
    iconColor: "text-amber-400",
  },
];

const formatStat = (stat, currentValue) => {
  if (stat.suffix === "%") return `${Math.round(currentValue)}%`;

  const scaled = currentValue / stat.divisor;
  const rounded = Number.isInteger(scaled) ? scaled : scaled.toFixed(1);
  return `${rounded}${stat.suffix}`;
};

const Stats = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState(statsData.map(() => 0));

  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(currentSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1300;
    let frameId;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayValues(statsData.map((stat) => stat.value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="fade-up relative mt-8 w-full overflow-hidden rounded-3xl border border-(--surface-border) bg-(--surface-bg)/88 px-4 py-10 shadow-(--shadow-xl) ring-1 ring-white/10 backdrop-blur-xl sm:px-6 md:px-8 md:py-12"
      style={{ "--delay": "140ms" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-indigo-500/12 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <h2
          className="fade-up mx-auto max-w-3xl text-center text-2xl font-bold leading-tight text-(--text-primary) sm:text-3xl md:text-4xl"
          style={{ "--delay": "220ms" }}
        >
          Assisting over{" "}
          <span className="text-indigo-400">15,000 job seekers</span> find their
          dream positions.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <article
                key={stat.label}
                className="fade-up rounded-2xl border border-(--divider) bg-(--nav-bg)/92 p-5 shadow-(--shadow-md) transition hover:-translate-y-0.5 hover:border-cyan-500/40"
                style={{ "--delay": `${280 + index * 100}ms` }}
              >
                <Icon className={`text-base ${stat.iconColor}`} />
                <p className="mt-7 text-4xl font-black tracking-tight text-(--text-primary)">
                  {formatStat(stat, displayValues[index])}
                </p>
                <p className="mt-2 text-sm text-(--text-secondary)">
                  {stat.label}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
