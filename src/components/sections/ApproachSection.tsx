"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const approaches = [
  {
    icon: "👤",
    title: "1-on-1 Sessions",
    desc: "Focused, personalised attention where therapist and child work together at the child's own pace.",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: "👥",
    title: "Small Group Skills",
    desc: "Collaborative learning in small, nurturing groups — building social skills, friendships, and teamwork.",
    gradient: "from-purple-500 to-violet-400",
  },
  {
    icon: "🕐",
    title: "Flexible Timings",
    desc: "Sessions scheduled around your family's needs — mornings, afternoons, or half days available.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: "🎮",
    title: "Play-Based Learning",
    desc: "Learning through play — games, activities, and creative exploration that make growth joyful.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: "🍞",
    title: "Vocational Activities",
    desc: "Baking, painting, crafts, and computer skills — building real capabilities for real life.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: "🚌",
    title: "Community Outings",
    desc: "Supervised trips to parks, shops, and public places — applying skills in real-world settings.",
    gradient: "from-teal-500 to-cyan-400",
  },
];

export default function ApproachSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="approach" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-100 text-brand-blue text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            How We Work
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Our{" "}
            <span className="gradient-text">Approach</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We don't just teach — we experience, connect, and grow together.
            Every method is chosen with your child's best interest at heart.
          </p>
        </motion.div>

        {/* Approach Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-4 bg-gray-50 hover:bg-white rounded-2xl p-6 card-hover border border-transparent hover:border-pink-100"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <div>
                <h3
                  className="font-black text-gray-800 text-lg mb-1"
                  style={{ fontFamily: "var(--font-nunito)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue p-0.5"
        >
          <div className="bg-white rounded-3xl px-8 py-10 sm:px-12 text-center">
            <div className="text-5xl mb-4">🌈</div>
            <blockquote
              className="text-2xl sm:text-3xl font-black text-gray-800 mb-3"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              "We go beyond academics to prepare children for a{" "}
              <span className="gradient-text">confident, independent,</span> and{" "}
              <span className="gradient-text-warm">socially connected</span> future."
            </blockquote>
            <p className="text-brand-pink font-semibold">— Muskaan Child Development Center</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
