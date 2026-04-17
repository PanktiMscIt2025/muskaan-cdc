"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    icon: "🏫",
    title: "School Readiness",
    desc: "Preparing children with the cognitive, social, and self-care skills they need to thrive in a school environment.",
    color: "from-pink-500 to-rose-400",
    bg: "bg-pink-50",
    border: "border-pink-200",
    badge: "Foundation",
  },
  {
    icon: "📖",
    title: "Special Education",
    desc: "Individualized academic support tailored to each child's unique learning needs and pace.",
    color: "from-purple-500 to-violet-400",
    bg: "bg-purple-50",
    border: "border-purple-200",
    badge: "Core Program",
  },
  {
    icon: "🎓",
    title: "NIOS Guidance & Tutoring",
    desc: "Dedicated support for the National Institute of Open Schooling curriculum — opening academic pathways for all.",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "Academic",
  },
  {
    icon: "🛠️",
    title: "Vocational Skills",
    desc: "Hands-on training in practical skills with internship opportunities and career exploration for adulthood.",
    color: "from-orange-500 to-amber-400",
    bg: "bg-orange-50",
    border: "border-orange-200",
    badge: "Career Prep",
  },
  {
    icon: "🎨",
    title: "Baking, Painting & Craft",
    desc: "Creative expression through art, baking, and crafts — building confidence, patience, and fine motor skills.",
    color: "from-green-500 to-emerald-400",
    bg: "bg-green-50",
    border: "border-green-200",
    badge: "Creative Arts",
  },
  {
    icon: "💻",
    title: "Basic Computer Skills",
    desc: "Digital literacy essentials — keyboard, mouse, browsing — preparing children for the modern world.",
    color: "from-teal-500 to-cyan-400",
    bg: "bg-teal-50",
    border: "border-teal-200",
    badge: "Digital",
  },
  {
    icon: "🌟",
    title: "Activities of Daily Living",
    desc: "Building independence through practical life skills — personal hygiene, cooking basics, and self-management.",
    color: "from-yellow-500 to-orange-400",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    badge: "Life Skills",
  },
  {
    icon: "🌍",
    title: "Community Outings",
    desc: "Real-world experiences through supervised outings — shopping, parks, public transport — for social growth.",
    color: "from-rose-500 to-pink-400",
    bg: "bg-rose-50",
    border: "border-rose-200",
    badge: "Social",
  },
];

export default function ProgramsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="py-20 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-purple-100 text-brand-purple text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Our Programs
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Everything Your Child{" "}
            <span className="gradient-text">Needs to Grow</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From school readiness to real-life independence — our programs are
            designed to meet every child exactly where they are.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`${prog.bg} ${prog.border} border rounded-3xl p-6 card-hover group relative overflow-hidden`}
            >
              {/* Badge */}
              <span
                className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${prog.color} text-white`}
              >
                {prog.badge}
              </span>

              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {prog.icon}
              </div>

              {/* Content */}
              <h3
                className="font-black text-gray-800 text-lg mb-2 leading-snug"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {prog.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{prog.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-lg shadow-xl shadow-pink-300/40 hover:shadow-pink-400/60 hover:scale-105 transition-all duration-200"
          >
            Find the Right Program for Your Child →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
