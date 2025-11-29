// app/components/Header.tsx
"use client";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  // Desktop: Smooth sliding indicator (NO JERK)
  useLayoutEffect(() => {
    const activeBtn = navRef.current?.querySelector(
      `[data-id="${activeSection}"]`
    ) as HTMLElement;

    if (!activeBtn || !indicatorRef.current || !navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();

    indicatorRef.current.style.width = `${btnRect.width}px`;
    indicatorRef.current.style.transform = `translateX(${btnRect.left - navRect.left}px)`;
  }, [activeSection]);

  // Scroll background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking on scroll
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));

    const onScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false); // Close mobile menu on click
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-10">
            <Image
              src="/images/logo.jpeg"
              width={60}
              height={60}
              alt="Logo"
              className=" ring-4 ring-amber-100 shadow-lg object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 relative" ref={navRef}>
            {navItems.map((item) => (
              <button
                key={item.id}
                data-id={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-lg  transition-colors duration-300 px-2 py-2
                  ${activeSection === item.id ? "text-amber-700" : "text-gray-700 hover:text-amber-600"}
                `}
              >
                {item.name}
              </button>
            ))}

            {/* Sliding Indicator */}
            <span
              ref={indicatorRef}
              className="absolute bottom-1 left-0 h-0.5 bg-amber-700 rounded-full transition-all duration-500 ease-out pointer-events-none"
              style={{ width: "0px", transform: "translateX(0px)" }}
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 p-2 rounded-lg "
          >
            {mobileMenuOpen ? <X size={28} className="text-amber-700" /> : <Menu size={28} className="text-amber-700" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-amber-50 to-orange-100 shadow-2xl z-50 transform transition-transform duration-500 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center pt-32 space-y-10">
          <Image
            src="/images/logo.jpeg"
            width={120}
            height={120}
            alt="Logo"
            className=" ring-2 ring-amber-200"
          />

          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xl font-bold tracking-wider transition-all duration-500 transform ${
                activeSection === item.id
                  ? "text-amber-800 scale-110"
                  : "text-gray-700 hover:text-amber-600"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(50px)",
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="block mx-auto mt-2 w-20 h-0.5 bg-amber-700 rounded-full" />
              )}
            </button>
          ))}

          <div className="mt-16 text-center">
            <p className="text-amber-800 font-bold text-lg">100% Pure Spices</p>
            <p className="text-sm text-amber-600 mt-2">Since 1995</p>
          </div>
        </div>
      </nav>
    </>
  );
}