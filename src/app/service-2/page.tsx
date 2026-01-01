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
    title: "Proactive, Not Reactive",
    description:
      "We detect and address issues before they impact operations — ensuring consistent uptime.",
  },
  {
    title: "24/7 NOC Monitoring",
    description:
      "Round-the-clock visibility and support ensure complete control of your IT environment.",
  },
  {
    title: "Certified Multi-Vendor Expertise",
    description:
      "Our team supports a wide range of OEMs, including Cisco, D-Link Fortinet, Palo Alto, and Aruba.",
  },
  {
    title: "SLA-Driven Service Commitments",
    description:
      "Guaranteed response times and resolution metrics for predictable, reliable support.",
  },
  {
    title: "Analytics-Backed Optimization",
    description:
      "We use monitoring data to continuously fine-tune systems for peak performance.",
  },
] as const;

const itSupportServices = [
  "Helpdesk & remote assistance (L1–L3 support)",
  "On-site engineer deployment",
  "Incident & problem management",
  "Preventive maintenance scheduling",
  "Patch & firmware updates",
] as const;

const monitoringServices = [
  "24/7 NOC-based monitoring",
  "Performance analytics & health checks",
  "Fault detection & alert management",
  "Bandwidth utilization tracking",
  "Server, network, and endpoint monitoring",
] as const;

const optimizationServices = [
  "Performance audits & tuning",
  "Capacity planning & resource balancing",
  "System configuration optimization",
  "Network throughput & latency improvements",
  "Reporting & continuous improvement plans",
] as const;

const faqs = [
  {
    question: "What's included in IT Support Services?",
    answer:
      "It includes helpdesk support, on-site troubleshooting, preventive maintenance, patch updates, and incident resolution — tailored to your operational needs.",
  },
  {
    question: "How do you ensure issues are resolved quickly?",
    answer:
      "We follow SLA-based response and escalation models to ensure critical issues are addressed within defined timeframes.",
  },
  {
    question: "How does optimization improve performance?",
    answer:
      "Optimization enhances configuration, load balancing, and system tuning — resulting in faster response times and reduced operational costs.",
  },
  {
    question: "Do you provide regular performance reports?",
    answer:
      "Yes. We provide monthly or quarterly reports with detailed performance metrics, trend analysis, and improvement recommendations.",
  },
  {
    question: "Can you monitor multi-vendor and hybrid environments?",
    answer:
      "Absolutely. Our tools and team support multi-vendor setups and hybrid infrastructures — across on-prem, cloud, and virtualized systems.",
  },
  {
    question: "Do you provide 24/7 monitoring?",
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

export default function Service2Page() {
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
  const itSupportPoints = calculateServicePoints(itSupportServices.length);
  const monitoringPoints = calculateServicePoints(monitoringServices.length);
  const optimizationPoints = calculateServicePoints(optimizationServices.length);

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
  useEffect(() => createAnimation(setRedBarTop1, setActiveIndex1, itSupportPoints, 365, 0), []);
  useEffect(() => createAnimation(setRedBarTop2, setActiveIndex2, monitoringPoints, 365, 800), []);
  useEffect(() => createAnimation(setRedBarTop3, setActiveIndex3, optimizationPoints, 365, 1600), []);

  return (
    <div className="text-black" style={{ backgroundColor: "#F8F8F8", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section - Enhanced Design */}
      <section className="relative h-[550px] sm:h-[600px] md:h-[750px] lg:h-[935px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/service-2-hero-bg-437369.png"
            alt="IT Support, Monitoring & Optimization Hero"
            fill
            priority
            className="object-cover scale-105 hover:scale-100 transition-transform duration-[3000ms]"
            sizes="100vw"
          />
        </div>
        {/* Enhanced Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-0">
          {/* Title */}
          <div className="lg:absolute lg:left-[142px] lg:top-[169px]">
            <h1
              className="font-['TASA_Orbiter'] text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-[1.2] sm:leading-[1.25] lg:leading-[1.32] max-w-[95%] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[838px] animate-fade-in"
              style={{
                fontWeight: 600,
                textShadow: "0 2px 20px rgba(0,0,0,0.3)",
              }}
            >
              Monitor Smarter. Respond Faster. Perform Better.
            </h1>
          </div>

          {/* Description */}
          <div className="mt-4 sm:mt-6 md:mt-8 lg:absolute lg:left-[142px] lg:top-[366px] lg:mt-0">
            <p
              className="font-['TASA_Orbiter'] text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] leading-relaxed lg:leading-[1.44] max-w-[95%] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[812px]"
              style={{
                fontWeight: 500,
              }}
            >
              Ensure uninterrupted operations and peak performance with
              Nexobots' IT Support, Monitoring & Optimization Services.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:absolute lg:left-[142px] lg:top-[468px] lg:mt-0">
            <Link
              href="#contact"
              className="group inline-flex h-11 sm:h-12 md:h-14 lg:h-[60px] xl:h-[67px] w-auto min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[261px] items-center justify-between rounded-full border border-white/20 bg-white hover:bg-white/95 transition-all duration-300 hover:shadow-xl hover:shadow-white/20 px-4 sm:px-5 md:px-6 lg:px-7"
            >
              <span
                className="font-['Manrope'] text-black whitespace-nowrap text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide"
              >
                Talk to an Expert
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-red-50 flex items-center justify-center ml-3 group-hover:bg-red-100 transition-colors duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform duration-300"
                >
                  <path
                    d="M7 4L13 10L7 16"
                    stroke="#E11E24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-28"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-[78px]">
          {/* Main Text */}
          <p
            className="font-['TASA_Orbiter'] text-black mx-auto text-center text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-14 max-w-[95%] sm:max-w-[90%] lg:max-w-[977px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.5",
            }}
          >
            In a world where business runs 24/7, IT performance directly
            impacts productivity, customer experience, and profitability. Yet,
            unmonitored systems, slow response to incidents, and reactive
            maintenance can lead to costly downtimes and security risks.
          </p>

          {/* Secondary Text */}
          <p
            className="font-['TASA_Orbiter'] text-gray-600 mx-auto text-center text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-14 lg:mb-16 max-w-[95%] sm:max-w-[90%] lg:max-w-[869px]"
            style={{
              fontWeight: 500,
              lineHeight: "1.6",
            }}
          >
            Nexobots Technologies delivers comprehensive IT Support, Monitoring
            & Optimization Services that keep your infrastructure secure,
            efficient, and always-on. From real-time network monitoring to
            proactive performance tuning, we ensure your IT ecosystem runs
            seamlessly — so your teams can focus on innovation, not
            interruptions.
          </p>

          {/* Get In Touch Button */}
          <div className="flex justify-center mb-8 sm:mb-10 md:mb-14 lg:mb-16">
            <Link
              href="#contact"
              className="group inline-flex h-11 sm:h-12 w-[155px] items-center justify-between rounded-full bg-black hover:bg-gray-900 transition-all duration-300 hover:shadow-lg px-5 sm:px-6"
            >
              <span
                className="font-['Manrope'] text-white whitespace-nowrap text-sm sm:text-[15px] font-semibold tracking-wide"
              >
                Get In Touch
              </span>
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-0.5 transition-transform duration-300"
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

          {/* Three Image Cards */}
          <div className="mx-auto flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-[17px] max-w-full lg:max-w-[1201px]">
            {/* Left Large Image */}
            <div
              className="relative rounded-2xl sm:rounded-[18px] overflow-hidden w-full lg:w-[549px] h-56 sm:h-72 md:h-80 lg:h-[588px] group cursor-pointer"
            >
              <Image
                src="/service-2-cta-1.png"
                alt="IT Support Services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 549px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Right Two Images Stacked */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[26px] w-full lg:w-auto">
              {/* Top Right Image */}
              <div
                className="relative rounded-2xl sm:rounded-[18px] overflow-hidden w-full sm:w-1/2 lg:w-[635px] h-44 sm:h-52 md:h-56 lg:h-[295px] group cursor-pointer"
              >
                <Image
                  src="/service-2-cta-2.png"
                  alt="Network Monitoring"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 635px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Bottom Right Image */}
              <div
                className="relative rounded-2xl sm:rounded-[18px] overflow-hidden w-full sm:w-1/2 lg:w-[635px] h-44 sm:h-52 md:h-56 lg:h-[268px] group cursor-pointer"
              >
                <Image
                  src="/service-2-cta-3.png"
                  alt="Performance Optimization"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 635px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IT Support, Monitoring & Optimization Matters Section */}
      <section
        className="py-12 sm:py-16 md:py-20 lg:py-24"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl mx-auto"
          >
            Why IT Support, Monitoring & Optimization Matter
          </h2>

          {/* Two Column Text Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-14">
            <p
              className="font-['TASA_Orbiter'] text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.6",
              }}
            >
              As digital systems become more interconnected, visibility and
              responsiveness are critical. Proactive monitoring helps detect
              anomalies early, while structured support frameworks ensure fast
              resolution and consistent uptime. Optimization takes it further —
              ensuring systems deliver maximum output with minimal resource
              usage.
            </p>
            <p
              className="font-['TASA_Orbiter'] text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.6",
              }}
            >
              With Nexobots, you gain a trusted partner offering 24/7 Network
              Operations Center (NOC) monitoring, multi-tier IT support, and
              ongoing optimization that aligns technology with business
              performance goals.
            </p>
          </div>

          {/* Get In Touch Button */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14">
            <Link
              href="#contact"
              className="group inline-flex h-11 sm:h-12 w-[155px] items-center justify-between rounded-full bg-black hover:bg-gray-900 transition-all duration-300 hover:shadow-lg px-5 sm:px-6"
            >
              <span
                className="font-['Manrope'] text-white whitespace-nowrap text-sm sm:text-[15px] font-semibold tracking-wide"
              >
                Get In Touch
              </span>
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-0.5 transition-transform duration-300"
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

      {/* IT Support Services Section */}
      <section
        className="py-10 sm:py-12 md:py-14 lg:py-16 px-5 sm:px-8 md:px-12 lg:px-[78px]"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-2xl sm:rounded-[21px] bg-white/50 backdrop-blur-sm p-5 sm:p-8 md:p-12 lg:p-16">
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px]"
              style={{
                fontWeight: 600,
                lineHeight: "1.15",
              }}
            >
              IT Support Services
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-gray-700 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.6",
              }}
            >
              Comprehensive on-site and remote support designed to keep your
              systems operational and secure — anytime, anywhere. Our certified
              engineers handle everything from troubleshooting to preventive
              maintenance with SLA-backed response times.
            </p>

            {/* Image and Key Services Row */}
            <div className="flex flex-col lg:flex-row lg:relative mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-6 sm:gap-8 lg:gap-0">
              {/* Image */}
              <div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden w-full lg:w-[640px] h-52 sm:h-64 md:h-80 lg:h-[465px] group"
              >
                <Image
                  src="/service-2-it-support.png"
                  alt="IT Support Services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="w-full lg:absolute lg:top-0 lg:left-[673.5px] lg:w-[719px]"
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
                >
                  Key Services
                </h3>

                {/* Desktop: Animated progress - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative w-full lg:w-[719px]" style={{ height: "365px" }}>
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
                    {itSupportServices.map((service, i) => (
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
                  {itSupportServices.map((service, i) => (
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

            {/* Outcome */}
            <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
                >
                  Faster issue resolution, minimal downtime, and predictable IT
                  operations.
                </p>
              </div>
              <Link
                href="#contact"
                className="group inline-flex h-11 sm:h-12 items-center justify-center gap-2 sm:gap-3 rounded-full bg-black hover:bg-gray-900 transition-all duration-300 hover:shadow-lg px-5 sm:px-6"
              >
                <span
                  className="font-['Manrope'] text-white text-sm sm:text-[15px] font-semibold tracking-wide"
                >
                  Let's Discuss Needs
                </span>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
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
        </div>
      </section>

      {/* Network & Infrastructure Monitoring Section - Exact from Figma (node-id=1-4340) */}
      <section
        className="py-10 px-4 sm:py-12 sm:px-8 md:py-14 md:px-12 lg:py-16 lg:px-16"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div
            className="rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 lg:p-14 bg-white/50 backdrop-blur-sm"
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight"
            >
              Network & Infrastructure Monitoring
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-gray-700 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl font-medium leading-relaxed"
            >
              Stay ahead of outages and bottlenecks with continuous, AI-driven
              network monitoring. We deliver complete visibility into your
              infrastructure through centralized dashboards and real-time
              alerts.
            </p>

            {/* Image and Key Services Row */}
            <div className="flex flex-col lg:flex-row lg:relative mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-6 sm:gap-8 lg:gap-0">
              {/* Image */}
              <div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden w-full lg:w-[640px] h-52 sm:h-64 md:h-80 lg:h-[476px] group"
              >
                <Image
                  src="/service-2-monitoring.png"
                  alt="Network & Infrastructure Monitoring"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="w-full lg:absolute lg:top-0 lg:left-[673.5px] lg:w-[719px]"
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
                >
                  Key Services
                </h3>

                {/* Desktop: Animated progress - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative w-full lg:w-[719px]" style={{ height: "365px" }}>
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
                      top: `${redBarTop2}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                    }}
                  />
                  <div
                    className="space-y-[54px]"
                    style={{ paddingLeft: "52px", paddingTop: "10px" }}
                  >
                    {monitoringServices.map((service, i) => (
                      <p
                        key={i}
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                          fontSize: activeIndex2 === i ? "24px" : "20px",
                          fontWeight: activeIndex2 === i ? 700 : 600,
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
                  {monitoringServices.map((service, i) => (
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

            {/* Outcome */}
            <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
                >
                  Early issue detection, improved uptime, and data-driven
                  infrastructure insights.
                </p>
              </div>
              <Link
                href="#contact"
                className="group inline-flex h-11 sm:h-12 items-center justify-center gap-2 sm:gap-3 rounded-full bg-black hover:bg-gray-900 transition-all duration-300 hover:shadow-lg px-5 sm:px-6"
              >
                <span
                  className="font-['Manrope'] text-white text-sm sm:text-[15px] font-semibold tracking-wide"
                >
                  Let's Discuss Needs
                </span>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
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
        </div>
      </section>

      {/* IT Performance Optimization Section - Exact from Figma (node-id=1-4364) */}
      <section
        className="py-10 px-4 sm:py-12 sm:px-8 md:py-14 md:px-12 lg:py-16 lg:px-16"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div
            className="rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 lg:p-14 bg-white/50 backdrop-blur-sm"
          >
            {/* Title */}
            <h2
              className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight"
            >
              IT Performance Optimization
            </h2>

            {/* Description */}
            <p
              className="font-['TASA_Orbiter'] text-gray-700 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl font-medium leading-relaxed"
            >
              Transform your IT systems into performance powerhouses through
              strategic optimization. We analyze workloads, configurations, and
              network flows to enhance speed, stability, and cost efficiency.
            </p>

            {/* Image and Key Services Row */}
            <div className="flex flex-col lg:flex-row lg:relative mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-6 sm:gap-8 lg:gap-0">
              {/* Image */}
              <div
                className="relative rounded-xl sm:rounded-2xl overflow-hidden w-full lg:w-[640px] h-52 sm:h-64 md:h-80 lg:h-[471px] group"
              >
                <Image
                  src="/service-2-optimization.png"
                  alt="IT Performance Optimization"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>

              {/* Key Services with Progress Bar - Right side */}
              <div
                className="w-full lg:absolute lg:top-0 lg:left-[673.5px] lg:w-[719px]"
              >
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
                >
                  Key Services
                </h3>

                {/* Desktop: Animated progress - EXACT COPY from solution-2 */}
                <div className="hidden lg:block relative w-full lg:w-[719px]" style={{ height: "365px" }}>
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
                    {optimizationServices.map((service, i) => (
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
                  {optimizationServices.map((service, i) => (
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

            {/* Outcome */}
            <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12">
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
                >
                  Outcome
                </h3>
                <p
                  className="font-['TASA_Orbiter'] text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed"
                >
                  Higher system efficiency, lower operational costs, and
                  enhanced user experience.
                </p>
              </div>
              <Link
                href="#contact"
                className="group inline-flex h-11 sm:h-12 items-center justify-center gap-2 sm:gap-3 rounded-full bg-black hover:bg-gray-900 transition-all duration-300 hover:shadow-lg px-5 sm:px-6"
              >
                <span
                  className="font-['Manrope'] text-white text-sm sm:text-[15px] font-semibold tracking-wide"
                >
                  Let's Discuss Needs
                </span>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
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
        </div>
      </section>

      {/* Why Choose Nexobots Section - Exact from Figma (node-id=1-4266) */}
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

      <Partners />

      {/* FAQs Section - Exact from Figma */}
      <section
        className="hidden lg:block py-12 sm:py-16 md:py-20 lg:py-24"
        style={{
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16">
          <h2
            className="font-['TASA_Orbiter'] text-black text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug max-w-4xl mx-auto"
          >
            FAQs – IT Support, Monitoring & Optimization Services
          </h2>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-200 hover:bg-gray-300/80 transition-colors duration-300 rounded-xl sm:rounded-2xl w-full p-4 sm:p-5 md:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3
                      className="font-['Manrope'] text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-snug"
                    >
                      {faq.question}
                    </h3>
                    {faq.answer && (
                      <p
                        className="font-['Manrope'] text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed"
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <button
                    className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/50 hover:bg-white transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.64 8.73L12 13.09L16.36 8.73"
                        stroke="#333333"
                        strokeWidth="2"
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


      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
