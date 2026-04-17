"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  { icon: "💛", title: "Compassion", desc: "Every child is treated with warmth, patience, and unconditional care." },
  { icon: "🎯", title: "Individuality", desc: "We honour each child's unique pace, strengths, and learning style." },
  { icon: "🌱", title: "Growth", desc: "We celebrate every milestone — big or small — as a step forward." },
  { icon: "🤝", title: "Inclusion", desc: "We create a community where every child belongs and thrives." },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-pink-100 text-brand-pink text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Who We Are
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-5"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            More Than a{" "}
            <span className="gradient-text">Learning Center</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We are a family — dedicated professionals, loving staff, and
            empowered children working together toward a brighter future.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8 min-h-72 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4 float-anim">🦋</div>
                <p className="text-2xl font-black text-brand-purple" style={{ fontFamily: "var(--font-nunito)" }}>
                  Every child can
                </p>
                <p className="text-3xl font-black gradient-text" style={{ fontFamily: "var(--font-nunito)" }}>
                  SOAR!
                </p>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-brand-pink/20 rounded-full" />
              <div className="absolute bottom-4 left-4 w-10 h-10 bg-brand-blue/20 rounded-full" />
              <div className="absolute top-1/2 right-8 w-6 h-6 bg-brand-yellow/30 rounded-full" />
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong className="text-brand-pink">Muskaan Child Development Center</strong>, we are committed to
              helping every child grow into an independent and respected adult.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through personalized support, structured learning, and a compassionate approach, we focus on building
              skills, confidence, and meaningful life outcomes for each and every child in our care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We go beyond academics — preparing children for a{" "}
              <strong className="text-brand-purple">confident, independent, and socially connected future</strong> through
              real-world experiences, community outings, and practical life skills.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Special Education", "NIOS Support", "Life Skills", "Vocational Training", "Community Outings"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 text-brand-purple text-sm font-semibold px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="bg-gradient-to-br from-soft-pink to-soft-purple rounded-2xl p-5 text-center card-hover"
            >
              <div className="text-4xl mb-3">{val.icon}</div>
              <h4 className="font-black text-gray-800 mb-2" style={{ fontFamily: "var(--font-nunito)" }}>
                {val.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
