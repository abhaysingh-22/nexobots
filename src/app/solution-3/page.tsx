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
    title: "Multi-Technology Expertise",
    description:
      "From biometrics and RFID to mobile and cloud access, we deliver complete, integrated control systems.",
  },
  {
    title: "Certified OEM Partnerships",
    description:
      "We work with leading brands such as eSSL, HID, Matrix, Hikvision, and ZKTeco for proven reliability and performance.",
  },
  {
    title: "End-to-End Implementation",
    description:
      "Design, installation, configuration, and integration — all managed by certified engineers.",
  },
  {
    title: "Integrated Security Architecture",
    description:
      "Seamless interoperability with CCTV, network, and IT infrastructure for holistic security management.",
  },
  {
    title: "SLA-Based Support & Maintenance",
    description:
      "Regular health checks, software updates, and quick on-site response ensure maximum uptime.",
  },
] as const;

const biometricServices = [
  "Fingerprint, face & iris recognition terminals",
  "Multi-modal biometric integration",
  "Contactless & AI-powered recognition systems",
  "Secure database management & access control linkage",
  "User enrollment & policy configuration",
] as const;

const rfidServices = [
  "RFID & proximity card reader installation",
  "Time attendance & door controller setup",
  "Zonal & multi-door access management",
  "User database configuration",
  "Access report generation & event logging",
] as const;

const attendanceServices = [
  "Real-time attendance capture & reporting",
  "Integration with ERP/HR systems",
  "Leave & shift management automation",
  "Cloud-based dashboards & mobile apps",
  "Custom report generation",
] as const;

const multiDoorServices = [
  "Centralized access server setup",
  "Door controllers & zone-based mapping",
  "Role-based user access configuration",
  "Alarm integration for unauthorized entry",
  "Real-time monitoring & audit trails",
] as const;

const cctvIntegrationServices = [
  "Biometric-CCTV integration via VMS",
  "Event-based video recording",
  "Door access-triggered visual verification",
  "Alarm & notification setup",
  "Unified command center display",
] as const;

const cloudMobileServices = [
  "Cloud-hosted access management platforms",
  "Mobile credential & QR code-based entry",
  "Remote monitoring & control via apps",
  "Multi-site synchronization & analytics",
  "Secure backups & encrypted communication",
] as const;

const faqs = [
  {
    question: "What types of biometric systems do you offer?",
    answer:
      "We provide fingerprint, facial, iris, and palm recognition systems — both contact-based and contactless — for different security levels.",
  },
  {
    question: "Do you offer cloud-based or remote access management?",
    answer:
      "Absolutely. Our cloud-enabled platforms allow centralized management and mobile-based credentialing for easy access control.",
  },
  {
    question: "Do you provide attendance reports and analytics?",
    answer:
      "Yes. Custom dashboards and reports provide insights into attendance, shifts, and access trends in real-time.",
  },
  {
    question: "What industries do you cater to?",
    answer:
      "We serve corporates, education institutions, manufacturing, healthcare, government, and retail sectors.",
  },
  {
    question: "Do you provide AMC and technical support post-installation?",
    answer:
      "Yes. We offer comprehensive AMC and Managed Services to ensure smooth, ongoing system performance",
  },
  {
    question: "How scalable are your solutions?",
    answer:
      "Our systems are modular and can scale from single-door installations to enterprise-level, multi-location access networks.",
  },
  {
    question: "Can access control integrate with existing surveillance and HR systems?",
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

export default function Solution3Page() {
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
  const biometricPoints = calculateServicePoints(biometricServices.length);
  const rfidPoints = calculateServicePoints(rfidServices.length);
  const attendancePoints = calculateServicePoints(attendanceServices.length);
  const multiDoorPoints = calculateServicePoints(multiDoorServices.length);
  const cctvIntegrationPoints = calculateServicePoints(cctvIntegrationServices.length);
  const cloudMobilePoints = calculateServicePoints(cloudMobileServices.length);

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

  // Set up animations for all sections (first section has height 370, others have 365)
  useEffect(() => createAnimation(setRedBarTop1, setActiveIndex1, biometricPoints, 370, 0), []);
  useEffect(() => createAnimation(setRedBarTop2, setActiveIndex2, rfidPoints, 365, 800), []);
  useEffect(() => createAnimation(setRedBarTop3, setActiveIndex3, attendancePoints, 365, 1600), []);
  useEffect(() => createAnimation(setRedBarTop4, setActiveIndex4, multiDoorPoints, 365, 2400), []);
  useEffect(() => createAnimation(setRedBarTop5, setActiveIndex5, cctvIntegrationPoints, 365, 3200), []);
  useEffect(() => createAnimation(setRedBarTop6, setActiveIndex6, cloudMobilePoints, 365, 4000), []);

  return (
    <div className="bg-[#F8F8F8] text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[750px] xl:min-h-[935px]">
        <div className="absolute inset-0">
          <Image
            src="/solution-3-hero-bg.png"
            alt="Biometric & Access Control Solutions Hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.63)" }}
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
                Control Smartly. Authenticate Securely. Access Seamlessly.
              </h1>

              <p
                className="font-['TASA_Orbiter'] text-white mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.44",
                  maxWidth: "812px",
                }}
              >
                Empower your workplace security with Nexobots' Biometric & Access
                Control Solutions.
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
            In today's connected enterprises, managing who enters, where they go,
            and when they access is critical to maintaining security and
            compliance. Traditional access systems are no longer enough —
            organizations need smart, biometric-driven solutions that combine
            accuracy, scalability, and real-time control.
          </p>

          <p
            className="font-['TASA_Orbiter'] text-[#727272] mx-auto text-center mb-6 sm:mb-8 lg:mb-[40px] text-sm sm:text-base md:text-lg lg:text-xl"
            style={{
              fontWeight: 600,
              lineHeight: "1.17",
              maxWidth: "918px",
            }}
          >
            Nexobots Technologies delivers Biometric & Access Control Solutions
            that ensure secure, seamless, and centralized identity management.
            From fingerprint and facial recognition to RFID and integrated
            attendance systems, we help enterprises build intelligent environments
            that safeguard people, assets, and data.
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
              <div className="relative rounded-[18px] overflow-hidden w-full aspect-[549/400] sm:aspect-[549/500] lg:aspect-[549/623]">
                <Image
                  src="/solution-3-cta-1.png"
                  alt="Biometric Access Control"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 549px, 100vw"
                  loading="lazy"
                />
              </div>

              <div className="grid gap-4 sm:gap-6">
                <div className="relative rounded-[18px] overflow-hidden w-full aspect-[16/9] lg:aspect-[635/312]">
                  <Image
                    src="/solution-3-cta-2.png"
                    alt="Access Management"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 635px, 100vw"
                    loading="lazy"
                  />
                </div>
                <div className="relative rounded-[18px] overflow-hidden w-full aspect-[16/9] lg:aspect-[635/283]">
                  <Image
                    src="/solution-3-cta-3.png"
                    alt="Secure Access"
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

      {/* Why Access Control Matters */}
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
            Why Access Control Matters
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-[40px] mb-6 sm:mb-8 lg:mb-[40px]">
            <p
              className="font-['TASA_Orbiter'] text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
              }}
            >
              As businesses grow, securing physical and digital perimeters
              becomes increasingly complex. Unauthorized access, identity fraud,
              and compliance gaps can expose organizations to significant risks.
              Intelligent access control bridges the gap between convenience and
              protection — combining automation with precision.
            </p>
            <p
              className="font-['TASA_Orbiter'] text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{
                fontWeight: 500,
                lineHeight: "1.32",
              }}
            >
              With Nexobots, you gain a unified, technology-driven access
              ecosystem that ensures real-time monitoring, audit-ready reporting,
              and integration with surveillance and HR systems. Our solutions
              adapt to every scale — from single-site offices to multi-location
              enterprises.
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

      {/* Biometric Authentication Systems */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2
              className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]"
              style={{ fontWeight: 600, lineHeight: "1.22" }}
            >
              Biometric Authentication Systems
            </h2>

            <p
              className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
              style={{ fontWeight: 600, lineHeight: "1.26" }}
            >
              Ensure identity verification with unmatched accuracy and convenience.
              We deploy biometric solutions — including fingerprint, facial, iris,
              and palm recognition — tailored to your security and operational
              needs.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image
                  src="/solution-3-biometric-section.png"
                  alt="Biometric Authentication Systems"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 640px, 100vw"
                />
              </div>

              <div className="w-full">
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
                  style={{ fontWeight: 600, lineHeight: "1.08" }}
                >
                  Key Services
                </h3>

                {/* Desktop: Animated progress */}
                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "370px" }}>
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "9px",
                      height: "370px",
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
                    className="space-y-[50px]"
                    style={{ paddingLeft: "52px", paddingTop: "11px" }}
                  >
                    {biometricServices.map((service, i) => (
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
                  {biometricServices.map((service, i) => (
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
                  Accurate authentication, enhanced security, and reduced identity
                  fraud.
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

      {/* RFID & Smart Card Access Control Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              RFID & Smart Card Access Control
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Combine simplicity with efficiency using RFID- and card-based access
              systems. Ideal for workplaces, campuses, and hospitality sectors,
              these systems offer flexible entry management and audit trail
              capabilities.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image src="/solution-3-rfid-section.png" alt="RFID & Smart Card Access Control" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop2}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {rfidServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex2 === i ? "24px" : "20px", fontWeight: activeIndex2 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {rfidServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
                  Streamlined entry control and reliable attendance management
                  with minimal manual intervention.
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

      {/* Integrated Attendance & Workforce Management Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Integrated Attendance & Workforce Management
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Automate attendance tracking and workforce management through
              centralized, real-time systems. We integrate biometric devices with
              HRMS and payroll platforms for seamless data synchronization.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image src="/solution-3-attendance-section.png" alt="Integrated Attendance & Workforce Management" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop3}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {attendanceServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex3 === i ? "24px" : "20px", fontWeight: activeIndex3 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {attendanceServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
                  Accurate attendance, higher productivity, and effortless HR
                  compliance.
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

      {/* Multi-Door & Enterprise Access Control Systems Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Multi-Door & Enterprise Access Control Systems
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Manage and monitor access across multiple entry points, floors, or
              facilities — all from one centralized console. Our scalable systems
              are ideal for large enterprises, campuses, and critical
              infrastructure.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image src="/solution-3-multi-door-section.png" alt="Multi-Door & Enterprise Access Control Systems" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop4}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {multiDoorServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex4 === i ? "24px" : "20px", fontWeight: activeIndex4 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {multiDoorServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
                  Centralized visibility, scalable management, and improved
                  compliance across all locations.
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

      {/* Integration with CCTV & Surveillance Systems Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Integration with CCTV & Surveillance Systems
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Create a unified security ecosystem by linking access control with
              surveillance. Every access event can trigger video capture, audit
              logging, or real-time alerts for maximum situational awareness.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image src="/solution-3-cctv-integration-section.png" alt="Integration with CCTV & Surveillance Systems" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop5}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {cctvIntegrationServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex5 === i ? "24px" : "20px", fontWeight: activeIndex5 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {cctvIntegrationServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
                  Enhanced accountability, incident traceability, and real-time
                  verification.
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

      {/* Cloud-Based & Mobile Access Solutions Section */}
      <section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
            <h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
              Cloud-Based & Mobile Access Solutions
            </h2>

            <p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
              Enable flexible, modern access management with cloud-hosted and
              mobile-controlled systems. Our solutions provide secure remote
              management, real-time data access, and seamless scalability.
            </p>

            <div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
              <div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
                <Image src="/solution-3-cloud-mobile-section.png" alt="Cloud-Based & Mobile Access Solutions" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
              </div>

              <div className="w-full">
                <h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

                <div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
                  <div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
                  <div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop6}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
                  <div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
                    {cloudMobileServices.map((service, i) => (
                      <p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex6 === i ? "24px" : "20px", fontWeight: activeIndex6 === i ? 700 : 600, lineHeight: "1.08", transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out" }}>{service}</p>
                    ))}
                  </div>
                </div>

                <ul className="lg:hidden space-y-3 sm:space-y-4">
                  {cloudMobileServices.map((service, i) => (
                    <li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full">
              <div className="mb-3 sm:mb-4 lg:mb-[20px]">
                <h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
                <p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
                  Remote control, easy scalability, and complete visibility —
                  anytime, anywhere.
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
            Why Choose Nexobots for Biometric & Access Control Solutions
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
            FAQs – Biometric & Access Control Solutions
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
