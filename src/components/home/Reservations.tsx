
import React from "react";
import { motion } from "motion/react";

export const Reservations = () => {
  return (
    <section id="reservations" className="py-32 px-6 md:px-12 bg-[#050505] border-t border-[#D4AF37]/10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif text-[#F5F5F5] mb-8 tracking-widest"
        >
          Secure Your Evening
        </motion.h2>
        <p className="text-[#F5F5F5]/60 mb-12 text-lg font-light tracking-wide">
          We accept reservations up to 30 days in advance. <br/>
          For parties larger than 6, please contact us directly.
        </p>

        <form className="space-y-8 text-left bg-[#0A0A0A] p-8 md:p-12 border border-[#D4AF37]/20 relative">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D4AF37]"/>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#D4AF37]"/>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#D4AF37]"/>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D4AF37]"/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Date</label>
              <input type="date" className="w-full bg-transparent border-b border-[#F5F5F5]/20 py-2 text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Guests</label>
              <select className="w-full bg-transparent border-b border-[#F5F5F5]/20 py-2 text-[#F5F5F5] focus:border-[#D4AF37] outline-none transition-colors [&>option]:bg-black">
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
                <option>6 Guests</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
             <label className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Time</label>
             <div className="grid grid-cols-3 md:grid-cols-5 gap-4 pt-2">
                {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map(time => (
                    <button key={time} type="button" className="border border-[#F5F5F5]/10 py-2 text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all focus:bg-[#D4AF37] focus:text-black">
                        {time}
                    </button>
                ))}
             </div>
          </div>

          <div className="pt-8 text-center">
             <button type="button" className="px-12 py-4 bg-[#D4AF37] text-black text-sm uppercase tracking-[0.25em] hover:bg-white transition-colors duration-500 font-bold">
                Confirm Request
             </button>
          </div>
        </form>
      </div>
    </section>
  );
};
