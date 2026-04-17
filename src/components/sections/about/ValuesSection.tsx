"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    icon: "💛",
    title: "Compassion",
    desc: "Every child and family is treated with warmth, patience, and genuine care — always.",
    gradient: "from-yellow-400 to-orange-400",
    bg: "bg-yellow-50",
  },
  {
    icon: "🎯",
    title: "Individuality",
    desc: "We honour each child's unique pace, learning style, and strengths. No two plans are the same.",
    gradient: "from-pink-500 to-rose-400",
    bg: "bg-pink-50",
  },
  {
    icon: "🌱",
    title: "Growth",
    desc: "We celebrate every milestone — no matter how small — as a meaningful step forward.",
    gradient: "from-green-500 to-emerald-400",
    bg: "bg-green-50",
  },
  {
    icon: "🤝",
    title: "Inclusion",
    desc: "We create a community where every child belongs, is respected, and can thrive.",
    gradient: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
  },
  {
    icon: "🔬",
    title: "Evidence-Based",
    desc: "Our programs are grounded in proven therapeutic and educational methodologies.",
    gradient: "from-purple-500 to-violet-400",
    bg: "bg-purple-50",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Partnership",
    desc: "We work closely with families — because parents are the most important part of the team.",
    gradient: "from-teal-500 to-cyan-400",
    bg: "bg-teal-50",
  },
];

export default function ValuesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-green-100 text-brand-green text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            What We Stand For
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Our Core{" "}
            <span className="gradient-text">Values</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Everything we do is guided by these principles — they shape how we
            teach, care, and grow together.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${val.bg} rounded-3xl p-7 card-hover`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${val.gradient} flex items-center justify-center text-2xl mb-5 shadow-md`}
              >
                {val.icon}
              </div>
              <h3
                className="text-xl font-black text-gray-800 mb-2"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {val.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
