"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const images = Array.from({ length: 24 }, (_, i) => ({
  src: `/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Muskaan CDC activity ${i + 1}`,
}));

const categories = ["All", "Activities", "Learning", "Events", "Community"];

export default function GalleryPageClient() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((n) => (n! - 1 + images.length) % images.length);
  const next = () => setLightbox((n) => (n! + 1) % images.length);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="hero-gradient pt-32 pb-16 text-center relative overflow-hidden">
          <div className="absolute top-10 right-10 w-56 h-56 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block bg-pink-100 text-brand-pink text-sm font-bold px-4 py-1.5 rounded-full mb-5">
                Our Moments
              </span>
              <h1
                className="text-5xl sm:text-6xl font-black text-gray-900 mb-5"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                Life at{" "}
                <span className="gradient-text">Muskaan</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
                Every photo tells a story of growth, joy, and a child discovering
                what they&apos;re truly capable of.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 50" fill="none">
              <path d="M0 25C360 50 1080 0 1440 25V50H0V25Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white py-8 sticky top-16 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-pink-50 hover:text-brand-pink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
              {images.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <ZoomIn size={16} />
                      <span>View</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-cream">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-br from-brand-pink to-brand-purple rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">📸</div>
                <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "var(--font-nunito)" }}>
                  Want to See More?
                </h2>
                <p className="text-white/85 mb-6">
                  Visit us in person — meet our team, see our space, and watch our children shine.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 rounded-full bg-white text-brand-pink font-black hover:bg-yellow-50 hover:scale-105 transition-all shadow-lg"
                >
                  Book a Visit ✨
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                width={1200}
                height={900}
                className="max-h-[85vh] w-auto object-contain rounded-xl"
              />
              <p className="text-white/60 text-center text-sm mt-3">
                {lightbox + 1} / {images.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
