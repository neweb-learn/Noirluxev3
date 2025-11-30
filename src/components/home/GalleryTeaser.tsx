
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/content";

export const GalleryTeaser = () => {
  const { galleryTeaser } = siteContent;
  const ref = useRef(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Move elements horizontally based on vertical scroll
  // Left to Right
  const x1 = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  // Right to Left
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="gallery" ref={ref} className="py-32 bg-[#0A0A0A] overflow-hidden relative">
       <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent z-20" />
       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-20" />

       <div className="container mx-auto px-6 mb-16 text-center relative z-30">
        <h2 className="text-3xl md:text-5xl font-serif text-[#F5F5F5] tracking-[0.2em]">
          {galleryTeaser.heading}
        </h2>
       </div>

      {/* Row 1 - Moves Right */}
      <motion.div style={{ x: x1 }} className="flex gap-8 mb-8 w-[150%] ml-[-25%] opacity-60 hover:opacity-100 transition-opacity duration-700">
        {galleryTeaser.images.concat(galleryTeaser.images).map((src, idx) => (
          <div key={`row1-${idx}`} className="flex-shrink-0 w-[300px] md:w-[500px] aspect-[16/9] relative grayscale hover:grayscale-0 transition-all duration-500">
             <img src={src} alt="Gallery" className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>

      {/* Row 2 - Moves Left */}
      <motion.div style={{ x: x2 }} className="flex gap-8 w-[150%] ml-[-10%] opacity-60 hover:opacity-100 transition-opacity duration-700">
        {galleryTeaser.images.reverse().concat(galleryTeaser.images).map((src, idx) => (
          <div key={`row2-${idx}`} className="flex-shrink-0 w-[300px] md:w-[500px] aspect-[16/9] relative grayscale hover:grayscale-0 transition-all duration-500">
             <img src={src} alt="Gallery" className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>

      <div className="mt-24 text-center relative z-30">
        <Link
            to={galleryTeaser.cta.link}
            className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-[0.25em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
        >
            {galleryTeaser.cta.label}
        </Link>
      </div>
    </section>
  );
};
