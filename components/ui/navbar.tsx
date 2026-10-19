"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Growth System", href: "#growth" },
  { name: "Industries", href: "#industries" },
  { name: "Portfolio", href: "#portfolio" },
  // { name: "Blog", href: "#blog" },
  { name: "FAQ", href: "#faq" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector<HTMLElement>(link.href)
    ).filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const activationLine = 120;
      const currentSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= activationLine && bounds.bottom > activationLine;
      });

      if (currentSection?.id) {
        setActiveHref(`#${currentSection.id}`);
      } else if (window.scrollY < 120) {
        setActiveHref("#home");
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full bg-[#FAF8F5]">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 select-none">
          <Image
            src="/Logo-main.png"
            alt="GENZ UV logo"
            width={48}
            height={48}
            className="h-15 w-15 rounded-lg  shadow-sm bg-black"
            priority
          />
          <span className="flex flex-col items-start leading-none">
            <span className="font-serif text-2xl font-medium tracking-tight text-[#171717] sm:text-[26px]">
              GENZ UV
            </span>
            <span className="mt-1 text-[9px] font-bold tracking-[0.25em] text-[#5252CF] uppercase">
              ULTIMATE VALUES
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-current={activeHref === link.href ? "location" : undefined}
              className={`relative py-1 text-[13.5px] font-medium transition-colors duration-150 ${
                activeHref === link.href
                  ? "text-[#171717]"
                  : "text-neutral-700 hover:text-neutral-950"
              }`}
            >
              {link.name}
              {activeHref === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-black" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-700 hover:bg-neutral-200/50 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-[#E5E0D8] bg-[#FAF8F5] px-6 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={activeHref === link.href ? "location" : undefined}
                className={`relative w-fit py-1 text-sm font-medium ${
                  activeHref === link.href
                    ? "font-semibold text-[#171717] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-black"
                    : "text-neutral-700 hover:text-neutral-900"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
      </header>
      <div aria-hidden="true" className="h-24 shrink-0" />
    </>
  );
}
