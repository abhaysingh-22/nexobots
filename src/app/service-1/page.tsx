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

  // Animation function factory - EXACT COPY from solution-2
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

  // Set up animations for all sections - EXACT COPY from solution-2
  useEffect(() => createAnimation(setRedBarTop1, setActiveIndex1, systemIntegrationPoints, 365, 0), []);
  useEffect(() => createAnimation(setRedBarTop2, setActiveIndex2, infrastructureDeploymentPoints, 365, 800), []);
  useEffect(() => createAnimation(setRedBarTop3, setActiveIndex3, consultingPoints, 365, 1600), []);

  return (
    <div className="bg-[#F8F8F8] text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[750px] xl:min-h-[935px]">
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
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.76)" }}
        />

        <div className="relative z-10">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
            <div className="pt-10 sm:pt-14 md:pt-20 lg:pt-[120px] xl:pt-[169px]">
              <h1
                className="font-['TASA_Orbiter'] text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.32",
                  maxWidth: "917px",
                }}
              >
                Build Smarter. Integrate Seamlessly. Perform Reliably.
              </h1>

              <p
                className="font-['TASA_Orbiter'] text-white mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.44",
                  maxWidth: "812px",
                }}
              >
                Design, deploy, and optimize your IT ecosystem with Nexobots'
                Infrastructure Consulting & System Integration services.
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
      <section className="bg-[#F8F8F8] py-8 sm:py-10 md:py-14 lg:py-[80px] xl:py-[120px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
          <p
            className="font-['TASA_Orbiter'] text-black mx-auto text-center mb-6 sm:mb-8 lg:mb-[40px] text-base sm:text-lg md:text-xl lg:text-2xl"
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

          <p
            className="font-['TASA_Orbiter'] text-[#4B4B4B] mx-auto text-center mb-6 sm:mb-8 lg:mb-[40px] text-sm sm:text-base md:text-lg lg:text-xl"
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
              <div className="relative rounded-[18px] overflow-hidden w-full aspect-[549/400] sm:aspect-[549/500] lg:aspect-[549/595]">
                <Image
                  src="/service-1-cta-1.png"
                  alt="IT Infrastructure Consulting"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 549px, 100vw"
                  loading="lazy"
                />
              </div>

              <div className="grid gap-4 sm:gap-6">
                <div className="relative rounded-[18px] overflow-hidden w-full aspect-[16/9] lg:aspect-[635/298]">
                  <Image
                    src="/service-1-cta-2.png"
                    alt="System Integration"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 635px, 100vw"
                    loading="lazy"
                  />
                </div>
                <div className="relative rounded-[18px] overflow-hidden w-full aspect-[16/9] lg:aspect-[635/271]">
                  <Image
                    src="/service-1-cta-3.png"
                    alt="Infrastructure Deployment"
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

      {/* Why IT Infrastructure Consulting Matters */}
      <section className="bg-[#F8F8F8] py-8 sm:py-10 md:py-14 lg:py-[80px] xl:py-[120px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.22",
              maxWidth: "1139px",
            }}
          >
            Why IT Infrastructure Consulting & System Integration Matters
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-[40px] mb-6 sm:mb-8 lg:mb-[40px]">
            <p
              className="font-['TASA_Orbiter'] text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
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
              className="font-['TASA_Orbiter'] text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
              }}
            >
              With Nexobots as your technology partner, you gain deep expertise
              across multi-vendor environments and a structured roadmap that
              simplifies modernization. We bridge the gap between design and
              deployment — ensuring your IT ecosystem is not just functional,
              but future-proof.
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

      {/* IT Infrastructure Consulting Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              IT Infrastructure Consulting
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              A strategic approach to infrastructure planning that ensures
              scalability, performance, and alignment with business objectives.
              We assess your existing environment, identify gaps, and design
              architecture that supports digital transformation.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/481]">
                <Image
                  src="/service-1-infrastructure-consulting.png"
                  alt="IT Infrastructure Consulting"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 640px, 100vw"
                />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                {/* Desktop: Animated progress - EXACT COPY from solution-2 */}
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
                      top: `${redBarTop3}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {consultingServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex3 === i ? "24px" : "20px",
                          fontWeight: activeIndex3 === i ? 700 : 600,
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
                  {consultingServices.map((service, i) => (
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
                  Smarter IT investments, enhanced reliability, and future-ready
                  scalability.
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

      {/* System Integration Services Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              System Integration Services
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Seamlessly connect hardware, software, and network systems into
              one unified, intelligent ecosystem. Our certified engineers
              integrate multi-vendor technologies to deliver interoperable and
              optimized infrastructure.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/468]">
                <Image src="/service-1-system-integration-section.png" alt="System Integration Services" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                {/* Desktop: Animated progress - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop1}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {systemIntegrationServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex1 === i ? "24px" : "20px", fontWeight: activeIndex1 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {systemIntegrationServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.38" }}>
                  Simplified operations, improved efficiency, and seamless
                  interconnectivity.
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

      {/* Infrastructure Deployment & Modernization Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Infrastructure Deployment & Modernization
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Accelerate digital transformation through secure, scalable
              infrastructure deployment. We handle everything from structured
              cabling and rack setup to virtualization and network rollout —
              ensuring a smooth transition from legacy to modern systems.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/482]">
                <Image src="/service-1-infrastructure-deployment-section.png" alt="Infrastructure Deployment & Modernization" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                {/* Desktop: Animated progress - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop2}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {infrastructureDeploymentServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex2 === i ? "24px" : "20px", fontWeight: activeIndex2 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {infrastructureDeploymentServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.38" }}>
                  Optimized infrastructure, faster implementation, and minimal
                  business disruption.
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
            Why Choose Nexobots for IT Infrastructure Consulting & System Integration
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
                    src="/cpu-icon-service-1.svg"
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
            FAQs – IT Infrastructure Consulting & System Integration
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
