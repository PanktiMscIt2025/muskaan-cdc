"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-pink via-brand-purple to-brand-blue p-12 sm:p-16 text-center text-white"
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="text-6xl mb-5">🌟</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 leading-tight"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Ready to Take the{" "}
              <span className="text-yellow-300">First Step?</span>
            </h2>
            <p className="text-white/85 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Every child deserves a chance to grow. Let's talk about how
              Muskaan can support your child's unique journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white text-brand-pink font-black text-lg hover:bg-yellow-50 hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Book a Free Consultation ✨
              </Link>
              <a
                href="mailto:muskaan.cdc22@gmail.com"
                className="px-8 py-4 rounded-full border-2 border-white/60 text-white font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-200"
              >
                Email Us Directly →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
