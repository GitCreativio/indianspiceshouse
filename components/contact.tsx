// app/sections/ContactSection.tsx

"use client";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";

export default function ContactSection() {
 const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

  // CRITICAL: Use encodeURIComponent() for the entire message
  const text = encodeURIComponent(
    `Hello Indian spices house! 🌶️\n\n👤 Name: ${name}\n📱 Phone: ${phone}\n💬 Message: ${message}\n\nThank you!`
  );

  const whatsappNumber = "+919539769967"; // Your number (with country code, no +)

  // This will now work perfectly
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
};

  return (
    <section id="contact" className="py-20   bg-amber-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-sans md:text-5xl font-bold text-amber-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Have questions about our premium Indian spices? We'd love to hear
            from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Form */}
          <div className="order-2 md:order-1">
            <form
              onSubmit={handleWhatsAppSubmit}
              className="space-y-6 bg-white p-8 rounded-2xl  border border-amber-100"
            >
              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full text-black px-5 py-2 border-2 border-amber-200 rounded-xl focus:border-amber-600 focus:outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full text-black px-5 py-2 border-2 border-amber-200 rounded-xl focus:border-amber-600 focus:outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-amber-900 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full text-black px-5 py-2 border-2 border-amber-200 rounded-xl focus:border-amber-600 focus:outline-none transition resize-none"
                  placeholder="I'm interested in your Kashmiri Chilli Powder..."
                />
              </div>

              <button
                type="submit"
                className="w-full text-sm text-white bg-gradient-to-r bg-[#719a4b] font-bold py-5 rounded-xl hover:bg-[#74a843] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <Send size={20} />
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          {/* Right: Image + Social Icons */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden ">
              <Image
                src="/images/about1.jpg"
                alt="Premium Indian Spices"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Floating Social Icons */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/40 transition transform hover:scale-110"
                >
                  <Facebook className="text-white" size={28} />
                </a>
                <a
                  href="https://instagram.com/yourpage"
                  target="_blank"
                  className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/40 transition transform hover:scale-110"
                >
                  <Instagram className="text-white" size={28} />
                </a>
                <a
                  href="https://youtube.com/yourchannel"
                  target="_blank"
                  className="bg-white/20 backdrop-blur-md p-4 rounded-full hover:bg-white/40 transition transform hover:scale-110"
                >
                  <Youtube className="text-white" size={28} />
                </a>
              </div>

              {/* Decorative Badge */}
              <div className="absolute top-6 right-6 bg-amber-600 text-white px-6 py-3 rounded-full font-bold shadow-xl">
                100% Pure Spices
              </div>
            </div>
          </div>
        </div>
        {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-amber-100 p-5 rounded-xl text-center">
                <Phone className="mx-auto mb-2 text-amber-700" size={28} />
                <p className="text-sm font-bold text-amber-900">Call Us</p>
                <p className="text-xs text-amber-700">+91 95397 69967</p>
              </div>
              <div className="bg-amber-100 p-5 rounded-xl text-center">
                <Mail className="mx-auto mb-2 text-amber-700" size={28} />
                <p className="text-sm font-bold text-amber-900">Email</p>
                <p className="text-xs text-amber-700">info@indianspiceshouse.in</p>
              </div>
              <div className="bg-amber-100 p-5 rounded-xl text-center">
                <MapPin className="mx-auto mb-2 text-amber-700" size={28} />
                <p className="text-sm font-bold text-amber-900">Location</p>
                <p className="text-xs text-amber-700">Kerala, India</p>
              </div>
            </div>
      </div>
    </section>
  );
}
