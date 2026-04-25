"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const leftPhotos = [
  { src: "/gallery/gallery-01.jpg", delay: 0.35 },
  { src: "/gallery/gallery-04.jpg", delay: 0.5 },
  { src: "/gallery/gallery-07.jpg", delay: 0.65 },
];

const rightPhotos = [
  { src: "/gallery/gallery-10.jpg", delay: 0.45 },
  { src: "/gallery/gallery-13.jpg", delay: 0.6 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-5 gap-10 items-center">

          {/* LEFT TEXT — 3 cols */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200 rounded-full px-5 py-2 mb-7 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">
                Personalized Learning & Life Skills
              </span>
            </motion.div>

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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-9 max-w-xl"
            >
              At Muskaan Child Development Center, we help every child grow into
              an <strong className="text-brand-purple">independent</strong> and{" "}
              <strong className="text-brand-pink">respected adult</strong> — through
              compassionate support, real-life learning, and personalized care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
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

          {/* RIGHT PHOTOS — 2 cols of photos */}
          <div className="hidden lg:grid lg:col-span-2 grid-cols-2 gap-3 h-[540px]">

            {/* Left photo column — 3 photos */}
            <div className="flex flex-col gap-3">
              {leftPhotos.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: photo.delay }}
                  className={`relative rounded-2xl overflow-hidden border-4 border-white shadow-xl flex-1 ${
                    i === 0 ? "flex-[1.4]" : "flex-1"
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={`Muskaan activity ${i + 1}`}
                    fill
                    sizes="160px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority={i === 0}
                  />
                  {/* Colored corner dot */}
                  <div className={`absolute top-2 right-2 w-4 h-4 rounded-full ${
                    i === 0 ? "bg-brand-pink" : i === 1 ? "bg-brand-purple" : "bg-brand-green"
                  } shadow-md`} />
                </motion.div>
              ))}
            </div>

            {/* Right photo column — 2 photos + stat card */}
            <div className="flex flex-col gap-3 mt-6">
              {rightPhotos.map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: photo.delay }}
                  className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl flex-1"
                >
                  <Image
                    src={photo.src}
                    alt={`Muskaan activity ${i + 4}`}
                    fill
                    sizes="160px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-2 right-2 w-4 h-4 rounded-full ${
                    i === 0 ? "bg-brand-orange" : "bg-brand-blue"
                  } shadow-md`} />
                </motion.div>
              ))}

              {/* Stat card at bottom */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white rounded-2xl shadow-xl p-4 text-center border border-pink-100"
              >
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Children Supported
                </p>
                <p className="text-3xl font-black gradient-text" style={{ fontFamily: "var(--font-nunito)" }}>
                  150+
                </p>
                <p className="text-xl mt-0.5">🌟</p>
              </motion.div>
            </div>
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
