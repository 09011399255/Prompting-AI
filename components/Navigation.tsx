"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="backdrop-blur-md bg-[#060606]/80 border border-[#212121] rounded-full px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-xl font-bold text-white">
              Speak AI
            </a>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("inside-the-book")}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </button>
            </div>

            {/* CTA Button */}
            <a
              href="https://selar.com/v7h7963l65"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex px-6 py-2.5 bg-[#FC8831] hover:bg-[#FD9A4A] text-white text-sm font-semibold rounded-full transition-colors"
            >
              Pre-order Now
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 bg-[#FC8831] hover:bg-[#FD9A4A] rounded-full flex items-center justify-center transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 backdrop-blur-md bg-[#060606]/95 border border-[#212121] rounded-3xl px-6 py-6"
            >
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("inside-the-book")}
                  className="text-left text-base text-gray-400 hover:text-white transition-colors py-2"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-left text-base text-gray-400 hover:text-white transition-colors py-2"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-left text-base text-gray-400 hover:text-white transition-colors py-2"
                >
                  FAQ
                </button>
                <a
                  href="https://selar.com/v7h7963l65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-6 py-3 bg-[#FC8831] hover:bg-[#FD9A4A] text-white text-center font-semibold rounded-full transition-colors"
                >
                  Pre-order Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
