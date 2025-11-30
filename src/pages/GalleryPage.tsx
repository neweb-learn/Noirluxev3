
import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../data/content";

const extraImages = [
  "https://images.unsplash.com/photo-1637079034518-d9a72a4d15fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwY29ja3RhaWwlMjBkZXRhaWwlMjBkYXJrfGVufDF8fHx8MTc2NDQ4MTExNnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1571805268214-e9d753350217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcGxhdGUlMjBwcmVzZW50YXRpb24lMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc2NDQ4MTExNnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1598617677009-abca71cd8319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kbGVsaWdodCUyMGRpbm5lciUyMHRhYmxlJTIwZGFyayUyMGFtYmllbmNlfGVufDF8fHx8MTc2NDQ4MTExNnww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1748853760294-daafc698ef91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNtb2tlJTIwdGV4dHVyZSUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjQ0ODExMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
];

export const GalleryPage = () => {
  const { galleryTeaser } = siteContent;
  const allImages = [...galleryTeaser.images, ...extraImages];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#F5F5F5] tracking-widest uppercase mb-6">
            Gallery
          </h1>
          <div className="w-px h-24 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer group ${
                 index % 3 === 1 ? "md:translate-y-12" : ""
              }`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-48 text-center">
            <Link
            to="/#reservations"
             className="inline-block px-12 py-4 bg-[#D4AF37] text-black text-sm uppercase tracking-[0.25em] hover:bg-white transition-colors duration-300 font-bold"
            >
                Experience It Live
            </Link>
        </div>
      </div>
    </div>
  );
};
