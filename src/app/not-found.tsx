import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found | Muskaan CDC" };

export default function NotFound() {
  return (
    <div className="min-h-screen hero-gradient flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl mb-6 float-anim">🦋</div>
      <h1
        className="text-6xl font-black text-gray-900 mb-3"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        <span className="gradient-text">404</span>
      </h1>
      <h2
        className="text-2xl font-black text-gray-700 mb-4"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        Oops! Page not found.
      </h2>
      <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
        This page seems to have flown away like a butterfly. Let's get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold shadow-lg hover:scale-105 transition-all"
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="px-8 py-3 rounded-full border-2 border-brand-pink text-brand-pink font-bold hover:bg-pink-50 transition-all"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
