
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Growth System", href: "/growth" },
  { name: "Industries", href: "/industries" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "FAQ", href: "/faq" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
  { name: "Career", href: "/career" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const pathname = usePathname();

  // Track active page and sections
  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(pathname);
      return;
    }

    const sectionIds = NAV_LINKS
      .filter((link) => link.href.startsWith("/#"))
      .map((link) => link.href.replace("/#", ""));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveHref(`/#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-100px 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    if (window.scrollY < 100) {
      setActiveHref("/");
    }

    return () => observer.disconnect();
  }, [pathname]);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && activeHref === "/";
    if (href.startsWith("/#")) return pathname === "/" && activeHref === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#D9D3C5]/70 bg-[#FAF8F5]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10 lg:px-14">

          {/* Brand */}
          <Link
            href="/"
            className="group flex shrink-0 select-none items-center gap-3"
            aria-label="GENZ UV Home"
          >
            <Image
              src="/Logo-main.png"
              alt="GENZ UV logo"
              width={48}
              height={48}
              priority
              className="h-12 w-12 rounded-lg bg-black object-contain shadow-sm transition-transform duration-300 group-hover:scale-105"
            />

            <span className="group flex flex-col items-start leading-none">
              <span className="group font-serif text-2xl font-medium tracking-tight text-[#171717] sm:text-[26px]">
                <span>GEN</span><span className='text-slate-800'>Z</span>
                <span className="text-blue-900/70 group-hover:text-shadow-slate-800">UV</span>
              </span>

              <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#5252CF]">
                Ultimate Values
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 lg:flex xl:gap-6"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={active ? "location" : undefined}
                  className={`group relative whitespace-nowrap py-2 text-[12px] font-medium transition-colors duration-200 xl:text-[13px] ${
                    active
                      ? "text-[#171717]"
                      : "text-neutral-600 hover:text-[#252E40]"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-[#252E40] transition-all duration-300 ${
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D9D3C5] text-[#252E40] transition-colors hover:bg-[#EDE9E1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#252E40] lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M6 6l12 12M18 6L6 18"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`grid overflow-hidden border-t border-[#D9D3C5]/70 bg-[#FAF8F5] transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
            mobileMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
          aria-hidden={!mobileMenuOpen}
          inert={!mobileMenuOpen}
        >
          <nav className="min-h-0 overflow-hidden px-6 sm:px-10">
            <div className="mx-auto flex max-w-[1400px] flex-col py-4">
              {NAV_LINKS.map((link, index) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={active ? "location" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between border-b border-[#E5E0D8] py-3.5 text-sm transition-colors duration-200 ${
                      active
                        ? "font-semibold text-[#171717]"
                        : "text-neutral-600 hover:text-[#252E40]"
                    }`}
                  >
                    <span>{link.name}</span>

                    <span
                      className={`text-xs transition-transform duration-200 ${
                        active
                          ? "translate-x-0 text-[#252E40]"
                          : "-translate-x-1 text-neutral-400"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* Header spacing */}
      <div aria-hidden="true" className="h-[84px] shrink-0" />
    </>
  );
}
