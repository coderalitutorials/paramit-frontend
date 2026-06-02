




import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handle karne ke liye taake glassmorphism scroll par apply ho
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = ({ isActive }) =>
    `relative px-5 py-2.5 text-sm lg:text-base font-bold uppercase tracking-wider rounded-xl transition-all duration-300 ${
      isActive
        ? "text-white bg-[#962065] shadow-md shadow-purple-900/10"
        : "text-[#131452] hover:text-[#962065] hover:bg-[#F8F6FA]"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3.5 font-extrabold uppercase tracking-wide transition-all ${
      isActive
        ? "bg-[#962065] text-white shadow-lg"
        : "text-[#131452] hover:bg-[#F8F6FA]"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(19,20,82,0.05)] border-b border-white/20"
          : "bg-white border-b border-[#962065]/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="h-20 lg:h-24 flex items-center justify-between">
          
          {/* Logo Brand Area */}
          <Link to="/" className="flex items-center active:scale-95 transition h-full py-2">
            <img
              src="/images/logo.png"
              alt="Paramit Services"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain bg-white/50 p-1 rounded-xl transition-all"
            />
          </Link>

          {/* Desktop Central Routes */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about-us" className={navClass}>About Us</NavLink>
            <NavLink to="/services" className={navClass}>Services</NavLink>
            <NavLink to="/contact-us" className={navClass}>Contact Us</NavLink>
          </div>

          {/* Right Direct Action Button - Desktop pe ab number direct dikhega */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:07405134787"
              className="bg-[#131452] text-white px-5 py-3 rounded-xl font-black text-sm uppercase tracking-wider hover:bg-[#962065] transition-all duration-300 shadow-md active:scale-95 whitespace-nowrap"
            >
              📞 07405 134787
            </a>
          </div>

          {/* Premium Mobile Menu Toggle Trigger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden h-11 w-11 rounded-xl bg-[#131452] text-white text-xl flex items-center justify-center transition-all active:scale-90 shadow-sm"
            aria-label="Toggle menu"
          >
            {open ? (
              <span className="text-2xl font-light">×</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-[#962065]/10 shadow-xl overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-2.5">
              <NavLink onClick={() => setOpen(false)} to="/" className={mobileNavClass}>Home</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/about-us" className={mobileNavClass}>About Us</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/services" className={mobileNavClass}>Services</NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact-us" className={mobileNavClass}>Contact Us</NavLink>
              
              {/* Mobile Call Button */}
              <div className="border-t border-gray-100 mt-2 pt-4">
                <a
                  href="tel:07405134787"
                  className="w-full bg-[#131452] text-white py-3.5 rounded-xl font-black text-center block uppercase tracking-wider text-sm active:scale-95 transition-transform"
                >
                  📞 Call Now: 07405 134787
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;