"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    id: "school-readiness",
    icon: "🏫",
    title: "School Readiness",
    badge: "Foundation",
    badgeColor: "from-pink-500 to-rose-400",
    bg: "bg-pink-50",
    border: "border-pink-200",
    accentText: "text-brand-pink",
    tagline: "Preparing children to thrive in school",
    desc: "Our School Readiness program equips children with the essential cognitive, social, emotional, and self-care skills they need before stepping into a classroom.",
    outcomes: [
      "Following classroom routines and instructions",
      "Basic literacy and numeracy foundations",
      "Social interaction with peers",
      "Emotional regulation and self-control",
      "Personal hygiene and independence",
    ],
    forWhom: "Children aged 3–8 preparing for mainstream or special school",
    sessionType: "1-on-1 & Small Group",
  },
  {
    id: "special-education",
    icon: "📖",
    title: "Special Education",
    badge: "Core Program",
    badgeColor: "from-purple-500 to-violet-400",
    bg: "bg-purple-50",
    border: "border-purple-200",
    accentText: "text-brand-purple",
    tagline: "Personalised academic support at every level",
    desc: "Individualised academic programmes designed around each child's specific learning profile, abilities, and goals — covering reading, writing, maths, and comprehension.",
    outcomes: [
      "Personalised learning plans (IEPs)",
      "Reading, writing & numeracy skills",
      "Attention and focus development",
      "Learning strategy building",
      "Regular progress reviews with families",
    ],
    forWhom: "Children with learning disabilities, autism, intellectual disabilities, or developmental delays",
    sessionType: "1-on-1",
  },
  {
    id: "nios",
    icon: "🎓",
    title: "NIOS Guidance & Tutoring",
    badge: "Academic",
    badgeColor: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    border: "border-blue-200",
    accentText: "text-brand-blue",
    tagline: "Opening academic pathways for all learners",
    desc: "Dedicated support for the National Institute of Open Schooling curriculum — helping children pursue formal qualifications at their own pace, with specialised tutoring and exam preparation.",
    outcomes: [
      "Subject-wise NIOS tutoring",
      "Exam preparation & practice papers",
      "Assignment and project support",
      "Application and admission guidance",
      "Flexible pace — no age barriers",
    ],
    forWhom: "Adolescents and young adults who benefit from open schooling flexibility",
    sessionType: "1-on-1 & Group",
  },
  {
    id: "vocational",
    icon: "🛠️",
    title: "Vocational Skills & Career",
    badge: "Career Prep",
    badgeColor: "from-orange-500 to-amber-400",
    bg: "bg-orange-50",
    border: "border-orange-200",
    accentText: "text-brand-orange",
    tagline: "Building real skills for real opportunities",
    desc: "Hands-on training in practical vocational skills — from basic work readiness to internship placements and career exploration — preparing young adults for meaningful employment.",
    outcomes: [
      "Job readiness and workplace behaviour",
      "Internship opportunities",
      "Career exploration and guidance",
      "Interview and communication skills",
      "Self-advocacy in the workplace",
    ],
    forWhom: "Young adults aged 16+ ready to explore work and employment",
    sessionType: "Group & Individual",
  },
  {
    id: "creative",
    icon: "🎨",
    title: "Baking, Painting & Craft",
    badge: "Creative Arts",
    badgeColor: "from-green-500 to-emerald-400",
    bg: "bg-green-50",
    border: "border-green-200",
    accentText: "text-brand-green",
    tagline: "Learning through creativity and joy",
    desc: "Creative sessions in baking, painting, drawing, and crafts — building fine motor skills, patience, concentration, and self-expression in a joyful, pressure-free environment.",
    outcomes: [
      "Fine motor skill development",
      "Following multi-step instructions",
      "Creative expression and confidence",
      "Attention span and patience",
      "Potential pathway to vocational work",
    ],
    forWhom: "Children and young adults of all ages and abilities",
    sessionType: "Small Group",
  },
  {
    id: "computer",
    icon: "💻",
    title: "Basic Computer Skills",
    badge: "Digital",
    badgeColor: "from-teal-500 to-cyan-400",
    bg: "bg-teal-50",
    border: "border-teal-200",
    accentText: "text-brand-teal",
    tagline: "Digital literacy for today's world",
    desc: "An introduction to computers — keyboard, mouse, basic internet use, and digital communication — building essential skills for education, employment, and daily life.",
    outcomes: [
      "Keyboard and mouse proficiency",
      "Basic internet and email use",
      "Digital safety awareness",
      "Word processing basics",
      "Confidence with technology",
    ],
    forWhom: "Children and young adults aged 10+ with foundational literacy",
    sessionType: "Small Group",
  },
  {
    id: "adl",
    icon: "🌟",
    title: "Activities of Daily Living (ADLs)",
    badge: "Life Skills",
    badgeColor: "from-yellow-500 to-orange-400",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    accentText: "text-brand-yellow",
    tagline: "Building independence, one skill at a time",
    desc: "Structured teaching of everyday life skills — personal hygiene, dressing, meal preparation, money handling, and more — empowering children to manage their own daily lives.",
    outcomes: [
      "Personal hygiene and grooming",
      "Dressing and self-care routines",
      "Basic cooking and meal prep",
      "Money handling and budgeting basics",
      "Time management and daily routines",
    ],
    forWhom: "Children and young adults at any level of independence",
    sessionType: "1-on-1 & Group",
  },
  {
    id: "community",
    icon: "🌍",
    title: "Community Outings",
    badge: "Social Skills",
    badgeColor: "from-rose-500 to-pink-400",
    bg: "bg-rose-50",
    border: "border-rose-200",
    accentText: "text-brand-pink",
    tagline: "Learning where life actually happens",
    desc: "Supervised outings to real-world settings — parks, shops, public transport, restaurants, and community centres — putting classroom skills into practice in meaningful ways.",
    outcomes: [
      "Navigating public spaces confidently",
      "Social interaction with the community",
      "Real-world money and transaction skills",
      "Public transport independence",
      "Building community belonging",
    ],
    forWhom: "All children and young adults with supervised support",
    sessionType: "Small Group",
  },
];

export default function ProgramsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {programs.map((prog, i) => (
          <motion.div
            key={prog.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className={`${prog.bg} ${prog.border} border rounded-3xl p-8 card-hover`}
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left — Title block */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl flex-shrink-0">{prog.icon}</div>
                    <div>
                      <span
                        className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${prog.badgeColor} text-white mb-2`}
                      >
                        {prog.badge}
                      </span>
                      <h3
                        className="text-2xl font-black text-gray-900"
                        style={{ fontFamily: "var(--font-nunito)" }}
                      >
                        {prog.title}
                      </h3>
                      <p className={`text-sm font-semibold ${prog.accentText} mt-1`}>
                        {prog.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{prog.desc}</p>
                </div>
                <div className="mt-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="font-bold">Who it's for:</span>
                    <span>{prog.forWhom}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="font-bold">Session type:</span>
                    <span>{prog.sessionType}</span>
                  </div>
                </div>
              </div>

              {/* Right — Outcomes */}
              <div className="lg:col-span-2">
                <h4
                  className="font-black text-gray-700 text-sm uppercase tracking-wider mb-4"
                >
                  What Your Child Will Gain
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {prog.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="flex items-start gap-3 bg-white/70 rounded-xl p-3"
                    >
                      <span className={`text-lg font-black ${prog.accentText} leading-none mt-0.5`}>✓</span>
                      <span className="text-sm text-gray-700 leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 text-sm font-bold ${prog.accentText} hover:underline`}
                  >
                    Enquire about this program →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
