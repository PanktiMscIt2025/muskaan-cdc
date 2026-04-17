"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-pink-100 text-brand-pink text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            Our Story
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            We Believe Every Child{" "}
            <span className="gradient-text">Can Soar</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Muskaan Child Development Center was born from a simple belief — that
            with the right support, compassion, and opportunity, every child can
            grow into a confident and independent adult.
          </p>

          {/* Decorative caterpillar → butterfly visual */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="text-4xl">🐛</span>
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-brand-pink"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
            <span className="text-4xl">🦋</span>
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
