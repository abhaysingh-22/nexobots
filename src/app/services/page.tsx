"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    id: 1,
    title: "IT Infrastructure Consulting",
    description:
      "Build the backbone of your enterprise network with high-performance copper and fiber-optic cabling systems. Our structured cabling solutions ensure seamless connectivity, scalability, and compliance with global standards.",
    image: "/service-consulting.png",
    offerings: [
      "Network Architecture Design & Assessment",
      "Technology Roadmap & Deployment Planning",
      "Infrastructure Modernization Strategy",
    ],
    ctaText: "Explore Infrastructure Consulting",
  },
  {
    id: 2,
    title: "System Integration",
    description:
      "Nexobots integrates multi-vendor technologies into unified, high-performing systems.From networking and surveillance to security and communication platforms, we deliver seamless interoperability and enhanced reliability.",
    image: "/service-consulting.png", // TODO: Replace with correct service-integration.png from Figma
    offerings: [
      "Hardware & software integration",
      "Data & Communication Infrastructure Setup",
      "Network and security system integration",
    ],
    ctaText: "Explore System Integration",
  },
  {
    id: 3,
    title: "Annual Maintenance & Support (AMC)",
    description:
      "Keep your IT and security systems running at peak performance with our proactive AMC services.We offer preventive maintenance, real-time monitoring, and rapid support to minimize downtime and ensure business continuity.",
    image: "/service-amc.png",
    offerings: [
      "Preventive Maintenance & Health Checks",
      "Onsite Service & Spare Management",
      "24/7 Technical Assistance & Remote Support",
    ],
    ctaText: "Learn About AMC & Support",
  },
  {
    id: 4,
    title: "Cloud & Virtualization Support",
    description:
      "Empower your enterprise with secure, scalable, and efficient cloud operations.Our cloud and virtualization services enable easy migration, optimized workloads, and disaster recovery — ensuring flexibility and resilience.",
    image: "/service-4-intro-1-6536ac.png", // Cloud & Virtualization service image
    offerings: [
      "Cloud setup, migration & optimization",
      "Virtualization planning & deployment",
      "Backup, recovery & disaster management",
    ],
    ctaText: "Explore Cloud & Virtualization Services",
  },
] as const;


export default function ServicesPage() {
  return (
    <div className="bg-[#F8F8F8] text-black">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center px-4 sm:px-6 py-12 lg:py-0"
        style={{
          minHeight: "auto",
          backgroundColor: "#F8F8F8",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden ">
          <Image
            src="/Hero-section.png"
            alt="Hero Background"
            fill
            className="object-cover "
            priority
          />
        </div>
        <div 
          className="relative mx-auto w-full max-w-[1440px] flex flex-col lg:block lg:min-h-[721px]"
        >
          {/* Title Text - Large Font Size (50px) - Separate Div */}
          <div
            className="relative lg:absolute left-0 lg:left-[99px] top-0 lg:top-[79px] mb-8 lg:mb-0"
            style={{
              width: "100%",
              maxWidth: "784px",
            }}
          >
            <h1
              className="font-display text-black text-[28px] sm:text-[36px] md:text-[44px] lg:text-[60px]"
              style={{
                fontFamily: "TASA Orbiter",
                fontWeight: 600,
                lineHeight: "1.32em",
                textAlign: "left",
                color: "#000000",
              }}
            >
              End-to-End IT Services That Power Connectivity, Security, and
              Scalability
            </h1>
          </div>

          {/* Description Text - Smaller Font Size (20px) - Separate Div */}
          <div
            className="relative lg:absolute left-0 lg:left-[694px] top-0 lg:top-[355px] mb-8 lg:mb-0"
            style={{
              width: "100%",
              maxWidth: "646px",
            }}
          >
            <p
              className="font-display text-black whitespace-pre-line text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
              style={{
                fontFamily: "TASA Orbiter",
                fontWeight: 600,
                lineHeight: "1.32em",
                textAlign: "left",
                color: "#000000",
              }}
            >
              At Nexobots Technologies, we deliver a complete suite of IT
              services designed to help enterprises stay connected, secure, and
              future-ready.

              From infrastructure consulting and system integration to proactive
              maintenance and cloud management, our expert-driven services ensure
              that your technology investments deliver lasting value and
              performance.
            </p>
          </div>

          {/* Button */}
          <div
            className="relative lg:absolute left-0 lg:left-[694px] top-0 lg:top-[575px]"
          >
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-gray-900 w-full sm:w-[253px] h-[56px] sm:h-[67px]"
              style={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                borderWidth: "1px",
              }}
            >
              <span
                className="font-['Manrope'] text-white whitespace-nowrap text-[16px] sm:text-[20px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.366em",
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

      {/* Services Sections */}
      <div className="mx-auto max-w-[1440px] space-y-8 sm:space-y-12 px-4 sm:px-6 py-8 sm:py-12 md:px-12">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              className="rounded-[21px] bg-white p-4 sm:p-6 md:p-12"
              style={{
                minHeight: "auto",
              }}
            >
              {/* Title */}
              <h2
                className="font-['TASA_Orbiter'] text-black text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] mb-6 sm:mb-8 text-left"
                style={{
                  fontWeight: 700,
                  lineHeight: "1.366",
                  letterSpacing: "0.02em",
                }}
              >
                {service.title}
              </h2>

              {/* Content Grid */}
              <div className="flex justify-center">
                <div
                  className={`grid gap-6 w-full ${
                    !isEven 
                      ? "lg:grid-cols-[486px_636px]" 
                      : "lg:grid-cols-[636px_486px]"
                  }`}
                >
                  {/* Image with Description Overlay */}
                  <div
                    className={`relative w-full lg:w-[636px] h-[280px] sm:h-[350px] md:h-[450px] lg:h-[513px] ${
                      !isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      style={{
                        borderRadius: "20px"
                      }}
                      loading={index > 0 ? "lazy" : "eager"}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        borderRadius: "20px",
                        background: "rgba(0, 0, 0, 0.5)",
                      }}
                    />
                    {/* Description Text Over Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6" style={{ borderRadius: "20px" }}>
                      <p
                        className="font-['Manrope'] text-white whitespace-normal text-left text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px]"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.208",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {service.description.replace(/\n/g, ' ')}
                      </p>
                    </div>
                  </div>

                  {/* Features & Button */}
                  <div
                    className={`flex flex-col items-start justify-between mt-6 lg:mt-0 ${
                      !isEven ? "lg:order-1" : ""
                    }`}
                    style={{
                      height: "auto",
                    }}
                  >
                    {/* Our Offerings Heading */}
                    <h3 
                      className="font-['Manrope'] text-black mb-4 sm:mb-6 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] w-full lg:w-[486px]"
                      style={{
                        fontFamily: "Manrope",
                        fontWeight: 700,
                        fontStyle: "normal",
                      }}
                    >
                      Our Offerings
                    </h3>
                    
                    {/* Offerings List */}
                    <div className="space-y-3 sm:space-y-5 w-full flex flex-col items-start">
                      {service.offerings.map((offering, i) => (
                        <div
                          key={i}
                          className="relative flex items-center rounded-[67px] border border-[#DADADA] bg-white pl-8 pr-4 sm:pr-6 py-3 sm:py-4 w-full lg:w-[486px] min-h-[55px] sm:min-h-[65px]"
                        >
                          {/* Star Icon - positioned inside the card */}
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex-shrink-0 z-10">
                            <svg
                              width="17"
                              height="18"
                              viewBox="0 0 17 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-[18px] w-[17px]"
                            >
                              <path
                                d="M8.5 0L10.4 6.5H17L11.3 10.5L13.2 17L8.5 13L3.8 17L5.7 10.5L0 6.5H6.6L8.5 0Z"
                                fill="#E11E24"
                              />
                            </svg>
                          </div>
                          <p
                            className="font-['Manrope'] text-black text-left text-[13px] sm:text-[14px] md:text-[16px]"
                            style={{
                              fontWeight: 600,
                              lineHeight: "1.5",
                              letterSpacing: "0.02em",
                              paddingLeft: "20px",
                              width: "100%",
                            }}
                          >
                            {offering}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <Link
                      href={`/service-${service.id}`}
                      className="flex items-center justify-start gap-3 rounded-[75px] border border-white/30 bg-black px-4 sm:px-[25px] py-3 transition-all hover:bg-gray-900 mt-6 w-full sm:w-[348px] h-[45px]"
                    >
                      <span
                        className="font-['Manrope'] text-white text-left whitespace-nowrap text-[13px] sm:text-[15px]"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.366",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {service.ctaText}
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
          );
        })}
      </div>

      {/* Closing CTA */}
      <section
        className="flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-24 md:px-12"
        style={{
          minHeight: "auto",
          backgroundColor: "#F8F8F8",
        }}
      >
        <div className="mx-auto w-full max-w-[1440px] text-center">
          <h2
            className="font-['TASA_Orbiter'] text-black text-[28px] sm:text-[36px] md:text-[52px] lg:text-[64px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.494",
              maxWidth: "1148px",
              margin: "0 auto",
            }}
          >
            Partner with Nexobots for Reliable, Scalable, and Secure IT
            Operations
          </h2>

          <p
            className="mt-6 sm:mt-8 font-['Manrope'] text-black text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
              fontWeight: 400,
              lineHeight: "1.4",
              maxWidth: "900px",
              margin: "0 auto",
              marginTop: "24px",
            }}
          >
            Your business deserves an IT foundation that evolves with your
            goals.
            <br />
            <br />
            At Nexobots Technologies, our expert team provides end-to-end
            services that simplify management, enhance performance, and
            protect your digital ecosystem.
            <br />
            <br />
            <strong>Let&apos;s work together to optimize your IT infrastructure and
            turn technology into your competitive advantage.</strong>
          </p>

          <Link
            href="/contact"
            className="mx-auto mt-12 flex items-center rounded-[75px] border border-white/30 bg-black transition-all hover:bg-gray-900 relative"
            style={{
              width: "155px",
              height: "45px",
              paddingLeft: "25px",
              paddingRight: "25px",
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
                position: "absolute",
                right: "17px",
                top: "50%",
                transform: "translateY(-50%)",
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


