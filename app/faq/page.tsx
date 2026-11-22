"use client";

import { useState, useCallback, type KeyboardEvent } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What services does GENZ UV offer?",
    answer:
      "We provide end-to-end digital marketing and AI automation: Digital Marketing, Meta and Google Ads, SEO, Lead Generation, Website Development, AI Automation, WhatsApp Automation, Social Media Marketing, Branding, and Content Creation. All focused on driving phone calls and WhatsApp enquiries.",
  },
  {
    question: "How quickly can we see results from ad campaigns?",
    answer:
      "Paid advertising on Meta and Google can start driving enquiries within 48 to 72 hours of campaign launch, following initial audience setup and pixel verification. SEO and organic strategies typically show measurable movement within 8 to 12 weeks.",
  },
  {
    question: "What is AI automation and how does it help my business?",
    answer:
      "It connects your ad forms, website visits, and incoming WhatsApp messages to instant automated replies, CRM tracking, and reminder sequences so no lead is lost. Think of it as a 24/7 sales assistant that qualifies leads before your team even wakes up.",
  },
  {
    question: "Do you work with businesses outside major Indian cities?",
    answer:
      "Yes. We support businesses across Tier-1, Tier-2, and Tier-3 cities in India, configuring regional targeting and multilingual WhatsApp response scripts in Tamil, Telugu, Hindi, Kannada, and Malayalam where required.",
  },
  {
    question: "How do you handle lead qualification on WhatsApp?",
    answer:
      "We set up automated conversational trees that collect requirements, budget, or location immediately, sending only verified prospects directly to your sales team. Unqualified leads are nurtured with drip sequences until they are ready.",
  },
  {
    question: "Can we hire GENZ UV for a single service or must we bundle?",
    answer:
      "You can pick individual services such as Website Development or WhatsApp Automation, or engage our complete Growth System pipeline. Most clients start with one channel and expand once they see ROI.",
  },
  {
    question: "What are your typical pricing structures?",
    answer:
      "We offer transparent monthly retainers for ongoing marketing management starting at ₹25,000/month, and fixed-scope milestone pricing for website and automation infrastructure. No hidden setup fees, no long-term lock-in.",
  },
  {
    question: "How will our team communicate with GENZ UV day to day?",
    answer:
      "You get a dedicated WhatsApp group with our execution team alongside structured bi-weekly review calls on Google Meet. You will also receive a live dashboard link so you can check campaign performance anytime without asking us.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "No. We work on a month-to-month basis after an initial 90-day onboarding phase. The 90 days give us enough time to set up tracking, test audiences, and optimize campaigns to a stable cost-per-lead. After that, you can pause or cancel with 15 days notice.",
  },
  {
    question: "What is the minimum ad budget you recommend?",
    answer:
      "For Meta and Google Ads, we recommend a minimum of ₹15,000 to ₹25,000 per month in ad spend to gather statistically significant data. Our management fee is separate and covers strategy, creative, targeting, and weekly optimization.",
  },
  {
    question: "Who owns the ad accounts, website, and data?",
    answer:
      "You do. All Meta Business Manager accounts, Google Ads accounts, website source code, domain, hosting, CRM data, and WhatsApp Business API credentials belong to you from day one. If we part ways, you take everything with you.",
  },
  {
    question: "How do you report on campaign performance?",
    answer:
      "You receive a weekly WhatsApp summary with key metrics — spend, leads, cost-per-lead, and conversion rate — plus a detailed monthly report with trend analysis and next-month recommendations. No vanity metrics, only numbers tied to revenue.",
  },
  {
    question: "Can you work with our existing website and social media?",
    answer:
      "Absolutely. We audit your current assets first and recommend improvements. If your website converts well, we will run ads to it as-is. If it is leaking leads, we will propose specific landing page changes before spending a single rupee on ads.",
  },
  {
    question: "What happens during the onboarding phase?",
    answer:
      "Week 1 is discovery — we learn your business, competitors, and ideal customer. Week 2 is setup — tracking pixels, CRM integration, WhatsApp flows, and ad account configuration. Weeks 3 and 4 are launch and initial optimization. By day 30, you should see your first batch of qualified leads.",
  },
];

const WHATSAPP_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919566180862"}`;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
      const lastIndex = FAQ_ITEMS.length - 1;
      let targetIndex: number | null = null;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          targetIndex = index === lastIndex ? 0 : index + 1;
          break;
        case "ArrowUp":
          e.preventDefault();
          targetIndex = index === 0 ? lastIndex : index - 1;
          break;
        case "Home":
          e.preventDefault();
          targetIndex = 0;
          break;
        case "End":
          e.preventDefault();
          targetIndex = lastIndex;
          break;
      }

      if (targetIndex !== null) {
        document.getElementById(`faq-btn-${targetIndex}`)?.focus();
      }
    },
    []
  );

  return (
    <section
      id="faq"
      className="w-full bg-[#F5F3EF] px-6 py-12 sm:py-16 md:px-12 lg:px-16"
    >
      <div className="mx-auto max-w-[1240px] rounded-[20px] border border-[#E5E0D8] bg-[#FCFBF8] p-6 shadow-xs sm:p-8 md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:grid-rows-[auto_1fr] md:gap-10 lg:gap-14">
          <div className="md:col-span-5 md:col-start-1 md:row-start-1">
            <h2 className="max-w-[360px] font-serif text-3xl font-normal leading-[1.1] tracking-tight text-[#19181A] sm:text-4xl">
              Questions Business Owners Ask
            </h2>
            <p className="mt-4 max-w-[310px] text-sm leading-relaxed text-[#615F5B]">
              Quick answers before you get in touch. Cannot find your answer?
              Message us on WhatsApp.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6 md:row-span-2 md:row-start-1">
            <div className="divide-y divide-[#E8E4DD] border-t border-[#E8E4DD]">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                const btnId = `faq-btn-${index}`;
                const panelId = `faq-panel-${index}`;

                return (
                  <div key={btnId}>
                    <h3>
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpenIndex(isOpen ? null : index)
                        }
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="flex w-full items-center justify-between gap-4 rounded-sm py-3 text-left text-sm font-medium text-[#19181A] transition-colors hover:text-[#615F5B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#19181A] sm:py-3.5"
                      >
                        <span>{item.question}</span>
                        <svg
                          aria-hidden="true"
                          className={`h-3.5 w-3.5 shrink-0 text-[#817B72] transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path
                            d="m5 7.5 5 5 5-5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      className="grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <div className="max-w-[620px] pb-3 pr-7 text-sm leading-relaxed text-[#615F5B] sm:pb-4">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp (opens in a new tab)"
            className="mt-0 inline-flex w-fit items-center gap-2 rounded-sm bg-[#1EA952] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#189146] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1EA952] md:col-span-5 md:col-start-1 md:row-start-2 md:self-end"
          >
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15c-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.2 8.2 0 0 1 2.42 5.83c-.01 4.54-3.71 8.23-8.26 8.23Zm4.53-6.14c-.25-.12-1.48-.73-1.71-.81-.22-.08-.39-.12-.56.13-.17.25-.66.83-.81 1-.15.17-.3.19-.55.07-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.57-.43-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.68.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.79 2.73 4.33 3.83.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.09.15-1.2-.06-.11-.31-.3-.56-.42Z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}