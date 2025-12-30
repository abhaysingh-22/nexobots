"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavDropdown } from "./NavDropdown";

const navLinks = [
  { label: "Industries", href: "/industries", isHighlighted: false },
  // { label: "Company", href: "/about", isHighlighted: false },
  { label: "Contact us", href: "/contact", isHighlighted: false },
] as const;

const ServiceDropDownLinks = [
  { label: "IT Infrastructure Consulting", href: "/service-1" },
  { label: "Annual Maintenance & Support (AMC)", href: "/service-2" },
  { label: "System Integration", href: "/service-3" },
  { label: "Cloud & Virtualization Support", href: "/service-4" },
] as const;

const SolutionDropDownLinks = [
  { label: "Smart Structured Cabling Solutions", href: "/solution-1" },
  { label: "IT Infrastructure & Managed Services", href: "/solution-2" },
  { label: "CCTV & Intelligent Surveillance Solutions", href: "/solution-3" },
  { label: "Biometric & Access Control Solutions", href: "/solution-4" },
] as const;

const CompanyDropDownLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        setIsMobileSolutionsOpen(false);
        setIsMobileServicesOpen(false);
        setIsMobileCompanyOpen(false);
      }
      return next;
    });
  };

  const handleNavigate = () => {
    setIsMenuOpen(false);
    setIsMobileSolutionsOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileCompanyOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
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
          <NavDropdown
            label="Solutions"
            primaryLink="/solutions"
            links={SolutionDropDownLinks}
            isHighlighted={true}
            onNavigate={handleNavigate}
          />
          <NavDropdown
            label="Services"
            primaryLink="/services"
            links={ServiceDropDownLinks}
            onNavigate={handleNavigate}
          />
          <Link
            href='/industries'
            onClick={handleNavigate}
            className={`px-[6px] py-[10px] font-display text-[18px] font-bold capitalize break-words transition-colors duration-200 whitespace-nowrap `}
          >
            Industries
          </Link>
          <NavDropdown
            label="Company"
            primaryLink="/about"
            links={CompanyDropDownLinks}
            onNavigate={handleNavigate}
          />
          <Link
            href='/contact'
            onClick={handleNavigate}
            className={`px-[6px] py-[10px] font-display text-[18px] font-bold capitalize break-words transition-colors duration-200 whitespace-nowrap `}
          >
            Contact us
          </Link>

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
            className="inline-flex items-center gap-2 px-4 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.32em] text-black transition hover:bg-[#F7F7F7] lg:hidden"
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            onClick={handleToggle}
          >
            <Image src="/hamburger.png" alt="Menu" width={24} height={24} />
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
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div
                  className={`flex w-full items-center justify-between gap-3 rounded-[10px] px-3 py-3 transition hover:bg-[#F7F7F7] ${isMobileSolutionsOpen ? "bg-[#F7F7F7]" : ""
                    }`}
                >
                  <Link
                    href="/solutions"
                    onClick={handleNavigate}
                    className="flex-1 font-display text-ink-soft text-[18px] font-bold capitalize wrap-break-word"
                  >
                    Solutions
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMobileSolutionsOpen((prev) => !prev)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] transition hover:bg-white"
                    aria-expanded={isMobileSolutionsOpen}
                    aria-controls="mobile-solutions"
                    aria-label="Toggle Solutions menu"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`transition-transform duration-200 ${isMobileSolutionsOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {isMobileSolutionsOpen ? (
                  <div
                    id="mobile-solutions"
                    className="mt-2 flex flex-col gap-1 rounded-[10px] border border-[#E5E5E5] bg-[#F7F7F7] p-2"
                  >
                    {SolutionDropDownLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleNavigate}
                        className="flex items-start rounded-lg px-3 py-2.5 font-sans text-[14px] font-medium leading-snug text-ink-soft transition hover:bg-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <div
                  className={`flex w-full items-center justify-between gap-3 rounded-[10px] px-3 py-3 transition hover:bg-[#F7F7F7] ${isMobileServicesOpen ? "bg-[#F7F7F7]" : ""
                    }`}
                >
                  <Link
                    href="/services"
                    onClick={handleNavigate}
                    className="flex-1 font-display text-ink-soft text-[18px] font-bold capitalize wrap-break-word"
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] transition hover:bg-white"
                    aria-expanded={isMobileServicesOpen}
                    aria-controls="mobile-services"
                    aria-label="Toggle Services menu"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {isMobileServicesOpen ? (
                  <div
                    id="mobile-services"
                    className="mt-2 flex flex-col gap-1 rounded-[10px] border border-[#E5E5E5] bg-[#F7F7F7] p-2"
                  >
                    {ServiceDropDownLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleNavigate}
                        className="flex items-start rounded-lg px-3 py-2.5 font-sans text-[14px] font-medium leading-snug text-ink-soft transition hover:bg-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <div
                  className={`flex w-full items-center justify-between gap-3 rounded-[10px] px-3 py-3 transition hover:bg-[#F7F7F7] ${isMobileCompanyOpen ? "bg-[#F7F7F7]" : ""
                    }`}
                >
                  <Link
                    href="/about"
                    onClick={handleNavigate}
                    className="flex-1 font-display text-ink-soft text-[18px] font-bold capitalize wrap-break-word"
                  >
                    Company
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMobileCompanyOpen((prev) => !prev)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] transition hover:bg-white"
                    aria-expanded={isMobileCompanyOpen}
                    aria-controls="mobile-company"
                    aria-label="Toggle Company menu"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`transition-transform duration-200 ${isMobileCompanyOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {isMobileCompanyOpen ? (
                  <div
                    id="mobile-company"
                    className="mt-2 flex flex-col gap-1 rounded-[10px] border border-[#E5E5E5] bg-[#F7F7F7] p-2"
                  >
                    {CompanyDropDownLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleNavigate}
                        className="flex items-start rounded-lg px-3 py-2.5 font-sans text-[14px] font-medium leading-snug text-ink-soft transition hover:bg-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleNavigate}
                className="flex w-full items-center justify-between gap-3 rounded-[10px] px-3 py-3 font-display text-ink-soft text-[18px] font-bold capitalize wrap-break-word transition hover:bg-[#F7F7F7]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={handleNavigate}
              className="mt-1 inline-flex w-full items-center justify-center rounded-[10px] border border-[#C4C4C4] bg-white px-6 py-3 font-sans text-[14px] font-semibold text-red-primary-soft wrap-break-word transition hover:bg-[#F7F7F7]"
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

