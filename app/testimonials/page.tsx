"use client";

import { motion } from "motion/react";
import Image from "next/image";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

const TestimonialsColumn = ({
  testimonials,
  duration,
  className = "",
}: {
  testimonials: Testimonial[];
  duration: number;
  className?: string;
}) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      animate={{ y: ["0%", "-50%"] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-6"
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <article
          key={`${testimonial.name}-${index}`}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
        >
          <p className="text-slate-700">{testimonial.text}</p>
          <div className="mt-5 flex items-center gap-3">
            <Image
              src={testimonial.image}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 shrink-0 rounded-full object-cover object-center ring-2 ring-slate-200"
            />
            <div>
              <p className="font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </div>
        </article>
      ))}
    </motion.div>
  </div>
);

const testimonials: Testimonial[] = [
  {
    text: "TThe elegant interface and engaging animations enhance learning, while clear navigation makes finding courses incredibly easy.",
    image: "/feedback/William%20Richard%20Forbish.jpg",
    name: "S.M Khaja Mohideen",
    role: "English Fluency Guide",
  },
  {
    text: "Stunning visuals and fluid animations make the website memorable, while effortless enrollment encourages students to get started.",
    image: "/feedback/Image%20Icon%20Male%20_%20Evolve%20Tradings%20Private%20Limited%20(India)%20_%20RRK%20Digiverse.jpg",
    name: "Noorul Ameen",
    role: "Supporting Staff",
  },
  {
    text: "The clean layout makes every course easy to discover, and the seamless registration process creates a delightful experience.",
    image: "/feedback/812266482822759492.jpg",
    name: "Ahmed Rizwan",
    role: "Current Student",
  },
  {
    text: "The modern design and intuitive navigation make exploring courses enjoyable, while registration takes only minutes without hassle.",
    image: "/feedback/802344489885222663.jpg",
    name: "Musthakeem",
    role: "Old Batch Student",
  },
  {
    text: "Beautiful UI and smooth animations create an engaging experience, while the simple enrollment process makes registration effortless.",
    image: "/feedback/William%20Richard%20Forbish.jpg",
    name: "Mr.Kabeer",
    role: "Academy Coordinator",
  },
  {
    text: "The organized layout and attractive design make course details easy to understand, creating a smooth registration experience.",
    image: "/feedback/Image%20Icon%20Male%20_%20Evolve%20Tradings%20Private%20Limited%20(India)%20_%20RRK%20Digiverse.jpg",
    name: "Abdullah",
    role: "Student",
  },
  {
    text: "The professional design, smooth transitions, and simple navigation help students explore courses and begin learning confidently.",
    image: "/feedback/812266482822759492.jpg",
    name: "Ibrahim Farook",
    role: "Parent",
  },
  {
    text: "Beautiful visuals and seamless interactions create a polished experience, making course discovery and enrollment simple and enjoyable.",
    image: "/feedback/802344489885222663.jpg",
    name: "Mohamed Haneef",
    role: "English professor",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 bg-[#FAF8F5] text-slate-900">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-1 text-sm font-medium text-slate-700">
              Testimonials
            </div>
          </div>

          <h2 className="mt-5 text-xl font-bold tracking-tighter text-slate-900 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            What our users say
          </h2>
          <p className="mt-5 text-center text-slate-600">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;