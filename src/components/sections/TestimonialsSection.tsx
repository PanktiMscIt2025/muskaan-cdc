"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Parent of Aryan, 9",
    role: "School Readiness Program",
    quote:
      "Muskaan has transformed our son's confidence. When he started, he would cry every morning. Now he walks in with a smile. The team's patience and dedication are beyond words.",
    color: "from-pink-100 to-rose-50",
    accent: "text-brand-pink",
  },
  {
    name: "Parent of Priya, 13",
    role: "Special Education & ADL",
    quote:
      "We tried many places, but Muskaan truly understands our daughter. She has learned to make her bed, pack her bag, and even helps in the kitchen now. We couldn't be more grateful.",
    color: "from-purple-100 to-violet-50",
    accent: "text-brand-purple",
  },
  {
    name: "Parent of Rohan, 17",
    role: "Vocational Skills Program",
    quote:
      "The vocational training at Muskaan opened doors we never thought possible. Rohan is now doing an internship and talks about his future career. It's a miracle we thank every day.",
    color: "from-blue-100 to-cyan-50",
    accent: "text-brand-blue",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-yellow-100 text-brand-yellow text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            Parent Stories
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Words From{" "}
            <span className="gradient-text-warm">Our Families</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className={`bg-gradient-to-br ${testimonials[current].color} rounded-3xl p-8 sm:p-12 text-center`}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-xl sm:text-2xl font-bold text-gray-800 leading-relaxed mb-8 italic"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className={`font-black text-lg ${testimonials[current].accent}`} style={{ fontFamily: "var(--font-nunito)" }}>
                  {testimonials[current].name}
                </p>
                <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-pink hover:bg-pink-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === current ? "w-6 h-3 bg-brand-pink" : "w-3 h-3 bg-pink-200"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-brand-pink hover:bg-pink-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
