
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/content";

export const MenuPreview = () => {
  const { menuHighlights } = siteContent;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="menu" className="py-32 px-6 md:px-12 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-serif text-[#F5F5F5] mb-4 tracking-widest">
            {menuHighlights.heading}
            </h2>
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-8"></div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20">
          {menuHighlights.categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveTab(index)}
              className={`text-sm uppercase tracking-[0.2em] transition-all duration-500 pb-2 border-b border-transparent ${
                activeTab === index
                  ? "text-[#D4AF37] border-[#D4AF37]"
                  : "text-[#F5F5F5]/40 hover:text-[#F5F5F5]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              {menuHighlights.categories[activeTab].items.map((item, idx) => (
                <div key={item.name} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl md:text-2xl font-serif text-[#F5F5F5] tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="flex-grow mx-4 border-b border-[#F5F5F5]/10 relative -top-1 border-dotted opacity-30"></div>
                    <span className="text-lg font-light text-[#D4AF37] tracking-widest">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[#F5F5F5]/50 text-sm tracking-wider italic font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-24 text-center">
          <Link
            to={menuHighlights.cta.link}
            className="inline-block px-12 py-4 border border-[#F5F5F5]/20 text-xs uppercase tracking-[0.25em] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
          >
            {menuHighlights.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
};
