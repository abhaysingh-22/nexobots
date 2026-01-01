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
		description: `Build the backbone of your enterprise network with high-performance copper and fiber-optic cabling systems. Our structured cabling solutions ensure seamless connectivity, scalability, and compliance with global standards.`,
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
		href: "/solution-4",
	},
	{
		id: "cctv-surveillance",
		title: "CCTV & Intelligent Surveillance Solutions",
		description: `Secure your assets with intelligent, AI-enabled surveillance systems. We provide IP cameras, NVRs, and remote monitoring solutions for 24/7 visibility, proactive threat detection, and operational safety. ANPR Solution, PTZ Cameras.`,
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
		href: "/solution-1",
	},
	{
		id: "biometric-access",
		title: "Secure Biometric & Access Control Solutions",
		description: `Enhance workplace security with advanced biometric and RFID-based access systems. Our integrated attendance and access control solutions enable seamless authentication, compliance, and centralized management.`,
		image: "/solution-network-355263.png",
		features: [
			"Biometric Attendance Systems",
			"Access Control Solutions",
			"Smart Locks & Barriers",
			"Visitor Management Systems",
			"Multi-Factor Authentication Devices",
		],
		buttonText: "Explore Structured Cabling Solutions",
		imagePosition: "left",
		href: "/solution-3",
	},
	{
		id: "it-infrastructure",
		title: "IT Infrastructure & Managed Services",
		description: `Empower your business with resilient, scalable IT infrastructure and expert managed services. From data centers and cloud solutions to backup and disaster recovery, we ensure continuity, performance, and growth.`,
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
		href: "/solution-2",
	},
] as const;

export default function SolutionsPage() {
	return (
		<div className="bg-[#F8F8F8] text-black overflow-x-hidden">
			<Navbar />

			{/* Hero Section */}
			<section className="bg-[#F8F8F8] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/solution-hero-image.png"
						alt="Network pattern background"
						fill
						className="object-cover object-center opacity-90"
						priority
					/>
				</div>
				<div className="mx-auto w-full max-w-[1440px] py-12 sm:py-16 lg:py-20 xl:py-24 relative z-10 min-h-[500px] lg:min-h-[600px]">
					{/* Title - Top Left */}
					<div className="max-w-[500px] lg:max-w-[520px] xl:max-w-[550px]">
						<h1 className="font-['TASA_Orbiter'] text-black text-[24px] sm:text-[34px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-semibold leading-[1.15] tracking-[-0.02em]">
							Comprehensive IT & Security Solutions for a Connected, Intelligent, and Secure Enterprise
						</h1>
					</div>

					{/* Description + Button - Bottom Right */}
					<div className="mt-16 sm:mt-20 lg:mt-0 lg:absolute lg:bottom-20 xl:bottom-24 lg:right-16 xl:right-20 lg:max-w-[480px] xl:max-w-[500px]">
						<p className="font-['Manrope'] text-black  text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-normal leading-[1.7]">
							At Nexobots Technologies, we deliver end-to-end IT and security
							infrastructure solutions that empower,organizations to operate
							smarter, safer, and more efficiently.
						</p>
						<p className="font-['Manrope'] text-black text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[16px] font-normal leading-[1.7] mt-2">
							From high-performance network cabling and intelligent surveillance
							systems to biometric access and managed IT services — our
							integrated solutions are engineered to enhance connectivity,
							strengthen security, and enable scalable digital growth.
						</p>

						<div className="mt-8 lg:mt-6">
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 transition-all hover:bg-gray-900"
							>
								<span className="font-['Manrope'] text-white text-[15px] font-medium">
									Find Out More
								</span>
								<svg
									width="6"
									height="10"
									viewBox="0 0 6 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="flex-shrink-0"
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
				</div>
			</section>

			{/* Solutions Sections - Continuous white background */}
			<div className="bg-white lg:bg-[#F8F8F8]">
				<div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-20">
					<div className="space-y-14 sm:space-y-16 lg:space-y-12 xl:space-y-14">
						{solutions.map((solution) => (
							<section
								key={solution.id}
								className="lg:bg-white lg:rounded-[24px] lg:p-8 xl:p-10 lg:shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
							>
								{/* Title - Left aligned */}
								<h2 className="font-['TASA_Orbiter'] text-black text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] xl:text-[36px] font-bold leading-[1.2] tracking-[0.01em] mb-6 sm:mb-8 lg:mb-8">
									{solution.title}
								</h2>

								{/* Content - Stacked on mobile, side by side on desktop */}
								<div
									className={`flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-8 xl:gap-12 ${
										solution.imagePosition === "right" ? "lg:flex-row-reverse" : ""
									}`}
								>
									{/* Image with Description Overlay */}
									<div className="lg:w-[48%] xl:w-[45%] flex-shrink-0">
										<div
											className="relative w-full rounded-[12px] sm:rounded-[16px] lg:rounded-[16px] overflow-hidden"
											style={{ aspectRatio: "4/3" }}
										>
											<Image
												src={solution.image}
												alt={solution.title}
												fill
												className="object-cover"
											/>
											<div
												className="absolute inset-0"
												style={{
													background:
														"linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.2) 100%)",
												}}
											/>
											{/* Description Text Over Image */}
											<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-5">
												<p className="font-['Manrope'] text-white text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] font-medium leading-[1.6]">
													{solution.description}
												</p>
											</div>
										</div>
									</div>

									{/* Features & Button */}
									<div className="flex-1 flex flex-col justify-between">
										{/* Features List */}
										<div className="space-y-2.5 lg:space-y-3">
											{solution.features.map((feature, i) => (
												<div
													key={i}
													className="flex items-center gap-3 rounded-full border border-[#E8E8E8] bg-white px-4 sm:px-5 py-2.5 sm:py-3 w-full"
												>
													{/* Star Icon */}
													<svg
														width="14"
														height="14"
														viewBox="0 0 17 18"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="flex-shrink-0"
													>
														<path
															d="M8.5 0L10.4 6.5H17L11.3 10.5L13.2 17L8.5 13L3.8 17L5.7 10.5L0 6.5H6.6L8.5 0Z"
															fill="#E11E24"
														/>
													</svg>
													<span className="font-['Manrope'] text-black text-[13px] sm:text-[14px] lg:text-[14px] font-medium">
														{feature}
													</span>
												</div>
											))}
										</div>

										{/* Button - Left aligned on desktop */}
										<div className="mt-6 lg:mt-6">
											<Link
												href={solution.href}
												className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 transition-all hover:bg-gray-900"
											>
												<span className="font-['Manrope'] text-white text-[13px] sm:text-[14px] font-medium">
													{solution.buttonText}
												</span>
												<svg
													width="6"
													height="10"
													viewBox="0 0 6 10"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="flex-shrink-0"
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
								</div>
							</section>
						))}
					</div>
				</div>
			</div>

			{/* Closing CTA */}
			<section className="bg-[#F8F8F8] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-28 xl:py-36">
				<div className="mx-auto w-full max-w-[1440px] text-center">
					<h2 className="font-['TASA_Orbiter'] text-black text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px] xl:text-[56px] font-bold leading-[1.1] whitespace-normal lg:whitespace-nowrap">
						Let&apos;s Build Your Next-Gen IT Infrastructure
					</h2>

					<div className="mt-10 sm:mt-12 lg:mt-16 max-w-[1000px] mx-auto">
						<p className="font-['Manrope'] text-black text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] font-normal leading-[1.7]">
							At Nexobots Technologies, we don&apos;t just deliver solutions — we design connected, intelligent, and
						</p>
						<p className="font-['Manrope'] text-black text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] font-normal leading-[1.7]">
							secure ecosystems that power business growth.
						</p>
						<p className="font-['Manrope'] text-black text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] font-normal leading-[1.7] mt-1">
							Whether you&apos;re upgrading your network, enhancing security, or modernizing your IT environment,
						</p>
						<p className="font-['Manrope'] text-black text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] font-normal leading-[1.7]">
							our experts are ready to help you build future-ready infrastructure tailored to your goals.
						</p>
						
						<p className="mt-8 lg:mt-10 font-['Manrope'] text-black text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[20px] font-bold leading-[1.7]">
							Let&apos;s collaborate to transform your technology foundation into a strategic advantage.
						</p>
					</div>

					<Link
						href="/contact"
						className="mt-10 sm:mt-12 lg:mt-14 inline-flex items-center gap-3 rounded-full bg-black px-8 py-4 transition-all hover:bg-gray-900"
					>
						<span className="font-['Manrope'] text-white text-[15px] lg:text-[16px] font-medium">
							Get In Touch
						</span>
						<svg
							width="6"
							height="10"
							viewBox="0 0 6 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="flex-shrink-0"
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

			{/* Contact Form Section */}
			<ContactForm />

			{/* Footer */}
			<Footer />
		</div>
	);
}

