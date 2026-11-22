const services = [
  {
    number: "01",
    title: "Digital Marketing",
    description:
      "Strategic multi-channel execution that gets your business found by customers actively searching for your service.",
    tags: ["PAID EXECUTION", "ON PAGE EXPERIENCE"],
    span: "md:col-span-7",
  },
  {
    number: "02",
    title: "Meta & Google Ads",
    description:
      "Targeted paid campaigns optimized to deliver direct WhatsApp chats and verifiable phone enquiries.",
    tags: ["PPC MEDIA", "COST PER LEAD"],
    span: "md:col-span-5",
  },
  {
    number: "03",
    title: "SEO",
    description:
      "Rank your business on Google when nearby customers look for exactly what you offer.",
    tags: ["LOCAL SEARCH", "GMB RANK"],
    span: "md:col-span-5",
  },
  {
    number: "04",
    title: "Lead Generation",
    description:
      "Dedicated acquisition funnels that filter out time-wasters and route genuine prospective clients.",
    tags: ["QUALIFIED PROSPECTS", "CONVERSION FUNNEL"],
    span: "md:col-span-7",
  },
  {
    number: "05",
    title: "Website Development",
    description:
      "Fast, responsive websites designed to turn anonymous casual visitors into direct WhatsApp enquiries.",
    tags: ["FAST LOADING", "MOBILE FIRST"],
    span: "md:col-span-7",
  },
  {
    number: "06",
    title: "AI Automation",
    description:
      "Automated lead capture, data logging and immediate follow-ups without manual spreadsheets.",
    tags: ["CRM SYNC", "ZERO DELAY"],
    span: "md:col-span-5",
  },
  {
    number: "07",
    title: "WhatsApp Automation",
    description:
      "Automated greeting messages, appointment booking flows and catalogue sharing directly in chat.",
    tags: ["INSTANT REPLIES", "OFFICIAL API"],
    span: "md:col-span-5",
  },
  {
    number: "08",
    title: "Social Media Marketing",
    description:
      "Consistent, brand-aligned presence across Instagram and LinkedIn that keeps your business top of mind.",
    tags: ["ENGAGEMENT", "CALENDAR DRIVEN"],
    span: "md:col-span-7",
  },
  {
    number: "09",
    title: "Branding",
    description:
      "Distinct visual guidelines, logos and assets that make your company instantly memorable and trustworthy.",
    tags: ["IDENTITY SYSTEM", "STYLE MANUAL"],
    span: "md:col-span-7",
  },
  {
    number: "10",
    title: "Content Creation",
    description:
      "Sharp graphics, high-converting video formats and written messaging built to answer real questions.",
    tags: ["CREATIVES", "CLEAR COPY"],
    span: "md:col-span-5",
  },
];

const outcomes = [
  {
    value: "WhatsApp-first",
    label: "Enquiries land where your team already replies",
  },
  {
    value: "Qualified",
    label: "Filters remove tyre-kickers before they reach sales",
  },
  {
    value: "Tracked",
    label: "Every lead is logged, sourced, and followed up",
  },
  {
    value: "Compounding",
    label: "Paid, search, and content reinforce the same offer",
  },
];

const steps = [
  {
    number: "01",
    title: "Audit the demand",
    description:
      "We map how customers search, click, and enquire today — including wasted spend, slow pages, and unanswered chats.",
  },
  {
    number: "02",
    title: "Build the path",
    description:
      "Ads, search, site, and WhatsApp are wired into one route from first impression to a booked conversation.",
  },
  {
    number: "03",
    title: "Launch and qualify",
    description:
      "Campaigns go live with clear offers, tracking, and filters so only serious prospects reach your team.",
  },
  {
    number: "04",
    title: "Report what converts",
    description:
      "Weekly reviews focus on cost per enquiry, reply speed, and booked work — not vanity metrics.",
  },
];

function ServiceCard({
  number,
  title,
  description,
  tags,
  span,
}: (typeof services)[number]) {
  return (
    <article
      className={`group flex min-h-[312px] flex-col justify-between rounded-[20px] border border-[#D9D3C5] bg-[#FBFAF6] p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#B9AE99] hover:bg-white hover:shadow-[0_16px_36px_rgba(41,39,34,0.10)] motion-reduce:transition-none sm:p-8 ${span}`}
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <span className="font-heading text-3xl leading-none text-[#19181A] sm:text-[38px]">
            {number}
          </span>
          <div className="flex flex-wrap justify-end gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[#D9D3C5] bg-[#F0EDE5] px-2.5 py-1.5 text-[9px] font-semibold leading-none tracking-wide text-[#292722] sm:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h2 className="mt-5 font-sans text-xl font-bold leading-tight text-[#19181A] sm:text-[23px]">
          {title}
        </h2>
        <p className="mt-2 max-w-[480px] text-sm leading-[1.55] text-[#68656D] sm:text-base">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-[#D9D3C5] pt-4 sm:pt-5">
        <span className="text-sm font-semibold text-[#19181A] sm:text-base">
          Enquire Now
        </span>
        <span
          aria-hidden="true"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#19181A] text-white transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none sm:h-14 sm:w-14"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M5.5 14.5 14 6m0 0H7m7 0v7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </article>
  );
}

export default function ServiceCards() {
  return (
    <section
      id="services"
      className="border-b border-[#D9D3C5] bg-[#FAF8F5] px-6 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-12 max-w-[760px] sm:mb-16">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-[#8A8478]">
            WHAT WE RUN
          </p>
          <h2 className="font-heading text-3xl leading-[1.08] tracking-[-0.035em] text-[#292722] sm:text-4xl">
            Services Built for Measurable
            <br className="hidden sm:block" /> Revenue
          </h2>
          <p className="mt-4 max-w-[680px] text-sm leading-relaxed text-[#77736B] sm:text-base">
            From paid acquisition and organic search to automated WhatsApp
            workflows, we design end-to-end systems that deliver qualified
            enquiries directly to your sales team. Each service can stand
            alone. Together they close the gaps between ad click, website
            visit, and a conversation your team can actually close.
          </p>
        </header>

        <dl className="mb-10 grid grid-cols-1 gap-px overflow-hidden rounded-[20px] border border-[#D9D3C5] bg-[#D9D3C5] sm:mb-14 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item) => (
            <div key={item.value} className="bg-[#FBFAF6] px-5 py-5 sm:px-6">
              <dt className="font-heading text-xl text-[#19181A] sm:text-2xl">
                {item.value}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-[#68656D]">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>

        <div className="mt-16 border-t border-[#D9D3C5] pt-12 sm:mt-20 sm:pt-16">
          <div className="mb-8 max-w-[640px] sm:mb-10">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-[#8A8478]">
              HOW ENGAGEMENTS RUN
            </p>
            <h3 className="font-heading text-2xl leading-tight tracking-[-0.03em] text-[#292722] sm:text-3xl">
              One system, not ten disconnected retainers
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#77736B] sm:text-base">
              Most businesses already pay for ads, a website, and social posts.
              The leak is usually between them. We connect the offer, the
              page, the chat, and the follow-up so spend turns into booked work.
            </p>
          </div>

          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-[20px] border border-[#D9D3C5] bg-[#FBFAF6] p-5 sm:p-6"
              >
                <span className="font-heading text-2xl text-[#19181A]">
                  {step.number}
                </span>
                <h4 className="mt-4 text-base font-bold text-[#19181A]">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-[1.55] text-[#68656D]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[20px] border border-[#D9D3C5] bg-[#19181A] px-6 py-8 text-white sm:mt-12 sm:flex-row sm:items-center sm:px-8 sm:py-10">
          <div className="max-w-[640px]">
            <h3 className="font-heading text-2xl leading-tight tracking-[-0.03em] sm:text-3xl">
              Tell us where enquiries stall
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#C8C2B6] sm:text-base">
              Share your current ads, site, and WhatsApp flow. We will point to
              the service — or the combination — most likely to raise qualified
              conversations this month.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#19181A]"
          >
            Enquire Now
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#19181A] text-white"
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                <path
                  d="M5.5 14.5 14 6m0 0H7m7 0v7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}