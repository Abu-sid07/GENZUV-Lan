"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full overflow-hidden bg-[#FAF8F5] px-6 pt-16 pb-28 text-center sm:pt-24 sm:pb-36 md:pt-28 md:pb-40">
        <div className="mx-auto max-w-[1200px]">
          {/* Main Headline */}
          <m.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl font-normal tracking-[-0.025em] text-[#19181A] sm:text-7xl md:text-8xl lg:text-[96px] lg:leading-[1.04]"
          >
            Build Your Brand.
            <br />
            Automate Your Growth.
          </m.h1>

          {/* Primary Subtitle */}
          <m.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-[680px] text-base font-medium leading-relaxed text-[#1F1F1F] sm:mt-10 sm:text-lg md:text-[21px]"
          >
            Digital marketing and AI automation for businesses that want more enquiries
            on WhatsApp and calls.
          </m.p>

          {/* Secondary Description */}
          <m.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-[560px] text-[13.5px] leading-relaxed text-[#615F5B] sm:text-[15px]"
          >
            GENZ UV helps you get found, get enquiries and follow up on every lead. We handle the
            marketing and the automation, so you can focus on running your business.
          </m.p>

          {/* CTA Buttons Row */}
          <m.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-6"
          >
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-[#1EA952] px-6 py-3.5 text-[15px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#189146] hover:shadow-md focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.88 6.09C19.44 7.65 20.3 9.72 20.3 11.92C20.29 16.46 16.59 20.15 12.04 20.15ZM16.57 14.33C16.32 14.21 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.3 13.65C14.13 13.9 13.64 14.48 13.49 14.65C13.34 14.82 13.19 14.84 12.94 14.72C12.69 14.59 11.89 14.33 10.94 13.48C10.2 12.82 9.7 12 9.55 11.75C9.4 11.5 9.53 11.37 9.66 11.24C9.77 11.13 9.91 10.95 10.03 10.81C10.15 10.67 10.19 10.56 10.27 10.4C10.35 10.23 10.31 10.09 10.25 9.97C10.19 9.84 9.69 8.62 9.48 8.12C9.28 7.63 9.07 7.7 8.91 7.69C8.76 7.68 8.59 7.68 8.42 7.68C8.25 7.68 7.97 7.74 7.74 7.99C7.51 8.24 6.86 8.85 6.86 10.09C6.86 11.33 7.77 12.52 7.9 12.69C8.03 12.86 9.69 15.42 12.23 16.52C12.83 16.78 13.3 16.94 13.67 17.06C14.28 17.25 14.83 17.22 15.27 17.16C15.76 17.09 16.77 16.55 16.98 15.96C17.19 15.37 17.19 14.87 17.13 14.76C17.07 14.65 16.82 14.46 16.57 14.33Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            {/* Call Us Now Button */}
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2.5 rounded-lg border border-[#3E3C38] bg-transparent px-6 py-3.5 text-[15px] font-medium text-[#1A1918] transition-all duration-200 hover:bg-white/60 focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call Us Now</span>
            </a>

            {/* Send an Enquiry Link */}
            <a
              href="#contact"
              className="inline-flex items-center px-2 py-2 text-[15px] font-medium text-[#1A1918] underline underline-offset-4 decoration-[#1A1918] transition-colors duration-200 hover:text-neutral-600 hover:decoration-neutral-600"
            >
              Send an Enquiry
            </a>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
