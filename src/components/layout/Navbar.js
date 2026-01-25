"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#proof", label: "Proof" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between rounded-full bg-[#faebdc] backdrop-blur-md px-6 py-3 shadow-sm ">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="FFF Logo" 
                className="h-8 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-row gap-4 items-center">
              <nav className="flex items-center gap-8 text-md font-medium text-neutral-600">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-neutral-900 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href="#book-call"
                className="rounded-full bg-[#ff7a00] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#e66d00]"
              >
                Book a Call
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-neutral-800 transition-all duration-300 ease-out ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-neutral-800 transition-all duration-300 ease-out ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-neutral-800 transition-all duration-300 ease-out ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#FDF8F4] transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-semibold text-neutral-800 hover:text-[#ff7a00] transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isOpen ? `${150 + index * 75}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
            
            <a
              href="#book-call"
              onClick={() => setIsOpen(false)}
              className={`mt-4 rounded-full bg-[#ff7a00] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#e66d00] ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isOpen ? `${150 + navLinks.length * 75}ms` : "0ms",
              }}
            >
              Book a Call
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
