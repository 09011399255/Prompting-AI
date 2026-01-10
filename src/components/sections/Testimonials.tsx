"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tunde A.",
    role: "Digital Marketer",
    content:
      "This finally explained why my prompts weren't working. The framework is simple but powerful.",
    rating: 5,
  },
  {
    name: "Amina K.",
    role: "Freelance Writer",
    content:
      "I stopped wasting time editing AI responses. Now I get what I need on the first try.",
    rating: 4,
  },
  {
    name: "Michael O.",
    role: "Business Consultant",
    content:
      "Clear, practical, and respectful of the reader's intelligence. No fluff, just results.",
    rating: 5,
  },
  {
    name: "Chioma N.",
    role: "Content Strategist",
    content:
      "Changed how I think about AI entirely. This isn't just about prompts—it's about thinking clearly.",
    rating: 4,
  },
  {
    name: "Ibrahim S.",
    role: "Product Designer",
    content:
      "Finally, an AI book that doesn't treat readers like beginners. Practical from page one.",
    rating: 3,
  },
  {
    name: "Blessing U.",
    role: "Social Media Manager",
    content:
      "I've tried other prompt guides. This is the only one that actually made me better at using AI.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#000000]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What Readers <span className="text-[#FC8831]">Are Saying</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Real feedback from professionals who've transformed their AI
            workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-xl bg-[#060606] border border-[#212121] hover:border-[#FC8831] transition-all duration-300 overflow-hidden"
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FC8831]/10 via-[#FC8831]/5 to-transparent animate-gradient" />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FC8831] text-[#FC8831]"
                    />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star
                      key={`empty-${i}`}
                      className="w-4 h-4 text-gray-700"
                    />
                  ))}
                </div>

                <p className="text-gray-400 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-800 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
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
          <p className="text-[var(--text-secondary)]">
            Join hundreds of professionals getting better AI results
          </p>
        </motion.div>
      </div>
    </section>
  );
}
