"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-32 px-4 bg-[#0D0D0D]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[25px] p-12 md:p-16 lg:px-40 lg:py-16"
          style={{
            background: "linear-gradient(106deg, #282728 9.98%, #000 48.25%)",
          }}
        >
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FC8831]" />
              <span className="text-sm text-gray-400">
                Transform how you work with AI
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Clearer Thinking. Better Results.
              <br />
              <span className="text-[#FC8831]">More Leverage.</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stop guessing. Start understanding. Get the mental models that
              separate AI beginners from AI power users.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://selar.com/v7h7963l65"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FC8831] hover:bg-[#FD9A4A] text-white font-semibold text-lg rounded-full transition-colors"
              >
                <span className="hidden sm:inline">
                  Get Mastering Prompting
                </span>
                <span className="sm:hidden">Get the Book</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Features */}
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 pt-2">
              <span>Instant delivery</span>
              <span>•</span>
              <span>PDF format</span>
              <span>•</span>
              <span>Read on any device</span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="text-white font-bold text-xl">Speak AI</div>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="mailto:hello@speakai.com"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© 2026 Speak AI. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
