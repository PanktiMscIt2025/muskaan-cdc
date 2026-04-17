"use client";

import { motion } from "framer-motion";

export default function ProgramsHero() {
  return (
    <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
      <div className="absolute top-10 left-10 w-56 h-56 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-purple-100 text-brand-purple text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            What We Offer
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Programs Built for{" "}
            <span className="gradient-text">Every Child</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From foundational school readiness to real-world vocational training —
            every program at Muskaan is designed around your child's unique needs,
            pace, and potential.
          </p>

          {/* Program count badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["8 Programs", "1-on-1 & Group", "Flexible Timings", "All Age Groups"].map((tag) => (
              <span
                key={tag}
                className="bg-white/80 backdrop-blur-sm border border-pink-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
