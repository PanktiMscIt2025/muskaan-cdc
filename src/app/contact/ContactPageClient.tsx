"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";

const schema = contactSchema;
type FormData = ContactFormData;

const concernOptions = [
  { value: "", label: "Select a concern / program of interest..." },
  { value: "school-readiness", label: "School Readiness" },
  { value: "special-education", label: "Special Education" },
  { value: "nios", label: "NIOS Guidance & Tutoring" },
  { value: "vocational", label: "Vocational Skills & Career" },
  { value: "adl", label: "Activities of Daily Living (ADLs)" },
  { value: "play-skills", label: "Play Skills (Baking, Painting, Craft)" },
  { value: "computer", label: "Basic Computer Skills" },
  { value: "community", label: "Community Outings & Social Skills" },
  { value: "other", label: "Other / Not Sure Yet" },
];

const timeOptions = [
  { value: "", label: "Preferred contact time (optional)" },
  { value: "morning", label: "Morning (9am – 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm – 4pm)" },
  { value: "evening", label: "Evening (4pm – 7pm)" },
  { value: "anytime", label: "Anytime" },
];

export default function ContactPageClient() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        const body = await res.json();
        setErrorMessage(body.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="hero-gradient py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto px-4"
          >
            <span className="inline-block bg-pink-100 text-brand-pink text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              Get In Touch
            </span>
            <h1
              className="text-4xl sm:text-5xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Let&apos;s Start Your Child&apos;s{" "}
              <span className="gradient-text">Journey Together</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Fill in the form below and our team will reach out to schedule a
              free, no-obligation consultation.
            </p>
          </motion.div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left — Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-6"
              >
                <div>
                  <h2
                    className="text-2xl font-black text-gray-800 mb-2"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Contact Information
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Have a question or want to know more? Reach us directly or
                    fill in the enquiry form.
                  </p>
                </div>

                {[
                  {
                    icon: <Mail size={20} />,
                    label: "Email",
                    value: "muskaan.cdc22@gmail.com",
                    href: "mailto:muskaan.cdc22@gmail.com",
                    color: "text-brand-pink",
                    bg: "bg-pink-50",
                  },
                  {
                    icon: <Phone size={20} />,
                    label: "Phone",
                    value: "+91 87770 24470",
                    href: "tel:+918777024470",
                    color: "text-brand-purple",
                    bg: "bg-purple-50",
                  },
                  {
                    icon: <MapPin size={20} />,
                    label: "Location",
                    value: "2nd Floor, Binali Complex, Solas Hospital, 132 Feet Ring Rd, Naranpura, Ahmedabad, Gujarat 380063",
                    href: "https://maps.google.com/?q=2nd+floor+Binali+Complex+Solas+Hospital+225+132+Feet+Ring+Rd+Naranpura+Ahmedabad+Gujarat+380063",
                    color: "text-brand-blue",
                    bg: "bg-blue-50",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className={`w-11 h-11 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className={`font-semibold ${item.color} hover:underline break-all text-sm`}>
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-gray-700 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Info Card */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-100 rounded-2xl p-5 mt-6">
                  <div className="text-3xl mb-3">🌟</div>
                  <h4 className="font-black text-gray-800 mb-2" style={{ fontFamily: "var(--font-nunito)" }}>
                    Free Initial Consultation
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Your first session is always free. We&apos;d love to understand your
                    child&apos;s needs and share how we can help — with no commitment required.
                  </p>
                </div>

                {/* Programs quick list */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Our Programs
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["School Readiness", "Special Ed", "NIOS", "Vocational", "ADLs", "Community"].map((p) => (
                      <span key={p} className="text-xs bg-gray-100 text-gray-600 font-semibold px-3 py-1 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right — Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-3"
              >
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center gap-5"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      >
                        <CheckCircle size={64} className="text-green-500" />
                      </motion.div>
                      <h3
                        className="text-2xl font-black text-gray-800"
                        style={{ fontFamily: "var(--font-nunito)" }}
                      >
                        Enquiry Sent Successfully! 🎉
                      </h3>
                      <p className="text-gray-600 max-w-sm leading-relaxed">
                        Thank you for reaching out. Our team will get back to you
                        within 24 hours to schedule your free consultation.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold hover:scale-105 transition-transform"
                      >
                        Send Another Enquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="bg-gray-50 rounded-3xl p-8 space-y-5"
                      noValidate
                    >
                      <h3
                        className="text-xl font-black text-gray-800 mb-6"
                        style={{ fontFamily: "var(--font-nunito)" }}
                      >
                        Enquiry Form
                      </h3>

                      {/* Row 1: Parent + Child Name */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Parent / Guardian Name <span className="text-brand-pink">*</span>
                          </label>
                          <input
                            {...register("parentName")}
                            type="text"
                            placeholder="Your full name"
                            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm form-input transition-all ${
                              errors.parentName ? "border-red-400" : "border-gray-200"
                            }`}
                          />
                          {errors.parentName && (
                            <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Child&apos;s Name <span className="text-brand-pink">*</span>
                          </label>
                          <input
                            {...register("childName")}
                            type="text"
                            placeholder="Child's first name"
                            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm form-input transition-all ${
                              errors.childName ? "border-red-400" : "border-gray-200"
                            }`}
                          />
                          {errors.childName && (
                            <p className="text-red-500 text-xs mt-1">{errors.childName.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 2: Age + Email */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Child&apos;s Age <span className="text-brand-pink">*</span>
                          </label>
                          <input
                            {...register("childAge")}
                            type="text"
                            placeholder="e.g. 8 years"
                            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm form-input transition-all ${
                              errors.childAge ? "border-red-400" : "border-gray-200"
                            }`}
                          />
                          {errors.childAge && (
                            <p className="text-red-500 text-xs mt-1">{errors.childAge.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Your Email <span className="text-brand-pink">*</span>
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            placeholder="you@example.com"
                            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm form-input transition-all ${
                              errors.email ? "border-red-400" : "border-gray-200"
                            }`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Row 3: Phone + Preferred Time */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Phone Number <span className="text-brand-pink">*</span>
                          </label>
                          <input
                            {...register("phone")}
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm form-input transition-all ${
                              errors.phone ? "border-red-400" : "border-gray-200"
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Preferred Contact Time
                          </label>
                          <select
                            {...register("preferredTime")}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm form-input transition-all text-gray-600"
                          >
                            {timeOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Concern Dropdown */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Area of Concern / Program Interest <span className="text-brand-pink">*</span>
                        </label>
                        <select
                          {...register("concern")}
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-sm form-input transition-all text-gray-600 ${
                            errors.concern ? "border-red-400" : "border-gray-200"
                          }`}
                        >
                          {concernOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        {errors.concern && (
                          <p className="text-red-500 text-xs mt-1">{errors.concern.message}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Your Message <span className="text-brand-pink">*</span>
                        </label>
                        <textarea
                          {...register("message")}
                          rows={4}
                          placeholder="Tell us about your child and what kind of support you're looking for..."
                          className={`w-full px-4 py-3 rounded-xl border bg-white text-sm form-input transition-all resize-none ${
                            errors.message ? "border-red-400" : "border-gray-200"
                          }`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      {/* Error Banner */}
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm"
                        >
                          <AlertCircle size={18} />
                          <span>{errorMessage}</span>
                        </motion.div>
                      )}

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                        whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-pink-300/40 hover:shadow-pink-400/60 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            Sending Enquiry...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Send My Enquiry
                          </>
                        )}
                      </motion.button>

                      <p className="text-xs text-gray-400 text-center">
                        We respect your privacy. Your information is only used to respond to your enquiry.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
