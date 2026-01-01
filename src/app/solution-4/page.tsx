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
		title: "End-to-End Network Expertise",
		description:
			"From structured cabling to SD-WAN, we manage every layer of your network infrastructure.",
	},
	{
		title: "Certified OEM Partnerships",
		description:
			"We collaborate with leading brands — Cisco, D-Link, Fortinet, Aruba, and Palo Alto — for best-in-class networking solutions.",
	},
	{
		title: "Performance-Driven Design",
		description:
			"Every network is built for high availability, scalability, and zero downtime.",
	},
	{
		title: "Security at the Core",
		description:
			"Integrated firewall, VPN, and threat detection to safeguard your data and users.",
	},
	{
		title: "Nationwide Implementation Capability",
		description:
			"180+ city presence ensures consistent quality and rapid deployment across India.",
	},
] as const;

const firewallServices = [
	"Next-Generation Firewall (NGFW) deployment",
	"Intrusion detection & prevention (IDS/IPS)",
	"Web filtering & application control",
	"VPN & secure remote access",
	"Centralized policy management",
] as const;

const structuredCablingServices = [
	"Design & implementation of CAT6/CAT7 networks",
	"Optical fibre backbone installation & testing",
	"Rack dressing & patch panel management",
	"Cable certification & documentation",
	"End-to-end labeling & network mapping",
] as const;

const activeComponentsServices = [
	"Router configuration & deployment",
	"Layer 2 & Layer 3 switch setup",
	"Load balancing & VLAN segmentation",
	"QoS (Quality of Service) optimization",
	"Firmware updates & performance monitoring",
] as const;

const passiveComponentsServices = [
	"Core & access switch installation",
	"Patch panel & hub configuration",
	"Rack integration & cable management",
	"Power & redundancy planning",
	"Network topology documentation",
] as const;

const sdwanServices = [
	"SD-WAN design & deployment",
	"Centralized policy management",
	"Application-based traffic routing",
	"Encrypted multi-branch connectivity",
	"Real-time analytics & reporting",
] as const;

const p2pRfServices = [
	"P2P link design & deployment",
	"RF connectivity & antenna alignment",
	"Wireless bridge configuration",
	"Bandwidth testing & optimization",
	"Network redundancy planning",
] as const;

const faqs = [
	{
		question: "Do you provide both LAN and WAN design and implementation?",
		answer:
			"Yes. We offer complete design, deployment, and optimization of LAN and WAN networks, including cabling, routing, switching, and connectivity.",
	},
	{
		question: "Can you integrate SD-WAN with our existing WAN setup?",
		answer:
			"Absolutely. We specialize in hybrid WAN models that combine MPLS, broadband, and LTE connectivity under SD-WAN control.",
	},
	{
		question: "How do you ensure network security across branches?",
		answer:
			"Our multi-layered security framework includes NGFWs, VPNs, intrusion prevention, and continuous monitoring.",
	},
	{
		question: "Do you support long-range wireless or RF connectivity?",
		answer:
			"Yes. We design and deploy secure point-to-point (P2P) and RF-based connections for remote sites and industrial campuses.",
	},
	{
		question: "Can these solutions scale with our growing business?",
		answer:
			"Definitely. All Nexobots network solutions are modular, standards-based, and easily scalable to support your future expansion.",
	},
	{
		question: "Do you handle ISP coordination and link redundancy?",
		answer:
			"Yes. We manage end-to-end ISP integration, bandwidth allocation, and redundancy configuration for uninterrupted connectivity.",
	},
	{
		question: "Which OEMs do you work with for network components?",
		answer:
			"We partner with leading OEMs including Cisco, D-Link, Fortinet, Aruba, and Palo Alto for routers, switches, firewalls, and other network infrastructure components.",
	},
] as const;

// Helper function to calculate service points based on number of items
const calculateServicePoints = (
	itemCount: number,
	paddingTop: number = 10,
	itemHeight: number = 30,
	spacing: number = 54
) => {
	const points = [];
	let currentTop = paddingTop;
	for (let i = 0; i < itemCount; i++) {
		points.push({ top: currentTop, height: itemHeight });
		currentTop += itemHeight + spacing;
	}
	return points;
};

export default function Solution4Page() {
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
	const firewallPoints = calculateServicePoints(firewallServices.length);
	const structuredCablingPoints = calculateServicePoints(
		structuredCablingServices.length
	);
	const activeComponentsPoints = calculateServicePoints(
		activeComponentsServices.length
	);
	const passiveComponentsPoints = calculateServicePoints(
		passiveComponentsServices.length
	);
	const sdwanPoints = calculateServicePoints(sdwanServices.length);
	const p2pRfPoints = calculateServicePoints(p2pRfServices.length);

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
			const linearProgress = (elapsed % animationDuration) / animationDuration;

			// Apply easing to slow down at the end (last 15% of animation)
			let progress = linearProgress;
			const slowdownThreshold = 0.85;
			if (linearProgress > slowdownThreshold) {
				const remainingProgress = (linearProgress - slowdownThreshold) / (1 - slowdownThreshold);
				const easedRemaining = 1 - Math.pow(1 - remainingProgress, 3);
				progress = slowdownThreshold + easedRemaining * (1 - slowdownThreshold);
			}

			const maxTop = totalHeight - redBarHeight;
			const currentTop = progress * maxTop;
			const barCenter = currentTop + redBarHeight / 2;
			const barBottom = currentTop + redBarHeight;
			const barTop = currentTop;

			let newActiveIndex = 0;
			let foundMatch = false;

			for (let i = 0; i < servicePoints.length; i++) {
				const pointTop = servicePoints[i].top;
				const pointBottom = servicePoints[i].top + servicePoints[i].height;
				const pointCenter = pointTop + servicePoints[i].height / 2;

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

	// Set up animations for all sections (heights: 370, 365, 358, 365, 365, 365)
	useEffect(
		() => createAnimation(setRedBarTop1, setActiveIndex1, firewallPoints, 370, 0),
		[]
	);
	useEffect(
		() =>
			createAnimation(
				setRedBarTop2,
				setActiveIndex2,
				structuredCablingPoints,
				365,
				800
			),
		[]
	);
	useEffect(
		() => createAnimation(setRedBarTop3, setActiveIndex3, activeComponentsPoints, 358, 1600),
		[]
	);
	useEffect(
		() => createAnimation(setRedBarTop4, setActiveIndex4, passiveComponentsPoints, 365, 2400),
		[]
	);
	useEffect(
		() => createAnimation(setRedBarTop5, setActiveIndex5, sdwanPoints, 365, 3200),
		[]
	);
	useEffect(
		() => createAnimation(setRedBarTop6, setActiveIndex6, p2pRfPoints, 365, 4000),
		[]
	);

	return (
		<div className="bg-[#F8F8F8] text-black overflow-x-hidden">
			<Navbar />

			{/* Hero Section */}
			<section className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[750px] xl:min-h-[935px]">
				<div className="absolute inset-0">
					<Image
						src="/solution-4-hero-bg.png"
						alt="Smart Network Infrastructure Solutions Hero"
						fill
						priority
						className="object-cover"
						sizes="100vw"
					/>
				</div>
				<div
					className="absolute inset-0"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.52)" }}
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
								Connect Intelligently. Communicate Seamlessly. Scale
								Confidently.
							</h1>

							<p
								className="font-['TASA_Orbiter'] text-white mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
								style={{
									fontWeight: 600,
									lineHeight: "1.44",
									maxWidth: "812px",
								}}
							>
								Build a secure, high-performance network backbone with
								Nexobots' Smart Network Infrastructure Solutions.
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
						In a hyper-connected business landscape, network reliability and
						speed define operational excellence. Yet, managing complex network
						architectures, multi-site connectivity, and evolving security needs
						can strain resources and limit scalability.
					</p>

					<p
						className="font-['TASA_Orbiter'] text-[#727272] mx-auto text-center mb-6 sm:mb-8 lg:mb-[40px] text-sm sm:text-base md:text-lg lg:text-xl"
						style={{
							fontWeight: 600,
							lineHeight: "1.17",
							maxWidth: "918px",
						}}
					>
						Nexobots Technologies delivers Smart Network Infrastructure
						Solutions that form the foundation of modern enterprises. From
						high-speed LAN deployments to secure WAN connectivity and SD-WAN
						optimization, we design and implement intelligent, scalable, and
						resilient network ecosystems tailored to your organization's
						performance and security goals.
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
							<div className="relative rounded-[18px] overflow-hidden w-full aspect-[539/400] sm:aspect-[539/500] lg:aspect-[539/622]">
								<Image
									src="/solution-4-cta-1.png"
									alt="Network Infrastructure"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 539px, 100vw"
									loading="lazy"
								/>
							</div>

							<div className="grid gap-4 sm:gap-6">
								<div className="relative rounded-[18px] overflow-hidden w-full aspect-[16/9] lg:aspect-[635/312]">
									<Image
										src="/solution-4-cta-2.png"
										alt="Network Security"
										fill
										className="object-cover"
										sizes="(min-width: 1024px) 635px, 100vw"
										loading="lazy"
									/>
								</div>
								<div className="relative rounded-[18px] overflow-hidden w-full aspect-[16/9] lg:aspect-[635/283]">
									<Image
										src="/solution-4-cta-3.png"
										alt="Network Performance"
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

			{/* Why Smart Network Infrastructure Matters */}
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
						Why Smart Network Infrastructure Matters
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-[40px] mb-6 sm:mb-8 lg:mb-[40px]">
						<p
							className="font-['TASA_Orbiter'] text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
							style={{
								fontWeight: 500,
								lineHeight: "1.32",
							}}
						>
							Your network is the lifeline of your digital enterprise. A
							well-architected network ensures seamless communication, secure
							data exchange, and uninterrupted collaboration across locations
							and devices. Nexobots enables businesses to stay connected and
							protected — integrating advanced networking technologies with
							enterprise-grade performance and security.
						</p>
						<p
							className="font-['TASA_Orbiter'] text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
							style={{
								fontWeight: 500,
								lineHeight: "1.32",
							}}
						>
							Our end-to-end expertise spans structured cabling, active and
							passive components, firewalls, WAN optimization, and ISP
							integration — ensuring your network remains fast, stable, and
							future-ready.
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

			{/* Network Security: Firewall Solutions */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2
							className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]"
							style={{ fontWeight: 600, lineHeight: "1.22" }}
						>
							Network Security: Firewall Solutions
						</h2>

						<p
							className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
							style={{ fontWeight: 600, lineHeight: "1.26" }}
						>
							Protect your organization's data and network assets with
							enterprise-grade firewall systems. We implement next-generation
							firewalls (NGFW) from leading OEMs like Fortinet, Palo Alto, and
							Cisco, ensuring deep packet inspection, intrusion prevention, and
							intelligent traffic control.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image
									src="/solution-4-firewall-section.png"
									alt="Network Security: Firewall Solutions"
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

								{/* Mobile: Simple list / Desktop: Animated progress */}
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
										{firewallServices.map((service, i) => (
											<p
												key={i}
												className="font-['TASA_Orbiter'] text-black"
												style={{
													fontSize: activeIndex1 === i ? "24px" : "20px",
													fontWeight: activeIndex1 === i ? 700 : 600,
													transition:
														"font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out",
													lineHeight: "1.08",
												}}
											>
												{service}
											</p>
										))}
									</div>
								</div>

								{/* Mobile list */}
								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{firewallServices.map((service, i) => (
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
									Enhanced security posture, compliance assurance, and real-time
									threat mitigation.
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

			{/* Structured Cabling Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2
							className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]"
							style={{ fontWeight: 600, lineHeight: "1.22" }}
						>
							Structured Cabling: CAT6, CAT7 & Optical Fibre
						</h2>

						<p
							className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
							style={{ fontWeight: 600, lineHeight: "1.26" }}
						>
							Establish a robust and scalable network foundation with structured
							cabling systems that deliver speed, performance, and reliability.
							Our installations adhere to global standards, ensuring clean,
							efficient, and future-proof infrastructure.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image
									src="/solution-4-structured-cabling-section.png"
									alt="Structured Cabling: CAT6, CAT7 & Optical Fibre"
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

								<div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
									<div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
									<div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop2}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
									<div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
										{structuredCablingServices.map((service, i) => (
											<p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex2 === i ? "24px" : "20px", fontWeight: activeIndex2 === i ? 700 : 600, transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out", lineHeight: "1.08" }}>{service}</p>
										))}
									</div>
								</div>

								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{structuredCablingServices.map((service, i) => (
										<li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
									))}
								</ul>
							</div>
						</div>

						<div className="w-full">
							<div className="mb-3 sm:mb-4 lg:mb-[20px]">
								<h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
								<p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>
									Improved network stability, reduced signal loss, and easier scalability for future expansion.
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

			{/* Active Components Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
							Active Components: Routers & Network Devices
						</h2>

						<p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
							Empower your network with enterprise-grade routing and switching equipment that ensures seamless connectivity and optimized traffic flow. We supply, configure, and manage active components from global OEMs for maximum reliability.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image src="/solution-4-active-components-section.png" alt="Active Components: Routers & Network Devices" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
							</div>

							<div className="w-full">
								<h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

								<div className="hidden lg:block relative w-full max-w-[719.5px]" style={{ height: "365px" }}>
									<div className="absolute left-0 top-0" style={{ width: "9px", height: "358px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
									<div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop3}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
									<div className="space-y-[47px]" style={{ paddingLeft: "52.5px", paddingTop: "11px" }}>
										{activeComponentsServices.map((service, i) => (
											<p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex3 === i ? "24px" : "20px", fontWeight: activeIndex3 === i ? 700 : 600, transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out", lineHeight: "1.08" }}>{service}</p>
										))}
									</div>
								</div>

								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{activeComponentsServices.map((service, i) => (
										<li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
									))}
								</ul>
							</div>
						</div>

						<div className="w-full">
							<div className="mb-3 sm:mb-4 lg:mb-[20px]">
								<h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
								<p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>High-speed, intelligent routing for consistent data flow and superior network performance.</p>
							</div>
							<Link href="#contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3">
								<span className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]" style={{ fontWeight: 600, lineHeight: "1.366", letterSpacing: "0.02em" }}>Let's Discuss Needs</span>
								<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M1 1L4 4L1 7" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Passive Components Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
							Passive Components: Core & Access Switches, Smart Hubs
						</h2>

						<p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
							Create a solid network framework with reliable passive components that ensure consistent connectivity between users and systems. We integrate core and access switches with smart hubs for efficient data management and redundancy.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image src="/solution-4-passive-components-section.png" alt="Passive Components" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
							</div>

							<div className="w-full">
								<h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

								<div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
									<div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
									<div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop4}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
									<div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
										{passiveComponentsServices.map((service, i) => (
											<p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex4 === i ? "24px" : "20px", fontWeight: activeIndex4 === i ? 700 : 600, transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out", lineHeight: "1.08" }}>{service}</p>
										))}
									</div>
								</div>

								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{passiveComponentsServices.map((service, i) => (
										<li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
									))}
								</ul>
							</div>
						</div>

						<div className="w-full">
							<div className="mb-3 sm:mb-4 lg:mb-[20px]">
								<h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
								<p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>Uninterrupted internet access, optimized bandwidth usage, and improved reliability.</p>
							</div>
							<Link href="#contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3">
								<span className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]" style={{ fontWeight: 600, lineHeight: "1.366", letterSpacing: "0.02em" }}>Let's Discuss Needs</span>
								<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M1 1L4 4L1 7" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* SD-WAN Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
							SD-WAN (Software-Defined WAN)
						</h2>

						<p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
							Redefine wide-area networking with intelligent, software-driven connectivity. Our SD-WAN solutions deliver agility, security, and centralized control across distributed networks.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image src="/solution-4-sd-wan-section.png" alt="SD-WAN" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
							</div>

							<div className="w-full">
								<h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

								<div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
									<div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
									<div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop5}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
									<div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
										{sdwanServices.map((service, i) => (
											<p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex5 === i ? "24px" : "20px", fontWeight: activeIndex5 === i ? 700 : 600, transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out", lineHeight: "1.08" }}>{service}</p>
										))}
									</div>
								</div>

								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{sdwanServices.map((service, i) => (
										<li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
									))}
								</ul>
							</div>
						</div>

						<div className="w-full">
							<div className="mb-3 sm:mb-4 lg:mb-[20px]">
								<h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
								<p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>Lower WAN costs, improved agility, and simplified network management.</p>
							</div>
							<Link href="#contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3">
								<span className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]" style={{ fontWeight: 600, lineHeight: "1.366", letterSpacing: "0.02em" }}>Let's Discuss Needs</span>
								<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M1 1L4 4L1 7" stroke="#E11E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* P2P & RF Connectivity Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]" style={{ fontWeight: 600, lineHeight: "1.22" }}>
							Point-to-Point (P2P) & RF Connectivity
						</h2>

						<p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ fontWeight: 600, lineHeight: "1.26" }}>
							Enable seamless data transfer and real-time communication between sites through high-speed P2P and RF connectivity. We design and deploy long-range wireless and fiber-based point-to-point networks for enterprises, campuses, and industrial zones.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image src="/solution-4-p2p-rf-section.png" alt="P2P & RF Connectivity" fill className="object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
							</div>

							<div className="w-full">
								<h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Key Services</h3>

								<div className="hidden lg:block relative w-full max-w-[719px]" style={{ height: "365px" }}>
									<div className="absolute left-0 top-0" style={{ width: "9px", height: "365px", borderRadius: "55px", backgroundColor: "#D9D9D9" }} />
									<div className="absolute left-0" style={{ width: "8.6px", height: `${redBarHeight}px`, top: `${redBarTop6}px`, borderRadius: "55px", backgroundColor: "#E11E24" }} />
									<div className="space-y-[54px]" style={{ paddingLeft: "52px", paddingTop: "10px" }}>
										{p2pRfServices.map((service, i) => (
											<p key={i} className="font-['TASA_Orbiter'] text-black" style={{ fontSize: activeIndex6 === i ? "24px" : "20px", fontWeight: activeIndex6 === i ? 700 : 600, transition: "font-weight 0.2s ease-in-out, font-size 0.2s ease-in-out", lineHeight: "1.08" }}>{service}</p>
										))}
									</div>
								</div>

								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{p2pRfServices.map((service, i) => (
										<li key={i} className="font-['TASA_Orbiter'] text-black text-sm sm:text-base flex items-start gap-2" style={{ fontWeight: 600, lineHeight: "1.3" }}><span className="text-[#E11E24] mt-1">•</span>{service}</li>
									))}
								</ul>
							</div>
						</div>

						<div className="w-full">
							<div className="mb-3 sm:mb-4 lg:mb-[20px]">
								<h3 className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]" style={{ fontWeight: 600, lineHeight: "1.08" }}>Outcome</h3>
								<p className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]" style={{ fontWeight: 600, lineHeight: "1.27" }}>Reliable inter-site communication, low-latency data transfer, and extended network reach.</p>
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


			{/* FAQs */}
			<section className="hidden lg:block py-8 sm:py-10 md:py-14 lg:py-[80px] bg-[#F8F8F8]">
				<div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
					<h2
						className="font-['TASA_Orbiter'] text-black text-center mb-6 sm:mb-8 lg:mb-[50px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]"
						style={{ fontWeight: 600, lineHeight: "1.494" }}
					>
						FAQs – Smart Network Infrastructure Solutions
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


			<div id="contact">
				<ContactForm />
			</div>

			<Footer />
		</div>
	);
}