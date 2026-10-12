"use client";

import React from "react";
import { ProjectShowcase } from "@/components/ui/project-showcase";

const INDUSTRIES = [
  {
    title: "Real Estate",
    description: "High cost per lead and unqualified buyers wasting site visit schedules.",
  },
  {
    title: "Schools and Coaching",
    description: "Seasonal admission slumps and unanswered parent admission queries.",
  },
  {
    title: "Healthcare",
    description: "Patient drop-offs during booking and fragmented consultation reminders.",
  },
  {
    title: "Retail",
    description: "Low footfall translation and lack of repeat purchase re-engagement.",
  },
  {
    title: "Startups",
    description: "Burning marketing budgets on clicks without building repeatable sales loops.",
  },
  {
    title: "SMEs",
    description: "Disjointed marketing vendors failing to deliver direct client phone calls.",
  },
  {
    title: "Local Businesses",
    description: "Losing neighborhood visibility to competitors with better Google map setups.",
  },
];

const INDUSTRY_IMAGES: Record<(typeof INDUSTRIES)[number]["title"], string> = {
  "Real Estate":
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=640&q=80",
  "Schools and Coaching":
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=640&q=80",
  Healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=640&q=80",
  Retail:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=640&q=80",
  Startups:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80",
  SMEs:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=640&q=80",
  "Local Businesses":
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=640&q=80",
};

export default function Industries() {
  return (
    <section id="industries" className="w-full bg-[#FAF8F5] px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1240px]">
        {/* Main Card Wrapper */}
        <div className="rounded-[28px] border border-[#D9D3C5] bg-white/75 p-8 shadow-xs backdrop-blur-sm sm:p-12 md:p-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Heading, Subtitle & CTA */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <h2 className="font-serif text-3xl font-normal tracking-tight text-[#171717] sm:text-4xl md:text-[46px] md:leading-[1.14]">
                  Built for Businesses
                  <br />
                  Like Yours
                </h2>
                <p className="mt-5 max-w-[380px] text-sm leading-relaxed text-[#615F5B] sm:text-base">
                  We work with seven types of businesses. Here is the problem we help each one solve.
                </p>
              </div>

              {/* Discuss CTA Button linking directly to #contact */}
              <div className="mt-8 pt-4 lg:mt-0">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#171717] underline decoration-[#171717] underline-offset-4 transition-colors hover:text-neutral-600 hover:decoration-neutral-600 sm:text-base"
                >
                  <span>Discuss Your Business</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: List of 7 Industries */}
            <div className="border-t border-[#D9D3C5] lg:col-span-7 lg:border-t-0">
              <ProjectShowcase
                items={INDUSTRIES.map((item) => ({
                  ...item,
                  image: INDUSTRY_IMAGES[item.title],
                  href: "#contact",
                }))}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
