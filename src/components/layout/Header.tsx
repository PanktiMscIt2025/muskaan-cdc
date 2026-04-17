"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Our Approach", href: "/#approach" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-pink-100/50"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-40 h-14">
              <Image
                src="/logo.png"
                alt="Muskaan Child Development Center"
                fill
                sizes="160px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-brand-pink hover:bg-pink-50 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+918777024470"
              className="flex items-center gap-2 text-sm font-semibold text-brand-purple hover:text-brand-pink transition-colors"
            >
              <Phone size={16} />
              <span>+91 87770 24470</span>
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white text-sm font-bold shadow-lg shadow-pink-200 hover:shadow-pink-300 hover:scale-105 transition-all duration-200"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-brand-pink hover:bg-pink-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-pink-100 px-4 pb-4 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-brand-pink hover:bg-pink-50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple text-white text-sm font-bold text-center shadow-lg"
            onClick={() => setIsOpen(false)}
          >
            Enquire Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
