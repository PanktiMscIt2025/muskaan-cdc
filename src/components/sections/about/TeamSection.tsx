"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const team = [
  {
    name: "Centre Director",
    role: "Founder & Lead Therapist",
    emoji: "👩‍💼",
    desc: "Dedicated to creating an inclusive, nurturing environment where every child is empowered to reach their fullest potential.",
    color: "from-pink-100 to-rose-50",
    accent: "text-brand-pink",
  },
  {
    name: "Special Educator",
    role: "Academic & Life Skills Lead",
    emoji: "👩‍🏫",
    desc: "Specialist in designing personalised learning plans that bridge academics and real-world independence.",
    color: "from-purple-100 to-violet-50",
    accent: "text-brand-purple",
  },
  {
    name: "Vocational Trainer",
    role: "Skills & Career Development",
    emoji: "👨‍🍳",
    desc: "Guides children through vocational training — baking, crafts, computer skills — building pathways to employment.",
    color: "from-blue-100 to-cyan-50",
    accent: "text-brand-blue",
  },
  {
    name: "Support Staff",
    role: "Care & Community Team",
    emoji: "🤗",
    desc: "Our warm, patient support team ensures every child feels safe, valued, and celebrated every single day.",
    color: "from-green-100 to-emerald-50",
    accent: "text-brand-green",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-purple-100 text-brand-purple text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            The People Behind Muskaan
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Meet Our{" "}
            <span className="gradient-text">Dedicated Team</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            A passionate group of professionals committed to making a real
            difference in every child's life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-gradient-to-br ${member.color} rounded-3xl p-7 text-center card-hover`}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl mx-auto mb-5 shadow-md">
                {member.emoji}
              </div>
              <h3
                className={`font-black text-lg ${member.accent} mb-1`}
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                {member.name}
              </h3>
              <p className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          * Team profiles will be updated with photos and names shortly.
        </motion.p>
      </div>
    </section>
  );
}
