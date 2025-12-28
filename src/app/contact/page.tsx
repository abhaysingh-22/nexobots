"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    };

    // Validate required fields
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // If no errors, submit form
    if (!newErrors.name && !newErrors.email && !newErrors.company && !newErrors.message) {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: "" });

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            message: formData.message,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setSubmitStatus({
            type: "success",
            message: "Form submitted successfully! We'll get back to you soon.",
          });
          // Reset form
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
          setErrors({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
        } else {
          setSubmitStatus({
            type: "error",
            message: result.message || "Something went wrong. Please try again.",
          });
        }
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message: "An error occurred. Please try again later.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative w-full overflow-hidden h-[150px] sm:h-[180px] md:h-[220px] lg:h-[247px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/contact-hero-bg.png"
            alt="Contact Hero Background"
            fill
            priority
            className="object-cover object-bottom"
            sizes="100vw"
          />
        </div>

        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        />

        {/* Red Line and Heading */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[82px]">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-9">
              {/* Red Line */}
              <div
                className="w-[3px] h-[50px] sm:h-[60px] lg:h-[81px] bg-[#E11E24] flex-shrink-0"
              />
              {/* Heading */}
              <h1
                className="font-['TASA_Orbiter'] text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
                style={{
                  fontWeight: 600,
                  lineHeight: "1.32",
                }}
              >
                Let&apos;s Connect
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Description Text */}
      <section className="bg-white px-4 sm:px-6 lg:px-[118px] py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-[1440px]">
          <p
            className="font-['Inter'] text-black text-lg sm:text-xl md:text-2xl lg:text-[30px]"
            style={{
              fontWeight: 600,
              lineHeight: "1.3",
              maxWidth: "1207px",
            }}
          >
            Please fill the form below and our team will reach out with the right
            solution for you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-[118px] py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-[1205px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
            {/* Name and Email Row */}
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:gap-[50px]">
              {/* Name Field */}
              <div className="flex flex-col flex-1 gap-2 sm:gap-3">
                <label
                  className="font-['Manrope'] text-[#5B5B5B] text-base sm:text-lg lg:text-xl"
                  style={{ fontWeight: 700, lineHeight: "1.5" }}
                >
                  Name
                </label>
                <div
                  className="flex items-center bg-[#FBFBFB] border border-[#E2E2E2] rounded-[15px] px-4 sm:px-5 h-[52px] sm:h-[58px] lg:h-[64px]"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    className="w-full bg-transparent text-black placeholder:text-[#4C4C4C] focus:outline-none font-['Manrope'] text-sm sm:text-base"
                    style={{ fontWeight: 500, lineHeight: "1.5" }}
                    aria-label="Name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-[#E11E24]">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col flex-1 gap-2 sm:gap-3">
                <label
                  className="font-['Manrope'] text-[#5B5B5B] text-base sm:text-lg lg:text-xl"
                  style={{ fontWeight: 700, lineHeight: "1.5" }}
                >
                  Email
                </label>
                <div
                  className="flex items-center bg-[#FBFBFB] border border-[#E2E2E2] rounded-[15px] px-4 sm:px-5 h-[52px] sm:h-[58px] lg:h-[64px]"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    className="w-full bg-transparent text-black placeholder:text-[#4C4C4C] focus:outline-none font-['Manrope'] text-sm sm:text-base"
                    style={{ fontWeight: 500, lineHeight: "1.5" }}
                    aria-label="Email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-[#E11E24]">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Company Name and Phone Number Row */}
            <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:gap-[50px]">
              {/* Company Name Field */}
              <div className="flex flex-col flex-1 gap-2 sm:gap-3">
                <label
                  className="font-['Manrope'] text-[#5B5B5B] text-base sm:text-lg lg:text-xl"
                  style={{ fontWeight: 700, lineHeight: "1.5" }}
                >
                  Company Name
                </label>
                <div
                  className="flex items-center bg-[#FBFBFB] border border-[#E2E2E2] rounded-[15px] px-4 sm:px-5 h-[52px] sm:h-[58px] lg:h-[64px]"
                >
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Company Name"
                    className="w-full bg-transparent text-black placeholder:text-[#4C4C4C] focus:outline-none font-['Manrope'] text-sm sm:text-base"
                    style={{ fontWeight: 500, lineHeight: "1.5" }}
                    aria-label="Company Name"
                    aria-required="true"
                    aria-invalid={!!errors.company}
                  />
                </div>
                {errors.company && (
                  <p className="text-sm text-[#E11E24]">{errors.company}</p>
                )}
              </div>

              {/* Phone Number Field with Country Code */}
              <div className="flex flex-col flex-1 gap-2 sm:gap-3">
                <label
                  className="font-['Manrope'] text-[#5B5B5B] text-base sm:text-lg lg:text-xl"
                  style={{ fontWeight: 700, lineHeight: "1.5" }}
                >
                  Phone Number
                </label>
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Country Code Selector */}
                  <div
                    className="flex items-center gap-1 bg-[#FBFBFB] border border-[#E2E2E2] rounded-[15px] px-2 sm:px-3 h-[52px] sm:h-[58px] lg:h-[64px] flex-shrink-0"
                  >
                    <Image
                      src="/contact-phone-flag.png"
                      alt="India Flag"
                      width={21}
                      height={21}
                      className="rounded w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <svg
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-1 sm:w-[10px] sm:h-[5px]"
                    >
                      <path
                        d="M0 0L5 5L10 0"
                        stroke="#4C4C4C"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* Phone Input */}
                  <div
                    className="flex items-center flex-1 bg-[#FBFBFB] border border-[#E2E2E2] rounded-[15px] px-4 sm:px-5 h-[52px] sm:h-[58px] lg:h-[64px]"
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      className="w-full bg-transparent text-black placeholder:text-[#4C4C4C] focus:outline-none font-['Manrope'] text-sm sm:text-base"
                      style={{ fontWeight: 500, lineHeight: "1.5" }}
                      aria-label="Phone Number"
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                </div>
                {errors.phone && (
                  <p className="text-sm text-[#E11E24]">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <label
                className="font-['Manrope'] text-[#5B5B5B] text-base sm:text-lg lg:text-xl"
                style={{ fontWeight: 700, lineHeight: "1.5" }}
              >
                Message
              </label>
              <div
                className="flex items-start bg-[#FBFBFB] border border-[#E2E2E2] rounded-[15px] p-4 min-h-[150px] sm:min-h-[180px] lg:min-h-[220px]"
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                  rows={6}
                  className="w-full bg-transparent text-black placeholder:text-[#4C4C4C] focus:outline-none resize-none font-['Manrope'] text-sm sm:text-base"
                  style={{ fontWeight: 500, lineHeight: "1.5", minHeight: "120px" }}
                  aria-label="Message"
                  aria-required="true"
                  aria-invalid={!!errors.message}
                />
              </div>
              {errors.message && (
                <p className="text-sm text-[#E11E24]">{errors.message}</p>
              )}
            </div>

            {/* Submit Status Message */}
            {submitStatus.type && (
              <div
                className={`rounded-lg p-3 sm:p-4 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <p className="font-['Manrope'] text-sm sm:text-base" style={{ fontWeight: 500 }}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center sm:justify-end pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[75px] border border-[rgba(70,70,70,0.3)] bg-black transition-all hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto px-6 sm:px-8 h-[45px] sm:h-[49px]"
                style={{ minWidth: "140px" }}
              >
                <span
                  className="font-['Manrope'] text-white text-base sm:text-lg lg:text-xl"
                  style={{ fontWeight: 300, lineHeight: "0.78", letterSpacing: "0.02em" }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="relative w-full bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[98px] py-10 sm:py-14 lg:py-20">
          <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:gap-[69px]">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:flex-shrink-0">
              <h2
                className="font-['Inter'] text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px]"
                style={{ fontWeight: 700, lineHeight: "1.3", maxWidth: "443px" }}
              >
                How Can We Assist you Today
              </h2>
            </div>

            {/* Cards Container */}
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 lg:gap-6">
              {/* Registered Address Card */}
              <div className="flex flex-col bg-white gap-5 sm:gap-6 lg:gap-[27px] p-4 sm:p-6 lg:px-8 lg:py-0 rounded-lg sm:flex-1">
                {/* Heading */}
                <div className="flex flex-col gap-1">
                  <p
                    className="font-['Inter'] text-black text-lg sm:text-xl lg:text-[22px]"
                    style={{ fontWeight: 600, lineHeight: "1.21" }}
                  >
                    Registered Address
                  </p>
                  <div className="w-[27px] h-[3px] bg-black" />
                </div>

                {/* Details */}
                <p
                  className="font-['Inter'] text-black text-base sm:text-lg lg:text-xl"
                  style={{ fontWeight: 500, lineHeight: "1.6", maxWidth: "246px" }}
                >
                  #20/1, 2nd Main, Yeshwanthpur Industry, Bengaluru-560022, India
                </p>

                {/* Button */}
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 rounded-[65px] border border-[#F2F2F2] bg-white transition hover:bg-gray-50 px-4 sm:px-5 py-3 w-fit"
                >
                  <span
                    className="font-['Inter'] text-[#555555] text-xs sm:text-sm"
                    style={{ fontWeight: 400, lineHeight: "1.5", letterSpacing: "-0.03em" }}
                  >
                    Get Directions
                  </span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                  >
                    <path
                      d="M6.5 0L6.5 13M6.5 13L13 6.5M6.5 13L0 6.5"
                      stroke="#555555"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Contact Details Card */}
              <div className="flex flex-col bg-white gap-5 sm:gap-6 lg:gap-[27px] p-4 sm:p-6 lg:px-8 lg:py-0 rounded-lg sm:flex-1">
                {/* Heading */}
                <div className="flex flex-col gap-1">
                  <p
                    className="font-['Inter'] text-black text-lg sm:text-xl lg:text-[22px]"
                    style={{ fontWeight: 600, lineHeight: "1.21" }}
                  >
                    Contact Details
                  </p>
                  <div className="w-[27px] h-[3px] bg-black" />
                </div>

                {/* Details - Phone */}
                <a
                  href="tel:+918884480040"
                  className="font-['Inter'] text-black hover:underline text-lg sm:text-xl lg:text-[22px]"
                  style={{ fontWeight: 500, lineHeight: "1.21" }}
                >
                  +91 88844 80040
                </a>

                {/* Details - Email */}
                <a
                  href="mailto:contact@nexobots.com"
                  className="font-['Inter'] text-black hover:underline text-lg sm:text-xl lg:text-[22px]"
                  style={{ fontWeight: 500, lineHeight: "1.21" }}
                >
                  contact@nexobots.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
