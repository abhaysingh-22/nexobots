// src/components/NavDropdown.tsx
"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface DropdownLink {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  primaryLink?: string;
  links: readonly DropdownLink[];
  isHighlighted?: boolean;
  onNavigate?: () => void;
}

export function NavDropdown({ label, links, isHighlighted, onNavigate, primaryLink }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine if this is a small dropdown (2 items or less) or full width (4+ items)
  const isSmallDropdown = links.length <= 2;

  const leftLinks = links.filter((_, index) => index % 2 === 0);
  const rightLinks = links.filter((_, index) => index % 2 === 1);

  // Close dropdown on Escape for keyboard users
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    if (isOpen) document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    onNavigate?.();
  };

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={primaryLink || "#"}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-2 px-1.5 py-2.5 font-display text-[18px] font-bold capitalize wrap-break-word transition-colors duration-200 whitespace-nowrap  ${
          isHighlighted
            ? "text-ink-soft"
            : "text-black opacity-80 hover:opacity-100"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {isOpen && (
        <>
          {/* Hover bridge so the menu doesn't close while moving cursor down */}
          <div
            className={`absolute top-full z-40 h-4 ${
              isSmallDropdown 
                ? "left-0 w-[400px]" 
                : "fixed left-0 right-0 w-full"
            }`}
            aria-hidden="true"
          />

          <div
            className={`z-50 mt-4 rounded-[10px] border border-[#E5E5E5] bg-white shadow-lg ${
              isSmallDropdown 
                ? "absolute top-full left-0 w-[400px] animate-dropdown-small-in" 
                : "fixed top-[50px] left-1/2 w-[98vw] animate-dropdown-in"
            }`}
            role="menu"
            aria-label={`${label} menu`}
          >
            <div className={`grid gap-6 p-6 ${isSmallDropdown ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
              <div className="flex flex-col gap-3">
                {leftLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="group flex items-center justify-between gap-4 rounded-[10px] px-4 py-4 transition-colors hover:bg-[#F7F7F7]"
                    role="menuitem"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-gray-ed" aria-hidden="true" />
                      <span className="font-sans text-[14px] font-semibold text-ink-soft">
                        {link.label}
                      </span>
                    </div>

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-ink-soft transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                ))}
              </div>

              {!isSmallDropdown && rightLinks.length > 0 && (
                <div className="flex flex-col gap-3">
                  {rightLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="group flex items-center justify-between gap-4 rounded-[10px] px-4 py-4 transition-colors hover:bg-[#F7F7F7]"
                      role="menuitem"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 shrink-0 rounded-lg bg-gray-ed" aria-hidden="true" />
                        <span className="font-sans text-[14px] font-semibold text-ink-soft">
                          {link.label}
                        </span>
                      </div>

                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-ink-soft transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 4L10 8L6 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              )}

              {isSmallDropdown && rightLinks.length > 0 && rightLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group flex items-center justify-between gap-4 rounded-[10px] px-4 py-4 transition-colors hover:bg-[#F7F7F7]"
                  role="menuitem"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-gray-ed" aria-hidden="true" />
                    <span className="font-sans text-[14px] font-semibold text-ink-soft">
                      {link.label}
                    </span>
                  </div>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-ink-soft transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 4L10 8L6 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}