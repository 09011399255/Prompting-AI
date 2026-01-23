"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import {
  trackPurchase,
  trackInitiateCheckout,
} from "../../utils/fbPixelEvents";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollToFeatures = () => {
    const element = document.getElementById("inside-the-book");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20 pt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-[-3px]"
              >
                You're Using AI Every Day.{" "}
                <span className="text-[#FC8831]">
                  You're Still Leaving Money on the Table.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-400 leading-relaxed"
              >
                Learning how to communicate with AI clearly to get faster,
                better, monetizable results.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://selar.com/v7h7963l65"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackInitiateCheckout();
                  trackPurchase();
                }}
                className="group px-8 py-4 bg-[#FC8831] hover:bg-[#FD9A4A] rounded-full text-white font-medium text-lg transition-colors flex items-center justify-center gap-2"
              >
                Get the Book Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={scrollToFeatures}
                className="px-8 py-4 border border-gray-700 hover:border-gray-600 text-white rounded-full font-medium text-lg transition-colors"
              >
                See What's Inside
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-[#060606] border-2 border-[#212121] overflow-hidden flex items-center justify-center"
                  >
                    <span className="text-xs font-semibold text-gray-400">
                      {i === 1 ? "TA" : i === 2 ? "AK" : i === 3 ? "MO" : "CN"}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Join{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  500+
                </span>{" "}
                professionals mastering AI
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotateY: 8, rotateZ: -2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="cursor-pointer"
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <div className="relative w-full max-w-2xl lg:max-w-4xl">
                {/* Subtle accent glow */}
                <div className="absolute inset-0 bg-[#FC8831] blur-3xl opacity-10" />

                {/* Book Cover */}
                <img
                  src="/book-cover.png"
                  alt="Speak AI - Mastering AI Prompting Book Cover"
                  className="relative z-10 w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-gray-400 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
