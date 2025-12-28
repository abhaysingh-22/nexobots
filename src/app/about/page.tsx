"use client";

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

const getPointerIcon = (icon: string) => {
  switch (icon) {
    case "customer":
      return <Image src="/pointer-customer-icon.svg" alt="Customer Focus" width={41.15} height={41.15} />;
    case "quality":
      return <Image src="/pointer-quality-icon.svg" alt="Quality First" width={31.76} height={41.05} />;
    case "reliability":
      return <Image src="/pointer-reliability-icon.svg" alt="Reliability" width={35} height={41} />;
    default:
      return null;
  }
};

export default function AboutPage() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[911px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-hero-grid.png"
            alt="About Hero - Futuristic Technology Grid"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Dark overlay - reduced opacity to show the grid pattern better */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-[128px]">
          <div className="max-w-[1027px]">
            <h1
              className="text-white text-[32px] md:text-[48px] lg:text-[64px]"
              style={{
                fontFamily: "TASA Orbiter",
                fontWeight: 600,
                lineHeight: "1.494",
                marginBottom: "67px",
              }}
            >
              Empowering Every Industry with Smart, Secure, and Scalable
              Technology
            </h1>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
              style={{
                width: "253px",
                height: "67px",
                padding: "20px 29px",
              }}
            >
              <span
                className="text-white whitespace-nowrap"
                style={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "1.366",
                  letterSpacing: "0.02em",
                }}
              >
                Talk to an Expert
              </span>
              <Image
                src="/find-out-more-arrow.svg"
                alt=""
                width={41}
                height={41}
                className="h-[41px] w-[41px]"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* We Are Nexobots Section */}
      <section 
        className="bg-white px-6 py-24 md:px-12 lg:px-[107px]"
        style={{
          minHeight: "713px",
        }}
      >
        <div className="mx-auto max-w-[1440px]">
          <h2
            className="text-black"
            style={{
              fontFamily: "TASA Orbiter",
              fontSize: "96px",
              fontWeight: 600,
              lineHeight: "1.494",
              marginBottom: "64px",
              maxWidth: "1027px",
            }}
          >
            We are nexobots
          </h2>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2" style={{ marginBottom: "26px" }}>
            <p
              className="text-black"
              style={{
                fontFamily: "TASA Orbiter",
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                width: "573px",
                maxWidth: "100%",
              }}
            >
              Nexobots Technologies is one of India&apos;s leading IT and
              security infrastructure companies, with a strong presence across
              180+ cities. We deliver end-to-end technology solutions that
              power seamless connectivity, intelligent security, and scalable
              digital ecosystems for enterprises nationwide.
            </p>
            <p
              className="text-black"
              style={{
                fontFamily: "TASA Orbiter",
                fontSize: "24px",
                fontWeight: 500,
                lineHeight: "1.32",
                width: "573px",
                maxWidth: "100%",
              }}
            >
              With a commitment to innovation and reliability, we design,
              implement, and manage infrastructure that enables organizations to
              thrive in the digital era. Our solutions blend cutting-edge
              technology, industry expertise, and OEM partnerships to create
              smarter, secure, and future-ready environments.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
            style={{
              width: "253px",
              height: "67px",
              padding: "20px 29px",
            }}
          >
            <span
              className="text-white whitespace-nowrap"
              style={{
                fontFamily: "Manrope",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "1.366",
                letterSpacing: "0.02em",
              }}
            >
              Get In Touch
            </span>
            <Image
              src="/find-out-more-arrow.svg"
              alt=""
              width={41}
              height={41}
              className="h-[41px] w-[41px]"
            />
          </Link>
        </div>
      </section>

      {/* Data Pointers Section */}
      <section className="bg-black px-6 py-[50px] md:px-12 lg:px-[72px]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-3">
          {dataPointers.map((pointer, index) => (
            <div key={pointer.label} className="flex items-center gap-3">
              <div
                className="flex flex-col items-center justify-center gap-[6px] py-5"
                style={{
                  width: "306px",
                  padding: "20px 62px",
                }}
              >
                <div className="text-center">
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "55px",
                      fontWeight: 700,
                      lineHeight: "1.366",
                      textTransform: "uppercase",
                    }}
                  >
                    {pointer.value}
                  </p>
                </div>
                <div className="text-center">
                  <p
                    className="text-[#CACACA]"
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "1.366",
                    }}
                  >
                    {pointer.label}
                  </p>
                </div>
              </div>
              {index < dataPointers.length - 1 && (
                <div className="h-[75px] w-[1px] bg-white" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="relative h-[669px] overflow-hidden">
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
        <div className="relative z-10 flex h-full items-center px-6 md:px-12 lg:px-[106px]">
          <div
            className="relative space-y-8 rounded-[22px] p-12"
            style={{
              maxWidth: "542px",
            }}
          >
            <div
              className="absolute left-0 top-0 rounded-[22px] bg-[#E11E24]"
              style={{
                width: "7px",
                height: "95px",
              }}
            />
            <div className="space-y-8" style={{ paddingLeft: "37px" }}>
              <h2
                className="text-white"
                style={{
                  fontFamily: "TASA Orbiter",
                  fontSize: "64px",
                  fontWeight: 600,
                  lineHeight: "0.93",
                }}
              >
                Our Visison
              </h2>
              <h3
                className="text-white"
                style={{
                  fontFamily: "TASA Orbiter",
                  fontSize: "36px",
                  fontWeight: 700,
                  lineHeight: "1.494",
                }}
              >
                Misson
              </h3>
              <h3
                className="text-white"
                style={{
                  fontFamily: "TASA Orbiter",
                  fontSize: "36px",
                  fontWeight: 700,
                  lineHeight: "1.494",
                }}
              >
                Our Purpose
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Content Block Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-[136px]">
        <div className="mx-auto max-w-[1440px]">
          <h2
            className="mb-6 text-black"
            style={{
              fontFamily: "TASA Orbiter",
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "1.26",
            }}
          >
            To be India&apos;s most trusted technology partner —
          </h2>
          <p
            className="text-black"
            style={{
              fontFamily: "TASA Orbiter",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "1.26",
            }}
          >
            Empowering organizations to build intelligent, secure, and
            future-ready IT infrastructures that drive business excellence and
            positive change.
          </p>
        </div>
      </section>

      {/* Pointers Section */}
      <section 
        className="bg-black"
        style={{
          padding: "120px 49px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1341.2px",
            maxWidth: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Icons Row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "352px",
              marginBottom: "24px",
              alignItems: "center",
            }}
          >
            {pointers.map((pointer) => (
              <div 
                key={`icon-${pointer.title}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {getPointerIcon(pointer.icon)}
              </div>
            ))}
          </div>
          
          {/* Text Row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "89px",
              alignItems: "flex-start",
            }}
          >
            {pointers.map((pointer, index) => (
              <div
                key={pointer.title}
                style={{
                  width: index === 2 ? "281px" : "300px",
                  height: "138px",
                }}
              >
                <p
                  className="text-white"
                  style={{
                    fontFamily: "TASA Orbiter",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "0.95",
                    letterSpacing: "0.02em",
                    whiteSpace: "pre-line",
                  }}
                >
                  {pointer.title}
                  {"\n\n"}
                  {pointer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexobots Section */}
      <section className="relative overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-[71px]">
        {/* Gradient Background */}
        <div
          className="absolute"
          style={{
            left: "-65.13px",
            top: "98px",
            width: "1570.13px",
            height: "928px",
            background:
              "linear-gradient(156deg, rgba(215, 240, 255, 1) 0%, rgba(217, 207, 255, 1) 28%, rgba(255, 209, 234, 1) 56%, rgba(255, 227, 210, 1) 84%)",
            filter: "blur(336.5px)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1303px]">
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-black"
              style={{
                fontFamily: "TASA Orbiter",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "1.2",
              }}
            >
              Why nexobots
            </p>
            <h2
              className="text-black"
              style={{
                fontFamily: "TASA Orbiter",
                fontSize: "40px",
                fontWeight: 600,
                lineHeight: "1.494",
              }}
            >
              The Critical Smart IT Infrastructure for the AI Era
            </h2>
          </div>
          <p
            className="mx-auto mb-8 text-center text-black"
            style={{
              fontFamily: "TASA Orbiter",
              fontSize: "22px",
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "862px",
            }}
          >
            In a world driven by automation, data, and intelligent systems, your
            technology infrastructure must do more than connect—it must enable.
            At Nexobots Technologies, we deliver the backbone of enterprise
            transformation: high-performance networks, secure systems, and
            scalable architectures designed for tomorrow&apos;s demands. Whether
            you&apos;re powering AI workloads, distributed offices, or smart
            campuses, our solutions give you the agility, security, and insight
            you need to thrive.
          </p>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90"
              style={{
                width: "253px",
                height: "67px",
                padding: "20px 29px",
              }}
            >
              <span
                className="text-white whitespace-nowrap"
                style={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "1.366",
                  letterSpacing: "0.02em",
                }}
              >
                Get In Touch
              </span>
              <Image
                src="/find-out-more-arrow.svg"
                alt=""
                width={41}
                height={41}
                className="h-[41px] w-[41px]"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-[95px]">
        <div className="mx-auto max-w-[1440px]">
          <h2
            className="mb-4 text-center text-black"
            style={{
              fontFamily: "TASA Orbiter",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "1.494",
            }}
          >
            Delivering Outcomes That Matter
          </h2>
          <p
            className="mx-auto mb-4 text-center text-black"
            style={{
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "1.75",
              maxWidth: "748px",
            }}
          >
            We focus on real results—so your infrastructure doesn&apos;t just
            work, it delivers value.
          </p>
          <p
            className="mx-auto mb-16 text-center text-black"
            style={{
              fontFamily: "Manrope",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "1.75",
              maxWidth: "748px",
            }}
          >
            From reducing risk and ensuring uptime to enabling growth and
            innovation, Nexobots&apos; services exceed expectation and transform
            operations.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {outcomes.map((outcome, index) => {
              // Different padding and width for each card based on Figma
              const cardStyles = [
                { padding: "36px 38px 75px", width: "400px", iconSize: "76px" }, // First card
                { padding: "47px 33px 36px", width: "389px", iconSize: "70px" }, // Second card
                { padding: "36px 51px", width: "400px", iconSize: "70px" }, // Third card
              ];
              const style = cardStyles[index];
              
              return (
                <div
                  key={outcome.title}
                  className="rounded-[21px] bg-white shadow-sm"
                  style={{
                    padding: style.padding,
                    width: style.width,
                    height: "396px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-[15px] border border-[#E9E9E9]"
                    style={{
                      width: style.iconSize,
                      height: style.iconSize,
                    }}
                  >
                    {getIconComponent(outcome.icon, style.iconSize)}
                  </div>
                  <h3
                    className="text-black"
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.208",
                    }}
                  >
                    {outcome.title}
                  </h3>
                  <p
                    className="text-[#A4A4A4]"
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "1.05",
                    }}
                  >
                    {outcome.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="bg-white px-6 py-24 md:px-12 lg:px-[94px]">
        <div className="mx-auto max-w-[1440px]">
          <h2
            className="mb-4 text-center text-black"
            style={{
              fontFamily: "TASA Orbiter",
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: "1.494",
            }}
          >
            The nexobots Advantage.
            <br />
            Your Competitive Edge in Smart IT Infrastructure.
          </h2>
          <p
            className="mx-auto mb-16 text-center text-black"
            style={{
              fontFamily: "Manrope",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "1.4",
              maxWidth: "849px",
            }}
          >
            Bringing together expertise, innovation, and trusted partnerships to
            power the connected enterprise.
          </p>
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative h-[664px] overflow-hidden rounded-[18px]">
              <Image
                src="/about-advantage-1.png"
                alt="Advantage 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative h-[274px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-2.png"
                  alt="Advantage 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative h-[356px] overflow-hidden rounded-[18px]">
                <Image
                  src="/about-advantage-3.png"
                  alt="Advantage 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          <div
            className="flex flex-nowrap"
            style={{
              gap: "90px",
            }}
          >
            {advantages.map((advantage) => (
              <div key={advantage.title} style={{ maxWidth: "423px", flexShrink: 0 }}>
                <h3
                  className="mb-4 text-black"
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "1.167",
                  }}
                >
                  {advantage.title}
                </h3>
                <p
                  className="text-[#696969]"
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.867",
                  }}
                >
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* Closing CTA Section */}
      <section className="bg-white px-6 py-24 text-black md:px-12 lg:px-[146px]">
        <div className="mx-auto max-w-[1148px] text-center">
          <h2
            className="mb-8 text-black"
            style={{
              fontFamily: "TASA Orbiter",
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: "1.494",
            }}
          >
            Partner with nexobots to Transform Your Industry with Smarter IT
          </h2>
          <p
            className="mx-auto mb-4 text-black"
            style={{
              fontFamily: "Manrope",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "1.4",
              maxWidth: "854px",
            }}
          >
            Every industry faces unique challenges — but the right technology
            turns those challenges into opportunities. At Nexobots Technologies,
            we combine innovation, integration, and intelligence to help
            organizations build connected, secure, and future-ready
            environments.
          </p>
          <p
            className="mx-auto mb-8 text-black"
            style={{
              fontFamily: "Manrope",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "1.4",
              maxWidth: "854px",
            }}
          >
            Let&apos;s collaborate to design technology solutions that empower
            your business and industry to thrive in the digital era.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-[75px] border border-black/30 bg-black transition-all hover:bg-gray-800"
            style={{
              width: "155px",
              height: "45px",
              padding: "12px 24px",
            }}
          >
            <span
              className="text-white"
              style={{
                fontFamily: "Manrope",
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: "1.366",
                letterSpacing: "0.02em",
              }}
            >
              Get In Touch
            </span>
            <Image
              src="/find-out-more-arrow.svg"
              alt=""
              width={41}
              height={41}
              className="h-[20px] w-[20px]"
            />
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
