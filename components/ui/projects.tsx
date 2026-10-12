const projects = [
  {
    title: "Al Amanath English Academy",
    description:
      "Developed the official academy website and implemented digital marketing strategies to strengthen online presence and student engagement.",
    bgColor: "bg-[#80b3ad]",
    image: "/project/Al-Amanath.png",
    href: "https://al-amanath-academy.vercel.app/",
    isWide: true,
  },
  {
    title: "Stylish English Academy",
    description:
      "Developed the academy website, implemented WhatsApp automation for student communication, and managed Instagram marketing campaigns to improve student engagement and brand visibility.",
    bgColor: "bg-[#f48c68]",
    image:
      "https://cdn.21st.dev/assets/localized/3f52b612abfb1c1fe0d488e46d2ee18266f68d5215a1a8b98c588aa5b4e0dfb4.png",
    href: "https://stylish-eng-hub.in/",
    isWide: false,
  },
  {
    title: "Stream Co",
    description: "Better a diamond with a flaw than a pebble without one.",
    bgColor: "bg-[#3c9bf2]",
    image:
      "https://cdn.21st.dev/assets/localized/d8bddc6a71e5c9991c88edeb5eb231813cae0ac23b1cadc12e66fd8f29454040.png",
    isWide: false,
  },
  {
    title: "Nirvanous",
    description:
      "Better a diamond with a flaw than a pebble without one. It's about creating yourself.",
    bgColor: "bg-[#7a60f9]",
    image:
      "https://cdn.21st.dev/assets/localized/f06acde1d097f0af17ee009592294311872511c272ba7a85e3517d789748b742.png",
    isWide: true,
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="border-b border-[#D9D3C5] bg-[#FAF8F5] py-24 text-slate-900 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              Creative Solutions To <br className="hidden sm:inline" />
              Improve Your Business
            </h2>
            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              Only those who risk going too far can possibly find out how far
              one can go.
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
            const cardClass = `group relative flex h-[380px] flex-col justify-between overflow-hidden rounded-[2rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[450px] lg:h-[480px] ${project.bgColor}`;
            const gridSpan = project.isWide
              ? "md:col-span-7"
              : "md:col-span-5";
            const content = (
              <>
                <div className="absolute top-8 right-8 left-8 z-20 flex flex-col gap-2 sm:top-10 sm:right-10 sm:left-10">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto flex w-full justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </>
            );

            return project.href ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} website (opens in a new tab)`}
                className={`block ${gridSpan}`}
              >
                <article className={cardClass}>{content}</article>
              </a>
            ) : (
              <article
                key={project.title}
                className={`${cardClass} ${gridSpan}`}
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
