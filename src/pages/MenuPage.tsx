
import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../data/content";

export const MenuPage = () => {
  const { menuHighlights } = siteContent;

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#F5F5F5] tracking-widest uppercase mb-6">
            Menu
          </h1>
          <div className="w-px h-24 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="space-y-32">
          {menuHighlights.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2 className="text-3xl font-serif text-[#D4AF37] mb-12 text-center tracking-[0.25em] uppercase border-b border-[#D4AF37]/20 pb-6 inline-block w-full">
                {category.name}
              </h2>

              <div className="grid grid-cols-1 gap-12">
                {category.items.map((item, idx) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-xl md:text-2xl font-serif text-[#F5F5F5] tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div className="flex-grow mx-6 border-b border-[#F5F5F5]/10 relative -top-1 border-dotted opacity-30"></div>
                      <span className="text-lg font-light text-[#D4AF37] tracking-widest">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[#F5F5F5]/50 text-sm tracking-wider italic font-light max-w-lg">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <p className="text-[#F5F5F5]/40 text-xs tracking-[0.2em] uppercase mb-8">
            Seasonal ingredients. Subject to availability.
          </p>
          <Link
            to="/#reservations"
            className="inline-block px-12 py-4 border border-[#D4AF37] text-[#D4AF37] text-sm uppercase tracking-[0.25em] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            Make a Reservation
          </Link>
        </div>
      </div>
    </div>
  );
};
