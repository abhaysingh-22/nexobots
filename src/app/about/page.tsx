"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const dataPointers = [
  { value: "400+", label: "Projects Competed" },
  { value: "100+", label: "Enterpiise Clients" },
  { value: "30+", label: "Technology Partnerships" },
  { value: "99%", label: "Retention Rate" },
] as const;

const pointers = [
  {
    title: "Customer Focus",
    description:
      "We put our customers at the center of everything we do — understanding their needs and delivering solutions that drive measurable impact and long-term partnerships.",
    icon: "customer",
  },
  {
    title: "Quality First",
    description:
      "We are committed to excellence in every detail — ensuring every project, product, and service meets the highest standards of performance and reliability.",
    icon: "quality",
  },
  {
    title: "Reliability",
    description:
      "We deliver on our promises with consistency and accountability — providing dependable technology and support that businesses can trust.",
    icon: "reliability",
  },
  {
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and respect — building trust through ethical practices and responsible actions.",
    icon: "integrity",
  },
] as const;

const outcomes = [
  {
    title: "Optimizing Latency for Seamless Connectivity and Robust Performance",
    description:
      "Enable faster, smoother, and more responsive systems across users, devices, and locations.",
    icon: "cpu",
  },
  {
    title: "High-Speed Connectivity and Peak System Performance",
    description:
      "Protect your data, assets, and operations with integrated surveillance, access control, and threat-resilient infrastructure.",
    icon: "unlock",
  },
  {
    title: "Highly Scalable and Future-Proof System Architecture",
    description:
      "Build once. Grow unlimited. Adapt effortlessly. Our modular solutions evolve with your business and load.",
    icon: "filter",
  },
] as const;

const advantages = [
  {
    title: "Intelligent Infrastructure",
    description:
      "Our solutions redefine enterprise connectivity and security—integrating structured cabling, active networking, and surveillance systems built for reliability, performance, and scalability. Nexobots delivers infrastructure that's ready for the AI-driven future.",
  },
  {
    title: "Technology + Human Expertise",
    description:
      "Backed by years of implementation experience and deep technical know-how, we blend intelligent automation with expert insight. The result: seamless integration, proactive support, and infrastructure that adapts to your business—before challenges arise.",
  },
  {
    title: "Nationwide Reach, Global Standards",
    description:
      "With a presence across 180+ cities in India and partnerships with global OEMs like Cisco, D-Link, Fortinet, and Palo Alto, Nexobots brings world-class technology to every corner of your business. We combine global reliability with local agility to help organizations scale confidently.",
  },
] as const;

const testimonials = [
  {
    name: "Jacob",
    role: "— IT Manager, Global Finance Corporation",
    quote:
      "Nexobots has transformed our office IT infrastructure from the ground up. Their structured cabling and network design brought exceptional stability and performance to our operations.",
  },
  {
    name: "Jacob",
    role: "— Dean, Leading Educational Institution",
    quote:
      "We needed a secure, connected, and intelligent campus network — Nexobots delivered exactly that. Their surveillance and access control solutions have made management effortless.",
  },
  {
    name: "Jacob",
    role: "— Head of IT, Healthcare Group",
    quote:
      "In a sector where security and uptime are critical, Nexobots proved to be a dependable technology partner. Their IT managed services ensure our systems are always compliant and available.",
  },
] as const;

// Icon Components
const CPUIcon = ({ size = "76" }: { size?: string }) => (
  <svg width={size} height={size} viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="70" height="70" rx="15" stroke="#E9E9E9" strokeWidth="1" fill="none"/>
    <rect x="22.17" y="22.17" width="31.67" height="31.67" stroke="#E11E24" strokeWidth="1" fill="none"/>
    <rect x="31.67" y="31.67" width="12.67" height="12.67" fill="#E11E24"/>
    <rect x="31.67" y="12.67" width="12.67" height="9.5" fill="#E11E24"/>
    <rect x="53.83" y="31.67" width="9.5" height="12.67" fill="#E11E24"/>
    <rect x="31.67" y="53.83" width="12.67" height="9.5" fill="#E11E24"/>
    <rect x="12.67" y="31.67" width="9.5" height="12.67" fill="#E11E24"/>
  </svg>
);

const UnlockIcon = ({ size = "70" }: { size?: string }) => (
  <svg width={size} height={size} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="70" height="70" rx="15" stroke="#E9E9E9" strokeWidth="1" fill="none"/>
    <path d="M25.42 33.04C25.42 28.5 29.04 25 33.25 25C37.46 25 41.08 28.5 41.08 33.04V43.21" stroke="#E11E24" strokeWidth="2" fill="none"/>
    <path d="M10.17 23.13H50.84V53.63H10.17V23.13Z" stroke="#E11E24" strokeWidth="2" fill="none"/>
    <circle cx="30.5" cy="38.38" r="10.17" fill="#E11E24"/>
  </svg>
);

const FilterIcon = ({ size = "70" }: { size?: string }) => (
  <svg width={size} height={size} viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0" width="70" height="70" rx="15" stroke="#E9E9E9" strokeWidth="1" fill="none"/>
    <line x1="35" y1="20.42" x2="35" y2="20.42" stroke="#E11E24" strokeWidth="2"/>
    <line x1="11.67" y1="20.42" x2="23.34" y2="20.42" stroke="#E11E24" strokeWidth="2"/>
    <line x1="49.58" y1="49.58" x2="58.33" y2="49.58" stroke="#E11E24" strokeWidth="2"/>
    <line x1="11.67" y1="49.58" x2="35" y2="49.58" stroke="#E11E24" strokeWidth="2"/>
    <circle cx="29.17" cy="20.42" r="5.83" stroke="#E11E24" strokeWidth="2" fill="none"/>
    <circle cx="43.75" cy="49.58" r="5.83" stroke="#E11E24" strokeWidth="2" fill="none"/>
  </svg>
);

const getIconComponent = (icon: string, size: string = "76") => {
  switch (icon) {
    case "cpu":
      return <CPUIcon size={size} />;
    case "unlock":
      return <UnlockIcon size={size} />;
    case "filter":
      return <FilterIcon size={size} />;
    default:
      return null;
  }
};

const getPointerIcon = (icon: string, size: "sm" | "lg" = "lg") => {
  const dimensions = size === "sm" ? { w: 32, h: 32 } : { w: 41, h: 41 };
  switch (icon) {
    case "customer":
      return <Image src="/pointer-customer-icon.svg" alt="Customer Focus" width={dimensions.w} height={dimensions.h} />;
    case "quality":
      return <Image src="/pointer-quality-icon.svg" alt="Quality First" width={dimensions.w} height={dimensions.h} />;
    case "reliability":
      return <Image src="/pointer-reliability-icon.svg" alt="Reliability" width={dimensions.w} height={dimensions.h} />;
    case "integrity":
      return (
        <svg width={dimensions.w} height={dimensions.h} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20.5" cy="14" r="8" stroke="#E11E24" strokeWidth="1.5" fill="none"/>
          <path d="M20.5 6V8M20.5 20V22" stroke="#E11E24" strokeWidth="1.5"/>
          <path d="M8 27C8 27 12 22 20.5 22C29 22 33 27 33 27V35C33 35 29 38 20.5 38C12 38 8 35 8 35V27Z" stroke="#E11E24" strokeWidth="1.5" fill="none"/>
          <circle cx="20.5" cy="30" r="3" fill="#E11E24"/>
        </svg>
      );
    default:
      return null;
  }
};

// Vision/Mission/Purpose accordion data
const visionMissionData = [
  {
    id: "vision",
    title: "Our Vision",
    content: "To be India's most trusted technology partner — delivering innovation that transforms businesses and creates lasting value.",
  },
  {
    id: "mission",
    title: "Mission",
    content: "To be India's most trusted technology partner — Empowering organizations to build intelligent, secure, and future-ready IT infrastructures that drive business excellence and positive change.",
  },
  {
    id: "purpose",
    title: "Our Purpose",
    content: "Empowering organizations to build intelligent, secure, and future-ready IT infrastructures that drive business excellence and positive change.",
  },
] as const;

// Chevron Icon Component
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Vision Mission Section Component
function VisionMissionSection() {
  const [openItem, setOpenItem] = useState<string | null>("vision");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="relative min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/about-vision-bg.png"
          alt="Our Vision Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/68" />
      <div className="relative z-10 flex h-full items-center px-4 sm:px-6 md:px-12 lg:px-[72px] xl:px-[106px] py-12 sm:py-16 lg:py-20">
        <div className="relative w-full max-w-full sm:max-w-[600px] lg:max-w-[700px]">
          {/* Red accent bar - positioned to align with content */}
          <div className="absolute left-0 top-0 bg-[#E11E24] w-[4px] sm:w-[5px] lg:w-[7px] h-full rounded-[22px]" />
          
          <div className="pl-5 sm:pl-7 lg:pl-10 space-y-3 sm:space-y-4">
            {visionMissionData.map((item) => (
              <div key={item.id} className="overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between py-3 sm:py-4 text-left group transition-all duration-200 hover:opacity-80"
                  aria-expanded={openItem === item.id}
                >
                  <h2
                    className={`font-['TASA_Orbiter'] text-white font-semibold leading-tight transition-all duration-300 ${
                      openItem === item.id
                        ? "text-[28px] sm:text-[36px] lg:text-[48px]"
                        : "text-[20px] sm:text-[24px] lg:text-[32px]"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <ChevronIcon isOpen={openItem === item.id} />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItem === item.id ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4 sm:pb-6">
                    <h3 className="font-['TASA_Orbiter'] text-white text-[16px] sm:text-[18px] lg:text-[22px] font-bold leading-[1.4] mb-2 sm:mb-3">
                      To be India&apos;s most trusted technology partner —
                    </h3>
                    <p className="font-['TASA_Orbiter'] text-white/80 text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[1.5]">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Pointers Carousel Component
function PointersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Number of items to show per slide based on screen size
  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  // Calculate total slides for desktop (showing 3 items)
  const totalSlidesDesktop = Math.ceil(pointers.length / itemsPerSlide.desktop);
  const totalSlidesTablet = Math.ceil(pointers.length / itemsPerSlide.tablet);
  const totalSlidesMobile = pointers.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlidesMobile);
  }, [totalSlidesMobile]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlidesMobile) % totalSlidesMobile);
  }, [totalSlidesMobile]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="bg-black px-4 sm:px-6 md:px-12 lg:px-[49px] py-16 sm:py-20 lg:py-[120px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1341px]">
        {/* Mobile Carousel (1 item) */}
        <div className="block sm:hidden">
          <div className="relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {pointers.map((pointer) => (
                <div key={pointer.title} className="min-w-full px-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      {getPointerIcon(pointer.icon)}
                    </div>
                    <h3 className="font-['TASA_Orbiter'] text-white text-[20px] font-bold leading-[1.2] tracking-[0.02em] mb-4">
                      {pointer.title}
                    </h3>
                    <p className="font-['TASA_Orbiter'] text-white text-[14px] font-medium leading-[1.5] max-w-[280px]">
                      {pointer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots - Mobile */}
          <div className="flex justify-center gap-2 mt-8">
            {pointers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#E11E24] w-6" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet Carousel (2 items) */}
        <div className="hidden sm:block lg:hidden">
          <div className="relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${Math.floor(currentSlide / 2) * 100}%)` }}
            >
              {Array.from({ length: totalSlidesTablet }).map((_, slideIndex) => (
                <div key={slideIndex} className="min-w-full">
                  <div className="grid grid-cols-2 gap-8">
                    {pointers.slice(slideIndex * 2, slideIndex * 2 + 2).map((pointer) => (
                      <div key={pointer.title} className="flex flex-col items-center text-center px-4">
                        <div className="mb-6">
                          {getPointerIcon(pointer.icon)}
                        </div>
                        <h3 className="font-['TASA_Orbiter'] text-white text-[20px] font-bold leading-[1.2] tracking-[0.02em] mb-4">
                          {pointer.title}
                        </h3>
                        <p className="font-['TASA_Orbiter'] text-white text-[15px] font-medium leading-[1.5] max-w-[300px]">
                          {pointer.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots - Tablet */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalSlidesTablet }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * 2)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / 2) === index ? "bg-[#E11E24] w-6" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Carousel (3 items) */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="overflow-hidden mx-8 xl:mx-12">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {pointers.map((pointer) => (
                  <div key={pointer.title} className="min-w-[33.333%] px-6 xl:px-10">
                    <div className="flex flex-col items-start">
                      <div className="mb-6">
                        {getPointerIcon(pointer.icon)}
                      </div>
                      <h3 className="font-['TASA_Orbiter'] text-white text-[20px] xl:text-[22px] font-bold leading-[1.2] tracking-[0.02em] mb-4">
                        {pointer.title}
                      </h3>
                      <p className="font-['TASA_Orbiter'] text-white text-[15px] xl:text-[16px] font-medium leading-[1.5]">
                        {pointer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Dots - Desktop */}
          <div className="flex justify-center gap-3 mt-12">
            {pointers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#E11E24] w-8" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#F8F8F8] text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Responsive */}
      <section className="relative h-[550px] sm:h-[600px] md:h-[750px] lg:h-[911px] w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="/about-hero-grid.png"
            alt="About Hero - Futuristic Technology Grid"
            fill
            priority
            className="object-cover object-bottom sm:object-center"
            sizes="100vw"
          />
        </div>
        {/* Gradient overlay - Heavy black at top on mobile */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.2) 100%)",
          }}
        />
        {/* Desktop overlay - different style */}
        <div className="hidden lg:block absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 flex h-full flex-col justify-start pt-12 sm:pt-16 lg:pt-0 lg:justify-center px-6 sm:px-8 md:px-12 lg:px-[72px] xl:px-32">
          <div className="max-w-[340px] sm:max-w-[500px] lg:max-w-[1027px]">
            <h1 className="font-['TASA_Orbiter'] text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold leading-[1.2] sm:leading-[1.3] lg:leading-[1.494] mb-8 sm:mb-12 lg:mb-[67px]">
              Empowering Every Industry with Smart, Secure, and Scalable
              Technology
            </h1>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent transition-all hover:bg-white/10 h-[44px] sm:h-[52px] lg:h-[67px] px-5 sm:px-6 lg:px-[29px] w-fit"
            >
              <span className="font-['Manrope'] text-white whitespace-nowrap text-[14px] sm:text-[16px] lg:text-[20px] font-medium leading-[1.366] tracking-[0.02em]">
                Talk to an Expert
              </span>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M1 1L5 5L1 9"
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

      {/* We Are Nexobots Section - Responsive */}
      <section className="bg-white px-6 sm:px-8 md:px-12 lg:px-[72px] xl:px-[107px] py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-['TASA_Orbiter'] text-black text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] font-bold leading-[1.1] sm:leading-[1.2] lg:leading-[1.494] mb-6 sm:mb-10 lg:mb-16">
            We are nexobots
          </h2>
          <div className="flex flex-col gap-4 sm:gap-6 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 mb-6 sm:mb-8 lg:mb-[26px]">
            <p className="font-['TASA_Orbiter'] text-black text-[15px] sm:text-[18px] lg:text-[22px] xl:text-[24px] font-medium leading-[1.5] sm:leading-[1.4] lg:leading-[1.32]">
              Nexobots Technologies is one of India&apos;s leading IT and
              security infrastructure companies, with a strong presence across
              180+ cities. We deliver end-to-end technology solutions that
              power seamless connectivity, intelligent security, and scalable
              digital ecosystems for enterprises nationwide.
            </p>
            <p className="font-['TASA_Orbiter'] text-black text-[15px] sm:text-[18px] lg:text-[22px] xl:text-[24px] font-medium leading-[1.5] sm:leading-[1.4] lg:leading-[1.32]">
              With a commitment to innovation and reliability, we design,
              implement, and manage infrastructure that enables organizations to
              thrive in the digital era. Our solutions blend cutting-edge
              technology, industry expertise, and OEM partnerships to create
              smarter, secure, and future-ready environments.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-black transition-all hover:bg-black/90 h-[44px] sm:h-[52px] lg:h-[60px] px-5 sm:px-6 lg:px-7 w-fit"
          >
            <span className="font-['Manrope'] text-white whitespace-nowrap text-[14px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.366] tracking-[0.02em]">
              Find out More
            </span>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#E11E24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Data Pointers Section - Responsive */}
      <section className="bg-black px-6 sm:px-8 md:px-12 lg:px-[72px] py-10 sm:py-12 lg:py-[50px]">
        <div className="mx-auto max-w-[1440px]">
          {/* Mobile: 2x2 Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:hidden">
            {dataPointers.map((pointer) => (
              <div key={pointer.label} className="flex flex-col items-center justify-center">
                <p className="font-['Manrope'] text-white text-[32px] font-bold leading-[1.2] uppercase text-center mb-1">
                  {pointer.value}
                </p>
                <p className="font-['Manrope'] text-[#CACACA] text-[13px] font-normal leading-[1.3] text-center">
                  {pointer.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tablet & Desktop: Horizontal with dividers */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 lg:gap-3">
            {dataPointers.map((pointer, index) => (
              <div key={pointer.label} className="flex flex-row items-center gap-4 lg:gap-3">
                <div className="flex flex-col items-center justify-center gap-1 lg:gap-1.5 py-5 px-8 lg:px-[62px]">
                  <p className="font-['Manrope'] text-white text-[45px] lg:text-[55px] font-bold leading-[1.366] uppercase text-center">
                    {pointer.value}
                  </p>
                  <p className="font-['Manrope'] text-[#CACACA] text-[16px] lg:text-[20px] font-normal leading-[1.366] text-center">
                    {pointer.label}
                  </p>
                </div>
                {index < dataPointers.length - 1 && (
                  <div className="h-[50px] lg:h-[75px] w-px bg-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section - Responsive */}
<<<<<<< HEAD
      <VisionMissionSection />
=======
      <section className="relative bg-black sm:bg-transparent overflow-hidden">
        {/* Desktop background image */}
        <div className="absolute inset-0 hidden sm:block">
          <Image
            src="/about-vision-bg.png"
            alt="Our Vision Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hidden sm:block bg-black/68" />
        
        <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-[72px] xl:px-[106px] py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Mobile: Full width with red bar */}
          <div className="sm:hidden">
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bg-[#E11E24] w-[4px] h-full rounded-r" />
              <div className="space-y-8">
                <h2 className="font-['TASA_Orbiter'] text-white text-[32px] font-bold leading-[1.1]">
                  Our Vision
                </h2>
                <div>
                  <p className="font-['TASA_Orbiter'] text-white text-[15px] font-normal leading-[1.5] mb-2">
                    To be India's most trusted technology partner —
                  </p>
                  <p className="font-['TASA_Orbiter'] text-white text-[15px] font-normal leading-[1.5]">
                    Empowering organizations to build intelligent, secure, and future-ready IT infrastructures that drive business excellence and positive change.
                  </p>
                </div>
                <h3 className="font-['TASA_Orbiter'] text-white text-[24px] font-bold leading-[1.2]">
                  Mission
                </h3>
                <h3 className="font-['TASA_Orbiter'] text-white text-[24px] font-bold leading-[1.2]">
                  Our Purpose
                </h3>
              </div>
            </div>
          </div>

          {/* Tablet & Desktop: Original layout */}
          <div className="hidden sm:flex h-[500px] md:h-[600px] lg:h-[669px] items-center">
            <div className="relative space-y-6 md:space-y-8 rounded-[22px] p-6 md:p-8 lg:p-12 max-w-[542px]">
              <div className="absolute left-0 top-0 rounded-[22px] bg-[#E11E24] w-[7px] h-[95px]" />
              <div className="space-y-4 md:space-y-6 lg:space-y-8 pl-8 lg:pl-[37px]">
                <h2 className="font-['TASA_Orbiter'] text-white text-[48px] lg:text-[64px] font-semibold leading-[0.93]">
                  Our Vision
                </h2>
                <h3 className="font-['TASA_Orbiter'] text-white text-[30px] lg:text-[36px] font-bold leading-[1.494]">
                  Mission
                </h3>
                <h3 className="font-['TASA_Orbiter'] text-white text-[30px] lg:text-[36px] font-bold leading-[1.494]">
                  Our Purpose
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> 79b5cb8 (done about page)

      {/* Content Block Section - Responsive */}
      <section className="bg-white px-6 sm:px-8 md:px-12 lg:px-[72px] xl:px-[136px] py-0 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          {/* Hidden on mobile - content moved to Vision section */}
          <div className="hidden sm:block">
            <h2 className="font-['TASA_Orbiter'] text-black text-[36px] md:text-[42px] lg:text-[48px] font-semibold leading-[1.3] sm:leading-[1.26] mb-4 sm:mb-6">
              To be India&apos;s most trusted technology partner —
            </h2>
            <p className="font-['TASA_Orbiter'] text-black text-[30px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.3] sm:leading-[1.26]">
              Empowering organizations to build intelligent, secure, and
              future-ready IT infrastructures that drive business excellence and
              positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Pointers Carousel Section - Responsive */}
      <PointersCarousel />

      {/* Why Nexobots Section - Responsive */}
      <section className="relative overflow-hidden bg-white px-6 sm:px-8 md:px-12 lg:px-[71px] py-12 sm:py-16 lg:py-20">
        {/* Gradient Background */}
        <div
          className="absolute left-[-50px] sm:left-[-65px] top-[50px] sm:top-[98px] w-full max-w-[1570px] h-[600px] sm:h-[800px] lg:h-[928px]"
          style={{
            background:
              "linear-gradient(156deg, rgba(215, 240, 255, 1) 0%, rgba(217, 207, 255, 1) 28%, rgba(255, 209, 234, 1) 56%, rgba(255, 227, 210, 1) 84%)",
            filter: "blur(200px)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1303px]">
          <div className="mb-6 sm:mb-8 lg:mb-10 text-center">
            <p className="font-['TASA_Orbiter'] text-black text-[14px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.2] mb-2 sm:mb-3">
              Why nexobots
            </p>
            <h2 className="font-['TASA_Orbiter'] text-black text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold leading-[1.25] sm:leading-[1.3]">
              The Critical Smart IT Infrastructure for the AI Era
            </h2>
          </div>
          <p className="font-['TASA_Orbiter'] text-black text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] font-medium leading-[1.6] sm:leading-[1.5] text-center mx-auto mb-8 sm:mb-10 max-w-full lg:max-w-[900px]">
            In a world driven by automation, data, and intelligent systems, your technology infrastructure must do more than connect—it must enable.
          </p>
          <p className="font-['TASA_Orbiter'] text-black text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] font-medium leading-[1.6] sm:leading-[1.5] text-center mx-auto mb-8 sm:mb-10 lg:mb-12 max-w-full lg:max-w-[900px]">
            At Nexobots Technologies, we deliver the backbone of enterprise transformation: high-performance networks, secure systems, and scalable architectures designed for tomorrow's demands. Whether you're powering AI workloads, distributed offices, or smart campuses, our solutions give you the agility, security, and insight you need to thrive.
          </p>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-black transition-all hover:bg-black/90 h-[44px] sm:h-[50px] lg:h-[56px] px-6 sm:px-7 lg:px-8 w-fit"
            >
              <span className="font-['Manrope'] text-white whitespace-nowrap text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[1.366] tracking-[0.02em]">
                Get In Touch
              </span>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L1 9"
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

      {/* Outcomes Section - Responsive */}
      <section className="bg-white px-6 sm:px-8 md:px-12 lg:px-[72px] xl:px-[95px] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-['TASA_Orbiter'] text-black text-[24px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.2] text-center mb-4 sm:mb-5">
            Delivering Outcomes That Matter
          </h2>
          <p className="font-['Manrope'] text-black text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.5] text-center mx-auto mb-3 max-w-full lg:max-w-[720px]">
            We focus on real results—so your infrastructure doesn&apos;t just work, it delivers value.
          </p>
          <p className="font-['Manrope'] text-black text-[15px] sm:text-[16px] lg:text-[17px] font-normal leading-[1.5] text-center mx-auto mb-10 sm:mb-12 lg:mb-14 max-w-full lg:max-w-[720px]">
            From reducing risk and ensuring uptime to enabling growth and innovation, Nexobots&apos; services exceed expectation and transform operations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-[1200px] mx-auto">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="flex flex-col items-center text-center rounded-[16px] border border-[#F0F0F0] bg-white p-6 sm:p-7 lg:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow"
              >
                <div className="flex items-center justify-center rounded-[12px] bg-[#FAFAFA] w-[64px] h-[64px] sm:w-[70px] sm:h-[70px] lg:w-[76px] lg:h-[76px] mb-5 sm:mb-6">
                  {getIconComponent(outcome.icon, "48")}
                </div>
                <h3 className="font-['Manrope'] text-black text-[16px] sm:text-[17px] lg:text-[18px] font-bold leading-[1.3] mb-3 sm:mb-4">
                  {outcome.title}
                </h3>
                <p className="font-['Manrope'] text-[#666666] text-[14px] sm:text-[14.5px] lg:text-[15px] font-normal leading-[1.6]">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section - Responsive */}
      <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-[72px] xl:px-[94px] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-['TASA_Orbiter'] text-black text-[24px] sm:text-[30px] lg:text-[36px] font-semibold leading-[1.3] sm:leading-[1.494] text-center mb-3 sm:mb-4">
            The nexobots Advantage.
            <br />
            Your Competitive Edge in Smart IT Infrastructure.
          </h2>
          <p className="font-['Manrope'] text-black text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-[1.4] text-center mx-auto mb-10 sm:mb-12 lg:mb-16 max-w-full lg:max-w-[849px]">
            Bringing together expertise, innovation, and trusted partnerships to
            power the connected enterprise.
          </p>
          
          {/* Images Grid - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[664px] overflow-hidden rounded-[18px]">
              <Image
                src="/about-advantage-1.png"
                alt="Advantage 1"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="relative h-[200px] sm:h-[220px] lg:h-[274px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-2.png"
                  alt="Advantage 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-[250px] sm:h-[300px] lg:h-[356px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-3.png"
                  alt="Advantage 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          
          {/* Advantages Text - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 xl:gap-[90px]">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="max-w-full xl:max-w-[423px]">
                <h3 className="font-['Manrope'] text-black text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-[1.2] sm:leading-[1.167] mb-3 sm:mb-4">
                  {advantage.title}
                </h3>
                <p className="font-['Manrope'] text-[#696969] text-[14px] sm:text-[15px] font-medium leading-[1.6] sm:leading-[1.867]">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* Closing CTA Section - Responsive */}
      <section className="bg-[#F5F5F5] px-6 sm:px-8 md:px-12 lg:px-[72px] xl:px-[146px] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1148px] text-center">
          <h2 className="font-['TASA_Orbiter'] text-black text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-semibold leading-[1.15] sm:leading-[1.2] mb-8 sm:mb-10 lg:mb-12">
            Partner with nexobots to Transform Your Industry with Smarter IT
          </h2>
          <p className="font-['Manrope'] text-black text-[16px] sm:text-[17px] lg:text-[18px] font-normal leading-[1.7] sm:leading-[1.65] mx-auto mb-6 sm:mb-7 max-w-full lg:max-w-[900px]">
            Every industry faces unique challenges — but the right technology turns those challenges into opportunities. At Nexobots Technologies, we combine innovation, integration, and intelligence to help organizations build connected, secure, and future-ready environments.
          </p>
          <p className="font-['Manrope'] text-black text-[16px] sm:text-[17px] lg:text-[18px] font-bold leading-[1.7] sm:leading-[1.65] mx-auto mb-10 sm:mb-12 lg:mb-14 max-w-full lg:max-w-[900px]">
            Let&apos;s collaborate to design technology solutions that empower your business and industry to thrive in the digital era.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full bg-black transition-all hover:bg-gray-900 h-[48px] sm:h-[52px] lg:h-[56px] px-7 sm:px-8 lg:px-9 w-fit mx-auto"
          >
            <span className="font-['Manrope'] text-white text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[1.366] tracking-[0.02em]">
              Get In Touch
            </span>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#E11E24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
