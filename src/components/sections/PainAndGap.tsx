"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Zap } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Generic, Unusable Responses",
    description:
      "You get walls of text that sound smart but can't be used without heavy editing.",
  },
  {
    icon: TrendingDown,
    title: "Wasted Time & Energy",
    description:
      "You spend more time fixing AI output than you would creating it yourself.",
  },
  {
    icon: Zap,
    title: "It's Not the AI. It's You.",
    description:
      "The tool works. But if you don't know how to think clearly and communicate precisely, you'll never unlock its value.",
  },
];

export default function PainAndGap() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#000000]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-3px]">
            Why Most People{" "}
            <span className="text-[#FC8831]">Struggle with AI</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            It's not about memorizing prompt templates. It's about thinking
            differently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl bg-[#060606] border border-[#212121] transition-all overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FC8831]/10 via-[#FC8831]/5 to-transparent animate-gradient" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#FC8831]/5 flex items-center justify-center mb-6">
                  <problem.icon
                    className="w-6 h-6 text-[#FC8831]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-[#060606] border border-[#212121] text-center"
        >
          <p className="text-xl md:text-2xl font-semibold mb-4">
            "I've been doing this <span className="text-[#FC8831]">wrong</span>
            ."
          </p>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            That realization is the first step. The second is learning how to
            think in a way that makes AI actually useful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
