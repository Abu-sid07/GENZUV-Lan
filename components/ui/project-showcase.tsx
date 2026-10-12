"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";

export interface ShowcaseItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

interface ProjectShowcaseProps {
  items: ShowcaseItem[];
}

export function ProjectShowcase({ items }: ProjectShowcaseProps) {
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);
  const x = useSpring(useMotionValue(24), { stiffness: 260, damping: 28 });
  const y = useSpring(useMotionValue(24), { stiffness: 260, damping: 28 });

  const updatePosition = (clientX: number, clientY: number) => {
    x.set(clientX + 10);
    y.set(clientY + 10);
  };

  return (
    <div
      className="relative"
      onMouseMove={(event) => updatePosition(event.clientX, event.clientY)}
      onMouseLeave={() => setActiveItem(null)}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-50 hidden overflow-hidden rounded-xl shadow-2xl lg:block"
        style={{ left: x, top: y }}
        animate={{
          opacity: activeItem ? 1 : 0,
          scale: activeItem ? 1 : 0.85,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="relative h-[180px] w-[280px] overflow-hidden rounded-xl bg-[#E9E5DD]">
          {activeItem && (
            <Image
              src={activeItem.image}
              alt=""
              fill
              sizes="280px"
              unoptimized
              className="object-cover"
            />
          )}
        </div>
      </motion.div>

      <ul className="divide-y divide-[#D9D3C5]">
        {items.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              onMouseEnter={() => setActiveItem(item)}
              onFocus={(event) => {
                setActiveItem(item);
                const bounds = event.currentTarget.getBoundingClientRect();
                updatePosition(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2);
              }}
              onBlur={() => setActiveItem(null)}
              className="group flex items-center justify-between gap-3 py-5 transition-colors duration-150 hover:bg-neutral-100/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717] sm:gap-4 sm:py-6"
            >
              <div className="min-w-0 flex-1 pr-1">
                <div className="inline-flex items-center gap-2">
                  <h3 className="font-serif text-lg font-medium text-[#171717] sm:text-[19px]">
                    <span className="relative">
                      {item.title}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-0 h-px bg-[#171717] transition-[width] duration-300 ease-out ${
                          activeItem?.title === item.title ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                  </h3>
                  <svg
                    aria-hidden="true"
                    className={`h-4 w-4 text-neutral-500 transition-all duration-300 ease-out ${
                      activeItem?.title === item.title
                        ? "translate-x-0 translate-y-0 opacity-100"
                        : "-translate-x-2 translate-y-2 opacity-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#615F5B] sm:text-[13.5px]">
                  {item.description}
                </p>
              </div>

              <Image
                src={item.image}
                alt={`${item.title} industry`}
                width={96}
                height={64}
                unoptimized
                className="h-12 w-16 shrink-0 rounded-md object-cover sm:h-16 sm:w-24 lg:hidden"
              />

              <div className="shrink-0 text-neutral-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#171717]">
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
  );
}
