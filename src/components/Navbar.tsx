"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Solutions", href: "/solutions", isHighlighted: true },
  { label: "Services", href: "/services", isHighlighted: false },
  { label: "Industries", href: "/industries", isHighlighted: false },
  { label: "Company", href: "/about", isHighlighted: false },
  { label: "Contact us", href: "/contact", isHighlighted: false },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => setIsMenuOpen((prev) => !prev);
  const handleNavigate = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white mb-[13px]">
      <div className="mx-auto relative flex h-[115px] max-w-[1440px] w-full items-center justify-between px-[32px] py-[36px]">
        <Link
          href="/"
          className="flex items-center flex-shrink-0 m-0"
          aria-label="Nexobots home"
          onClick={handleNavigate}
        >
          <Image
            src="/nexobots-logo.svg"
            alt="Nexobots"
            width={162}
            height={30}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-[40px] lg:flex absolute left-1/2 -translate-x-1/2" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleNavigate}
              className={`px-[6px] py-[10px] font-display text-[18px] font-bold capitalize break-words transition-colors duration-200 whitespace-nowrap ${
                link.isHighlighted
                  ? "text-[#333333]"
                  : "text-black opacity-80 hover:opacity-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/contact"
            onClick={handleNavigate}
            className="hidden rounded-[10px] border border-[#C4C4C4] bg-white px-[26px] py-[12px] font-sans text-[14px] font-semibold text-[rgba(228,29,40,0.79)] break-words transition hover:bg-[#F7F7F7] lg:inline-flex items-center justify-center gap-[10px]"
          >
            Get a Free Quote
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[#C4C4C4] px-4 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.32em] text-black transition hover:bg-[#F7F7F7] lg:hidden"
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            onClick={handleToggle}
          >
            Menu
            <svg
              viewBox="0 0 12 12"
              className="h-3 w-3 stroke-black"
              fill="none"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                d={
                  isMenuOpen
                    ? "M2 2l8 8M10 2L2 10"
                    : "M1 3h10M1 6h10M1 9h10"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-[#E5E5E5] bg-white px-6 py-4 lg:hidden"
        >
          <nav
            className="flex flex-col gap-4"
            aria-label="Primary mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleNavigate}
                className="font-display text-[#333333] text-[18px] font-bold capitalize break-words transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={handleNavigate}
              className="rounded-[10px] border border-[#C4C4C4] px-[26px] py-3 font-sans text-[14px] font-semibold text-[rgba(228,29,40,0.79)] break-words"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;

