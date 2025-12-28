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
    title: "Vendor-Agnostic Expertise",
    description:
      "Our multi-OEM partnerships (Cisco, D-Link, Fortinet, Palo Alto, Aruba, and more) ensure unbiased technology recommendations.",
  },
  {
    title: "Consulting-Driven, Implementation-Focused",
    description:
      "We combine strategic advisory with hands-on execution — delivering both vision and value.",
  },
  {
    title: "SLA-Backed Performance",
    description:
      "Every project is governed by clear timelines, measurable outcomes, and guaranteed service levels.",
  },
  {
    title: "Certified Engineering Team",
    description:
      "OEM-certified specialists ensure seamless integration across complex IT environments.",
  },
  {
    title: "Pan-India Delivery Capability",
    description:
      "With a presence in 180+ cities, we ensure consistent and timely project execution nationwide.",
  },
] as const;

const systemIntegrationServices = [
  "Multi-vendor hardware & software integration",
  "Network and server configuration",
  "Data center setup & interconnectivity",
  "Cloud, on-prem, and hybrid integration",
  "End-to-end testing & performance validation",
] as const;

const infrastructureDeploymentServices = [
  "End-to-end installation & commissioning",
  "Structured cabling & rack integration",
  "Virtualization & workload migration",
  "Network security configuration",
  "Performance optimization & documentation",
] as const;

const consultingServices = [
  "IT assessment & gap analysis",
  "Network, data center & cloud architecture design",
  "Security posture review & compliance consulting",
  "Technology roadmap development",
  "TCO optimization & resource planning",
] as const;

const faqs = [
  {
    question: "What does IT Infrastructure Consulting include?",
    answer:
      "It covers assessment, design, and optimization of your IT environment — including networks, data centers, and cloud architecture — aligned with business objectives.",
  },
  {
    question: "Can you modernize legacy infrastructure without downtime?",
    answer:
      "Yes. Our phased migration and integration models ensure zero disruption to critical business operations.",
  },
  {
    question: "How do you ensure project timelines and quality?",
    answer:
      "Every engagement is governed by detailed SLAs, project charters, and milestone-based delivery to maintain speed and reliability.",
  },
  {
    question: "Do you provide consulting for hybrid or multi-cloud integration?",
    answer:
      "Yes. We design and implement hybrid and multi-cloud strategies that ensure interoperability and security across platforms.",
  },
  {
    question: "Do you offer post-deployment support and maintenance?",
    answer:
      "Absolutely. Our AMC and Managed Services teams provide ongoing maintenance, monitoring, and performance optimization.",
  },
  {
    question: "Do you work with specific OEMs or multiple vendors?",
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

export default function Service1Page() {
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
  const systemIntegrationPoints = calculateServicePoints(systemIntegrationServices.length);
  const infrastructureDeploymentPoints = calculateServicePoints(infrastructureDeploymentServices.length);
  const consultingPoints = calculateServicePoints(consultingServices.length);

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
  useEffect(() => createAnimation(setRedBarTop1, setActiveIndex1, systemIntegrationPoints, 365, 0), []);
  useEffect(() => createAnimation(setRedBarTop2, setActiveIndex2, infrastructureDeploymentPoints, 365, 800), []);
  useEffect(() => createAnimation(setRedBarTop3, setActiveIndex3, consultingPoints, 365, 1600), []);

  return (
    <div className="text-black" style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative min-h-[600px] sm:min-h-[700px] lg:h-[935px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/service-1-hero-bg-355263.png"
            alt="IT Infrastructure Consulting Hero"
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
        <div className="relative z-10 h-full px-6 sm:px-10 lg:px-0 py-20 sm:py-24 lg:py-0">
          {/* Title - Position: left 142px, top 169px */}
          <div className="lg:absolute static" style={{ left: "142px", top: "169px" }}>
            <h1
              className="font-['TASA_Orbiter'] text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.32",
                maxWidth: "917px",
              }}
            >
                Build Smarter. Integrate Seamlessly. Perform Reliably.
              </h1>
          </div>

          {/* Description - Position: left 142px, top 366px */}
          <div className="lg:absolute static mt-6 sm:mt-8 lg:mt-0" style={{ left: "142px", top: "366px" }}>
            <p
              className="font-['TASA_Orbiter'] text-white text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontWeight: 600,
                lineHeight: "1.44",
                maxWidth: "812px",
              }}
            >
                Design, deploy, and optimize your IT ecosystem with Nexobots'
                Infrastructure Consulting & System Integration services.
              </p>
          </div>

          {/* CTA Button - Position: left 142px, top 468px */}
          <div className="lg:absolute static mt-8 sm:mt-10 lg:mt-0" style={{ left: "142px", top: "468px" }}>
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
                className="font-['Manrope'] text-black whitespace-nowrap text-base sm:text-lg lg:text-xl"
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

      {/* Closing CTA Section - Exact from Figma (node-id=37-2659) */}
      <section
        className="py-16 sm:py-20 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">
          {/* Second Text - First in order */}
          <p
            className="font-['TASA_Orbiter'] text-black mx-auto text-center text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 lg:mb-[60px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.32",
              maxWidth: "959px",
            }}
          >
            In the modern digital enterprise, success hinges on how efficiently
            your IT systems communicate, scale, and perform. Yet, fragmented
            infrastructure, legacy systems, and inconsistent configurations
            often create operational bottlenecks and security gaps.
          </p>

          {/* First Text - Second in order */}
          <p
            className="font-['TASA_Orbiter'] text-[#4B4B4B] mx-auto text-center text-lg sm:text-xl lg:text-2xl mb-12 sm:mb-16 lg:mb-[80px]"
            style={{
              fontWeight: 500,
              lineHeight: "1.32",
              maxWidth: "820px",
            }}
          >
            Nexobots Technologies delivers end-to-end IT Infrastructure
            Consulting and System Integration services that align technology
            with business goals — helping organizations build cohesive,
            high-performing, and future-ready IT environments that drive
            productivity, security, and growth
          </p>

          {/* Get In Touch Button - Above images */}
          <div className="flex justify-center mb-12 sm:mb-16 lg:mb-[80px]">
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

          {/* Three Image Cards - Below button (y: 518, which is 148px below button) */}
          <div
            className="mx-auto flex flex-col lg:flex-row gap-4 lg:gap-[17px] w-full lg:w-[1201px]"
          >
            {/* Left Large Image */}
            <div
              className="relative rounded-[18px] overflow-hidden flex-shrink-0 w-full lg:w-[549px] h-[300px] sm:h-[400px] lg:h-[595px]"
            >
              <Image
                src="/service-1-cta-1.png"
                alt="IT Infrastructure Consulting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 549px"
                loading="lazy"
              />
            </div>

            {/* Right Two Images Stacked */}
            <div className="flex flex-col gap-4 lg:gap-[26.17px] flex-shrink-0 w-full lg:w-auto">
              {/* Top Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden w-full lg:w-[635px] h-[200px] sm:h-[250px] lg:h-[298.18px]"
              >
                <Image
                  src="/service-1-cta-2.png"
                  alt="System Integration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 635px"
                  loading="lazy"
                />
                </div>

              {/* Bottom Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden w-full lg:w-[635px] h-[200px] sm:h-[230px] lg:h-[270.83px]"
              >
                <Image
                  src="/service-1-cta-3.png"
                  alt="Infrastructure Deployment"
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

      {/* Why IT Infrastructure Consulting & System Integration Matters Section - Exact from Figma (node-id=1-4501) */}
      <section
        className="py-16 sm:py-20 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">
          {/* Heading */}
          <h2
            className="font-['TASA_Orbiter'] text-black mb-8 sm:mb-12 lg:mb-[60px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.22",
              maxWidth: "1139px",
            }}
          >
            Why IT Infrastructure Consulting & System Integration Matters
          </h2>

          {/* Two Column Text Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-[60px]">
            <p
              className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "576px",
              }}
            >
              As technology evolves, enterprises face the dual challenge of
              managing complex systems while ensuring seamless interoperability
              and scalability. Strategic consulting and expert integration
              transform IT infrastructure into a business enabler — ensuring
              every component, from networks to data centers, works together
              efficiently.
            </p>
            <p
              className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "573px",
              }}
            >
              With Nexobots as your technology partner, you gain deep expertise
              across multi-vendor environments and a structured roadmap that
              simplifies modernization. We bridge the gap between design and
              deployment — ensuring your IT ecosystem is not just functional,
              but future-proof.
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
        className="py-16 sm:py-20 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-3xl sm:text-4xl md:text-5xl lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "678px",
            }}
          >
            Our Core Offerings
          </h2>
        </div>
      </section>

      {/* IT Infrastructure Consulting Section - Exact from Figma (node-id=1-4509) */}
      <section
        className="py-10 sm:py-12 lg:py-[60px] px-6 sm:px-10 lg:px-[78px]"
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
              className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 lg:mb-[40px] text-2xl sm:text-3xl md:text-4xl lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1172px",
              }}
            >
              IT Infrastructure Consulting
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-8 sm:mb-10 lg:mb-[50px] text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1284px",
              }}
            >
              A strategic approach to infrastructure planning that ensures
              scalability, performance, and alignment with business objectives.
              We assess your existing environment, identify gaps, and design
              architecture that supports digital transformation.
            </p>

            {/* Image and Key Services Row */}
            <div className="flex flex-col lg:flex-row lg:relative mb-8 sm:mb-10 lg:mb-[50px] gap-8 lg:gap-0">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden w-full lg:w-[640px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[481px] flex-shrink-0"
              >
                <Image
                  src="/service-1-infrastructure-consulting.png"
                  alt="IT Infrastructure Consulting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="lg:absolute lg:top-0 w-full lg:w-[640.5px]"
                style={{
                  left: "673.5px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 lg:mb-[50px] text-2xl sm:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                Key Services
              </h3>

                <div className="relative lg:w-[640.5px] lg:h-[365px]">
                  {/* Background line - hidden on mobile */}
                  <div
                    className="absolute left-0 top-0 hidden lg:block"
                    style={{
                      width: "8.02px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - Animated - hidden on mobile */}
                  <div
                    className="absolute left-0 hidden lg:block"
                    style={{
                      width: "7.66px",
                      height: `${redBarHeight}px`,
                      top: `${redBarTop3}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-4 sm:space-y-6 lg:space-y-[54px] pl-0 lg:pl-[46.32px] pt-0 lg:pt-[10px]"
                  >
                    {consultingServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black text-base sm:text-lg lg:text-xl relative pl-4 lg:pl-0 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#E11E24] before:rounded-full lg:before:hidden"
                        style={{
                          fontSize: undefined,
                          fontWeight: activeIndex3 === i ? 700 : 600,
                          lineHeight: "1.08",
                          transition: "font-weight 0.2s ease-in-out",
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
              className="w-full lg:w-[1169px] mt-8 sm:mt-10 lg:mt-[50px]"
            >
              <div className="mb-6 sm:mb-8 lg:mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-5 lg:mb-[20px] text-2xl sm:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black text-xl sm:text-2xl lg:text-[32px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.38",
                    maxWidth: "1169px",
                  }}
                >
                Smarter IT investments, enhanced reliability, and future-ready
                scalability.
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
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="h-3 w-3"
                  />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Integration Services Section - Exact from Figma (node-id=1-4533) */}
      <section
        className="py-10 sm:py-12 lg:py-[60px] px-6 sm:px-10 lg:px-[78px]"
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
              className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 lg:mb-[40px] text-2xl sm:text-3xl md:text-4xl lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1151px",
              }}
            >
              System Integration Services
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-8 sm:mb-10 lg:mb-[50px] text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1029px",
              }}
            >
              Seamlessly connect hardware, software, and network systems into
              one unified, intelligent ecosystem. Our certified engineers
              integrate multi-vendor technologies to deliver interoperable and
              optimized infrastructure.
            </p>

            {/* Image and Key Services Row */}
            <div className="flex flex-col lg:flex-row lg:relative mb-8 sm:mb-10 lg:mb-[50px] gap-8 lg:gap-0">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden w-full lg:w-[640px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[468px] flex-shrink-0"
              >
                <Image
                  src="/service-1-system-integration-section.png"
                  alt="System Integration Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="lg:absolute lg:top-0 w-full lg:w-[719px]"
                style={{
                  left: "703.5px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 lg:mb-[50px] text-2xl sm:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                Key Services
              </h3>

                <div className="relative lg:w-[719px] lg:h-[365px]">
                  {/* Background line - hidden on mobile */}
                  <div
                    className="absolute left-0 top-0 hidden lg:block"
                    style={{
                      width: "9px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - Animated - hidden on mobile */}
                  <div
                    className="absolute left-0 hidden lg:block"
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
                    className="space-y-4 sm:space-y-6 lg:space-y-[54px] pl-0 lg:pl-[52px] pt-0 lg:pt-[10px]"
                  >
                    {systemIntegrationServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black text-base sm:text-lg lg:text-xl relative pl-4 lg:pl-0 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#E11E24] before:rounded-full lg:before:hidden"
                        style={{
                          fontWeight: activeIndex1 === i ? 700 : 600,
                          lineHeight: "1.08",
                          transition: "font-weight 0.2s ease-in-out",
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
                  Simplified operations, improved efficiency, and seamless
                  interconnectivity.
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
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Deployment & Modernization Section - Exact from Figma (node-id=1-4557) */}
      <section
        className="py-10 sm:py-12 lg:py-[60px] px-6 sm:px-10 lg:px-[78px]"
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
              className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 lg:mb-[40px] text-2xl sm:text-3xl md:text-4xl lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1151px",
              }}
            >
              Infrastructure Deployment & Modernization
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-8 sm:mb-10 lg:mb-[50px] text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1284px",
              }}
            >
              Accelerate digital transformation through secure, scalable
              infrastructure deployment. We handle everything from structured
              cabling and rack setup to virtualization and network rollout —
              ensuring a smooth transition from legacy to modern systems.
            </p>

            {/* Image and Key Services Row */}
            <div className="flex flex-col lg:flex-row lg:relative mb-8 sm:mb-10 lg:mb-[50px] gap-8 lg:gap-0">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden w-full lg:w-[640px] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[482px] flex-shrink-0"
              >
                <Image
                  src="/service-1-infrastructure-deployment-section.png"
                  alt="Infrastructure Deployment & Modernization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="lg:absolute lg:top-0 w-full lg:w-[640.5px]"
                style={{
                  left: "703.5px",
                }}
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 lg:mb-[50px] text-2xl sm:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                <div className="relative lg:w-[640.5px] lg:h-[365px]">
                  {/* Background line - hidden on mobile */}
                  <div
                    className="absolute left-0 top-0 hidden lg:block"
                    style={{
                      width: "8.02px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - Animated - hidden on mobile */}
                  <div
                    className="absolute left-0 hidden lg:block"
                    style={{
                      width: "7.66px",
                      height: `${redBarHeight}px`,
                      top: `${redBarTop2}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-4 sm:space-y-6 lg:space-y-[55px] pl-0 lg:pl-[46.32px] pt-0 lg:pt-[10px]"
                  >
                    {infrastructureDeploymentServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black text-base sm:text-lg lg:text-xl relative pl-4 lg:pl-0 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-[#E11E24] before:rounded-full lg:before:hidden"
                        style={{
                          fontWeight: activeIndex2 === i ? 700 : 600,
                          lineHeight: "1.08",
                          transition: "font-weight 0.2s ease-in-out",
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
              className="w-full lg:w-[1003px] mt-8 sm:mt-10 lg:mt-[50px]"
            >
              <div className="mb-6 sm:mb-8 lg:mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-5 lg:mb-[20px] text-2xl sm:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black text-xl sm:text-2xl lg:text-[32px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.38",
                    maxWidth: "1003px",
                  }}
                >
                  Optimized infrastructure, faster implementation, and minimal
                  business disruption.
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
                <Image
                  src="/find-out-more-arrow.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="h-3 w-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nexobots Section - Exact from Figma (node-id=1-4459) */}
      <section
        className="py-16 sm:py-20 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[69px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center text-2xl sm:text-3xl lg:text-[40px] mb-10 sm:mb-12 lg:mb-[60px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "860px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Why Choose Nexobots for IT Infrastructure Consulting & System
            Integration
          </h2>

          {/* Benefit Cards Grid - 5 cards in a row on desktop, responsive grid on mobile */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 justify-items-center"
          >
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className="rounded-[21px] w-full sm:w-[241px] h-auto sm:h-[242px] p-5 flex flex-col gap-4 sm:gap-5 bg-white"
              >
                {/* Icon - Exact from Figma */}
                <div
                  className="flex-shrink-0 w-[51px] h-[51px]"
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
                  className="font-['Manrope'] text-black text-base lg:text-[16px]"
                  style={{
                    fontWeight: 700,
                    lineHeight: "1.25",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-['Manrope'] text-[#A4A4A4] text-sm lg:text-[13px]"
                  style={{
                    fontWeight: 700,
                    lineHeight: "1.462",
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
        className="py-16 sm:py-20 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-10 sm:mb-14 lg:mb-[80px] text-2xl sm:text-3xl md:text-4xl lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            FAQs – IT Infrastructure Consulting & System Integration
          </h2>

          <div className="space-y-4 sm:space-y-6 lg:space-y-[40px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#D7D7D7] rounded-[15px] w-full lg:w-[1225px] p-4 sm:p-5"
                style={{
                  minHeight: faq.answer ? "auto" : "64px",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3
                      className="font-['Manrope'] text-[#333333] mb-2 sm:mb-3 lg:mb-[16px] text-base sm:text-lg lg:text-xl"
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
                    className="flex-shrink-0 ml-4 w-6 h-6"
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
