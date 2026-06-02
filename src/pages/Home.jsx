



// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom"; // 👈 Link ki jagah useNavigate import kiya
// import axios from "axios";
// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   animate,
//   useInView,
// } from "framer-motion";
// import toast from "react-hot-toast";

// const homeServices = [
//   {
//     id: 1,
//     title: "Ants Control",
//     image: "/images/ants.webp",
//     details:
//       "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations.",
//   },
//   {
//     id: 2,
//     title: "Bed Bugs Control",
//     image: "/images/bedbugs.webp",
//     details:
//       "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods.",
//   },
//   {
//     id: 3,
//     title: "Carpet Moth Control Treatment",
//     image: "/images/moth.webp",
//     details:
//       "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage.",
//   },
// ];

// const stats = [
//   { number: 450, suffix: "+", label: "Projects Done" },
//   { number: 280, suffix: "+", label: "Active Clients" },
//   { number: 500, suffix: "+", label: "Client Reviews" },
//   { number: 10, suffix: "+", label: "Years Experience" },
// ];

// const processSteps = [
//   "Inspection",
//   "Treatment Plan",
//   "Safe Pest Removal",
//   "Prevention Advice",
// ];

// const Counter = ({ value, suffix }) => {
//   const ref = useRef(null);
//   const motionValue = useMotionValue(0);
//   const rounded = useTransform(motionValue, (latest) => Math.round(latest));
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(motionValue, value, {
//         duration: 2,
//         ease: "easeOut",
//       });
//       return controls.stop;
//     }
//   }, [isInView, motionValue, value]);

//   return (
//     <span ref={ref}>
//       <motion.span>{rounded}</motion.span>
//       {suffix}
//     </span>
//   );
// };

// const Home = () => {
//   const navigate = useNavigate(); // 👈 Hook ko initialize kiya

//   // Callback Form States
//   const [formData, setFormData] = useState({
//     name: "",
//     postcode: "",
//     phone: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     if (e.target.name === "phone") {
//       setPhoneError("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.phone.trim()) {
//       setPhoneError("Phone number is missing");
//       return;
//     }

//     setLoading(true);

//     toast.promise(
//       axios.post("https://paramit-backend.vercel.app/api/callback", formData),
//       {
//         loading: "Submitting your call back request...",
//         success: () => {
//           setFormData({ name: "", postcode: "", phone: "" });
//           setLoading(false);
//           return "Message sent successfully! 📞";
//         },
//         error: (error) => {
//           setLoading(false);
//           return error.response?.data?.message || "Something went wrong. Please try again.";
//         },
//       },
//       {
//         style: {
//           fontFamily: "sans-serif",
//           fontSize: "15px",
//         },
//         success: {
//           style: {
//             background: "rgba(19, 20, 82, 0.95)",
//             color: "#fff",
//             borderRadius: "16px",
//             padding: "16px",
//           },
//         },
//         error: {
//           style: {
//             background: "#962065",
//             color: "#fff",
//             borderRadius: "16px",
//             padding: "16px",
//           },
//         },
//       }
//     );
//   };

//   return (
//     <main className="overflow-hidden bg-white">
//       {/* HERO SECTION */}
//       <section className="relative min-h-[850px] lg:min-h-[780px] flex items-center">
//         <img
//           src="/images/hero.webp"
//           alt="Paramit Services Pest Control"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-[#131452]/95 via-[#131452]/85 to-[#962065]/45" />

//         <div className="relative max-w-7xl mx-auto px-5 w-full pt-20 pb-72 lg:pb-48 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
//           {/* Hero Content Left */}
//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="relative z-30" 
//           >
//             <p className="inline-block bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
//               Sutton Based Pest Control Company
//             </p>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
//               Professional Pest Control Services in Sutton
//             </h1>

//             <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mb-8">
//               Paramit Services provides safe, reliable and professional pest
//               control solutions for homes and businesses across Sutton.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               {/* 👈 Ab Link ki jagah button laga kar onClick par navigate chalaya */}
//               <button
//                 onClick={() => navigate("/services")}
//                 className="bg-[#962065] text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#131452] transition whitespace-nowrap cursor-pointer"
//               >
//                 View Services
//               </button>

//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="bg-white text-[#131452] px-8 py-4 rounded-xl font-bold hover:bg-[#962065] hover:text-white transition whitespace-nowrap cursor-pointer"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </motion.div>

//           {/* Space Layout Adjuster */}
//           <div className="hidden lg:block min-h-[450px]" />
//         </div>

//         {/* HEIGHT-WISE VERTICAL CALL BACK OVERLAY CARD */}
//         <div className="absolute left-0 right-0 -bottom-64 lg:-bottom-48 px-5 z-20 pointer-events-none">
//           <div className="max-w-7xl mx-auto flex justify-end">
//             <div className="w-full lg:max-w-md bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(19,20,82,0.15)] border border-gray-100/80 p-6 md:p-8 pointer-events-auto">
              
//               <h2 className="text-2xl md:text-3xl font-black text-[#131452] text-center mb-1.5 tracking-tight">
//                 Request a call back
//               </h2>
//               <p className="text-gray-500 text-center text-xs md:text-sm mb-6">
//                 Fill the form & we will call you back <span className="font-extrabold text-[#962065]">within 1 hour</span>.
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block mb-1.5 font-bold text-xs md:text-sm text-[#131452]">
//                     Name <span className="text-[#962065]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter Your Name"
//                     required
//                     className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-4 py-3.5 outline-none transition-all focus:bg-white focus:border-[#962065] text-gray-800 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-1.5 font-bold text-xs md:text-sm text-[#131452]">
//                     Postcode <span className="text-[#962065]">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="postcode"
//                     value={formData.postcode}
//                     onChange={handleChange}
//                     placeholder="Enter Your Postcode"
//                     required
//                     className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-4 py-3.5 outline-none transition-all focus:bg-white focus:border-[#962065] text-gray-800 text-sm"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-1.5 font-bold text-xs md:text-sm text-[#131452]">
//                     Phone Number <span className="text-[#962065]">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+44 1234 567890"
//                     required
//                     className={`w-full bg-gray-50/70 border rounded-xl px-4 py-3.5 outline-none transition-all focus:bg-white text-gray-800 text-sm ${
//                       phoneError ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#962065]"
//                     }`}
//                   />
//                 </div>

//                 {phoneError && (
//                   <motion.p
//                     initial={{ opacity: 0, y: -8 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-red-600 font-bold text-xs bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 flex items-center gap-2"
//                   >
//                     ⚠️ {phoneError}
//                   </motion.p>
//                 )}

//                 <motion.button
//                   type="submit"
//                   disabled={loading}
//                   whileHover={{ scale: 1.01 }}
//                   whileTap={{ scale: 0.99 }}
//                   className="w-full bg-[#962065] hover:bg-[#131452] text-white py-4 rounded-xl font-extrabold tracking-wide shadow-lg shadow-purple-900/10 transition-all duration-300 text-sm md:text-base mt-2 disabled:opacity-60 whitespace-nowrap"
//                 >
//                   {loading ? "Processing..." : "Get call back"}
//                 </motion.button>
//               </form>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* STATS SECTION */}
//       <section className="pt-80 lg:pt-64 pb-20 bg-[#F8F6FA]">
//         <div className="max-w-6xl mx-auto px-5">
//           <div className="bg-white rounded-[2rem] shadow-xl border border-[#962065]/10 overflow-hidden">
//             <div className="grid grid-cols-2 lg:grid-cols-4">
//               {stats.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.08 }}
//                   className="p-6 md:p-8 text-center border-b lg:border-b-0 lg:border-r last:border-r-0 border-[#962065]/10"
//                 >
//                   <h3 className="text-3xl md:text-5xl font-black text-[#962065] mb-2">
//                     <Counter value={item.number} suffix={item.suffix} />
//                   </h3>
//                   <p className="text-[#131452] font-bold text-sm uppercase tracking-wider">
//                     {item.label}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT INTRO */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <p className="text-[#962065] font-bold uppercase tracking-wider text-sm mb-3">
//               About Paramit Services
//             </p>
//             <h2 className="text-3xl md:text-5xl font-black text-[#131452] mb-6">
//               Local Pest Control With Safe & Careful Treatment
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed mb-8">
//               We help protect residential and commercial properties from pests
//               using professional inspection, targeted treatment and prevention
//               guidance.
//             </p>

//             <button
//               onClick={() => navigate("/about-us")}
//               className="inline-block bg-[#131452] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#962065] transition cursor-pointer"
//             >
//               Learn More
//             </button>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-5">
//             {[
//               "Fast Local Response",
//               "Safe Treatment Methods",
//               "Home & Business Support",
//               "Long-Term Prevention",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="bg-[#F8F6FA] rounded-2xl p-6 border border-[#962065]/10"
//               >
//                 <span className="text-[#962065] text-2xl font-black">✓</span>
//                 <h3 className="mt-3 text-xl font-black text-[#131452]">
//                   {item}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}
//       {/* <section className="py-24 bg-[#F8F6FA]">
//         <div className="max-w-7xl mx-auto px-5">
//           <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
//             <div>
//               <p className="text-[#962065] font-bold uppercase tracking-wider text-sm mb-3">
//                 Popular Services
//               </p>
//               <h2 className="text-3xl md:text-5xl font-black text-[#131452]">
//                 Pest Problems We Handle
//               </h2>
//             </div>

//             <button
//               onClick={() => navigate("/services")}
//               className="text-[#962065] font-bold hover:text-[#131452] cursor-pointer"
//             >
//               View All Services →
//             </button>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {homeServices.map((service) => (
//               <div
//                 key={service.id}
//                 className="group relative rounded-[2rem] overflow-hidden min-h-[430px] shadow-xl"
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#131452]/95 via-[#131452]/50 to-transparent" />

//                 <div className="absolute bottom-0 p-8 text-white">
//                   <h3 className="text-2xl font-black mb-3">
//                     {service.title}
//                   </h3>
//                   <p className="text-white/85 leading-relaxed mb-5">
//                     {service.details}
//                   </p>
//                   <button
//                     onClick={() => navigate("/contact-us")}
//                     className="inline-block bg-[#962065] px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-[#131452] transition cursor-pointer"
//                   >
//                     Contact Us
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

// <section className="py-24 bg-[#F8F6FA]">
//   <div className="max-w-7xl mx-auto px-5">
//     <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
//       <div>
//         <p className="text-[#962065] font-bold uppercase tracking-wider text-sm mb-3">
//           Popular Services
//         </p>
//         <h2 className="text-3xl md:text-5xl font-black text-[#131452]">
//           Pest Problems We Handle
//         </h2>
//       </div>

//       <button
//         onClick={() => navigate("/services")}
//         className="text-[#962065] font-bold hover:text-[#131452] cursor-pointer"
//       >
//         View All Services →
//       </button>
//     </div>

//     <div className="grid lg:grid-cols-3 gap-8">
//       {homeServices.map((service) => (
//         <div
//           key={service.id}
//           onClick={() => navigate("/contact-us")} // Poora card clickable bana diya
//           className="group relative rounded-[2rem] overflow-hidden min-h-[430px] shadow-xl cursor-pointer transition duration-300 transform hover:-translate-y-1"
//         >
//           {/* Image config with exact scale effect */}
//           <img
//             src={service.image}
//             alt={service.title}
//             className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#131452]/95 via-[#131452]/50 to-transparent" />

//           <div className="absolute bottom-0 p-8 text-white w-full">
//             <h3 className="text-2xl font-black mb-3">
//               {service.title}
//             </h3>
//             <p className="text-white/85 leading-relaxed mb-5">
//               {service.details}
//             </p>
//             {/* Button wrapper changed to div for seamless event handling */}
//             <div className="inline-block bg-[#962065] px-6 py-3 rounded-xl font-bold group-hover:bg-white group-hover:text-[#131452] transition">
//               Contact Us
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>


//       {/* PROCESS */}
//       <section className="py-24 bg-[#131452] text-white">
//         <div className="max-w-7xl mx-auto px-5">
//           <div className="max-w-3xl mb-14">
//             <p className="text-[#d56cad] font-bold uppercase tracking-wider text-sm mb-3">
//               Our Process
//             </p>
//             <h2 className="text-3xl md:text-5xl font-black">
//               Simple Process, Strong Protection
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {processSteps.map((step, index) => (
//               <div
//                 key={step}
//                 className="bg-white/10 border border-white/10 rounded-2xl p-7"
//               >
//                 <span className="text-[#d56cad] text-4xl font-black">
//                   0{index + 1}
//                 </span>
//                 <h3 className="mt-5 text-xl font-black">{step}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
//           <div className="rounded-[2rem] overflow-hidden shadow-2xl">
//             <img
//               src="/images/about.webp"
//               alt="Pest control technician"
//               className="w-full h-[550px] object-cover object-top"
//             />
//           </div>

//           <div>
//             <p className="text-[#962065] font-bold uppercase tracking-wider text-sm mb-3">
//               Why Choose Us
//             </p>
//             <h2 className="text-3xl md:text-5xl font-black text-[#131452] mb-6">
//               Reliable Pest Protection For Your Property
//             </h2>
//             <p className="text-gray-700 text-lg leading-relaxed mb-6">
//               From rodents to insects, our team helps remove pests and reduce
//               the chances of future activity through professional care and
//               practical prevention advice.
//             </p>

//             <div className="space-y-4">
//               {[
//                 "Careful property inspection before treatment",
//                 "Suitable solutions for homes and businesses",
//                 "Clear advice to help prevent pest return",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="bg-[#F8F6FA] rounded-xl px-5 py-4 text-[#131452] font-bold border border-[#962065]/10"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FINAL FIXED CTA SECTION */}
//       <section className="py-20 bg-[#F8F6FA]">
//         <div className="max-w-7xl mx-auto px-5">
//           <div className="rounded-[2rem] bg-gradient-to-r from-[#962065] to-[#131452] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
//             <div>
//               <h2 className="text-3xl md:text-5xl font-black mb-3">
//                 Ready To Book Pest Control?
//               </h2>
//               <p className="text-white/85 text-lg">
//                 Contact Paramit Services today for professional support in
//                 Sutton.
//               </p>
//             </div>

//             <div className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-4 justify-start lg:justify-end">
//               <a
//                 href="tel:07405134787"
//                 className="bg-white text-[#131452] px-6 md:px-8 py-4 rounded-xl font-black text-center whitespace-nowrap flex-shrink-0 min-w-[160px] md:min-w-[180px] block text-sm md:text-base"
//               >
//                 07405 134787
//               </a>
//               <button
//                 onClick={() => navigate("/contact-us")}
//                 className="bg-[#962065] text-white px-6 md:px-8 py-4 rounded-xl font-black text-center border border-white/20 whitespace-nowrap flex-shrink-0 min-w-[160px] md:min-w-[180px] block text-sm md:text-base hover:bg-white/10 transition cursor-pointer"
//               >
//                 Book Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Home;











import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import toast from "react-hot-toast";

const homeServices = [
  {
    id: 1,
    title: "Ants Control",
    image: "/images/ants.webp",
    details:
      "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations.",
  },
  {
    id: 2,
    title: "Bed Bugs Control",
    image: "/images/bedbugs.webp",
    details:
      "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods.",
  },
  {
    id: 3,
    title: "Carpet Moth Control Treatment",
    image: "/images/moth.webp",
    details:
      "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage.",
  },
];

const stats = [
  { number: 450, suffix: "+", label: "Projects Done" },
  { number: 280, suffix: "+", label: "Active Clients" },
  { number: 500, suffix: "+", label: "Client Reviews" },
  { number: 10, suffix: "+", label: "Years Experience" },
];

const processSteps = [
  "Inspection",
  "Treatment Plan",
  "Safe Pest Removal",
  "Prevention Advice",
];

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

const Home = () => {
  const navigate = useNavigate();

  // Callback Form States
  const [formData, setFormData] = useState({
    name: "",
    postcode: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "phone") {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Strict Validation Check
    if (!formData.phone || !formData.phone.trim()) {
      setPhoneError("Phone number is missing");
      return;
    }

    setLoading(true);

    // 2. Fixed Toast Promise Configuration
    toast.promise(
      axios.post("https://paramit-backend.vercel.app/api/callback", formData),
      {
        loading: "Submitting your call back request...",
        success: (response) => {
          setFormData({ name: "", postcode: "", phone: "" });
          setLoading(false);
          return "Message sent successfully! 📞";
        },
        error: (error) => {
          setLoading(false);
          return error.response?.data?.message || "Something went wrong. Please try again.";
        },
      },
      {
        style: {
          fontFamily: "sans-serif",
          fontSize: "15px",
        },
        success: {
          style: {
            background: "rgba(19, 20, 82, 0.95)",
            color: "#fff",
            borderRadius: "16px",
            padding: "16px",
          },
        },
        error: {
          style: {
            background: "#962065",
            color: "#fff",
            borderRadius: "16px",
            padding: "16px",
          },
        },
      }
    ).catch(() => {
      // Catching any unhandled rejection to prevent loading state lock
      setLoading(false);
    });
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[850px] lg:min-h-[780px] flex items-center">
        <img
          src="/images/hero.webp"
          alt="Paramit Services Pest Control"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#131452]/95 via-[#131452]/85 to-[#962065]/45" />

        <div className="relative max-w-7xl mx-auto px-5 w-full pt-20 pb-72 lg:pb-48 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          
          {/* Hero Content Left */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-30" 
          >
            <p className="inline-block bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Sutton Based Pest Control Company
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
              Professional Pest Control Services in Sutton
            </h1>

            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mb-8">
              Paramit Services provides safe, reliable and professional pest
              control solutions for homes and businesses across Sutton.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/services")}
                className="bg-[#962065] text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#131452] transition whitespace-nowrap cursor-pointer"
              >
                View Services
              </button>

              <button
                onClick={() => navigate("/contact-us")}
                className="bg-white text-[#131452] px-8 py-4 rounded-xl font-bold hover:bg-[#962065] hover:text-white transition whitespace-nowrap cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Space Layout Adjuster */}
          <div className="hidden lg:block min-h-[450px]" />
        </div>

        {/* HEIGHT-WISE VERTICAL CALL BACK OVERLAY CARD */}
        <div className="absolute left-0 right-0 -bottom-64 lg:-bottom-48 px-5 z-20 pointer-events-none">
          <div className="max-w-7xl mx-auto flex justify-end">
            <div className="w-full lg:max-w-md bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(19,20,82,0.15)] border border-gray-100/80 p-6 md:p-8 pointer-events-auto">
              
              <h2 className="text-2xl md:text-3xl font-black text-[#131452] text-center mb-1.5 tracking-tight">
                Request a call back
              </h2>
              <p className="text-gray-500 text-center text-xs md:text-sm mb-6">
                Fill the form & we will call you back <span className="font-extrabold text-[#962065]">within 1 hour</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1.5 font-bold text-xs md:text-sm text-[#131452]">
                    Name <span className="text-[#962065]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    required
                    className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-4 py-3.5 outline-none transition-all focus:bg-white focus:border-[#962065] text-gray-800 text-sm"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 font-bold text-xs md:text-sm text-[#131452]">
                    Postcode <span className="text-[#962065]">*</span>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="Enter Your Postcode"
                    required
                    className="w-full bg-gray-50/70 border border-gray-200 rounded-xl px-4 py-3.5 outline-none transition-all focus:bg-white focus:border-[#962065] text-gray-800 text-sm"
                  />
                </div>

                <div>
                  <label className="block mb-1.5 font-bold text-xs md:text-sm text-[#131452]">
                    Phone Number <span className="text-[#962065]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 1234 567890"
                    required // Native HTML requirement check trigger
                    className={`w-full bg-gray-50/70 border rounded-xl px-4 py-3.5 outline-none transition-all focus:bg-white text-gray-800 text-sm ${
                      phoneError ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-[#962065]"
                    }`}
                  />
                </div>

                {phoneError && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 font-bold text-xs bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 flex items-center gap-2"
                  >
                    ⚠️ {phoneError}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-[#962065] hover:bg-[#131452] text-white py-4 rounded-xl font-extrabold tracking-wide shadow-lg shadow-purple-900/10 transition-all duration-300 text-sm md:text-base mt-2 disabled:opacity-60 whitespace-nowrap"
                >
                  {loading ? "Processing..." : "Get call back"}
                </motion.button>
              </form>

            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="pt-80 lg:pt-64 pb-20 bg-[#F8F6FA]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="bg-white rounded-[2rem] shadow-xl border border-[#962065]/10 overflow-hidden">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="p-6 md:p-8 text-center border-b lg:border-b-0 lg:border-r last:border-r-0 border-[#962065]/10"
                >
                  <h3 className="text-3xl md:text-5xl font-black text-[#962065] mb-2">
                    <Counter value={item.number} suffix={item.suffix} />
                  </h3>
                  <p className="text-[#131452] font-bold text-sm uppercase tracking-wider">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#962065] font-bold uppercase tracking-wider text-sm mb-3">
              About Paramit Services
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#131452] mb-6">
              Local Pest Control With Safe & Careful Treatment
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We help protect residential and commercial properties from pests
              using professional inspection, targeted treatment and prevention
              guidance.
            </p>

            <button
              onClick={() => navigate("/about-us")}
              className="inline-block bg-[#131452] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#962065] transition cursor-pointer"
            >
              Learn More
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Fast Local Response",
              "Safe Treatment Methods",
              "Home & Business Support",
              "Long-Term Prevention",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#F8F6FA] rounded-2xl p-6 border border-[#962065]/10"
              >
                <span className="text-[#962065] text-2xl font-black">✓</span>
                <h3 className="mt-3 text-xl font-black text-[#131452]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-[#F8F6FA]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-[#962065] font-bold uppercase tracking-wider text-sm mb-3">
                Popular Services
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-[#131452]">
                Pest Problems We Handle
              </h2>
            </div>

            <button
              onClick={() => navigate("/services")}
              className="text-[#962065] font-bold hover:text-[#131452] cursor-pointer"
            >
              View All Services →
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {homeServices.map((service) => (
              <div
                key={service.id}
                onClick={() => navigate("/contact-us")}
                className="group relative rounded-[2rem] overflow-hidden min-h-[430px] shadow-xl cursor-pointer transition duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131452]/95 via-[#131452]/50 to-transparent" />

                <div className="absolute bottom-0 p-8 text-white w-full">
                  <h3 className="text-2xl font-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/85 leading-relaxed mb-5">
                    {service.details}
                  </p>
                  <div className="inline-block bg-[#962065] px-6 py-3 rounded-xl font-bold group-hover:bg-white group-hover:text-[#131452] transition">
                    Contact Us
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-[#131452] text-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="max-w-3xl mb-14">
            <p className="text-[#d56cad] font-bold uppercase tracking-wider text-sm mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-5xl font-black">
              Simple Process, Strong Protection
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="bg-white/10 border border-white/10 rounded-2xl p-7"
              >
                <span className="text-[#d56cad] text-4xl font-black">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-black">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="/images/about.webp"
              alt="Pest control technician"
              className="w-full h-[550px] object-cover object-top"
            />
          </div>

          <div>
            <p className="text-[#962065] font-bold uppercase tracking-wider text-sm mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-[#131452] mb-6">
              Reliable Pest Protection For Your Property
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              From rodents to insects, our team helps remove pests and reduce
              the chances of future activity through professional care and
              practical prevention advice.
            </p>

            <div className="space-y-4">
              {[
                "Careful property inspection before treatment",
                "Suitable solutions for homes and businesses",
                "Clear advice to help prevent pest return",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#F8F6FA] rounded-xl px-5 py-4 text-[#131452] font-bold border border-[#962065]/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL FIXED CTA SECTION */}
      <section className="py-20 bg-[#F8F6FA]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#962065] to-[#131452] p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-3">
                Ready To Book Pest Control?
              </h2>
              <p className="text-white/85 text-lg">
                Contact Paramit Services today for professional support in
                Sutton.
              </p>
            </div>

            <div className="flex flex-row flex-wrap sm:flex-nowrap items-center gap-4 justify-start lg:justify-end">
              <a
                href="tel:07405134787"
                className="bg-white text-[#131452] px-6 md:px-8 py-4 rounded-xl font-black text-center whitespace-nowrap flex-shrink-0 min-w-[160px] md:min-w-[180px] block text-sm md:text-base"
              >
                07405 134787
              </a>
              <button
                onClick={() => navigate("/contact-us")}
                className="bg-[#962065] text-white px-6 md:px-8 py-4 rounded-xl font-black text-center border border-white/20 whitespace-nowrap flex-shrink-0 min-w-[160px] md:min-w-[180px] block text-sm md:text-base hover:bg-white/10 transition cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;