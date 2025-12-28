import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Solutions",
    links: [
      { label: "Smart Network", href: "/solution-4" },
      { label: "Infrastructure CCTV Solutions", href: "/solution-1" },
      { label: "Secure access & Biometrics", href: "/solution-3" },
      { label: "End to end IT Services", href: "/solution-2" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "IT Infrastructure Consulting", href: "/service-1" },
      { label: "System Integration", href: "/service-2" },
      { label: "AMC Support", href: "/service-3" },
      { label: "Cloud & Virtualization support", href: "/service-4" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Corporate & Enterprises", href: "/industries" },
      { label: "Education & Research", href: "/industries" },
      { label: "Healthcare & Pharma", href: "/industries" },
      { label: "Retail & Hospitality", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Blogs", href: "/blog" },
      { label: "News & Media", href: "#" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
] as const;

const socialLinks = [
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "X (Twitter)", href: "#", Icon: XIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
] as const;

export function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-12 sm:px-6 sm:py-16 md:px-12 lg:px-[72px] lg:pt-[115px] lg:pb-[142px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid gap-10 sm:gap-12 lg:gap-[80px] lg:grid-cols-[325px_1fr] mb-12 lg:mb-[89px]">
          {/* Logo & Social Section */}
          <div className="space-y-0 text-center sm:text-left">
            <Image
              src="/nexobots-logo-white.svg"
              alt="Nexobots"
              width={182}
              height={34}
              priority
              className="h-auto w-[140px] sm:w-[160px] lg:w-[182px] mb-6 lg:mb-[38px] mx-auto sm:mx-0"
            />
            <div className="space-y-0 text-center sm:text-left mb-4 lg:mb-[12px] max-w-[280px] mx-auto sm:mx-0">
              <p className="font-['Manrope'] text-xs sm:text-sm lg:text-[14px] font-medium leading-[1.366] text-white mb-0">
                nexobots Technologies LLP
              </p>
              <p className="font-['Manrope'] text-xs sm:text-sm lg:text-[14px] font-medium leading-[1.366] text-white mt-0">
                India's leading provider of structured cabling, networking, surveillance, biometric access, and managed IT services
              </p>
            </div>
            <p className="font-['TASA_Orbiter'] text-sm sm:text-base lg:text-[16px] font-medium leading-[1.3] tracking-[-0.03em] text-white mb-4 lg:mb-[25px]">
              Connect with Us
            </p>
            <div className="flex gap-2 sm:gap-[9px] justify-center sm:justify-start">
              {socialLinks.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-10 sm:h-[37px] sm:w-[41px] items-center justify-center rounded-[6px] border border-[#262626] bg-[#1D1D1D] transition hover:bg-[#262626]"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:gap-[100px] lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-0">
                <h4 className="font-['TASA_Orbiter'] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-medium leading-[1.2] text-white mb-4 sm:mb-5 lg:mb-[24px]">
                  {column.title}
                </h4>
                <ul className="space-y-0 flex flex-col gap-3 sm:gap-4 lg:gap-[34px]">
                  {column.links.map((link) => (
                    <li key={typeof link === 'string' ? link : link.label} className="m-0">
                      <Link
                        href={typeof link === 'string' ? '#' : link.href}
                        className="font-['Manrope'] text-xs sm:text-sm lg:text-[14px] font-medium leading-[1.366] text-[#9C9C9C] transition hover:text-white"
                      >
                        {typeof link === 'string' ? link : link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 text-center py-6 sm:py-8 lg:py-[36px]">
          <p className="font-['Manrope'] text-xs sm:text-sm lg:text-[16px] leading-[1.25] text-white">
            <span className="block sm:inline">Copyright © {new Date().getFullYear()} Nexobots</span>
            <span className="hidden sm:inline">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <span className="block sm:inline mt-1 sm:mt-0">All Rights Reserved</span>
            <span className="hidden sm:inline">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <span className="block sm:inline mt-1 sm:mt-0">Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 text-[#98989A]"
    >
      <path
        d="M4.6 7.08h-3.1V18h3.1V7.08Zm.2-3.69c0-.92-.76-1.66-1.8-1.66S1.2 2.46 1.2 3.39c0 .92.76 1.66 1.8 1.66 1.04 0 1.8-.74 1.8-1.66Zm6.59 3.31c-1.66 0-2.4.92-2.81 1.56h-.04V7.08H6.1c.04.86 0 10.92 0 10.92h3.1V12.3c0-.31.02-.62.11-.84.24-.62.78-1.26 1.69-1.26 1.19 0 1.66.95 1.66 2.34V18h3.1v-5.05c0-2.7-1.43-3.95-3.33-3.95Z"
        fill="currentColor"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 text-[#98989A]"
    >
      <path
        d="M4 4h2.7l4.2 5.07L15.1 4h2.9l-5.02 6.13L18 16h-2.7l-4.48-5.42L6.08 16H3.2l5.11-6.26L4 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4 text-[#98989A]"
    >
      <path
        d="M6.4 2h7.2C16.6 2 18 3.4 18 6.4v7.2c0 3-1.4 4.4-4.4 4.4H6.4C3.4 18 2 16.6 2 13.6V6.4C2 3.4 3.4 2 6.4 2Zm-.1 1.9c-1.82 0-2.4.58-2.4 2.4v7.4c0 1.82.58 2.4 2.4 2.4h7.4c1.82 0 2.4-.58 2.4-2.4V6.3c0-1.82-.58-2.4-2.4-2.4H6.3Zm3.7 2.8a3.82 3.82 0 1 1 0 7.64 3.82 3.82 0 0 1 0-7.64Zm0 1.9a1.92 1.92 0 1 0 0 3.84 1.92 1.92 0 0 0 0-3.84Zm4.06-2.57a.89.89 0 1 1 0 1.78.89.89 0 0 1 0-1.78Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Footer;

