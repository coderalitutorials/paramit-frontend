











import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

// Animation Variants for structural elegance
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  
  // Track open FAQ item index (null means all closed)
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    "Ants Control",
    "Bed Bugs Control",
    "Carpet Moth Control Treatment",
    "Carpet Beetle Treatment",
    "Cockroach Control Service",
    "Rats & Mice Control",
    "Flea Control",
    "Wasps Nest Control",
    "Bumble Bee Control",
    "Squirrel Control",
    "Hygiene and Proofing Services",
    "Birds Control Services",
    "Pigeons Control Services",
  ];

  // Straightforward, customer-focused FAQs
  const faqs = [
    {
      question: "How quickly can you treat a pest problem in Sutton?",
      answer: "We offer fast local response times across Sutton and surrounding areas. In most urgent cases, we aim to get a specialist to your property on the same day or within 24 hours to secure the area and begin treatment."
    },
    {
      question: "Are your pest control treatments safe for households with pets and children?",
      answer: "Yes, safety is our top priority. We use targeted, safe application methods and strictly follow professional regulations. Our technician will thoroughly advise you if any specific area needs to be avoided for a short period during or after the treatment."
    },
    {
      question: "Do you offer proofing layouts to stop rodents from returning?",
      answer: "Absolutely. Getting rid of the pests is only the first step. We look at entry routes and can provide direct proofing layouts—like sealing structural gaps, mesh installations, and blocking pipes—to make sure mice or rats don't find a way back inside."
    },
    {
      question: "Will I need more than one visit to fully clear the pest infestation?",
      answer: "It depends entirely on the type of pest. Wasps nests or minor insect issues can often be sorted in a single visit, while stubborn problems like rats, mice, or bed bugs typically require a structured 2 to 3 visit program to guarantee full eradication."
    },
    {
      question: "Can I get a commercial service for my retail or business property?",
      answer: "Yes, we handle both domestic houses and commercial business customers. We offer discreet, tailored treatments and ongoing maintenance setups to keep local businesses completely free from pest issues and compliant with health regulations."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loaderToast = toast.loading("Sending your request securely...", {
      style: {
        background: "#131452",
        color: "#fff",
        borderRadius: "14px",
      }
    });

    try {
      const res = await axios.post(
        "https://paramit-backend.vercel.app/api/contact",
        formData
      );

      toast.success(res.data.message || "Pest service request submitted successfully!", {
        id: loaderToast,
        duration: 4000,
        icon: "🛡️",
        style: {
          background: "rgba(19, 20, 82, 0.95)",
          backdropFilter: "blur(8px)",
          color: "#fff",
          border: "1px solid rgba(150, 32, 101, 0.3)",
          borderRadius: "16px",
        }
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        postcode: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong. Please try again.",
        {
          id: loaderToast,
          duration: 4000,
          style: {
            background: "#7f1d1d",
            color: "#fff",
            borderRadius: "16px",
          }
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden bg-[#FAFAFC] text-[#131452]">
      {/* Toast Configuration */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Hero Section */}
      <section className="relative bg-[#131452] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(150,32,101,0.15),transparent_45%)]" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-5 text-center"
        >
          <motion.p 
            initial={{ letterSpacing: "1px" }}
            animate={{ letterSpacing: "3px" }}
            className="text-[#962065] font-black mb-3 uppercase text-sm tracking-widest"
          >
            Contact Us
          </motion.p>

          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Book Your Pest Control Service
          </h1>

          <p className="max-w-3xl mx-auto text-white/80 text-lg md:text-xl font-medium leading-relaxed">
            Get in touch with Paramit Services today for straightforward, reliable pest control 
            treatments across Sutton and surrounding areas.
          </p>
        </motion.div>
      </section>

      {/* Main Form & Content Split */}
      <section className="py-24 relative pb-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Premium Form Wrapper */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(19,20,82,0.04)] border border-gray-100 p-8 md:p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#131452] to-[#962065] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <p className="text-[#962065] font-black mb-2 tracking-wide uppercase text-xs">
                 Quick Contact
              </p>

              <h2 className="text-3xl font-black text-[#131452] mb-8 tracking-tight">
                Send Us Your Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Name *", name: "name", type: "text", placeholder: "Enter your name" },
                  { label: "Email Address *", name: "email", type: "email", placeholder: "Enter your email address" },
                  { label: "Phone Number *", name: "phone", type: "tel", placeholder: "Enter your phone number" },
                  { label: "Postcode *", name: "postcode", type: "text", placeholder: "e.g. SM1 1AA" }
                ].map((input) => (
                  <motion.div key={input.name} layout className="relative group/field">
                    <label className="block mb-2 font-bold text-sm text-[#131452] group-focus-within/field:text-[#962065] transition-colors duration-300">
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      name={input.name}
                      value={formData[input.name]}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      required
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-3.5 outline-none transition-all duration-300 focus:bg-white focus:border-[#962065] text-gray-800"
                    />
                  </motion.div>
                ))}

                {/* Dropdown Service Input */}
                <motion.div layout className="relative w-full">
                  <label className="block mb-2 font-bold text-sm text-[#131452]">
                    Required Pest Service
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-50/50 border border-gray-200 rounded-xl pl-5 pr-12 py-3.5 outline-none transition-all duration-300 focus:bg-white focus:border-[#962065] text-gray-800 appearance-none cursor-pointer text-sm md:text-base block truncate"
                    >
                      <option value="" className="text-gray-400 bg-white">Select a pest control service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="text-gray-800 bg-white py-2">
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-[10px] md:text-xs">
                      ▼
                    </div>
                  </div>
                </motion.div>

                {/* Message Input */}
                <motion.div layout className="relative">
                  <label className="block mb-2 font-bold text-sm text-[#131452]">
                    Message Details *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the pest problem..."
                    required
                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-3.5 outline-none transition-all duration-300 focus:bg-white focus:border-[#962065] text-gray-800 resize-none"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01, translateY: -2 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full relative bg-[#131452] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest overflow-hidden group/btn shadow-lg shadow-blue-900/10 hover:shadow-purple-900/20 transition-all duration-300 disabled:opacity-60"
                >
                  <span className="absolute inset-0 w-full h-full bg-[#962065] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Confirm Booking Request"
                    )}
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side Info Area */}
            <div className="space-y-8 lg:sticky lg:top-8">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(19,20,82,0.02)] border border-gray-100 p-8 md:p-10 relative overflow-hidden"
              >
                <p className="text-[#962065] font-black mb-2 tracking-wide uppercase text-xs">
                   Service Zone
                </p>

                <h2 className="text-3xl font-black text-[#131452] mb-5 tracking-tight">
                  Our Sutton Coverage
                </h2>

                <p className="text-gray-600 leading-relaxed mb-5 font-medium">
                  At Paramit Services, we provide fast response pest control services across Sutton. 
                  Whether you need immediate rodent control, insect treatments, or safe proofing layouts, 
                  our local team is ready to deliver proper solutions.
                </p>

                <p className="text-gray-600 leading-relaxed font-medium">
                  We look after both domestic houses and business commercial customers with direct communication, 
                  honest prices, and reliable safe advice.
                </p>
              </motion.div>

              {/* Google Business Profile Card - UPDATED WITH DEEP BLUE STYLE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#131452] rounded-[2rem] p-6 border border-white/5 shadow-[0_20px_45px_rgba(19,20,82,0.15)] flex flex-col sm:flex-row gap-5 items-start sm:items-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rounded-full blur-xl pointer-events-none" />
                
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>

                <div className="flex-1 space-y-1 relative z-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-white/10 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm">
                      Official Profile
                    </span>
                    <div className="text-amber-400 text-xs tracking-tight">
                      ★★★★★
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white tracking-tight">
                    Paramit Services on Google
                  </h3>
                  
                  <p className="text-white/70 text-xs md:text-sm font-medium leading-relaxed max-w-md">
                    Check our verified customer reviews, operating hours, and standard service updates on our business listing.
                  </p>

                  <div className="pt-2">
                    <a
                      href="https://share.google/sIAZfvQtA6bxPjdng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#962065] font-black text-sm hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group/link"
                    >
                      Visit Business Profile 
                      <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Map Layout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white relative group"
              >
                <iframe
                  title="Paramit Services Location Sutton"
                  src="https://www.google.com/maps?q=Sutton%2C%20UK&output=embed"
                  className="w-full h-[380px] border-0 filter grayscale-[10%] contrast-[110%] group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </div>

          {/* Quick Info Contact Strips */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: "📍", title: "Local Station", desc: "Sutton", country: "🇬🇧 United Kingdom" },
              { icon: "✉️", title: "Email Support", desc: "info@pestcontrolsutton.uk", action: "mailto:info@pestcontrolsutton.uk" },
              { icon: "📞", title: "Direct Helpline", desc: "07405 134787", action: "tel:07405 134787" }
            ].map((info, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-[0_15px_40px_rgba(19,20,82,0.01)] border border-gray-100 text-center relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#131452] text-white flex items-center justify-center text-2xl shadow-md shadow-blue-900/10 group-hover:bg-[#962065] transition-colors duration-300"
                >
                  {info.icon}
                </motion.div>

                <h3 className="text-xl font-extrabold text-[#131452] mb-2 group-hover:text-[#962065] transition-colors duration-300">
                  {info.title}
                </h3>

                {info.action ? (
                  <a href={info.action} className="text-gray-600 block font-bold hover:underline text-sm md:text-base">
                    {info.desc}
                  </a>
                ) : (
                  <p className="text-gray-600 font-bold text-sm md:text-base">{info.desc}</p>
                )}
                {info.country && <p className="text-xs text-gray-400 mt-1 font-semibold">{info.country}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-[#131452]/5 relative border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-16">
            <p className="text-[#962065] font-black mb-2 tracking-wide uppercase text-xs">
              Have Questions?
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#131452] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 font-medium max-w-xl mx-auto text-sm md:text-base">
              Clear, honest details about our reliable pest control treatments, safety measures, and service timelines.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_10px_30px_rgba(19,20,82,0.02)] transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 md:py-6 flex items-center justify-between gap-4 text-left outline-none"
                  >
                    <span className="font-extrabold text-[#131452] text-base md:text-lg tracking-tight group-hover:text-[#962065] transition-colors duration-200">
                      {faq.question}
                    </span>
                    <span 
                      className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                        isOpen 
                          ? "bg-[#962065] text-white rotate-180" 
                          : "bg-[#131452]/5 text-[#131452]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-gray-600 text-sm md:text-base font-medium leading-relaxed border-t border-gray-50 pt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;