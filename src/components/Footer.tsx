import Image from "next/image";
import Link from "next/link";

const footerColumns = [
	{
		title: "Solutions",
		links: [
			{ label: "Smart Network", href: "/solution-4" },
			{ label: "Infrastructure CCTV Solutions", href: "/solution-1" },
			{ label: "Secure access & Biometrics", href: "/solution-3" },
			{ label: "End to end IT Services", href: "/solution-2" },
		],
	},
	{
		title: "Services",
		links: [
			{ label: "IT Infrastructure Consulting", href: "/service-1" },
			{ label: "System Integration", href: "/service-2" },
			{ label: "AMC Support", href: "/service-3" },
			{ label: "Cloud & Virtualization support", href: "/service-4" },
		],
	},
	{
		title: "Industries",
		links: [
			{ label: "Corporate & Enterprises", href: "/industries" },
			{ label: "Education & Research", href: "/industries" },
			{ label: "Healthcare & Pharma", href: "/industries" },
			{ label: "Retail & Hospitality", href: "/industries" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "About us", href: "/about" },
			{ label: "Blogs", href: "/blog" },
			{ label: "News & Media", href: "#" },
			{ label: "Contact Us", href: "/contact" },
		],
	},
] as const;

const socialLinks = [
	{ label: "Instagram", href: "#", Icon: InstagramIcon },
	{ label: "Facebook", href: "#", Icon: FacebookIcon },
	{ label: "LinkedIn", href: "#", Icon: LinkedInIcon },
] as const;

export function Footer() {
	return (
		<footer className="bg-black text-white px-6 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-[72px] lg:pt-[72px] lg:pb-[48px]">
			<div className="mx-auto w-full max-w-[1440px]">
				<div className="flex flex-col lg:flex-row lg:gap-[120px] mb-12 lg:mb-[72px]">
					{/* Logo & Social Section */}
					<div className="space-y-0 text-left max-w-[325px] mb-12 lg:mb-0">
						<Image
							src="/nexobots-logo-white.svg"
							alt="Nexobots"
							width={182}
							height={34}
							priority
							className="h-auto w-[140px] sm:w-[160px] lg:w-[182px] mb-4 lg:mb-[24px]"
						/>
						<div className="space-y-0 mb-4 lg:mb-[24px]">
							<h3 className="font-['TASA_Orbiter'] text-[14px] sm:text-base lg:text-[16px] font-semibold leading-[1.3] text-white mb-1 lg:mb-[8px]">
								nexobots Technologies LLP
							</h3>
							<p className="font-['Manrope'] text-[13px] lg:text-[14px] font-normal leading-[1.6] text-[#808080]">
								India's leading provider of structured cabling, networking,
								surveillance, biometric access, and managed IT services
							</p>
						</div>
						<p className="font-['TASA_Orbiter'] text-[14px] lg:text-[16px] font-medium leading-[1.3] text-white mb-3 lg:mb-[16px]">
							Connect with Us
						</p>
						<div className="flex gap-3 lg:gap-[10px]">
							{socialLinks.map(({ label, href, Icon }) => (
								<Link
									key={label}
									href={href}
									aria-label={label}
									className="flex h-[38px] w-[38px] lg:h-[40px] lg:w-[40px] items-center justify-center rounded-[6px] bg-[#1A1A1A] border border-[#333333] transition hover:bg-[#262626]"
								>
									<Icon />
								</Link>
							))}
						</div>
					</div>

					{/* Footer Columns - Single column on mobile, 4 columns on desktop */}
					<div className="flex flex-col gap-8 lg:flex-row lg:flex-1 lg:gap-[60px] xl:gap-[80px]">
						{footerColumns.map((column) => (
							<div key={column.title} className="space-y-0 lg:flex-1">
								<h4 className="font-['TASA_Orbiter'] text-[18px] sm:text-xl lg:text-[24px] xl:text-[32px] font-medium leading-[1.2] text-white mb-4 lg:mb-[20px]">
									{column.title}
								</h4>
								<ul className="space-y-0 flex flex-col gap-[10px] lg:gap-[16px]">
									{column.links.map((link) => (
										<li key={link.label} className="m-0">
											<Link
												href={link.href}
												className="font-['Manrope'] text-[14px] lg:text-[14px] font-normal leading-[1.5] text-[#808080] transition hover:text-white"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-[#262626] pt-6 lg:pt-[24px]">
					<div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
						<span className="font-['Manrope'] text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[1.5] text-[#808080] whitespace-nowrap">
							Copyright © {new Date().getFullYear()} Nexobots
						</span>
						<span className="text-[#808080] text-[10px] sm:text-[12px]">|</span>
						<span className="font-['Manrope'] text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[1.5] text-[#808080] whitespace-nowrap">
							All Rights Reserved
						</span>
						<span className="text-[#808080] text-[10px] sm:text-[12px]">|</span>
						<Link
							href="#"
							className="font-['Manrope'] text-[10px] sm:text-[12px] lg:text-[14px] font-normal leading-[1.5] text-[#808080] hover:text-white transition whitespace-nowrap"
						>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

function FacebookIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			className="h-5 w-5 text-[#9C9C9C]"
		>
			<path
				d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
				fill="currentColor"
			/>
		</svg>
	);
}

function InstagramIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			className="h-5 w-5 text-[#9C9C9C]"
		>
			<path
				d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
				fill="currentColor"
			/>
		</svg>
	);
}

function LinkedInIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			className="h-5 w-5 text-[#9C9C9C]"
		>
			<path
				d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default Footer;

