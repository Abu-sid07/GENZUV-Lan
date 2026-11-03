"use client";

import type { CSSProperties } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";

interface CardProps {
  number: string;
  title: string;
  description: string;
  colorTheme?: "orange" | "blue" | "purple";
  className?: string;
  rotate?: string;
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  colorTheme = "blue",
  className = "",
  rotate = "",
  colors,
}: CardProps) => {
  const defaultBgColors = {
    orange: "bg-orange-50",
    blue: "bg-blue-50",
    purple: "bg-purple-50",
  };
  const defaultTextColors = {
    orange: "text-orange-500",
    blue: "text-blue-600",
    purple: "text-purple-600",
  };
  const defaultBorderColors = {
    orange: "border-orange-100",
    blue: "border-blue-100",
    purple: "border-purple-100",
  };

  const bgColor = colors?.bg || defaultBgColors[colorTheme];
  const textColor = colors?.text || defaultTextColors[colorTheme];
  const borderColor = colors?.border || defaultBorderColors[colorTheme];

  return (
    <div
      className={`relative w-full transition-transform duration-300 hover:z-30 hover:scale-105 md:w-[280px] ${rotate} ${className}`}
    >
      <div className="rounded-[25px] border border-neutral-100 bg-white p-2 shadow-[0px_10px_20px_0px_#D3D3D3]">
        <Pin className={`z-20 mx-auto mb-6 h-8 w-8 ${textColor}`} />
        <div
          className={`relative flex h-full flex-col overflow-hidden rounded-[15px] border p-[15px] ${bgColor} ${borderColor}`}
        >
          <span className={`${textColor} mb-5 text-4xl`}>{number}</span>
          <h3 className="mb-[10px] text-2xl leading-none font-semibold text-neutral-800">
            {title}
          </h3>
          <p className="text-sm/5 tracking-tight text-neutral-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export interface Step {
  title: string;
  description: string;
  colorTheme?: "orange" | "blue" | "purple";
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

export interface GrowthProps {
  features?: Step[];
  className?: string;
  stepPositions?: StepPosition[];
}

const DEFAULT_CARD_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-0 md:left-[15%]", rotate: "rotate-8" },
  { className: "md:absolute md:top-[120px] md:right-[15%]", rotate: "-rotate-8" },
  { className: "md:absolute md:top-[450px] md:left-[15%]", rotate: "rotate-8" },
  { className: "md:absolute md:top-[570px] md:right-[10%]", rotate: "-rotate-8" },
  { className: "md:absolute md:top-[850px] md:left-[15%]", rotate: "rotate-8" },
  { className: "md:absolute md:top-[970px] md:right-[10%]", rotate: "-rotate-8" },
];

const DEFAULT_FEATURES: Step[] = [
  {
    title: "Marketing",
    description:
      "We bring the right people to your business through ads, SEO and targeted social media campaigns.",
    colorTheme: "orange",
  },
  {
    title: "Leads",
    description:
      "Enquiries from forms and WhatsApp are captured with name, verified phone number and service requested.",
    colorTheme: "blue",
  },
  {
    title: "Automation",
    description:
      "Replies and reminders go out automatically without delays, so no prospective client is ever lost.",
    colorTheme: "purple",
  },
  {
    title: "Follow-up",
    description:
      "Your team contacts each lead while intent is fresh, equipped with conversation history and exact goals.",
    colorTheme: "orange",
  },
  {
    title: "Sales",
    description:
      "Leads transition cleanly into booked deals and paying customers, with real-time status in your pipeline.",
    colorTheme: "blue",
  },
  {
    title: "Growth",
    description:
      "You review performance metrics, scale high-converting channels, and repeat the winning playbook.",
    colorTheme: "purple",
  },
];

const outcomes = [
  { value: "Found", label: "Ads, search, and social point at one clear offer" },
  { value: "Captured", label: "Name, phone, and request land in one place" },
  { value: "Answered", label: "Replies go out before the enquiry goes cold" },
  { value: "Repeated", label: "Spend follows the channels that actually book" },
];

const guarantees = [
  {
    title: "Source is never a mystery",
    description:
      "Every enquiry shows where it came from, what they asked for, and which page or ad started the conversation.",
  },
  {
    title: "No chat sits unread",
    description:
      "Automation covers the first reply, the reminder, and the handoff, so a busy afternoon does not drop a lead.",
  },
  {
    title: "Sales gets context",
    description:
      "Your team calls with the history already attached, not a bare phone number copied from a spreadsheet.",
  },
];

export default function Growth({
  features,
  className = "",
  stepPositions,
}: GrowthProps) {
  const data = features && features.length > 0 ? features : DEFAULT_FEATURES;
  const positions = stepPositions || DEFAULT_CARD_POSITIONS;

  let height = 1210;
  if (data.length === 1) height = 400;
  else if (data.length === 2) height = 450;
  else if (data.length === 3) height = 800;
  else if (data.length === 4) height = 900;

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="growth"
        className={`relative border-b border-[#D9D3C5] bg-[#FAF8F5] px-6 py-16 max-md:pb-24 sm:py-20 ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
            backgroundSize: "100% 32px",
            marginTop: "4px",
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#FAF8F5]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#FAF8F5]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <header className="mx-auto mb-10 max-w-[720px] text-center sm:mb-12">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-[#8A8478]">
              HOW GROWTH ACTUALLY HAPPENS
            </p>
            <h2 className="font-heading text-3xl leading-[1.08] tracking-[-0.035em] text-[#292722] sm:text-4xl">
              The GENZ UV Growth System
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#77736B] sm:text-base">
              A six-step path from first click to a repeatable pipeline. Marketing
              finds the right people, WhatsApp and forms capture them, automation
              answers immediately, and your team follows up while intent is still
              fresh. You always know what happens next.
            </p>
          </header>

          <dl className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-[#D9D3C5] bg-[#D9D3C5] sm:mb-16 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.value} className="bg-[#FBFAF6] px-5 py-5 sm:px-6">
                <dt className="font-heading text-xl text-[#19181A] sm:text-2xl">
                  {item.value}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-[#68656D]">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>

          <div
            className="relative mx-auto flex h-auto w-full max-w-[1000px] flex-col space-y-8 md:block md:h-[var(--md-height)] md:space-y-0"
            style={{ "--md-height": `${height}px` } as CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="pointer-events-none absolute top-0 left-0 z-0 hidden h-full w-full md:block"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {(() => {
                  const pathD = data.reduce((path, _, index) => {
                    if (index === 0)
                      return "M 290 150 C 500 150, 550 270, 710 270";
                    if (index === 1)
                      return `${path} C 850 270, 500 350, 290 450`;
                    if (index === 2)
                      return `${path} C 290 600, 550 720, 750 720`;
                    if (index === 3)
                      return `${path} C 950 720, 500 800, 290 850`;
                    if (index === 4)
                      return `${path} C 200 950, 550 1020, 750 1020`;
                    return path;
                  }, "");

                  return (
                    <m.path
                      d={pathD}
                      stroke="currentColor"
                      className="text-neutral-300"
                      strokeWidth="2"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -140 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length];

              return (
                <Card
                  key={step.title}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  colorTheme={step.colorTheme || "blue"}
                  colors={step.colors}
                  rotate={position.rotate}
                  className={position.className}
                />
              );
            })}
          </div>

          <div className="mt-16 border-t border-[#D9D3C5] pt-12 sm:mt-20 sm:pt-16">
            <div className="mb-8 max-w-[640px] sm:mb-10">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-[#8A8478]">
                WHAT STAYS VISIBLE
              </p>
              <h3 className="font-heading text-2xl leading-tight tracking-[-0.03em] text-[#292722] sm:text-3xl">
                Growth is a handoff, not a hope
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#77736B] sm:text-base">
                Most pipelines leak between the ad, the website, and the person
                who is supposed to call back. The system exists so each step
                passes a complete lead to the next one.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {guarantees.map((item) => (
                <li
                  key={item.title}
                  className="rounded-[20px] border border-[#D9D3C5] bg-[#FBFAF6] p-5 sm:p-6"
                >
                  <h4 className="text-base font-bold text-[#19181A]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-[1.55] text-[#68656D]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[20px] border border-[#D9D3C5] bg-[#19181A] px-6 py-8 text-white sm:mt-12 sm:flex-row sm:items-center sm:px-8 sm:py-10">
            <div className="max-w-[640px]">
              <h3 className="font-heading text-2xl leading-tight tracking-[-0.03em] sm:text-3xl">
                Find the step where enquiries stall
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#C8C2B6] sm:text-base">
                Tell us how leads arrive today and who follows up. We will map
                your current path onto these six steps and show the first fix.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#19181A]"
            >
              Enquire Now
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#19181A] text-white"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                  <path
                    d="M5.5 14.5 14 6m0 0H7m7 0v7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}