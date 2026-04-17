"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "Day 1",
    title: "Muskaan is Founded",
    desc: "Started with a small group of children and a big dream — to give every child the support they deserve.",
    icon: "🌱",
    color: "bg-green-100",
    accent: "border-brand-green",
  },
  {
    year: "Growing",
    title: "Programs Expanded",
    desc: "Added special education, NIOS guidance, vocational training, and ADL programs based on family needs.",
    icon: "📚",
    color: "bg-blue-100",
    accent: "border-brand-blue",
  },
  {
    year: "Community",
    title: "Real-World Learning",
    desc: "Launched community outings, bringing learning into parks, markets, and public spaces.",
    icon: "🌍",
    color: "bg-purple-100",
    accent: "border-brand-purple",
  },
  {
    year: "Today",
    title: "150+ Children & Growing",
    desc: "Proudly supporting over 150 children and families — with new programs and partnerships on the horizon.",
    icon: "🦋",
    color: "bg-pink-100",
    accent: "border-brand-pink",
  },
];

export default function JourneySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-cream" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-orange-100 text-brand-orange text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Our Journey
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            How We Got{" "}
            <span className="gradient-text-warm">Here</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-pink via-brand-purple to-brand-blue -translate-x-0.5 hidden sm:block" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`flex flex-col sm:flex-row gap-6 items-start ${
                  i % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div
                    className={`${m.color} border-l-4 ${m.accent} rounded-2xl p-6 card-hover ${
                      i % 2 === 1 ? "sm:text-right sm:border-l-0 sm:border-r-4" : ""
                    }`}
                  >
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1 block">
                      {m.year}
                    </span>
                    <h3
                      className="text-xl font-black text-gray-800 mb-2"
                      style={{ fontFamily: "var(--font-nunito)" }}
                    >
                      {m.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden sm:flex w-16 items-center justify-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-brand-pink flex items-center justify-center text-2xl shadow-md z-10">
                    {m.icon}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
