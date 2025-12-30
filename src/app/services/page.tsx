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
		imagePosition: "left",
		href: "/service-1",
	},
	{
		id: 2,
		title: "System Integration",
		description:
			"Nexobots integrates multi-vendor technologies into unified, high-performing systems. From networking and surveillance to security and communication platforms, we deliver seamless interoperability and enhanced reliability.",
		image: "/service-consulting.png",
		offerings: [
			"Hardware & software integration",
			"Data & Communication Infrastructure Setup",
			"Network and security system integration",
		],
		ctaText: "Explore System Integration",
		imagePosition: "right",
		href: "/service-2",
	},
	{
		id: 3,
		title: "Annual Maintenance & Support (AMC)",
		description:
			"Keep your IT and security systems running at peak performance with our proactive AMC services. We offer preventive maintenance, real-time monitoring, and rapid support to minimize downtime and ensure business continuity.",
		image: "/service-amc.png",
		offerings: [
			"Preventive Maintenance & Health Checks",
			"Onsite Service & Spare Management",
			"24/7 Technical Assistance & Remote Support",
		],
		ctaText: "Learn About AMC & Support",
		imagePosition: "left",
		href: "/service-3",
	},
	{
		id: 4,
		title: "Cloud & Virtualization Support",
		description:
			"Empower your enterprise with secure, scalable, and efficient cloud operations. Our cloud and virtualization services enable easy migration, optimized workloads, and disaster recovery — ensuring flexibility and resilience.",
		image: "/service-4-intro-1-6536ac.png",
		offerings: [
			"Cloud setup, migration & optimization",
			"Virtualization planning & deployment",
			"Backup, recovery & disaster management",
		],
		ctaText: "Explore Cloud & Virtualization",
		imagePosition: "right",
		href: "/service-4",
	},
] as const;

export default function ServicesPage() {
	return (
		<div className="bg-[#F8F8F8] text-black overflow-x-hidden">
			<Navbar />

			{/* Hero Section */}
			<section className="bg-[#F8F8F8] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden">
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<Image
						src="/Hero-section.png"
						alt="Hero Background"
						fill
						className="object-cover object-center opacity-90"
						priority
					/>
				</div>
				<div className="mx-auto w-full max-w-[1440px] py-12 sm:py-16 lg:py-20 xl:py-24 relative z-10 min-h-[500px] lg:min-h-[600px]">
					{/* Title - Top Left */}
					<div className="max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] lg:mr-auto">
						<h1 className="font-['TASA_Orbiter'] text-black text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[54px] font-semibold leading-[1.2] tracking-[-0.02em]">
							End-to-End IT Services That Power Connectivity, Security, and Scalability
						</h1>
					</div>

					{/* Description + Button - Bottom Right */}
					<div className="mt-16 sm:mt-20 lg:mt-0 lg:absolute lg:bottom-20 xl:bottom-24 lg:right-0 xl:right-0 lg:max-w-[420px] xl:max-w-[480px]">
						<p className="font-['TASA_Orbiter'] text-black text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] font-medium leading-[1.6]">
							At Nexobots Technologies, we deliver a complete suite of IT services designed to help enterprises stay connected, secure, and future-ready.
						</p>
						<p className="font-['TASA_Orbiter'] text-black text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] font-medium leading-[1.6] mt-4">
							From infrastructure consulting and system integration to proactive maintenance and cloud management, our expert-driven services ensure that your technology investments deliver lasting value and performance.
						</p>

						<div className="mt-8 lg:mt-6">
							<Link
								href="/contact"
								className="inline-flex items-center gap-3 rounded-full bg-black px-7 py-3.5 transition-all hover:bg-gray-900"
							>
								<span className="font-['Manrope'] text-white text-[15px] font-medium">
									Talk to an Expert
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

			{/* Services Sections - Continuous white background on mobile */}
			<div className="bg-white lg:bg-[#F8F8F8]">
				<div className="mx-auto max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 sm:py-12 lg:py-16 xl:py-20">
					<div className="space-y-14 sm:space-y-16 lg:space-y-12 xl:space-y-14">
						{services.map((service) => (
							<section
								key={service.id}
								className="lg:bg-white lg:rounded-[24px] lg:p-8 xl:p-10 lg:shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
							>
								{/* Title - Left aligned */}
								<h2 className="font-['TASA_Orbiter'] text-black text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[42px] font-bold leading-[1.2] tracking-[0.01em] mb-6 sm:mb-8 lg:mb-8">
									{service.title}
								</h2>

								{/* Content - Stacked on mobile, side by side on desktop */}
								<div
									className={`flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-8 xl:gap-12 ${
										service.imagePosition === "right" ? "lg:flex-row-reverse" : ""
									}`}
								>
									{/* Image with Description Overlay */}
									<div className="lg:w-[48%] xl:w-[50%] flex-shrink-0">
										<div
											className="relative w-full rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden"
											style={{ aspectRatio: "4/3" }}
										>
											<Image
												src={service.image}
												alt={service.title}
												fill
												className="object-cover"
											/>
											<div
												className="absolute inset-0"
												style={{
													background:
														"linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.2) 100%)",
												}}
											/>
											{/* Description Text Over Image */}
											<div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7">
												<p className="font-['Manrope'] text-white text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[18px] font-bold leading-[1.5]">
													{service.description}
												</p>
											</div>
										</div>
									</div>

									{/* Offerings & Button */}
									<div className="flex-1 flex flex-col justify-between">
										{/* Our Offerings Heading */}
										<div>
											<h3 className="font-['Manrope'] text-black text-[22px] sm:text-[26px] lg:text-[30px] xl:text-[34px] font-bold mb-5 sm:mb-6 lg:mb-7">
												Our Offerings
											</h3>

											{/* Offerings List */}
											<div className="space-y-3 lg:space-y-4">
												{service.offerings.map((offering, i) => (
													<div
														key={i}
														className="flex items-center gap-4 lg:rounded-full lg:border lg:border-[#E8E8E8] lg:bg-white px-0 lg:px-5 py-2 lg:py-3.5 w-full"
													>
														{/* Star Icon */}
														<svg
															width="16"
															height="16"
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
														<span className="font-['Manrope'] text-black text-[14px] sm:text-[15px] lg:text-[15px] font-semibold">
															{offering}
														</span>
													</div>
												))}
											</div>
										</div>

										{/* Button - Left aligned */}
										<div className="mt-8 lg:mt-8">
											<Link
												href={service.href}
												className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 transition-all hover:bg-gray-900"
											>
												<span className="font-['Manrope'] text-white text-[13px] sm:text-[14px] font-medium">
													{service.ctaText}
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
					<h2 className="font-['TASA_Orbiter'] text-black text-[24px] sm:text-[30px] md:text-[38px] lg:text-[48px] xl:text-[56px] font-bold leading-[1.15]">
						Partner with Nexobots for Reliable, Scalable, and Secure IT Operations
					</h2>

					<div className="mt-10 sm:mt-12 lg:mt-16 max-w-[900px] mx-auto">
						<p className="font-['Manrope'] text-black text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-normal leading-[1.7]">
							Your business deserves an IT foundation that evolves with your goals.
						</p>
						<p className="font-['Manrope'] text-black text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-normal leading-[1.7] mt-4">
							At Nexobots Technologies, our expert team provides end-to-end services that simplify management, enhance performance, and protect your digital ecosystem.
						</p>
						<p className="mt-8 lg:mt-10 font-['Manrope'] text-black text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-bold leading-[1.7]">
							Let&apos;s work together to optimize your IT infrastructure and turn technology into your competitive advantage.
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


