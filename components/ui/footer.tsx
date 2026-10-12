import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F5] px-6 pt-10 pb-12 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1240px]">
        {/* Production Engineering & Motion Specifications Box */}
        <div className="rounded-2xl border border-[#D9D3C5] bg-[#EDE8DE]/90 p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-[#5252CF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            <h4 className="text-[11px] font-bold tracking-[0.16em] text-[#2B2925] uppercase">
              PRODUCTION ENGINEERING & MOTION SPECIFICATIONS
            </h4>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {/* Spec 1 */}
            <div>
              <h5 className="text-[12px] font-bold text-[#19181A]">
                1. Micro-Parallax:
              </h5>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-[#5F5C56]">
                Hook GSAP ScrollTrigger to #hero-showcase-container: Frame A [0-30%], Frame B [30-70%], Frame C [70-100%]. Scale outer-limit 1.1x with opacity fade-out; lock central title at easeInOutOfBounds.
              </p>
            </div>

            {/* Spec 2 */}
            <div>
              <h5 className="text-[12px] font-bold text-[#19181A]">
                2. Hover Feedback:
              </h5>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-[#5F5C56]">
                Strict zero-drop-shadow rule maintained; interactive depth signaled exclusively via border color transformation from #D9D3C5 to #19181A and 14px arrow button 45-degree diagonal slide.
              </p>
            </div>

            {/* Spec 3 */}
            <div>
              <h5 className="text-[12px] font-bold text-[#19181A]">
                3. Color Stratification:
              </h5>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-[#5F5C56]">
                Level 0 canvas at #FAF8F5. Level 1 sections at #FBFAF6. Level 2 active cards at #FBFAF6. Clean 1px hairlines define all perimeter bounds.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="mt-16 grid grid-cols-1 gap-12 pt-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Info & Address */}
          <div className="lg:col-span-5">
            <a href="#" className="flex flex-col items-start leading-none select-none">
              <span className="font-serif text-2xl font-medium tracking-tight text-[#171717]">
                GENZ UV
              </span>
              <span className="mt-1 text-[9px] font-bold tracking-[0.25em] text-[#5252CF] uppercase">
                ULTIMATE VALUES
              </span>
            </a>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#5F5C56]">
              Digital marketing and AI automation for businesses in India.
            </p>

            <div className="mt-8 space-y-1.5">
              <p className="text-[10px] font-bold tracking-[0.18em] text-[#8C8880] uppercase">
                CONTACT INQUIRIES
              </p>
              <p className="text-xs text-[#5F5C56]">
                Address: Remote - Serving the global People
              </p>
              <p className="text-xs text-[#5F5C56]">
                Phone:{" "}
                <a
                  href="tel:+919566160862"
                  className="font-medium text-[#19181A] underline decoration-neutral-400 hover:decoration-[#19181A]"
                >
                  +91 95661 60862
                </a>
              </p>
              <p className="text-xs text-[#5F5C56]">
                Email:{" "}
                <a
                  href="mailto:genzuv0@gmail.com"
                  className="font-medium text-[#19181A] underline decoration-neutral-400 hover:decoration-[#19181A]"
                >
                  genzuv0@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Index (2 columns) */}
          <div className="lg:col-span-4">
            <h5 className="text-[10.5px] font-bold tracking-[0.18em] text-[#19181A] uppercase">
              NAVIGATION INDEX
            </h5>
            <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
              <div className="flex flex-col space-y-2.5">
                <a href="#" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  Home
                </a>
                <a href="#about" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  About
                </a>
                <a href="#services" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  Services
                </a>
                <a href="#growth" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  Growth System
                </a>
                <a href="#testimonials" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  Testimonials
                </a>
                <a href="#contact" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  Contact
                </a>
              </div>
              <div className="flex flex-col space-y-2.5">
                <a href="#portfolio" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  Portfolio
                </a>
                <a href="#team" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  Team
                </a>
                {/* <a href="#blog" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  Blog
                </a>
                <a href="#faq" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  FAQ
                </a> */}
                <a href="#industries" className="text-[#5F5C56] transition-colors hover:text-[#19181A]">
                  Industries
                </a>
              </div>
            </div>
          </div>

          {/* Channels & Network */}
          <div className="lg:col-span-3">
            <h5 className="text-[10.5px] font-bold tracking-[0.18em] text-[#19181A] uppercase">
              CHANNELS & NETWORK
            </h5>
            <div className="mt-4 flex flex-col space-y-3 text-xs">
              <a
                href="https://genzuv.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#5F5C56] transition-colors hover:text-[#19181A]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                <span>Website (genzuv.in)</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#5F5C56] transition-colors hover:text-[#19181A]"
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
                className="inline-flex items-center gap-2 text-[#5F5C56] transition-colors hover:text-[#19181A]"
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
                className="inline-flex items-center gap-2 text-[#5F5C56] transition-colors hover:text-[#19181A]"
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
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#D9D3C5] pt-8 text-[11.5px] text-[#8C8880] sm:flex-row">
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:text-[#19181A]">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#19181A]">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-[#19181A]">Security & Compliance</a>
          </div>
          <p>© 2026 GENZ UV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
