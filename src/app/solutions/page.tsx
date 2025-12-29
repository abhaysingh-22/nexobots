"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const solutions = [
	{
		id: "smart-network",
		title: "Smart Network Infrastructure",
		description: `Build the backbone of your enterprise network with high-performance copper and fiber-optic cabling systems.

Our structured cabling solutions ensure seamless connectivity, scalability, and compliance with global standards.`,
		image: "/solution-network-355263.png",
		features: [
			"Firewall Solutions",
			"Core & Access Switches",
			"Structured Cabling Solutions (Copper & Fiber)",
			"Wireless Networking (Wi-Fi 6, Access Points)",
			"Network Security & Optimization",
		],
		buttonText: "Explore Structured Cabling Solutions",
		imagePosition: "left",
	},
	{
		id: "cctv-surveillance",
		title: "CCTV & Intelligent Surveillance Solutions",
		description: `Secure your assets with intelligent, AI-enabled surveillance systems.

We provide IP cameras, NVRs, and remote monitoring solutions for 24/7 visibility, proactive threat detection, and operational safety.ANPR Solution, PTZ Cameras.`,
		image: "/solution-cctv-7702d8.png",
		features: [
			"IP CCTV Solutions",
			"Analog CCTV Solutions",
			"Video Management Systems (VMS)",
			"NVR/DVR Solutions",
			"Remote Monitoring & Control",
		],
		buttonText: "Explore Structured Cabling Solutions",
		imagePosition: "right",
	},
	{
		id: "biometric-access",
		title: "Secure Biometric & Access Control Solutions",
		description: `Enhance workplace security with advanced biometric and RFID-based access systems.

Our integrated attendance and access control solutions enable seamless authentication, compliance, and centralized management.`,
		image: "/solution-network-355263.png", // Placeholder
		features: [
			"Biometric Attendance Systems",
			"Access Control Solutions",
			"Smart Locks & Barriers",
			"Visitor Management Systems",
			"Multi-Factor Authentication Devices",
		],
		buttonText: "Explore Structured Cabling Solutions",
		imagePosition: "left",
	},
	{
		id: "it-infrastructure",
		title: "IT Infrastructure &  Managed Services",
		description: `Empower your business with resilient, scalable IT infrastructure and expert managed services.

From data centers and cloud solutions to backup and disaster recovery, we ensure continuity, performance, and growth.`,
		image: "/solution-itinfra-355263.png",
		features: [
			"IT Consulting & System Design",
			"Hardware Supply & Deployment",
			"IT AMC & Managed Services",
			"Cloud & Virtualization Solutions",
			"Data Backup & Recovery",
		],
		buttonText: "Explore Structured Cabling Solutions",
		imagePosition: "right",
	},
] as const;

export default function SolutionsPage() {
	return (
		<div className="bg-[#F8F8F8] text-black overflow-x-hidden">
			<Navbar />

			{/* Hero Section */}
			<section className="bg-[#F8F8F8] px-4 sm:px-6 relative overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/solution-hero-image.png"
						alt="Network pattern background"
						fill
						className="object-cover object-left opacity-80"
						priority
					/>
				</div>
				<div className="mx-auto w-full max-w-[1440px] py-10 sm:py-12 lg:py-16 relative z-10">
					{/* Replace absolute layout with responsive grid */}
					<div className="flex w-full  gap-10 flex-col ">
						{/* Title */}
						<div className="max-w-[784px]">
							<h1
								className="font-display text-black text-2xl sm:text-3xl md:text-4xl lg:text-[50px]"
								style={{
									fontFamily: "TASA Orbiter",
									fontWeight: 600,
									lineHeight: "1.32em",
									textAlign: "left",
									color: "#000000",
								}}
							>
								Comprehensive IT & Security Solutions for a Connected,
								Intelligent, and Secure Enterprise
							</h1>
						</div>

						{/* Description + Button */}
						<div className="md:self-end max-w-[646px] md:pr-20">
							<p
								className="font-display text-black whitespace-pre-line text-sm sm:text-base md:text-lg lg:text-[20px]"
								style={{
									fontFamily: "TASA Orbiter",
									fontWeight: 600,
									lineHeight: "1.32em",
									textAlign: "left",
									color: "#000000",
								}}
							>
								At Nexobots Technologies, we deliver end-to-end IT and security
								infrastructure solutions that empower organizations to operate
								smarter, safer, and more efficiently.

								From high-performance network cabling and intelligent surveillance
								systems to biometric access and managed IT services — our
								integrated solutions are engineered to enhance connectivity,
								strengthen security, and enable scalable digital growth.
							</p>

							<div className="mt-6">
								<Link
									href="/contact"
									className="inline-flex items-center justify-center gap-3 rounded-[75px] border border-white/30 bg-black transition-all hover:bg-gray-900 px-6 py-4 sm:px-8"
									style={{
										minWidth: "200px",
										maxWidth: "253px",
										height: "auto",
										minHeight: "50px",
									}}
								>
									<span
										className="font-['Manrope'] text-white whitespace-nowrap text-base sm:text-lg lg:text-[20px]"
										style={{
											fontWeight: 600,
											lineHeight: "1.366em",
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
										className="ml-2 flex-shrink-0"
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
				</div>
			</section>

			{/* Solutions Sections */}
			<div className="mx-auto max-w-[1440px] space-y-8 sm:space-y-12 px-4 sm:px-6 py-8 sm:py-12 md:px-12">
				{solutions.map((solution) => (
					<section
						key={solution.id}
						className="rounded-[21px] bg-white p-4 sm:p-6 md:p-8 lg:p-12"
					>
						{/* Title */}
						<h2
							className="font-['TASA_Orbiter'] text-black text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[48px] mb-6 sm:mb-8 text-center"
							style={{
								fontWeight: 700,
								lineHeight: "1.366",
								letterSpacing: "0.02em",
							}}
						>
							{solution.title}
						</h2>

						{/* Content Grid */}
						<div className="flex justify-center">
							<div
								className={`grid gap-6 lg:gap-8 w-full max-w-[1200px] ${
									solution.imagePosition === "right"
										? "lg:grid-cols-[1fr_1.3fr]"
										: "lg:grid-cols-[1.3fr_1fr]"
								}`}
							>
								{/* Image with Description Overlay */}
								<div
									className={`relative w-full ${
										solution.imagePosition === "right" ? "lg:order-2" : ""
									}`}
									style={{
										aspectRatio: "636/513",
										minHeight: "280px",
										maxHeight: "513px",
									}}
								>
									<Image
										src={solution.image}
										alt={solution.title}
										fill
										className="object-cover rounded-[20px]"
									/>
									<div
										className="absolute inset-0 rounded-[20px]"
										style={{
											background:
												solution.id === "cctv-surveillance"
													? "rgba(0, 0, 0, 0.65)"
													: solution.id === "it-infrastructure"
													? "rgba(0, 0, 0, 0.53)"
													: "rgba(0, 0, 0, 0.5)",
										}}
									/>
									{/* Description Text Over Image */}
									<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 rounded-b-[20px]">
										<p
											className="font-['Manrope'] text-white whitespace-normal text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
											style={{
												fontWeight: 700,
												lineHeight: "1.208",
												letterSpacing: "0.02em",
											}}
										>
											{solution.description.replace(/\n/g, " ")}
										</p>
									</div>
								</div>

								{/* Features & Button */}
								<div
									className={`flex flex-col items-start justify-between gap-6 ${
										solution.imagePosition === "right" ? "lg:order-1" : ""
									}`}
								>
									{/* Features List */}
									<div className="space-y-3 sm:space-y-4 lg:space-y-5 w-full flex flex-col items-start">
										{solution.features.map((feature, i) => (
											<div
												key={i}
												className="relative flex items-center rounded-[67px] border border-[#DADADA] bg-white pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 w-full max-w-[486px]"
												style={{
													minHeight: "50px",
												}}
											>
												{/* Star Icon */}
												<div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 flex-shrink-0 z-10">
													<svg
														width="17"
														height="18"
														viewBox="0 0 17 18"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="h-4 w-4 sm:h-[18px] sm:w-[17px]"
													>
														<path
															d="M8.5 0L10.4 6.5H17L11.3 10.5L13.2 17L8.5 13L3.8 17L5.7 10.5L0 6.5H6.6L8.5 0Z"
															fill="#E11E24"
														/>
													</svg>
												</div>
												<p
													className="font-['Manrope'] text-black text-left text-xs sm:text-sm lg:text-base"
													style={{
														fontWeight: 600,
														lineHeight: "1.5",
														letterSpacing: "0.02em",
														width: "100%",
													}}
												>
													{feature}
												</p>
											</div>
										))}
									</div>

									{/* Button */}
									<Link
										href={
											solution.id === "cctv-surveillance"
												? "/solution-1"
												: solution.id === "it-infrastructure"
												? "/solution-2"
												: solution.id === "biometric-access"
												? "/solution-3"
												: solution.id === "smart-network"
												? "/solution-4"
												: "#"
										}
										className="inline-flex items-center justify-start gap-2 sm:gap-3 rounded-[75px] border border-white/30 bg-black px-4 sm:px-6 py-3 transition-all hover:bg-gray-900 w-full sm:w-auto max-w-[348px]"
										style={{
											minHeight: "45px",
										}}
									>
										<span
											className="font-['Manrope'] text-white text-xs sm:text-sm lg:text-[15px]"
											style={{
												fontWeight: 600,
												lineHeight: "1.366",
												letterSpacing: "0.02em",
											}}
										>
											{solution.buttonText}
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
						</div>
					</section>
				))}
			</div>

			{/* Closing CTA */}
			<section
				className="flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-24 md:px-12"
				style={{
					backgroundColor: "#F8F8F8",
				}}
			>
				<div className="mx-auto w-full max-w-[1440px] text-center">
					<h2
						className="font-['TASA_Orbiter'] text-black text-2xl sm:text-3xl md:text-4xl lg:text-[52px] xl:text-[64px]"
						style={{
							fontWeight: 600,
							lineHeight: "1.494",
							maxWidth: "1148px",
							margin: "0 auto",
						}}
					>
						Let&apos;s Build Your Next-Gen IT Infrastructure
					</h2>

					<p
						className="mt-6 sm:mt-8 font-['Manrope'] text-black text-sm sm:text-base md:text-lg lg:text-[20px] px-2"
						style={{
							fontWeight: 400,
							lineHeight: "1.4",
							maxWidth: "900px",
							margin: "0 auto",
							marginTop: "24px",
						}}
					>
						At Nexobots Technologies, we don&apos;t just deliver solutions — we design
						connected, intelligent, and secure ecosystems that power business
						growth.
						<br />
						<br />
						Whether you&apos;re upgrading your network, enhancing security, or
						modernizing your IT environment, our experts are ready to help you
						build future-ready infrastructure tailored to your goals.
						<br />
						<br />
						<strong>Let&apos;s collaborate to transform your technology foundation into a
						strategic advantage.</strong>
					</p>

					<Link
						href="/contact"
						className="mx-auto mt-8 sm:mt-12 inline-flex items-center justify-center rounded-[75px] border border-white/30 bg-black transition-all hover:bg-gray-900 px-6 py-3"
						style={{
							minWidth: "155px",
							minHeight: "45px",
						}}
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
							className="ml-3"
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

