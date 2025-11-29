// app/components/Footer.tsx

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        
        {/* Logo & Tagline */}
        <div className="space-y-8">
          <Link href="/" className="inline-block">
            <div className="relative w-28 h-28 mx-auto">
              <Image
                src="/images/logo.jpeg"
                alt="Indian Spices House"
                fill
                className="object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </Link>

          <p className="text-amber-600 font-mono text-sm leading-relaxed max-w-sm mx-auto font-light">
            Handcrafted, small-batch spices from our family to your kitchen.
          </p>
        </div>

        {/* Contact Info – Centered & Spacious */}
        <div className="mt-12 space-y-6">
          <h4 className="text-lg font-medium text-gray-900 tracking-wider">
            Get in Touch
          </h4>

          <div className="space-y-5 text-gray-700 text-sm">
            <a
              href="mailto:hello@indianspices.in"
              className="flex items-center justify-center gap-3 hover:text-amber-700 transition-colors"
            >
              <Mail size={18} className="text-amber-600" />
              <span>hello@indianspices.in</span>
            </a>

            <a
              href="tel:+919539769967"
              className="flex items-center justify-center gap-3 hover:text-amber-700 transition-colors"
            >
              <Phone size={18} className="text-amber-600" />
              <span>+91 95397 69967</span>
            </a>

            <div className="flex items-center justify-center gap-3">
              <MapPin size={18} className="text-amber-600" />
              <span>Kochi, Kerala, India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 pt-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-amber-700 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-amber-700 transition-colors duration-300"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Credit */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 tracking-wider">
            © {new Date().getFullYear()} Indian Spices House. All rights reserved.{" "}
            <span className="text-gray-400">•</span> Crafted by{" "}
            <a
              href="https://creativio.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-amber-700 transition-colors"
            >
              Creativio Media & Advertising
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}