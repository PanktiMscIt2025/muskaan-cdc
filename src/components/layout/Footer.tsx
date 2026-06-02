import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="relative w-44 h-16 mb-4">
              <Image
                src="/logo.png"
                alt="Muskaan Child Development Center"
                fill
                sizes="176px"
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-sm">
              Committed to helping every child grow into an independent and
              respected adult — through personalized support, structured
              learning, and a compassionate approach.
            </p>
            <p className="text-brand-pink font-bold text-lg italic">
              "Growing Skills. Growing Confidence."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Our Programs", href: "/programs" },
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-pink text-sm transition-colors"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-brand-pink mt-0.5 shrink-0" />
                <a
                  href="mailto:muskaan.cdc22@gmail.com"
                  className="hover:text-brand-pink transition-colors break-all"
                >
                  muskaan.cdc22@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-brand-pink mt-0.5 shrink-0" />
                <a href="tel:+918777024470" className="hover:text-brand-pink transition-colors">
                  +91 87770 24470
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-brand-pink mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=2nd+floor+Binali+Complex+Solas+Hospital+225+132+Feet+Ring+Rd+Naranpura+Ahmedabad+Gujarat+380063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-pink transition-colors leading-relaxed"
                >
                  2nd Floor, Binali Complex, Solas Hospital, 132 Feet Ring Rd, Naranpura, Ahmedabad, Gujarat 380063
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Muskaan Child Development Center. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-brand-pink fill-brand-pink" /> for every child
          </p>
        </div>
      </div>
    </footer>
  );
}
