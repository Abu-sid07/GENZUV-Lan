import Image from "next/image";

interface Project {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  href?: string;
  isWide: boolean;
}

const projects: Project[] = [
  {
    title: "Al Amanath English Academy",
    description:
      "Built the official website and launched Meta lead-gen campaigns that brought 47 admission enquiries in the first week at ₹62 per lead.",
    bgColor: "bg-[#4a8a82]",
    image: "/project/al-amanath.png",
    href: "https://al-amanath-academy.vercel.app/",
    isWide: true,
  },
  {
    title: "Stylish English Academy",
    description:
      "Website, WhatsApp admission bot, and Instagram growth strategy — student registrations up 60% quarter-over-quarter.",
    bgColor: "bg-[#d4603a]",
    image: "/project/stylish-english.png",
    href: "https://stylish-eng-hub.in/",
    isWide: false,
  },
  {
    title: "Stream Co",
    description:
      "Real-time analytics dashboard with live KPI tracking, reducing the client's weekly reporting time from 6 hours to 20 minutes.",
    bgColor: "bg-[#2878cc]",
    image: "/project/stream-co.png",
    isWide: false,
  },
  {
    title: "Nirvanous Wellness",
    description:
      "End-to-end booking platform with integrated payment gateway and automated WhatsApp appointment reminders — 35% fewer no-shows.",
    bgColor: "bg-[#5a3fd6]",
    image: "/project/nirvanous.png",
    isWide: true,
  },
  {
    title: "Urban Bites Cloud Kitchen",
    description:
      "Google Ads + Swiggy/Zomato listing optimization that cut cost-per-order from ₹180 to ₹54 within 30 days of campaign launch.",
    bgColor: "bg-[#c44536]",
    image: "/project/urban-bites.png",
    href: "https://urbanbites.in/",
    isWide: false,
  },
  {
    title: "GreenLeaf Dental Clinic",
    description:
      "Local SEO and Google Business Profile overhaul — went from page 3 to the top-3 map pack for 'dentist near me' in 8 weeks.",
    bgColor: "bg-[#2d8a6e]",
    image: "/project/greenleaf-dental.png",
    href: "https://greenleafdental.co.in/",
    isWide: true,
  },
  {
    title: "FitZone Gym Chain",
    description:
      "WhatsApp re-engagement funnel that recovered 230 expired memberships in Q1, generating ₹4.6L in renewed subscriptions.",
    bgColor: "bg-[#e07b39]",
    image: "/project/fitzone.png",
    isWide: true,
  },
  {
    title: "Prestige Interiors",
    description:
      "Portfolio website with 3D room visualizer and Meta lead forms — shortened their average sales cycle from 45 days to 18.",
    bgColor: "bg-[#6b5b7b]",
    image: "/project/prestige-interiors.png",
    href: "https://prestigeinteriors.in/",
    isWide: false,
  },
];

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="border-b border-[#D9D3C5] bg-[#FAF8F5] py-24 text-[#171717] sm:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-12 lg:px-16">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl">
              Creative Solutions To{" "}
              <br className="hidden sm:inline" />
              Improve Your Business
            </h2>
            <p className="mt-4 text-base text-[#615F5B] sm:text-lg">
              A selection of recent work across web development, paid ads,
              automation, and local SEO.
            </p>
          </div>
          <a
            href="#portfolio-projects"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#171717] px-8 text-sm font-medium text-white transition hover:-translate-y-1 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
          >
            View Portfolio
          </a>
        </div>

        <div
          id="portfolio-projects"
          className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8"
        >
          {projects.map((project) => {
            const gridSpan = project.isWide
              ? "md:col-span-7"
              : "md:col-span-5";

            const cardContent = (
              <>
                <div className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/40 via-black/20 to-transparent p-8 sm:p-10">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/95 sm:text-base">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex w-full justify-center overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    width={800}
                    height={500}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </>
            );

            const cardClass = `group relative flex h-[380px] flex-col justify-between overflow-hidden rounded-[2rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[450px] lg:h-[480px] ${project.bgColor} ${gridSpan}`;

            return project.href ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} website (opens in a new tab)`}
                className={`block ${cardClass}`}
              >
                {cardContent}
              </a>
            ) : (
              <div key={project.title} className={cardClass}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}