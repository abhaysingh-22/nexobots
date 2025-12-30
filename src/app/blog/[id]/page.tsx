import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

// Generate static params for all blog posts (required for static export)
export function generateStaticParams() {
  // Return all blog post IDs (1-12 based on blog listing page)
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
  ];
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const isBlog1 = id === "1";
  const isBlog2 = id === "2";
  const isBlog3 = id === "3";
  const isBlog4 = id === "4";
  const isBlog5 = id === "5";
  const isBlog6 = id === "6";
  const isBlog7 = id === "7";
  const isBlog8 = id === "8";
  const isBlog9 = id === "9";
  const isBlog10 = id === "10";
  const isBlog11 = id === "11";
  const isBlog12 = id === "12";
  const blogTitle = isBlog1 
    ? "Structured Cabling with Nexobots: Components, Standards, and Best Practices"
    : isBlog2
    ? "Structured Cabling Systems in 2026: Strategy, Design, and Future Trends"
    : isBlog3
    ? "Structured Cabling in India (2026): Costs, Standards, and Procurement Guide – with Nexobots"
    : isBlog4
    ? "Maximizing Network Agility: A Strategic Guide to Enterprise SD-WAN Deployment in India"
    : isBlog5
    ? "Beyond the Break-Fix Model: Engineering Zero-Downtime Enterprises through Predictive NOC Intelligence"
    : isBlog6
    ? "The Perimeter is Dead: Architecting a Zero-Trust Security Framework for the Indian Enterprise"
    : isBlog7
    ? "Decoupling from Hardware: A Strategic Roadmap to Hybrid Cloud and Virtualization for Indian Enterprises"
    : isBlog8
    ? "From Passive Recording to Active Intelligence: The AI Transformation of Enterprise Surveillance"
    : isBlog9
    ? "Beyond the Swipe: Revolutionizing Workplace Security with Integrated Biometric Intelligence"
    : isBlog10
    ? "The Invisible Backbone: Why Structured Cabling Dictates the Speed of Your Digital Transformation"
    : isBlog11
    ? "The Hidden Cost of \"Run-to-Fail\": Why Strategic Asset Lifecycle Management is the Key to IT ROI"
    : isBlog12
    ? "Escaping the \"Accidental Architecture\": How Strategic IT Consulting Turns Fragmented Systems into a Future-Ready Engine"
    : isBlog10
    ? "The Invisible Backbone: Why Structured Cabling Dictates the Speed of Your Digital Transformation"
    : "The Impact of Technology on the Workplace: How Technology is Changing";
  
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Our Blog Heading - Exact from Figma */}
      <section className="bg-white px-4 pt-12 sm:px-6 md:px-12 lg:px-[72px] lg:pt-[120px]" style={{ marginBottom: "40px" }}>
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            {/* Our Blog Text */}
            <span
              className="font-['TASA_Orbiter'] text-black text-2xl sm:text-[28px] lg:text-[32px]"
              style={{

                fontWeight: 600,
                lineHeight: "1.32",
              }}
            >
              Our Blog
            </span>

            {/* Red Arrow */}
            <svg
              className="hidden sm:block"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#E11E24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Dotted Line */}
            <div
              className="hidden sm:block"
              style={{
                flex: "1",
                height: "2px",
                borderTop: "2px dashed #0066CC",
                maxWidth: "100px",
              }}
            />

            {/* Blog Title */}
            <div
              className="font-['TASA_Orbiter'] text-lg leading-7 sm:text-xl sm:leading-8 lg:text-2xl lg:leading-10"
              style={{
                fontWeight: 600,
                color: "#E11E24",
                wordWrap: "break-word",
              }}
            >
              {blogTitle}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Article Section - Exact from Figma */}
      <section className="bg-white px-4 py-8 sm:px-6 md:px-12 lg:px-[72px] lg:pb-[120px] lg:pt-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Main Article Content */}
            <article className="flex-1 lg:max-w-[840px]">
              {/* Blog Info Header */}
              <div className="mb-8">
                <div className="mb-5">
                  {/* Logo and Title */}
                  <div className="mb-[41px]">
                    <div className="mb-5">
                      <Image
                        src="/logo.svg"
                        alt="Nexobots"
                        width={120}
                        height={22}
                        className="h-[22px] w-[120px]"
                      />
                    </div>
                    <h1
                      className="font-['TASA_Orbiter'] text-[#181A2A] text-2xl sm:text-3xl lg:text-[36px]"
                      style={{

                        fontWeight: 600,
                        lineHeight: "1.111",
                      }}
                    >
                      {blogTitle}
                    </h1>
                  </div>

                  {/* Author and Date */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6">
                    <span
                      className="font-['TASA_Orbiter'] text-[#696A75] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 600,
                        lineHeight: "2",
                      }}
                    >
                      B Mohana Kumara
                    </span>
                    <span
                      className="font-['TASA_Orbiter'] text-[#696A75] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 600,
                        lineHeight: "2",
                      }}
                    >
                      August 20, 2022
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div
                className="relative mb-8 overflow-hidden rounded-[12px] h-48 sm:h-64 md:h-80 lg:h-[462px]"
              >
                <Image
                  src={isBlog1 ? "/data-center-close-up-colorful-server-rack-network-cable-details-generative-ai (2).jpg" : isBlog2 ? "/IT-Networking-Hardware-1.png" : isBlog3 ? "/detailed-view-network-servers-with-cables-flashing-lights-data-center.jpg" : isBlog4 ? "/b1.jpg" : isBlog5 ? "/server-datacenter-cloud-computing-data-storage.jpg" : isBlog6 ? "/nexobots 6.jpg" : isBlog7 ? "/The Hybrid Reality.jpg" : isBlog8 ? "/The Shift Video as Data.jpg" : isBlog9 ? "/The End of the Proxy The Biometric Advantage.jpg" : isBlog10 ? "/Copper vs Glass.jpg" : isBlog11 ? "/The Economics of Reliability Understanding Total Cost of Ownership (TCO).jpg" : isBlog12 ? "/Accidental Architecture.jpg" : "/blog-detail-hero.png"}
                  alt={isBlog1 ? "Structured Cabling Data Center" : isBlog2 ? "IT Networking Hardware" : isBlog3 ? "Network Servers with Cables in Data Center" : isBlog4 ? "SD-WAN Network Infrastructure" : isBlog5 ? "Server Datacenter Cloud Computing" : isBlog6 ? "Zero Trust Security Framework" : isBlog7 ? "Hybrid Cloud and Virtualization" : isBlog8 ? "AI Transformation of Enterprise Surveillance" : isBlog9 ? "Biometric Intelligence" : isBlog10 ? "Structured Cabling Infrastructure" : isBlog11 ? "Asset Lifecycle Management" : isBlog12 ? "IT Infrastructure Consulting" : "The Impact of Technology on the Workplace"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 840px"
                />
              </div>

              {/* First Paragraph */}
              <div className="mb-8">
                {isBlog1 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Structured cabling is the backbone of modern networks. It provides the physical layer on which data, voice, video, security, and building systems converge. This article outlines the six core components of structured cabling, the key standards that govern them, and the best practices Nexobots applies when delivering structured cabling solutions for enterprises in India.
                    </p>
                  </>
                ) : isBlog2 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      An executive-level fact file on Structured Cabling Systems (SCS): what they are, how they evolved, where they are used, and how to design future-ready cabling for smart buildings, campuses, and data centers. Includes practical guidance from Nexobots for enterprises in India.
                    </p>
                  </>
                ) : isBlog3 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Structured cabling has become a critical element of IT and facility infrastructure in Indian organisations. It underpins LAN connectivity, Wi-Fi, IP telephony, video conferencing, CCTV, access control, PoE lighting, and data centre operations. When designed and implemented correctly, it functions as a long-lived asset that supports multiple generations of active equipment with minimal rework.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      This article, prepared by Nexobots, provides a professional, end-to-end view of structured cabling for Indian businesses and addresses the following questions in detail:
                    </p>
                  </>
                ) : isBlog4 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In the contemporary enterprise landscape, the network has ceased to be merely a utility; it is the fundamental nervous system of digital business. For IT leaders in mid-to-large scale enterprises, the challenge is no longer just about maintaining connectivity—it is about orchestrating a resilient, agile, and secure infrastructure that can keep pace with cloud adoption and distributed workforce demands.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Traditional MPLS (Multiprotocol Label Switching) architectures, while reliable, often lack the flexibility and cost-efficiency required for today's cloud-first applications. This has driven the rapid adoption of Software-Defined Wide Area Networking (SD-WAN). However, transitioning from a legacy architecture to a software-defined model is a complex undertaking, particularly given the geographical and logistical diversities of the Indian market.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      At Nexobots Technologies, we advocate for a rigorous, engineering-led approach to network transformation. This guide outlines a strategic framework for deploying SD-WAN, ensuring high availability, security integration, and operational excellence across a Pan-India footprint.
                    </p>
                  </>
                ) : isBlog5 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In the high-stakes environment of modern enterprise IT, the metric that matters most is availability. For CIOs and IT Directors managing distributed infrastructure across India, the cost of downtime is no longer measured just in lost hours—it is measured in reputational damage, lost revenue, and eroded customer trust.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Yet, a surprising number of large-scale enterprises still operate on a "break-fix" methodology: a component fails, an alert is triggered, and remediation begins. In an era where digital transactions happen in milliseconds, this reactive approach is obsolete. The latency between failure and resolution is where business value is lost.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      To achieve true operational resilience, Indian enterprises must transition from Reactive Maintenance to Predictive Intelligence. At Nexobots Technologies, we believe that data is the oxygen of your IT ecosystem. By harnessing the power of a modern, AI-driven Network Operations Center (NOC), organizations can move beyond merely fixing problems to preventing them entirely.
                    </p>
                  </>
                ) : isBlog6 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      For decades, enterprise security relied on a simple analogy: the castle and the moat. All critical data, applications, and users resided safely inside the corporate headquarters (the castle), protected by a robust perimeter firewall (the moat). If you were inside, you were trusted. If you were outside, you were blocked.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In 2025, that castle no longer exists.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The rapid acceleration of hybrid work, the migration of workloads to multi-cloud environments, and the proliferation of IoT devices have dissolved the traditional network perimeter. Today, your users are everywhere, and your applications are hosted anywhere. In this distributed landscape, the assumption of "implied trust" is a critical vulnerability.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      For IT leaders in mid-to-large scale enterprises, the mandate is clear: we must move from a perimeter-based security model to a Zero Trust Architecture. At Nexobots Technologies, we advocate for a security posture that operates on a single, uncompromising principle: Never Trust, Always Verify.
                    </p>
                  </>
                ) : isBlog7 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In the traditional IT model, business growth was inextricably linked to physical procurement. If an enterprise wanted to launch a new application or expand into a new region, it meant purchasing servers, waiting for delivery, configuring racks, and managing power and cooling. This linear dependency on hardware is the antithesis of agility.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In today's fast-evolving business landscape, agility and uptime define competitive advantage. The ability to provision resources instantly—and scale them down just as quickly—is what separates market leaders from laggards. For Indian enterprises, the question is no longer "Should we move to the cloud?" but rather "How do we balance the agility of the cloud with the control of on-premise infrastructure?"
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The answer lies in a robust Hybrid Cloud and Virtualization Strategy. At Nexobots Technologies, we help organizations break free from hardware dependencies, enabling seamless scalability, optimal resource utilization, and secure workload management across hybrid, private, or public cloud environments.
                    </p>
                  </>
                ) : isBlog8 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      For decades, the concept of physical security in the Indian enterprise was defined by "after-the-fact" investigation. CCTV cameras were passive observers, recording terabytes of grainy footage that was only reviewed after an incident occurred—a theft, a safety breach, or an unauthorized entry. In this legacy model, security was reactive, dependent entirely on human vigilance and hindsight.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      As businesses digitize, this passive approach is a liability. Security today goes beyond visibility—it is about intelligence, responsiveness, and control. The modern enterprise demands a surveillance ecosystem that does not just "see" but "understands."
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      At Nexobots Technologies, we are driving the convergence of physical security and digital intelligence. By integrating AI-Enabled Video Analytics with robust IP network infrastructure, we transform standard surveillance into a proactive, data-driven asset that protects people, assets, and infrastructure in real-time.
                    </p>
                  </>
                ) : isBlog9 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In the digital transformation narrative, physical access control is often an afterthought—relegated to a plastic keycard or a manual register at the front desk. Yet, for the modern enterprise, the "gate" is the first line of defense and the first step in data integrity.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Reliance on legacy RFID cards or PIN codes presents a dual risk: Security (cards can be lost, stolen, or shared) and Efficiency (manual attendance reconciliation is prone to error and "buddy punching"). In a corporate landscape where identity is the new perimeter, the physical key must be as secure as the digital password.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      At Nexobots Technologies, we are redefining the concept of entry. We believe that access control should be frictionless, irrefutable, and intelligent. By deploying Biometric & Access Control Solutions, we help Indian enterprises build environments where security is seamless and identity is verified with absolute precision.
                    </p>
                  </>
                ) : isBlog10 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In the boardroom, discussions about Digital Transformation often revolve around the cloud, AI, and software scalability. These are the visible drivers of innovation. However, in the server room, the reality is starkly physical.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      No matter how sophisticated your SD-WAN architecture is, or how fast your cloud instances spin up, your entire digital enterprise ultimately travels through a strand of copper or a beam of light.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The Physical Layer (Layer 1) is the foundation upon which all other technologies rest. Yet, it is frequently the most undervalued component of IT strategy. A network is only as fast as its weakest link, and often, that link is unstructured, non-certified cabling.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      At Nexobots Technologies, we believe that Structured Cabling is not just a utility; it is a strategic asset. It is the invisible backbone that ensures your data—your organization's oxygen—flows without interruption.
                    </p>
                  </>
                ) : isBlog11 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In the lifecycle of any major enterprise technology initiative, there is a disproportionate amount of energy focused on "Day 1." The procurement of high-performance servers, the deployment of next-generation firewalls, and the rollout of campus-wide Wi-Fi 6 architectures are celebrated milestones. They represent innovation, capability, and the future state of the business.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      However, for the Chief Information Officer (CIO) and the IT Infrastructure Manager, the real challenge does not end at deployment—it begins on "Day 2."
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      IT infrastructure is, by its very nature, a depreciating asset. From the moment a switch is racked or a server is powered on, it begins a slow, inevitable journey toward obsolescence. Fans accumulate dust, thermal paste degrades, firmware exposes new vulnerabilities, and storage sectors wear out. Without a strategic intervention, sophisticated hardware devolves into a liability.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Despite this reality, a surprising number of mid-to-large enterprises in India still operate on a "Run-to-Fail" methodology. This approach—characterized by fixing equipment only after it has broken down—is arguably the most expensive way to manage IT. It converts predictable operational expenses (OpEx) into chaotic, emergency capital expenses (CapEx), often at a premium cost during a crisis.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      At Nexobots Technologies, we advocate for a paradigm shift from reactive repair to Proactive Asset Lifecycle Management. Through our comprehensive Annual Maintenance Contracts (AMC) and Managed Services, we help enterprises extend the lifespan of their infrastructure, ensure predictable performance, and secure a higher Return on Investment (ROI).
                    </p>
                  </>
                ) : isBlog12 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In the lifecycle of a growing enterprise, IT infrastructure often evolves out of necessity rather than strategy. A server is bought to host a new application; a firewall is added to meet a compliance audit; a cloud instance is spun up for a specific project. Over time, these isolated decisions accumulate into what industry experts call "Accidental Architecture."
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The result is a fragmented ecosystem: legacy systems that do not talk to modern applications, security gaps hidden in the seams between vendors, and a rigid infrastructure that stifles innovation.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      For the modern CIO, the challenge is not just keeping the lights on; it is untangling this complexity. Success hinges on how efficiently your IT systems communicate, scale, and perform.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      At Nexobots Technologies, we believe that world-class infrastructure is not bought; it is architected. Through our IT Infrastructure Consulting & System Integration services, we help Indian enterprises bridge the gap between ad-hoc technology adoption and a cohesive, future-proof strategy.
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Traveling is an enriching experience that opens up new horizons, exposes us to
                      different cultures, and creates memories that last a lifetime. However, traveling
                      can also be stressful and overwhelming, especially if you don't plan and prepare
                      adequately. In this blog article, we'll explore tips and tricks for a memorable
                      journey and how to make the most of your travels.
                    </p>
                    <br />
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      One of the most rewarding aspects of traveling is immersing yourself in the local
                      culture and customs. This includes trying local cuisine, attending cultural
                      events and festivals, and interacting with locals. Learning a few phrases in the
                      local language can also go a long way in making connections and showing respect.
                    </p>
                  </>
                )}
              </div>

              {/* Introduction Section - Blog 1 */}
              {isBlog1 && (
                <div id="introduction" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    1. Introduction: Why Structured Cabling Still Matters
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Modern organisations depend on always-on connectivity. Applications have moved to the cloud, Wi-Fi is expected throughout the workplace, IP telephony has become standard, and systems such as CCTV, access control, and IoT sensors increasingly share the same network infrastructure.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Beneath all of this lies one critical layer: structured cabling.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    When cabling is treated as an afterthought, organisations typically face recurring downtime, performance bottlenecks, and complex troubleshooting. When it is designed correctly, the cabling layer becomes a stable, largely invisible foundation that can support multiple generations of technology with minimal disruption.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots specialises in standards-based structured cabling solutions that help Indian enterprises build reliable, scalable, and easy-to-manage networks across offices, campuses, industrial facilities, and data centres.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    This guide explains what structured cabling is, describes the six core components defined in industry standards, highlights design and implementation best practices, and outlines how Nexobots approaches structured cabling projects end to end.
                  </p>
                </div>
              )}

              {/* What Is Structured Cabling Section - Blog 1 */}
              {isBlog1 && (
                <div id="what-is" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2. What Is Structured Cabling?
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Structured cabling is a standardised approach to designing and installing the physical cabling infrastructure within a building or campus. Instead of installing one-off, point-to-point cables every time a new device is added, structured cabling organises the network into clearly defined subsystems.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    These subsystems rely on standardised cable types (copper and fibre), approved topologies and maximum distances, standardised connectors, patch panels and outlets, and documented pathways and labelling schemes.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Global standards such as ANSI/TIA-568 and ISO/IEC 11801 define how structured cabling systems should be designed, installed, and tested. By adhering to these standards, Nexobots ensures that each cabling plant is prepared to support both current and future technologies, rather than being optimised only for the hardware being deployed today.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In practical terms, structured cabling with Nexobots provides a physical network layer that is predictable in performance, repeatable in design, scalable as the business grows, and significantly easier to support and upgrade over its lifecycle.
                  </p>
                </div>
              )}

              {/* Why Structured Cabling Systems Deserve Board-Level Attention - Blog 2 */}
              {isBlog2 && (
                <div id="board-level" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    1. Why Structured Cabling Systems Deserve Board-Level Attention
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Most organisations still think of cabling as "the wires above the ceiling." In reality, the structured cabling system is the only part of your network that is expected to survive multiple generations of switches, wireless standards, and applications.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    SCS has quietly become the common platform for data, voice, video, security, wireless, building automation, and IoT. Modern standards and architectures allow a single, unified cabling plant to replace the multi-cable chaos of legacy installations, while supporting devices from many vendors and across many technologies.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    For CIOs, heads of infrastructure, and facility leaders, this means the structured cabling design is not an implementation detail. It is a strategic decision that affects:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>How quickly you can adapt space and technology to business change.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>How much downtime you tolerate from physical faults.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>How much you spend over ten years on moves, adds, changes, and re-cabling.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>How ready you are for smart-building and campus requirements.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots positions SCS as a long-lived asset, not a construction line item. The objective is to create a physical layer that you do not have to "re-think" every time your network evolves.
                  </p>
                </div>
              )}

              {/* What a Structured Cabling System Actually Is - Blog 2 */}
              {isBlog2 && (
                <div id="what-is-scs" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2. What a Structured Cabling System Actually Is
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    At its core, a Structured Cabling System is an organised, standards-based way to connect any device in your building or campus to any service you choose, without re-pulling cable every time something changes.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Standards bodies such as ISO/IEC, TIA, and CENELEC define SCS as a generic cabling infrastructure that consists of balanced copper cabling, optical fibre, connecting hardware, and pathways that support many applications over their lifetime, independent of specific vendors or protocols.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Three concepts distinguish a structured system from ad-hoc wiring:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>It uses standard media types and topologies for backbone and horizontal cabling instead of custom runs for each system.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>It uses standard physical interfaces and connector types so that devices from different vendors can be swapped without infrastructure changes.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>It is designed and installed as a single, coherent system rather than piecemeal projects.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The result is an "open architecture," where IT, OT, security, and building systems share the same high-quality physical platform, and devices can be upgraded or replaced without touching the underlying cabling.
                  </p>
                </div>
              )}

              {/* Research Your Destination Section - Default */}
              {!isBlog1 && !isBlog2 && (
                <div className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Research Your Destination
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Before embarking on your journey, take the time to research your destination.
                    This includes understanding the local culture, customs, and laws, as well as
                    identifying top attractions, restaurants, and accommodations. Doing so will help
                    you navigate your destination with confidence and avoid any cultural faux pas.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque
                    non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit
                    amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra
                    adipiscing at in tellus.
                  </p>
                </div>
              )}

              {/* Plan Your Itinerary Section - Default */}
              {!isBlog1 && (
                <div className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Plan Your Itinerary
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    While it's essential to leave room for spontaneity and unexpected adventures,
                    having a rough itinerary can help you make the most of your time and budget.
                    Identify the must-see sights and experiences and prioritize them according to your
                    interests and preferences. This will help you avoid overscheduling and ensure
                    that you have time to relax and enjoy your journey.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna
                    fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non
                    sodales neque sodales ut etiam sit amet.
                  </p>
                </div>
              )}

              {/* How SCS Evolved Section - Blog 2 */}
              {isBlog2 && (
                <div id="how-evolved" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3. How SCS Evolved – and Why That Matters Now
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Before structured cabling, each system used its own medium, connectors, and topology: proprietary twinax or coax for host systems, separate wiring for telephony, separate loops for building automation, and so on. Changing vendors often meant re-cabling the building.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In the 1980s, Bell Labs' building distribution system (PDS) and later SYSTIMAX SCS pioneered a vendor-neutral, star-shaped cabling architecture for voice, data, and video. This concept was codified into generic cabling standards like ISO/IEC 11801 and TIA-568 during the 1990s and 2000s, which defined:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Performance categories for copper and optical fibre.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Subsystems such as campus, backbone, and horizontal cabling.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Maximum distances and topologies.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Design and testing guidelines for commercial, campus, data centre, and industrial environments.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Today, the same principles are applied far beyond desktop Ethernet. They underpin smart buildings, smart campuses, industrial automation, and converged audio-visual systems that rely on structured cabling for both connectivity and power.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    This history matters because it explains why SCS has proven resilient across decades of change. When Nexobots designs your cabling, we are not designing for a single generation of Wi-Fi or a single OEM; we are designing against a set of standards that have already carried multiple technology waves.
                  </p>
                </div>
              )}

              {/* Key Characteristics Section - Blog 2 */}
              {isBlog2 && (
                <div id="key-characteristics" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4. Key Characteristics of a Modern SCS
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    CommScope's fact file highlights that SCS has been so successful precisely because of its standardisation and open-architecture nature. Building on those principles, a high-quality system in 2025 should be:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Multi-application:</strong> supporting IT networks, building automation, physical security, AV, and IoT over the same plant.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Vendor-agnostic:</strong> not tied to a single equipment manufacturer, allowing procurement and lifecycle flexibility.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Performance-graded:</strong> using clear classes (e.g., Class EA/Cat 6A, OS2, OM4) that map to known application support and distance.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Deterministic:</strong> predictable insertion loss, crosstalk, and latency characteristics, verified by field testing.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Documented and manageable:</strong> addressable and traceable from the network interface down to each outlet, increasingly with support for automated infrastructure management (AIM) systems.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots uses these characteristics as design constraints rather than afterthoughts, which is a key difference between "commodity cabling" and a structured system that will still make sense ten years from now.
                  </p>
                </div>
              )}

              {/* Why Businesses Invest Section - Blog 1 */}
              {isBlog1 && (
                <div id="why-invest" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3. Why Businesses Invest in Structured Cabling
                  </h2>
                  
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3.1 Scalability and Flexibility
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    As a business expands, it typically adds users, endpoints, Wi-Fi access points, IP cameras, and IoT devices, and consumes more bandwidth-intensive applications. A well-designed structured cabling system allows these additions to be made by patching new connections into existing outlets and patch panels, rather than installing new, ad-hoc cables every time a requirement arises. This supports growth without constant rework.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3.2 Reliability and Uptime
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Unstructured or poor-quality cabling is a frequent, but often overlooked, source of network issues. Crosstalk, signal loss, interference, and poor terminations can cause intermittent failures that are difficult to isolate. Standards-based design, certified components, and comprehensive testing significantly reduce physical-layer faults and directly improve overall network uptime. Nexobots incorporates all three into every deployment.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3.3 Faster Troubleshooting
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    When cabling pathways and terminations are properly documented and labelled, engineers can trace a link from the work-area outlet, through the horizontal cabling, into the telecommunications room, across the backbone, and finally into the core equipment without guesswork. This end-to-end visibility shortens troubleshooting cycles and avoids reliance on informal "local knowledge" about how cables were originally pulled.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3.4 Better Total Cost of Ownership
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Structured cabling can appear to be a higher upfront investment compared with low-cost, unstructured wiring. Over the lifespan of a building or campus, however, organisations generally save through reduced downtime, faster moves/adds/changes, fewer major re-cabling projects, and a longer usable life for the cabling plant. The result is a lower total cost of ownership and a higher overall return on network investments.
                  </p>
                </div>
              )}

              {/* Image 1 */}
              <div
                className="relative mb-8 overflow-hidden rounded-[12px]"
                style={{
 height: "303px" }}
              >
                <Image
                  src={isBlog1 ? "/data-center-network-cables-server-connections-highperformance-technology.jpg" : isBlog2 ? "/network_solution.jpg" : isBlog3 ? "/data-transfer-via-network-cables-connected-switch-digital-world-concept-data-transfer-network-cables-switch-digital-world-connectivity (1).jpg" : isBlog4 ? "/b2.jpg" : isBlog5 ? "/images (1) (1).jpg" : isBlog6 ? "/nexobots 5.jpg" : isBlog7 ? "/Virtualization.jpg" : isBlog8 ? "/Specialized Eyes ANPR and Thermal Imaging.jpg" : isBlog9 ? "/The Efficiency Engine Integrating Access with HRMS.jpg" : isBlog10 ? "/art of the rack.jpg" : isBlog11 ? "/The Science of Lifecycle Management From Discovery to Disposal.jpg" : isBlog12 ? "/The Strategic Blueprint Technology Roadmap Development.jpg" : "/blog-detail-image-1.png"}
                  alt={isBlog1 ? "Network Cables and Server Connections" : isBlog2 ? "Network Solution" : isBlog3 ? "Data Transfer via Network Cables" : isBlog4 ? "Enterprise Network Infrastructure" : isBlog5 ? "Data Center Infrastructure" : isBlog6 ? "Zero Trust Security Framework" : isBlog7 ? "Virtualization Services" : isBlog8 ? "ANPR and Thermal Imaging" : isBlog9 ? "HRMS Integration" : isBlog10 ? "Rack Organization" : isBlog11 ? "Lifecycle Management" : isBlog12 ? "Technology Roadmap Development" : "Travel Planning"}
                  fill
                  className="object-cover"
                  sizes="840px"
                  loading="lazy"
                />
              </div>

              {/* Contact Form Embedded in Article - Responsive */}
              <div
                className="relative mb-8 overflow-hidden rounded-[22px] bg-[#F7F7F7] p-5 sm:p-6 lg:p-[35px]"
              >
                {/* Desktop: Two columns, Mobile: Single column stacked */}
                <div className="flex flex-col lg:flex-row lg:gap-8">
                  {/* Left side text */}
                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <p
                      className="font-['Manrope'] text-[#696969] mb-4 lg:mb-6 text-xl sm:text-2xl lg:text-[32px]"
                      style={{
                        fontWeight: 400,
                        lineHeight: "1.366",
                      }}
                    >
                      Need IT network support? Let's connect Our team will get back to you with the
                      right options.
                    </p>
                    <h3
                      className="font-['TASA_Orbiter'] text-[#707070] mb-4 lg:mb-6 text-lg sm:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.3",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      Connect with Us
                    </h3>
                    {/* Social Icons */}
                    <div className="flex gap-2">
                      <button className="flex h-[37px] w-[41px] items-center justify-center rounded-md border border-[#98989A]">
                        <span className="text-[#98989A]">f</span>
                      </button>
                      <button className="flex h-[37px] w-[39px] items-center justify-center rounded-md border border-[#98989A]">
                        <span className="text-[#98989A]">t</span>
                      </button>
                      <button className="flex h-[37px] w-[40px] items-center justify-center rounded-md border border-[#98989A]">
                        <span className="text-[#98989A]">in</span>
                      </button>
                    </div>
                  </div>

                  {/* Right side form */}
                  <div className="lg:w-1/2">
                    <div className="mb-3">
                      <label
                        className="font-['Manrope'] text-[#707070] mb-2 block text-sm lg:text-[15px]"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.5",
                        }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter First Name"
                        className="w-full rounded-md border border-[#CECECE] bg-[#F2F2F2] px-3 py-3 lg:px-4 lg:py-4 text-sm"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="font-['Manrope'] text-[#707070] mb-2 block text-sm lg:text-[15px]"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.5",
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className="w-full rounded-md border border-[#CECECE] bg-[#F2F2F2] px-3 py-3 lg:px-4 lg:py-4 text-sm"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="font-['Manrope'] text-[#707070] mb-2 block text-sm lg:text-[15px]"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.5",
                        }}
                      >
                        Phone Number
                      </label>
                      <div className="flex gap-2 lg:gap-3">
                        <div className="flex h-[44px] lg:h-[56px] w-[60px] lg:w-[80px] items-center justify-center rounded-md border border-[#CECECE] bg-[#F2F2F2]">
                          <Image
                            src="/globe.svg"
                            alt=""
                            width={21}
                            height={21}
                            className="h-4 w-4 lg:h-[21px] lg:w-[21px]"
                          />
                        </div>
                        <input
                          type="tel"
                          placeholder="Enter Phone Number"
                          className="flex-1 min-w-0 rounded-md border border-[#CECECE] bg-[#F2F2F2] px-3 py-3 lg:px-4 lg:py-4 text-sm"
                        />
                      </div>
                    </div>

                    <button
                      className="mt-4 inline-flex h-8 items-center justify-center gap-2 rounded-[75px] border border-[rgba(70,70,70,0.3)] bg-black px-4 lg:px-5"
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                      }}
                    >
                      <span className="text-white">Submit</span>
                      <Image
                        src="/find-out-more-arrow.svg"
                        alt=""
                        width={12}
                        height={12}
                        className="h-3 w-3"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* The Elements of SCS Section - Blog 2 */}
              {isBlog2 && (
                <div id="elements" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    5. The Elements of SCS – A Practical View
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Standards organise SCS into subsystems such as campus backbone, building backbone, horizontal cabling, and work areas. For decision-makers, it is more useful to think in terms of operational zones:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>The entrance facility where service providers hand off to your infrastructure.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>The equipment room housing core and distribution equipment.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>The backbone network that ties buildings and floors together.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>The telecommunications rooms on each floor where access switches and patch panels live.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>The horizontal cabling reaching from those rooms to workspaces, ceilings, and devices.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>The work and coverage areas where end devices connect.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Each of these zones has its own design constraints. For example, the backbone must anticipate future speeds and redundancy needs because changes are disruptive. Horizontal cabling must respect strict distance and installation rules because this is where user experience is most directly affected. Telecommunications rooms must be positioned and sized to support reconfiguration without extensive re-wiring.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots deliberately designs each zone as part of a whole. The outcome is a consistent architecture where every link can be logically and physically traced across the building.
                  </p>
                </div>
              )}

              {/* Where SCS Is Used Today Section - Blog 2 */}
              {isBlog2 && (
                <div id="where-used" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    6. Where SCS Is Used Today: From Desktops to Districts
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The CommScope fact file emphasises that SCS has moved beyond traditional desktop connections into ceilings, campuses, and industrial premises. In practice, four environments dominate:
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Commercial smart buildings
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    now rely on structured cabling for user connectivity, Wi-Fi, IP telephony, CCTV, access control, PoE lighting, and building management systems. Instead of parallel cable plants for each system, a converged SCS supports all of them with clear logical separation where required.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Smart campuses
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    —corporate, university, or healthcare—use fibre backbones to connect buildings and outdoor areas, with structured copper and fibre feeding classrooms, labs, wards, and public spaces. Reliable PoE and powered fibre extend coverage to remote cameras and emergency points without high-voltage distribution.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Data centres
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    use SCS principles for high-density fibre and copper interconnects between spine–leaf switches, storage systems, and servers. Pre-terminated trunks, modular cassettes, and structured patching fields replace spaghetti-style jumpers, making capacity planning and maintenance far more controlled.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Industrial and IIoT environments
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    adapt SCS to harsher conditions. Standards such as ISO/IEC 11801-3 extend generic cabling concepts into factories and process plants, where industrial Ethernet, sensor networks, and control systems require robust, documented connectivity.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots works across all four categories, with particular emphasis on Indian offices, campuses, and hybrid industrial-IT sites where IT and OT networks now converge.
                  </p>
                </div>
              )}

              {/* Six Core Components Section - Blog 1 */}
              {isBlog1 && (
                <div id="six-components" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4. The Six Core Components of Structured Cabling
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-6"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Structured cabling standards divide the system into six main components or subsystems. Understanding each is essential to designing a robust and maintainable solution:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Entrance Facilities (EF)</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Equipment Room (ER)</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Backbone Cabling</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Telecommunications Room (TR)</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Horizontal Cabling</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Work Area (WA)</li>
                  </ul>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4.1 Entrance Facilities (EF)
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The entrance facility is the point at which external service provider networks enter the premises and hand off to the internal network. It typically houses service provider demarcation points, conduits and pathways from the outside plant, lightning and surge protection devices, grounding and bonding systems, termination frames or patch panels, and, in some cases, provider equipment racks.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    When Nexobots designs entrance facilities, particular attention is given to securing and controlling access to the area, ensuring proper grounding and bonding for both safety and equipment protection, and providing sufficient space and conduits to accommodate additional circuits or new providers in the future.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4.2 Equipment Room (ER)
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The equipment room is a central, environmentally controlled space that houses critical network and sometimes compute infrastructure. It generally contains core and distribution switches, routers, firewalls, main and intermediate cross-connects, backbone cabling terminations, telephony systems, and supporting power infrastructure such as UPS units and PDUs.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots designs equipment rooms to provide adequate and redundant power, appropriate cooling and ventilation for high-density equipment, structured cable management via ladder racks and cable managers, and sufficient space for additional racks and higher-speed equipment as the network evolves.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4.3 Backbone Cabling (Riser / Campus Cabling)
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Backbone cabling connects the major functional spaces of the network. It links entrance facilities to equipment rooms, equipment rooms to floor-level telecommunications rooms, and telecommunications rooms across floors and buildings. In multi-storey environments this is often referred to as riser cabling; when linking multiple buildings it is typically called campus cabling.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Common media for backbone cabling include multimode fibre (such as OM3, OM4, or OM5) for high-speed intra-building links, single-mode fibre for long-distance inter-building or campus links, and, in some specific short-run scenarios, high-performance copper such as Cat 6A. In Nexobots projects, fibre is generally recommended as the default for new backbone designs so that the plant can support 10G, 25G, 40G, and higher speeds with sufficient headroom.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4.4 Telecommunications Room (TR)
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    A telecommunications room is a floor-level or zone-level space where horizontal cabling from work areas terminates and where access-layer switches, including PoE switches, are installed. It is also the point at which backbone cabling is cross-connected to horizontal cabling via patching.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Effective TR design ensures at least one appropriately located room per floor, or per zone on larger floors, so that cable lengths remain within standard limits. It also requires adequate space, power, and a logical rack layout, along with structured cable management that keeps patching neat and accessible. Environmental considerations such as temperature control, dust management, and basic cooling are also important.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots designs telecommunications rooms to simplify daily operations for IT teams, with clear labelling, intuitive rack layouts, and sufficient capacity to support future expansion.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4.5 Horizontal Cabling
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Horizontal cabling runs from the telecommunications room to individual work-area outlets. It includes the permanent cabling installed in ceilings, raised floors, or walls; patch panels in the TR; optional consolidation points or multi-user telecommunications outlet assemblies (MUTOAs); and the final outlet in the work area.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    For copper, standard practice limits the total channel length to 100 metres, typically comprising up to 90 metres of permanent link plus up to 10 metres of patch cords in total. Common choices for horizontal media include Cat 6 or Cat 6A UTP or STP for workstations, IP phones, Wi-Fi access points, and most IoT endpoints, with fibre-to-the-desk used in specialised high-performance environments.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In Nexobots implementations, horizontal cabling is planned to balance performance, cost, and future scalability. Particular care is taken to respect bend radius and pulling tension, maintain separation from power cable runs and sources of EMI, and use proper cable trays and pathways rather than placing cables loosely on ceiling tiles.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4.6 Work Area (WA)
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The work area is the user-facing end of the structured cabling system. It encompasses the outlet and everything between that outlet and the endpoint device. This includes wall, floor, or consolidation outlets (RJ45 or fibre adapters), patch cords to PCs, IP phones, printers, wireless APs, cameras and IoT devices, and, where applicable, local power injectors.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Even when the upstream cabling subsystems are well designed, poor patch cords or bad deskside practices can compromise performance. Nexobots recommends using patch cords that match the category rating and shielding type of the permanent link, keeping patch leads as short as practical without creating strain, and ensuring that users and facilities teams avoid crushing or tightly bending cables behind desks and meeting tables.
                  </p>
                </div>
              )}

              {/* Pack Lightly and Smartly Section - Default */}
              {!isBlog1 && (
                <div className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: "1.167",
                    }}
                  >
                    Pack Lightly and Smartly
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Packing can be a daunting task, but with some careful planning and smart choices,
                    you can pack light and efficiently. Start by making a packing list and sticking
                    to it, focusing on versatile and comfortable clothing that can be mixed and
                    matched. Invest in quality luggage and packing organizers to maximize space and
                    minimize wrinkles.
                  </p>
                </div>
              )}

              {/* Stay Safe and Healthy Section - Default */}
              {!isBlog1 && (
                <div className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: "1.167",
                    }}
                  >
                    Stay Safe and Healthy
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Traveling can expose you to new environments and potential health risks, so it's
                    crucial to take precautions to stay safe and healthy. This includes researching
                    any required vaccinations or medications, staying hydrated, washing your hands
                    frequently, and using sunscreen and insect repellent. It's also essential to
                    keep your valuables safe and secure and to be aware of your surroundings at all
                    times.
                  </p>
                </div>
              )}

              {/* Immerse Yourself in the Local Culture Section - Default */}
              {!isBlog1 && (
                <div className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: "1.167",
                    }}
                  >
                    Immerse Yourself in the Local Culture
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    One of the most rewarding aspects of traveling is immersing yourself in the local
                    culture and customs. This includes trying local cuisine, attending cultural
                    events and festivals, and interacting with locals. Learning a few phrases in the
                    local language can also go a long way in making connections and showing respect.
                  </p>
                </div>
              )}

              {/* Image 2 */}
              <div
                className="relative mb-8 overflow-hidden rounded-[12px]"
                style={{
 height: "462px" }}
              >
                <Image
                  src={isBlog1 ? "/data-transfer-via-network-cables-connected-switch-digital-world-concept-data-transfer-network-cables-switch-digital-world-connectivity.jpg" : isBlog2 ? "/data-center-network-cables-server-connections-highperformance-technology.jpg" : isBlog3 ? "/modern-server-farm-showcasing-advanced-technology-efficient-layout.jpg" : isBlog4 ? "/b3.jpg" : isBlog5 ? "/2c.jpg" : isBlog6 ? "/nexo 7.jpg" : isBlog7 ? "/The Safety Net Disaster Recovery.jpg" : isBlog8 ? "/The Nervous System Centralized Video Management (VMS).jpg" : isBlog9 ? "/The Future is Mobile Digital Credentials.jpg" : isBlog10 ? "/Certification The Difference Between Connected and Compliant.jpg" : isBlog11 ? "/247 Network Operations Center NOC.jpg" : isBlog12 ? "/Chaos to Cohesion.jpg" : "/blog-detail-image-2.png"}
                  alt={isBlog1 ? "Data Transfer via Network Cables" : isBlog2 ? "Network Cables and Server Connections" : isBlog3 ? "Modern Server Farm" : isBlog4 ? "SD-WAN Deployment" : isBlog5 ? "Network Operations Center" : isBlog6 ? "Zero Trust Security Architecture" : isBlog7 ? "Disaster Recovery as a Service" : isBlog8 ? "Centralized Video Management System" : isBlog9 ? "Mobile Digital Credentials" : isBlog10 ? "Cable Certification" : isBlog11 ? "Network Operations Center" : isBlog12 ? "From Chaos to Cohesion" : "Local Culture"}
                  fill
                  className="object-cover"
                  sizes="840px"
                />
              </div>

              {/* Beyond Data: Power Feeding and Wireless Integration - Blog 2 */}
              {isBlog2 && (
                <div id="power-wireless" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    7. Beyond Data: Power Feeding and Wireless Integration
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    One area where Nexobots goes deeper than generic guidance is in integrating data, power, and wireless into a single design.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The CommScope article rightly highlights that structured cabling increasingly carries power as well as data, through PoE and powered fibre systems. Modern PoE standards deliver up to 90 W per port, which is enough to support high-end access points, PTZ cameras with heaters, and many lighting fixtures.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    This has non-trivial implications:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Cable bundles must be sized and routed to avoid excessive temperature rise.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Connectors and patch panels must tolerate repeated high-power connect/disconnect cycles.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Horizontal cabling for PoE lighting and dense IoT deployments often requires Cat 6A to manage both power and bandwidth safely.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Wireless is equally dependent on the wired SCS. High-density Wi-Fi 6/6E/7 deployments require a grid of access points, typically connected over Cat 6A with PoE++, while in-building cellular and DAS solutions rely on fibre and hybrid cabling behind the scenes.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots treats ceiling zones as first-class coverage areas. We use concepts such as universal connectivity grids—regularly spaced connection points across the ceiling—to make ceiling-based devices as planned and serviceable as desk outlets.
                  </p>
                </div>
              )}

              {/* Technology Under the Hood Section - Blog 2 */}
              {isBlog2 && (
                <div id="technology" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    8. Technology Under the Hood: Copper, Fibre, SPE, and AIM
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    From a technology perspective, SCS today sits at the intersection of several developments the CommScope fact file only briefly mentions but which are increasingly important.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Balanced copper cabling continues to evolve, with Cat 6A being the practical baseline for new high-density office and ceiling deployments due to its headroom for 10G and PoE. Fibre choices span OM3/OM4 multimode and OS2 single-mode, with wideband OM5 and parallel fibre architectures being considered for high-speed data centres.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Single-pair Ethernet (SPE) is emerging as a dedicated medium for low-speed, long-reach OT and IoT devices, particularly in building automation and industrial scenarios. Standards bodies are actively defining how SPE fits into the broader structured cabling landscape so that it can be deployed without creating yet another siloed wiring layer.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Automated Infrastructure Management (AIM) is moving SCS from a static, paper-documented system to a live, monitored one. Solutions such as imVision, which CommScope highlights for smart campuses and buildings, track patching status and physical connections in real time. Nexobots designs the physical layout, labelling, and patching policy to be AIM-ready even if you do not deploy such systems on day one.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    These innovations are not "extras"; they are part of making SCS sustainable in a world where networks are more dynamic, automated, and audited than ever.
                  </p>
                </div>
              )}

              {/* Designing SCS in 2025 Section - Blog 2 */}
              {isBlog2 && (
                <div id="designing-2025" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    9. Designing SCS in 2025: Practical Guidance
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    To exceed the baseline described in CommScope's fact file, an SCS design today must be both standards-aligned and context-aware. Nexobots uses a simple but rigorous approach.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    We begin by mapping business and technical drivers: growth forecasts, consolidation plans, smart-building ambitions, regulatory or audit expectations, and resilience targets. We then translate those into quantitative requirements: outlet densities, PoE budgets, AP and camera counts, fibre core counts, redundancy scenarios, and allowable downtime.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Standards such as ISO/IEC 11801 and TIA-568 guide the topology, performance classes, and maximum distances, but design choices are driven by the particular mix of applications and risk profile. For example:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>In a head office where employee experience and collaboration are critical, horizontal cabling may be Cat 6A everywhere, with dense AP and meeting-room coverage.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>In a manufacturing site, a hybrid of ruggedised copper, fibre, and SPE may be used, with extra focus on EMC, physical protection, and separation of safety-critical networks.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>In a data centre, pre-terminated fibre trunks and high-density panels are likely to dominate, with copper used only at the rack edge.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Pathways are dimensioned with 30–40% spare capacity to avoid premature saturation and expensive rework. Labelling and documentation schemas are designed to be understandable to internal staff, not only to external installers. Testing criteria are specified up front, and acceptance is contingent on complete certification, not sample testing.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In short, Nexobots treats the SCS project as a design and governance exercise, not simply as labour + material.
                  </p>
                </div>
              )}

              {/* Cost, Energy, and Sustainability Benefits Section - Blog 2 */}
              {isBlog2 && (
                <div id="cost-sustainability" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    10. Cost, Energy, and Sustainability Benefits
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    CommScope notes that structured cabling can reduce both cost and energy consumption when applied intelligently. Nexobots builds on this by explicitly modelling three dimensions: capex, opex, and sustainability.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Capex optimisation focuses on choosing the right performance class for each zone instead of overspecifying everything. For example, Cat 6A may be mandatory in high-density PoE ceilings but not necessary in low-density back-office areas, while fibre counts are sized to realistic growth projections instead of arbitrary multiples.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Opex reduction comes from standardisation and documentation. When every outlet and patch port can be traced, moves and incident resolution become predictable tasks rather than investigations. This directly reduces engineer time and user downtime.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    On the sustainability side, a well-planned SCS helps consolidate disparate legacy systems (separate coax, multi-core control cabling, proprietary buses) into a converged infrastructure. This reduces material usage, simplifies recycling, and improves spatial efficiency in risers and equipment rooms. Efficient cable management also improves airflow around equipment, indirectly reducing cooling energy in data centres and core rooms.
                  </p>
                </div>
              )}

              {/* How Nexobots Raises the Bar Section - Blog 2 */}
              {isBlog2 && (
                <div id="nexobots-bar" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    11. How Nexobots Raises the Bar Beyond the "Fact File"
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    CommScope's "SCS: The Fact File" is a strong overview of history, principles, applications, and future trends. Nexobots adds value by translating those concepts into concrete, region-specific practice for Indian enterprises.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    We commit to vendor-neutral design that aligns with ISO/IEC and TIA standards, ensuring your SCS is not locked into any one OEM. We integrate cabling, power feeding, and wireless from day one, rather than designing them in silos. We prioritise documentation and training so that your internal teams can operate and evolve the infrastructure confidently after handover.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Most importantly, we design for the full lifecycle. The structured cabling decisions you make now will still be in place when your next two generations of switches, access points, and applications arrive. Nexobots' role is to ensure those decisions are robust enough that you are not forced into premature re-cabling projects.
                  </p>
                </div>
              )}

              {/* Structured Cabling vs Point-to-Point Section - Blog 1 */}
              {isBlog1 && (
                <div id="vs-point-to-point" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    5. Structured Cabling vs Point-to-Point Cabling
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In small or simple environments, it can be tempting to run direct, point-to-point cables from switches to devices without following any structured design. Over time, this approach usually results in tangled and unlabelled cables, difficulty tracing links during outages, a higher risk of accidental disconnection when changes are made, and complex rework when offices are renovated or expanded.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    By contrast, structured cabling with Nexobots provides clear separation of subsystems such as backbone, horizontal cabling, and work areas; documented patching from active equipment to outlets; and a framework that simplifies moves, adds, and changes. It also offers a physical foundation that is inherently more prepared for technology refreshes.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    For any modern office, plant, or data centre, structured cabling is the only sustainable approach to physical network design.
                  </p>
                </div>
              )}

              {/* Design and Implementation Best Practices Section - Blog 1 */}
              {isBlog1 && (
                <div id="best-practices" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    6. Design and Implementation Best Practices
                  </h2>
                  
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    6.1 Start with Requirements
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots begins each engagement with a structured discovery phase. This includes identifying the number and type of users per floor or zone, expected Wi-Fi density and access-point locations, CCTV, access control, and IoT requirements, PoE loads for devices such as cameras, phones, and access controllers, and growth assumptions for the next three to five years.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    These inputs are translated into cabling counts, telecommunications room locations, backbone topology, and capacity planning parameters that are appropriate for the site.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    6.2 Choose the Right Media and Categories
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Media selection directly affects performance and cost. Nexobots typically recommends Cat 6 for standard office environments with 1G access and moderate PoE requirements, and Cat 6A where 10G access, high-density PoE, or long-term future-proofing is required. Multimode fibre (such as OM3, OM4, or OM5) is used for high-speed intra-building uplinks, and single-mode fibre for inter-building or long campus links.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Proposals are structured around these choices to align the solution with both current requirements and expected future demands.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    6.3 Pathways, Cable Management, and Safety
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Physical routing is as important as the choice of cable. Nexobots uses cable trays, ladders, and under-floor systems to support cables; maintains separation from high-voltage power cables and EMI sources; respects bend radius and avoids over-tight cable ties; and implements appropriate fire-stopping where cables pass between fire-rated areas. These measures reduce the risk of physical damage, interference, and non-compliance with local regulations.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    6.4 Labelling and Documentation
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    A well-implemented structured cabling system should be intelligible to any trained engineer. Nexobots ensures that every cable is labelled at both ends using a defined and consistent scheme, that patch panels, outlets, and riser cables are mapped to logical identifiers, and that floor plans, rack layouts, and cross-connect diagrams are provided as part of the handover package. Documentation is updated as moves, adds, and changes are executed, significantly reducing operational complexity for both in-house IT teams and outsourced NOC providers.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    6.5 Testing and Certification
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Prior to handover, Nexobots tests and certifies each installed link in accordance with the relevant standards and category. Copper links are tested for continuity, wiremap, NEXT, return loss, and length. Fibre links are tested for insertion loss and, where required, OTDR traces are captured for longer or critical runs.
                  </p>
                  <br />
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    All test reports are stored and delivered as part of the as-built documentation. This provides objective evidence that the structured cabling system meets its design performance and establishes a baseline for any future troubleshooting.
                  </p>
                </div>
              )}

              {/* Typical Use Cases Section - Blog 1 */}
              {isBlog1 && (
                <div id="use-cases" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    7. Typical Use Cases for Structured Cabling in India
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    While structured cabling standards are global, deployment patterns vary by environment. Nexobots frequently delivers structured cabling solutions in the following scenarios:
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    7.1 Corporate Offices and IT Parks
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In multi-floor office buildings and IT parks, structured cabling supports shared or dedicated telecommunications rooms per floor, high-density Wi-Fi and IP telephony, conference rooms with AV and collaboration systems, and flexible seating or hot-desking models that depend on well-placed and well-documented outlets.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    7.2 Manufacturing Plants and Warehouses
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In industrial environments, structured cabling often incorporates ruggedised cables and enclosures, supports indoor and outdoor CCTV and access control, provides Wi-Fi coverage for handheld devices, scanners, and AGVs, and integrates with industrial networks and OT systems while respecting environmental constraints such as dust, vibration, and temperature.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    7.3 Data Centres and Server Rooms
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In data centres and server rooms, structured cabling underpins high-density fibre backbones, structured patching between server racks, storage, and network equipment, and the separation of production, management, and out-of-band networks. Designs are closely aligned with rack layouts, cooling strategies, and power distribution schemes to optimise both performance and maintainability.
                  </p>
                </div>
              )}

              {/* How Nexobots Delivers Section - Blog 1 */}
              {isBlog1 && (
                <div id="how-nexobots" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    8. How Nexobots Delivers Structured Cabling Projects
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots follows a structured, repeatable methodology across all structured cabling engagements.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    8.1 Assessment and Design
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The process begins with a site survey and a review of any existing infrastructure. Nexobots conducts requirements-gathering sessions with IT, facilities, and security stakeholders, then prepares both high-level and detailed designs. These designs specify telecommunications room locations, backbone routes, cable counts, outlet layouts, and a bill of materials for recommended copper and fibre components.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    8.2 Implementation
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    During implementation, Nexobots installs pathways, trays, and containment systems; pulls and terminates copper and fibre cables; and installs racks and cabinets in equipment rooms and telecommunications rooms. Patching is executed according to the agreed design, with emphasis on proper cable management and labelling.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    8.3 Testing, Handover, and Documentation
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    After installation, each link is certified using calibrated test equipment. Any failures are rectified and retested. Nexobots then delivers a comprehensive handover package including test reports, floor maps, labelling schemes, and rack diagrams, and conducts knowledge transfer sessions with the customer's IT team.
                  </p>

                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    8.4 Ongoing Support (Optional)
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    For customers who require continued assistance, Nexobots offers moves/adds/changes (MAC) services, periodic audits of cabling and documentation, and support during IT refresh projects such as switch or Wi-Fi upgrades, ensuring the cabling plant continues to support evolving requirements.
                  </p>
                </div>
              )}

              {/* Cost of Structured Cabling Installation Section - Blog 3 */}
              {isBlog3 && (
                <div id="cost-installation" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    1. Cost of Structured Cabling Installation for a Small Business in India
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    For small and mid-sized offices, the most practical cost model is cost per network outlet ("per point"), plus one-time costs for rack, patch panels, and any backbone links.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    For a typical small office in India (single floor; 20–50 users; Cat 6 cabling), indicative planning ranges are:
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Per-point budget (Cat 6, standard office):</strong> approximately ₹8,000–₹35,000 per network point
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Usually includes UTP cable, information outlet, patch panel port allocation, labour, terminations, basic testing, and standard conduits or trays.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Typical small-office project envelope:</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    For 24–60 points (workstations, printers, meeting rooms, a few APs and cameras) with one rack and basic accessories, total project values commonly fall in the ₹3,00,000–₹30,00,000 range, excluding switches, routers, firewalls, and UPS.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Actual cost depends on:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Metro vs Tier-2 location</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Choice of brand (tier-1 global vs mid-range vs local)</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Cabling category (Cat 6 vs Cat 6A, and use of fibre)</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Site conditions (civil constraints, riser distance, ceiling access, security rules)</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots treats these figures strictly as planning guidance. A formal commercial proposal is prepared only after a structured requirements discussion and, where necessary, a site survey and floor-plan review.
                  </p>
                </div>
              )}

              {/* How to Choose Structured Cabling Products Section - Blog 3 */}
              {isBlog3 && (
                <div id="choose-products" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2. How to Choose Structured Cabling Products for Office Networks
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Product selection should be based on performance, standards compliance, and lifecycle considerations, not price alone.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Key decision points Nexobots uses in office environments are:
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2.1 Copper category for horizontal cabling
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Cat 6</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Suitable for 1G access and moderate PoE. Acceptable for cost-sensitive environments with limited future performance demands.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Cat 6A</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Recommended for new builds and any environment planning for Wi-Fi 6/6E/7, higher access speeds, or high-density PoE (APs, cameras, ceiling devices). Supports 10G up to 100 m with improved alien crosstalk and PoE thermal performance.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2.2 Conductor and construction
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Prefer solid bare copper conductors, not copper-clad aluminium (CCA) or similar substitutes.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Verify compliance with relevant fire/smoke and building code requirements (e.g., FR/LSZH where required).
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2.3 Fibre requirements
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Where inter-floor or campus connections are required, typical choices are:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>OS2 single-mode fibre for inter-building and longer intra-building runs.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>OM3/OM4 multimode fibre for shorter, high-speed links inside buildings and data rooms.</li>
                  </ul>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2.4 Standards compliance and ecosystem alignment
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Confirm that cable and connectivity components align with ISO/IEC 11801 and ANSI/TIA-568 specifications.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Wherever possible, use a single vendor ecosystem for cable, jacks, patch panels, and cords to ensure channel performance and simplify warranty.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2.5 PoE and environmental suitability
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    For PoE-dense installations (APs, cameras, PoE lighting), prefer components explicitly rated for PoE applications.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Ensure jacket type and construction are appropriate for ceiling voids, risers, and any special conditions (e.g., high temperature zones, industrial areas).
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots typically presents 2–3 curated options (premium, balanced, value-oriented) and recommends a combination that provides adequate headroom without unnecessary overspecification.
                  </p>
                </div>
              )}

              {/* Comparison of Structured Cabling Solutions for Data Centres Section - Blog 3 */}
              {isBlog3 && (
                <div id="data-centre-comparison" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3. Comparison of Structured Cabling Solutions for Data Centres
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Data centre structured cabling design differs from office design due to higher density, greater bandwidth, and stricter availability targets.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Key comparison axes are:
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3.1 Copper vs fibre
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Copper (Cat 6A and above)</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Typically used for short server-to-switch connections within a rack (top-of-rack) or adjacent racks. It is also useful where PoE is required inside special rooms.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Fibre (OS2, OM3/OM4)</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Used extensively for rack-to-rack, row-to-row, and data hall-to-data hall connectivity. Critical for 40G/100G/400G and higher-speed links.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3.2 Pre-terminated vs field-terminated fibre
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Pre-terminated MPO/MTP trunks with cassettes</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Preferred in modern data centres for high density and repeatable quality. They simplify installation and later migrations between speed generations.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Field-terminated fibre (pigtails to LC/SC)</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Still relevant in smaller rooms or when precise route lengths are unknown at design time.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3.3 Topology and migration
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Most designs follow spine–leaf or variants. Structured cabling must support consistent, documented fibre counts between leaves and spines, with provision for expansion.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    A future-ready system anticipates migration to higher speeds by choosing the appropriate fibre type, connector ecosystem, and trunk geometry at the outset.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mt-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Nexobots structures data centre cabling into modular "pods", with clear separation of production, storage, and management fabrics, and provides full port-to-port mapping for each pod and row.
                  </p>
                </div>
              )}

              {/* Types of Structured Cabling Cables Section - Blog 3 */}
              {isBlog3 && (
                <div id="cable-types" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4. Types of Structured Cabling Cables and Their Advantages
                  </h2>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4.1 Balanced copper cables
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Common categories in Indian commercial deployments include:
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Category 5e</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Legacy; supports 1G at 100 m. Not recommended for new installations.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Category 6</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Widely used; supports 1G at 100 m and limited 10G capability over shorter distances. Suitable for standard office networks with modest performance and PoE demands.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Category 6A</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Designed for 10G up to 100 m with improved alien crosstalk performance. Strongly recommended for new projects with high device density, Wi-Fi 6/6E/7, and high-power PoE.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Advantages of copper:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Provides both data and power via PoE on a single cable.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Mature, widely understood installation and termination practices.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Cost-effective for horizontal runs up to 100 m.</li>
                  </ul>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4.2 Optical fibre cables
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Typical fibre types are:
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>OS2 single-mode</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Long-distance, very high bandwidth; suited to campus backbones, inter-building links, and data centre interconnects.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>OM3/OM4 multimode</strong>
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Optimised for shorter high-speed links inside buildings and data centres, supporting a range of Ethernet speeds depending on distance and optics.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Advantages of fibre:</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Extremely high bandwidth, low attenuation, and low latency over long distances.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Immunity to electromagnetic interference.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Compact cable diameter and high possible port density.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In practice, Nexobots designs hybrid systems with copper for horizontal endpoints and fibre for backbone and high-capacity segments.
                  </p>
                </div>
              )}

              {/* Structured Cabling Standards Section - Blog 3 */}
              {isBlog3 && (
                <div id="standards-india" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    5. Structured Cabling Standards Followed in India for Commercial Buildings
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    India adheres to global structured cabling standards; there is no fully independent national standard for commercial LAN cabling.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The primary reference standards adopted by Nexobots are:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>ISO/IEC 11801</strong> – Generic cabling for customer premises, covering office, industrial, residential, data centre, and distributed building services.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>ANSI/TIA-568</strong> – Commercial building telecommunications cabling standard, defining performance and topologies for balanced copper and fibre cabling.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Indian technical guidelines (for example, those used by telecom carriers and certain public-sector projects) typically reference these standards as benchmarks.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In Nexobots projects, this translates to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Using ISO/IEC 11801 classes (e.g., Class E, Class EA) to define performance targets.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>Ensuring cabling layouts and maximum distances align with standard topologies and limits.</li>
                  </ul>
                </div>
              )}

              {/* Phase 1: Pre-Deployment Audit Section - Blog 4 */}
              {isBlog4 && (
                <div id="pre-deployment" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Phase 1: The Pre-Deployment Audit and Infrastructure Assessment
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    A successful network transformation is predicated on granular visibility. Many SD-WAN deployments encounter friction not because of software limitations, but due to an inadequate understanding of the underlying physical and logical infrastructure. Before any new hardware is provisioned, a comprehensive IT assessment and gap analysis is mandatory.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    1.1 Traffic Analysis and Workload Profiling
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The first step involves a deep-dive analysis of current network flows. IT leaders must identify which applications consume bandwidth, the latency requirements of critical workloads, and the redundancy limitations of current links. By utilizing performance analytics and health checks, organizations can map out traffic patterns—distinguishing between real-time traffic (VoIP, Video) and bulk data transfers. This data informs the Quality of Service (QoS) policies that will later be defined in the SD-WAN controller.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    1.2 Physical Infrastructure Readiness
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Software cannot fix a broken physical layer. A frequent oversight in SD-WAN projects is neglecting the passive infrastructure. The integrity of the structured cabling—whether CAT6, CAT7, or Optical Fibre backbones—determines the ultimate throughput and stability of the network. An audit must verify that the physical cabling, rack integration, and patch panel management meet global standards to support higher bandwidths without signal loss or interference.
                  </p>
                </div>
              )}

              {/* Phase 2: Hybrid WAN Model Section - Blog 4 */}
              {isBlog4 && (
                <div id="hybrid-wan" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Phase 2: Architecting the Hybrid WAN Model
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The core value proposition of SD-WAN lies in its ability to abstract the control layer from the underlying transport. For Indian enterprises operating across metros and tier-2/3 cities, a Hybrid WAN architecture is often the most strategic design.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2.1 Integrating Multi-Transport Connectivity
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    A robust architecture leverages multiple transport types to balance cost and performance. This involves integrating dedicated MPLS circuits for mission-critical data with cost-effective, high-speed broadband and LTE/5G links for bulk traffic. The SD-WAN overlay intelligently routes traffic based on real-time link conditions.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    At Nexobots, we manage end-to-end ISP coordination and multi-line redundancy, ensuring that if a primary wired link fails, the system automatically fails over to a secondary or wireless link without dropping active sessions. This multi-ISP link provisioning is critical for achieving "always-on" availability.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2.2 Security at the Edge (SASE Readiness)
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    As the network perimeter dissolves, security must move to the edge. A modern SD-WAN deployment is incomplete without integrated security mechanisms. The architecture should incorporate Next-Generation Firewalls (NGFW) directly at the branch edge.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mt-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    This integration allows for Deep Packet Inspection (DPI), Intrusion Prevention Systems (IPS), and web filtering to occur locally before traffic enters the corporate network. By unifying threat management (UTM) with connectivity, enterprises ensure that every branch office maintains the same security posture as the headquarters, enforcing Zero Trust principles across the WAN.
                  </p>
                </div>
              )}

              {/* Phase 3: Pan-India Deployment Section - Blog 4 */}
              {isBlog4 && (
                <div id="pan-india-deployment" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Phase 3: The Logistics of Scale – Pan-India Deployment
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Designing the network is one challenge; physically deploying it across hundreds of locations is another. For enterprises with branches in remote or diverse locations, logistics can become a bottleneck.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3.1 Certified Multi-Vendor Implementation
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Enterprise networks are rarely homogenous. They often consist of a mix of legacy hardware and new components from various Original Equipment Manufacturers (OEMs). A successful rollout requires engineering teams that possess Certified Multi-Vendor Expertise, capable of configuring and integrating diverse hardware from leaders like Cisco, Fortinet, Palo Alto, and Aruba.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Vendor-agnostic implementation ensures that the solution is driven by architectural fit rather than hardware limitations, allowing for seamless interoperability between core switches, routers, and new SD-WAN edge devices.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3.2 Phased Migration for Zero Disruption
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Replacing a WAN is akin to changing the engine of an aircraft while in flight. To mitigate operational risk, a phased migration strategy is essential.
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Pilot Phase:</strong> Deploying to a select group of non-critical sites to validate policies and application performance.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Parallel Run:</strong> Running the new SD-WAN overlay alongside the existing legacy network to ensure stability.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Full Cutover:</strong> Transitioning all traffic once stability is confirmed.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    This methodology minimizes downtime and ensures that business operations remain uninterrupted during the modernization process. With a delivery capability spanning 180+ cities, logistics must be tightly coordinated to ensure consistent installation standards regardless of the site's location.
                  </p>
                </div>
              )}

              {/* Phase 4: Policy Management Section - Blog 4 */}
              {isBlog4 && (
                <div id="policy-management" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Phase 4: Intelligent Policy Management and Optimization
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Once the infrastructure is live, the focus shifts to Application Performance Optimization. SD-WAN allows IT administrators to move away from router-based command lines to centralized, business-intent policies.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4.1 Application-Aware Routing
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The network must be intelligent enough to recognize applications. We configure centralized policies that identify thousands of applications and route them based on business priority. For instance, latency-sensitive ERP traffic can be prioritized over the most stable MPLS link, while O365 traffic is broken out directly to the internet securely, and social media traffic is throttled or relegated to the lowest-cost link. This level of load balancing and QoS configuration ensures optimal user experience.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    4.2 Continuous Capacity Planning
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Network demands are not static. Optimization is an ongoing cycle involving capacity planning and resource balancing. By continuously analyzing bandwidth utilization trends, IT teams can predict when a branch will outgrow its current link capacity. This predictive approach allows for timely upgrades—whether increasing ISP bandwidth or optimizing RF connectivity for last-mile access—ensuring the network scales in lockstep with business growth.
                  </p>
                </div>
              )}

              {/* Phase 5: Operational Excellence Section - Blog 4 */}
              {isBlog4 && (
                <div id="operational-excellence" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Phase 5: Operational Excellence – The Managed Services Framework
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The complexity of a software-defined network requires vigilant management. For many enterprises, the most effective model is utilizing a Managed Service Provider (MSP) to handle Day-2 operations, ensuring internal IT teams can focus on innovation rather than troubleshooting.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    5.1 The Criticality of the NOC
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The backbone of operational reliability is the 24/7 Network Operations Center (NOC). A centralized NOC provides continuous oversight of the entire IT ecosystem, from the core data center to the furthest branch endpoint.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Effective NOC support goes beyond simple "up/down" monitoring. It involves:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Event Correlation:</strong> Filtering noise to identify genuine incidents.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Root-Cause Analysis:</strong> Diagnosing whether a slowdown is due to the ISP, the hardware, or the application.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Proactive Alerting:</strong> Identifying anomalies before they result in an outage.</li>
                  </ul>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    5.2 SLA-Driven Accountability
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In the enterprise sector, trust is built on accountability. Service Level Agreements (SLAs) are the mathematical guarantee of performance. A professional managed service engagement must be governed by defined metrics, including response times, resolution times, and uptime guarantees.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mt-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    This SLA-based performance assurance provides IT leaders with financial and operational predictability. It shifts the paradigm from "best effort" support to guaranteed reliability, covering everything from firmware patch management to emergency onsite engineering support.
                  </p>
                </div>
              )}

              {/* The Paradigm Shift Section - Blog 5 */}
              {isBlog5 && (
                <div id="paradigm-shift" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    The Paradigm Shift: From Monitoring to Observability
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Traditional monitoring asks, "Is the server up?" Modern observability asks, "Is the system healthy, and if not, why?"
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    The distinction is critical. Basic monitoring tools generate noise—thousands of red flags that fatigue IT teams. A strategic managed services approach focuses on event correlation. By aggregating data streams from routers, switches, firewalls, and endpoints, a sophisticated NOC can distinguish between a momentary CPU spike and a precursor to a critical failure.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    This shift allows IT leaders to evolve their strategy:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Reactive:</strong> "The link is down. Call the ISP."</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Proactive:</strong> "Latency on the secondary link has increased by 15% over the last hour. Reroute traffic before packet loss occurs."</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Predictive:</strong> "Based on usage trends, this switch will reach capacity limits in 14 days. Schedule an upgrade window now."</li>
                  </ul>
                </div>
              )}

              {/* The Architecture of a Next-Gen NOC Section - Blog 5 */}
              {isBlog5 && (
                <div id="next-gen-noc" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    The Architecture of a Next-Gen NOC
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    A Network Operations Center is not simply a room full of screens; it is the central nervous system of the enterprise. For a NOC to deliver value, it must be integrated, intelligent, and staffed by certified experts.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    1. 24/7 Continuous Visibility
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Cyber threats and hardware failures do not adhere to business hours. A robust NOC operates on a 24/7/365 basis. This continuous oversight ensures that critical infrastructure—from data center cores to remote branch firewalls—is under constant vigilance. This creates a "follow-the-sun" support model where issues detected at 2:00 AM are resolved before the workforce logs in at 9:00 AM.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    2. AI-Driven Analytics and Automation
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Manual intervention is the enemy of speed. Modern NOC frameworks utilize AI-driven analytics to automate routine tasks and incident diagnosis. When a known error occurs, automated scripts can restart services, flush caches, or failover to redundant paths instantly. This reduces the Mean Time to Resolution (MTTR) dramatically, freeing up human engineers to focus on complex, root-cause analysis rather than repetitive troubleshooting.
                  </p>
                  <h3
                    className="mb-3 font-['Manrope'] text-[#181A2A]"
                    style={{
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    3. Multi-Vendor Correlation
                  </h3>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Enterprise environments are heterogeneous. You may run Cisco routers, Fortinet security appliances, and HP servers. A siloed monitoring approach leaves gaps in visibility. A premium Managed Service Provider (MSP) utilizes vendor-agnostic tools that ingest data from all OEMs, providing a "single pane of glass" view of the entire health of the network. This cross-platform visibility is essential for identifying complex dependencies that cause cascading failures.
                  </p>
                </div>
              )}

              {/* Data as Oxygen Section - Blog 5 */}
              {isBlog5 && (
                <div id="data-as-oxygen" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Data as Oxygen: The Role of Performance Optimization
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Reliability is not just about keeping the lights on; it is about keeping the lights bright. Optimization is the often-overlooked twin of monitoring.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Through Performance Audits and Tuning, collected data is used to fine-tune configurations. This involves:
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Bandwidth Utilization Tracking:</strong> Identifying "zombie" traffic or non-business applications consuming expensive MPLS bandwidth.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Capacity Planning:</strong> Using historical trend analysis to forecast hardware lifecycle requirements, ensuring budgets are allocated efficiently rather than reactively.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    <strong>Configuration Management:</strong> Ensuring that firmware updates and security patches are applied systematically, closing vulnerability gaps that often lead to performance degradation.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mt-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    When IT leaders treat data as oxygen, the network breathes easier—delivering higher throughput, lower latency, and extended hardware lifespans.
                  </p>
                </div>
              )}

              {/* The Value of SLA-Driven Accountability Section - Blog 5 */}
              {isBlog5 && (
                <div id="sla-accountability" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    The Value of SLA-Driven Accountability
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    In the managed services market, trust is binary: either the provider delivers, or they don't. This is why Service Level Agreements (SLAs) are the cornerstone of a professional partnership.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mb-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    An SLA is not just a contract clause; it is a mathematical commitment to business continuity. It defines:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Response Time Guarantees:</strong> The maximum time allowed for an engineer to acknowledge and begin working on a critical ticket (often as low as 15-60 minutes).</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Resolution Time Metrics:</strong> Defined benchmarks for fixing issues based on severity.</li>
                    <li className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}><strong>Uptime Commitments:</strong> Percentage-based guarantees (e.g., 99.9% uptime) that align IT performance with business revenue goals.</li>
                  </ul>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    At Nexobots, our Annual Maintenance Contracts (AMC) and Managed Services are governed by rigorous SLAs. This ensures that our incentives are perfectly aligned with the client's success—we are profitable when your network is stable, not when it breaks.
                  </p>
                </div>
              )}

              {/* Strategic Advantage: Pan-India Support Section - Blog 5 */}
              {isBlog5 && (
                <div id="pan-india-support" className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "1.6",
                    }}
                  >
                    Strategic Advantage: The Pan-India Support Layer
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Digital infrastructure is often managed centrally, but physical hardware lives locally. A NOC can detect a router failure in a remote tier-2 city, but it cannot physically replace the hardware.
                  </p>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] mt-4"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    This is where the Hybrid Support Model becomes a competitive advantage. The ideal enterprise partner combines centralized NOC intelligence with decentralized field support. With a presence in 180+ cities across India, Nexobots bridges the gap between digital monitoring and physical remediation. Whether it is a structured cabling repair in a factory or a firewall replacement in a regional office, the ability to dispatch certified engineers nationwide ensures that "remote monitoring" translates into "real-world resolution."
                  </p>
                </div>
              )}

              {/* Blog 6 Content Sections */}
              {isBlog6 && (
                <>
                  {/* The Core Philosophy: Identity is the New Perimeter */}
                  <div id="core-philosophy" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Core Philosophy: Identity is the New Perimeter
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In a Zero Trust framework, locality guarantees nothing. Being connected to the office LAN via an Ethernet cable should grant no more implicit access than connecting from a coffee shop Wi-Fi.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      This shift requires a fundamental re-architecture of how Indian enterprises approach access control. Security must move from the network edge to the Identity and the Endpoint.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      1. Explicit Verification
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Every access request—whether from a C-level executive or a junior developer—must be fully authenticated, authorized, and encrypted. This goes beyond simple passwords. It requires Multi-Factor Authentication (MFA) and continuous validation of the user's context:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="font-['Manrope'] text-[#3B3C4A] mb-2" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>
                        Is the device managed and compliant?
                      </li>
                      <li className="font-['Manrope'] text-[#3B3C4A] mb-2" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>
                        Is the location consistent with user behavior?
                      </li>
                      <li className="font-['Manrope'] text-[#3B3C4A] mb-4" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>
                        Is the request occurring during standard business hours?
                      </li>
                    </ul>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      2. Least Privilege Access
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The era of "flat networks" is over. Users should only have access to the specific resources they need to do their jobs, and nothing more. If a marketing manager's laptop is compromised, the attacker should not be able to laterally move into the finance server. This concept, known as Micro-segmentation, limits the "blast radius" of any potential breach, ensuring that a single vulnerability does not become a systemic catastrophe.
                    </p>
                  </div>

                  {/* The Enforcer: Next-Generation Firewalls (NGFW) */}
                  <div id="ngfw" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Enforcer: Next-Generation Firewalls (NGFW)
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      While the perimeter has dissolved, the firewall has not become obsolete—it has evolved. The legacy packet-filtering firewall is insufficient for modern threats that hide within legitimate traffic.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      A robust security posture relies on Next-Generation Firewalls (NGFW) from leaders like Fortinet, Palo Alto, and Cisco. These devices act as the enforcement engines of the Zero Trust policy, providing deep visibility that goes far beyond IP addresses and ports.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      1. Deep Packet Inspection (DPI)
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Modern malware is sophisticated; it often encrypts itself to bypass detection. An NGFW inspects the actual payload of the packet, not just the header. By decrypting traffic in real-time (SSL/TLS inspection), the firewall can identify and block ransomware, viruses, and malicious scripts hiding inside seemingly safe web traffic.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      2. Intrusion Prevention Systems (IPS)
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Security must be proactive. Integrated IPS capabilities allow the network to detect anomalous behavior patterns—such as a sudden spike in database queries or scanning attempts—and block the source IP immediately. This automates the defense against brute-force attacks and known vulnerability exploits.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      3. Application Awareness
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      IT administrators need to control what is happening, not just who is connecting. NGFWs provide application-level control, allowing organizations to permit "Skype for Business" while blocking "BitTorrent," or allowing "Facebook" for marketing teams while blocking "Facebook Games." This granular control optimizes bandwidth and reduces the attack surface.
                    </p>
                  </div>

                  {/* Securing the Hybrid Connectivity: SASE and VPN */}
                  <div id="sase-vpn" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Securing the Hybrid Connectivity: SASE and VPN
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      With a workforce distributed across 180+ cities or working from home, secure remote access is non-negotiable. The traditional VPN concentrator often creates a bottleneck, backhauling all traffic to the HQ just to send it out to the internet.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The modern approach integrates security into the connectivity fabric itself—a concept often referred to as Secure Access Service Edge (SASE).
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Split Tunneling with Security
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Critical corporate traffic is routed securely via encrypted VPN tunnels to the data center, while benign internet traffic is routed locally but secured via cloud-based web gateways.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Endpoint Compliance
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Before a remote device is allowed to connect to the VPN, the system checks its health status. Does it have the latest antivirus definitions? Is the OS patched? If not, the device is quarantined.
                    </p>
                  </div>

                  {/* The Human Element: Biometric Integration */}
                  <div id="biometric" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Human Element: Biometric Integration
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In a Zero Trust world, the "Who" matters more than the "Where." Passwords are the weakest link in the security chain. Integrating Biometric Authentication into the access control framework adds an irrefutable layer of identity verification.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Whether through fingerprint scanners for physical server room access or facial recognition for workstation login, biometrics bind the digital credential to the physical human. This eliminates credential sharing and significantly reduces the risk of identity theft.
                    </p>
                  </div>

                  {/* The Watchtower: Managed Security and Threat Mitigation */}
                  <div id="managed-security" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Watchtower: Managed Security and Threat Mitigation
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Even the most advanced hardware cannot think. A firewall can block a packet, but it cannot analyze the strategic intent of a persistent attacker.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      This is where the Managed Security Service Provider (MSSP) model becomes essential. Security is a 24/7/365 operation. A dedicated Security Operations Center (SOC) provides the human intelligence required to interpret the signals generated by the hardware.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Threat Hunting
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Proactively searching logs for subtle indicators of compromise that automated tools might miss.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Incident Response
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      When a breach is attempted, speed is critical. A managed security team can isolate infected endpoints and revoke user credentials within minutes, preventing data exfiltration.
                    </p>
                  </div>
                </>
              )}

              {/* Blog 7 Content Sections */}
              {isBlog7 && (
                <>
                  {/* The Hybrid Reality: Balancing Performance and Compliance */}
                  <div id="hybrid-reality" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Hybrid Reality: Balancing Performance and Compliance
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The notion that "everything must go to the public cloud" is a myth. For many mid-to-large enterprises, regulatory compliance, data sovereignty, and latency-sensitive workloads necessitate retaining some infrastructure on-premise.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      A Hybrid Cloud architecture allows you to have the best of both worlds. It empowers you to keep core legacy systems secure in your private data center while bursting variable workloads to public platforms like AWS, Microsoft Azure, or Google Cloud.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      However, managing a hybrid environment introduces complexity. It requires a unified management plane that ensures interoperability. Our approach focuses on Cloud Architecture Design & Migration Planning, ensuring that your move to the cloud is not a "lift and shift" of inefficiencies, but a strategic re-platforming that lowers infrastructure costs and improves scalability.
                    </p>
                  </div>

                  {/* Virtualization: Squeezing Every Ounce of Value from Silicon */}
                  <div id="virtualization" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Virtualization: Squeezing Every Ounce of Value from Silicon
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Before you can effectively leverage the cloud, you must optimize your compute layer. In many legacy data centers, servers run at 15-20% capacity—a massive waste of capital and energy.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Virtualization Services are the cornerstone of resource efficiency. By abstracting the operating system from the underlying hardware, virtualization allows enterprises to run multiple virtual machines (VMs) on a single physical host.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We deliver end-to-end support for server, desktop, and storage virtualization, leveraging industry-leading platforms like VMware, Hyper-V, and Citrix.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Server Virtualization
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Consolidates hardware, reducing the physical footprint and power consumption while boosting availability.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Desktop Virtualization (VDI)
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Enables secure remote work by hosting desktop environments centrally, allowing users to access their workspace from any device without compromising data security.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Capacity Planning
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We utilize predictive analytics to balance resources dynamically, ensuring that critical workloads always have the compute and memory they need to perform.
                    </p>
                  </div>

                  {/* The Safety Net: Disaster Recovery as a Service (DRaaS) */}
                  <div id="draas" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Safety Net: Disaster Recovery as a Service (DRaaS)
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In a digital economy, downtime is not just an inconvenience; it is an existential threat. Traditional backup methods—tapes or local disk copies—are insufficient against ransomware attacks or physical site failures.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      To ensure uninterrupted operations, enterprises must adopt Disaster Recovery as a Service (DRaaS). This model moves the failover site to the cloud, eliminating the need for a secondary "dark" data center that sits idle 99% of the time.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Our DRaaS framework safeguards critical workloads through:
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Continuous Data Replication
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Real-time copying of data ensures that your Recovery Point Objective (RPO) is measured in seconds, not hours.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Automated Failover
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In the event of an outage, the system automatically spins up virtual instances in the cloud, ensuring rapid recovery and minimal business impact.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Recovery Testing
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      A disaster recovery plan is only as good as its last test. We conduct automated recovery testing to validate that your failover procedures work before a crisis hits.
                    </p>
                  </div>

                  {/* Security-Driven Cloud Management */}
                  <div id="security-cloud" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Security-Driven Cloud Management
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Migrating to the cloud expands the attack surface. Security cannot be an afterthought; it must be embedded into the architecture.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We employ a Security-Driven Framework that integrates enterprise-grade encryption, Identity and Access Management (IAM), and compliance measures (ISO, GDPR, HIPAA) into every cloud solution. Whether it is a private cloud hosting sensitive financial data or a public cloud running customer-facing apps, we ensure that access control and data protection are rigorous and consistent.
                    </p>
                  </div>

                  {/* Operational Excellence: The Managed Cloud Advantage */}
                  <div id="operational-excellence" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Operational Excellence: The Managed Cloud Advantage
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Building a hybrid cloud is a project; running it is a discipline. Many IT teams struggle with the day-to-day management of complex virtualized environments.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      This is where Nexobots differentiates itself. We do not just build and leave; we provide Managed Cloud Support backed by our 24/7 Network Operations Center (NOC).
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Proactive Monitoring
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We monitor your cloud and virtual environments continuously, detecting latency issues or resource bottlenecks before they impact users.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      SLA-Based Performance
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Our support is governed by defined uptime guarantees and response metrics, providing you with the assurance that your infrastructure is being managed by certified experts.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Cost Optimization
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Cloud bills can spiral if left unchecked. We continuously analyze usage patterns to rightsizing instances and eliminate waste, ensuring you only pay for what you use.
                    </p>
                  </div>
                </>
              )}

              {/* Blog 8 Content Sections */}
              {isBlog8 && (
                <>
                  {/* The Shift: Video as Data */}
                  <div id="video-as-data" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Shift: Video as Data
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The fundamental shift in modern surveillance is treating video not as a visual feed, but as a structured data stream. When "Data is Oxygen," every frame captured by a camera represents an opportunity for insight.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      This is where AI-Enabled Video Analytics changes the game. By leveraging computer vision and machine learning, our systems analyze video feeds in real-time to detect anomalies, automate alerts, and generate actionable intelligence without human intervention.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Behavioral Analytics
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Instead of waiting for a guard to spot a fight or a slip-and-fall, AI algorithms detect rapid crowd formation or loitering in restricted zones, triggering instant alarms.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Perimeter Protection
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Virtual tripwires replace physical fences. If an object breaches a defined digital perimeter at a manufacturing plant or data center, the system classifies it—distinguishing between a stray animal (ignore) and a human intruder (alert).
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Operational Intelligence
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Beyond security, cameras become operations tools. People counting and heat mapping provide retail and facility managers with data on footfall patterns, optimizing staffing and layout usage.
                    </p>
                  </div>

                  {/* Specialized Eyes: ANPR and Thermal Imaging */}
                  <div id="specialized-eyes" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Specialized Eyes: ANPR and Thermal Imaging
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      One size does not fit all in enterprise security. High-risk environments require specialized imaging technologies that go beyond standard optical lenses.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      For campuses and logistics hubs, Automatic Number Plate Recognition (ANPR) is essential. Our systems automate vehicle monitoring by accurately capturing, recognizing, and logging license plates in real-time. This integrates directly with access control databases to automate parking entry or flag blacklisted vehicles the moment they approach the gate, streamlining traffic management while hardening the perimeter.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Furthermore, for critical infrastructure, we deploy Thermal and Pan-Tilt-Zoom (PTZ) solutions. These advanced cameras provide 360° situational awareness and can see in absolute darkness or through smoke/fog, ensuring that high-value assets are protected regardless of environmental conditions.
                    </p>
                  </div>

                  {/* The Nervous System: Centralized Video Management (VMS) */}
                  <div id="vms" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Nervous System: Centralized Video Management (VMS)
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In a distributed enterprise with offices across multiple cities, siloed security is a security gap. A local NVR (Network Video Recorder) sitting in a branch manager's cabin provides no visibility to the central security team.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The solution lies in a Centralized Video Management System (VMS). This unified interface allows the enterprise to control the entire surveillance network—recording, monitoring, playback, and analytics—from a single command center.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Multi-Site Synchronization
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      A security head in Mumbai can view live feeds from a warehouse in Delhi and a tech park in Bangalore simultaneously.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Storage Optimization
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      High-definition video consumes massive bandwidth and storage. Our VMS solutions employ intelligent compression and redundancy planning, ensuring that critical footage is archived securely without overwhelming the corporate network.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Command Center Design
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We design and deploy intelligent monitoring rooms equipped with multi-screen visualization and alarm escalation workflows, turning a passive viewing room into an active Remote Command Center.
                    </p>
                  </div>

                  {/* The Integration Mandate: Unifying CCTV and Access Control */}
                  <div id="integration" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Integration Mandate: Unifying CCTV and Access Control
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      True security is achieved only when systems talk to each other. A standalone biometric door controller and a standalone CCTV camera create a disjointed audit trail.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We build Integrated Security Frameworks where surveillance and access control work in tandem.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Visual Verification
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      When a biometric access attempt fails or a "forced door" alarm is triggered, the integrated CCTV system automatically slews the nearest PTZ camera to that location and tags the video clip.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Identity Management
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      By linking facial recognition cameras with employee databases, access can be granted seamlessly, creating a contactless, frictionless, and highly secure entry experience.
                    </p>
                  </div>
                </>
              )}

              {/* Blog 9 Content Sections */}
              {isBlog9 && (
                <>
                  {/* The End of the Proxy: The Biometric Advantage */}
                  <div id="biometric-advantage" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The End of the Proxy: The Biometric Advantage
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The fundamental flaw of traditional access systems is that they verify possession, not identity. Anyone holding a keycard is assumed to be the authorized user.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Biometrics change the paradigm by verifying who you are.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Facial Recognition
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Utilizing advanced AI algorithms, our systems map unique facial nodal points to grant access in milliseconds. This offers a "touchless" experience that is both hygienic and highly secure, impossible to duplicate or transfer.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Multi-Modal Authentication
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      For high-security zones like server rooms or R&D labs, single-factor authentication is insufficient. We deploy multi-modal systems that combine fingerprint, iris, or palm recognition with smart cards, ensuring that access is granted only when multiple verification layers align.
                    </p>
                  </div>

                  {/* The Efficiency Engine: Integrating Access with HRMS */}
                  <div id="hrms-integration" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Efficiency Engine: Integrating Access with HRMS
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      For many organizations, the disconnect between the Access Control System (ACS) and the Human Resource Management System (HRMS) is a major operational bottleneck. Data is often manually exported from door controllers and imported into payroll software—a process that is slow and error-prone.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We treat Access Control as an integral part of Workforce Management. Our solutions integrate seamlessly with leading ERP, HRMS, and payroll platforms.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Real-Time Attendance
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      When an employee walks through the door, their attendance is logged instantly in the HR system. Late arrivals, early departures, and overtime are calculated automatically, eliminating end-of-month reconciliation chaos.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Shift Management Automation
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Complex shift rosters are synced directly to the access panels. An employee scheduled for the night shift will only be granted access during those hours, enforcing operational discipline automatically.
                    </p>
                  </div>

                  {/* Centralized Control for the Distributed Enterprise */}
                  <div id="centralized-control" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Centralized Control for the Distributed Enterprise
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Managing access for a single office is simple. Managing it for a Pan-India enterprise with branches in 180+ cities is a logistical challenge.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots utilizes Cloud-Based Access Architectures to centralize identity management.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      One Identity, Everywhere
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      An employee transferred from Delhi to Mumbai doesn't need a new registration. Their biometric profile is synced across the enterprise network. They simply walk into the new office, and the door opens.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Remote Management
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      IT and Security administrators can monitor entry events, grant temporary access to vendors, or revoke credentials for terminated employees instantly from a central dashboard, regardless of where the physical door is located.
                    </p>
                  </div>

                  {/* The Future is Mobile: Digital Credentials */}
                  <div id="mobile-credentials" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Future is Mobile: Digital Credentials
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      As smartphones become ubiquitous, they are replacing the wallet—and now, the keyring.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We offer Mobile Access Solutions that turn a user's smartphone into their credential. Using Bluetooth Low Energy (BLE) or NFC, employees can unlock doors simply by approaching them with their phone. This eliminates the cost of printing plastic cards and provides a higher level of encryption than standard RFID.
                    </p>
                  </div>
                </>
              )}

              {/* Blog 10 Content Sections */}
              {isBlog10 && (
                <>
                  {/* The Myth of the "Wireless" Enterprise */}
                  <div id="wireless-myth" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Myth of the "Wireless" Enterprise
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We live in a wireless world, but "wireless" is a misnomer. Wi-Fi 6 and 5G access points are merely the edge of the network; they require a robust, high-speed wired backhaul to function.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      As enterprises deploy bandwidth-hungry applications—from 4K video conferencing to real-time IoT analytics—the strain on the physical infrastructure increases exponentially. A legacy CAT5e infrastructure installed ten years ago cannot support the gigabit speeds required today.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We specialize in designing future-proof structured cabling systems. By deploying CAT6 and CAT7 standards, we ensure that your internal highways are wide enough to handle the traffic of tomorrow, not just today.
                    </p>
                  </div>

                  {/* Copper vs. Glass: Engineering for Speed and Distance */}
                  <div id="copper-vs-fiber" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Copper vs. Glass: Engineering for Speed and Distance
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Choosing the right medium is an engineering decision, not a procurement one.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Copper (CAT6/CAT7)
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Ideal for short-range, high-speed connectivity within the office floor. We utilize shielded twisted pair (STP) cabling to minimize electromagnetic interference (EMI), ensuring data integrity in electrically noisy environments like manufacturing plants.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Optical Fibre Backbone
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      For connecting data centers, vertical risers in high-rises, or sprawling campuses, copper is insufficient. We implement Optical Fibre backbones that transmit data at the speed of light, virtually eliminating latency and signal loss over long distances.
                    </p>
                  </div>

                  {/* The Art of the Rack: Organization is Operational Excellence */}
                  <div id="rack-organization" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Art of the Rack: Organization is Operational Excellence
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      A messy server rack is a ticking time bomb. "Spaghetti cabling"—where patch cords are tangled and unlabeled—restricts airflow, causes equipment overheating, and turns minor maintenance tasks into major downtime events.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      At Nexobots, we treat Rack Integration and Dressing as a precise discipline.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Thermal Management
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Proper cable management ensures that cool air can reach active components (switches/servers) and hot air can exhaust efficiently, extending hardware lifespan.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Rapid Troubleshooting
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      When a port fails, time is money. Our systems feature End-to-End Labeling and Network Mapping, allowing on-site engineers to identify, trace, and resolve specific link issues in minutes rather than hours.
                    </p>
                  </div>

                  {/* Certification: The Difference Between "Connected" and "Compliant" */}
                  <div id="certification" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Certification: The Difference Between "Connected" and "Compliant"
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Pluging a cable in and seeing a link light is not enough. "Connectivity" implies a connection; "Certification" implies performance.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We do not simply install cables; we certify them. Using industry-standard Fluke testers, we validate every node for signal-to-noise ratio, crosstalk, and attenuation.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Cable Certification & Documentation
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      You receive a detailed test report for every single drop in your facility. This documentation is your guarantee that the physical layer meets global ISO/TIA standards and is capable of supporting the promised bandwidth.
                    </p>
                  </div>
                </>
              )}

              {/* Blog 11 Content Sections */}
              {isBlog11 && (
                <>
                  {/* The Economics of Reliability: Understanding Total Cost of Ownership (TCO) */}
                  <div id="tco" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Economics of Reliability: Understanding Total Cost of Ownership (TCO)
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      To understand the value of an Annual Maintenance Contract (AMC), one must first look beyond the sticker price of the hardware. The Total Cost of Ownership (TCO) of an IT asset includes not just its acquisition cost, but the cost of operating, maintaining, and eventually retiring it.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In a "Run-to-Fail" model, the hidden costs are substantial:
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Cost of Downtime
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      When a core switch fails without a support contract in place, the cost isn't just the replacement hardware. It is the cost of employees unable to access the ERP system and the reputational damage of service unavailability.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Emergency Procurement Premiums
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Sourcing a critical component during an outage often places the enterprise at the mercy of expedited shipping fees.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Operational Friction
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Internal IT teams are forced to pivot to low-level firefighting, troubleshooting hardware failures instead of optimizing business logic.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      A structured AMC eliminates these variables. By regularizing maintenance costs into a fixed annual agreement, enterprises gain predictable maintenance costs. This financial predictability allows for better budget forecasting and frees up capital for strategic innovation rather than emergency remediation.
                    </p>
                  </div>

                  {/* Beyond the Warranty: The Enterprise AMC Advantage */}
                  <div id="amc-advantage" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Beyond the Warranty: The Enterprise AMC Advantage
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      A frequent question raised by CFOs is, "Why do we need an AMC if the equipment is under warranty?"
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      This reveals a fundamental misunderstanding of what a standard Original Equipment Manufacturer (OEM) warranty provides versus what an enterprise needs. A standard warranty often does not guarantee the speed of recovery required for mission-critical systems.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots' AMC plans are designed for SLA-Driven Reliability. We do not sell insurance; we sell availability.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      On-Site Troubleshooting
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We do not ask you to ship your infrastructure to us. Our model includes on-call troubleshooting and emergency support where certified engineers deploy to your facility to diagnose and resolve issues.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Spare Parts Management
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Global supply chains are volatile. Under our AMC, we manage the inventory of critical spare parts and component replacements as per the defined Service Level Agreement (SLA). We act as your local warehouse, ensuring that a failure today is resolved today.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Multi-Vendor Coverage
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      A typical data center is a mix of brands. Nexobots provides a single point of accountability with Certified Multi-Vendor Expertise, streamlining support across your entire ecosystem.
                    </p>
                  </div>

                  {/* The Science of Lifecycle Management: From Discovery to Disposal */}
                  <div id="lifecycle-management" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Science of Lifecycle Management: From Discovery to Disposal
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Effective maintenance is impossible without accurate data. You cannot maintain what you do not know you have. In complex, multi-site organizations, "Ghost Assets"—equipment that is on the books but missing, broken, or idling—can bleed the IT budget silently.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Our IT Asset Lifecycle Management service offers end-to-end visibility and control, covering the asset's journey from procurement to disposal. This involves four critical phases:
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      1. Asset Discovery and Tagging
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The lifecycle begins with visibility. We conduct comprehensive asset discovery and tagging exercises to create a definitive register of your hardware. This digital inventory is the source of truth, detailing the make, model, serial number, location, and configuration of every device.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      2. Preventive Maintenance and Optimization
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      This is the core differentiator of the Nexobots approach. We do not wait for the red light to blink. Our AMC includes preventive maintenance and scheduled inspections.
                    </p>
                    <h4
                      className="mb-2 mt-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Physical Health
                    </h4>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We physically clean operational technology and verify environmental conditions.
                    </p>
                    <h4
                      className="mb-2 mt-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Digital Health
                    </h4>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Hardware operates on software. We conduct regular firmware and software patch updates. Keeping BIOS, switch OS, and firewall firmware up to date is critical not just for performance, but for security.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      3. Inventory and License Management
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Managing the "soft" side of hardware is equally complex. We handle inventory and license management alongside warranty tracking. We alert you proactively when a device is approaching End-of-Support (EOS), allowing you to plan refresh cycles strategically rather than being caught off guard by obsolescence.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      4. Secure Decommissioning
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Every asset eventually reaches the end of its utility. We manage compliance-ready asset documentation to ensure that when hardware is retired, it is done so securely and efficiently.
                    </p>
                  </div>

                  {/* The "Managed Services" Layer: 24/7 Vigilance */}
                  <div id="managed-services-layer" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The "Managed Services" Layer: 24/7 Vigilance
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      While AMC focuses on the physical health of the hardware, Managed IT Services focuses on the operational performance of the system. For enterprises requiring the highest tier of availability, Nexobots combines AMC with Managed Services to deliver a holistic "Run" strategy.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      This integration activates our 24/7 Network Operations Center (NOC).
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Real-Time Monitoring
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      While the AMC engineer fixes the broken part, the NOC team monitors the vital signs of the network 24/7.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Predictive Analytics
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      By analyzing trends, we can predict failures before they occur.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Patch, Backup & Configuration Management
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Beyond fixing hardware, we manage the daily operations—ensuring backups are successful and configurations are standardized.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      This combination of on-site physical support (AMC) and remote digital oversight (Managed Services) creates an "Always-on infrastructure" that allows your business to operate without interruption.
                    </p>
                  </div>

                  {/* The Logistics of Reliability: Solving the Geography Problem */}
                  <div id="geography-problem" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Logistics of Reliability: Solving the Geography Problem
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      India is a vast geography. For a retail chain with stores in Tier-2 cities, or a logistics company with warehousing hubs in remote industrial zones, finding reliable, certified technical support locally is a significant hurdle. Centralized IT teams often struggle to coordinate repairs with local vendors who may lack the necessary certifications.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots leverages a Pan-India Field & Remote Support capability that is unique in its scale. With a presence in 180+ cities, we offer a unified standard of service nationwide.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Consistent SLAs
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The response time we promise for your corporate headquarters is the same response time we strive for in your regional branch.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Centralized Coordination
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      You do not need to maintain a directory of 50 different local vendors. You have one point of contact for consistent service delivery across multi-branch organizations.
                    </p>
                  </div>
                </>
              )}

              {/* Blog 12 Content Sections */}
              {isBlog12 && (
                <>
                  {/* The Diagnostic Phase: You Cannot Fix What You Do Not See */}
                  <div id="diagnostic-phase" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Diagnostic Phase: You Cannot Fix What You Do Not See
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The first step in escaping accidental architecture is a ruthless assessment of the current state. Many organizations operate with "tribal knowledge"—where the understanding of the network topology lives in the heads of a few engineers rather than in documentation.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Our consulting engagement begins with a deep-dive IT Assessment & Gap Analysis. We deploy tools and expertise to map every node, link, and workflow in your environment.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Bottleneck Identification
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We identify where data is stalling—whether it is an overloaded core switch or a misconfigured storage array.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Security Posture Review
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We analyze your defense depth, identifying compliance gaps and vulnerabilities in your existing setup.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Resource Utilization
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We determine if you are over-provisioned (wasting money) or under-provisioned (risking outages), setting the stage for TCO optimization.
                    </p>
                  </div>

                  {/* The Strategic Blueprint: Technology Roadmap Development */}
                  <div id="strategic-blueprint" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Strategic Blueprint: Technology Roadmap Development
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Once the diagnosis is complete, we move to prescription. Technology should not be adopted for its own sake; it must align with business goals.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We work with your leadership team to co-create a Technology Roadmap. This is not a shopping list; it is a phased strategic plan. It answers critical questions:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li className="font-['Manrope'] text-[#3B3C4A] mb-2" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>
                        "If we want to double our branch count in 3 years, what network backbone do we need today?"
                      </li>
                      <li className="font-['Manrope'] text-[#3B3C4A] mb-4" style={{ fontSize: "20px", fontWeight: 500, lineHeight: "1.6" }}>
                        "How do we migrate to the cloud without disrupting our legacy ERP?"
                      </li>
                    </ul>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      This roadmap serves as the bridge between design and deployment, ensuring that every dollar spent today contributes to the long-term vision of a future-ready IT environment.
                    </p>
                  </div>

                  {/* The Power of Agnosticism: The Vendor-Neutral Advantage */}
                  <div id="vendor-neutral" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      The Power of Agnosticism: The Vendor-Neutral Advantage
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In the world of System Integration, bias is a liability. Many providers act as proxies for specific manufacturers, pushing a specific solution regardless of fit.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots takes a Vendor-Agnostic Approach. Because we possess Certified Multi-Vendor Expertise across Cisco, Fortinet, Palo Alto, Aruba, and others, we are free to recommend the best technology for the job.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Best-of-Breed Integration
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We might recommend a firewall from one vendor, a core switch from another, and Wi-Fi from a third because that specific combination delivers the highest performance for your specific use case.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Interoperability
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Our value lies in making these diverse technologies work together. We specialize in multi-vendor hardware & software integration, ensuring seamless communication across your entire stack.
                    </p>
                  </div>

                  {/* System Integration: The Invisible Glue */}
                  <div id="system-integration" className="mb-8">
                    <h2
                      className="mb-4 font-['Manrope'] text-[#181A2A]"
                      style={{

                        fontSize: "24px",
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      System Integration: The Invisible Glue
                    </h2>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The true test of an IT environment is not how powerful the individual components are, but how well they function as a unified ecosystem.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Our System Integration Services focus on the "handshakes" between systems.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Hybrid Integration
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We seamlessly connect on-premise data centers with cloud resources, creating a unified hybrid environment.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Interconnectivity
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We handle the complex routing, switching, and API integrations that allow your CRM to talk to your telephony system, or your biometric scanners to sync with your HRMS.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      Performance Validation
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We do not just turn it on and leave. We conduct end-to-end testing and performance validation to prove that the integrated system meets the design performance metrics.
                    </p>
                  </div>
                </>
              )}

              {/* Capture Memories Section - Default */}
              {!isBlog1 && !isBlog2 && !isBlog3 && !isBlog4 && !isBlog5 && !isBlog6 && !isBlog7 && !isBlog8 && !isBlog9 && !isBlog10 && !isBlog11 && !isBlog12 && (
                <div className="mb-8">
                  <h2
                    className="mb-4 font-['Manrope'] text-[#181A2A]"
                    style={{

                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: "1.167",
                    }}
                  >
                    Capture Memories
                  </h2>
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Finally, don't forget to capture memories of your journey. Whether it's through
                    photographs, journaling, or souvenirs, preserving the moments and experiences
                    of your travels can bring joy and nostalgia for years to come. However, it's also
                    essential to be present in the moment and not let technology distract you from
                    the beauty of your surroundings.
                  </p>
                </div>
              )}

              {/* Conclusion Section */}
              <div className="mb-8">
                <h2
                  className="mb-4 font-['Manrope'] text-[#181A2A]"
                  style={{

                      fontSize: isBlog1 || isBlog2 || isBlog3 || isBlog4 || isBlog5 ? "24px" : "20px",
                    fontWeight: 600,
                    lineHeight: "1.4",
                  }}
                >
                  {isBlog1 ? "9. Conclusion and Next Steps" : isBlog2 ? "12. Conclusion" : isBlog3 ? "5. Conclusion" : isBlog4 ? "Conclusion: Building a Future-Ready Foundation" : isBlog5 ? "Conclusion: Future-Proofing IT Operations" : isBlog6 ? "Conclusion: Security as a Business Enabler" : isBlog7 ? "Conclusion: Empowering the Agile Enterprise" : isBlog8 ? "Conclusion: Securing the Future with Trusted Technology" : isBlog9 ? "Conclusion: Smart Access for the Smart Enterprise" : isBlog10 ? "Conclusion: Build Strong to Scale Fast" : isBlog11 ? "Conclusion: Reliability is a Strategic Choice" : isBlog12 ? "Conclusion: From Chaos to Cohesion" : "Conclusion:"}
                </h2>
                {isBlog1 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Structured cabling is not merely a construction element; it is the long-term foundation of your entire network. When designed and implemented correctly, it supports multiple generations of network technologies, reduces downtime and operational effort, simplifies expansion and renovation, and protects IT investments over many years.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots structured cabling solutions are built on global standards, proven field practices, and a clear focus on reliability and scalability for Indian enterprises.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Whether you are building a new office, plant, or data centre, upgrading legacy cabling to support higher speeds or PoE, or consolidating multiple sites and networks, Nexobots can design and implement a structured cabling system that is ready for both current requirements and future growth.
                    </p>
                  </>
                ) : isBlog2 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Structured Cabling Systems have evolved from a technical convenience to a strategic enabler of smart buildings, smart campuses, high-density data centres, and converged IT/OT environments. The benefits of standardisation, open architecture, and multi-application support are well documented in industry resources such as CommScope's fact file; the challenge is to turn those principles into a concrete, future-proof design for your specific context.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      By combining international standards with practical experience across Indian enterprises, Nexobots delivers SCS implementations that are technically sound, operationally manageable, and prepared for the next decade of connectivity demands. For organisations planning new facilities or rationalising legacy cabling, a serious, standards-driven structured cabling strategy is no longer optional—it is the foundation on which every other digital initiative will rest.
                    </p>
                  </>
                ) : isBlog3 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Structured cabling in India requires careful consideration of costs, standards, product selection, and procurement strategies. By understanding the cost models, choosing appropriate products, comparing data centre solutions, selecting the right cable types, and adhering to international standards, Indian businesses can build robust, future-ready network infrastructure.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots provides comprehensive structured cabling solutions tailored to the Indian market, combining global standards with local expertise to deliver reliable, scalable, and cost-effective infrastructure for enterprises across the country.
                    </p>
                  </>
                ) : isBlog4 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The deployment of SD-WAN is a pivotal moment in an enterprise's digital transformation journey. It promises agility, cost reduction, and superior application performance. However, realizing these benefits requires more than just purchasing hardware; it requires a strategic partnership grounded in technical expertise and operational discipline.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      At Nexobots Technologies, we view network infrastructure as a lifecycle—from the initial structured cabling and consulting to the 24/7 managed operations that keep the business running. By combining Certified Multi-Vendor Expertise with a robust Pan-India support framework, we help Indian enterprises navigate the complexity of network modernization.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Our mission is to engineer systems that are not just functional, but resilient and future-proof. For IT professionals seeking to build a network that drives business value, the path forward lies in data-driven design and uncompromising operational standards.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      About Nexobots Technologies
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots is a leading provider of IT Infrastructure, Security, and Managed Services, delivering end-to-end solutions for mid-to-large enterprises across India. With a presence in 180+ cities and a portfolio covering SD-WAN, Network Security, and Intelligent Surveillance, we are dedicated to empowering businesses with secure, scalable, and high-performance technology foundations.
                    </p>
                  </>
                ) : isBlog5 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The demands on IT infrastructure will only intensify. Cloud adoption, IoT integration, and remote workforces are increasing the complexity of the network. Sticking to a reactive support model in this environment is a strategy for burnout and instability.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      By partnering with a Managed Services Provider that prioritizes Predictive Intelligence and SLA-backed accountability, IT leaders can regain control. They can shift their internal focus from fighting fires to fueling innovation.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The future of IT operations is not about fixing what is broken; it is about engineering an environment that refuses to break.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      About Nexobots Technologies
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots is India's trusted authority for IT Network Infrastructure and Managed Services. We combine expert consulting, 24/7 NOC monitoring, and Pan-India field support to deliver performance-engineered IT ecosystems. Our mission is to transform data into uptime, ensuring your business never stops.
                    </p>
                  </>
                ) : isBlog6 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      For too long, security was viewed as a roadblock—the department of "No." In the modern Indian enterprise, security is a business enabler. A robust Zero Trust framework allows you to hire talent from anywhere, adopt any cloud service, and innovate faster than the competition, safe in the knowledge that your data—your organization's oxygen—is protected.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      At Nexobots Technologies, we do not just sell firewalls; we architect resilience. By combining certified expertise across multi-vendor security platforms with a deep understanding of network infrastructure, we help enterprises build a security posture that is as dynamic as their business.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The perimeter may be dead, but your security has never been more alive.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      About Nexobots Technologies
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots is a premier provider of IT Infrastructure and Security Solutions. With Certified Multi-Vendor Expertise and a Pan-India support network, we empower enterprises to build secure, high-performance, and compliant digital ecosystems.
                    </p>
                  </>
                ) : isBlog7 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The transition to a virtualized, hybrid infrastructure is the defining shift of this IT generation. It offers the promise of "Scaling Without Limits"—the ability to grow your infrastructure instantly in response to business demand.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      However, realizing this promise requires a partner with deep, cross-platform expertise. With certified architects across VMware, Hyper-V, AWS, and Azure, Nexobots Technologies bridges the gap between legacy hardware and the future of cloud computing.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We help you build a resilient digital foundation that allows your team to stop worrying about server maintenance and start focusing on innovation.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      About Nexobots Technologies
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots is a leading IT Infrastructure and Managed Services provider in India. From Cloud & Virtualization Support to Intelligent Surveillance and Network Security, we empower enterprises with data-driven, SLA-backed technology solutions. With a presence in 180+ cities, we are your trusted partner for digital transformation.
                    </p>
                  </>
                ) : isBlog8 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      As the threats facing Indian enterprises evolve—from physical intrusion to complex operational risks—the technology protecting them must stay ahead. Investing in intelligent surveillance is not an expense; it is insurance for your brand's continuity.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots Technologies stands at the forefront of this transformation. With Certified OEM Partnerships with global leaders like Hikvision, Bosch, and Axis, and a delivery capability spanning 180+ cities, we possess the technical depth and logistical reach to secure your enterprise.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      We help you move from "recording the past" to "securing the present."
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      About Nexobots Technologies
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots is a leading provider of CCTV & Intelligent Surveillance, Access Control, and IT Network Solutions. We combine AI-driven insights with enterprise-grade hardware to build scalable, proactive security ecosystems for clients across India.
                    </p>
                  </>
                ) : isBlog9 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Access control is no longer just about keeping intruders out; it is about letting the right people in efficiently. It is about creating a workplace that is secure, compliant, and data-driven.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Whether you are securing a corporate headquarter, a manufacturing plant, or a multi-tenant tech park, Nexobots Technologies delivers the expertise to integrate biometrics, cloud, and HR systems into a unified security ecosystem. With partnerships with global leaders like HID, Matrix, and ZKTeco, we ensure your facility is protected by the world's best technology.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      About Nexobots Technologies
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots is a leading provider of Biometric, Access Control, and IT Infrastructure solutions. We help enterprises streamline workforce management and harden physical security through integrated, intelligent technology.
                    </p>
                  </>
                ) : isBlog10 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      An enterprise cannot scale on a shaky foundation. As you plan your migration to the cloud or your deployment of AI analytics, look down at the physical layer. Is it ready?
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots Technologies brings end-to-end network expertise to the table. From the physical trenching of fiber to the configuration of the core switch, we manage every layer of your infrastructure. With a presence in 180+ cities, we ensure that your branch office in a Tier-2 city adheres to the same rigorous cabling standards as your corporate headquarters.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Build your network on a foundation of precision.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      About Nexobots Technologies
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots is India's leading IT Infrastructure and Managed Services partner. We specialize in Smart Network Infrastructure, Structured Cabling, and Active Component integration, helping enterprises build resilient, high-performance digital ecosystems.
                    </p>
                  </>
                ) : isBlog11 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      In the modern digital economy, your IT infrastructure is the engine of your business. If the engine stops, the business stops. Leaving the health of this engine to chance, or relying on reactive "break-fix" models, is a strategic error that exposes the organization to unnecessary risk and cost.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      By shifting to a proactive lifecycle management framework, you do more than just fix broken servers; you stabilize your operational costs, ensure compliance, and maximize the value extracted from every rupee spent on technology.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots Technologies is more than a service provider; we are the custodians of your infrastructure. We ensure that your technology investment delivers value not just on "Day 1," but for years to come.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Experience worry-free IT operations with Nexobots AMC & Managed Services.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      About Nexobots Technologies
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots is India's trusted partner for IT Asset Lifecycle Management, AMC, and Managed Services. We deliver SLA-driven maintenance, 24/7 monitoring, and Pan-India support to ensure your critical infrastructure remains always-on, secure, and efficient.
                    </p>
                  </>
                ) : isBlog12 ? (
                  <>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      "Accidental Architecture" is expensive, risky, and slow. Strategic Infrastructure is efficient, secure, and agile.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      The transition from one to the other requires more than just technicians; it requires partners. Nexobots Technologies combines Consulting-Driven Design with Implementation-Focused Execution. We help you clear the technical debt of the past and build a foundation for the future.
                    </p>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] mb-4"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Don't just build IT; architect it.
                    </p>
                    <h3
                      className="mb-3 mt-6 font-['Manrope'] text-[#181A2A]"
                      style={{
                        fontWeight: 700,
                        lineHeight: "1.6",
                      }}
                    >
                      About Nexobots Technologies
                    </h3>
                    <p
                      className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Nexobots is a premier IT Infrastructure Consulting and System Integration partner. We deliver strategic roadmaps, vendor-agnostic architecture, and seamless integration services to help enterprises build cohesive, high-performing digital ecosystems.
                    </p>
                  </>
                ) : (
                  <p
                    className="font-['Manrope'] text-[#3B3C4A] text-base sm:text-lg lg:text-xl"
                    style={{
                      fontWeight: 500,
                      lineHeight: "1.6",
                    }}
                  >
                    Traveling is an art form that requires a blend of planning, preparation, and
                    spontaneity. By following these tips and tricks, you can make the most of your
                    journey and create memories that last a lifetime. So pack your bags, embrace the
                    adventure, and enjoy the ride.
                  </p>
                )}
              </div>

              {/* Share this article Section - Exact from Figma */}
              <div
                className="mb-8 rounded-[22px] bg-[#F7F7F7] p-6 sm:p-8 lg:p-[35px]"
              >
                <h3
                  className="font-['Manrope'] text-black text-2xl sm:text-3xl lg:text-[32px] mb-4 sm:mb-5 lg:mb-[22px]"
                  style={{
                    fontWeight: 700,
                    lineHeight: "1.366",
                  }}
                >
                  Share this article
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-[9px]">
                  {/* Facebook Button - 41px × 37px */}
                  <button
                    className="flex h-[37px] w-[41px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5 0C4.701 0 0 4.701 0 10.5C0 15.399 3.656 19.476 8.438 19.938V12.969H5.906V10.5H8.438V8.344C8.438 5.813 9.93 4.406 12.213 4.406C13.309 4.406 14.453 4.625 14.453 4.625V6.688H13.192C11.95 6.688 11.563 7.4 11.563 8.125V10.5H14.344L13.893 12.969H11.563V19.938C16.345 19.476 20 15.399 20 10.5C20 4.701 15.299 0 10.5 0Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>

                  {/* Twitter Button - 39px × 37px */}
                  <button
                    className="flex h-[37px] w-[39px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5 4.5C15.1 4.7 14.6 4.8 14.1 4.9C14.6 4.6 15 4.1 15.2 3.5C14.7 3.8 14.1 4 13.5 4.1C13 3.6 12.3 3.3 11.5 3.3C9.9 3.3 8.6 4.6 8.6 6.2C8.6 6.4 8.6 6.6 8.7 6.8C6.1 6.7 3.8 5.4 2.2 3.4C2 3.7 1.9 4.1 1.9 4.5C1.9 5.3 2.3 6 2.9 6.4C2.5 6.4 2.2 6.3 1.9 6.1C1.9 7.4 2.7 8.5 3.8 8.8C3.6 8.8 3.4 8.9 3.2 8.9C3 8.9 2.8 8.9 2.6 8.8C3 9.9 4 10.7 5.2 10.7C4.2 11.4 3 11.8 1.7 11.8C1.5 11.8 1.3 11.8 1.1 11.8C2.3 12.5 3.7 13 5.2 13C11.5 13 15.1 9 15.1 5.5C15.1 5.4 15.1 5.3 15.1 5.2C15.6 4.9 16 4.5 16.4 4.1L15.5 4.5Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>

                  {/* LinkedIn Button - 40px × 37px */}
                  <button
                    className="flex h-[37px] w-[40px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="17.33"
                      height="17.33"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM5.5 15H3V7H5.5V15ZM4.25 5.8C3.45 5.8 2.8 5.15 2.8 4.35C2.8 3.55 3.45 2.9 4.25 2.9C5.05 2.9 5.7 3.55 5.7 4.35C5.7 5.15 5.05 5.8 4.25 5.8ZM15 15H12.5V11.2C12.5 10.3 12.5 9.2 11.4 9.2C10.3 9.2 10.1 10.1 10.1 11.1V15H7.6V7H10V8H10.05C10.3 7.4 11.1 6.8 12.2 6.8C14.4 6.8 15 8.1 15 10.5V15Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>

                  {/* Pinterest Button - 40px × 37px */}
                  <button
                    className="flex h-[37px] w-[40px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0C3.6 0 0 3.2 0 7.2C0 9.6 1.2 11.7 3 12.7C3.1 12.4 3.2 11.9 3.3 11.5C3.4 11.2 3.6 10.3 3.6 10.3C3.7 10.1 3.8 9.9 3.9 9.7C4.5 9.1 4.8 8.4 4.8 7.6C4.8 6.1 3.9 4.9 3.9 3.7C3.9 2.4 4.7 1.6 5.6 1.6C6.4 1.6 6.8 2.1 6.8 2.7C6.8 3.4 6.3 4.5 6 5.5C5.7 6.4 6.2 7.2 7.1 7.2C8.3 7.2 9.1 6 9.1 4.1C9.1 2.6 8.1 1.5 6.5 1.5C4.5 1.5 3.2 3 3.2 4.8C3.2 5.6 3.5 6.3 4 6.6C4 6.5 4.1 6.3 4.1 6.1C4.1 5.9 4 5.6 3.9 5.4C3.8 5.1 3.7 4.8 3.7 4.6C3.6 4.2 3.9 3.9 4.3 3.9C4.5 3.9 4.7 4 4.8 4.2C5 4.6 5.3 5.2 5.5 5.6C5.7 6 5.9 6.4 6.2 6.7C6.4 6.9 6.7 7.1 7 7.1C7.5 7.1 7.9 6.8 8.1 6.4C8.3 5.9 8.5 5.2 8.5 4.6C8.5 3.5 7.8 2.6 6.6 2.6C5.1 2.6 3.8 3.9 3.8 5.9C3.8 6.7 4.1 7.4 4.5 7.8C4.5 7.9 4.5 7.9 4.5 8C4.5 8.1 4.4 8.2 4.3 8.2C4.2 8.2 4.1 8.1 4 8C3.7 7.6 3.5 6.9 3.5 6.2C3.5 4.4 4.8 2.2 7.1 2.2C8.9 2.2 10.2 3.4 10.2 5.1C10.2 6.9 9.1 8.4 7.4 8.4C6.7 8.4 6.1 8.1 5.8 7.7C5.8 7.7 5.5 9.1 5.4 9.6C5.2 10.4 4.9 11.2 4.6 11.9C4.1 13.2 3.4 14.4 2.7 15.5C3.4 15.7 4.1 15.8 4.9 15.8C9.2 15.8 12.6 12.1 12.6 7.5C12.6 3.4 9.6 0 8 0Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>

                  {/* WhatsApp Button - 40px × 37px */}
                  <button
                    className="flex h-[37px] w-[40px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 0C4.3 0 0 3.1 0 7C0 8.4 0.5 9.7 1.4 10.7L0 14L3.5 12.7C4.4 13.3 5.4 13.6 6.5 13.6H6.6C11.8 13.6 16.1 10.5 16.1 6.5C16.1 2.5 11.8 0 9.5 0ZM6.5 12.1C5.7 12.1 4.9 11.9 4.2 11.4L3.9 11.2L1.7 11.9L2.4 9.8L2.2 9.5C1.6 8.7 1.3 7.7 1.3 6.6C1.3 3.7 4.2 1.4 6.6 1.4C9 1.4 11.9 3.7 11.9 6.6C11.9 9.5 9 12.1 6.5 12.1ZM9.8 7.8L7.8 7.9C7.6 7.9 7.4 7.8 7.3 7.6L6.3 6.1C6.1 5.8 6.2 5.4 6.5 5.2L7.5 4.4C7.8 4.2 8.2 4.3 8.4 4.6L9.1 5.6C9.3 5.9 9.6 6 9.9 5.9L11.8 5.5C12.1 5.4 12.4 5.6 12.5 5.9L12.9 7.2C13 7.5 12.8 7.8 12.5 7.9L9.8 7.8Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>

                  {/* Copy/Share Button - 40px × 37px */}
                  <button
                    className="flex h-[37px] w-[40px] items-center justify-center rounded-md border border-[#7D7D7D]"
                  >
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0H2C0.9 0 0 0.9 0 2V12H2V2H12V0ZM15 4H6C4.9 4 4 4.9 4 6V15C4 16.1 4.9 17 6 17H15C16.1 17 17 16.1 17 15V6C17 4.9 16.1 4 15 4ZM15 15H6V6H15V15Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar - Table of Contents and Explore More */}
            <aside
              className="w-full rounded-lg bg-[#F9F9F9] p-4 sm:p-6 lg:w-[400px] lg:flex-shrink-0 lg:sticky lg:top-[120px] lg:self-start"
            >
              <nav className="space-y-4">
                {isBlog1 ? (
                  <>
                    <Link
                      href="#introduction"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Introduction: Why Structured Cabling Still Matters
                      </span>
                    </Link>
                    <Link
                      href="#what-is"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        What Is Structured Cabling?
                      </span>
                    </Link>
                    <Link
                      href="#why-invest"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Why Businesses Invest in Structured Cabling
                      </span>
                    </Link>
                    <Link
                      href="#six-components"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Six Core Components
                      </span>
                    </Link>
                    <Link
                      href="#vs-point-to-point"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Structured Cabling vs Point-to-Point
                      </span>
                    </Link>
                    <Link
                      href="#best-practices"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">6</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Design and Implementation Best Practices
                      </span>
                    </Link>
                    <Link
                      href="#use-cases"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">7</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Typical Use Cases for Structured Cabling
                      </span>
                    </Link>
                    <Link
                      href="#how-nexobots"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">8</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        How Nexobots Delivers Projects
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">9</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion and Next Steps
                      </span>
                    </div>
                  </>
                ) : isBlog2 ? (
                  <>
                    <Link
                      href="#board-level"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Why SCS Deserve Board-Level Attention
                      </span>
                    </Link>
                    <Link
                      href="#what-is-scs"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        What a Structured Cabling System Is
                      </span>
                    </Link>
                    <Link
                      href="#how-evolved"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        How SCS Evolved
                      </span>
                    </Link>
                    <Link
                      href="#key-characteristics"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Key Characteristics of a Modern SCS
                      </span>
                    </Link>
                    <Link
                      href="#elements"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Elements of SCS
                      </span>
                    </Link>
                    <Link
                      href="#where-used"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">6</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Where SCS Is Used Today
                      </span>
                    </Link>
                    <Link
                      href="#power-wireless"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">7</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Beyond Data: Power and Wireless
                      </span>
                    </Link>
                    <Link
                      href="#technology"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">8</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Technology Under the Hood
                      </span>
                    </Link>
                    <Link
                      href="#designing-2025"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">9</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Designing SCS in 2025
                      </span>
                    </Link>
                    <Link
                      href="#cost-sustainability"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">10</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Cost, Energy, and Sustainability
                      </span>
                    </Link>
                    <Link
                      href="#nexobots-bar"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">11</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        How Nexobots Raises the Bar
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">12</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion
                      </span>
                    </div>
                  </>
                ) : isBlog3 ? (
                  <>
                    <Link
                      href="#cost-installation"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Cost of Installation for Small Business
                      </span>
                    </Link>
                    <Link
                      href="#choose-products"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        How to Choose Products for Office Networks
                      </span>
                    </Link>
                    <Link
                      href="#data-centre-comparison"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Comparison for Data Centres
                      </span>
                    </Link>
                    <Link
                      href="#cable-types"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Types of Cables and Their Advantages
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Standards Followed in India
                      </span>
                    </div>
                  </>
                ) : isBlog4 ? (
                  <>
                    <Link
                      href="#pre-deployment"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Pre-Deployment Audit and Assessment
                      </span>
                    </Link>
                    <Link
                      href="#hybrid-wan"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Architecting the Hybrid WAN Model
                      </span>
                    </Link>
                    <Link
                      href="#pan-india-deployment"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Pan-India Deployment Logistics
                      </span>
                    </Link>
                    <Link
                      href="#policy-management"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Policy Management and Optimization
                      </span>
                    </Link>
                    <Link
                      href="#operational-excellence"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Operational Excellence Framework
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">6</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion
                      </span>
                    </div>
                  </>
                ) : isBlog5 ? (
                  <>
                    <Link
                      href="#paradigm-shift"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        From Monitoring to Observability
                      </span>
                    </Link>
                    <Link
                      href="#next-gen-noc"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Architecture of a Next-Gen NOC
                      </span>
                    </Link>
                    <Link
                      href="#data-as-oxygen"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Data as Oxygen: Performance Optimization
                      </span>
                    </Link>
                    <Link
                      href="#sla-accountability"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Value of SLA-Driven Accountability
                      </span>
                    </Link>
                    <Link
                      href="#pan-india-support"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Strategic Advantage: Pan-India Support
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">6</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion
                      </span>
                    </div>
                  </>
                ) : isBlog6 ? (
                  <>
                    <Link
                      href="#core-philosophy"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Core Philosophy: Identity is the New Perimeter
                      </span>
                    </Link>
                    <Link
                      href="#ngfw"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Enforcer: Next-Generation Firewalls
                      </span>
                    </Link>
                    <Link
                      href="#sase-vpn"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Securing Hybrid Connectivity: SASE and VPN
                      </span>
                    </Link>
                    <Link
                      href="#biometric"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Human Element: Biometric Integration
                      </span>
                    </Link>
                    <Link
                      href="#managed-security"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Watchtower: Managed Security
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">6</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion
                      </span>
                    </div>
                  </>
                ) : isBlog7 ? (
                  <>
                    <Link
                      href="#hybrid-reality"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Hybrid Reality: Balancing Performance and Compliance
                      </span>
                    </Link>
                    <Link
                      href="#virtualization"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Virtualization: Squeezing Value from Silicon
                      </span>
                    </Link>
                    <Link
                      href="#draas"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Safety Net: Disaster Recovery as a Service
                      </span>
                    </Link>
                    <Link
                      href="#security-cloud"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Security-Driven Cloud Management
                      </span>
                    </Link>
                    <Link
                      href="#operational-excellence"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Operational Excellence: Managed Cloud Advantage
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">6</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion
                      </span>
                    </div>
                  </>
                ) : isBlog8 ? (
                  <>
                    <Link
                      href="#video-as-data"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Shift: Video as Data
                      </span>
                    </Link>
                    <Link
                      href="#specialized-eyes"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Specialized Eyes: ANPR and Thermal Imaging
                      </span>
                    </Link>
                    <Link
                      href="#vms"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Nervous System: Centralized Video Management
                      </span>
                    </Link>
                    <Link
                      href="#integration"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Integration Mandate: Unifying CCTV and Access Control
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion
                      </span>
                    </div>
                  </>
                ) : isBlog9 ? (
                  <>
                    <Link
                      href="#biometric-advantage"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The End of the Proxy: The Biometric Advantage
                      </span>
                    </Link>
                    <Link
                      href="#hrms-integration"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Efficiency Engine: Integrating Access with HRMS
                      </span>
                    </Link>
                    <Link
                      href="#centralized-control"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Centralized Control for the Distributed Enterprise
                      </span>
                    </Link>
                    <Link
                      href="#mobile-credentials"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Future is Mobile: Digital Credentials
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion
                      </span>
                    </div>
                  </>
                ) : isBlog10 ? (
                  <>
                    <Link
                      href="#wireless-myth"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Myth of the "Wireless" Enterprise
                      </span>
                    </Link>
                    <Link
                      href="#copper-vs-fiber"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Copper vs. Glass: Engineering for Speed and Distance
                      </span>
                    </Link>
                    <Link
                      href="#rack-organization"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Art of the Rack: Organization is Operational Excellence
                      </span>
                    </Link>
                    <Link
                      href="#certification"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Certification: The Difference Between "Connected" and "Compliant"
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion
                      </span>
                    </div>
                  </>
                ) : isBlog11 ? (
                  <>
                    <Link
                      href="#tco"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Economics of Reliability: Understanding TCO
                      </span>
                    </Link>
                    <Link
                      href="#amc-advantage"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Beyond the Warranty: The Enterprise AMC Advantage
                      </span>
                    </Link>
                    <Link
                      href="#lifecycle-management"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Science of Lifecycle Management: From Discovery to Disposal
                      </span>
                    </Link>
                    <Link
                      href="#managed-services-layer"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The "Managed Services" Layer: 24/7 Vigilance
                      </span>
                    </Link>
                    <Link
                      href="#geography-problem"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Logistics of Reliability: Solving the Geography Problem
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">6</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion
                      </span>
                    </div>
                  </>
                ) : isBlog12 ? (
                  <>
                    <Link
                      href="#diagnostic-phase"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Diagnostic Phase: You Cannot Fix What You Do Not See
                      </span>
                    </Link>
                    <Link
                      href="#strategic-blueprint"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Strategic Blueprint: Technology Roadmap Development
                      </span>
                    </Link>
                    <Link
                      href="#vendor-neutral"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        The Power of Agnosticism: The Vendor-Neutral Advantage
                      </span>
                    </Link>
                    <Link
                      href="#system-integration"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        System Integration: The Invisible Glue
                      </span>
                    </Link>
                    <div className="flex items-center gap-5">
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">5</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                        style={{
                          fontWeight: 600,
                          lineHeight: "1.4",
                        }}
                      >
                        Conclusion
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      href="#research"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Research Your Destination
                      </span>
                    </Link>
                    <Link
                      href="#itinerary"
                      className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                    >
                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <span
                        className="font-['Manrope'] text-base sm:text-lg lg:text-xl"
                        style={{
                          fontWeight: 700,
                          lineHeight: "1.6",
                        }}
                      >
                        Plan Your Itinerary
                      </span>
                    </Link>
                    <div className="space-y-6 pl-11">
                      <Link
                        href="#pack"
                        className="flex items-center gap-5 text-[rgba(225,30,36,0.48)] hover:text-[#E11E24]"
                      >
                        <div className="h-[6px] w-[6px] rounded-full bg-[#CED4DA]" />
                        <span
                          className="font-['Manrope'] text-sm sm:text-base lg:text-base"
                          style={{

                            fontSize: "16px",
                            fontWeight: 600,
                            lineHeight: "1.75",
                          }}
                        >
                          Pack Lightly and Smartly
                        </span>
                      </Link>
                      <Link
                        href="#safe"
                        className="flex items-center gap-5 text-[rgba(225,30,36,0.48)] hover:text-[#E11E24]"
                      >
                        <div className="h-[6px] w-[6px] rounded-full bg-[#CED4DA]" />
                        <span
                          className="font-['Manrope'] text-sm sm:text-base lg:text-base"
                          style={{

                            fontSize: "16px",
                            fontWeight: 600,
                            lineHeight: "1.75",
                          }}
                        >
                          Stay Safe and Healthy
                        </span>
                      </Link>
                    </div>
                    <div className="space-y-4 pl-11">
                      <Link
                        href="#culture"
                        className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                      >
                        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                          <span className="text-sm font-medium">3</span>
                        </div>
                        <span
                          className="font-['Manrope'] text-sm sm:text-base lg:text-base"
                          style={{
                            fontWeight: 600,
                            lineHeight: "1.4",
                          }}
                        >
                          Immerse Yourself in the Local Culture
                        </span>
                      </Link>
                    </div>
                    <div className="space-y-4 pl-11">
                      <Link
                        href="#memories"
                        className="flex items-center gap-5 text-[#181A2A] hover:text-[#E11E24]"
                      >
                        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                          <span className="text-sm font-medium">5</span>
                        </div>
                        <span
                          className="font-['Manrope'] text-sm sm:text-base lg:text-base"
                          style={{
                            fontWeight: 600,
                            lineHeight: "1.4",
                          }}
                        >
                          Capture Memories
                        </span>
                      </Link>
                      <div className="flex items-center gap-5">
                        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                          <span className="text-sm font-medium">6</span>
                        </div>
                        <span
                          className="font-['Manrope'] text-[#181A2A] text-sm sm:text-base lg:text-base"
                          style={{
                            fontWeight: 600,
                            lineHeight: "1.4",
                          }}
                        >
                          Conclusion
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </nav>

              {/* Explore More Section - Below Table of Contents */}
              <div className="mt-8">
                <h2
                  className="mb-6 font-['Manrope'] text-[#212121] text-xl sm:text-2xl lg:text-[24px]"
                  style={{
                    fontWeight: 600,
                    lineHeight: "1.333",
                  }}
                >
                  Explore More
                </h2>
                <div className="flex flex-col gap-4 rounded-[12px] border border-[#E8E8EA] bg-white p-4">
                  <div
                    className="relative overflow-hidden rounded-[12px] h-32 sm:h-36 lg:h-[150px]"
                  >
                    <Image
                      src="/blog-detail-related.png"
                      alt="Sustainable Travel Tips"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  </div>
                  <div className="flex-1">
                    <p
                      className="mb-2 font-['Manrope'] text-[#212121] text-xs sm:text-sm"
                      style={{
                        fontWeight: 400,
                        lineHeight: "1.143",
                      }}
                    >
                      Nov 29, 2024
                    </p>
                    <h3
                      className="mb-2 font-['Manrope'] text-[#212121] text-base sm:text-lg lg:text-xl"
                      style={{
                        fontWeight: 500,
                        lineHeight: "1.6",
                      }}
                    >
                      Sustainable Travel Tips: Reducing Your Carbon Footprint
                    </h3>
                    <p
                      className="mb-4 font-['Manrope'] text-[#212121] text-xs sm:text-sm"
                      style={{

                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "1.429",
                      }}
                    >
                      Clara Wilson
                    </p>
                    <Link
                      href="/blog/1"
                      className="inline-flex h-8 w-[111px] items-center justify-center gap-2 rounded-[75px] border border-white/30 bg-black"
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      <span className="text-white">Read More</span>
                      <Image
                        src="/find-out-more-arrow.svg"
                        alt=""
                        width={12}
                        height={12}
                        className="h-3 w-3"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

