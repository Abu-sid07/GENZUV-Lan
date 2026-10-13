"use client";

import React, { useState } from "react";

type FormState = "default" | "validation_error" | "loading" | "success" | "failure";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("default");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "Digital Marketing",
    projectDetails: "",
    consent: true,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.consent
    ) {
      setFormState("validation_error");
      return;
    }

    setFormState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send enquiry.");
      }

      setFormState("success");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        service: "Digital Marketing",
        projectDetails: "",
        consent: true,
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setFormState("failure");
    }
  };

  return (
    <section id="contact" className="w-full bg-[#FAF8F5] px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-normal tracking-tight text-[#19181A] sm:text-4xl md:text-[46px]">
            Tell Us About Your Business
          </h2>
          <p className="mt-3 text-sm text-[#615F5B] sm:text-base">
            Send a message, call or chat on WhatsApp. Choose whichever is easiest for you.
          </p>
        </div>

        {/* Main Box */}
        <div className="rounded-[24px] border border-[#D9D3C5] bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left: Form */}
            <div className="lg:col-span-7">
              {/* Success Message Banner */}
              {formState === "success" && (
                <div className="mb-6 rounded-xl border border-emerald-300 bg-emerald-50/80 p-4 text-emerald-800">
                  <div className="flex items-center gap-2 font-semibold">
                    <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Enquiry Received Successfully!
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-emerald-700">
                    Thank you! Our team has received your enquiry and will respond within Indian business hours.
                  </p>
                </div>
              )}

              {/* Failure Message Banner */}
              {formState === "failure" && (
                <div className="mb-6 rounded-xl border border-red-300 bg-red-50/80 p-4 text-red-800">
                  <div className="flex items-center gap-2 font-semibold">
                    <svg className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Transmission Error
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-red-700">
                    Unable to send enquiry automatically. Please connect with us directly on WhatsApp or phone call.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#19181A] sm:text-[13px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your name or business name"
                    className={`mt-1.5 w-full rounded-lg border bg-[#FAF8F5]/50 px-4 py-2.5 text-sm text-[#19181A] placeholder:text-[#9A968E] focus:bg-white focus:outline-none ${formState === "validation_error"
                      ? "border-red-500 ring-1 ring-red-500"
                      : "border-[#D9D3C5] focus:border-[#19181A]"
                      }`}
                  />
                  {formState === "validation_error" && (
                    <p className="mt-1 text-xs text-red-600">Please enter your name or business name.</p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#19181A] sm:text-[13px]">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className={`mt-1.5 w-full rounded-lg border bg-[#FAF8F5]/50 px-4 py-2.5 text-sm text-[#19181A] placeholder:text-[#9A968E] focus:bg-white focus:outline-none ${formState === "validation_error"
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-[#D9D3C5] focus:border-[#19181A]"
                        }`}
                    />
                    {formState === "validation_error" && (
                      <p className="mt-1 text-xs text-red-600">A valid mobile number is required.</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#19181A] sm:text-[13px]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@business.com"
                      className="mt-1.5 w-full rounded-lg border border-[#D9D3C5] bg-[#FAF8F5]/50 px-4 py-2.5 text-sm text-[#19181A] placeholder:text-[#9A968E] focus:border-[#19181A] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Primary Service of Interest */}
                <div>
                  <label className="block text-xs font-semibold text-[#19181A] sm:text-[13px]">
                    Primary Service of Interest
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full appearance-none rounded-lg border border-[#D9D3C5] bg-[#FAF8F5]/50 px-4 py-2.5 pr-10 text-sm text-[#19181A] focus:border-[#19181A] focus:bg-white focus:outline-none"
                    >
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Meta & Google Ads">Meta & Google Ads</option>
                      <option value="SEO">SEO</option>
                      <option value="Lead Generation">Lead Generation</option>
                      <option value="Website Development">Website Development</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="WhatsApp Automation">WhatsApp Automation</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Branding & Content Creation">Branding & Content Creation</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-neutral-500">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-[#7A766F]">
                    You can specify additional requirements in the note below.
                  </p>
                </div>

                {/* Tell Us About Your Project */}
                <div>
                  <label className="block text-xs font-semibold text-[#19181A] sm:text-[13px]">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Current challenges, goals or timeline..."
                    className="mt-1.5 w-full rounded-lg border border-[#D9D3C5] bg-[#FAF8F5]/50 px-4 py-2.5 text-sm text-[#19181A] placeholder:text-[#9A968E] focus:border-[#19181A] focus:bg-white focus:outline-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded border-[#D9D3C5] text-[#19181A] focus:ring-0"
                  />
                  <label htmlFor="consent" className="text-xs text-[#615F5B] select-none">
                    I consent to GENZ UV contacting me via WhatsApp, phone call or email regarding this enquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#19181A] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-black disabled:opacity-70"
                  >
                    {formState === "loading" ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Quick Contacts */}
            <div className="flex flex-col justify-between border-t border-[#D9D3C5] pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#19181A]">
                  We Respond Quickly
                </h3>
                <p className="mt-1.5 text-xs text-[#7A766F] sm:text-sm">
                  Our team monitors inbound lines during Indian business hours.
                </p>

                {/* 4 Cards */}
                <div className="mt-6 space-y-3">
                  {/* Phone */}
                  <a
                    href="tel:+91 9566180862"
                    className="flex items-center gap-4 rounded-xl bg-[#EDE8DE] p-3.5 transition-colors duration-150 hover:bg-[#E5DFD4]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#19181A]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold tracking-wider text-[#7A766F] uppercase">
                        PHONE
                      </span>
                      <span className="text-sm font-semibold text-[#19181A]">
                        +91 9566180862
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919566180862"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl bg-[#EDE8DE] p-3.5 transition-colors duration-150 hover:bg-[#E5DFD4]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#19181A]">
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.88 6.09C19.44 7.65 20.3 9.72 20.3 11.92C20.29 16.46 16.59 20.15 12.04 20.15ZM16.57 14.33C16.32 14.21 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.3 13.65C14.13 13.9 13.64 14.48 13.49 14.65C13.34 14.82 13.19 14.84 12.94 14.72C12.69 14.59 11.89 14.33 10.94 13.48C10.2 12.82 9.7 12 9.55 11.75C9.4 11.5 9.53 11.37 9.66 11.24C9.77 11.13 9.91 10.95 10.03 10.81C10.15 10.67 10.19 10.56 10.27 10.4C10.35 10.23 10.31 10.09 10.25 9.97C10.19 9.84 9.69 8.62 9.48 8.12C9.28 7.63 9.07 7.7 8.91 7.69C8.76 7.68 8.59 7.68 8.42 7.68C8.25 7.68 7.97 7.74 7.74 7.99C7.51 8.24 6.86 8.85 6.86 10.09C6.86 11.33 7.77 12.52 7.9 12.69C8.03 12.86 9.69 15.42 12.23 16.52C12.83 16.78 13.3 16.94 13.67 17.06C14.28 17.25 14.83 17.22 15.27 17.16C15.76 17.09 16.77 16.55 16.98 15.96C17.19 15.37 17.19 14.87 17.13 14.76C17.07 14.65 16.82 14.46 16.57 14.33Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold tracking-wider text-[#7A766F] uppercase">
                        WHATSAPP
                      </span>
                      <span className="text-sm font-semibold text-[#19181A]">
                        +91 9566180862
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:genzuv0@gmail.com"
                    className="flex items-center gap-4 rounded-xl bg-[#EDE8DE] p-3.5 transition-colors duration-150 hover:bg-[#E5DFD4]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#19181A]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold tracking-wider text-[#7A766F] uppercase">
                        EMAIL
                      </span>
                      <span className="text-sm font-semibold text-[#19181A]">
                        genzuv0@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-center gap-4 rounded-xl bg-[#EDE8DE] p-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#19181A]">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold tracking-wider text-[#7A766F] uppercase">
                        ADDRESS
                      </span>
                      <span className="text-sm font-semibold text-[#19181A]">
                        Remote - Serving the global People
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href="https://wa.me/919566180862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1EA952] py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#189146]"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.3C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.32 4.53 17.88 6.09C19.44 7.65 20.3 9.72 20.3 11.92C20.29 16.46 16.59 20.15 12.04 20.15ZM16.57 14.33C16.32 14.21 15.09 13.6 14.86 13.52C14.64 13.44 14.47 13.4 14.3 13.65C14.13 13.9 13.64 14.48 13.49 14.65C13.34 14.82 13.19 14.84 12.94 14.72C12.69 14.59 11.89 14.33 10.94 13.48C10.2 12.82 9.7 12 9.55 11.75C9.4 11.5 9.53 11.37 9.66 11.24C9.77 11.13 9.91 10.95 10.03 10.81C10.15 10.67 10.19 10.56 10.27 10.4C10.35 10.23 10.31 10.09 10.25 9.97C10.19 9.84 9.69 8.62 9.48 8.12C9.28 7.63 9.07 7.7 8.91 7.69C8.76 7.68 8.59 7.68 8.42 7.68C8.25 7.68 7.97 7.74 7.74 7.99C7.51 8.24 6.86 8.85 6.86 10.09C6.86 11.33 7.77 12.52 7.9 12.69C8.03 12.86 9.69 15.42 12.23 16.52C12.83 16.78 13.3 16.94 13.67 17.06C14.28 17.25 14.83 17.22 15.27 17.16C15.76 17.09 16.77 16.55 16.98 15.96C17.19 15.37 17.19 14.87 17.13 14.76C17.07 14.65 16.82 14.46 16.57 14.33Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="tel:+91 9566180862"
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#3E3C38] bg-transparent py-3 text-sm font-medium text-[#19181A] transition-all duration-200 hover:bg-white/60"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
