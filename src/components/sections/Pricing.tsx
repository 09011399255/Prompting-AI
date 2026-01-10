"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Complete prompting framework",
  "Real-world examples & case studies",
  "Beginner to advanced techniques",
  "Monetization strategies included",
  "Works with any AI model",
  "Lifetime access to updates",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-32 px-4 bg-[#000000] flex items-center justify-center"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-[-3px]">
            Flexible Pricing to Fit Your Needs
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto tracking-[-2px]">
            Choose the plan that works for you—whether you're a freelancer just
            starting out or a business looking to scale your AI capabilities.
            Get lifetime access to the complete guide with transparent, one-time
            pricing.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-sm md:max-w-2xl lg:max-w-3xl"
          >
            <div
              className="rounded-[25px] p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-800"
              style={{
                background:
                  "linear-gradient(106deg, #282728 9.98%, #000 48.25%)",
              }}
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FC8831] flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-4 border-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Pricing</h3>
                  <p className="text-sm text-gray-400">
                    For freelancers, entrepreneurs & businesses.
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-[-3px]">
                    ₦3,500/
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl text-gray-400 font-semibold">
                    $2.46
                  </span>
                </div>
                <span className="text-gray-400 text-base md:text-lg">
                  one-time payment
                </span>
              </div>

              {/* CTA Button */}
              <a
                href="https://selar.com/v7h7963l65"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 md:py-4 bg-[#FC8831] hover:bg-[#FD9A4A] text-white text-center font-semibold rounded-full mb-6 md:mb-8 transition-colors text-base md:text-lg"
              >
                Get Started
              </a>

              {/* Features */}
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">
                  What you will get
                </h4>
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-transparent border-2 border-gray-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-gray-400" />
                    </div>
                    <span className="text-gray-300 text-xs sm:text-sm md:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
