"use client";

import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <section id="team" className="w-full bg-[#FAF8F5] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl md:text-[44px] md:leading-[1.18]">
            Meet the creative minds
            <br />
            behind our success
          </h2>
        </div>

        {/* Founder Card (Centered) */}
        <div className="mt-14 flex justify-center sm:mt-16">
          <div className="group flex flex-col items-center text-center">
            {/* Image Container with arch silhouette */}
            <div className="relative h-[320px] w-[260px] overflow-hidden rounded-t-[130px] rounded-b-2xl bg-[#F08D58]/10 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 sm:h-[360px] sm:w-[290px]">
              <Image
                src="/team/founder.png"
                alt="Mohamed Uvaiz - Founder"
                fill
                priority
                className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 260px, 290px"
              />
            </div>

            {/* Information */}
            <h3 className="mt-5 text-lg font-bold text-[#171717] sm:text-xl">
              Mohamed Uvaiz
            </h3>
            <p className="mt-0.5 text-xs font-medium text-neutral-500 sm:text-sm">
              Founder
            </p>

            {/* Social Links */}
            <div className="mt-4 flex items-center justify-center gap-2.5">
              {/* Website */}
              <a
                href="https://www.genzuv.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9D3C5] bg-white/80 text-neutral-700 shadow-xs transition-colors duration-150 hover:border-neutral-900 hover:bg-white hover:text-black"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohamed-uvaiz-782538390/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9D3C5] bg-white/80 text-neutral-700 shadow-xs transition-colors duration-150 hover:border-neutral-900 hover:bg-white hover:text-[#0A66C2]"
              >
                <svg
                  className="h-3.5 w-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.37 9.74v-8.37H5.1v8.37h2.73z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
