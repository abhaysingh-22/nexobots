"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Partners from "@/components/Partners";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const industries = [
  {
    id: "realestate",
    title: "Real Estate & Smart Infrastructure",
    subtitle: "Building intelligent, connected, and secure spaces for modern living and working.",
    image: "/industry-realestate-hero.png",
    what: "From commercial complexes to residential communities, Nexobots helps real estate developers and facility managers implement cutting-edge IT and security infrastructure that enhances safety, efficiency, and digital connectivity. Our solutions turn traditional spaces into smart, future-ready environments.",
    cta: "Transform Your Properties",
    services: [
      "IT & Security Consulting for smart city, commercial, and residential projects.",
      "System Integration of surveillance, access control, fire safety, and building automation systems.",
      "AMC & Managed Support for round-the-clock maintenance and uptime.",
      "Cloud & Virtualization Enablement for centralized monitoring and property management dashboards.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description: "High-speed backbone networks for buildings, estates, and townships with seamless Wi-Fi and IoT connectivity.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description: "Integrated CCTV, ANPR, and centralized monitoring for property-wide security and safety compliance.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description: "Smart access systems for residents, visitors, and facility staff with mobile or RFID authentication.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description: "Infrastructure design, implementation, and maintenance for smart buildings and control centers.",
      },
    ],
  },
  {
    id: "retail",
    title: "Retail & Hospitality",
    subtitle: "Driving customer experience, operational efficiency, and secure transactions.",
    image: "/industry-retail-hero.png",
    what: "Retail and hospitality businesses thrive on speed, reliability, and customer trust. Nexobots enables these industries with IT and security infrastructure that connects locations, enhances safety, and streamlines guest experiences.",
    cta: "Enhance Your Operations",
    services: [
      "IT Strategy Consulting for omnichannel and digital transformation.",
      "System Integration of POS, booking, CRM, and inventory systems.",
      "AMC & Monitoring to ensure always-on operations.",
      "Cloud Enablement for customer data, apps, and analytics.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description: "Reliable Wi-Fi and secure networks for POS, guests, and back-office systems.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description: "CCTV and remote monitoring for stores, hotels, and restaurants.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description: "Smart locks, staff access, and visitor management systems.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description: "IT management for POS, reservations, loyalty, and CRM systems.",
      },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare & Pharma",
    subtitle: "Securing sensitive data, optimizing patient care, and powering research innovation.",
    image: "/industry-healthcare-hero.png",
    what: "Healthcare and pharma organizations rely on technology for compliance, patient care, and R&D. Nexobots delivers resilient IT infrastructure and security solutions to safeguard data and improve operational efficiency.",
    cta: "Secure Your Healthcare IT",
    services: [
      "Compliance-Focused IT Consulting for healthcare regulations.",
      "System Integration of EMR, PACS, and ERP systems.",
      "Round-the-Clock AMC & Support for mission-critical environments.",
      "Cloud & Virtualization Solutions for data storage, recovery, and research continuity.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description: "Secure, compliant, and high-availability networks for hospitals, labs, and clinics",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description: "Monitoring systems for ICUs, pharmacies, and critical care units.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description: "Controlled access for OTs, pharma stores, and restricted facilities.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description: "Infrastructure for EMR, telemedicine, and research data management.",
      },
    ],
  },
  {
    id: "education",
    title: "Education & Research",
    subtitle: "Creating connected, secure, and tech-driven learning environments.",
    image: "/industry-education-hero.png",
    what: "We help institutions modernize their campuses with smart infrastructure that enhances collaboration, security, and digital learning. From classroom Wi-Fi to secure access, Nexobots delivers connected experiences for students, faculty, and researchers.",
    cta: "Let's Build a Smarter Campus",
    services: [
      "Consulting & IT Roadmaps for digital transformation in education.",
      "System Integration for LMS, library, and cloud platforms.",
      "Comprehensive AMC ensuring seamless academic operations.",
      "Virtualization Support for labs, learning platforms, and research networks.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description: "High-speed wired and wireless networks across classrooms, labs, and hostels.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description: "Monitoring systems for exam halls, campuses, and student facilities.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description: "Attendance, hostel entry, and visitor management using smart authentication.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description: "Implementation and support for e-learning and research environments.",
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate & Enterprise",
    subtitle: "Empowering enterprises with secure, scalable, and future-ready IT infrastructure.",
    image: "/industry-corporate-hero.png",
    what: "We help businesses build reliable, high-performance IT environments that connect teams, secure data, and support long-term growth. Our expertise spans structured cabling, networking, surveillance, and managed IT services — designed to keep enterprise operations running efficiently and securely.",
    cta: "Let's Discuss Your Enterprise Needs",
    services: [
      "Strategic IT Infrastructure Consulting for scalable enterprise systems.",
      "System Integration for seamless network and software interoperability.",
      "AMC & Support with proactive monitoring and guaranteed uptime.",
      "Cloud & Virtualization solutions for efficiency and hybrid environments.",
    ],
    features: [
      {
        icon: "wifi",
        title: "Smart Network Infrastructure",
        description: "Robust, enterprise-grade networks with secure switching, firewalls, and optimized Wi-Fi.",
      },
      {
        icon: "monitor",
        title: "Intelligent Surveillance",
        description: "IP-based CCTV, video management systems, and remote monitoring for complete visibility.",
      },
      {
        icon: "finger",
        title: "Secure Access & Biometrics",
        description: "Biometric and RFID-based access solutions for employees and visitors.",
      },
      {
        icon: "archive",
        title: "End-to-End IT Services",
        description: "From planning to management, ensure business continuity and performance.",
      },
    ],
  },
] as const;

// Icon Components matching Figma
const WifiIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9L2 10C5.5 6.5 10.5 6.5 14 10L15 9C10.5 4.5 3.5 4.5 1 9ZM5 13L6 14C7.5 12.5 9.5 12.5 11 14L12 13C9.5 10.5 4.5 10.5 5 13ZM9 17L12 20L15 17C13.5 15.5 10.5 15.5 9 17Z" fill="#E11E24"/>
  </svg>
);

const MonitorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#E11E24" strokeWidth="2" fill="none"/>
    <path d="M8 21H16" stroke="#E11E24" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 17V21" stroke="#E11E24" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const FingerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6761 22C17.0501 22 21.4065 17.5228 21.4065 12C21.4065 6.47715 17.0501 2 11.6761 2C6.30222 2 1.9458 6.47715 1.9458 12C1.9458 17.5228 6.30222 22 11.6761 22Z" stroke="#E11E24" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.6763 14.8799C10.7908 14.8799 10.0708 14.1399 10.0708 13.2299V10.7599C10.0708 9.84989 10.7908 9.10986 11.6763 9.10986C12.5618 9.10986 13.2818 9.84989 13.2818 10.7599V13.2299C13.2818 14.1399 12.5618 14.8799 11.6763 14.8799Z" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16.5219 13.4699C16.3273 16.0499 14.2256 18.0699 11.6762 18.0699C8.99063 18.0699 6.81104 15.8299 6.81104 13.0699V10.9299C6.81104 8.16993 8.99063 5.92993 11.6762 5.92993C14.1964 5.92993 16.2689 7.89992 16.5122 10.4199" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ArchiveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.75753 22H14.5957C19.4609 22 21.407 20 21.407 15V9C21.407 4 19.4609 2 14.5957 2H8.75753C3.89236 2 1.94629 4 1.94629 9V15C1.94629 20 3.89236 22 8.75753 22Z" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5148 7.75V14.5C17.5148 13.4 16.6391 12.5 15.5687 12.5H7.78445C6.71411 12.5 5.83838 13.4 5.83838 14.5V7.75C5.83838 6.65 6.71411 5.75 7.78445 5.75H15.5687C16.6391 5.75 17.5148 6.65 17.5148 7.75Z" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.4877 15.75H17.5146" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.83827 15.75H4.86523" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5148 14V11C17.5148 9.9 16.6391 9 15.5687 9H7.78445C6.71411 9 5.83838 9.9 5.83838 11V14" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5148 14.5V15.75H14.1092C14.1092 17.13 13.0194 18.25 11.6766 18.25C10.3338 18.25 9.244 17.13 9.244 15.75H5.83838V14.5C5.83838 13.4 6.71411 12.5 7.78445 12.5H15.5687C16.6391 12.5 17.5148 13.4 17.5148 14.5Z" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const getIconComponent = (icon: string) => {
  switch (icon) {
    case "wifi":
      return <WifiIcon />;
    case "monitor":
      return <MonitorIcon />;
    case "finger":
      return <FingerIcon />;
    case "archive":
      return <ArchiveIcon />;
    default:
      return null;
  }
};

// Service points with their positions (top offset from container)
// Each point is positioned at: paddingTop (7.65px) + cumulative heights + spacing
const servicePoints = [
  { top: 7.65, height: 80 }, // First point: 7.65px from top, 80px height
  { top: 7.65 + 80 + 8, height: 73 }, // Second: previous top + height + spacing (8px)
  { top: 7.65 + 80 + 8 + 73 + 8, height: 73 }, // Third
  { top: 7.65 + 80 + 8 + 73 + 8 + 73 + 8, height: 39 }, // Fourth
];

export default function IndustriesPage() {
  // Animation state for "How We Support You" sections
  // Corporate & Enterprise
  const [redBarTop1, setRedBarTop1] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);
  // Education & Research
  const [redBarTop2, setRedBarTop2] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  // Healthcare & Pharma
  const [redBarTop3, setRedBarTop3] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  // Retail & Hospitality
  const [redBarTop4, setRedBarTop4] = useState(0);
  const [activeIndex4, setActiveIndex4] = useState(0);
  // Real Estate & Smart Infrastructure
  const [redBarTop5, setRedBarTop5] = useState(0);
  const [activeIndex5, setActiveIndex5] = useState(0);
  
  // Fixed red bar height (increased to ensure it reaches last point)
  const redBarHeight = 70;
  
  // Total animation duration (in milliseconds)
  const animationDuration = 4000; // 4 seconds per cycle
  
  // Animation function factory
  const createAnimation = (
    setRedBarTop: (value: number) => void,
    setActiveIndex: (value: number) => void,
    offset: number = 0
  ) => {
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime - offset;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % animationDuration) / animationDuration; // 0 to 1
      
      // Calculate red bar position (moves from top to bottom)
      const totalHeight = 310; // Total container height
      const lastPointIndex = servicePoints.length - 1;
      const lastPoint = servicePoints[lastPointIndex];
      const lastPointTop = lastPoint.top;
      const thirdPoint = servicePoints[servicePoints.length - 2];
      const thirdPointBottom = thirdPoint.top + thirdPoint.height;
      
      // Calculate maxTop - allow bar to go all the way to bottom
      const maxTop = totalHeight - redBarHeight;
      const currentTop = progress * maxTop;
      
      // Determine active index based on red bar position
      const barCenter = currentTop + redBarHeight / 2;
      const barBottom = currentTop + redBarHeight;
      const barTop = currentTop;
      
      let newActiveIndex = 0;
      let bestMatch = -1;
      let bestOverlap = 0;
      
      // Check ALL points and find which one has the most overlap with the bar
      // This ensures we catch the third point even if barCenter is slightly off
      for (let i = 0; i < servicePoints.length; i++) {
        const pointTop = servicePoints[i].top;
        const pointBottom = servicePoints[i].top + servicePoints[i].height;
        const pointCenter = pointTop + servicePoints[i].height / 2;
        
        // Calculate overlap between bar and point
        const overlapTop = Math.max(barTop, pointTop);
        const overlapBottom = Math.min(barBottom, pointBottom);
        const overlap = Math.max(0, overlapBottom - overlapTop);
        
        // Check if bar center is within the point's range (primary check)
        const barCenterInRange = barCenter >= pointTop && barCenter <= pointBottom;
        
        // Check if bar overlaps significantly with the point (secondary check)
        const significantOverlap = overlap > redBarHeight * 0.3; // At least 30% overlap
        
        // Check if bar is near the point's center (tertiary check)
        const distanceToCenter = Math.abs(barCenter - pointCenter);
        const nearCenter = distanceToCenter < (redBarHeight / 2 + servicePoints[i].height / 2);
        
        // If any condition is true, consider this point
        if (barCenterInRange || significantOverlap || nearCenter) {
          // Use the point with the most overlap, or if equal overlap, use the later point
          if (overlap > bestOverlap || (overlap === bestOverlap && i > bestMatch)) {
            bestMatch = i;
            bestOverlap = overlap;
          }
        }
      }
      
      // If we found a match, use it; otherwise default to 0
      if (bestMatch >= 0) {
        newActiveIndex = bestMatch;
      } else {
        // Fallback: find point closest to bar center
        let closestIndex = 0;
        let closestDistance = Infinity;
        for (let i = 0; i < servicePoints.length; i++) {
          const pointCenter = servicePoints[i].top + servicePoints[i].height / 2;
          const distance = Math.abs(barCenter - pointCenter);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        }
        newActiveIndex = closestIndex;
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
  
  // Set up animations for all sections with slight offsets for visual variety
  useEffect(() => createAnimation(setRedBarTop1, setActiveIndex1, 0), []);
  useEffect(() => createAnimation(setRedBarTop2, setActiveIndex2, 800), []);
  useEffect(() => createAnimation(setRedBarTop3, setActiveIndex3, 1600), []);
  useEffect(() => createAnimation(setRedBarTop4, setActiveIndex4, 2400), []);
  useEffect(() => createAnimation(setRedBarTop5, setActiveIndex5, 3200), []);
  
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <Link href="#contact" className="block relative h-[804px] w-full overflow-hidden cursor-pointer">
        <div className="absolute inset-0">
          <Image
            src="/industries-hero-bg.png"
            alt="Industries hero background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Blur overlay */}
        <div
          className="absolute bg-black"
          style={{
            width: "1883px",
            height: "417px",
            left: "-212px",
            top: "-157px",
            filter: "blur(218px)",
            opacity: 0.91,
          }}
          aria-hidden="true"
        />
        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-[1440px] px-[72px]">
            <h1
              className="font-['TASA_Orbiter'] text-white"
              style={{
                fontSize: "48px",
                fontWeight: 600,
                lineHeight: "1.494",
                maxWidth: "1027px",
                marginBottom: "33px",
              }}
            >
              Empowering Every Industry with Smart, Secure, and Scalable Technology
            </h1>
            <div
              className="inline-flex h-[67px] w-[253px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
              style={{
                padding: "20px 29px",
              }}
            >
              <span
                className="font-['Manrope'] text-white whitespace-nowrap"
                style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "1.366",
                  letterSpacing: "0.02em",
                }}
              >
                Find Out More
              </span>
              <svg
                width="5"
                height="8"
                viewBox="0 0 5 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  marginLeft: "8px",
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
            </div>
          </div>
        </div>
      </Link>

      {/* Below Hero Section - Left Aligned */}
      <section
        className="flex items-center"
        style={{
          minHeight: "261px",
          backgroundColor: "#F8F8F8",
          padding: "71px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          <p
            className="font-['TASA_Orbiter'] text-left text-black"
            style={{
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: "1.318",
              maxWidth: "1236px",
            }}
          >
            From global enterprises to education, healthcare, and hospitality — Nexobots Technologies enables organizations to stay connected, protected, and future-ready through intelligent IT and security infrastructure.
          </p>
        </div>
      </section>

      {/* Corporate & Enterprise Featured Section - Exact from Figma */}
        <section
        className="bg-[#F8F8F8]"
          style={{
            minHeight: "1333px",
          padding: "120px 0",
          }}
        >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
            {/* Industry Header */}
          <div style={{ marginBottom: "109px" }}>
              <h2
              className="font-['TASA_Orbiter'] text-black"
                style={{
                fontSize: "64px",
                  fontWeight: 600,
                  lineHeight: "1.22",
                  maxWidth: "788px",
                marginBottom: "9px",
                }}
              >
              Corporate & Enterprise
              </h2>
              <p
              className="font-['TASA_Orbiter'] text-black"
                style={{
                fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "1.08",
                  maxWidth: "919px",
                marginBottom: "28px",
                }}
              >
              Empowering enterprises with secure, scalable, and future-ready IT infrastructure.
            </p>
            {/* What We Deliver text - right after subtitle */}
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "0.98",
                maxWidth: "923px",
                marginLeft: "2px",
              }}
            >
              We help businesses build reliable, high-performance IT environments that connect teams, secure data, and support long-term growth. Our expertise spans structured cabling, networking, surveillance, and managed IT services — designed to keep enterprise operations running efficiently and securely.
              </p>
            </div>

          {/* Image + Content Layout - Exact from Figma */}
          <div className="relative mb-[45px]">
            {/* Top Row: Image + How We Support You */}
            <div className="flex items-start gap-[33px] mb-[28px]">
              {/* Image */}
                <div
                className="relative overflow-hidden rounded-[13px] flex-shrink-0"
                  style={{
                  width: "992px",
                    height: "474px",
                    marginLeft: "-98px",
                  }}
                >
                  <Image
                  src="/industry-corporate-featured.png"
                  alt="Corporate & Enterprise"
                    fill
                    className="object-cover"
                  sizes="992px"
                  />
                </div>

              {/* How We Support You - Right side */}
              <div className="flex-shrink-0" style={{ width: "418px" }}>
                  <h3
                  className="font-['TASA_Orbiter'] text-black mb-[51px]"
                    style={{
                    fontSize: "32px",
                      fontWeight: 600,
                      lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List with Progress Bar */}
                <div className="relative mb-[45px]" style={{ width: "418px", height: "310px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "310px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - animated (moves down) */}
                  <div
                    className="absolute left-0"
                    style={{
                      width: "5px",
                      height: `${redBarHeight}px`,
                      top: `${redBarTop1}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                      transition: "none", // No transition - updated every frame for smooth animation
                    }}
                  />
                  {/* Services */}
                  <div className="space-y-[8px]" style={{ paddingLeft: "30px", paddingTop: "7.65px" }}>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex1 === 0 ? "20px" : "16px",
                        fontWeight: activeIndex1 === 0 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "80px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      Strategic IT Infrastructure Consulting for scalable enterprise systems.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex1 === 1 ? "20px" : "16px",
                        fontWeight: activeIndex1 === 1 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      System Integration for seamless network and software interoperability.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex1 === 2 ? "20px" : "16px",
                        fontWeight: activeIndex1 === 2 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      AMC & Support with proactive monitoring and guaranteed uptime.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex1 === 3 ? "20px" : "16px",
                        fontWeight: activeIndex1 === 3 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "39px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      Cloud & Virtualization solutions for efficiency and hybrid environments.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                  style={{
                    width: "339px",
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
                    Let's Discuss Your Enterprise Needs
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
          </div>

          {/* What We Deliver Heading - Above Features Grid */}
          <h3
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43.20px",
              color: "#000000",
              marginTop: "85px",
              marginBottom: "28px",
              marginLeft: "68px",
            }}
          >
            What We Deliver
          </h3>

          {/* Features Grid - Exact from Figma */}
          <div
            className="flex items-start"
            style={{
              gap: "24px",
              marginLeft: "68px",
              width: "1300px",
            }}
          >
            {[
              {
                icon: "wifi",
                title: "Smart Network Infrastructure",
                description: "Robust, enterprise-grade networks with secure switching, firewalls, and optimized Wi-Fi.",
              },
              {
                icon: "monitor",
                title: "Intelligent Surveillance",
                description: "IP-based CCTV, video management systems, and remote monitoring for complete visibility.",
              },
              {
                icon: "finger",
                title: "Secure Access & Biometrics",
                description: "Biometric and RFID-based access solutions for employees and visitors.",
              },
              {
                icon: "archive",
                title: "End-to-End IT Services",
                description: "From planning to management, ensure business continuity and performance.",
              },
            ].map((feature, i) => (
              <article
                key={i}
                className="flex flex-col rounded-[9px] bg-white flex-shrink-0"
                style={{
                  width: "309.66px",
                  padding: "21px 24px",
                  gap: "20px",
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "31px",
                    height: "31px",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  {getIconComponent(feature.icon)}
                </div>
                
                {/* Title */}
                <h4
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p
                  className="font-['TASA_Orbiter']"
                    style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.08",
                    color: "#A4A4A4",
                    height: "53px",
                  }}
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Research Section - Exact from Figma */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          minHeight: "1333px",
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          {/* Industry Header */}
          <div style={{ marginBottom: "109px" }}>
            <h2
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "788px",
                marginBottom: "9px",
              }}
            >
              Education & Research
            </h2>
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.08",
                maxWidth: "919px",
                marginBottom: "28px",
              }}
            >
              Creating connected, secure, and tech-driven learning environments.
            </p>
            {/* What We Deliver text - right after subtitle */}
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "22px",
                      fontWeight: 600,
                      lineHeight: "0.98",
                      maxWidth: "923px",
                marginLeft: "2px",
                    }}
                  >
              We help institutions modernize their campuses with smart infrastructure that enhances collaboration, security, and digital learning. From classroom Wi-Fi to secure access, Nexobots delivers connected experiences for students, faculty, and researchers.
                  </p>
                </div>

          {/* Image + Content Layout - Exact from Figma */}
          <div className="relative mb-[45px]">
            {/* Top Row: Image + How We Support You */}
            <div className="flex items-start gap-[33px] mb-[28px]">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[13px] flex-shrink-0"
                style={{
                  width: "992px",
                  height: "474px",
                  marginLeft: "-98px",
                }}
              >
                <Image
                  src="/industry-education-section.png"
                  alt="Education & Research"
                  fill
                  className="object-cover"
                  sizes="992px"
                />
              </div>

              {/* How We Support You - Right side */}
              <div className="flex-shrink-0" style={{ width: "418px" }}>
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[51px]"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List with Progress Bar */}
                <div className="relative mb-[45px]" style={{ width: "418px", height: "310px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "310px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - animated (moves down) */}
                  <div
                    className="absolute left-0"
                    style={{
                      width: "5px",
                      height: `${redBarHeight}px`,
                      top: `${redBarTop2}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                      transition: "none", // No transition - updated every frame for smooth animation
                    }}
                  />
                  {/* Services */}
                  <div className="space-y-[8px]" style={{ paddingLeft: "30px", paddingTop: "7.65px" }}>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex2 === 0 ? "20px" : "16px",
                        fontWeight: activeIndex2 === 0 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "80px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      Consulting & IT Roadmaps for digital transformation in education.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex2 === 1 ? "20px" : "16px",
                        fontWeight: activeIndex2 === 1 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      System Integration for LMS, library, and cloud platforms.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex2 === 2 ? "20px" : "16px",
                        fontWeight: activeIndex2 === 2 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      Comprehensive AMC ensuring seamless academic operations.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex2 === 3 ? "20px" : "16px",
                        fontWeight: activeIndex2 === 3 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "39px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      Virtualization Support for labs, learning platforms, and research networks.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                  style={{
                    width: "286px",
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
                    Let's Build a Smarter Campus
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
          </div>

          {/* What We Deliver Heading - Above Features Grid */}
          <h3
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43.20px",
              color: "#000000",
              marginTop: "85px",
              marginBottom: "28px",
              marginLeft: "68px",
            }}
          >
            What We Deliver
          </h3>

          {/* Features Grid - Exact from Figma */}
          <div
            className="flex items-start"
            style={{
              gap: "24px",
              marginLeft: "68px",
              width: "1300px",
            }}
          >
            {[
              {
                icon: "wifi",
                title: "Smart Network Infrastructure",
                description: "High-speed wired and wireless networks across classrooms, labs, and hostels.",
              },
              {
                icon: "monitor",
                title: "Intelligent Surveillance",
                description: "Monitoring systems for exam halls, campuses, and student facilities.",
              },
              {
                icon: "finger",
                title: "Secure Access & Biometrics",
                description: "Attendance, hostel entry, and visitor management using smart authentication.",
              },
              {
                icon: "archive",
                title: "End-to-End IT Services",
                description: "Implementation and support for e-learning and research environments.",
              },
            ].map((feature, i) => (
              <article
                        key={i}
                className="flex flex-col rounded-[9px] bg-white flex-shrink-0"
                style={{
                  width: "309.66px",
                  padding: "21px 24px",
                  gap: "20px",
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "31px",
                    height: "31px",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  {getIconComponent(feature.icon)}
                </div>
                
                {/* Title */}
                <h4
                        className="font-['TASA_Orbiter'] text-black"
                        style={{
                    fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "1.08",
                  }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p
                  className="font-['TASA_Orbiter']"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.08",
                    color: "#A4A4A4",
                    height: "53px",
                  }}
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare & Pharma Section - Exact from Figma */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          minHeight: "1333px",
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          {/* Industry Header */}
          <div style={{ marginBottom: "109px" }}>
            <h2
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "788px",
                marginBottom: "9px",
                        }}
                      >
              Healthcare & Pharma
            </h2>
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.08",
                maxWidth: "919px",
                marginBottom: "28px",
              }}
            >
              Securing sensitive data, optimizing patient care, and powering research innovation.
            </p>
            {/* What We Deliver text - right after subtitle */}
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "0.98",
                maxWidth: "923px",
                marginLeft: "2px",
              }}
            >
              Healthcare and pharma organizations rely on technology for compliance, patient care, and R&D. Nexobots delivers resilient IT infrastructure and security solutions to safeguard data and improve operational efficiency.
            </p>
          </div>

          {/* Image + Content Layout - Exact from Figma */}
          <div className="relative mb-[45px]">
            {/* Top Row: Image + How We Support You */}
            <div className="flex items-start gap-[33px] mb-[28px]">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[13px] flex-shrink-0"
                style={{
                  width: "992px",
                  height: "474px",
                  marginLeft: "-98px",
                }}
              >
                <Image
                  src="/industry-healthcare-section.png"
                  alt="Healthcare & Pharma"
                  fill
                  className="object-cover"
                  sizes="992px"
                />
              </div>

              {/* How We Support You - Right side */}
              <div className="flex-shrink-0" style={{ width: "418px" }}>
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[51px]"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List with Progress Bar */}
                <div className="relative mb-[45px]" style={{ width: "418px", height: "310px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "310px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - animated (moves down) */}
                  <div
                    className="absolute left-0"
                    style={{
                      width: "5px",
                      height: `${redBarHeight}px`,
                      top: `${redBarTop3}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                      transition: "none", // No transition - updated every frame for smooth animation
                    }}
                  />
                  {/* Services */}
                  <div className="space-y-[8px]" style={{ paddingLeft: "30px", paddingTop: "7.65px" }}>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex3 === 0 ? "20px" : "16px",
                        fontWeight: activeIndex3 === 0 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "80px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      Compliance-Focused IT Consulting for healthcare regulations.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex3 === 1 ? "20px" : "16px",
                        fontWeight: activeIndex3 === 1 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      System Integration of EMR, PACS, and ERP systems.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex3 === 2 ? "20px" : "16px",
                        fontWeight: activeIndex3 === 2 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      Round-the-Clock AMC & Support for mission-critical environments.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex3 === 3 ? "20px" : "16px",
                        fontWeight: activeIndex3 === 3 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "39px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      Cloud & Virtualization Solutions for data storage, recovery, and research continuity.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                  style={{
                    width: "262px",
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
                    Secure Your Healthcare IT
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
            </div>

          {/* What We Deliver Heading - Above Features Grid */}
          <h3
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43.20px",
              color: "#000000",
              marginTop: "85px",
              marginBottom: "28px",
              marginLeft: "68px",
            }}
          >
            What We Deliver
          </h3>

          {/* Features Grid - Exact from Figma */}
          <div
            className="flex items-start"
            style={{
              gap: "24px",
              marginLeft: "68px",
              width: "1300px",
            }}
          >
            {[
              {
                icon: "wifi",
                title: "Smart Network Infrastructure",
                description: "Secure, compliant, and high-availability networks for hospitals, labs, and clinics",
              },
              {
                icon: "monitor",
                title: "Intelligent Surveillance",
                description: "Monitoring systems for ICUs, pharmacies, and critical care units.",
              },
              {
                icon: "finger",
                title: "Secure Access & Biometrics",
                description: "Controlled access for OTs, pharma stores, and restricted facilities.",
              },
              {
                icon: "archive",
                title: "End-to-End IT Services",
                description: "Infrastructure for EMR, telemedicine, and research data management.",
              },
            ].map((feature, i) => (
                <article
                  key={i}
                className="flex flex-col rounded-[9px] bg-white flex-shrink-0"
                  style={{
                  width: "309.66px",
                  padding: "21px 24px",
                    gap: "20px",
                  }}
                >
                {/* Icon Container */}
                  <div
                    className="flex items-center justify-center rounded-[6px]"
                    style={{
                      width: "31px",
                      height: "31px",
                      backgroundColor: "#F8F8F8",
                    }}
                  >
                    {getIconComponent(feature.icon)}
                  </div>
                
                {/* Title */}
                  <h4
                    className="font-['TASA_Orbiter'] text-black"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "1.08",
                    }}
                  >
                    {feature.title}
                  </h4>
                
                {/* Description */}
                  <p
                    className="font-['TASA_Orbiter']"
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: "1.08",
                      color: "#A4A4A4",
                    height: "53px",
                    }}
                  >
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

      {/* Retail & Hospitality Section - Exact from Figma */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          minHeight: "1333px",
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          {/* Industry Header */}
          <div style={{ marginBottom: "109px" }}>
            <h2
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "563px",
                marginBottom: "9px",
              }}
            >
              Retail & Hospitality
            </h2>
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.08",
                maxWidth: "919px",
                marginBottom: "28px",
              }}
            >
              Driving customer experience, operational efficiency, and secure transactions.
            </p>
            {/* What We Deliver text - right after subtitle */}
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "0.98",
                maxWidth: "923px",
                marginLeft: "2px",
              }}
            >
              Retail and hospitality businesses thrive on speed, reliability, and customer trust. Nexobots enables these industries with IT and security infrastructure that connects locations, enhances safety, and streamlines guest experiences.
            </p>
          </div>

          {/* Image + Content Layout - Exact from Figma */}
          <div className="relative mb-[45px]">
            {/* Top Row: Image + How We Support You */}
            <div className="flex items-start gap-[33px] mb-[28px]">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[13px] flex-shrink-0"
                style={{
                  width: "992px",
                  height: "474px",
                  marginLeft: "-98px",
                }}
              >
                <Image
                  src="/industry-retail-section.png"
                  alt="Retail & Hospitality"
                  fill
                  className="object-cover"
                  sizes="992px"
                />
              </div>

              {/* How We Support You - Right side */}
              <div className="flex-shrink-0" style={{ width: "418px" }}>
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[51px]"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List with Progress Bar */}
                <div className="relative mb-[45px]" style={{ width: "418px", height: "310px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "310px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - animated (moves down) */}
                  <div
                    className="absolute left-0"
                    style={{
                      width: "5px",
                      height: `${redBarHeight}px`,
                      top: `${redBarTop4}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                      transition: "none", // No transition - updated every frame for smooth animation
                    }}
                  />
                  {/* Services */}
                  <div className="space-y-[8px]" style={{ paddingLeft: "30px", paddingTop: "7.65px" }}>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex4 === 0 ? "20px" : "16px",
                        fontWeight: activeIndex4 === 0 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "80px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      IT Strategy Consulting for omnichannel and digital transformation.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex4 === 1 ? "20px" : "16px",
                        fontWeight: activeIndex4 === 1 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      System Integration of POS, booking, CRM, and inventory systems.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex4 === 2 ? "20px" : "16px",
                        fontWeight: activeIndex4 === 2 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      AMC & Monitoring to ensure always-on operations.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex4 === 3 ? "20px" : "16px",
                        fontWeight: activeIndex4 === 3 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "39px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      Cloud Enablement for customer data, apps, and analytics.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                  style={{
                    width: "267px",
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
                    Enhance Your Operations
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
          </div>

          {/* What We Deliver Heading - Above Features Grid */}
          <h3
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43.20px",
              color: "#000000",
              marginTop: "85px",
              marginBottom: "28px",
              marginLeft: "68px",
            }}
          >
            What We Deliver
          </h3>

          {/* Features Grid - Exact from Figma */}
          <div
            className="flex items-start"
            style={{
              gap: "24px",
              marginLeft: "68px",
              width: "1300px",
            }}
          >
            {[
              {
                icon: "wifi",
                title: "Smart Network Infrastructure",
                description: "Reliable Wi-Fi and secure networks for POS, guests, and back-office systems.",
              },
              {
                icon: "monitor",
                title: "Intelligent Surveillance",
                description: "CCTV and remote monitoring for stores, hotels, and restaurants.",
              },
              {
                icon: "finger",
                title: "Secure Access & Biometrics",
                description: "Smart locks, staff access, and visitor management systems.",
              },
              {
                icon: "archive",
                title: "End-to-End IT Services",
                description: "IT management for POS, reservations, loyalty, and CRM systems.",
              },
            ].map((feature, i) => (
              <article
                key={i}
                className="flex flex-col rounded-[9px] bg-white flex-shrink-0"
                style={{
                  width: "309.66px",
                  padding: "21px 24px",
                  gap: "20px",
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "31px",
                    height: "31px",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  {getIconComponent(feature.icon)}
                </div>
                
                {/* Title */}
                <h4
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p
                  className="font-['TASA_Orbiter']"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.08",
                    color: "#A4A4A4",
                    height: "53px",
                  }}
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Real Estate & Smart Infrastructure Section - Exact from Figma */}
      <section
        className="bg-[#F8F8F8]"
        style={{
          minHeight: "1333px",
          padding: "120px 0",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          {/* Industry Header */}
          <div style={{ marginBottom: "109px" }}>
            <h2
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "64px",
                fontWeight: 600,
                lineHeight: "1.22",
                maxWidth: "1009px",
                marginBottom: "9px",
              }}
            >
              Real Estate & Smart Infrastructure
            </h2>
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "1.08",
                maxWidth: "919px",
                marginBottom: "28px",
              }}
            >
              Building intelligent, connected, and secure spaces for modern living and working.
            </p>
            {/* What We Deliver text - right after subtitle */}
            <p
              className="font-['TASA_Orbiter'] text-black"
              style={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "0.98",
                maxWidth: "923px",
                marginLeft: "2px",
              }}
            >
              From commercial complexes to residential communities, Nexobots helps real estate developers and facility managers implement cutting-edge IT and security infrastructure that enhances safety, efficiency, and digital connectivity. Our solutions turn traditional spaces into smart, future-ready environments.
            </p>
          </div>

          {/* Image + Content Layout - Exact from Figma */}
          <div className="relative mb-[45px]">
            {/* Top Row: Image + How We Support You */}
            <div className="flex items-start gap-[33px] mb-[28px]">
              {/* Image */}
              <div
                className="relative overflow-hidden rounded-[13px] flex-shrink-0"
                style={{
                  width: "992px",
                  height: "474px",
                  marginLeft: "-98px",
                }}
              >
                <Image
                  src="/industry-realestate-d966f0.png"
                  alt="Real Estate & Smart Infrastructure"
                  fill
                  className="object-cover"
                  sizes="992px"
                />
              </div>

              {/* How We Support You - Right side */}
              <div className="flex-shrink-0" style={{ width: "418px" }}>
                <h3
                  className="font-['TASA_Orbiter'] text-black mb-[51px]"
                  style={{
                    fontSize: "32px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  How We Support You
                </h3>

                {/* Services List with Progress Bar */}
                <div className="relative mb-[45px]" style={{ width: "418px", height: "310px" }}>
                  {/* Background line */}
                  <div
                    className="absolute left-0 top-0"
                    style={{
                      width: "5px",
                      height: "310px",
                      borderRadius: "55px",
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                  {/* Red progress line - animated (moves down) */}
                  <div
                    className="absolute left-0"
                    style={{
                      width: "5px",
                      height: `${redBarHeight}px`,
                      top: `${redBarTop5}px`,
                      borderRadius: "55px",
                      backgroundColor: "#E11E24",
                      transition: "none", // No transition - updated every frame for smooth animation
                    }}
                  />
                  {/* Services */}
                  <div className="space-y-[8px]" style={{ paddingLeft: "30px", paddingTop: "7.65px" }}>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex5 === 0 ? "20px" : "16px",
                        fontWeight: activeIndex5 === 0 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "80px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      IT & Security Consulting for smart city, commercial, and residential projects.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex5 === 1 ? "20px" : "16px",
                        fontWeight: activeIndex5 === 1 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      System Integration of surveillance, access control, fire safety, and building automation systems.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex5 === 2 ? "20px" : "16px",
                        fontWeight: activeIndex5 === 2 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "73px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      AMC & Managed Support for round-the-clock maintenance and uptime.
                    </p>
                    <p
                      className="font-['TASA_Orbiter'] text-black"
                      style={{
                        fontSize: activeIndex5 === 3 ? "20px" : "16px",
                        fontWeight: activeIndex5 === 3 ? 700 : 600,
                        lineHeight: "1.08",
                        width: "388px",
                        height: "39px",
                        transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
                      }}
                    >
                      Cloud & Virtualization Enablement for centralized monitoring and property management dashboards.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className="inline-flex h-[45px] items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
                  style={{
                    width: "262px",
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
                    Transform Your Properties
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
          </div>

          {/* What We Deliver Heading - Above Features Grid */}
          <h3
            className="font-['TASA_Orbiter'] text-black"
            style={{
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "43.20px",
              color: "#000000",
              marginTop: "85px",
              marginBottom: "28px",
              marginLeft: "68px",
            }}
          >
            What We Deliver
          </h3>

          {/* Features Grid - Exact from Figma */}
          <div
            className="flex items-start"
            style={{
              gap: "24px",
              marginLeft: "68px",
              width: "1300px",
            }}
          >
            {[
              {
                icon: "wifi",
                title: "Smart Network Infrastructure",
                description: "High-speed backbone networks for buildings, estates, and townships with seamless Wi-Fi and IoT connectivity.",
              },
              {
                icon: "monitor",
                title: "Intelligent Surveillance",
                description: "Integrated CCTV, ANPR, and centralized monitoring for property-wide security and safety compliance.",
              },
              {
                icon: "finger",
                title: "Secure Access & Biometrics",
                description: "Smart access systems for residents, visitors, and facility staff with mobile or RFID authentication.",
              },
              {
                icon: "archive",
                title: "End-to-End IT Services",
                description: "Infrastructure design, implementation, and maintenance for smart buildings and control centers.",
              },
            ].map((feature, i) => (
              <article
                key={i}
                className="flex flex-col rounded-[9px] bg-white flex-shrink-0"
                style={{
                  width: "309.66px",
                  padding: "21px 24px",
                  gap: "20px",
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center rounded-[6px]"
                  style={{
                    width: "31px",
                    height: "31px",
                    backgroundColor: "#F8F8F8",
                  }}
                >
                  {getIconComponent(feature.icon)}
                </div>
                
                {/* Title */}
                <h4
                  className="font-['TASA_Orbiter'] text-black"
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "1.08",
                  }}
                >
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p
                  className="font-['TASA_Orbiter']"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.08",
                    color: "#A4A4A4",
                    height: "53px",
                  }}
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <Partners />

      {/* Closing CTA Section - Exact from Figma */}
      <section
        className="flex items-center justify-center bg-white"
        style={{
          minHeight: "723px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[72px] py-[112px] text-center">
          <h2
            className="font-['TASA_Orbiter'] text-black mx-auto mb-[37px]"
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              color: "#000000",
            }}
          >
            Partner with Nexobots to Transform Your Industry with Smarter IT
          </h2>
          <p
            className="font-['Manrope'] text-black mx-auto mb-[37px]"
            style={{
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "1.4",
              maxWidth: "854px",
              color: "#000000",
            }}
          >
            Every industry faces unique challenges — but the right technology turns those challenges into opportunities. At Nexobots Technologies, we combine innovation, integration, and intelligence to help organizations build connected, secure, and future-ready environments.
            <br />
            <br />
            <strong>Let&apos;s collaborate to design technology solutions that empower your business and industry to thrive in the digital era.</strong>
          </p>
          <Link
            href="#contact"
            className="mx-auto inline-flex h-[45px] w-[155px] items-center justify-center gap-3 rounded-[75px] border border-black/30 bg-black transition-all hover:bg-black/90"
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
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
