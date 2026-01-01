"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import { useState, useEffect, useRef } from "react";

const benefitCards = [
	{
		title: "End-to-End Surveillance Expertise",
		description:
			"From camera installation to AI analytics, we deliver complete, integrated security ecosystems.",
	},
	{
		title: "Certified OEM Partnerships",
		description:
			"We work with global leaders such as Hikvision, CP Plus, Dahua, Axis, and Bosch for world-class hardware and software performance.",
	},
	{
		title: "Smart, Scalable Design",
		description:
			"Our modular architecture supports expansion across multiple sites and industries.",
	},
	{
		title: "AI-Driven Insights",
		description:
			"Real-time analytics transform raw video into intelligent, actionable data.",
	},
	{
		title: "Integrated Security Framework",
		description:
			"Seamless integration with access control, network, and data management systems",
	},
] as const;

const ipCctvServices = [
	"HD/4K IP camera installation & configuration",
	"NVR-based recording & centralized storage",
	"Multi-site live monitoring setup",
	"Secure remote access (web & mobile)",
	"Integration with existing network infrastructure",
] as const;

const anprServices = [
	"ANPR camera setup & calibration",
	"License plate recognition software integration",
	"Vehicle database & access control linkage",
	"Real-time alerts & analytics dashboard",
	"Custom reporting & event recording",
] as const;

const ptzServices = [
	"PTZ, thermal, and panoramic camera deployment",
	"Auto-tracking & motion detection configuration",
	"Low-light & infrared-enabled surveillance",
	"Weatherproof & vandal-resistant enclosures",
	"Integration with VMS and security platforms",
] as const;

const vmsServices = [
	"Multi-location VMS deployment",
	"User access control & hierarchy setup",
	"Storage optimization & redundancy planning",
	"Alarm & event management integration",
	"Scalability for large, multi-site operations",
] as const;

const remoteMonitoringServices = [
	"Command center design & implementation",
	"Multi-screen monitoring & live streaming setup",
	"Remote viewing integration (VPN & cloud)",
	"Alarm management & escalation workflows",
	"Operator training & system documentation",
] as const;

const aiAnalyticsServices = [
	"AI-based motion & intrusion detection",
	"Facial recognition & people counting",
	"Behavior & crowd analytics",
	"Object detection & perimeter violation alerts",
	"Data dashboards & automated reports",
] as const;

const faqs = [
	{
		question: 'What makes your CCTV solutions "intelligent"?',
		answer:
			"Our systems combine IP-based cameras with AI analytics for real-time detection, automated alerts, and actionable insights.",
	},
	{
		question: "What types of cameras do you provide?",
		answer:
			"We offer dome, bullet, PTZ, thermal, panoramic, and infrared cameras — tailored for indoor, outdoor, and industrial environments.",
	},
	{
		question: "How do you ensure project timelines and quality?",
		answer:
			"Every engagement is governed by detailed SLAs, project charters, and milestone-based delivery to maintain speed and reliability.",
	},
	{
		question: "Do you provide consulting for hybrid or multi-cloud integration?",
		answer:
			"Yes. We design and implement hybrid and multi-cloud strategies that ensure interoperability and security across platforms.",
	},
	{
		question: "Do you offer post-deployment support and maintenance?",
		answer:
			"Absolutely. Our AMC and Managed Services teams provide ongoing maintenance, monitoring, and performance optimization.",
	},
	{
		question: "Can you integrate CCTV with existing network and access control systems?",
		answer: "",
	},
] as const;

// Service List component with the same logic as SupportList from industries page
function ServiceList({
	items,
	activeIndex,
	scrollProgress,
}: {
	items: readonly string[];
	activeIndex: number;
	scrollProgress: number;
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
	const thumbHeight = 70;

	// Calculate thumb position based on scroll progress
	const maxThumbTravel = trackDimensions.height - thumbHeight;
	const thumbTop = trackDimensions.top + scrollProgress * maxThumbTravel;

	return (
		<div ref={containerRef} className="relative w-full">
			{/* background rail */}
			<div
				className="absolute left-0"
				style={{
					width: "9px",
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
					width: "8.6px",
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
					gap: "54px",
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
								fontSize: active ? "24px" : "20px",
								fontWeight: active ? 700 : 600,
								lineHeight: "1.08",
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

// Custom hook for service animation (same logic as industries page)
function useServiceAnimation(itemCount: number, animationOffset: number = 0) {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);

	const animationDuration = 12000; // 12 seconds for one complete cycle

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
				const remainingProgress =
					(linearProgress - slowdownThreshold) / (1 - slowdownThreshold);
				const easedRemaining = 1 - Math.pow(1 - remainingProgress, 3);
				progress =
					slowdownThreshold + easedRemaining * (1 - slowdownThreshold);
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

	return { scrollProgress, activeIndex };
}

export default function Solution1Page() {
	// Use the custom hook for each service section with staggered offsets
	const ipCctv = useServiceAnimation(ipCctvServices.length, 0);
	const anpr = useServiceAnimation(anprServices.length, 2000);
	const ptz = useServiceAnimation(ptzServices.length, 4000);
	const vms = useServiceAnimation(vmsServices.length, 6000);
	const remoteMonitoring = useServiceAnimation(remoteMonitoringServices.length, 8000);
	const aiAnalytics = useServiceAnimation(aiAnalyticsServices.length, 10000);

	return (
		<div className="bg-[#F8F8F8] text-black overflow-x-hidden">
			<Navbar />

			{/* Hero Section */}
			<section className="relative w-full overflow-hidden min-h-[380px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[750px] xl:min-h-[935px]">
				<div className="absolute inset-0">
					<Image
						src="/solution-1-hero-bg.png"
						alt="CCTV & Intelligent Surveillance Solutions Hero"
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
									maxWidth: "722px",
								}}
							>
								See Smarter. Secure Better. Act Faster.
							</h1>

							<p
								className="font-['TASA_Orbiter'] text-white mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
								style={{
									fontWeight: 600,
									lineHeight: "1.44",
									maxWidth: "812px",
								}}
							>
								Protect people, assets, and infrastructure with Nexobots'
								CCTV & Intelligent Surveillance Solutions.
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
						Security today goes beyond visibility — it's about intelligence,
						responsiveness, and control. Enterprises need surveillance systems
						that not only record but also analyze, alert, and integrate seamlessly
						with broader security frameworks.
					</p>

					<p
						className="font-['TASA_Orbiter'] text-[#727272] mx-auto text-center mb-6 sm:mb-8 lg:mb-[40px] text-sm sm:text-base md:text-lg lg:text-xl"
						style={{
							fontWeight: 600,
							lineHeight: "1.17",
							maxWidth: "918px",
						}}
					>
						Nexobots Technologies delivers CCTV & Intelligent Surveillance
						Solutions designed for modern enterprises, campuses, and industries.
						From IP-based cameras to AI-driven video analytics, we build scalable
						surveillance ecosystems that ensure proactive threat detection,
						real-time response, and complete situational awareness — across single
						or multi-site environments.
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
							<div className="relative rounded-[18px] overflow-hidden w-full aspect-[549/400] sm:aspect-[549/500] lg:aspect-[549/629]">
								<Image
									src="/solution-1-cta-1.png"
									alt="CCTV Surveillance"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 549px, 100vw"
									loading="lazy"
								/>
							</div>

							<div className="grid gap-4 sm:gap-6">
								<div className="relative rounded-[18px] overflow-hidden w-full aspect-[16/9] lg:aspect-[635/315]">
									<Image
										src="/solution-1-cta-2.png"
										alt="Intelligent Surveillance"
										fill
										className="object-cover"
										sizes="(min-width: 1024px) 635px, 100vw"
										loading="lazy"
									/>
								</div>
								<div className="relative rounded-[18px] overflow-hidden w-full aspect-[16/9] lg:aspect-[635/286]">
									<Image
										src="/solution-1-cta-3.png"
										alt="AI Analytics"
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

			{/* Why Intelligent Surveillance Matters */}
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
						Why Intelligent Surveillance Matters
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-[40px] mb-6 sm:mb-8 lg:mb-[40px]">
						<p
							className="font-['TASA_Orbiter'] text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
							style={{
								fontWeight: 500,
								lineHeight: "1.32",
							}}
						>
							In a dynamic threat landscape, conventional CCTV systems are no
							longer enough. Businesses need smart, connected, and data-driven
							surveillance networks that deliver actionable insights and enhance
							safety. Nexobots combines advanced imaging technology, AI analytics,
							and centralized monitoring to provide a complete surveillance
							solution.
						</p>
						<p
							className="font-['TASA_Orbiter'] text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
							style={{
								fontWeight: 500,
								lineHeight: "1.32",
							}}
						>
							With Nexobots, you gain a trusted technology partner that helps you
							plan, deploy, and manage virtualized environments and cloud
							infrastructures efficiently. From workload migration to backup and DR
							orchestration, we ensure your IT environment runs smarter, faster,
							and safer.
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

			{/* IP CCTV Surveillance Systems */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2
							className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]"
							style={{ fontWeight: 600, lineHeight: "1.22" }}
						>
							IP CCTV Surveillance Systems
						</h2>

						<p
							className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
							style={{ fontWeight: 600, lineHeight: "1.26" }}
						>
							Modernize your security infrastructure with high-definition,
							network-based surveillance. Our IP CCTV systems deliver
							crystal-clear imaging, remote accessibility, and intelligent video
							storage — tailored for enterprises of all sizes.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image
									src="/solution-1-ip-cctv-section.png"
									alt="IP CCTV Surveillance Systems"
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

								{/* Desktop: Animated progress using ServiceList */}
								<div className="hidden lg:block">
									<ServiceList
										items={ipCctvServices}
										activeIndex={ipCctv.activeIndex}
										scrollProgress={ipCctv.scrollProgress}
									/>
								</div>

								{/* Mobile list */}
								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{ipCctvServices.map((service, i) => (
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
								<h3
									className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
									style={{ fontWeight: 600, lineHeight: "1.08" }}
								>
									Outcome
								</h3>
								<p
									className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]"
									style={{ fontWeight: 600, lineHeight: "1.38" }}
								>
									Enhanced visibility, reliable recording, and simplified
									monitoring through a unified platform.
								</p>
							</div>
							<Link
								href="#contact"
								className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3"
							>
								<span
									className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]"
									style={{
										fontWeight: 600,
										lineHeight: "1.366",
										letterSpacing: "0.02em",
									}}
								>
									Let's Discuss Needs
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

			{/* ANPR Systems Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]">
							ANPR (Automatic Number Plate Recognition) Systems
						</h2>

						<p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
							Automate vehicle monitoring and access control with ANPR-enabled
							surveillance. Our systems accurately capture, recognize, and log
							number plates for traffic management, parking automation, and
							perimeter control.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image
									src="/solution-1-anpr-section.png"
									alt="ANPR Systems"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 640px, 100vw"
								/>
							</div>

							<div className="w-full">
								<h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
									Key Services
								</h3>

								{/* Desktop: Animated progress using ServiceList */}
								<div className="hidden lg:block">
									<ServiceList
										items={anprServices}
										activeIndex={anpr.activeIndex}
										scrollProgress={anpr.scrollProgress}
									/>
								</div>

								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{anprServices.map((service, i) => (
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
								<h3
									className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
									style={{ fontWeight: 600, lineHeight: "1.08" }}
								>
									Outcome
								</h3>
								<p
									className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]"
									style={{ fontWeight: 600, lineHeight: "1.27" }}
								>
									Improved perimeter security, efficient vehicle tracking, and
									seamless entry management.
								</p>
							</div>
							<Link
								href="#contact"
								className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3"
							>
								<span
									className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]"
									style={{
										fontWeight: 600,
										lineHeight: "1.366",
										letterSpacing: "0.02em",
									}}
								>
									Let's Discuss Needs
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

			{/* PTZ & Advanced Camera Solutions Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]">
							PTZ & Advanced Camera Solutions
						</h2>

						<p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
							Achieve 360° situational awareness with Pan-Tilt-Zoom (PTZ) and
							specialized camera systems. We deploy advanced imaging technologies
							designed for high-risk and large-scale environments.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image
									src="/solution-1-ptz-section.png"
									alt="PTZ & Advanced Camera Solutions"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 640px, 100vw"
								/>
							</div>

							<div className="w-full">
								<h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
									Key Services
								</h3>

								{/* Desktop: Animated progress using ServiceList */}
								<div className="hidden lg:block">
									<ServiceList
										items={ptzServices}
										activeIndex={ptz.activeIndex}
										scrollProgress={ptz.scrollProgress}
									/>
								</div>

								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{ptzServices.map((service, i) => (
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
								<h3
									className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
									style={{ fontWeight: 600, lineHeight: "1.08" }}
								>
									Outcome
								</h3>
								<p
									className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]"
									style={{ fontWeight: 600, lineHeight: "1.27" }}
								>
									Extended coverage, intelligent tracking, and superior clarity
									in every condition
								</p>
							</div>
							<Link
								href="#contact"
								className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3"
							>
								<span
									className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]"
									style={{
										fontWeight: 600,
										lineHeight: "1.366",
										letterSpacing: "0.02em",
									}}
								>
									Let's Discuss Needs
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

			{/* Centralized Video Management Systems (VMS) Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]">
							Centralized Video Management Systems (VMS)
						</h2>

						<p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
							Achieve 360° situational awareness with Pan-Tilt-Zoom (PTZ) and
							specialized camera systems. We deploy advanced imaging technologies
							designed for high-risk and large-scale environments.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image
									src="/solution-1-vms-section.png"
									alt="Centralized Video Management Systems"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 640px, 100vw"
								/>
							</div>

							<div className="w-full">
								<h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
									Key Services
								</h3>

								{/* Desktop: Animated progress using ServiceList */}
								<div className="hidden lg:block">
									<ServiceList
										items={vmsServices}
										activeIndex={vms.activeIndex}
										scrollProgress={vms.scrollProgress}
									/>
								</div>

								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{vmsServices.map((service, i) => (
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
								<h3
									className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
									style={{ fontWeight: 600, lineHeight: "1.08" }}
								>
									Outcome
								</h3>
								<p
									className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]"
									style={{ fontWeight: 600, lineHeight: "1.27" }}
								>
									Unified command, simplified management, and enhanced operational
									visibility.
								</p>
							</div>
							<Link
								href="#contact"
								className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3"
							>
								<span
									className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]"
									style={{
										fontWeight: 600,
										lineHeight: "1.366",
										letterSpacing: "0.02em",
									}}
								>
									Let's Discuss Needs
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

			{/* Remote Monitoring & Command Center Setup Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]">
							Remote Monitoring & Command Center Setup
						</h2>

						<p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
							Enable 24/7 surveillance operations with centralized command centers
							and remote viewing capabilities. We design and deploy intelligent
							monitoring rooms equipped with advanced visualization and alert
							systems.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image
									src="/solution-1-remote-monitoring-section.png"
									alt="Remote Monitoring & Command Center Setup"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 640px, 100vw"
								/>
							</div>

							<div className="w-full">
								<h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
									Key Services
								</h3>

								{/* Desktop: Animated progress using ServiceList */}
								<div className="hidden lg:block">
									<ServiceList
										items={remoteMonitoringServices}
										activeIndex={remoteMonitoring.activeIndex}
										scrollProgress={remoteMonitoring.scrollProgress}
									/>
								</div>

								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{remoteMonitoringServices.map((service, i) => (
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
								<h3
									className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
									style={{ fontWeight: 600, lineHeight: "1.08" }}
								>
									Outcome
								</h3>
								<p
									className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]"
									style={{ fontWeight: 600, lineHeight: "1.27" }}
								>
									Centralized control, real-time situational response, and
									enhanced decision-making.
								</p>
							</div>
							<Link
								href="#contact"
								className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3"
							>
								<span
									className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]"
									style={{
										fontWeight: 600,
										lineHeight: "1.366",
										letterSpacing: "0.02em",
									}}
								>
									Let's Discuss Needs
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

			{/* AI-Enabled Video Analytics Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 lg:px-[78px] py-4 sm:py-6 lg:py-[40px]">
				<div className="mx-auto w-full max-w-[1440px]">
					<div className="rounded-[21px] bg-[#F8F8F8] py-4 sm:py-6 lg:py-[40px]">
						<h2 className="font-['TASA_Orbiter'] text-black mb-3 sm:mb-4 lg:mb-[30px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]">
							AI-Enabled Video Analytics
						</h2>

						<p className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[30px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
							Turn your surveillance data into actionable intelligence with
							AI-powered analytics. Our intelligent video systems leverage computer
							vision and machine learning to detect anomalies, automate alerts, and
							generate insights.
						</p>

						<div className="mb-6 sm:mb-8 lg:mb-[30px] grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2">
							<div className="relative rounded-[13px] overflow-hidden w-full aspect-[4/3] lg:aspect-[640/457]">
								<Image
									src="/solution-1-ai-analytics-section.png"
									alt="AI-Enabled Video Analytics"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 640px, 100vw"
								/>
							</div>

							<div className="w-full">
								<h3 className="font-['TASA_Orbiter'] text-black mb-4 sm:mb-6 lg:mb-[40px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
									Key Services
								</h3>

								{/* Desktop: Animated progress using ServiceList */}
								<div className="hidden lg:block">
									<ServiceList
										items={aiAnalyticsServices}
										activeIndex={aiAnalytics.activeIndex}
										scrollProgress={aiAnalytics.scrollProgress}
									/>
								</div>

								<ul className="lg:hidden space-y-3 sm:space-y-4">
									{aiAnalyticsServices.map((service, i) => (
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
								<h3
									className="font-['TASA_Orbiter'] text-black mb-1.5 sm:mb-2 lg:mb-[10px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
									style={{ fontWeight: 600, lineHeight: "1.08" }}
								>
									Outcome
								</h3>
								<p
									className="font-['TASA_Orbiter'] text-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px]"
									style={{ fontWeight: 600, lineHeight: "1.27" }}
								>
									Proactive threat detection, improved operational intelligence,
									and smarter security decisions.
								</p>
							</div>
							<Link
								href="#contact"
								className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-black/90 px-4 py-2.5 sm:px-6 sm:py-3"
							>
								<span
									className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]"
									style={{
										fontWeight: 600,
										lineHeight: "1.366",
										letterSpacing: "0.02em",
									}}
								>
									Let's Discuss Needs
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

			{/* Why Choose Nexobots */}
			<section className="hidden lg:block bg-[#F8F8F8] py-8 sm:py-10 md:py-14 lg:py-[80px]">
				<div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
					<h2
						className="font-['TASA_Orbiter'] text-black text-center mb-6 sm:mb-8 lg:mb-[50px] text-xl sm:text-2xl md:text-3xl lg:text-[40px]"
						style={{ fontWeight: 600, lineHeight: "1.494" }}
					>
						Why Choose Nexobots for CCTV & Intelligent Surveillance Solutions
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
			<section className="hidden lg:block py-8 sm:py-10 md:py-14 lg:py-[80px] bg-[#F8F8F8]">
				<div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[78px]">
					<h2
						className="font-['TASA_Orbiter'] text-black text-center mb-6 sm:mb-8 lg:mb-[50px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[64px]"
						style={{ fontWeight: 600, lineHeight: "1.494" }}
					>
						FAQs – CCTV & Intelligent Surveillance Solutions
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
