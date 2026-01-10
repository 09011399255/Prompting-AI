"use client";

import { motion } from "framer-motion";
import { Sparkles, BookMarked, Rocket } from "lucide-react";

export default function AboutAuthor() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#000000]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#060606] border border-[#212121] text-gray-300 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                About Speak AI
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Serious AI Education for{" "}
              <span className="text-[#FC8831]">Serious People</span>
            </h2>

            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Speak AI is an AI education brand focused on{" "}
                <span className="text-[var(--text-primary)] font-semibold">
                  clarity, execution, and leverage
                </span>
                .
              </p>
              <p>
                We don't do hype. We don't sell shortcuts. We teach
                professionals how to think clearly, communicate precisely, and
                use AI as a genuine multiplier.
              </p>
              <p>
                <span className="text-[var(--text-primary)] font-semibold">
                  Mastering Prompting
                </span>{" "}
                is the first book in a series. More niche AI mastery books are
                coming—each one focused, practical, and built for people who
                respect their own intelligence.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <BookMarked className="w-5 h-5 text-gray-400" />
                <span className="font-semibold">Book Series</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Rocket className="w-5 h-5 text-gray-400" />
                <span className="font-semibold">AI SaaS Coming Soon</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="group relative p-8 rounded-2xl bg-[#060606] border border-[#212121] overflow-hidden">
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FC8831]/10 via-[#FC8831]/5 to-transparent animate-gradient" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FC8831]/5 flex items-center justify-center flex-shrink-0">
                    <BookMarked
                      className="w-6 h-6 text-[#FC8831]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Philosophy</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Clear thinking leads to clear prompts. Clear prompts lead
                      to valuable output. Valuable output leads to real
                      leverage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FC8831]/5 flex items-center justify-center flex-shrink-0">
                    <Sparkles
                      className="w-6 h-6 text-[#FC8831]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">What's Next</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Early readers get priority access and exclusive discounts
                      on future Speak AI books and products.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FC8831]/5 flex items-center justify-center flex-shrink-0">
                    <Rocket
                      className="w-6 h-6 text-[#FC8831]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">The Vision</h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Building a suite of AI tools and education products for
                      professionals who want to work smarter, not just faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
