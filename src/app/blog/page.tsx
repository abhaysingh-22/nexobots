"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Structured Cabling with Nexobots: Components, Standards, and Best Practices",
    excerpt: "Structured cabling is the backbone of modern networks. It provides the physical layer on which data, voice, video, security, and building systems converge.",
    category: "Data Security",
    date: "August 20, 2022",
    image: "/data-center-close-up-colorful-server-rack-network-cable-details-generative-ai (2).jpg",
    Author: "Tracey Wilson",
  },
  {
    id: 2,
    title: "Structured Cabling Systems in 2026: Strategy, Design, and Future Trends",
    excerpt: "An executive-level fact file on Structured Cabling Systems (SCS): what they are, how they evolved, where they are used, and how to design future-ready cabling for smart buildings, campuses, and data centers.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/data-center-network-cables-server-connections-highperformance-technology.jpg",
    Author: "Jason Francisco",
  },
  {
    id: 3,
    title: "Structured Cabling in India (2026): Costs, Standards, and Procurement Guide – with Nexobots",
    excerpt: "Structured cabling has become a critical element of IT and facility infrastructure in Indian organisations. It underpins LAN connectivity, Wi-Fi, IP telephony, video conferencing, CCTV, access control, PoE lighting, and data centre operations.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/IT-Networking-Hardware-1.png",
    Author: "Nexobots Team",
  },
  {
    id: 4,
    title: "Maximizing Network Agility: A Strategic Guide to Enterprise SD-WAN Deployment in India",
    excerpt: "In the contemporary enterprise landscape, the network has ceased to be merely a utility; it is the fundamental nervous system of digital business. For IT leaders in mid-to-large scale enterprises, the challenge is no longer just about maintaining connectivity—it is about orchestrating a resilient, agile, and secure infrastructure.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/b1.jpg",
    Author: "Nexobots Team",
  },
  {
    id: 5,
    title: "Beyond the Break-Fix Model: Engineering Zero-Downtime Enterprises through Predictive NOC Intelligence",
    excerpt: "In the high-stakes environment of modern enterprise IT, the metric that matters most is availability. For CIOs and IT Directors managing distributed infrastructure across India, the cost of downtime is no longer measured just in lost hours—it is measured in reputational damage, lost revenue, and eroded customer trust.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/server-datacenter-cloud-computing-data-storage.jpg",
    Author: "Nexobots Team",
  },
  {
    id: 6,
    title: "The Perimeter is Dead: Architecting a Zero-Trust Security Framework for the Indian Enterprise",
    excerpt: "For decades, enterprise security relied on a simple analogy: the castle and the moat. All critical data, applications, and users resided safely inside the corporate headquarters (the castle), protected by a robust perimeter firewall (the moat). If you were inside, you were trusted. If you were outside, you were blocked.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/nexobots 6.jpg",
    Author: "Nexobots Team",
  },
  {
    id: 7,
    title: "Decoupling from Hardware: A Strategic Roadmap to Hybrid Cloud and Virtualization for Indian Enterprises",
    excerpt: "In the traditional IT model, business growth was inextricably linked to physical procurement. If an enterprise wanted to launch a new application or expand into a new region, it meant purchasing servers, waiting for delivery, configuring racks, and managing power and cooling. This linear dependency on hardware is the antithesis of agility.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/The Hybrid Reality.jpg",
    Author: "Nexobots Team",
  },
  {
    id: 8,
    title: "From Passive Recording to Active Intelligence: The AI Transformation of Enterprise Surveillance",
    excerpt: "For decades, the concept of physical security in the Indian enterprise was defined by \"after-the-fact\" investigation. CCTV cameras were passive observers, recording terabytes of grainy footage that was only reviewed after an incident occurred—a theft, a safety breach, or an unauthorized entry. In this legacy model, security was reactive, dependent entirely on human vigilance and hindsight.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/The Shift Video as Data.jpg",
    Author: "Nexobots Team",
  },
  {
    id: 9,
    title: "Beyond the Swipe: Revolutionizing Workplace Security with Integrated Biometric Intelligence",
    excerpt: "In the digital transformation narrative, physical access control is often an afterthought—relegated to a plastic keycard or a manual register at the front desk. Yet, for the modern enterprise, the \"gate\" is the first line of defense and the first step in data integrity.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/The End of the Proxy The Biometric Advantage.jpg",
    Author: "Nexobots Team",
  },
  {
    id: 10,
    title: "The Invisible Backbone: Why Structured Cabling Dictates the Speed of Your Digital Transformation",
    excerpt: "In the boardroom, discussions about Digital Transformation often revolve around the cloud, AI, and software scalability. These are the visible drivers of innovation. However, in the server room, the reality is starkly physical.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/Copper vs Glass.jpg",
    Author: "Nexobots Team",
  },
  {
    id: 11,
    title: "The Hidden Cost of \"Run-to-Fail\": Why Strategic Asset Lifecycle Management is the Key to IT ROI",
    excerpt: "In the lifecycle of any major enterprise technology initiative, there is a disproportionate amount of energy focused on \"Day 1.\" The procurement of high-performance servers, the deployment of next-generation firewalls, and the rollout of campus-wide Wi-Fi 6 architectures are celebrated milestones. They represent innovation, capability, and the future state of the business.",
    category: "Technology",
    date: "August 20, 2022",
    image: "/The Economics of Reliability Understanding Total Cost of Ownership (TCO).jpg",
    Author: "Nexobots Team",
  },
  {
    id: 12,
    title: "Escaping the \"Accidental Architecture\": How Strategic IT Consulting Turns Fragmented Systems into a Future-Ready Engine",
    excerpt: "In the lifecycle of a growing enterprise, IT infrastructure often evolves out of necessity rather than strategy. A server is bought to host a new application; a firewall is added to meet a compliance audit; a cloud instance is spun up for a specific project. Over time, these isolated decisions accumulate into what industry experts call \"Accidental Architecture.\"",
    category: "Technology",
    date: "August 20, 2022",
    image: "/Accidental Architecture.jpg",
    Author: "Nexobots Team",
  },
] as const;

export default function BlogPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Hero Section - Exact from Figma */}
      <section className="relative w-full bg-white px-5 py-12 sm:px-10 sm:py-16 md:py-20 lg:px-[81px] lg:py-[120px] overflow-hidden min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/blog-hero-image.png"
            alt=""
            fill
            className="object-cover w-full h-full"
            sizes="100vw"
            priority
          />
        </div>
        
        <div className="mx-auto max-w-[1440px] relative z-10">
          <div className="relative">
            {/* "nexobots Blogs" text */}
            <div className="mb-4 lg:mb-[25px]">
              <p
                className="font-['Inter'] text-black text-base sm:text-lg lg:text-[24px]"
                style={{
                  fontWeight: 400,
                  lineHeight: "1.5",
                }}
              >
                nexobots Blogs
              </p>
            </div>

            {/* Main Heading */}
            <div className="mb-6 sm:mb-8 lg:mb-[58px] lg:max-w-[60%]">
              <h1
                className="font-['TASA_Orbiter'] text-black text-2xl sm:text-3xl md:text-4xl lg:text-[64px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.2",
                }}
              >
                IT Infrastructure & Network Insights
              </h1>
            </div>

            {/* Description Text - positioned on the right on desktop, below heading on mobile */}
            <div
              className="relative mt-6 sm:mt-8 lg:absolute lg:right-0 lg:top-[140px] lg:mt-0 lg:max-w-[480px] lg:text-right"
            >
              <p
                className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-[24px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.32",
                }}
              >
                Discover the latest developments in the IT industry and gain insights
                into the world of IT networking and the infrastructure that powers it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Post Section - Exact from Figma */}
      <section className="bg-white px-5 py-12 sm:px-10 sm:py-16 md:py-20 lg:px-[75px] lg:py-[120px]">
        <div className="mx-auto max-w-[1440px]">
          {/* Section Heading - Exact from Figma */}
          <h2
            className="font-['TASA_Orbiter'] text-black mb-8 sm:mb-12 lg:mb-[80px] text-xl sm:text-2xl lg:text-[24px]"
            style={{
              fontWeight: 700,
              lineHeight: "1.167",
            }}
          >
            Latest Post
          </h2>

          {/* Blog Cards Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-[57px]">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex w-full flex-col items-center gap-4 rounded-[12px] border border-[#E8E8EA] bg-white p-4 transition-all hover:border-red-primary hover:shadow-lg max-w-[392px] mx-auto sm:max-w-none"
                style={{
                  minHeight: "fit-content",
                }}
              >
                {/* Blog Image - Exact from Figma: 360x240px, borderRadius: 6px */}
                <div
                  className="relative overflow-hidden w-full aspect-[3/2] sm:aspect-auto"
                  style={{
                    maxWidth: "360px",
                    height: "auto",
                    borderRadius: "6px",
                  }}
                >
                  <div className="relative w-full h-0 pb-[66.67%] sm:pb-0 sm:h-[240px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex w-full flex-1 flex-col gap-4 sm:gap-5" style={{ alignSelf: "stretch", padding: "8px" }}>
                  {/* Badge and Title */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {/* Badge - Exact from Figma */}
                    <span
                      className="inline-flex w-fit items-center justify-center rounded-[6px] px-[10px] py-1"
                      style={{
                        backgroundColor: "rgba(75, 107, 251, 0.05)",
                        height: "28px",
                      }}
                    >
                      <span
                        className="font-['Work_Sans'] text-[#E11E24] text-xs sm:text-sm lg:text-[14px]"
                        style={{
                          fontWeight: 500,
                          lineHeight: "1.429",
                        }}
                      >
                        {post.category}
                      </span>
                    </span>

                    {/* Blog Title - Exact from Figma */}
                    <h3
                      className="font-['Manrope'] text-[#181A2A] text-lg sm:text-xl lg:text-[24px]"
                      style={{
                        fontWeight: 600,
                        lineHeight: "1.167",
                      }}
                    >
                      {post.title}
                    </h3>
                  </div>

                  {/* Author and Date - Exact from Figma */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-5">
                    <span
                      className="font-['Manrope'] text-[#97989F] text-sm sm:text-base lg:text-[16px]"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.5",
                      }}
                    >
                      {post.Author}
                    </span>
                    <span
                      className="font-['Manrope'] text-[#97989F] text-sm sm:text-base lg:text-[16px]"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.5",
                      }}
                    >
                      {post.date}
                    </span>
                  </div>

                  {/* Read More Button - Exact from Figma */}
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.id}`}
                      className="relative inline-flex items-center justify-center overflow-hidden bg-black transition-all hover:bg-black/90"
                      style={{
                        width: "111px",
                        height: "32px",
                        borderRadius: "75px",
                        outline: "1px rgba(255, 255, 255, 0.30) solid",
                        outlineOffset: "-1px",
                      }}
                    >
                      <span
                        className="font-['Manrope'] text-white"
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          letterSpacing: "0.24px",
                        }}
                      >
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}

