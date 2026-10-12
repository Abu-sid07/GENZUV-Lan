"use client";

import { motion } from "motion/react";

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
            <img src={testimonial.image} alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-200" />
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
    image: "https://cdn.21st.dev/assets/mirror/7c/7c408d5bb79392ba04b0b8a6294b4eee47a16ec377d3dae0c3108e918864bfad.jpg",
    name: "Khaja Sir",
    role: "English Fluency Guide",
  },
  {
    text: "Stunning visuals and fluid animations make the website memorable, while effortless enrollment encourages students to get started.",
    image: "https://cdn.21st.dev/assets/mirror/71/716cfb40836039a4e9e34d89320b6398ba7871ea7882e32b7397029586f6dda7.jpg",
    name: "Noorul Ameen",
    role: "Supporting Staff",
  },
  {
    text: "The clean layout makes every course easy to discover, and the seamless registration process creates a delightful experience.",
    image: "https://cdn.21st.dev/assets/mirror/7a/7ae9db9990bb424cc1cf68b6af248e7b88e7add27109a6d951eb5b4f881eda98.jpg",
    name: "Abdullah",
    role: "Current Student",
  },
  {
    text: "The modern design and intuitive navigation make exploring courses enjoyable, while registration takes only minutes without hassle.",
    image: "https://cdn.21st.dev/assets/mirror/d1/d1db668ef30403e132bab1de4720f1c9159e8ba03dc0f3d65d5bf95f3985b80a.jpg",
    name: "Musthakeem",
    role: "Old Batch Student",
  },
  {
    text: "Beautiful UI and smooth animations create an engaging experience, while the simple enrollment process makes registration effortless.",
    image: "https://cdn.21st.dev/assets/mirror/9e/9ef716cb49c8a7e58c27a65358d91e806a1d4c8579a128772a5d9d09d62cb113.jpg",
    name: "Kabeer Sir",
    role: "Academy Coordinator",
  },
  {
    text: "The organized layout and attractive design make course details easy to understand, creating a smooth registration experience.",
    image: "https://cdn.21st.dev/assets/mirror/7f/7f2f1b6a4c09f5092437fe960232360d1e2dcf7a198c8580f3c5478c7b2d9386.jpg",
    name: "Ahamed Rizwan",
    role: "Student",
  },
  {
    text: "The professional design, smooth transitions, and simple navigation help students explore courses and begin learning confidently.",
    image: "https://cdn.21st.dev/assets/mirror/f2/f25b1b7a6a351c0f748d81bf4fcaf8c5a2f8ed036563c2693d4c1ca3718d9d5d.jpg",
    name: "Ibrahim Farook",
    role: "Parent",
  },
  {
    text: "Beautiful visuals and seamless interactions create a polished experience, making course discovery and enrollment simple and enjoyable.",
    image: "https://cdn.21st.dev/assets/mirror/41/417105f5784df0a25c3486becfe5c967d448e3c98b3c0231ef4ea0c59d27cb4b.jpg",
    name: "mohammed Haneef",
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