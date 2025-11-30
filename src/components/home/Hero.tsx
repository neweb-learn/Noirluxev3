
import React from "react";
import { motion } from "motion/react";
import { siteContent } from "../../data/content";
import { ChevronDown } from "lucide-react";

export const CinematicHero = () => {
  const { hero } = siteContent;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={hero.image.src}
          alt={hero.image.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-widest uppercase text-[#F5F5F5] opacity-90 leading-tight">
            {hero.headline.split(" ").map((word, i) => (
              <span key={i} className="block md:inline-block mr-4">
                {word}
              </span>
            ))}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 md:mt-12 max-w-md md:max-w-2xl"
        >
          <p className="text-sm md:text-lg tracking-[0.2em] uppercase text-[#D4AF37]">
            {hero.subhead}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12"
        >
          <a
            href={hero.cta.link}
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-sm font-medium tracking-[0.2em] text-white transition duration-300 ease-out border border-white/30 hover:border-[#D4AF37]"
          >
            <span className="absolute inset-0 w-full h-full bg-[#D4AF37] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative group-hover:text-black transition-colors duration-300">
              {hero.cta.label}
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/50 animate-bounce"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};
