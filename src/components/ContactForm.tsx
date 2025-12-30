"use client";

import Image from "next/image";
import { useState } from "react";

const labelClasses =
  "font-['Manrope'] text-[14px] lg:text-[15px] font-medium leading-[1.4] text-[#666666]";
const inputClasses =
  "w-full rounded-[6px] border-none bg-[#E8E8E8] px-4 py-3 text-[14px] font-normal text-[#333333] placeholder:text-[#666666] focus:outline-none focus:ring-1 focus:ring-[#E11E24]";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  terms?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (cleanedPhone.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the Terms of Use and Privacy Policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : (value || ""),
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "email" && value.trim()) {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address",
        }));
      }
    }

    if (name === "phone" && value.trim()) {
      const cleanedPhone = value.replace(/\D/g, "");
      if (cleanedPhone.length !== 10) {
        setErrors((prev) => ({
          ...prev,
          phone: "Please enter a valid 10-digit phone number",
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
          name: fullName,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          terms_accepted: formData.terms ? "Yes" : "No",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Form submitted successfully! We'll get back to you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          terms: false,
        });
        setErrors({});
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
  };

  return (
    <section
      id="contact"
      className="bg-[#D4D4D4] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 sm:py-12 md:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Desktop: Two column layout, Mobile: Single column */}
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-20">
          
          {/* Header Section - Left side on desktop */}
          <div className="lg:w-[280px] xl:w-[300px] lg:flex-shrink-0 mb-8 lg:mb-0">
            <p className="font-['TASA_Orbiter'] text-[15px] sm:text-[16px] lg:text-[14px] font-bold leading-[1.3] text-black mb-1">
              Empowering Every Industry with
            </p>
            <h2 className="font-['TASA_Orbiter'] text-[28px] sm:text-[32px] lg:text-[28px] xl:text-[32px] font-bold leading-[1.1] tracking-[-0.01em] text-black mb-4 lg:mb-5">
              Intelligent, Secure, and Scalable IT Solutions
            </h2>
            <p className="font-['Manrope'] text-[14px] sm:text-[15px] lg:text-[13px] xl:text-[14px] font-normal leading-[1.5] text-black">
              Our experts are just a message away. Let's connect and create technology that powers your tomorrow.
            </p>
          </div>

          {/* Form - Right side on desktop */}
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              {/* Submit Status Message */}
              {submitStatus.type && (
                <div
                  className={`rounded-lg p-3 mb-4 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <p className="font-['Manrope'] text-[13px] font-medium">
                    {submitStatus.message}
                  </p>
                </div>
              )}

              {/* First Name & Last Name - 2 columns on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 mb-5 lg:mb-5">
                {/* First Name */}
                <div>
                  <label htmlFor="first-name" className={labelClasses}>
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    type="text"
                    placeholder="Enter First Name"
                    value={formData.firstName || ""}
                    onChange={handleChange}
                    className={`${inputClasses} mt-2 ${
                      errors.firstName ? "ring-1 ring-[#E11E24]" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-[#E11E24] text-[11px] font-medium mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="last-name" className={labelClasses}>
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    type="text"
                    placeholder="Enter Last Name"
                    value={formData.lastName || ""}
                    onChange={handleChange}
                    className={`${inputClasses} mt-2 ${
                      errors.lastName ? "ring-1 ring-[#E11E24]" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-[#E11E24] text-[11px] font-medium mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email & Phone - 2 columns on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 mb-5 lg:mb-5">
                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputClasses} mt-2 ${
                      errors.email ? "ring-1 ring-[#E11E24]" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[#E11E24] text-[11px] font-medium mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className={labelClasses}>
                    Phone Number
                  </label>
                  <div className="flex items-stretch gap-2 mt-2">
                    <button
                      type="button"
                      className="flex items-center justify-center gap-1.5 rounded-[6px] bg-[#E8E8E8] px-3 py-3 flex-shrink-0"
                      aria-label="Country code selector"
                    >
                      <div className="relative w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src="/indian-flag.png"
                          alt="Indian flag"
                          fill
                          className="object-cover"
                          aria-hidden="true"
                        />
                      </div>
                      <svg
                        viewBox="0 0 12 7"
                        className="h-[4px] w-[8px] text-[#666666] flex-shrink-0"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="flex-1 min-w-0">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter Phone Number"
                        value={formData.phone || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputClasses} ${
                          errors.phone ? "ring-1 ring-[#E11E24]" : ""
                        }`}
                      />
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-[#E11E24] text-[11px] font-medium mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Message - Full width */}
              <div className="mb-5 lg:mb-6">
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your Message"
                  rows={5}
                  value={formData.message || ""}
                  onChange={handleChange}
                  className={`${inputClasses} mt-2 min-h-[120px] lg:min-h-[140px] resize-y ${
                    errors.message ? "ring-1 ring-[#E11E24]" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-[#E11E24] text-[11px] font-medium mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Terms & Submit - Row on desktop, stacked on mobile */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
                {/* Terms Checkbox */}
                <div>
                  <label
                    htmlFor="terms"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="h-4 w-4 rounded-[3px] border-[#AAAAAA] bg-[#CCCCCC] text-[#E11E24] focus:ring-[#E11E24] flex-shrink-0 accent-[#E11E24]"
                    />
                    <span className="font-['Manrope'] text-[13px] lg:text-[14px] font-normal text-[#555555] leading-normal">
                      I agree with Terms of Use and Privacy Policy
                    </span>
                  </label>
                  {errors.terms && (
                    <p className="text-[#E11E24] text-[11px] font-medium mt-1 ml-6">
                      {errors.terms}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white transition hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed px-5 py-2.5 w-fit"
                >
                  <span className="whitespace-nowrap font-['Manrope'] text-[13px] lg:text-[14px] font-medium">
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </span>
                  {!isSubmitting && (
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

