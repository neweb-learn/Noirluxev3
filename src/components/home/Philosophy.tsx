
import React from "react";
import { motion } from "motion/react";
import { siteContent } from "../../data/content";

export const BrokenGrid = () => {
  const { philosophy } = siteContent;

  return (
    <section id="philosophy" className="py-32 md:py-48 px-6 md:px-12 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Image Section */}
          <div className="md:col-span-7 relative z-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden"
            >
              <img
                src={philosophy.image.src}
                alt={philosophy.image.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              {/* Decorative Line */}
              <div className="absolute -bottom-12 -left-12 w-full h-full border border-[#D4AF37]/20 z-[-1]" />
            </motion.div>
          </div>

          {/* Text Overlap Section */}
          <div className="md:col-span-5 md:-ml-24 relative z-10 mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="bg-[#0f0f0f] p-8 md:p-16 border-l border-[#D4AF37]/30 shadow-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-[#D4AF37] mb-8 tracking-widest">
                {philosophy.heading}
              </h2>
              <p className="text-[#F5F5F5]/80 text-lg leading-relaxed tracking-wide font-light mb-12">
                {philosophy.body}
              </p>
              
              <a
                href={philosophy.cta.link}
                className="inline-block text-xs uppercase tracking-[0.3em] border-b border-[#D4AF37] pb-2 hover:text-[#D4AF37] transition-colors"
              >
                {philosophy.cta.label}
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background flourish */}
        <div className="absolute top-0 right-0 text-[20rem] leading-none font-serif text-[#ffffff]/[0.02] select-none pointer-events-none z-0 translate-x-1/4 -translate-y-1/4">
          &
        </div>
      </div>
    </section>
  );
};
