"use client";

import React from "react";

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
              <ul className="divide-y divide-[#D9D3C5]">
                {INDUSTRIES.map((item) => (
                  <li key={item.title}>
                    <a
                      href="#contact"
                      className="group flex items-center justify-between py-5 transition-colors duration-150 hover:bg-neutral-100/30 sm:py-6"
                    >
                      <div className="pr-4">
                        <h3 className="font-serif text-lg font-medium text-[#171717] sm:text-[19px]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-[#615F5B] sm:text-[13.5px]">
                          {item.description}
                        </p>
                      </div>

                      <div className="shrink-0 pl-2 text-neutral-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#171717]">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
