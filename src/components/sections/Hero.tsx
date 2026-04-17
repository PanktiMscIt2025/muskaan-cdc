"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const emojis = ["🌟", "🦋", "🌈", "🎨", "🌱", "✨", "🎭", "🎵"];

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-20">
      {/* Floating Background Emojis */}
      {emojis.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl select-none pointer-events-none opacity-20"
          style={{
            top: `${10 + (i * 11) % 75}%`,
            left: `${5 + (i * 13) % 90}%`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Decorative Circles */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full px-5 py-2 mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">
              Personalized Learning & Life Skills
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Growing{" "}
            <span className="gradient-text">Skills.</span>
            <br />
            Growing{" "}
            <span className="gradient-text-warm">Confidence.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            At Muskaan Child Development Center, we help every child grow into
            an <strong className="text-brand-purple">independent</strong> and{" "}
            <strong className="text-brand-pink">respected adult</strong> — through
            compassionate support, real-life learning, and personalized care.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-lg shadow-xl shadow-pink-300/40 hover:shadow-pink-400/60 hover:scale-105 transition-all duration-200"
            >
              Book a Free Consultation ✨
            </Link>
            <Link
              href="/programs"
              className="px-8 py-4 rounded-full bg-white border-2 border-brand-pink text-brand-pink font-bold text-lg hover:bg-pink-50 hover:scale-105 transition-all duration-200 shadow-md"
            >
              Explore Programs →
            </Link>
          </motion.div>

          {/* Quick highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: "🎯", text: "Personalized Plans" },
              { icon: "🤝", text: "1-on-1 & Group Sessions" },
              { icon: "📚", text: "NIOS Guidance" },
              { icon: "🌟", text: "Life Skills & ADLs" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm border border-white"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#FFFDF7"
            fillOpacity="0.8"
          />
        </svg>
      </div>
    </section>
  );
}
