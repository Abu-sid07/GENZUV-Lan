"use client";

import Link from "next/link";

const opportunities = [
  {
    type: "Internship",
    title: "Digital Marketing Intern",
    department: "Marketing",
    location: "Remote",
    description:
      "Learn to build brand visibility through social media strategy, content planning and digital campaigns.",
    skills: ["Social Media", "Content Strategy", "Meta Ads"],
  },
  {
    type: "Internship",
    title: "Web Development Intern",
    department: "Technology",
    location: "Remote",
    description:
      "Build modern, responsive websites and real-world digital experiences using modern web technologies.",
    skills: ["HTML & CSS", "JavaScript", "React / Next.js"],
  },
  {
    type: "Internship",
    title: "Video Editing Intern",
    department: "Creative",
    location: "Remote",
    description:
      "Create engaging reels, promotional videos and visual stories for growing brands.",
    skills: ["Video Editing", "Reels", "Creative Thinking"],
  },
  {
    type: "Internship",
    title: "AI Automation Intern",
    department: "Technology",
    location: "Remote",
    description:
      "Explore AI-powered workflows, business automation and intelligent customer engagement systems.",
    skills: ["AI Tools", "Automation", "Problem Solving"],
  },
];

const benefits = [
  {
    title: "Real-World Experience",
    description:
      "Work on actual client projects and meaningful business challenges.",
  },
  {
    title: "Continuous Learning",
    description:
      "Learn modern technologies, creative strategies and industry practices.",
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn directly from experienced professionals and team members.",
  },
  {
    title: "Flexible Environment",
    description:
      "Collaborate, experiment and grow in a flexible working environment.",
  },
];

const process = [
  ["01", "Apply", "Share your resume, portfolio and interests."],
  ["02", "Connect", "Get to know our team and share your ideas."],
  ["03", "Showcase", "Demonstrate your skills and creativity."],
  ["04", "Join Us", "Start your journey and grow with GENZ UV."],
];

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#19181A]">
      {/* Navigation */}
      

      {/* Hero */}
      <section className="w-full px-6 pb-16 pt-10 md:px-12 lg:px-16 lg:pt-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-[24px] border border-[#D9D3C5] bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full border border-[#D9D3C5] bg-[#EDE8DE] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#615F5B]">
                Careers at GENZ UV
              </span>

              <h1 className="mt-6 font-serif text-4xl font-normal leading-tight tracking-tight text-[#19181A] sm:text-5xl md:text-[58px] md:leading-[1.05]">
                Don&apos;t Just Find a Job.
                <br />
                <span className="text-[#7A766F]">Build Your Future.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#615F5B] sm:text-base">
                We&apos;re looking for creative thinkers, passionate learners
                and ambitious builders who want to make an impact in the
                digital world. Your next chapter starts here.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#openings"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#19181A] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-black"
                >
                  <span>Explore Opportunities</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </a>
                <a
                  href="mailto:genzuv0@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#3E3C38] bg-transparent px-6 py-3 text-sm font-medium text-[#19181A] transition-all duration-200 hover:bg-white/60"
                >
                  Send Your Resume
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#D9D3C5] pt-8 md:grid-cols-4">
              {[
                ["01", "Creative Thinking"],
                ["02", "Real Projects"],
                ["03", "Learn & Grow"],
                ["04", "Build Together"],
              ].map(([number, label]) => (
                <div key={number}>
                  <p className="font-serif text-3xl font-normal text-[#19181A]">
                    {number}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A766F]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Careers */}
      <section className="w-full px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A766F]">
                Why GENZ UV?
              </span>
              <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#19181A] sm:text-4xl md:text-[42px] md:leading-tight">
                Grow With People Who Think Beyond Limits.
              </h2>
            </div>

            <p className="text-sm leading-7 text-[#615F5B] sm:text-base">
              At GENZ UV, we combine creativity, marketing and technology to
              help businesses grow. We believe talented people grow faster
              when they experiment, collaborate and work on real challenges.
              Join us and turn your ideas into meaningful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A766F]">
              The Experience
            </span>
            <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#19181A] sm:text-4xl md:text-[42px]">
              More Than Just a Workplace.
            </h2>
            <p className="mt-3 text-sm text-[#615F5B] sm:text-base">
              An environment designed to help you discover your potential.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="rounded-[20px] border border-[#D9D3C5] bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3E3C38]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EDE8DE] font-serif text-base text-[#19181A]">
                  0{idx + 1}
                </div>
                <h3 className="mt-5 font-serif text-xl font-normal text-[#19181A]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#615F5B]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        id="openings"
        className="w-full px-6 py-16 md:px-12 lg:px-16"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A766F]">
                Opportunities
              </span>
              <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#19181A] sm:text-4xl md:text-[46px]">
                Find Your Role.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#615F5B]">
              Explore opportunities to learn, contribute and grow with our
              creative and technology teams.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {opportunities.map((job) => (
              <div
                key={job.title}
                className="group rounded-[20px] border border-[#D9D3C5] bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-[#3E3C38] md:p-8"
              >
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A766F]">
                        {job.department}
                      </span>
                      <span className="rounded-full border border-[#D9D3C5] bg-[#EDE8DE] px-2.5 py-0.5 text-[10px] font-semibold text-[#615F5B]">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-normal text-[#19181A]">
                      {job.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#615F5B]">
                      {job.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-[#EDE8DE] px-3 py-1.5 text-xs text-[#19181A]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 flex items-center gap-1.5 text-xs text-[#7A766F]">
                      <svg
                        className="h-3.5 w-3.5"
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
                      {job.location}
                    </p>
                  </div>

                  <a
                    href={`mailto:genzuv0@gmail.com?subject=${encodeURIComponent(
                      `Application for ${job.title}`
                    )}`}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#19181A] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-black"
                  >
                    <span>Apply Now</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[#615F5B]">
            Don&apos;t see your role?{" "}
            <a
              href="mailto:genzuv0@gmail.com?subject=General Career Application"
              className="font-semibold text-[#19181A] underline underline-offset-4 hover:text-black"
            >
              Send us your profile anyway.
            </a>
          </p>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="w-full px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-[24px] border border-[#D9D3C5] bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-10 lg:p-12">
            <div className="text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A766F]">
                Your Journey
              </span>
              <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#19181A] sm:text-4xl md:text-[42px]">
                How We Bring You Onboard.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {process.map(([number, title, description]) => (
                <div
                  key={number}
                  className="border-t-2 border-[#19181A] pt-5"
                >
                  <p className="font-serif text-3xl font-normal text-[#19181A]">
                    {number}
                  </p>
                  <h3 className="mt-4 font-serif text-xl font-normal text-[#19181A]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#615F5B]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="rounded-[24px] border border-[#D9D3C5] bg-[#EDE8DE] p-10 text-center shadow-sm sm:p-14 lg:p-16">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A766F]">
              Your Future Starts Here
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-normal tracking-tight text-[#19181A] sm:text-4xl md:text-[52px] md:leading-tight">
              Ready to Create Something Extraordinary?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#615F5B] sm:text-base">
              Bring your curiosity, creativity and ambition. Let&apos;s build
              something meaningful together.
            </p>

            <a
              href="mailto:genzuv0@gmail.com?subject=Career%20Application%20-%20GENZ%20UV"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#19181A] px-7 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-black"
            >
              <span>Let&apos;s Work Together</span>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      
    </main>
  );
}