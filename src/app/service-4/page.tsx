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
    title: "Expert Cloud Architects",
    description:
      "Certified professionals ensure seamless deployment, migration, and management across multi-cloud and virtual environments.",
  },
  {
    title: "End-to-End Support",
    description:
      "From strategy and design to maintenance and optimization — we manage your cloud lifecycle completely.",
  },
  {
    title: "Security-Driven Framework",
    description:
      "We embed enterprise-grade encryption, access control, and compliance measures into every solution.",
  },
  {
    title: "SLA-Based Performance Assurance",
    description:
      "Defined uptime guarantees, quick incident response, and predictable performance metrics.",
  },
  {
    title: "Proven Multi-Platform Expertise",
    description:
      "Experience across VMware, Hyper-V, Azure, AWS, Citrix, and OpenStack ensures flexibility and interoperability.",
  },
] as const;

const cloudInfrastructureServices = [
  "Cloud architecture design & migration planning",
  "Hybrid & multi-cloud implementation",
  "Cloud monitoring & performance optimization",
  "Data backup, replication & disaster recovery",
  "Security & compliance management",
] as const;

const virtualizationServices = [
  "Server & desktop virtualization setup",
  "Virtual machine provisioning & monitoring",
  "Storage & network virtualization",
  "Capacity planning & resource optimization",
  "Backup & failover configuration",
] as const;

const backupDraasServices = [
  "Continuous data replication & version control",
  "Automated failover & recovery testing",
  "Backup policy configuration",
  "Compliance & retention management",
  "24/7 monitoring & support",
] as const;

const faqs = [
  {
    question: "What's the difference between cloud computing and virtualization?",
    answer:
      "Virtualization creates multiple virtual systems within a single physical environment, while cloud computing delivers those virtualized resources as a service — accessible anywhere, anytime.",
  },
  {
    question: "Can you migrate legacy applications to the cloud?",
    answer:
      "Yes. Our experts assess compatibility, refactor workloads where needed, and perform seamless migration with zero data loss",
  },
  {
    question: "Is cloud backup more secure than on-premise solutions?",
    answer:
      "Yes — cloud backups include encryption, redundancy, and geographic failover, ensuring stronger data protection and compliance",
  },
  {
    question: "Do you provide Disaster Recovery services?",
    answer:
      "Yes, our DRaaS offering ensures minimal downtime and quick recovery for mission-critical workloads in case of system or network failures.",
  },
  {
    question: "Do you provide ongoing cloud management and support?",
    answer:
      "Absolutely. Nexobots provides 24/7 monitoring, performance optimization, patch management, and cost governance for cloud workloads.",
  },
  {
    question: "Which cloud platforms does Nexobots support?",
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

export default function Service4Page() {
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
  const cloudInfrastructurePoints = calculateServicePoints(cloudInfrastructureServices.length);
  const virtualizationPoints = calculateServicePoints(virtualizationServices.length);
  const backupDraasPoints = calculateServicePoints(backupDraasServices.length);

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
  useEffect(() => createAnimation(setRedBarTop1, setActiveIndex1, cloudInfrastructurePoints, 365, 0), []);
  useEffect(() => createAnimation(setRedBarTop2, setActiveIndex2, virtualizationPoints, 365, 800), []);
  useEffect(() => createAnimation(setRedBarTop3, setActiveIndex3, backupDraasPoints, 365, 1600), []);

  return (
    <div className="text-black" style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[935px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/service-4-hero-bg-44eb7d.png"
            alt="Cloud & Virtualization Support Hero"
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
            backgroundColor: "rgba(0, 0, 0, 0.62)",
          }}
        />
        {/* Content */}
        <div className="relative z-10 h-full px-6 sm:px-8 md:px-12 lg:px-0">
          {/* Title - Position: left 142px, top 169px */}
          <div className="absolute left-6 right-6 top-24 sm:left-8 sm:right-8 sm:top-28 md:left-12 md:right-12 md:top-32 lg:left-[142px] lg:right-auto lg:top-[169px]">
            <h1
              className="font-['TASA_Orbiter'] text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.32",
                maxWidth: "722px",
              }}
            >
              Empower Agility. Optimize Performance. Scale Without Limits.
            </h1>
          </div>

          {/* Description - Position: left 142px, top 442px */}
          <div className="absolute left-6 right-6 top-64 sm:left-8 sm:right-8 sm:top-72 md:left-12 md:right-12 md:top-80 lg:left-[142px] lg:right-auto lg:top-[442px]">
            <p
              className="font-['TASA_Orbiter'] text-white text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontWeight: 600,
                lineHeight: "1.44",
                maxWidth: "812px",
              }}
            >
              Build a resilient, scalable, and secure digital foundation — with
              nexobots' Cloud & Virtualization Support.
            </p>
          </div>

          {/* CTA Button - Position: left 142px, top 556px */}
          <div className="absolute left-6 top-[420px] sm:left-8 sm:top-[480px] md:left-12 md:top-[520px] lg:left-[142px] lg:top-[556px]">
            <Link
              href="#contact"
              className="inline-flex h-14 w-56 sm:h-16 sm:w-60 lg:h-[67px] lg:w-[261px] items-center justify-between rounded-[75px] border border-white/30 bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105 px-6 py-4 lg:px-0 lg:py-0 shadow-lg"
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
                className="w-8 h-8 lg:w-10 lg:h-10"
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

      {/* Closing CTA Section - Exact from Figma (node-id=37-2657) */}
      <section
        className="py-16 sm:py-20 md:py-24 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-[78px]">
          {/* Second Text - First in order */}
          <p
            className="font-['TASA_Orbiter'] text-black mx-auto text-center text-lg sm:text-xl md:text-2xl lg:text-2xl"
            style={{
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "1108px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "40px",
            }}
          >
            In today's fast-evolving business landscape, agility and uptime
            define competitive advantage. Yet, managing on-premise systems or
            fragmented cloud environments can lead to inefficiencies, high costs,
            and complex maintenance challenges
          </p>

          {/* First Text - Second in order */}
          <p
            className="font-['TASA_Orbiter'] text-[#4B4B4B] mx-auto text-center text-base sm:text-lg md:text-xl lg:text-xl"
            style={{
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "869px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "60px",
            }}
          >
            Nexobots Technologies delivers comprehensive Cloud & Virtualization
            Support designed to help enterprises modernize their IT
            infrastructure — enabling seamless scalability, optimal resource
            utilization, and secure workload management across hybrid, private,
            or public cloud environments.
          </p>

          {/* Get In Touch Button - Above images */}
          <div className="flex justify-center mb-12 sm:mb-16 lg:mb-[80px]">
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-between rounded-[75px] border border-white/30 bg-black transition-all duration-300 hover:bg-black/90 hover:shadow-xl hover:scale-105 shadow-md"
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
            className="mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-[17px] w-full lg:w-[1201px]"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Left Large Image */}
            <div
              className="relative rounded-[18px] overflow-hidden w-full aspect-[549/644] lg:w-[549px] lg:h-[644px] lg:flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <Image
                src="/service-4-cta-1.png"
                alt="Cloud Infrastructure"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 549px"
                loading="lazy"
              />
            </div>

            {/* Right Two Images Stacked */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-[28.13px] w-full lg:w-auto lg:flex-shrink-0">
              {/* Top Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden w-full aspect-[635/323] lg:w-[635px] lg:h-[322.74px] shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                <Image
                  src="/service-4-cta-2.png"
                  alt="Virtualization Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 635px"
                  loading="lazy"
                />
              </div>

              {/* Bottom Right Image */}
              <div
                className="relative rounded-[18px] overflow-hidden w-full aspect-[635/293] lg:w-[635px] lg:h-[293.13px] shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                <Image
                  src="/service-4-cta-3.png"
                  alt="Cloud Backup & DRaaS"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 635px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cloud & Virtualization Matter Section - Exact from Figma (node-id=1-1970) */}
      <section
        className="py-16 sm:py-20 md:py-24 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-[78px]">
          {/* Heading */}
          <h2
            className="font-['TASA_Orbiter'] text-black mb-8 sm:mb-10 md:mb-12 lg:mb-[60px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.22",
              maxWidth: "973px",
            }}
          >
            Why Cloud & Virtualization Matter
          </h2>

          {/* Two Column Text Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-[60px]">
            <p
              className="font-['TASA_Orbiter'] text-black text-lg sm:text-xl md:text-2xl lg:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "576px",
              }}
            >
              As digital transformation accelerates, enterprises must balance
              performance, flexibility, and cost efficiency. Cloud and
              virtualization solutions eliminate hardware dependencies, enhance
              operational agility, and ensure business continuity — all while
              simplifying IT management.
            </p>
            <p
              className="font-['TASA_Orbiter'] text-black text-lg sm:text-xl md:text-2xl lg:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "573px",
              }}
            >
              With Nexobots, you gain a trusted technology partner that helps
              you plan, deploy, and manage virtualized environments and cloud
              infrastructures efficiently. From workload migration to backup and
              DR orchestration, we ensure your IT environment runs smarter,
              faster, and safer.
            </p>
          </div>

          {/* Get In Touch Button - Left aligned below text */}
          <div className="mt-10 sm:mt-12 lg:mt-[60px]">
            <Link
              href="#contact"
              className="inline-flex h-[45px] w-[155px] items-center justify-between rounded-[75px] border border-white/30 bg-black transition-all duration-300 hover:bg-black/90 hover:shadow-xl hover:scale-105 shadow-md"
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

      {/* Cloud Infrastructure Deployment & Management Section - Exact from Figma (node-id=1-1978) */}
      <section
        className="py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-[60px] lg:px-[78px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="rounded-[21px] py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-[60px] lg:px-[78px]"
            style={{
              backgroundColor: "#F8F8F8",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 md:mb-10 lg:mb-[40px] text-2xl sm:text-3xl md:text-4xl lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1172px",
              }}
            >
              Cloud Infrastructure Deployment & Management
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-8 sm:mb-10 md:mb-12 lg:mb-[50px] text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1284px",
              }}
            >
              Streamline your journey to the cloud with secure, scalable, and
              high-performing infrastructure. We help design, deploy, and manage
              cloud environments across AWS, Microsoft Azure, Google Cloud, and
              private data centers.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-8 sm:mb-10 md:mb-12 lg:mb-[50px] flex flex-col lg:flex-row lg:gap-8">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden w-full mb-8 lg:mb-0 aspect-[640/457] lg:w-[640px] lg:h-[457px] lg:flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                <Image
                  src="/service-4-cloud-infrastructure.png"
                  alt="Cloud Infrastructure Deployment & Management"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="w-full lg:absolute lg:top-0 lg:left-[673.5px] lg:w-[719px]"
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 md:mb-10 lg:mb-[50px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                {/* Desktop: Animated progress bar - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative w-full lg:w-[719px]" style={{ height: "365px" }}>
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
                    {cloudInfrastructureServices.map((service, i) => (
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

                {/* Mobile/Tablet: Simple list */}
                <div className="lg:hidden space-y-4 sm:space-y-6">
                  {cloudInfrastructureServices.map((service, i) => (
                    <p
                      key={i}
                      className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl"
                      style={{
                        fontWeight: 600,
                        lineHeight: "1.4",
                      }}
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              className="w-full lg:w-[1223px] mt-8 sm:mt-10 md:mt-12 lg:mt-[50px]"
            >
              <div className="mb-6 sm:mb-8 lg:mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[20px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black text-lg sm:text-xl md:text-2xl lg:text-[32px] max-w-full lg:max-w-[1223px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.38",
                  }}
                >
                  Improved scalability, lower infrastructure costs, and
                  enterprise-grade security.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all duration-300 hover:bg-black/90 hover:shadow-xl hover:scale-105 shadow-md"
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

      {/* Virtualization Services Section - Exact from Figma (node-id=1-2003) */}
      <section
        className="py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-[60px] lg:px-[78px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="rounded-[21px] py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-[60px] lg:px-[78px]"
            style={{
              backgroundColor: "#F8F8F8",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 md:mb-10 lg:mb-[40px] text-2xl sm:text-3xl md:text-4xl lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "953px",
              }}
            >
              Virtualization Services
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-8 sm:mb-10 md:mb-12 lg:mb-[50px] text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1151px",
              }}
            >
              Maximize resource efficiency and operational continuity with
              robust virtualization solutions. Our experts deliver end-to-end
              support for server, desktop, and storage virtualization, leveraging
              platforms like VMware, Hyper-V, and Citrix.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-8 sm:mb-10 md:mb-12 lg:mb-[50px] flex flex-col lg:flex-row lg:gap-8">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden w-full mb-8 lg:mb-0 aspect-[640/457] lg:w-[640px] lg:h-[457px] lg:flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                <Image
                  src="/service-4-virtualization.png"
                  alt="Virtualization Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="w-full lg:absolute lg:top-0 lg:left-[673.5px] lg:w-[719px]"
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 md:mb-10 lg:mb-[50px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                {/* Desktop: Animated progress bar - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative w-full lg:w-[719px]" style={{ height: "365px" }}>
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
                    {virtualizationServices.map((service, i) => (
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

                {/* Mobile/Tablet: Simple list */}
                <div className="lg:hidden space-y-4 sm:space-y-6">
                  {virtualizationServices.map((service, i) => (
                    <p
                      key={i}
                      className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl"
                      style={{
                        fontWeight: 600,
                        lineHeight: "1.4",
                      }}
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              className="w-full lg:w-[1222px] mt-8 sm:mt-10 md:mt-12 lg:mt-[50px]"
            >
              <div className="mb-6 sm:mb-8 lg:mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[20px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black text-lg sm:text-xl md:text-2xl lg:text-[32px] max-w-full lg:max-w-[1222px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.38",
                  }}
                >
                  Higher system availability, faster provisioning, and reduced
                  hardware footprint.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all duration-300 hover:bg-black/90 hover:shadow-xl hover:scale-105 shadow-md"
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

      {/* Cloud Backup & Disaster Recovery (DRaaS) Section - Exact from Figma (node-id=1-2027) */}
      <section
        className="py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-[60px] lg:px-[78px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div
            className="rounded-[21px] py-8 px-6 sm:py-10 sm:px-8 md:py-12 md:px-12 lg:py-[60px] lg:px-[78px]"
            style={{
              backgroundColor: "#F8F8F8",
            }}
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 md:mb-10 lg:mb-[40px] text-2xl sm:text-3xl md:text-4xl lg:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1151px",
              }}
            >
              Cloud Backup & Disaster Recovery (DRaaS)
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-black mb-8 sm:mb-10 md:mb-12 lg:mb-[50px] text-base sm:text-lg md:text-xl lg:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
                maxWidth: "1151px",
              }}
            >
              Ensure uninterrupted operations with a resilient cloud-based
              backup and recovery framework. We design Disaster Recovery as a
              Service (DRaaS) models that safeguard critical workloads and
              ensure rapid recovery during outages.
            </p>

            {/* Image and Key Services Row */}
            <div className="relative mb-8 sm:mb-10 md:mb-12 lg:mb-[50px] flex flex-col lg:flex-row lg:gap-8">
              {/* Image */}
              <div
                className="relative rounded-[13px] overflow-hidden w-full mb-8 lg:mb-0 aspect-[640/457] lg:w-[640px] lg:h-[457px] lg:flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                <Image
                  src="/service-4-backup-draas.png"
                  alt="Cloud Backup & Disaster Recovery"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="w-full lg:absolute lg:top-0 lg:left-[673.5px] lg:w-[719px]"
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-6 sm:mb-8 md:mb-10 lg:mb-[50px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Key Services
                </h3>

                {/* Desktop: Animated progress bar - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative w-full lg:w-[719px]" style={{ height: "365px" }}>
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
                    {backupDraasServices.map((service, i) => (
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

                {/* Mobile/Tablet: Simple list */}
                <div className="lg:hidden space-y-4 sm:space-y-6">
                  {backupDraasServices.map((service, i) => (
                    <p
                      key={i}
                      className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl"
                      style={{
                        fontWeight: 600,
                        lineHeight: "1.4",
                      }}
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Outcome */}
            <div
              className="w-full lg:w-[1003px] mt-8 sm:mt-10 md:mt-12 lg:mt-[50px]"
            >
              <div className="mb-6 sm:mb-8 lg:mb-[40px]">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[20px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-black text-lg sm:text-xl md:text-2xl lg:text-[32px] max-w-full lg:max-w-[1003px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.38",
                  }}
                >
                  Minimal downtime, faster recovery, and assured data
                  protection.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex h-[45px] w-[225px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all duration-300 hover:bg-black/90 hover:shadow-xl hover:scale-105 shadow-md"
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

      {/* Why Choose Nexobots Section - Exact from Figma (node-id=1-1928) */}
      <section
        className="hidden lg:block py-16 sm:py-20 md:py-24 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-[69px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-10 sm:mb-12 md:mb-14 lg:mb-[60px] text-2xl sm:text-3xl md:text-4xl lg:text-[40px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              margin: "0 auto 60px",
            }}
          >
            Why Choose Nexobots for Cloud & Virtualization Support
          </h2>

          {/* Benefit Cards Grid - 5 cards in a row - Exact from Figma */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6"
          >
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className="rounded-[21px] p-5 flex flex-col gap-5 bg-white lg:w-[241px] lg:h-[242px] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-2 hover:border-red-600/10"
                style={{
                  padding: index === 0 ? "20px 16px" : "20px",
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
        className="hidden lg:block py-16 sm:py-20 md:py-24 lg:py-[120px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-[78px]">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-12 sm:mb-16 md:mb-20 lg:mb-[80px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            FAQs – Cloud & Virtualization Support
          </h2>

          <div className="space-y-6 sm:space-y-8 lg:space-y-[40px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#D7D7D7] rounded-[15px] w-full p-5 sm:p-6 lg:p-5 lg:w-[1225px] shadow-md hover:shadow-xl transition-all duration-300 hover:bg-[#CECECE] cursor-pointer"
                style={{
                  height: faq.answer ? "auto" : "auto",
                  minHeight: faq.answer ? "120px" : "64px",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3
                      className="font-['Manrope'] text-[#333333] mb-3 sm:mb-4 lg:mb-[16px] text-base sm:text-lg lg:text-xl"
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
