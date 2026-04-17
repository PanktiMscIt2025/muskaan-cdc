"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MissionVision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-pink to-brand-purple p-0.5"
          >
            <div className="bg-white rounded-3xl p-8 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-pink to-brand-purple flex items-center justify-center text-2xl mb-5 shadow-lg">
                🎯
              </div>
              <h2
                className="text-2xl font-black text-gray-900 mb-4"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To empower every child — regardless of ability — with the skills,
                confidence, and opportunities they need to live an independent,
                fulfilling, and socially connected life.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                We do this through personalized programs, compassionate care, and
                a deep commitment to each child's individual journey.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-blue to-brand-teal p-0.5"
          >
            <div className="bg-white rounded-3xl p-8 h-full">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center text-2xl mb-5 shadow-lg">
                🌟
              </div>
              <h2
                className="text-2xl font-black text-gray-900 mb-4"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A world where every child with special needs is seen, heard, and
                celebrated — where differences are embraced as strengths, and
                every child has a path to a dignified, independent adulthood.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                We envision communities that are truly inclusive, where our
                children are active, respected members of society.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 bg-gradient-to-r from-soft-pink via-soft-purple to-blue-50 rounded-3xl p-8 sm:p-10 text-center"
        >
          <div className="text-4xl mb-4">💬</div>
          <blockquote
            className="text-xl sm:text-2xl font-black text-gray-800 leading-relaxed"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            "At Muskaan, we go beyond academics to prepare children for a{" "}
            <span className="gradient-text">confident, independent,</span> and{" "}
            <span className="gradient-text-warm">socially connected</span> future."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
