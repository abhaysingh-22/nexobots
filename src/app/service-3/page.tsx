"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import { useState, useEffect } from "react";

const benefitCards = [
  {
    title: "Proactive Monitoring & Maintenance",
    description:
      "Detects issues early and prevents downtime with continuous infrastructure oversight.",
  },
  {
    title: "Certified Multi-Vendor Expertise",
    description:
      "OEM-certified engineers ensure seamless support across all IT environments.",
  },
  {
    title: "SLA-Driven Reliability & Accountability",
    description:
      "Defined response times and uptime commitments deliver predictable performance.",
  },
  {
    title: "Pan-India Field & Remote Support",
    description:
      "180+ city presence enables quick onsite and NOC-based remote service.",
  },
  {
    title: "End-to-End IT Lifecycle Management",
    description:
      "Covers installation, optimization, and upgrades for maximum infrastructure value",
  },
] as const;

const amcServices = [
  "Preventive maintenance and scheduled inspections",
  "On-call troubleshooting and emergency support",
  "Spare parts and component replacements (as per SLA)",
  "Network health audits and documentation",
  "Firmware and software patch updates",
] as const;

const managedServices = [
  "24/7 Network & Server Monitoring (NOC Support)",
  "Remote & Onsite IT Support",
  "Patch, Backup & Configuration Management",
  "Security Monitoring & Threat Mitigation",
  "Performance Optimization & Reporting",
] as const;

const lifecycleServices = [
  "Asset discovery & tagging",
  "Preventive maintenance scheduling",
  "Inventory & license management",
  "Warranty tracking & vendor coordination",
] as const;

const faqs = [
  {
    question: "What's the difference between AMC and Managed IT Services?",
    answer:
      "AMC focuses on preventive maintenance and on-call support, while Managed Services offer continuous monitoring, proactive management, and complete IT lifecycle coverage.",
  },
  {
    question: "Do you provide both on-site and remote support?",
    answer:
      "Yes. Nexobots provides hybrid support through on-site engineers and a centralized Network Operations Center (NOC) for remote troubleshooting.",
  },
  {
    question: "Can we customize the AMC scope for specific infrastructure?",
    answer:
      "Absolutely. We offer modular contracts so you can cover specific systems — such as networks, surveillance, or access control — as per your operational needs.",
  },
  {
    question: "Do you support multi-location enterprises?",
    answer:
      "Yes. With a presence in over 180+ cities across India, Nexobots ensures consistent service delivery for multi-branch organizations.",
  },
  {
    question: "How quickly do you respond to service requests?",
    answer:
      "Our SLAs define clear response and resolution timelines — typically ranging from 1 hour for critical issues to 24 hours for non-critical maintenance.",
  },
  {
    question: "What types of systems are covered under AMC?",
    answer: "",
  },
] as const;

// Helper function to calculate service points based on number of items - EXACT COPY from solution-2
const calculateServicePoints = (itemCount: number, paddingTop: number = 10, itemHeight: number = 30, spacing: number = 54) => {
  const points = [];
  let currentTop = paddingTop;
  for (let i = 0; i < itemCount; i++) {
    points.push({ top: currentTop, height: itemHeight });
    currentTop += itemHeight + spacing;
  }
  return points;
};

export default function Service3Page() {
  // Animation state for each service section
  const [redBarTop1, setRedBarTop1] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [redBarTop2, setRedBarTop2] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [redBarTop3, setRedBarTop3] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);

  const redBarHeight = 70;
  const animationDuration = 12000; // Slowed down to 12 seconds for better highlighting

  // Calculate service points for each section
  const amcPoints = calculateServicePoints(amcServices.length);
  const managedPoints = calculateServicePoints(managedServices.length);
  const lifecyclePoints = calculateServicePoints(lifecycleServices.length);

  // Animation function factory - with easing from solution-1
  const createAnimation = (
    setRedBarTop: (value: number) => void,
    setActiveIndex: (value: number) => void,
    servicePoints: Array<{ top: number; height: number }>,
    totalHeight: number,
    offset: number = 0
  ) => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime - offset;
      const elapsed = currentTime - startTime;
      const linearProgress = (elapsed % animationDuration) / animationDuration;

      // Apply easing to slow down at the end (last 15% of animation)
      let progress = linearProgress;
      const slowdownThreshold = 0.85;
      if (linearProgress > slowdownThreshold) {
        // Ease out the last portion - slow down significantly before reset
        const remainingProgress = (linearProgress - slowdownThreshold) / (1 - slowdownThreshold);
        const easedRemaining = 1 - Math.pow(1 - remainingProgress, 3); // Cubic ease out
        progress = slowdownThreshold + easedRemaining * (1 - slowdownThreshold);
      }

      const maxTop = totalHeight - redBarHeight;
      const currentTop = progress * maxTop;

      const barCenter = currentTop + redBarHeight / 2;
      const barBottom = currentTop + redBarHeight;
      const barTop = currentTop;

      // Improved highlighting logic - check if bar overlaps with any point
      let newActiveIndex = 0;
      let foundMatch = false;

      // Check all points including the last one
      for (let i = 0; i < servicePoints.length; i++) {
        const pointTop = servicePoints[i].top;
        const pointBottom = servicePoints[i].top + servicePoints[i].height;
        const pointCenter = pointTop + servicePoints[i].height / 2;

        // Check if bar center is within point range, or if bar overlaps with point
        if (
          (barCenter >= pointTop && barCenter <= pointBottom) ||
          (barTop <= pointCenter && barBottom >= pointCenter) ||
          (barTop >= pointTop && barTop <= pointBottom) ||
          (barBottom >= pointTop && barBottom <= pointBottom)
        ) {
          newActiveIndex = i;
          foundMatch = true;
          break;
        }
      }

      // Fallback: if no match found, use progress-based highlighting
      if (!foundMatch) {
        const progressPerPoint = 1 / servicePoints.length;
        newActiveIndex = Math.min(
          Math.floor(progress / progressPerPoint),
          servicePoints.length - 1
        );
      }

      setRedBarTop(currentTop);
      setActiveIndex(newActiveIndex);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  };

  // Set up animations for all sections - EXACT COPY from solution-2
  useEffect(() => createAnimation(setRedBarTop1, setActiveIndex1, amcPoints, 365, 0), []);
  useEffect(() => createAnimation(setRedBarTop2, setActiveIndex2, managedPoints, 365, 800), []);
  useEffect(() => createAnimation(setRedBarTop3, setActiveIndex3, lifecyclePoints, 365, 1600), []);

  return (
    <div className="text-black" style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative min-h-[600px] md:min-h-[750px] lg:h-[935px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/service-3-hero-bg-501225.png"
            alt="AMC & Managed Services Hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.76)",
          }}
        />
        {/* Content */}
        <div className="relative z-10 h-full px-5 sm:px-8 md:px-12 lg:px-0 py-20 md:py-28 lg:py-0">
          {/* Title - Position: left 142px, top 169px */}
          <div className="lg:absolute" style={{ left: "142px", top: "169px" }}>
            <h1
              className="font-['TASA_Orbiter'] text-white text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.32",
                maxWidth: "722px",
              }}
            >
              Prevent Downtime. Ensure Continuity. Drive Performance.
            </h1>
          </div>

          {/* Description - Position: left 142px, top 442px */}
          <div className="mt-8 md:mt-12 lg:mt-0 lg:absolute" style={{ left: "142px", top: "442px" }}>
            <p
              className="font-['TASA_Orbiter'] text-white text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.44",
                maxWidth: "812px",
              }}
            >
              Keep your IT infrastructure reliable, secure, and high-performing
              — with Nexobots' AMC and Managed Services.
            </p>
          </div>

          {/* CTA Button - Position: left 142px, top 556px */}
          <div className="mt-8 md:mt-12 lg:mt-0 lg:absolute" style={{ left: "142px", top: "556px" }}>
            <Link
              href="#contact"
              className="inline-flex h-[55px] sm:h-[60px] lg:h-[67px] w-[220px] sm:w-[240px] lg:w-[261px] items-center justify-between rounded-[75px] border border-white/30 bg-white transition-all hover:bg-gray-100"
              style={{
                paddingLeft: "29px",
                paddingRight: "18px",
                paddingTop: "20px",
                paddingBottom: "20px",
                borderColor: "rgba(255, 255, 255, 0.3)",
                borderWidth: "1px",
              }}
            >
              <span
                className="font-['Manrope'] text-black whitespace-nowrap text-base sm:text-lg lg:text-[20px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.366",
                  letterSpacing: "0.02em",
                }}
              >
                Talk to an Expert
              </span>
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  flexShrink: 0,
                }}
              >
                <path
                  d="M16 12L25 20.5L16 29"
                  stroke="#E11E24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA Section - Exact from Figma (node-id=37-2660) */}
      <section
        className="py-16 md:py-20 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[78px]">
          {/* Second Text - First in order */}
          <p
            className="font-['TASA_Orbiter'] text-black mx-auto text-center text-lg sm:text-xl md:text-[22px] lg:text-[24px] mb-8 md:mb-12 lg:mb-[60px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "977px",
            }}
          >
            In today's always-connected world, network uptime and system
            reliability are critical to business success. Yet, maintaining IT
            infrastructure internally can strain resources, delay issue
            resolution, and increase costs.
          </p>

          {/* First Text - Second in order */}
          <p
            className="font-['TASA_Orbiter'] text-[#4B4B4B] mx-auto text-center text-base sm:text-lg md:text-[18px] lg:text-[20px] mb-10 md:mb-16 lg:mb-[80px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "869px",
            }}
          >
            Nexobots Technologies delivers Annual Maintenance Contracts (AMC)
            and Managed IT Services designed to maximize system availability,
            prevent downtime, and ensure consistent performance across your
            entire IT ecosystem — from endpoints to data centers.
          </p>

          {/* Get In Touch Button - Above images */}
          <div className="flex justify-center mb-10 md:mb-16 lg:mb-[80px]">
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-between rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
              style={{
                paddingLeft: "25px",
                paddingRight: "17px",
                paddingTop: "12px",
                paddingBottom: "11px",
                borderColor: "rgba(255, 255, 255, 0.3)",
                borderWidth: "1px",
              }}
            >
              <span
                className="font-['Manrope'] text-white whitespace-nowrap"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: "1.366",
                  letterSpacing: "0.02em",
                }}
              >
                Get In Touch
              </span>
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  flexShrink: 0,
                }}
              >
                <path
                  d="M1 1L4 4L1 7"
                  stroke="#E11E24"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Three Image Cards - Below button */}
          <div
            className="mx-auto flex flex-col lg:flex-row gap-4 lg:gap-[17px] lg:w-[1201px] lg:h-[606px]"
          >
            {/* Left Large Image */}
            <div
              className="relative rounded-[18px] overflow-hidden w-full h-[300px] sm:h-[400px] md:h-[450px] lg:w-[549px] lg:h-[606px] lg:flex-shrink-0"
            >
              <Image
                src="/service-3-cta-1.png"
                alt="AMC Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 549px"
                loading="lazy"
              />
            </div>

            {/* Right Two Images Stacked */}
            <div className="flex flex-col gap-4 lg:gap-[26.17px] lg:flex-shrink-0">
              {/* Top Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden w-full h-[200px] sm:h-[250px] md:h-[280px] lg:w-[635px] lg:h-[303.7px]"
              >
                <Image
                  src="/service-3-cta-2.png"
                  alt="Managed Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 635px"
                  loading="lazy"
                />
              </div>

              {/* Bottom Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden w-full h-[200px] sm:h-[230px] md:h-[260px] lg:w-[635px] lg:h-[275.83px]"
              >
                <Image
                  src="/service-3-cta-3.png"
                  alt="Lifecycle Management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 635px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AMC & Managed Services Matter Section - Exact from Figma (node-id=1-3923) */}
      <section
        className="py-16 md:py-20 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[78px]">
          {/* Heading */}
          <h2
            className="font-['TASA_Orbiter'] text-black mb-8 md:mb-12 lg:mb-[60px] text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.22",
              maxWidth: "973px",
            }}
          >
            Why AMC & Managed Services Matter
          </h2>

          {/* Two Column Text Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-[60px]">
            <p
              className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "576px",
              }}
            >
              As technology evolves, businesses face the dual challenge of
              scaling operations while ensuring 24/7 reliability and security.
              AMC and Managed Services offer peace of mind — providing proactive
              maintenance, expert support, and continuous monitoring under
              clearly defined SLAs.
            </p>
            <p
              className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "573px",
              }}
            >
              With Nexobots, you gain a strategic IT partner that handles
              everything from network audits and firmware updates to real-time
              incident response — so your teams can focus on innovation, not IT
              interruptions.
            </p>
          </div>

          {/* Get In Touch Button - Left aligned below text */}
          <div className="mt-8 md:mt-12 lg:mt-[60px]">
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-between rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
              style={{
                paddingLeft: "25px",
                paddingRight: "17px",
                paddingTop: "12px",
                paddingBottom: "11px",
                borderColor: "rgba(255, 255, 255, 0.3)",
                borderWidth: "1px",
              }}
            >
              <span
                className="font-['Manrope'] text-white whitespace-nowrap"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: "1.366",
                  letterSpacing: "0.02em",
                }}
              >
                Get In Touch
              </span>
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  flexShrink: 0,
                }}
              >
                <path
                  d="M1 1L4 4L1 7"
                  stroke="#E11E24"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Core Offerings Heading - Exact from Figma */}
      {/* <section
        className="py-16 md:py-20 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "678px",
            }}
          >
            Our Core Offerings
          </h2>
        </div>
      </section> */}

      {/* Annual Maintenance Contracts (AMC) Section - Exact from Figma (node-id=1-3987) */}
      <section
        className="py-10 md:py-12 lg:py-[60px] px-5 sm:px-8 md:px-12 lg:px-[78px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="rounded-[21px] p-0 lg:p-[60px_78px]"
            style={{
              backgroundColor: "#F8F8F8",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-6 md:mb-8 lg:mb-[40px] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1172px",
              }}
            >
              Annual Maintenance Contracts (AMC)
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-8 md:mb-10 lg:mb-[50px] text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1152px",
              }}
            >
              A proactive, SLA-based service model that ensures your IT assets
              are always operational, secure, and up to date. Our AMC plans are
              designed for flexibility — tailored to meet the unique needs of
              enterprises, campuses, and industries.
            </p>

            {/* Image and Key Services Row */}
            <div className="flex flex-col lg:flex-row lg:relative mb-8 md:mb-10 lg:mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden w-full h-[280px] sm:h-[350px] md:h-[400px] lg:w-[640px] lg:h-[457px] lg:inline-block"
              >
                <Image
                  src="/service-3-amc.png"
                  alt="Annual Maintenance Contracts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="mt-8 lg:mt-0 lg:absolute lg:top-0 w-full lg:w-[719px]"
                style={{
                  left: "673.5px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-6 md:mb-8 lg:mb-[50px] text-2xl sm:text-3xl md:text-[36px] lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                {/* Desktop: Animated progress bar - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative" style={{ width: "719px", height: "365px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - Animated */}
                  <div
                    className="absolute left-0"
                    style={{
                      width: "8.6px",
                      height: `${redBarHeight}px`,
                      top: `${redBarTop1}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {amcServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex1 === i ? "24px" : "20px",
                          fontWeight: activeIndex1 === i ? 700 : 600,
                          transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                          lineHeight: "1.08",
                          width: i === 2 ? "613px" : "596px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Mobile/Tablet: Simple list without animation */}
                <div className="lg:hidden space-y-4 sm:space-y-5">
                  {amcServices.map((service, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#E11E24] mt-2 flex-shrink-0" />
                      <p
                        className="font-['TASA_Orbiter'] text-black text-base sm:text-lg"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              className="mt-8 md:mt-10 lg:mt-[50px] w-full lg:w-[1169px]"
            >
              <div className="mb-6 md:mb-8 lg:mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-3 md:mb-4 lg:mb-[20px] text-2xl sm:text-3xl md:text-[36px] lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black text-lg sm:text-xl md:text-2xl lg:text-[32px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.38",
                    maxWidth: "1169px",
                  }}
                >
                  Reduced downtime, predictable maintenance costs, and extended
                  hardware lifespan.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                style={{
                  padding: "12px 25px",
                }}
              >
                <span
                  className="font-['Manrope'] text-white"
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "1.366",
                    letterSpacing: "0.02em",
                  }}
                >
                  Let's Discuss Needs
                </span>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M1 1L4 4L1 7"
                    stroke="#E11E24"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Managed IT Services Section - Exact from Figma (node-id=1-4012) */}
      <section
        className="py-10 md:py-12 lg:py-[60px] px-5 sm:px-8 md:px-12 lg:px-[78px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="rounded-[21px] p-0 lg:p-[60px_78px]"
            style={{
              backgroundColor: "#F8F8F8",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-6 md:mb-8 lg:mb-[40px] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "953px",
              }}
            >
              Managed IT Services
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-8 md:mb-10 lg:mb-[50px] text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1151px",
              }}
            >
              Beyond maintenance — we manage your entire IT ecosystem. From
              network operations to cloud infrastructure, Nexobots' Managed
              Services deliver 24/7 monitoring, predictive analytics, and
              expert management, backed by performance-driven SLAs.
            </p>

            {/* Image and Key Services Row */}
            <div className="flex flex-col lg:flex-row lg:relative mb-8 md:mb-10 lg:mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden w-full h-[280px] sm:h-[350px] md:h-[400px] lg:w-[640px] lg:h-[457px] lg:inline-block"
              >
                <Image
                  src="/service-3-managed-services.png"
                  alt="Managed IT Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="mt-8 lg:mt-0 lg:absolute lg:top-0 w-full lg:w-[719px]"
                style={{
                  left: "673.5px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-6 md:mb-8 lg:mb-[50px] text-2xl sm:text-3xl md:text-[36px] lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                {/* Desktop: Animated progress bar - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative" style={{ width: "719px", height: "365px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - Animated */}
                  <div
                    className="absolute left-0"
                    style={{
                      width: "8.6px",
                      height: `${redBarHeight}px`,
                      top: `${redBarTop2}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {managedServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex2 === i ? "24px" : "20px",
                          fontWeight: activeIndex2 === i ? 700 : 600,
                          transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                          lineHeight: "1.08",
                          width: "596px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Mobile/Tablet: Simple list without animation */}
                <div className="lg:hidden space-y-4 sm:space-y-5">
                  {managedServices.map((service, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#E11E24] mt-2 flex-shrink-0" />
                      <p
                        className="font-['TASA_Orbiter'] text-black text-base sm:text-lg"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              style={{
                width: "1222px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[20px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.38",
                    maxWidth: "1222px",
                  }}
                >
                  Always-on infrastructure, proactive issue resolution, and
                  improved IT efficiency.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                style={{
                  padding: "12px 25px",
                }}
              >
                <span
                  className="font-['Manrope'] text-white"
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "1.366",
                    letterSpacing: "0.02em",
                  }}
                >
                  Let's Discuss Needs
                </span>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M1 1L4 4L1 7"
                    stroke="#E11E24"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Asset Lifecycle Management Section - Exact from Figma (node-id=1-4036) */}
      <section
        className="py-10 md:py-12 lg:py-[60px] px-5 sm:px-8 md:px-12 lg:px-[78px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="rounded-[21px] p-0 lg:p-[60px_78px]"
            style={{
              backgroundColor: "#F8F8F8",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-6 md:mb-8 lg:mb-[40px] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1151px",
              }}
            >
              IT Asset Lifecycle Management
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-8 md:mb-10 lg:mb-[50px] text-base sm:text-lg md:text-xl lg:text-[24px]"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1151px",
              }}
            >
              End-to-end visibility and control over your IT assets. We track,
              manage, and optimize hardware and software through their complete
              lifecycle — from procurement to disposal.
            </p>

            {/* Image and Key Services Row */}
            <div className="flex flex-col lg:flex-row lg:relative mb-8 md:mb-10 lg:mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden w-full h-[280px] sm:h-[350px] md:h-[400px] lg:w-[640px] lg:h-[457px] lg:inline-block"
              >
                <Image
                  src="/service-3-lifecycle-management.png"
                  alt="IT Asset Lifecycle Management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="mt-8 lg:mt-0 lg:absolute lg:top-0 w-full lg:w-[719px]"
                style={{
                  left: "673.5px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-6 md:mb-8 lg:mb-[50px] text-2xl sm:text-3xl md:text-[36px] lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                {/* Desktop: Animated progress bar - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative" style={{ width: "719px", height: "365px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - Animated */}
                  <div
                    className="absolute left-0"
                    style={{
                      width: "8.6px",
                      height: `${redBarHeight}px`,
                      top: `${redBarTop3}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[79px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {lifecycleServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex3 === i ? "24px" : "20px",
                          fontWeight: activeIndex3 === i ? 700 : 600,
                          transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                          lineHeight: "1.08",
                          width: "596px",
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Mobile/Tablet: Simple list without animation */}
                <div className="lg:hidden space-y-4 sm:space-y-5">
                  {lifecycleServices.map((service, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#E11E24] mt-2 flex-shrink-0" />
                      <p
                        className="font-['TASA_Orbiter'] text-black text-base sm:text-lg"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              className="mt-8 md:mt-10 lg:mt-[50px] w-full lg:w-[1003px]"
            >
              <div className="mb-6 md:mb-8 lg:mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-3 md:mb-4 lg:mb-[20px] text-2xl sm:text-3xl md:text-[36px] lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black text-lg sm:text-xl md:text-2xl lg:text-[32px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.38",
                    maxWidth: "1003px",
                  }}
                >
                  Better utilization, reduced operational overhead, and
                  compliance-ready asset documentation
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                style={{
                  padding: "12px 25px",
                }}
              >
                <span
                  className="font-['Manrope'] text-white"
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    lineHeight: "1.366",
                    letterSpacing: "0.02em",
                  }}
                >
                  Let's Discuss Needs
                </span>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    flexShrink: 0,
                  }}
                >
                  <path
                    d="M1 1L4 4L1 7"
                    stroke="#E11E24"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nexobots Section - Exact from Figma (node-id=1-3881) */}
      <section className="bg-[#F8F8F8] py-8 sm:py-10 md:py-14 lg:py-16 xl:py-[80px]">
        <div className="mx-auto w-full  px-4 sm:px-6 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-6 sm:mb-8 md:mb-10 lg:mb-[50px] text-md sm:text-xl md:text-3xl lg:text-[40px] px-2"
            style={{ fontWeight: 600, lineHeight: "1.494" }}
          >
            Why Choose Nexobots for IT Infrastructure <br /> Consulting & System Integration
          </h2>

          {/* Benefit Cards - Fully Responsive Grid */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-5 lg:gap-6 w-full mx-auto">
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[21px] h-64 w-64  p-5 sm:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                  <Image
                    src="/cpu-icon-service-1.svg"
                    alt=""
                    width={51}
                    height={51}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="font-['Manrope'] text-black text-base sm:text-base lg:text-md font-semibold leading-tight">
                  {card.title}
                </h3>
                <p className="font-['Manrope'] text-[#A4A4A4] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <Partners />

      {/* FAQs Section - Exact from Figma */}
      <section
        className="hidden lg:block py-16 md:py-20 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-10 md:mb-16 lg:mb-[80px] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            FAQs – AMC & Managed IT Services
          </h2>

          <div className="space-y-6 md:space-y-8 lg:space-y-[40px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#D7D7D7] rounded-[15px] w-full lg:w-[1225px] p-4 sm:p-5"
                style={{
                  minHeight: faq.answer ? "auto" : "64px",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h3
                      className="font-['Manrope'] text-[#333333] mb-2 sm:mb-3 lg:mb-[16px] text-base sm:text-lg lg:text-[20px]"
                      style={{
                        fontWeight: 600,
                        lineHeight: "1.2",
                      }}
                    >
                      {faq.question}
                    </h3>
                    {faq.answer && (
                      <p
                        className="font-['Manrope'] text-[#333333] text-sm sm:text-base"
                        style={{
                          fontWeight: 400,
                          lineHeight: "1.4375",
                        }}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <button
                    className="flex-shrink-0 ml-2 sm:ml-4"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.64 8.73L12 13.09L16.36 8.73"
                        stroke="#333333"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
