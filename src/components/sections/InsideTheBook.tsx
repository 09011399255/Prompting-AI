"use client";

import { motion } from "framer-motion";
import {
  Brain,
  MessageSquare,
  Lightbulb,
  DollarSign,
  BookOpen,
  Target,
} from "lucide-react";

const bookContents = [
  {
    icon: Brain,
    title: "Prompting from First Principles",
    description:
      "Understand the foundational logic behind effective AI communication, not just templates.",
  },
  {
    icon: MessageSquare,
    title: "Think Clearly, Then Type",
    description:
      "Learn the mental models that produce precise, actionable prompts every time.",
  },
  {
    icon: Lightbulb,
    title: "Discuss, Don't Just Instruct",
    description:
      "Master the art of conversational AI interaction for deeper, more nuanced results.",
  },
  {
    icon: Target,
    title: "Strategic AI Application",
    description:
      "Writing, strategy, ideation—learn exactly when and how to deploy AI for maximum impact.",
  },
  {
    icon: DollarSign,
    title: "From Output to Income",
    description:
      "Transform AI responses into monetizable assets: content, products, services, and systems.",
  },
  {
    icon: BookOpen,
    title: "Beginner-Friendly, Pro-Grade",
    description:
      "No jargon. No fluff. Just clear, practical knowledge you can apply immediately.",
  },
];

export default function InsideTheBook() {
  return (
    <section id="inside-the-book" className="py-12 md:py-20 px-4 bg-[#000000]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-3px]">
            Everything You Need to{" "}
            <span className="text-[#FC8831]">Master AI</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto tracking-[-2px]">
            This isn't a collection of copy-paste prompts. It's a complete
            mental framework.
          </p>
        </motion.div>

        {/* Regular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookContents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-[#060606] border border-[#212121] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FC8831]/10 via-[#FC8831]/5 to-transparent animate-gradient" />
              </div>

              <div className="relative z-10">
                {/* Icon with background fill */}
                <div className="w-12 h-12 rounded-xl bg-[#FC8831]/5 flex items-center justify-center mb-6">
                  <item.icon
                    className="w-6 h-6 text-[#FC8831]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-[#060606] border border-[#212121]">
            <p className="text-lg font-semibold mb-2 text-white">
              No fluff. No filler. Just what works.
            </p>
            <p className="text-gray-400">
              Practical, respectful, and designed for professionals who value
              their time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
