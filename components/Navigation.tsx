"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navigation() {
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
            <Link href="/" className="text-xl font-bold text-white">
              Speak AI
            </Link>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="https://selar.com/v7h7963l65"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="https://selar.com/v7h7963l65"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="https://selar.com/v7h7963l65"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </a>
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

            {/* Mobile Button - Circular with Arrow */}
            <a
              href="https://selar.com/v7h7963l65"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden w-10 h-10 bg-[#FC8831] hover:bg-[#FD9A4A] rounded-full flex items-center justify-center transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
