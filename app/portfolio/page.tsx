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
      "Developed the official academy website and implemented digital marketing strategies to strengthen online presence and student engagement.",
    bgColor: "bg-[#4a8a82]", // darkened for contrast
    image: "/project/Al-Amanath.png",
    href: "https://al-amanath-academy.vercel.app/",
    isWide: true,
  },
  {
    title: "Stylish English Academy",
    description:
      "Developed the academy website, implemented WhatsApp automation for student communication, and managed Instagram marketing campaigns to improve student engagement and brand visibility.",
    bgColor: "bg-[#d4603a]", // darkened for contrast
    image: "/project/stylish-english.png", // self-hosted
    href: "https://stylish-eng-hub.in/",
    isWide: false,
  },
  {
    title: "Stream Co",
    description:
      "Built a real-time streaming dashboard with live analytics, reducing client reporting time by 60%.", // ← real copy
    bgColor: "bg-[#2878cc]", // darkened
    image: "/project/stream-co.png",
    isWide: false,
  },
  {
    title: "Nirvanous",
    description:
      "Designed and developed a wellness brand platform with integrated booking, increasing monthly conversions by 35%.", // ← real copy
    bgColor: "bg-[#5a3fd6]", // darkened
    image: "/project/nirvanous.png",
    isWide: true,
  },
];

export default function Projects() {
  return (
    <section
      id="portfolio"
      className="border-b border-[#D9D3C5] bg-[#FAF8F5] py-24 text-slate-900 sm:py-32"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-12 lg:px-16">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Creative Solutions To{" "}
              <br className="hidden sm:inline" />
              Improve Your Business
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              A selection of recent work across web development, automation, and
              digital marketing.
            </p>
          </div>
          <a
            href="#portfolio-projects"
            className="inline-flex h-11 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-medium text-white transition hover:-translate-y-1 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
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
                {/* Text overlay with gradient for guaranteed contrast */}
                <div className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/40 via-black/20 to-transparent p-8 sm:p-10">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/95 sm:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Project screenshot */}
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