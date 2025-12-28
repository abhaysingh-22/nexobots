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
    title: "Strategic Design. Operational Excellence.",
    description:
      "We combine consulting-driven design with hands-on management for full lifecycle value.",
  },
  {
    title: "Certified OEM Partnerships",
    description:
      "Strong alliances with Cisco, D-Link, Fortinet, Palo Alto, and Aruba deliver best-in-class reliability.",
  },
  {
    title: "Proactive & Predictive Management",
    description:
      "Real-time monitoring, analytics, and preventive maintenance minimize downtime.",
  },
  {
    title: "SLA-Backed Service Reliability",
    description:
      "Defined response, resolution, and uptime commitments — guaranteed.",
  },
  {
    title: "Security-First, Performance-Driven",
    description:
      "Our architectures embed cybersecurity and speed at every level of your network.",
  },
] as const;

const networkInfrastructureServices = [
  "LAN/WAN architecture design & rollout",
  "Structured cabling (CAT6, CAT7 & Fiber)",
  "Wi-Fi coverage & access point deployment",
  "Routing & switching configuration",
  "Network certification & performance validation",
] as const;

const firewallSecurityServices = [
  "Next-Generation Firewall (NGFW) setup",
  "VPN & multi-site secure access",
  "Unified threat management (UTM) integration",
  "Policy enforcement & application control",
  "Real-time monitoring & analytics",
] as const;

const nocMonitoringServices = [
  "Continuous network & server monitoring",
  "Event correlation & alert response",
  "Incident diagnosis & root-cause analysis",
  "SLA-based escalation workflows",
  "Performance trend analytics",
] as const;

const managedITServices = [
  "IT asset lifecycle management",
  "Patch, update & backup management",
  "Helpdesk & on-site support (L1–L3)",
  "Preventive maintenance scheduling",
  "Infrastructure performance audits",
] as const;

const optimizationServices = [
  "Bandwidth and throughput optimization",
  "Load balancing & QoS configuration",
  "Latency analysis & fault resolution",
  "Capacity planning & scaling strategy",
  "Detailed performance reporting",
] as const;

const multiVendorServices = [
  "Multi-OEM network component integration",
  "Hardware & software lifecycle management",
  "Vendor coordination & warranty handling",
  "Firmware upgrades & standardization",
  "Multi-location deployment support",
] as const;

const faqs = [
  {
    question: "What's included in Nexobots' IT Network Infrastructure & Managed Services Solution?",
    answer:
      "It includes complete network design, implementation, management, and optimization — combining hardware, security, and support under a unified framework.",
  },
  {
    question: "Can you integrate existing infrastructure with new solutions?",
    answer:
      "Absolutely. Our multi-vendor expertise enables seamless integration with your current setup — minimizing disruption and maximizing ROI.",
  },
  {
    question: "How do you ensure data security across the network?",
    answer:
      "We implement multi-layered security with next-gen firewalls, encryption, access control, and real-time threat intelligence.",
  },
  {
    question: "Are your managed services customizable?",
    answer:
      "Yes. We offer modular service models to match your business size, infrastructure complexity, and performance goals.",
  },
  {
    question: "Do you provide support across multiple locations?",
    answer:
      "Yes. With a nationwide footprint in 180+ cities, Nexobots ensures consistent on-site and remote support.",
  },
  {
    question: "Do you offer real-time network monitoring?",
    answer:
      "Yes. Our 24/7 NOC provides continuous visibility, proactive alerts, and immediate escalation handling.",
  },
  {
    question: "Do you provide end-to-end project execution?",
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

export default function Solution2Page() {
  // Animation state for each service section
  const [redBarTop1, setRedBarTop1] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [redBarTop2, setRedBarTop2] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [redBarTop3, setRedBarTop3] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [redBarTop4, setRedBarTop4] = useState(0);
  const [activeIndex4, setActiveIndex4] = useState(0);
  const [redBarTop5, setRedBarTop5] = useState(0);
  const [activeIndex5, setActiveIndex5] = useState(0);
  const [redBarTop6, setRedBarTop6] = useState(0);
  const [activeIndex6, setActiveIndex6] = useState(0);

  const redBarHeight = 70;
  const animationDuration = 12000; // Slowed down to 12 seconds for better highlighting

  // Calculate service points for each section
  const networkInfrastructurePoints = calculateServicePoints(networkInfrastructureServices.length);
  const firewallSecurityPoints = calculateServicePoints(firewallSecurityServices.length);
  const nocMonitoringPoints = calculateServicePoints(nocMonitoringServices.length);
  const managedITPoints = calculateServicePoints(managedITServices.length);
  const optimizationPoints = calculateServicePoints(optimizationServices.length);
  const multiVendorPoints = calculateServicePoints(multiVendorServices.length);

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

      const lastPointIndex = servicePoints.length - 1;
      const lastPoint = servicePoints[lastPointIndex];
      const thirdPoint = servicePoints[servicePoints.length - 2];
      const thirdPointBottom = thirdPoint ? thirdPoint.top + thirdPoint.height : 0;

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
  useEffect(() => createAnimation(setRedBarTop1, setActiveIndex1, networkInfrastructurePoints, 365, 0), []);
  useEffect(() => createAnimation(setRedBarTop2, setActiveIndex2, firewallSecurityPoints, 365, 800), []);
  useEffect(() => createAnimation(setRedBarTop3, setActiveIndex3, nocMonitoringPoints, 365, 1600), []);
  useEffect(() => createAnimation(setRedBarTop4, setActiveIndex4, managedITPoints, 365, 2400), []);
  useEffect(() => createAnimation(setRedBarTop5, setActiveIndex5, optimizationPoints, 365, 3200), []);
  useEffect(() => createAnimation(setRedBarTop6, setActiveIndex6, multiVendorPoints, 365, 4000), []);

  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative h-[935px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/solution-2-hero-bg.png"
            alt="IT Network Infrastructure & Managed Services Hero"
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
            backgroundColor: "rgba(0, 0, 0, 0.52)",
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
                maxWidth: "1172px",
              }}
            >
              Empower Connectivity. Simplify Management. Accelerate Performance.
            </h1>
          </div>

          {/* Description - Position: left 142px, top 366px */}
          <div className="absolute" style={{ left: "142px", top: "366px" }}>
            <p
              className="font-['TASA_Orbiter'] text-white"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.44",
                maxWidth: "812px",
              }}
            >
              Unlock business agility and reliability with Nexobots' IT Network
              Infrastructure & Managed Services.
            </p>
          </div>

          {/* CTA Button - Position: left 142px, top 489px */}
          <div className="absolute" style={{ left: "142px", top: "489px" }}>
            <Link
              href="#contact"
              className="inline-flex h-[67px] w-[261px] items-center justify-between rounded-[75px] border border-white/30 bg-white transition-all hover:bg-gray-100"
              style={{
                padding: "20px 29px",
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

      {/* Closing CTA Section - Exact from Figma (node-id=37-2654) */}
      <section
        className="bg-black"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          {/* First Text */}
          <p
            className="font-['TASA_Orbiter'] text-white mx-auto text-center mb-[60px]"
            style={{
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "1108px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            In the digital-first era, a high-performing, secure, and agile network
            is essential for every enterprise. Yet, managing distributed systems,
            growing endpoints, and increasing data demands can quickly overwhelm
            internal IT teams.
          </p>

          {/* Second Text */}
          <p
            className="font-['TASA_Orbiter'] text-[#727272] mx-auto text-center mb-[60px]"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "918px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Nexobots Technologies delivers IT Network Infrastructure & Managed
            Services Solutions that combine robust network architecture with
            proactive management. We help organizations design, implement, and
            maintain intelligent, future-ready IT ecosystems — ensuring seamless
            connectivity, optimal uptime, and strategic scalability.
          </p>

          {/* Get In Touch Button */}
          <div className="flex justify-center mb-[80px]">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
              style={{
                width: "155px",
                height: "45px",
                padding: "12px 25px",
              }}
            >
              <span
                className="font-['Manrope'] text-white whitespace-nowrap"
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: "1.366em",
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

          {/* Three Image Cards */}
          <div
            className="mx-auto flex gap-[17px]"
            style={{
              width: "1201px",
              height: "630px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Left Large Image */}
            <div
              className="relative rounded-[18px] overflow-hidden flex-shrink-0"
              style={{
                width: "549px",
                height: "630px",
              }}
            >
              <Image
                src="/solution-2-cta-1.png"
                alt="Network Infrastructure"
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
                  height: "315.72px",
                }}
              >
                <Image
                  src="/solution-2-cta-2.png"
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
                  height: "286.76px",
                }}
              >
                <Image
                  src="/solution-2-cta-3.png"
                  alt="Network Performance"
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

      {/* Why IT Network Infrastructure & Managed Services Matter Section - Exact from Figma (node-id=1-2524) */}
      <section
        className="bg-[#D9D9D9]"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          {/* Heading */}
          <h2
            className="font-['TASA_Orbiter'] text-black mb-[40px]"
            style={{
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "973px",
            }}
          >
            Why IT Network Infrastructure & Managed Services Matter
          </h2>

          {/* Two Column Text Layout */}
          <div className="grid grid-cols-2 gap-[60px] mb-[60px]">
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "576px",
              }}
            >
              Enterprises today depend on uninterrupted data flow, secure access,
              and predictable performance. However, siloed infrastructure and
              reactive support models can limit operational efficiency and growth.
              Nexobots bridges this gap through an integrated network and
              management framework — built to enhance visibility, reduce downtime,
              and align IT performance with business outcomes.
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
              Whether it's network deployment, security integration, or 24/7
              monitoring, our solutions ensure your IT foundation stays strong,
              scalable, and secure.
            </p>
          </div>

          {/* Get In Touch Button - Left aligned below text */}
          <div>
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
              style={{
                padding: "12px 25px",
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
                  marginLeft: "8px",
                  flexShrink: 0,
                }}
              >
                <path
                  d="M1 1L4 4L1 7"
                  stroke="#E11E24"
                  strokeWidth="1.5"
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

      {/* Network Infrastructure Design & Implementation Section - Exact from Figma (node-id=1-2532) */}
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
              Network Infrastructure Design & Implementation
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1284px",
              }}
            >
              Build robust, scalable network foundations that support your
              business growth. From LAN/WAN architecture to structured cabling
              and Wi-Fi deployment, we design and implement network
              infrastructures that deliver reliability, performance, and
              scalability.
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
                  src="/solution-2-network-infrastructure-section.png"
                  alt="Network Infrastructure Design & Implementation"
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
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
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
                    {networkInfrastructureServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex1 === i ? "24px" : "20px",
                          fontWeight: activeIndex1 === i ? 700 : 600,
                          lineHeight: "1.08",
                          transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
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
                width: "1223px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
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
                    maxWidth: "1223px",
                  }}
                >
                  Strong, scalable, and high-performance network backbone for
                  growing digital demands.
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

      {/* Firewall & Network Security Integration Section - Exact from Figma (node-id=1-2557) */}
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
              Firewall & Network Security Integration
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1151px",
              }}
            >
              Safeguard your enterprise from evolving cyber threats. Our intelligent
              firewall and network security solutions combine performance and
              protection — securing every endpoint, gateway, and data stream.
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
                  src="/solution-2-firewall-security-section.png"
                  alt="Firewall & Network Security Integration"
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
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
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
                    {firewallSecurityServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex2 === i ? "24px" : "20px",
                          fontWeight: activeIndex2 === i ? 700 : 600,
                          lineHeight: "1.08",
                          transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
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
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
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
                    lineHeight: "1.27",
                    maxWidth: "1222px",
                  }}
                >
                  Hardened security, zero-trust connectivity, and complete
                  compliance assurance.
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

      {/* Network Operations Center (NOC) & Continuous Monitoring Section - Exact from Figma (node-id=1-2581) */}
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
              Network Operations Center (NOC) & Continuous Monitoring
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1151px",
              }}
            >
              Experience uninterrupted network visibility and proactive performance
              management. Our 24/7 NOC delivers real-time oversight, ensuring
              maximum uptime and incident-free operations.
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
                  src="/solution-2-noc-monitoring-section.png"
                  alt="Network Operations Center & Continuous Monitoring"
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
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
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
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {nocMonitoringServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex3 === i ? "24px" : "20px",
                          fontWeight: activeIndex3 === i ? 700 : 600,
                          lineHeight: "1.08",
                          transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
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
                width: "1151px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
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
                    lineHeight: "1.27",
                    maxWidth: "1151px",
                  }}
                >
                  Proactive issue resolution, improved uptime, and data-driven
                  network optimization.
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

      {/* Managed IT & Lifecycle Services Section - Exact from Figma (node-id=1-2605) */}
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
              Managed IT & Lifecycle Services
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1151px",
              }}
            >
              Optimize your IT operations with a dedicated, expert-managed
              framework. We deliver complete IT lifecycle support — from
              configuration and backup to ongoing maintenance and optimization.
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
                  src="/solution-2-managed-it-section.png"
                  alt="Managed IT & Lifecycle Services"
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
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
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
                      top: `${redBarTop4}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {managedITServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex4 === i ? "24px" : "20px",
                          fontWeight: activeIndex4 === i ? 700 : 600,
                          lineHeight: "1.08",
                          transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
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
                width: "1216px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
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
                    lineHeight: "1.27",
                    maxWidth: "1216px",
                  }}
                >
                  Operational continuity, predictable costs, and simplified IT
                  management.
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

      {/* Network Optimization & Performance Enhancement Section - Exact from Figma (node-id=1-2629) */}
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
              Network Optimization & Performance Enhancement
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1151px",
              }}
            >
              Ensure your infrastructure performs at its peak. Through continuous
              assessment and analytics, we fine-tune configurations and remove
              performance bottlenecks.
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
                  src="/solution-2-optimization-section.png"
                  alt="Network Optimization & Performance Enhancement"
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
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
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
                      top: `${redBarTop5}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {optimizationServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex5 === i ? "24px" : "20px",
                          fontWeight: activeIndex5 === i ? 700 : 600,
                          lineHeight: "1.08",
                          transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
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
                width: "1216px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
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
                    lineHeight: "1.27",
                    maxWidth: "1216px",
                  }}
                >
                  Higher network efficiency, faster response, and maximum user
                  satisfaction.
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

      {/* Multi-Vendor Integration & Support Section - Exact from Figma (node-id=1-2653) */}
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
              Multi-Vendor Integration & Support
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-[50px]"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.26",
                maxWidth: "1151px",
              }}
            >
              Leverage flexibility without complexity. Our engineers are certified
              across major OEMs — enabling seamless integration, cross-platform
              functionality, and consistent support.
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
                  src="/solution-2-multi-vendor-section.png"
                  alt="Multi-Vendor Integration & Support"
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
                  className="font-['TASA_Orbiter'] text-black mb-[40px]"
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
                      top: `${redBarTop6}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  {/* Services */}
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {multiVendorServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex6 === i ? "24px" : "20px",
                          fontWeight: activeIndex6 === i ? 700 : 600,
                          lineHeight: "1.08",
                          transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
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
                width: "1216px",
                marginTop: "50px",
              }}
            >
              <div className="mb-[30px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[14px]"
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
                    lineHeight: "1.27",
                    maxWidth: "1216px",
                  }}
                >
                  Interoperable, stable, and future-proof infrastructure built for
                  business continuity.
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

      {/* Why Choose Nexobots Section - Exact from Figma (node-id=1-2677) */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "860px",
              margin: "0 auto 80px",
            }}
          >
            Why Choose Nexobots for IT Network Infrastructure & Managed Services
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
                className="bg-white rounded-[21px]"
                style={{
                  width: "241px",
                  height: "243px",
                  padding: index === 0 ? "20px 16px" : "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
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
                    src="/cpu-light-logo.svg"
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
                    width: index === 0 ? "206px" : index === 1 ? "209px" : "209px",
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
              maxWidth: "1058px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            FAQs – IT Network Infrastructure & Managed Services
          </h2>

          <div className="space-y-[40px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#EFEFEF] rounded-[15px]"
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
                        fontWeight: 500,
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
