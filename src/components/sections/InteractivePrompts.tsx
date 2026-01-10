"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X, Check } from "lucide-react";

const badPrompts = [
  {
    text: "make me a business plan",
    type: "bad",
    reason: "Too vague",
  },
  {
    text: "write something about marketing for my new app that sells shoes online and also does some other things like maybe subscriptions",
    type: "bad",
    reason: "Too long & unclear",
  },
  {
    text: "help with sales",
    type: "bad",
    reason: "No context",
  },
];

const goodPrompts = [
  {
    text: "Create a 3-month launch plan for a D2C footwear brand targeting Gen Z professionals, budget: $5k",
    type: "good",
    reason: "Clear & specific",
  },
  {
    text: "Draft 5 Instagram captions for sustainable sneakers, tone: confident but approachable, max 150 chars",
    type: "good",
    reason: "Precise requirements",
  },
  {
    text: "Analyze: what objections would a freelancer have about a $50/month productivity tool?",
    type: "good",
    reason: "Thoughtful question",
  },
];

export default function InteractivePrompts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 px-4 bg-[#000000]">
      <div className="container mx-auto max-w-7xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            The Problem Is{" "}
            <span className="text-[#FC8831]">How You're Asking</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Most people type into AI like they're searching Google. See the
            difference?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bad Prompts */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-red-400 mb-6 flex items-center gap-2">
              <X className="w-5 h-5" />
              Vague Prompts
            </h3>
            {badPrompts.map((prompt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-[#060606] border border-[#212121] hover:border-red-500/50 transition-all overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent animate-gradient" />
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-300 leading-relaxed flex-1">
                      "{prompt.text}"
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                    {prompt.reason}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Good Prompts */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400 mb-6 flex items-center gap-2">
              <Check className="w-5 h-5" />
              Clear Prompts
            </h3>
            {goodPrompts.map((prompt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-[#060606] border border-[#212121] hover:border-green-500/50 transition-all overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent animate-gradient" />
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-300 leading-relaxed flex-1">
                      "{prompt.text}"
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">
                    {prompt.reason}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
