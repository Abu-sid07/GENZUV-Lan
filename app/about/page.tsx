
import React from "react";
import FluidExpandingGrid from "@/components/ui/fluid-expanding-grid";

type Principle = {
  title: string;
  description: string;
};

const PRINCIPLES: Principle[] = [
  {
    title: "Real enquiries. Real growth.",
    description:
      "We focus on what actually moves your business forward — qualified enquiries, meaningful conversations, booked consultations, and opportunities that turn into customers. Every campaign is built around outcomes that matter, not vanity metrics.",
  },
  {
    title: "Transparency at every step.",
    description:
      "You work directly with the people managing your marketing and technology. We keep communication simple, share clear updates, explain our decisions, and make sure you always know what is happening with your business.",
  },
  {
    title: "Marketing that works together.",
    description:
      "Your website, advertising, social media, and automation should never operate in isolation. We connect every touchpoint into one streamlined system that attracts prospects, captures enquiries, and helps turn interest into action.",
  },
  {
    title: "Built around your business.",
    description:
      "Every business has different goals, customers, and challenges. We take the time to understand yours before recommending a strategy, creating solutions that fit your requirements, budget, and stage of growth.",
  },
  {
    title: "Follow-up that never falls behind.",
    description:
      "A missed enquiry can mean a missed opportunity. With smart automation, WhatsApp integration, and structured follow-ups, we help your business respond faster, stay connected, and make the most of every potential customer.",
  },
];

const CtaButton: React.FC = () => (
  <a
    href="#about"
    className="group inline-flex h-[57.6px] w-[195.86px] items-center justify-center gap-2 rounded-full bg-[#1a2230] text-[13px] font-medium uppercase tracking-[0.08em] text-white transition-transform duration-300 hover:-rotate-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a2230] motion-reduce:transition-none"
  >
    Our Approach
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
        <p className="text-[13px] leading-[1.7] text-neutral-600">
          {p.description}
        </p>
      </li>
    ))}
  </ul>
);

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full border-b border-[#D9D3C5] bg-[#FAF8F5] px-6 py-20 font-['DM_Sans'] md:px-16 md:py-[120px]"
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&display=swap');`}</style>

      <div className="mx-auto grid max-w-[1152px] grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-x-16">

        {/* Left: Visual section */}
        <div className="md:col-span-6">
          <FluidExpandingGrid />
        </div>

        {/* Right: Editorial content */}
        <div className="md:col-span-6">
          <span className="mb-5 block text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
            Who We Are & What We Do
          </span>

          <h2 className="pb-3 font-['DM_Serif_Display'] text-5xl uppercase leading-[1.15] text-neutral-900 md:text-[58px]">
            About Us
          </h2>

          <h3 className="pb-6 font-['DM_Serif_Display'] text-[22px] leading-9 text-neutral-500">
            We Turn Marketing Into Meaningful Business Growth.
          </h3>

          <p className="max-w-[544px] pb-5 text-sm leading-[1.8] text-neutral-700">
            We believe good marketing should do more than make your business
            look visible. It should make your business grow. That means reaching
            the right people, creating genuine interest, and turning that
            interest into enquiries and paying customers.
          </p>

          <p className="max-w-[544px] pb-5 text-sm leading-[1.8] text-neutral-700">
            We bring digital marketing, website development, and business
            automation together to help businesses build a stronger digital
            presence and generate consistent opportunities. From attracting
            potential customers through targeted campaigns to capturing
            enquiries and automating follow-ups, we build connected systems
            that make every interaction count.
          </p>

          <p className="max-w-[544px] pb-9 text-sm leading-[1.8] text-neutral-700">
            We work with real estate businesses, educational institutions,
            coaching centres, healthcare providers, retailers, startups,
            SMEs, and local businesses. Whatever your industry or stage of
            growth, our approach stays the same: understand your business,
            identify what needs to improve, and create practical solutions
            that deliver measurable value.
          </p>

          <div className="pb-10">
            <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
              What Makes Our Approach Different
            </div>
            <Principles />
          </div>

          <CtaButton />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
