import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 bg-[#19181A] text-white">
      <div className="mx-auto max-w-[1240px] px-6 pt-16 pb-12 sm:px-10 lg:px-16">
        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand Info & Address */}
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-3 leading-none select-none">
              <Image
                src="/Logo-main.png"
                alt="GENZ UV logo"
                width={56}
                height={56}
                className="h-12 w-12 rounded-lg object-cover shadow-sm"
              />
              <span className="flex flex-col items-start">
                <span className="font-serif text-2xl font-medium tracking-tight text-white sm:text-[26px]">
                  GENZ UV
                </span>
                <span className="mt-1 text-[9px] font-bold tracking-[0.25em] text-[#818CF8] uppercase">
                  ULTIMATE VALUES
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#A8A49C]">
              Digital marketing and AI automation for businesses in India.
            </p>

            <div className="mt-8 space-y-2">
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#78746C] uppercase">
                CONTACT INQUIRIES
              </p>
              <p className="text-xs text-[#A8A49C]">
                Address: Remote - Serving the global People
              </p>
              <p className="text-xs text-[#A8A49C]">
                Phone:{" "}
                <a
                  href="tel:+919566180862"
                  className="font-medium text-white underline decoration-neutral-600 hover:decoration-white"
                >
                  +91 9566180862
                </a>
              </p>
              <p className="text-xs text-[#A8A49C]">
                Email:{" "}
                <a
                  href="mailto:genzuv0@gmail.com"
                  className="font-medium text-white underline decoration-neutral-600 hover:decoration-white"
                >
                  genzuv0@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Index (2 columns) */}
          <div className="lg:col-span-4">
            <h5 className="text-[10.5px] font-bold tracking-[0.18em] text-white uppercase">
              NAVIGATION INDEX
            </h5>
            <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
              <div className="flex flex-col space-y-2.5">
                <a href="#" className="text-[#A8A49C] transition-colors hover:text-white">
                  Home
                </a>
                <a href="#about" className="text-[#A8A49C] transition-colors hover:text-white">
                  About
                </a>
                <a href="#services" className="text-[#A8A49C] transition-colors hover:text-white">
                  Services
                </a>
                <a href="#growth" className="text-[#A8A49C] transition-colors hover:text-white">
                  Growth System
                </a>
                <a href="#testimonials" className="text-[#A8A49C] transition-colors hover:text-white">
                  Testimonials
                </a>
                <a href="#contact" className="text-[#A8A49C] transition-colors hover:text-white">
                  Contact
                </a>
              </div>
              <div className="flex flex-col space-y-2.5">
                <a href="#portfolio" className="text-[#A8A49C] transition-colors hover:text-white">
                  Portfolio
                </a>
                <a href="#team" className="text-[#A8A49C] transition-colors hover:text-white">
                  Team
                </a>
                <a href="#industries" className="text-[#A8A49C] transition-colors hover:text-white">
                  Industries
                </a>
              </div>
            </div>
          </div>

          {/* Channels & Network */}
          <div className="lg:col-span-3">
            <h5 className="text-[10.5px] font-bold tracking-[0.18em] text-white uppercase">
              CHANNELS & NETWORK
            </h5>
            <div className="mt-4 flex flex-col space-y-3 text-xs">
              <a
                href="https://genzuv.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#A8A49C] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                <span>Website (genzuv.in)</span>
              </a>

              <a
                href="https://www.linkedin.com/company/genzuv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#A8A49C] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.37 9.74v-8.37H5.1v8.37h2.73z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#A8A49C] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#A8A49C] transition-colors hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-800/80 pt-8 text-[11.5px] text-[#78746C] sm:flex-row">
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Security & Compliance</a>
          </div>
          <p>© 2026 GENZ UV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
