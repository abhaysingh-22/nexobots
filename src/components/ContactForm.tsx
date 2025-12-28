"use client";

import Image from "next/image";
import { useState } from "react";

const labelClasses =
  "font-['Manrope'] text-sm sm:text-base lg:text-lg xl:text-[20px] font-semibold leading-[1.5] text-[#707070]";
const inputClasses =
  "w-full rounded-[6px] border border-[#CECECE] bg-[#F2F2F2] px-3 sm:px-4 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-[14px] font-medium text-[#4C4C4C] placeholder:text-[#4C4C4C] focus:border-[#E11E24] focus:outline-none";
const descriptionCopy =
  "Our experts are just a message away. Let's connect and create technology that powers your tomorrow.";

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

  const validatePhone = (phone: string): boolean => {
    // Remove all non-digit characters and check if it's 10 digits
    const cleanedPhone = phone.replace(/\D/g, "");
    return cleanedPhone.length === 10;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const cleanedPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (cleanedPhone.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    // Terms validation
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

    // Clear error when user starts typing
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

    // Real-time validation for email and phone on blur
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
      // Combine firstName and lastName for the name field, and also send separately
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
        // Reset form
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
      className="bg-[#D9D9D9] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-[72px] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-[80px]"
    >
      <div className="mx-auto w-full max-w-[1392px]">
        <div className="grid gap-6 sm:gap-8 lg:gap-10 xl:gap-[50px] lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)] 2xl:grid-cols-[360px_minmax(0,1fr)]">
          {/* Left Section - Image & Description */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left">
            <Image
              src="/contact-form-icon.svg"
              alt="Contact icon"
              width={317}
              height={145}
              className="h-auto w-full max-w-[180px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[317px] mx-auto lg:mx-0"
            />
            <p className="font-['Manrope'] text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-[18px] font-medium leading-[1.4] sm:leading-[1.366] text-black max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              {descriptionCopy}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-[40px]">
            {/* Submit Status Message */}
            {submitStatus.type && (
              <div
                className={`rounded-lg p-3 sm:p-4 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <p className="font-['Manrope'] text-xs sm:text-sm md:text-[16px] font-medium">
                  {submitStatus.message}
                </p>
              </div>
            )}

            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-[40px] sm:grid-cols-2">
              <div className="space-y-1.5 sm:space-y-2">
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
                  className={`${inputClasses} ${
                    errors.firstName ? "border-[#E11E24]" : ""
                  }`}
                />
                {errors.firstName && (
                  <p className="text-[#E11E24] text-[10px] sm:text-[11px] md:text-[12px] font-medium">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="space-y-1.5 sm:space-y-2">
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
                  className={`${inputClasses} ${
                    errors.lastName ? "border-[#E11E24]" : ""
                  }`}
                />
                {errors.lastName && (
                  <p className="text-[#E11E24] text-[10px] sm:text-[11px] md:text-[12px] font-medium">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-[40px] sm:grid-cols-2">
              <div className="space-y-1.5 sm:space-y-2">
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
                  className={`${inputClasses} ${
                    errors.email ? "border-[#E11E24]" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-[#E11E24] text-[10px] sm:text-[11px] md:text-[12px] font-medium">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number
                </label>
                <div className="flex items-stretch gap-2">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1 rounded-[6px] border border-[#CECECE] bg-[#F2F2F2] px-2 sm:px-3 flex-shrink-0 min-w-[48px] sm:min-w-[56px]"
                    aria-label="Country code selector"
                  >
                    <div className="relative w-5 h-5 sm:w-[21px] sm:h-[21px] rounded-full overflow-hidden flex-shrink-0">
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
                      className="h-[4px] w-[8px] text-[#4C4C4C] flex-shrink-0"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="1"
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
                      className={`w-full rounded-[6px] border border-[#CECECE] bg-[#F2F2F2] px-3 sm:px-4 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-[14px] font-medium text-[#4C4C4C] placeholder:text-[#4C4C4C] focus:border-[#E11E24] focus:outline-none ${
                        errors.phone ? "border-[#E11E24]" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[#E11E24] text-[10px] sm:text-[11px] md:text-[12px] font-medium mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5 sm:space-y-2">
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your Message"
                rows={3}
                value={formData.message || ""}
                onChange={handleChange}
                className={`${inputClasses} min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] resize-y ${
                  errors.message ? "border-[#E11E24]" : ""
                }`}
              />
              {errors.message && (
                <p className="text-[#E11E24] text-[10px] sm:text-[11px] md:text-[12px] font-medium">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Terms & Submit */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-1">
                <label
                  htmlFor="terms"
                  className="flex items-start sm:items-center gap-2 sm:gap-3 font-['Manrope'] text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-semibold text-[#707070] cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 rounded border-[#CECECE] bg-[#C9C9C9] text-[#E11E24] focus:ring-[#E11E24] mt-0.5 sm:mt-0 flex-shrink-0"
                  />
                  <span className="leading-tight sm:leading-normal">
                    I agree with Terms of Use and Privacy Policy
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-[#E11E24] text-[10px] sm:text-[11px] md:text-[12px] font-medium ml-6 sm:ml-8 lg:ml-9">
                    {errors.terms}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-[75px] border border-[rgba(70,70,70,0.3)] bg-black text-white transition hover:bg-black/90 disabled:opacity-50 disabled:cursor-not-allowed px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 w-full sm:w-auto min-w-[120px] sm:min-w-[130px] lg:min-w-[143px]"
              >
                <span className="whitespace-nowrap font-['Manrope'] text-sm sm:text-base lg:text-lg xl:text-[20px] font-light tracking-[0.02em]">
                  {isSubmitting ? "Submitting..." : "Submit"}
                </span>
                {!isSubmitting && (
                  <Image
                    src="/find-out-more-arrow.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;

