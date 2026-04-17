"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 150, suffix: "+", label: "Children Supported", color: "text-brand-pink", bg: "bg-pink-50", icon: "👶" },
  { value: 8, suffix: "+", label: "Programs Offered", color: "text-brand-purple", bg: "bg-purple-50", icon: "📚" },
  { value: 10, suffix: "+", label: "Years of Compassion", color: "text-brand-blue", bg: "bg-blue-50", icon: "💙" },
  { value: 100, suffix: "%", label: "Personalised Approach", color: "text-brand-green", bg: "bg-green-50", icon: "🌱" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${stat.bg} rounded-3xl p-6 text-center card-hover`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className={`text-4xl font-black ${stat.color} mb-1`} style={{ fontFamily: "var(--font-nunito)" }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
