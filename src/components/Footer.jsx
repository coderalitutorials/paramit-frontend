




import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#131452] text-white pt-16 pb-6 relative overflow-hidden border-t border-[#962065]/20">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#962065]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 grid sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <img 
            src="/images/logo.png" 
            alt="Paramit Services" 
            className="h-16 bg-white p-2 rounded-xl object-contain shadow-md" 
          />
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Professional and reliable pest control solutions tailored for homes and businesses across Sutton.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-lg font-black mb-4 uppercase tracking-wider text-[#962065]">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3 text-sm text-white/80 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Services", path: "/services" },
              { name: "Contact Us", path: "/contact-us" }
            ].map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="hover:text-[#962065] transition-all duration-200 transform hover:translate-x-1 inline-block"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Services Column - Updated with Link and State Navigation */}
        <div>
          <h3 className="text-lg font-black mb-4 uppercase tracking-wider text-[#962065]">
            Services
          </h3>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <input type="hidden" /> {/* Utility alignment anchor */}
            <Link 
              to="/services" 
              state={{ scrollToService: "Rats & Mice Control", category: "Rodents & Wildlife" }}
              className="hover:text-[#962065] cursor-pointer transition inline-block"
            >
              Rat & mice Control
            </Link>
            <Link 
              to="/services" 
              state={{ scrollToService: "Bed Bugs Control", category: "Insects" }}
              className="hover:text-[#962065] cursor-pointer transition inline-block"
            >
              Bed Bugs Control
            </Link>
            <Link 
              to="/services" 
              state={{ scrollToService: "Carpet Moth Control Treatment", category: "Insects" }}
              className="hover:text-[#962065] cursor-pointer transition inline-block"
            >
              Carpet Moth Treatment
            </Link>
            {/* <Link 
              to="/services" 
              state={{ scrollToService: "Hygiene & Proofing Services", category: "Birds & Prevention" }}
              className="hover:text-[#962065] cursor-pointer transition inline-block"
            >
              Safe Pest Removal
            </Link> */}

{/* Safe Pest Removal - Isko click karne se ab 'All' state trigger hogi aur sari services dikhengi */}
    <Link 
      to="/services" 
      state={{ scrollToService: null, category: "All" }}
      className="hover:text-[#962065] cursor-pointer transition inline-block"
    >
      Safe Pest Removal
    </Link>


          </div>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="text-lg font-black mb-4 uppercase tracking-wider text-[#962065]">
            Contact Us
          </h3>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <p className="flex items-center gap-2">
              <span className="text-[#962065]">📍</span> Sutton, UK
            </p>
            <a href="tel:07405134787" className="flex items-center gap-2 hover:text-[#962065] transition w-max">
              <span className="text-[#962065]">📞</span> 07405 134787
            </a>
            <a href="mailto:info@paramitservices.co.uk" className="flex items-center gap-2 hover:text-[#962065] transition w-max break-all">
              <span className="text-[#962065]">✉️</span> info@pestcontrolsutton.uk
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-5 mt-14 pt-6 border-t border-white/10 text-center text-xs md:text-sm text-white/50 tracking-wide">
        © {new Date().getFullYear()} Paramit Services. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;