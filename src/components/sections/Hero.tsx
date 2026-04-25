"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const photos = [
  { src: "/gallery/gallery-01.jpg", rotate: "-rotate-3", delay: 0.4, top: "top-0", z: "z-30" },
  { src: "/gallery/gallery-05.jpg", rotate: "rotate-2", delay: 0.55, top: "top-28", z: "z-20" },
  { src: "/gallery/gallery-09.jpg", rotate: "-rotate-1", delay: 0.7, top: "top-56", z: "z-10" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-20">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text Content */}
          <div>
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
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl"
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
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-lg shadow-xl shadow-pink-300/40 hover:shadow-pink-400/60 hover:scale-105 transition-all duration-200 text-center"
              >
                Book a Free Consultation ✨
              </Link>
              <Link
                href="/programs"
                className="px-8 py-4 rounded-full bg-white border-2 border-brand-pink text-brand-pink font-bold text-lg hover:bg-pink-50 hover:scale-105 transition-all duration-200 shadow-md text-center"
              >
                Explore Programs →
              </Link>
            </motion.div>

            {/* Quick highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: "🎯", text: "Personalized Plans" },
                { icon: "🤝", text: "1-on-1 Sessions" },
                { icon: "📚", text: "NIOS Guidance" },
                { icon: "🌟", text: "Life Skills" },
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

          {/* RIGHT — 3 Stacked Photos */}
          <div className="relative hidden lg:block h-[520px]">
            {photos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: photo.delay }}
                className={`absolute ${photo.top} ${photo.z} ${
                  i === 0 ? "left-8 w-56 h-44" :
                  i === 1 ? "left-40 w-64 h-48" :
                  "left-16 w-60 h-44"
                }`}
              >
                <div className={`${photo.rotate} rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-full h-full`}>
                  <Image
                    src={photo.src}
                    alt={`Muskaan CDC activity ${i + 1}`}
                    fill
                    sizes="300px"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
                {/* Colored dot accent */}
                <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-4 border-white shadow-md ${
                  i === 0 ? "bg-brand-pink" : i === 1 ? "bg-brand-purple" : "bg-brand-green"
                }`} />
              </motion.div>
            ))}

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute bottom-4 right-0 bg-white rounded-2xl shadow-xl px-5 py-3 border border-pink-100 z-40"
            >
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">Children supported</p>
              <p className="text-2xl font-black gradient-text" style={{ fontFamily: "var(--font-nunito)" }}>150+ 🌟</p>
            </motion.div>
          </div>

          {/* Mobile — single photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:hidden rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video"
          >
            <Image
              src="/gallery/gallery-01.jpg"
              alt="Muskaan CDC"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
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
