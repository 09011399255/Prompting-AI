"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, Phone } from "lucide-react";

const faqs = [
  {
    question: "Is this for beginners?",
    answer:
      "Yes, but not in a condescending way. We assume you're intelligent and can think. The book starts with foundational principles and builds up to advanced techniques. No prior AI experience needed—just a willingness to think clearly.",
  },
  {
    question: "Will this work with any AI model?",
    answer:
      "Absolutely. The principles taught in this book apply to ChatGPT, Claude, Gemini, and any other language model. This isn't about memorizing specific prompts—it's about understanding how to communicate effectively with AI.",
  },
  {
    question: "Is this another prompt template book?",
    answer:
      "No. This is a framework for thinking. Templates break when contexts change. But when you understand the underlying logic, you can create effective prompts for any situation.",
  },
  {
    question: "How long is the book?",
    answer:
      "Concise enough to respect your time, comprehensive enough to transform your AI usage. Every page is intentional. No filler, no fluff—just actionable knowledge you can apply immediately.",
  },
  {
    question: "Is it relevant for Nigerian/African professionals?",
    answer:
      "Absolutely. The principles are universal, but the perspective acknowledges real-world contexts that African professionals face. Clear thinking and effective communication transcend borders.",
  },
  {
    question: "What if I already use AI regularly?",
    answer:
      'Then you\'ll benefit even more. Most "power users" are still operating inefficiently because they never learned the fundamentals. This book will refine and elevate your existing skills.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-20 px-4 bg-[#000000]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Title and Contact */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[-3px]">
                Frequently Asked
                <br />
                Questions
              </h2>
              <p className="text-gray-400 text-lg">
                Everything you need to know about the book and getting started
                with better AI prompts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#1a1a1a] rounded-2xl p-8 space-y-4 max-w-md"
            >
              <h3 className="text-xl font-semibold text-white">
                Still have questions?
              </h3>
              <p className="text-gray-400">
                Reach out to us and we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:hello@speakai.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FC8831] hover:bg-[#FD9A4A] text-white font-medium rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Right side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-800 rounded-xl overflow-hidden bg-[#000000]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#0a0a0a] transition-colors group"
                >
                  <span className="font-medium text-base text-white pr-4 transition-colors">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FC8831] flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-3 h-3 text-white" />
                    ) : (
                      <Plus className="w-3 h-3 text-white" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-gray-800">
                    <div className="pt-4">{faq.answer}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
