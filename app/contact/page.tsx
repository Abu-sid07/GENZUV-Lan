"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";


// ─── Types ───────────────────────────────────────────────────────────
type FormState = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  consent?: string;
}

// ─── Constants ───────────────────────────────────────────────────────
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 1000;

const SERVICES = [
  "Digital Marketing",
  "Meta & Google Ads",
  "SEO & Local Search",
  "Lead Generation",
  "Website Development",
  "AI & WhatsApp Automation",
  "Social Media Marketing",
  "Branding & Content Creation",
  "Complete Growth System",
] as const;

const CONTACT = {
  phone: process.env.NEXT_PUBLIC_PHONE ?? "919566180862",
  phoneDisplay: "+91 95661 80862",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "genzuv0@gmail.com",
  whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE ?? "919566180862"}?text=${encodeURIComponent(
    "Hi GENZ UV, I'd like to discuss a project."
  )}`,
};

const BUSINESS_HOURS = "Mon – Sat, 9:30 AM – 7:00 PM IST";

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  service: SERVICES[0],
  projectDetails: "",
  consent: false,
};

// ─── Component ───────────────────────────────────────────────────────
export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [honeypot, setHoneypot] = useState("");
  const [charCount, setCharCount] = useState(0);
  const successTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const [formData, setFormData] = useState(INITIAL_FORM);

  // Auto-dismiss success banner after 8 seconds
  useEffect(() => {
    if (formState === "success") {
      successTimerRef.current = setTimeout(() => setFormState("idle"), 8000);
      return () => clearTimeout(successTimerRef.current);
    }
  }, [formState]);

  // ── Validation ───────────────────────────────────────────────────
  const validate = useCallback((): FieldErrors => {
    const errors: FieldErrors = {};
    const phone = formData.phone.replace(/\s/g, "");

    if (!formData.fullName.trim()) {
      errors.fullName = "Please enter your name or business name.";
    }
    if (!phone) {
      errors.phone = "A mobile number is required.";
    } else if (!PHONE_REGEX.test(phone)) {
      errors.phone = "Enter a valid 10-digit Indian mobile number.";
    }
    if (formData.email && !EMAIL_REGEX.test(formData.email)) {
      errors.email = "Enter a valid email address or leave this blank.";
    }
    if (!formData.consent) {
      errors.consent =
        "We need your consent to contact you about this enquiry.";
    }

    return errors;
  }, [formData]);

  // ── Field updater (clears per-field error on change) ─────────────
  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field as keyof FieldErrors]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FieldErrors];
        return next;
      });
    }
  };

  // ── Submit handler ───────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Silently reject bots
    if (honeypot) return;

    const errors = validate();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      setFormState("idle");
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(`field-${firstErrorField}`)?.focus();
      return;
    }

    setErrorMessage("");
    setFieldErrors({});
    setFormState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone.replace(/\s/g, ""),
        }),
      });

      const result: { success?: boolean; error?: string } =
        await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(
          result.error || "Failed to send enquiry. Please try again."
        );
        setFormState("error");
        return;
      }

      setFormState("success");
      setFormData(INITIAL_FORM);
      setCharCount(0);
    } catch {
      setErrorMessage(
        "Could not reach our server. Please try again or message us on WhatsApp."
      );
      setFormState("error");
    }
  };

  // ── Reusable input class builder ─────────────────────────────────
  const inputClass = (field: keyof FieldErrors) =>
    `mt-1.5 w-full rounded-lg border bg-[#FAF8F5]/50 px-4 py-2.5 text-sm text-[#19181A] placeholder:text-[#9A968E] transition-colors focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19181A] focus-visible:ring-offset-1 ${
      fieldErrors[field]
        ? "border-red-500 focus-visible:ring-red-500"
        : "border-[#D9D3C5] focus:border-[#19181A]"
    }`;

  // ── Render ───────────────────────────────────────────────────────
  return (
    <section
      id="contact"
      className="w-full bg-[#FAF8F5] px-6 py-20 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* ── Header ────────────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl font-normal tracking-tight text-[#19181A] sm:text-4xl md:text-[46px] md:leading-[1.14]">
            Tell Us About Your Business
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[#615F5B] sm:text-base">
            Fill the form, call, or chat on WhatsApp — whichever is easiest.
            We respond within 2 hours during business hours.
          </p>
        </div>

        {/* ── Main Card ─────────────────────────────────────────── */}
        <div className="rounded-[24px] border border-[#D9D3C5] bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* ════════════ LEFT: FORM ════════════ */}
            <div className="lg:col-span-7">
              {/* Screen-reader live region */}
              <div aria-live="polite" aria-atomic="true" className="sr-only">
                {formState === "success" &&
                  "Enquiry sent successfully. We will respond within 2 hours."}
                {formState === "error" && `Error: ${errorMessage}`}
              </div>

              {/* ── Success Banner ──────────────────────────────── */}
              {formState === "success" && (
                <div
                  role="status"
                  className="mb-6 flex items-start justify-between gap-4 rounded-xl border border-emerald-300 bg-emerald-50/80 p-4 text-emerald-800"
                >
                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Enquiry Received!</p>
                      <p className="mt-0.5 text-xs text-emerald-700 sm:text-sm">
                        Our team will respond within 2 hours during{" "}
                        {BUSINESS_HOURS}.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="shrink-0 rounded p-1 text-emerald-600 transition-colors hover:bg-emerald-100 focus-visible:outline-2 focus-visible:outline-emerald-600"
                    aria-label="Dismiss success message"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {/* ── Error Banner ────────────────────────────────── */}
              {formState === "error" && (
                <div
                  role="alert"
                  className="mb-6 flex items-start justify-between gap-4 rounded-xl border border-red-300 bg-red-50/80 p-4 text-red-800"
                >
                  <div className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold">Something Went Wrong</p>
                      <p className="mt-0.5 text-xs text-red-700 sm:text-sm">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="shrink-0 rounded p-1 text-red-600 transition-colors hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-red-600"
                    aria-label="Dismiss error message"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {/* ── Form ────────────────────────────────────────── */}
              <form noValidate onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — invisible to real users, traps bots */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="hp-website">Website</label>
                  <input
                    id="hp-website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="field-fullName"
                    className="block text-xs font-semibold text-[#19181A] sm:text-[13px]"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="field-fullName"
                    type="text"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="Your name or business name"
                    aria-invalid={!!fieldErrors.fullName}
                    aria-describedby={
                      fieldErrors.fullName ? "err-fullName" : undefined
                    }
                    className={inputClass("fullName")}
                  />
                  {fieldErrors.fullName && (
                    <p
                      id="err-fullName"
                      role="alert"
                      className="mt-1 text-xs text-red-600"
                    >
                      {fieldErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="field-phone"
                      className="block text-xs font-semibold text-[#19181A] sm:text-[13px]"
                    >
                      Phone / WhatsApp{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="numeric"
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) =>
                        updateField(
                          "phone",
                          e.target.value.replace(/\D/g, "")
                        )
                      }
                      placeholder="98765 43210"
                      aria-invalid={!!fieldErrors.phone}
                      aria-describedby={
                        fieldErrors.phone ? "err-phone" : undefined
                      }
                      className={inputClass("phone")}
                    />
                    {fieldErrors.phone && (
                      <p
                        id="err-phone"
                        role="alert"
                        className="mt-1 text-xs text-red-600"
                      >
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="field-email"
                      className="block text-xs font-semibold text-[#19181A] sm:text-[13px]"
                    >
                      Email Address{" "}
                      <span className="font-normal text-[#9A968E]">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="field-email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="name@business.com"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={
                        fieldErrors.email ? "err-email" : undefined
                      }
                      className={inputClass("email")}
                    />
                    {fieldErrors.email && (
                      <p
                        id="err-email"
                        role="alert"
                        className="mt-1 text-xs text-red-600"
                      >
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Select */}
                <div>
                  <label
                    htmlFor="field-service"
                    className="block text-xs font-semibold text-[#19181A] sm:text-[13px]"
                  >
                    Primary Service of Interest
                  </label>
                  <div className="relative mt-1.5">
                    <select
                      id="field-service"
                      value={formData.service}
                      onChange={(e) => updateField("service", e.target.value)}
                      className="w-full appearance-none rounded-lg border border-[#D9D3C5] bg-[#FAF8F5]/50 px-4 py-2.5 pr-10 text-sm text-[#19181A] transition-colors focus:border-[#19181A] focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19181A] focus-visible:ring-offset-1"
                    >
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <div
                      className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-[#817B72]"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="field-projectDetails"
                    className="block text-xs font-semibold text-[#19181A] sm:text-[13px]"
                  >
                    Tell Us About Your Project{" "}
                    <span className="font-normal text-[#9A968E]">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="field-projectDetails"
                    rows={4}
                    maxLength={MAX_MESSAGE_LENGTH}
                    value={formData.projectDetails}
                    onChange={(e) => {
                      updateField("projectDetails", e.target.value);
                      setCharCount(e.target.value.length);
                    }}
                    placeholder="Current challenges, goals, budget range, or timeline..."
                    className="mt-1.5 w-full resize-y rounded-lg border border-[#D9D3C5] bg-[#FAF8F5]/50 px-4 py-2.5 text-sm text-[#19181A] placeholder:text-[#9A968E] transition-colors focus:border-[#19181A] focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19181A] focus-visible:ring-offset-1"
                  />
                  <p className="mt-1 text-right text-[10px] text-[#9A968E]">
                    {charCount}/{MAX_MESSAGE_LENGTH}
                  </p>
                </div>

                {/* Consent */}
                <div>
                  <div className="flex items-start gap-2.5">
                    <input
                      id="field-consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) =>
                        updateField("consent", e.target.checked)
                      }
                      aria-invalid={!!fieldErrors.consent}
                      aria-describedby={
                        fieldErrors.consent ? "err-consent" : undefined
                      }
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#D9D3C5] text-[#19181A] focus:ring-0 focus-visible:ring-2 focus-visible:ring-[#19181A]"
                    />
                    <label
                      htmlFor="field-consent"
                      className="text-xs leading-relaxed text-[#615F5B] select-none"
                    >
                      I consent to GENZ UV contacting me via WhatsApp, phone,
                      or email regarding this enquiry.{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {fieldErrors.consent && (
                    <p
                      id="err-consent"
                      role="alert"
                      className="ml-6 mt-1 text-xs text-red-600"
                    >
                      {fieldErrors.consent}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#19181A] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19181A] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {formState === "submitting" ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        >
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* ── What Happens Next ───────────────────────────── */}
              <div className="mt-8 rounded-xl border border-[#E8E4DD] bg-[#FAF8F5]/60 p-5">
                <h4 className="text-xs font-bold tracking-wider text-[#817B72] uppercase">
                  What Happens Next
                </h4>
                <ol className="mt-3 space-y-2.5">
                  {[
                    {
                      step: "1",
                      title: "We review your enquiry",
                      desc: "Within 2 hours during business hours.",
                    },
                    {
                      step: "2",
                      title: "Quick discovery call",
                      desc: "A 15-minute call to understand your goals and budget.",
                    },
                    {
                      step: "3",
                      title: "Custom proposal",
                      desc: "A detailed plan with pricing delivered within 48 hours.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#19181A] text-[10px] font-bold text-white">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#19181A]">
                          {item.title}
                        </p>
                        <p className="text-xs text-[#7A766F]">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* ════════════ RIGHT: CONTACT INFO ════════════ */}
            <div className="flex flex-col justify-between border-t border-[#D9D3C5] pt-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <h3 className="font-serif text-2xl font-normal text-[#19181A]">
                  We Respond Quickly
                </h3>
                <p className="mt-1.5 text-xs text-[#7A766F] sm:text-sm">
                  {BUSINESS_HOURS}. Average response time: under 2 hours.
                </p>

                <div className="mt-6 space-y-3">
                  {/* Phone */}
                  <a
                    href={`tel:+${CONTACT.phone}`}
                    className="group flex items-center gap-4 rounded-xl bg-[#EDE8DE] p-3.5 transition-colors duration-150 hover:bg-[#E5DFD4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19181A]"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#19181A]"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold tracking-wider text-[#7A766F] uppercase">
                        Phone
                      </span>
                      <span className="text-sm font-semibold text-[#19181A] group-hover:underline">
                        {CONTACT.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl bg-[#EDE8DE] p-3.5 transition-colors duration-150 hover:bg-[#E5DFD4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19181A]"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#1EA952]"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-5 w-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.42 5.83c-.01 4.54-3.71 8.23-8.26 8.23Zm4.53-6.14c-.25-.12-1.48-.73-1.71-.81-.22-.08-.39-.12-.56.13-.17.25-.66.83-.81 1-.15.17-.3.19-.55.07-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.57-.43-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.68.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.79 2.73 4.33 3.83.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.09.15-1.2-.06-.11-.31-.3-.56-.42Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold tracking-wider text-[#7A766F] uppercase">
                        WhatsApp
                      </span>
                      <span className="text-sm font-semibold text-[#19181A] group-hover:underline">
                        {CONTACT.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-center gap-4 rounded-xl bg-[#EDE8DE] p-3.5 transition-colors duration-150 hover:bg-[#E5DFD4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19181A]"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#19181A]"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold tracking-wider text-[#7A766F] uppercase">
                        Email
                      </span>
                      <span className="text-sm font-semibold text-[#19181A] group-hover:underline">
                        {CONTACT.email}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 rounded-xl bg-[#EDE8DE] p-3.5">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#19181A]"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold tracking-wider text-[#7A766F] uppercase">
                        Location
                      </span>
                      <span className="text-sm font-semibold text-[#19181A]">
                        Remote-first — Serving clients across India
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1EA952] py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#189146] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1EA952]"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.42 5.83c-.01 4.54-3.71 8.23-8.26 8.23Zm4.53-6.14c-.25-.12-1.48-.73-1.71-.81-.22-.08-.39-.12-.56.13-.17.25-.66.83-.81 1-.15.17-.3.19-.55.07-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.57-.43-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.68.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.79 2.73 4.33 3.83.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.09.15-1.2-.06-.11-.31-.3-.56-.42Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:+${CONTACT.phone}`}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#3E3C38] bg-transparent py-3 text-sm font-medium text-[#19181A] transition-all duration-200 hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19181A]"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
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