import React from "react";
import { ProjectShowcase } from "@/components/ui/project-showcase";

interface Industry {
  title: string;
  description: string;
  alt: string;
}

const INDUSTRIES: Industry[] = [
  {
    title: "Real Estate",
    description:
      "High cost per lead and unqualified buyers wasting site visit schedules.",
    alt: "Modern luxury apartment building at golden hour",
  },
  {
    title: "Schools and Coaching",
    description:
      "Seasonal admission slumps and unanswered parent admission queries.",
    alt: "Students studying together in a bright classroom",
  },
  {
    title: "Healthcare",
    description:
      "Patient drop-offs during booking and fragmented consultation reminders.",
    alt: "Doctor consulting with a patient in a modern clinic",
  },
  {
    title: "Retail",
    description:
      "Low footfall translation and lack of repeat purchase re-engagement.",
    alt: "Busy retail storefront with window displays",
  },
  {
    title: "Startups",
    description:
      "Burning marketing budgets on clicks without building repeatable sales loops.",
    alt: "Startup team collaborating around a whiteboard",
  },
  {
    title: "SMEs",
    description:
      "Disjointed marketing vendors failing to deliver direct client phone calls.",
    alt: "Small business owner managing orders at a desk",
  },
  {
    title: "Local Businesses",
    description:
      "Losing neighborhood visibility to competitors with better Google map setups.",
    alt: "Cozy neighborhood café with warm interior lighting",
  },
  {
    title: "E-Commerce & D2C",
    description:
      "High cart abandonment rates and rising CAC on Meta and Google shopping campaigns.",
    alt: "Person browsing an online store on a laptop",
  },
  {
    title: "Hospitality & Hotels",
    description:
      "Empty rooms during weekdays and over-reliance on OTA commissions eating margins.",
    alt: "Boutique hotel lobby with elegant furnishings",
  },
  {
    title: "Fitness & Gyms",
    description:
      "January sign-up spikes followed by March churn and no re-engagement pipeline.",
    alt: "Modern gym interior with workout equipment",
  },
  {
    title: "Dental & Specialty Clinics",
    description:
      "Expensive Google Ads clicks that never convert into booked chair appointments.",
    alt: "Modern dental clinic reception area",
  },
  {
    title: "Interior Design & Architecture",
    description:
      "Long sales cycles with prospects ghosting after the first mood-board meeting.",
    alt: "Stylish living room interior with natural light",
  },
];

const INDUSTRY_IMAGES: Record<Industry["title"], string> = {
  "Real Estate":
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1280&q=80",
  "Schools and Coaching":
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1280&q=80",
  Healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1280&q=80",
  Retail:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1280&q=80",
  Startups:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1280&q=80",
  SMEs:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1280&q=80",
  "Local Businesses":
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1280&q=80",
  "E-Commerce & D2C":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1280&q=80",
  "Hospitality & Hotels":
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1280&q=80",
  "Fitness & Gyms":
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1280&q=80",
  "Dental & Specialty Clinics":
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1280&q=80",
  "Interior Design & Architecture":
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1280&q=80",
};

export default function Industries() {
  return (
    <section
      id="industries"
      className="w-full bg-[#FAF8F5] px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="rounded-[28px] border border-[#D9D3C5] bg-white/75 p-8 shadow-xs backdrop-blur-sm sm:p-12 md:p-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-16">
            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
              <h2 className="font-serif text-3xl font-normal tracking-tight text-[#171717] sm:text-4xl md:text-[46px] md:leading-[1.14]">
                Built for Businesses
                <br />
                Like Yours
              </h2>
              <p className="mt-5 max-w-[380px] text-sm leading-relaxed text-[#615F5B] sm:text-base">
                We work with twelve types of businesses across India. Here is
                the exact problem we help each one solve.
              </p>
            </div>

            <div className="border-t border-[#D9D3C5] lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:border-t-0">
              <ProjectShowcase
                items={INDUSTRIES.map((item) => ({
                  key: item.title,
                  ...item,
                  image: INDUSTRY_IMAGES[item.title],
                  href: "#contact",
                }))}
              />
            </div>

            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#171717] underline decoration-[#171717] underline-offset-4 transition-colors hover:text-neutral-600 hover:decoration-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171717] sm:text-base"
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
        </div>
      </div>
    </section>
  );
}