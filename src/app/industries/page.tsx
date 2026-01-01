"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Partners from "@/components/Partners";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

// Reorder to match the page order (screenshot shows Corporate first) + use the actual section images used below.
const industries = [
	{
		id: "corporate",
		title: "Corporate & Enterprise",
		subtitle:
			"Empowering enterprises with secure, scalable, and future-ready IT infrastructure.",
		image: "/industry-corporate-featured.png",
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
				description:
					"Robust, enterprise-grade networks with secure switching, firewalls, and optimized Wi-Fi.",
			},
			{
				icon: "monitor",
				title: "Intelligent Surveillance",
				description:
					"IP-based CCTV, video management systems, and remote monitoring for complete visibility.",
			},
			{
				icon: "finger",
				title: "Secure Access & Biometrics",
				description:
					"Biometric and RFID-based access solutions for employees and visitors.",
			},
			{
				icon: "archive",
				title: "End-to-End IT Services",
				description:
					"From planning to management, ensure business continuity and performance.",
			},
		],
	},
	{
		id: "education",
		title: "Education & Research",
		subtitle: "Creating connected, secure, and tech-driven learning environments.",
		image: "/industry-education-section.png",
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
				description:
					"High-speed wired and wireless networks across classrooms, labs, and hostels.",
			},
			{
				icon: "monitor",
				title: "Intelligent Surveillance",
				description:
					"Monitoring systems for exam halls, campuses, and student facilities.",
			},
			{
				icon: "finger",
				title: "Secure Access & Biometrics",
				description:
					"Attendance, hostel entry, and visitor management using smart authentication.",
			},
			{
				icon: "archive",
				title: "End-to-End IT Services",
				description:
					"Implementation and support for e-learning and research environments.",
			},
		],
	},
	{
		id: "healthcare",
		title: "Healthcare & Pharma",
		subtitle:
			"Securing sensitive data, optimizing patient care, and powering research innovation.",
		image: "/industry-healthcare-section.png",
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
				description:
					"Secure, compliant, and high-availability networks for hospitals, labs, and clinics",
			},
			{
				icon: "monitor",
				title: "Intelligent Surveillance",
				description:
					"Monitoring systems for ICUs, pharmacies, and critical care units.",
			},
			{
				icon: "finger",
				title: "Secure Access & Biometrics",
				description:
					"Controlled access for OTs, pharma stores, and restricted facilities.",
			},
			{
				icon: "archive",
				title: "End-to-End IT Services",
				description:
					"Infrastructure for EMR, telemedicine, and research data management.",
			},
		],
	},
	{
		id: "retail",
		title: "Retail & Hospitality",
		subtitle:
			"Driving customer experience, operational efficiency, and secure transactions.",
		image: "/industry-retail-section.png",
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
				description:
					"Reliable Wi-Fi and secure networks for POS, guests, and back-office systems.",
			},
			{
				icon: "monitor",
				title: "Intelligent Surveillance",
				description:
					"CCTV and remote monitoring for stores, hotels, and restaurants.",
			},
			{
				icon: "finger",
				title: "Secure Access & Biometrics",
				description:
					"Smart locks, staff access, and visitor management systems.",
			},
			{
				icon: "archive",
				title: "End-to-End IT Services",
				description:
					"IT management for POS, reservations, loyalty, and CRM systems.",
			},
		],
	},
	{
		id: "realestate",
		title: "Real Estate & Smart Infrastructure",
		subtitle:
			"Building intelligent, connected, and secure spaces for modern living and working.",
		image: "/industry-realestate-d966f0.png",
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
				description:
					"High-speed backbone networks for buildings, estates, and townships with seamless Wi-Fi and IoT connectivity.",
			},
			{
				icon: "monitor",
				title: "Intelligent Surveillance",
				description:
					"Integrated CCTV, ANPR, and centralized monitoring for property-wide security and safety compliance.",
			},
			{
				icon: "finger",
				title: "Secure Access & Biometrics",
				description:
					"Smart access systems for residents, visitors, and facility staff with mobile or RFID authentication.",
			},
			{
				icon: "archive",
				title: "End-to-End IT Services",
				description:
					"Infrastructure design, implementation, and maintenance for smart buildings and control centers.",
			},
		],
	},
] as const;

// Icon Components matching Figma
const WifiIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 9L2 10C5.5 6.5 10.5 6.5 14 10L15 9C10.5 4.5 3.5 4.5 1 9ZM5 13L6 14C7.5 12.5 9.5 12.5 11 14L12 13C9.5 10.5 4.5 10.5 5 13ZM9 17L12 20L15 17C13.5 15.5 10.5 15.5 9 17Z"
			fill="#E11E24"
		/>
	</svg>
);

const MonitorIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="2"
			y="3"
			width="20"
			height="14"
			rx="2"
			stroke="#E11E24"
			strokeWidth="2"
			fill="none"
		/>
		<path d="M8 21H16" stroke="#E11E24" strokeWidth="2" strokeLinecap="round" />
		<path d="M12 17V21" stroke="#E11E24" strokeWidth="2" strokeLinecap="round" />
	</svg>
);

const FingerIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M11.6761 22C17.0501 22 21.4065 17.5228 21.4065 12C21.4065 6.47715 17.0501 2 11.6761 2C6.30222 2 1.9458 6.47715 1.9458 12C1.9458 17.5228 6.30222 22 11.6761 22Z"
			stroke="#E11E24"
			strokeWidth="1.5"
			strokeMiterlimit="10"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M11.6763 14.8799C10.7908 14.8799 10.0708 14.1399 10.0708 13.2299V10.7599C10.0708 9.84989 10.7908 9.10986 11.6763 9.10986C12.5618 9.10986 13.2818 9.84989 13.2818 10.7599V13.2299C13.2818 14.1399 12.5618 14.8799 11.6763 14.8799Z"
			stroke="#E11E24"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
		<path
			d="M16.5219 13.4699C16.3273 16.0499 14.2256 18.0699 11.6762 18.0699C8.99063 18.0699 6.81104 15.8299 6.81104 13.0699V10.9299C6.81104 8.16993 8.99063 5.92993 11.6762 5.92993C14.1964 5.92993 16.2689 7.89992 16.5122 10.4199"
			stroke="#E11E24"
			strokeWidth="1.5"
			strokeLinecap="round"
		/>
	</svg>
);

const ArchiveIcon = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M8.75753 22H14.5957C19.4609 22 21.407 20 21.407 15V9C21.407 4 19.4609 2 14.5957 2H8.75753C3.89236 2 1.94629 4 1.94629 9V15C1.94629 20 3.89236 22 8.75753 22Z"
			stroke="#E11E24"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M17.5148 7.75V14.5C17.5148 13.4 16.6391 12.5 15.5687 12.5H7.78445C6.71411 12.5 5.83838 13.4 5.83838 14.5V7.75C5.83838 6.65 6.71411 5.75 7.78445 5.75H15.5687C16.6391 5.75 17.5148 6.65 17.5148 7.75Z"
			stroke="#E11E24"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M18.4877 15.75H17.5146"
			stroke="#E11E24"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M5.83827 15.75H4.86523"
			stroke="#E11E24"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M17.5148 14V11C17.5148 9.9 16.6391 9 15.5687 9H7.78445C6.71411 9 5.83838 9.9 5.83838 11V14"
			stroke="#E11E24"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M17.5148 14.5V15.75H14.1092C14.1092 17.13 13.0194 18.25 11.6766 18.25C10.3338 18.25 9.244 17.13 9.244 15.75H5.83838V14.5C5.83838 13.4 6.71411 12.5 7.78445 12.5H15.5687C16.6391 12.5 17.5148 13.4 17.5148 14.5Z"
			stroke="#E11E24"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
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

// Service points configuration - positions for 4 items
const SERVICE_CONFIG = {
	paddingTop: 0, // Start from top of the track
	itemHeight: 24, // Height of each text item (visual)
	spacing: 70, // space between items
};

// Calculate the exact positions of each service point
const calculateServicePoints = (itemCount: number) => {
	const { paddingTop, itemHeight, spacing } = SERVICE_CONFIG;
	const points = [];
	let currentTop = paddingTop;
	for (let i = 0; i < itemCount; i++) {
		points.push({ top: currentTop, height: itemHeight });
		currentTop += itemHeight + spacing;
	}
	return points;
};

function SupportList({
	items,
	activeIndex,
	scrollProgress,
}: {
	items: readonly string[];
	activeIndex: number;
	scrollProgress: number; // 0 to 1
}) {
	const containerRef = useRef<HTMLDivElement>(null);
	const itemRefs = useRef<(HTMLParagraphElement | null)[]>([]);
	const [trackDimensions, setTrackDimensions] = useState({ top: 0, height: 0 });

	// Measure actual bullet positions and calculate track dimensions
	useEffect(() => {
		const measureTrack = () => {
			if (!containerRef.current || itemRefs.current.length === 0) return;

			const containerRect = containerRef.current.getBoundingClientRect();
			const firstItem = itemRefs.current[0];
			const lastItem = itemRefs.current[itemRefs.current.length - 1];

			if (!firstItem || !lastItem) return;

			const firstRect = firstItem.getBoundingClientRect();
			const lastRect = lastItem.getBoundingClientRect();

			// Track top = top of first item relative to container
			const trackTop = firstRect.top - containerRect.top;
			// Track bottom = bottom of last item relative to container
			const trackBottom = lastRect.bottom - containerRect.top;
			// Track height = from top of first item to bottom of last item
			const trackHeight = trackBottom - trackTop;

			setTrackDimensions({ top: trackTop, height: trackHeight });
		};

		measureTrack();

		// Re-measure on resize
		const resizeObserver = new ResizeObserver(measureTrack);
		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => resizeObserver.disconnect();
	}, [items.length]);

	// Red thumb dimensions
	const thumbHeight = 50;

	// Calculate thumb position based on scroll progress
	// At progress 0: thumb top edge at track top
	// At progress 1: thumb bottom edge at track bottom
	const maxThumbTravel = trackDimensions.height - thumbHeight;
	const thumbTop = trackDimensions.top + scrollProgress * maxThumbTravel;

	return (
		<div ref={containerRef} className="relative w-full">
			{/* background rail - spans from first bullet to last bullet */}
			<div
				className="absolute left-0"
				style={{
					width: "8px",
					height: `${trackDimensions.height}px`,
					top: `${trackDimensions.top}px`,
					borderRadius: "55px",
					backgroundColor: "#D9D9D9",
				}}
			/>
			{/* active indicator - animated red bar */}
			<div
				className="absolute left-0"
				style={{
					width: "8px",
					height: `${thumbHeight}px`,
					top: `${thumbTop}px`,
					borderRadius: "55px",
					backgroundColor: "#E11E24",
				}}
				aria-hidden="true"
			/>
			{/* Items with proper spacing */}
			<div
				style={{
					paddingLeft: "52px",
					display: "flex",
					flexDirection: "column",
					gap: "70px",
				}}
			>
				{items.map((text, i) => {
					const active = i === activeIndex;
					return (
						<p
							key={i}
							ref={(el) => {
								itemRefs.current[i] = el;
							}}
							className="font-['TASA_Orbiter'] text-black"
							style={{
								fontSize: active ? "20px" : "16px",
								fontWeight: active ? 700 : 600,
								lineHeight: "1.3",
								maxWidth: "500px",
								// Instant transition - no delay
								transition: "none",
							}}
						>
							{text}
						</p>
					);
				})}
			</div>
		</div>
	);
}

function IndustrySection({
	industry,
	animationOffset = 0,
}: {
	industry: (typeof industries)[number];
	animationOffset?: number;
}) {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);

	const animationDuration = 12000; // 12 seconds for one complete cycle
	const itemCount = industry.services.length;

	useEffect(() => {
		let startTime: number | null = null;
		let animationFrameId: number;

		const animate = (currentTime: number) => {
			if (!startTime) startTime = currentTime - animationOffset;
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

			// Determine active index based on progress
			const segmentSize = 1 / itemCount;
			let newActiveIndex = Math.floor(progress / segmentSize);
			newActiveIndex = Math.min(newActiveIndex, itemCount - 1);

			setScrollProgress(progress);
			setActiveIndex(newActiveIndex);

			animationFrameId = requestAnimationFrame(animate);
		};

		animationFrameId = requestAnimationFrame(animate);

		return () => {
			if (animationFrameId) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	}, [animationOffset, itemCount, animationDuration]);

	return (
		<section className="bg-[#F8F8F8] py-10 sm:py-14 md:py-16 lg:py-20 xl:py-[100px] overflow-hidden">
			<div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[72px]">
				{/* Header */}
				<div className="mb-8 sm:mb-10 md:mb-14 lg:mb-16">
					<h2 className="font-['TASA_Orbiter'] text-black text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[64px] font-semibold leading-[1.15] sm:leading-[1.22] max-w-[1000px] mb-2 sm:mb-3">
						{industry.title}
					</h2>
					<p className="font-['TASA_Orbiter'] text-black text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-semibold leading-[1.3] sm:leading-[1.2] max-w-[980px] mb-3 sm:mb-4 lg:mb-5">
						{industry.subtitle}
					</p>
					<p className="font-['TASA_Orbiter'] text-black/80 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-medium leading-[1.5] sm:leading-[1.4] max-w-[980px]">
						{industry.what}
					</p>
				</div>

				{/* Layout: LEFT support + RIGHT image on desktop */}
				<div className="flex flex-col lg:flex-row lg:relative gap-6 sm:gap-8 lg:gap-10">
					{/* Image - comes first on mobile, positioned right on desktop */}
					<div className="order-1 lg:order-2 w-full lg:w-[640px] lg:flex-shrink-0">
						<div className="relative overflow-hidden rounded-[13px] w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[457px]">
							<Image
								src={industry.image}
								alt={industry.title}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 640px"
								priority={industry.id === "corporate"}
							/>
						</div>
					</div>

					{/* Support (left on desktop) */}
					<div className="order-2 lg:order-1 w-full lg:flex-1">
						<h3 className="font-['TASA_Orbiter'] text-black mb-5 sm:mb-6 lg:mb-[50px] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-semibold leading-[1.08]">
							How We Support You
						</h3>

						{/* Desktop: Animated progress bar */}
						<div className="hidden lg:block mb-6 sm:mb-8 lg:mb-10">
							<SupportList
								items={industry.services}
								activeIndex={activeIndex}
								scrollProgress={scrollProgress}
							/>
						</div>

						{/* Mobile/Tablet: Simple list without animation */}
						<div className="lg:hidden space-y-4 sm:space-y-5 mb-6 sm:mb-8">
							{industry.services.map((service, i) => (
								<div key={i} className="flex items-start gap-3">
									<div className="w-2 h-2 rounded-full bg-[#E11E24] mt-2 flex-shrink-0" />
									<p
										className="font-['TASA_Orbiter'] text-black text-base sm:text-lg"
										style={{
											fontWeight: 600,
											lineHeight: "1.4",
										}}
									>
										{service}
									</p>
								</div>
							))}
						</div>

						<Link
							href="#contact"
							className="inline-flex h-[42px] sm:h-[45px] items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 sm:px-6 w-full sm:w-auto"
						>
							<span className="font-['Manrope'] text-white whitespace-nowrap text-[12px] sm:text-[13px] md:text-[14px] font-semibold leading-[1.366] tracking-[0.02em]">
								{industry.cta}
							</span>
							<svg
								width="5"
								height="8"
								viewBox="0 0 5 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="ml-1 sm:ml-2 flex-shrink-0"
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

				{/* What We Deliver */}
				<h3 className="font-['TASA_Orbiter'] text-black text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-semibold leading-[1.15] mt-10 sm:mt-12 lg:mt-16 xl:mt-20 mb-4 sm:mb-5 lg:mb-6">
					What We Deliver
				</h3>

				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
					{industry.features.map((feature, i) => (
						<article
							key={i}
							className="flex flex-col rounded-[8px] sm:rounded-[9px] bg-white p-4 sm:p-5 lg:p-6 gap-3 sm:gap-4"
						>
							<div className="flex items-center justify-center rounded-[6px] w-[28px] h-[28px] sm:w-[31px] sm:h-[31px] bg-[#F8F8F8]">
								{getIconComponent(feature.icon)}
							</div>
							<h4 className="font-['TASA_Orbiter'] text-black text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] font-semibold leading-[1.2]">
								{feature.title}
							</h4>
							<p className="font-['TASA_Orbiter'] text-[#A4A4A4] text-[12px] sm:text-[13px] lg:text-[14px] font-medium leading-[1.35] sm:leading-[1.3]">
								{feature.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default function IndustriesPage() {
	return (
		<div className="bg-[#F8F8F8] text-black overflow-x-hidden">
			<Navbar />

			{/* Hero Section - Responsive */}
			<Link
				href="#contact"
				className="block relative h-[600px] sm:h-[550px] md:h-[650px] lg:h-[750px] xl:h-[804px] w-full overflow-hidden cursor-pointer"
			>
				<div className="absolute inset-0">
					<Image
						src="/industries-hero-bg.png"
						alt="Industries hero background"
						fill
						priority
						className="object-cover object-center sm:object-top"
						sizes="100vw"
					/>
				</div>
				{/* Gradient overlay - Black from top */}
				<div
					className="absolute inset-0"
					style={{
						background: "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 75%, transparent 100%)",
					}}
					aria-hidden="true"
				/>
				{/* Desktop blur overlay - hidden on mobile */}
				<div
					className="hidden lg:block absolute bg-black w-full h-[400px] left-0 -top-[157px]"
					style={{
						filter: "blur(150px)",
						opacity: 0.91,
					}}
					aria-hidden="true"
				/>
				{/* Content */}
				<div className="relative z-10 h-full flex flex-col justify-start pt-8 sm:pt-12 lg:pt-0 lg:justify-center">
					<div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 md:px-10 lg:px-[72px]">
						<h1 className="font-['TASA_Orbiter'] text-white text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] font-semibold leading-[1.25] sm:leading-[1.35] lg:leading-[1.494] max-w-[320px] sm:max-w-[500px] lg:max-w-[1027px] mb-6 sm:mb-8 lg:mb-[33px]">
							Empowering Every Industry with Smart, Secure, and Scalable Technology
						</h1>
						<div className="inline-flex h-[44px] sm:h-[52px] lg:h-[67px] items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/30 bg-black transition-all hover:bg-black/90 px-5 sm:px-6 lg:px-[29px]">
							<span className="font-['Manrope'] text-white whitespace-nowrap text-[14px] sm:text-[16px] lg:text-[20px] font-medium leading-[1.366] tracking-[0.02em]">
								Find Out More
							</span>
							<svg
								width="5"
								height="8"
								viewBox="0 0 5 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="ml-1"
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

			{/* Below Hero Section - Responsive */}
			<section className="flex items-center bg-[#F8F8F8] py-10 sm:py-14 md:py-16 lg:py-[71px]">
				<div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[72px]">
					<p className="font-['TASA_Orbiter'] text-left text-black text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold leading-[1.3] sm:leading-[1.318] max-w-full lg:max-w-[1236px]">
						From global enterprises to education, healthcare, and hospitality —
						Nexobots Technologies enables organizations to stay connected,
						protected, and future-ready through intelligent IT and security
						infrastructure.
					</p>
				</div>
			</section>

			{/* Industry sections with staggered animation offsets */}
			{industries.map((industry, index) => (
				<IndustrySection
					key={industry.id}
					industry={industry}
					animationOffset={index * 2400}
				/>
			))}

			{/* Our Partners Section */}
			<Partners />

			{/* Closing CTA Section - Hidden on mobile, visible on sm and up */}
			<section className="hidden sm:flex items-center justify-center bg-white min-h-[500px] sm:min-h-[600px] lg:min-h-[723px]">
				<div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[72px] py-12 sm:py-16 md:py-20 lg:py-[112px] text-center">
					<h2 className="font-['TASA_Orbiter'] text-black mx-auto mb-6 sm:mb-8 lg:mb-[37px] text-[28px] sm:text-[38px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.3] sm:leading-[1.4] lg:leading-[1.494] max-w-full lg:max-w-[1148px]">
						Partner with Nexobots to Transform Your Industry with Smarter IT
					</h2>
					<p className="font-['Manrope'] text-black mx-auto mb-6 sm:mb-8 lg:mb-[37px] text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[1.5] sm:leading-[1.4] max-w-full lg:max-w-[854px]">
						Every industry faces unique challenges — but the right technology
						turns those challenges into opportunities. At Nexobots Technologies,
						we combine innovation, integration, and intelligence to help
						organizations build connected, secure, and future-ready environments.
						<br />
						<br />
						<strong>
							Let&apos;s collaborate to design technology solutions that empower
							your business and industry to thrive in the digital era.
						</strong>
					</p>
					<Link
						href="#contact"
						className="mx-auto inline-flex h-[45px] items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-black/30 bg-black transition-all hover:bg-black/90 px-4 sm:px-[25px] w-full sm:w-auto sm:max-w-[155px]"
					>
						<span className="font-['Manrope'] text-white whitespace-nowrap text-[14px] sm:text-[15px] font-semibold leading-[1.366] tracking-[0.02em]">
							Get In Touch
						</span>
						<svg
							width="5"
							height="8"
							viewBox="0 0 5 8"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="ml-1 sm:ml-2 flex-shrink-0"
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
