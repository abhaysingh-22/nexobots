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

// Helper function to calculate service points based on number of items
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

  // Animation function factory
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
      const progress = (elapsed % animationDuration) / animationDuration;

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

  // Set up animations for all sections
  useEffect(() => createAnimation(setRedBarTop1, setActiveIndex1, amcPoints, 365, 0), []);
  useEffect(() => createAnimation(setRedBarTop2, setActiveIndex2, managedPoints, 365, 800), []);
  useEffect(() => createAnimation(setRedBarTop3, setActiveIndex3, lifecyclePoints, 365, 1600), []);

  return (
    <div className="text-black" style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative h-[935px] w-full overflow-hidden">
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
        <div className="relative z-10 h-full">
          {/* Title - Position: left 142px, top 169px */}
          <div className="absolute" style={{ left: "142px", top: "169px" }}>
            <h1
              className="font-['TASA_Orbiter'] text-white"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.32",
                maxWidth: "722px",
              }}
            >
              Prevent Downtime. Ensure Continuity. Drive Performance.
            </h1>
          </div>

          {/* Description - Position: left 142px, top 442px */}
          <div className="absolute" style={{ left: "142px", top: "442px" }}>
            <p
              className="font-['TASA_Orbiter'] text-white"
              style={{
                fontSize: "24px",
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
          <div className="absolute" style={{ left: "142px", top: "556px" }}>
            <Link
              href="#contact"
              className="inline-flex h-[67px] w-[261px] items-center justify-between rounded-[75px] border border-white/30 bg-white transition-all hover:bg-gray-100"
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
                className="font-['Manrope'] text-black whitespace-nowrap"
                style={{
                  fontSize: "20px",
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
        style={{
          padding: "120px 0",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          {/* Second Text - First in order */}
          <p
            className="font-['TASA_Orbiter'] text-black mx-auto text-center"
            style={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "977px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "60px",
            }}
          >
            In today's always-connected world, network uptime and system
            reliability are critical to business success. Yet, maintaining IT
            infrastructure internally can strain resources, delay issue
            resolution, and increase costs.
          </p>

          {/* First Text - Second in order */}
          <p
            className="font-['TASA_Orbiter'] text-[#4B4B4B] mx-auto text-center"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "869px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "80px",
            }}
          >
            Nexobots Technologies delivers Annual Maintenance Contracts (AMC)
            and Managed IT Services designed to maximize system availability,
            prevent downtime, and ensure consistent performance across your
            entire IT ecosystem — from endpoints to data centers.
          </p>

          {/* Get In Touch Button - Above images */}
          <div className="flex justify-center mb-[80px]">
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
            className="mx-auto flex gap-[17px]"
            style={{
              width: "1201px",
              height: "606px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Left Large Image */}
            <div
              className="relative rounded-[18px] overflow-hidden flex-shrink-0"
              style={{
                width: "549px",
                height: "606px",
              }}
            >
              <Image
                src="/service-3-cta-1.png"
                alt="AMC Services"
                fill
                className="object-cover"
                sizes="549px"
                loading="lazy"
              />
            </div>

            {/* Right Two Images Stacked */}
            <div className="flex flex-col gap-[26.17px] flex-shrink-0">
              {/* Top Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden"
                style={{
                  width: "635px",
                  height: "303.7px",
                }}
              >
                <Image
                  src="/service-3-cta-2.png"
                  alt="Managed Services"
                  fill
                  className="object-cover"
                  sizes="635px"
                  loading="lazy"
                />
              </div>

              {/* Bottom Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden"
                style={{
                  width: "635px",
                  height: "275.83px",
                }}
              >
                <Image
                  src="/service-3-cta-3.png"
                  alt="Lifecycle Management"
                  fill
                  className="object-cover"
                  sizes="635px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AMC & Managed Services Matter Section - Exact from Figma (node-id=1-3923) */}
      <section
        style={{
          padding: "120px 0",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          {/* Heading */}
          <h2
            className="font-['TASA_Orbiter'] text-black mb-[60px]"
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: "1.22",
              maxWidth: "973px",
            }}
          >
            Why AMC & Managed Services Matter
          </h2>

          {/* Two Column Text Layout */}
          <div className="grid grid-cols-2 gap-[60px]">
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
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
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
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
          <div className="mt-[60px]">
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
      <section
        style={{
          padding: "120px 0",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "678px",
            }}
          >
            Our Core Offerings
          </h2>
        </div>
      </section>

      {/* Annual Maintenance Contracts (AMC) Section - Exact from Figma (node-id=1-3987) */}
      <section
        style={{
          padding: "60px 78px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="rounded-[21px]"
            style={{
              padding: "60px 78px",
              backgroundColor: "#F8F8F8",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-[40px]"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1172px",
              }}
            >
              Annual Maintenance Contracts (AMC)
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
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
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "457px",
                }}
              >
                <Image
                  src="/service-3-amc.png"
                  alt="Annual Maintenance Contracts"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "673.5px",
                  width: "719px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[50px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative" style={{ width: "719px", height: "365px" }}>
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
              </div>
            </div>

            {/* Outcome */}
            <div
              style={{
                width: "1169px",
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
        style={{
          padding: "60px 78px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="rounded-[21px]"
            style={{
              padding: "60px 78px",
              backgroundColor: "#F8F8F8",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-[40px]"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "953px",
              }}
            >
              Managed IT Services
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
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
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "457px",
                }}
              >
                <Image
                  src="/service-3-managed-services.png"
                  alt="Managed IT Services"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "673.5px",
                  width: "719px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[50px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative" style={{ width: "719px", height: "365px" }}>
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
        style={{
          padding: "60px 78px",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="rounded-[21px]"
            style={{
              padding: "60px 78px",
              backgroundColor: "#F8F8F8",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-[40px]"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1151px",
              }}
            >
              IT Asset Lifecycle Management
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
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
            <div className="relative mb-[50px]">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden inline-block"
                style={{
                  width: "640px",
                  height: "457px",
                }}
              >
                <Image
                  src="/service-3-lifecycle-management.png"
                  alt="IT Asset Lifecycle Management"
                  fill
                  className="object-cover"
                  sizes="640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="absolute top-0"
                style={{
                  left: "673.5px",
                  width: "719px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[50px]"
                  style={{
                    fontSize: "40px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative" style={{ width: "719px", height: "365px" }}>
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
              </div>
            </div>

            {/* Outcome */}
            <div
              style={{
                width: "1003px",
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
      <section
        style={{
          padding: "120px 0",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[69px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              margin: "0 auto 60px",
            }}
          >
            Why Choose Nexobots for Annual Maintenance Contracts (AMC) &
            Managed Services
          </h2>

          {/* Benefit Cards Grid - 5 cards in a row - Exact from Figma */}
          <div
            className="flex items-start justify-center"
            style={{
              gap: "24px",
            }}
          >
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className="rounded-[21px]"
                style={{
                  width: "241px",
                  height: "242px",
                  padding: index === 0 ? "20px 16px" : "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                {/* Icon - Exact from Figma */}
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "51px",
                    height: "51px",
                  }}
                >
                  <Image
                    src="/cpu-icon-service-1.svg"
                    alt=""
                    width={51}
                    height={51}
                    className="w-[51px] h-[51px]"
                  />
                </div>
                <h3
                  className="font-['Manrope'] text-black"
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "1.25",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-['Manrope'] text-[#A4A4A4]"
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    lineHeight: "1.462",
                    width: index === 0 ? "206px" : "209px",
                  }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section - Exact from Figma */}
      <section
        style={{
          padding: "120px 0",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-[80px]"
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            FAQs – AMC & Managed IT Services
          </h2>

          <div className="space-y-[40px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#D7D7D7] rounded-[15px]"
                style={{
                  width: "1225px",
                  height: faq.answer ? "120px" : "64px",
                  padding: "20px",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3
                      className="font-['Manrope'] text-[#333333] mb-[16px]"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "1.2",
                      }}
                    >
                      {faq.question}
                    </h3>
                    {faq.answer && (
                      <p
                        className="font-['Manrope'] text-[#333333]"
                        style={{
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "1.4375",
                        }}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <button
                    className="flex-shrink-0 ml-4"
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

      {/* Our Partners Section */}
      <Partners />

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
