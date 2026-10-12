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
          <span className={`${textColor} mb-5 text-4xl`}>
            {number}
          </span>
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
        className={`relative bg-white px-8 max-md:pt-10 max-md:pb-25 md:py-20 ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
            backgroundSize: "100% 32px",
            marginTop: "4px",
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <header className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl leading-[1.15] font-medium tracking-[-0.015em] text-[#15141A] sm:text-[44px]">
              The GENZ UV Growth System
            </h2>
            <p className="mt-4 text-base leading-6 text-[#5E5B66]">
              A simple six-step path from first click to growth. You always know
              what happens next.
            </p>
          </header>
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
        </div>
      </section>
    </LazyMotion>
  );
}
