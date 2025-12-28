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
    <div className="bg-[#F8F8F8] text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[750px] xl:min-h-[935px]">
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
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.52)" }}
        />

        <div className="relative z-10">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
            <div className="pt-10 sm:pt-14 md:pt-20 lg:pt-[120px] xl:pt-[169px]">
              <h1
                className="font-['TASA_Orbiter'] text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.32",
                  maxWidth: "1172px",
                }}
              >
                Empower Connectivity. Simplify Management. Accelerate Performance.
              </h1>

              <p
                className="font-['TASA_Orbiter'] text-white mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.44",
                  maxWidth: "812px",
                }}
              >
                Unlock business agility and reliability with Nexobots' IT Network
                Infrastructure & Managed Services.
              </p>

              <div className="mt-6 sm:mt-8 lg:mt-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-between rounded-[75px] border border-white/30 bg-white transition-all hover:bg-gray-100 px-4 py-3 sm:px-6 sm:py-4 lg:px-[29px] lg:py-5"
                >
                  <span
                    className="font-['Manrope'] text-black whitespace-nowrap text-sm sm:text-base lg:text-xl"
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
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[41px] lg:h-[41px] flex-shrink-0"
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

            <div className="pb-8 sm:pb-10 lg:pb-0" />
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="bg-black py-8 sm:py-10 md:py-14 lg:py-[80px] xl:py-[120px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
          <p
            className="font-['TASA_Orbiter'] text-white mx-auto text-center mb-6 sm:mb-8 lg:mb-[40px] text-base sm:text-lg md:text-xl lg:text-2xl"
            style={{
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "1108px",
            }}
          >
            In the digital-first era, a high-performing, secure, and agile network
            is essential for every enterprise. Yet, managing distributed systems,
            growing endpoints, and increasing data demands can quickly overwhelm
            internal IT teams.
          </p>

          <p
            className="font-['TASA_Orbiter'] text-[#727272] mx-auto text-center mb-6 sm:mb-8 lg:mb-[40px] text-sm sm:text-base md:text-lg lg:text-xl"
            style={{
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "918px",
            }}
          >
            Nexobots Technologies delivers IT Network Infrastructure & Managed
            Services Solutions that combine robust network architecture with
            proactive management. We help organizations design, implement, and
            maintain intelligent, future-ready IT ecosystems — ensuring seamless
            connectivity, optimal uptime, and strategic scalability.
          </p>

          <div className="flex justify-center mb-6 sm:mb-8 lg:mb-[50px]">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3"
            >
              <span
                className="font-['Manrope'] text-white whitespace-nowrap text-sm sm:text-[15px]"
                style={{
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
                className="flex-shrink-0"
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
          <div className="mx-auto w-full max-w-[1201px]">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[18px] overflow-hidden w-full aspect-[549/400] sm:aspect-[549/500] lg:aspect-[549/630]">
                <Image
                  src="/solution-2-cta-1.png"
                  alt="Network Infrastructure"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 549px, 100vw"
                  loading="lazy"
                />
              </div>

              <div className="grid gap-4 sm:gap-6">
                <div className="relative rounded-[18px] overflow-hidden w-full aspect-[16/9] lg:aspect-[635/315]">
                  <Image
                    src="/solution-2-cta-2.png"
                    alt="Managed Services"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 635px, 100vw"
                    loading="lazy"
                  />
                </div>
                <div className="relative rounded-[18px] overflow-hidden w-full aspect-[16/9] lg:aspect-[635/286]">
                  <Image
                    src="/solution-2-cta-3.png"
                    alt="Network Performance"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 635px, 100vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IT Network Infrastructure & Managed Services Matter */}
      <section className="bg-[#D9D9D9] py-8 sm:py-10 md:py-14 lg:py-[80px] xl:py-[120px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "973px",
            }}
          >
            Why IT Network Infrastructure & Managed Services Matter
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-[40px] mb-6 sm:mb-8 lg:mb-[40px]">
            <p
              className="font-['TASA_Orbiter'] text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
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
              className="font-['TASA_Orbiter'] text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
              }}
            >
              Whether it's network deployment, security integration, or 24/7
              monitoring, our solutions ensure your IT foundation stays strong,
              scalable, and secure.
            </p>
          </div>

          <div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3"
            >
              <span
                className="font-['Manrope'] text-white whitespace-nowrap text-sm sm:text-[15px]"
                style={{
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
                className="flex-shrink-0"
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

      {/* Our Core Offerings Heading */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-[80px] bg-[#F8F8F8]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px]"
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

      {/* Network Infrastructure Design & Implementation */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Network Infrastructure Design & Implementation
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Build robust, scalable network foundations that support your
              business growth. From LAN/WAN architecture to structured cabling
              and Wi-Fi deployment, we design and implement network
              infrastructures that deliver reliability, performance, and
              scalability.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image
                  src="/solution-2-network-infrastructure-section.png"
                  alt="Network Infrastructure Design & Implementation"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 640px, 100vw"
                />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                {/* Desktop: Animated progress */}
                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "365px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
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
                        }}
                      >
                        {service}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Mobile list */}
                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {networkInfrastructureServices.map((service, i) => (
                    <li
                      key={i}
                      className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2"
                      style={{ fontWeight: 600, lineHeight: "1.3" }}
                    >
                      <span className="text-[#E11E24] mt-1">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.38" }}>
                  Strong, scalable, and high-performance network backbone for
                  growing digital demands.
                </p>
              </div>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3">
                <span className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]" style={{ fontWeight: 600, lineHeight: "1.366", letterSpacing: "0.02em" }}>Let's Discuss Needs</span>
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M1 1L4 4L1 7" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Firewall & Network Security Integration Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Firewall & Network Security Integration
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Safeguard your enterprise from evolving cyber threats. Our intelligent
              firewall and network security solutions combine performance and
              protection — securing every endpoint, gateway, and data stream.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image src="/solution-2-firewall-security-section.png" alt="Firewall & Network Security Integration" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop2}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {firewallSecurityServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex2 === i ? "24px" : "20px", fontWeight: activeIndex2 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {firewallSecurityServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
                  Hardened security, zero-trust connectivity, and complete
                  compliance assurance.
                </p>
              </div>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3">
                <span className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]" style={{ fontWeight: 600, lineHeight: "1.366", letterSpacing: "0.02em" }}>Let's Discuss Needs</span>
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M1 1L4 4L1 7" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Network Operations Center (NOC) & Continuous Monitoring Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Network Operations Center (NOC) & Continuous Monitoring
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Experience uninterrupted network visibility and proactive performance
              management. Our 24/7 NOC delivers real-time oversight, ensuring
              maximum uptime and incident-free operations.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image src="/solution-2-noc-monitoring-section.png" alt="Network Operations Center & Continuous Monitoring" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop3}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {nocMonitoringServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex3 === i ? "24px" : "20px", fontWeight: activeIndex3 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {nocMonitoringServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
                  Proactive issue resolution, improved uptime, and data-driven
                  network optimization.
                </p>
              </div>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3">
                <span className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]" style={{ fontWeight: 600, lineHeight: "1.366", letterSpacing: "0.02em" }}>Let's Discuss Needs</span>
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M1 1L4 4L1 7" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Managed IT & Lifecycle Services Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Managed IT & Lifecycle Services
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Optimize your IT operations with a dedicated, expert-managed
              framework. We deliver complete IT lifecycle support — from
              configuration and backup to ongoing maintenance and optimization.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image src="/solution-2-managed-it-section.png" alt="Managed IT & Lifecycle Services" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop4}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {managedITServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex4 === i ? "24px" : "20px", fontWeight: activeIndex4 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {managedITServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
                  Operational continuity, predictable costs, and simplified IT
                  management.
                </p>
              </div>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3">
                <span className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]" style={{ fontWeight: 600, lineHeight: "1.366", letterSpacing: "0.02em" }}>Let's Discuss Needs</span>
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M1 1L4 4L1 7" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Network Optimization & Performance Enhancement Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Network Optimization & Performance Enhancement
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Ensure your infrastructure performs at its peak. Through continuous
              assessment and analytics, we fine-tune configurations and remove
              performance bottlenecks.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image src="/solution-2-optimization-section.png" alt="Network Optimization & Performance Enhancement" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop5}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {optimizationServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex5 === i ? "24px" : "20px", fontWeight: activeIndex5 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {optimizationServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
                  Higher network efficiency, faster response, and maximum user
                  satisfaction.
                </p>
              </div>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3">
                <span className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]" style={{ fontWeight: 600, lineHeight: "1.366", letterSpacing: "0.02em" }}>Let's Discuss Needs</span>
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M1 1L4 4L1 7" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Vendor Integration & Support Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Multi-Vendor Integration & Support
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Leverage flexibility without complexity. Our engineers are certified
              across major OEMs — enabling seamless integration, cross-platform
              functionality, and consistent support.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image src="/solution-2-multi-vendor-section.png" alt="Multi-Vendor Integration & Support" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop6}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {multiVendorServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex6 === i ? "24px" : "20px", fontWeight: activeIndex6 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {multiVendorServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
                  Interoperable, stable, and future-proof infrastructure built for
                  business continuity.
                </p>
              </div>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3">
                <span className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]" style={{ fontWeight: 600, lineHeight: "1.366", letterSpacing: "0.02em" }}>Let's Discuss Needs</span>
                <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M1 1L4 4L1 7" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nexobots */}
      <section className="bg-[#F8F8F8] py-8 sm:py-10 md:py-14 lg:py-[80px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-6 sm:mb-8 lg:mb-[50px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
            style={{ fontWeight: 600, lineHeight: "1.494" }}
          >
            Why Choose Nexobots for IT Network Infrastructure & Managed Services
          </h2>

          {/* Benefit Cards - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-[21px] p-4 sm:p-5 flex flex-col gap-3 sm:gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12">
                  <Image
                    src="/cpu-light-logo.svg"
                    alt=""
                    width={51}
                    height={51}
                    className="w-full h-full"
                  />
                </div>
                <h3
                  className="font-['Manrope'] text-black text-sm sm:text-base"
                  style={{ fontWeight: 700, lineHeight: "1.25" }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-['Manrope'] text-[#A4A4A4] text-xs sm:text-sm"
                  style={{ fontWeight: 700, lineHeight: "1.462" }}
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-[80px] bg-[#F8F8F8]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-6 sm:mb-8 lg:mb-[50px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]"
            style={{ fontWeight: 600, lineHeight: "1.494" }}
          >
            FAQs – IT Network Infrastructure & Managed Services
          </h2>

          <div className="space-y-2 sm:space-y-3 lg:space-y-4 max-w-[1225px] mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#EFEFEF] rounded-[15px] w-full p-4 sm:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3
                      className="font-['Manrope'] text-[#333333] mb-2 sm:mb-3 text-sm sm:text-base lg:text-xl"
                      style={{ fontWeight: 500, lineHeight: "1.2" }}
                    >
                      {faq.question}
                    </h3>
                    {faq.answer && (
                      <p
                        className="font-['Manrope'] text-[#333333] text-xs sm:text-sm lg:text-base"
                        style={{ fontWeight: 400, lineHeight: "1.4375" }}
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <button className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
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

      <Partners />

      <div id="contact">
        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
