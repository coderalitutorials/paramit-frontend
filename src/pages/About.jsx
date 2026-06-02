





import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const stats = [
  { number: 850, suffix: "+", label: "Pest Projects Done" },
  { number: 2, suffix: "k+", label: "Happy Customers" },
  { number: 1000, suffix: "+", label: "Client Reviews" },
  { number: 15, suffix: "+", label: "Years Experience" },
];

const features = [
  {
    title: "Proven Expertise",
    text: "Our trained technicians understand local pest behaviors and provide target-specific treatments for every property.",
  },
  {
    title: "Safe Treatments",
    text: "We utilize advanced, professional methods designed safely around your family, pets, and workplace environment.",
  },
  {
    title: "Reliable Service",
    text: "Paramit Services takes pride in punctual support, explicit clear communication, and permanent long-lasting results.",
  },
  {
    title: "Prevention Focused",
    text: "We go beyond standard eradication. We guide you fully with smart proofing and defensive structural advice.",
  },
];

// Smooth Number Counter Component
const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

// Animation Presets
const gridItemVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const About = () => {
  return (
    <main className="overflow-hidden bg-[#FAFAFC] text-[#131452]">
      
      {/* SECTION 1: BLUE GRADIENT OVERLAY HERO BANNER */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-16 sm:py-24 lg:py-32 bg-[#131452]">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="/images/about/about1.png" 
            alt="Paramit Services Background" 
            //  object-right lagaya hai taake mobile par banda frame ke andar hi rahe 
            className="w-full h-full object-cover object-right md:object-right"
          />
          
          {/* Mobile Overlay: Top-to-Bottom Gradient. Top side par dark blue taake text pop kare, bottom side transparent taake banda clear dikhe */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#131452]/90 via-[#131452]/60 to-transparent z-10 block lg:hidden" />
        </div>

        {/* Desktop Overlay: Left-to-Right Gradient */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#131452] via-[#131452]/80 to-transparent z-10" />
        
        <div className="max-w-7xl mx-auto px-5 w-full relative z-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT CONTENT AREA */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 text-white">
            <span className="bg-[#962065] text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest inline-block shadow-lg shadow-[#962065]/20">
               Who We Are
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Complete Pest Control <br />
              <span className="text-[#962065]">Services & Treatments.</span>
            </h1>
            
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-semibold max-w-2xl">
              At Paramit Services, we don't just clear pests temporarily; we provide complete pest control treatments that protect your property for the long term. Using safe and proven methods, our expert team ensures homes and businesses across Sutton remain completely safe and pest-free.
            </p>

            <div className="h-px bg-white/20 w-full my-4 lg:my-6" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-1">
              <Link
                to="/contact-us"
                className="w-full sm:w-auto text-center bg-[#962065] text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#b02b79] transition-all shadow-xl shadow-[#962065]/30"
              >
                Book a Pest Service
              </Link>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span className="text-[#962065] text-lg">⚡</span> Eco-Friendly Safe Pest Control
              </div>
            </div>
          </div>

          {/* RIGHT FLOATING GLASS BADGE CONTAINER */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl max-w-sm text-white w-full"
            >
              <div className="text-5xl font-black text-[#962065] tracking-tight">15+ Years</div>
              <h3 className="text-lg font-extrabold mt-3 text-white">Trusted Sutton Network</h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed font-medium">
                Delivering flawless protection protocols and clean handovers to domestic and commercial structures.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ROW-BASED ACCORDION STRIPS OVERVIEW */}
      <section className="py-24 bg-[#FAFAFC] relative">
        <div className="max-w-7xl mx-auto px-5">
          
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-[#962065] font-black text-xs uppercase tracking-widest">// Our Work Process</span>
            <h2 className="text-3xl font-black tracking-tight">Professional & Honest Pest Services</h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <p className="text-gray-600 font-medium leading-relaxed">
                We bridge the gap between fast responsive help and highly effective pest control treatments. Every property inspection and treatment is carried out with complete attention to safety and detail.
              </p>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                <img 
                  src="/images/about/about2.png" 
                  alt="Our pest treatment process" 
                  className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* Dynamic Strips Framework */}
            <div className="lg:col-span-7 space-y-4">
              {[
                { id: "01", title: "Customer First Service Protocol", text: "We prioritize friendly customer support, clear advice, and reliable pest treatments designed safely around your family and business." },
                { id: "02", title: "High-Quality Property Inspections", text: "Every treatment handles pest problems at the root with highly specialized care, detailed inspections, and precise safe removal methods." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.01, borderLeftColor: "#962065" }}
                  className="bg-white p-6 rounded-2xl border-l-4 border-transparent shadow-sm flex items-start gap-6 transition-all duration-300"
                >
                  <div className="text-2xl font-black text-[#962065]/30 tracking-tighter">{item.id}</div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#131452]">{item.title}</h3>
                    <p className="text-gray-500 mt-2 text-sm leading-relaxed font-medium">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE PERFORMANCE CORE (STATS) */}
      <section className="bg-[#131452] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-[#962065]/10 to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-4 gap-8 relative z-10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={gridItemVariant}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 text-center backdrop-blur-sm hover:bg-[#962065]/10 hover:border-[#962065]/30 transition-all duration-300"
            >
              <div className="text-4xl font-black tracking-tight text-white">
                <Counter value={item.number} suffix={item.suffix} />
              </div>
              <div className="w-8 h-1 bg-[#962065] mx-auto my-3 rounded-full" />
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: MODULAR SaaS CARDS (WHY CHOOSE US) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-2">
            <span className="text-[#962065] font-black text-xs uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl font-black tracking-tight">Professional Services & Guaranteed Care</h2>
          </div>

          {/* Asymmetric Alternating Grid Stack */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={gridItemVariant}
                whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(19, 20, 82, 0.08)" }}
                className="bg-[#FAFAFC] border border-gray-100 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#131452] text-white flex items-center justify-center text-sm font-bold">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-extrabold tracking-tight text-[#131452]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.text}</p>
                </div>
                
                <div className="pt-6 text-xs font-bold text-[#962065] cursor-pointer hover:underline inline-block">
                  Pest Service Active →
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <Link
              to="/contact-us"
              className="inline-block bg-[#131452] text-white px-10 py-4 rounded-xl font-black uppercase tracking-wider text-xs hover:bg-[#962065] transition-all shadow-xl shadow-blue-900/10"
            >
              Book Appointment
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
};

export default About;










