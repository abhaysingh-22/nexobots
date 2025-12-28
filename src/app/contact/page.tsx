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
    <div className="bg-white text-black">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-[247px] w-full overflow-hidden">
        {/* Background Image - positioned to show bottom portion (from 644px down) */}
        <div 
          className="absolute"
          style={{
            top: "-644px",
            left: "0",
            width: "100%",
            height: "891px",
          }}
        >
          <Image
            src="/contact-hero-bg.png"
            alt="Contact Hero Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Blurred Rectangle Overlay */}
        <div
          className="absolute"
          style={{
            left: "-22px",
            top: "775px",
            width: "1499px",
            height: "656px",
            backgroundColor: "#000000",
            filter: "blur(386.2px)",
            opacity: 0.3,
          }}
        />

        {/* Red Line */}
        <div
          className="absolute"
          style={{
            left: "82px",
            top: "48.5px",
            width: "3px",
            height: "81px",
            backgroundColor: "#E11E24",
          }}
        />

        {/* "Let's Connect" Heading */}
        <div
          className="absolute"
          style={{
            left: "118px",
            top: "57px",
          }}
        >
          <h1
            className="text-white"
            style={{
              fontFamily: "TASA Orbiter",
              fontSize: "48px",
              fontWeight: 600,
              lineHeight: "1.32",
            }}
          >
            Let&apos;s Connect
          </h1>
        </div>
      </section>

      {/* Description Text */}
      <section className="bg-white px-6 py-12 md:px-12 lg:px-[118px]">
        <div className="mx-auto max-w-[1440px]">
          <p
            className="text-black"
            style={{
              fontFamily: "Inter",
              fontSize: "30px",
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
      <section className="bg-white px-6 py-12 md:px-12 lg:px-[118px]">
        <div className="mx-auto" style={{ maxWidth: "1205px" }}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Name and Email Row */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-[50px]">
              {/* Name Field */}
              <div className="flex flex-col flex-1" style={{ gap: "12px" }}>
                <label
                  className="text-black"
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "1.5",
                    color: "#5B5B5B",
                  }}
                >
                  Name
                </label>
                <div
                  className="flex items-center"
                  style={{
                    backgroundColor: "#FBFBFB",
                    border: "1px solid #E2E2E2",
                    borderRadius: "15px",
                    padding: "16px 20px",
                    height: "64px",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                    className="w-full bg-transparent text-black placeholder:text-[#4C4C4C] focus:outline-none"
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "1.5",
                    }}
                    aria-label="Name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-[#E11E24]">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col flex-1" style={{ gap: "12px" }}>
                <label
                  className="text-black"
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "1.5",
                    color: "#5B5B5B",
                  }}
                >
                  Email
                </label>
                <div
                  className="flex items-center"
                  style={{
                    backgroundColor: "#FBFBFB",
                    border: "1px solid #E2E2E2",
                    borderRadius: "15px",
                    padding: "16px 20px",
                    height: "64px",
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    className="w-full bg-transparent text-black placeholder:text-[#4C4C4C] focus:outline-none"
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "1.5",
                    }}
                    aria-label="Email"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-[#E11E24]">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Company Name and Phone Number Row */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-[50px]">
              {/* Company Name Field */}
              <div className="flex flex-col flex-1" style={{ gap: "12px" }}>
                <label
                  className="text-black"
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "1.5",
                    color: "#5B5B5B",
                  }}
                >
                  Company Name
                </label>
                <div
                  className="flex items-center"
                  style={{
                    backgroundColor: "#FBFBFB",
                    border: "1px solid #E2E2E2",
                    borderRadius: "15px",
                    padding: "16px 16px 16px 20px",
                    height: "64px",
                  }}
                >
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Company Name"
                    className="w-full bg-transparent text-black placeholder:text-[#4C4C4C] focus:outline-none"
                    style={{
                      fontFamily: "Manrope",
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "1.5",
                    }}
                    aria-label="Company Name"
                    aria-required="true"
                    aria-invalid={!!errors.company}
                  />
                </div>
                {errors.company && (
                  <p className="mt-1 text-sm text-[#E11E24]">{errors.company}</p>
                )}
              </div>

              {/* Phone Number Field with Country Code */}
              <div className="flex flex-col flex-1" style={{ gap: "12px" }}>
                <label
                  className="text-black"
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "1.5",
                    color: "#5B5B5B",
                  }}
                >
                  Phone Number
                </label>
                <div className="flex items-center gap-3">
                  {/* Country Code Selector */}
                  <div
                    className="flex items-center gap-1"
                    style={{
                      backgroundColor: "#FBFBFB",
                      border: "1px solid #E2E2E2",
                      borderRadius: "15px",
                      padding: "10px 12px",
                      height: "64px",
                    }}
                  >
                    <Image
                      src="/contact-phone-flag.png"
                      alt="India Flag"
                      width={21}
                      height={21}
                      className="rounded"
                    />
                    <svg
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
                    className="flex items-center flex-1"
                    style={{
                      backgroundColor: "#FBFBFB",
                      border: "1px solid #E2E2E2",
                      borderRadius: "15px",
                      padding: "16px 20px",
                      height: "64px",
                    }}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Phone Number"
                      className="w-full bg-transparent text-black placeholder:text-[#4C4C4C] focus:outline-none"
                      style={{
                        fontFamily: "Manrope",
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "1.5",
                      }}
                      aria-label="Phone Number"
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-[#E11E24]">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col" style={{ gap: "12px" }}>
              <label
                className="text-black"
                style={{
                  fontFamily: "Manrope",
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "1.5",
                  color: "#5B5B5B",
                }}
              >
                Message
              </label>
              <div
                className="flex items-start"
                style={{
                  backgroundColor: "#FBFBFB",
                  border: "1px solid #E2E2E2",
                  borderRadius: "15px",
                  padding: "16px",
                  minHeight: "220px",
                }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                  rows={8}
                  className="w-full bg-transparent text-black placeholder:text-[#4C4C4C] focus:outline-none resize-none"
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "1.5",
                    minHeight: "188px",
                  }}
                  aria-label="Message"
                  aria-required="true"
                  aria-invalid={!!errors.message}
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-[#E11E24]">{errors.message}</p>
              )}
            </div>

            {/* Submit Status Message */}
            {submitStatus.type && (
              <div
                className={`rounded-lg p-4 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <p
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  {submitStatus.message}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-3 rounded-[75px] border border-[rgba(70,70,70,0.3)] bg-black transition-all hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  width: "152px",
                  height: "49px",
                }}
              >
                <span
                  className="text-white"
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: "0.78",
                    letterSpacing: "0.02em",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        className="relative w-full bg-white"
      >
        <div
          className="mx-auto flex flex-col gap-[69px] md:flex-row"
          style={{
            padding: "80px 240px 80px 98px",
            maxWidth: "1440px",
            width: "100%",
          }}
        >
          {/* Header */}
          <div className="flex flex-col" style={{ gap: "24px" }}>
            <h2
              className="text-black"
              style={{
                fontFamily: "Inter",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "1.3",
                width: "443px",
              }}
            >
              How Can We Assist you Today
            </h2>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-6 md:flex-row">
            {/* Registered Address Card */}
            <div
              className="flex flex-col bg-white"
              style={{
                gap: "27px",
                padding: "0px 32px 32px",
                borderRadius: "8px",
              }}
            >
              {/* Heading */}
              <div className="flex flex-col" style={{ gap: "25px" }}>
                <div className="flex flex-col" style={{ gap: "5px" }}>
                  <p
                    className="text-black"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "22px",
                      fontWeight: 600,
                      lineHeight: "1.21",
                    }}
                  >
                    Registered Address
                  </p>
                  <div
                    style={{
                      width: "27px",
                      height: "3px",
                      backgroundColor: "#000000",
                    }}
                  />
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col" style={{ gap: "25px" }}>
                <p
                  className="text-black"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 500,
                    lineHeight: "1.6",
                    width: "246px",
                  }}
                >
                  #20/1, 2nd Main, Yeshwanthpur Industry, Bengaluru-560022, India
                </p>
              </div>

              {/* Button */}
              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 rounded-[65px] border border-[#F2F2F2] bg-white transition hover:bg-gray-50"
                style={{
                  padding: "14px 20px",
                  width: "fit-content",
                }}
              >
                <span
                  className="text-[#555555]"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "1.5",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Get Directions
                </span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
            <div
              className="flex flex-col bg-white"
              style={{
                gap: "27px",
                padding: "0px 32px 32px",
                borderRadius: "8px",
              }}
            >
              {/* Heading */}
              <div className="flex flex-col" style={{ gap: "25px" }}>
                <div className="flex flex-col" style={{ gap: "5px" }}>
                  <p
                    className="text-black"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "22px",
                      fontWeight: 600,
                      lineHeight: "1.21",
                    }}
                  >
                    Contact Details
                  </p>
                  <div
                    style={{
                      width: "27px",
                      height: "3px",
                      backgroundColor: "#000000",
                    }}
                  />
                </div>
              </div>

              {/* Details - Phone */}
              <div className="flex flex-col" style={{ gap: "25px" }}>
                <a
                  href="tel:+918884480040"
                  className="text-black hover:underline"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "22px",
                    fontWeight: 500,
                    lineHeight: "1.21",
                  }}
                >
                  +91 88844 80040
                </a>
              </div>

              {/* Details - Email */}
              <div className="flex flex-col" style={{ gap: "25px" }}>
                <a
                  href="mailto:contact@nexobots.com"
                  className="text-black hover:underline"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "22px",
                    fontWeight: 500,
                    lineHeight: "1.21",
                  }}
                >
                  contact@nexobots.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
