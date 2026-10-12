import React from "react";
import FluidExpandingGrid from "@/components/ui/fluid-expanding-grid";

type Principle = { title: string; description: string };

const PRINCIPLES: Principle[] = [
  {
    title: "Real enquiries first",
    description:
      "Outcomes measured by verified calls, WhatsApp messages, and booked consultations.",
  },
  {
    title: "Clear communication",
    description:
      "Direct WhatsApp access to the people handling your work. Zero agency jargon.",
  },
  {
    title: "Marketing plus automation",
    description:
      "Traffic generation connected directly to automated replies so no lead slips through.",
  },
];

const Principles: React.FC = () => (
  <ul className="border-t border-[#D9D3C5]">
    {PRINCIPLES.map((p) => (
      <li
        key={p.title}
        className="grid grid-cols-1 gap-2 border-b border-[#D9D3C5] py-5 sm:grid-cols-[200px_1fr] sm:gap-6"
      >
        <h4 className="font-['DM_Serif_Display'] text-[17px] leading-snug text-neutral-900">
          {p.title}
        </h4>
        <p className="text-[13px] leading-[1.6] text-neutral-600">{p.description}</p>
      </li>
    ))}
  </ul>
);

const CtaButton: React.FC = () => (
  <a
    href="#about"
    className="group inline-flex h-[57.6px] w-[195.86px] items-center justify-center gap-2 rounded-full bg-[#1a2230] text-[13px] font-medium uppercase tracking-[0.08em] text-white transition-transform duration-300 hover:-rotate-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a2230] motion-reduce:transition-none"
  >
    Explore More
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </a>
);

/* ---------- Section ---------- */

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full border-b border-[#D9D3C5] bg-[#FAF8F5] px-6 py-20 font-['DM_Sans'] md:px-16 md:py-[120px]"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&display=swap');`}</style>

      <div className="mx-auto grid max-w-[1152px] grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-x-16">
        <div className="md:col-span-6">
          <FluidExpandingGrid />
        </div>

        {/* Right: editorial copy */}
        <div className="md:col-span-6">
          <h2 className="pb-2 font-['DM_Serif_Display'] text-5xl uppercase leading-[61px] text-neutral-900">
            About Us
          </h2>

          <h3 className="pb-5 font-['DM_Serif_Display'] text-[22px] leading-9 text-neutral-500">
            Marketing That Ends in Real Enquiries
          </h3>

          <p className="max-w-[544px] pb-8 text-sm leading-[22px] text-neutral-700">
            Most business owners do not want more reports. They want more enquiries.
            That is what we work on. We run your marketing, build your website, and set up
            automation so every enquiry gets noticed and followed up. We work with real
            estate, schools and coaching, healthcare, retail, startups, SMEs and local
            businesses. You get plain talk, clear steps and a team that explains what it is
            doing and why.
          </p>

          <Principles />

          <div className="pt-10">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;