
import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/content";
import { Menu as MenuIcon, X } from "lucide-react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap');
          
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Cinzel', serif;
          }
          
          body, p, a, button, li, span, div {
            font-family: 'Lato', sans-serif;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference">
        <Link to="/" className="text-xl font-bold tracking-[0.2em] uppercase hover:text-[#D4AF37] transition-colors">
          OBSIDIAN
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {siteContent.navigation.map((link) => (
            link.path.startsWith("#") ? (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-sm uppercase tracking-[0.15em] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {link.label}
                </a>
            ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm uppercase tracking-[0.15em] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {link.label}
                </Link>
            )
          ))}
          <a
            href="/#reservations"
            className="px-6 py-2 border border-[#F5F5F5] text-sm uppercase tracking-[0.15em] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300"
          >
            Reserve
          </a>
        </div>

        <button
          className="md:hidden text-[#F5F5F5]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {siteContent.navigation.map((link) => (
          link.path.startsWith("#") ? (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif uppercase tracking-[0.1em] hover:text-[#D4AF37]"
              >
                {link.label}
              </a>
          ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif uppercase tracking-[0.1em] hover:text-[#D4AF37]"
              >
                {link.label}
              </Link>
          )
        ))}
        <a
          href="/#reservations"
          onClick={() => setIsMenuOpen(false)}
          className="mt-4 px-8 py-3 border border-[#F5F5F5] text-lg uppercase tracking-[0.15em] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300"
        >
          Reserve Table
        </a>
      </motion.div>

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-black py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-serif tracking-widest text-[#D4AF37]">
              OBSIDIAN
            </h3>
            <p className="text-white/60 text-sm tracking-wider max-w-xs">
              {siteContent.seo.metaDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm tracking-widest text-white/80">
            <div className="flex flex-col gap-2">
              <span className="text-[#D4AF37] mb-2 uppercase text-xs">
                Visit
              </span>
              <p>{siteContent.footer.address}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#D4AF37] mb-2 uppercase text-xs">
                Hours
              </span>
              <p>{siteContent.footer.hours}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#D4AF37] mb-2 uppercase text-xs">
                Contact
              </span>
              <p>{siteContent.footer.contact}</p>
              <div className="flex gap-4 mt-2">
                {siteContent.footer.socials.map((social) => (
                  <span
                    key={social}
                    className="hover:text-[#D4AF37] cursor-pointer transition-colors"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center md:text-left text-xs text-white/30 uppercase tracking-widest">
          © {new Date().getFullYear()} Obsidian. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
