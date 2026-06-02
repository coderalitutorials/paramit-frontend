









import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter tabs for premium UX
  const categories = ["All", "Insects", "Rodents & Wildlife", "Birds & Prevention"];

  const servicesData = [
    { 
      id: 1,
      cat: "Insects",
      title: "Ants Control", 
      image: "/images/ants.webp", 
      details: "Professional ants control treatment to remove ant activity and protect your home or business from recurring infestations." 
    },
    { 
      id: 2,
      cat: "Insects",
      title: "Bed Bugs Control", 
      image: "/images/bedbugs.webp", 
      details: "Effective bed bugs treatment for bedrooms, furniture, mattresses and affected areas using safe professional methods." 
    },
    { 
      id: 3,
      cat: "Insects",
      title: "Carpet Moth Control Treatment", 
      image: "/images/moth.webp", 
      details: "Specialist carpet moth treatment to help protect carpets, rugs and soft furnishings from moth damage." 
    },
    { 
      id: 4,
      cat: "Insects",
      title: "Carpet Beetle Treatment", 
      image: "/images/beetle.webp", 
      details: "Safe targeted extraction of fabric-damaging beetle infestations in residential or commercial premises." 
    },
    { 
      id: 5,
      cat: "Insects",
      title: "Cockroach Control Service", 
      image: "/images/cockroach.webp", 
      details: "High-grade gel baiting and premium flushing treatments for instant and total cockroach eradication." 
    },
    { 
      id: 6,
      cat: "Rodents & Wildlife",
      title: "Rats & Mice Control", 
      image: "/images/rodents.webp", 
      details: "Fast tracking, trapping, and high-efficiency rodent removal protocols to secure your perimeter structures." 
    },
    { 
      id: 7,
      cat: "Insects",
      title: "Flea Control", 
      image: "/images/flea.webp", 
      details: "Residual spraying treatments optimized for domestic and commercial areas to clear flea larvae." 
    },
    {  
      id: 8,
      cat: "Insects",
      title: "Wasps Nest Control", 
      image: "/images/wasps.webp", 
      details: "Safe, rapid neutralizing of active wasp structures with targeted protective safety gear." 
    },
    { 
      id: 9,
      cat: "Insects",
      title: "Bumble Bee Control", 
      image: "/images/bee.webp", 
      details: "Environmentally conscious management plans and secure live relocation when possible." 
    },
    { 
      id: 10,
      cat: "Rodents & Wildlife",
      title: "Squirrel Control", 
      image: "/images/squirrel.webp", 
      details: "Humane trapping and systematic proofing to clear lofts and attic areas securely." 
    },
    { 
      id: 11,
      cat: "Birds & Prevention",
      title: "Hygiene & Proofing Services", 
      image: "/images/proofing.webp", 
      details: "Sealing strategic access gaps, professional sanitization, and heavy-duty structural blocks." 
    },
    { 
      id: 12,
      cat: "Birds & Prevention",
      title: "Birds Control Services", 
      image: "/images/birds.webp", 
      details: "Humane custom netting, tensioned wires, and visual deterrent bird system installations." 
    }
  ];

  // Listener to handle redirection scrolling effect smoothly
  useEffect(() => {
    if (location.state) {
      const targetCategory = location.state.category || "All";
      setSelectedCategory(targetCategory);

      if (location.state.scrollToService) {
        const targetServiceTitle = location.state.scrollToService;
        
        const timer = setTimeout(() => {
          const element = document.querySelector(`[data-title="${targetServiceTitle}"]`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 300);

        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const filteredServices = selectedCategory === "All" 
    ? servicesData 
    : servicesData.filter(s => s.cat === selectedCategory);

  return (
    <main className="bg-[#FAFAFC] min-h-screen">
      
      {/* Header Section */}
      <section className="bg-[#131452] text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <p className="text-[#962065] font-bold uppercase tracking-wider text-sm mb-3">
            Our Offerings
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Professional Services
          </h1>
        </div>
      </section>

      {/* Main Services Page Layout */}
      <section className="py-24 max-w-7xl mx-auto px-5">
        
        {/* Category Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#131452] text-white shadow-md"
                  : "bg-white text-[#131452] border border-gray-200 hover:border-[#962065] hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              data-title={service.title}
              onClick={() => navigate("/contact-us")} // Pura card clickable bana dya
              className="group relative rounded-[2rem] overflow-hidden min-h-[430px] shadow-xl cursor-pointer transition duration-300 transform hover:-translate-y-1"
            >
              {/* Image config with exact scale effect */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              {/* Gradient mapping */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131452]/95 via-[#131452]/50 to-transparent" />

              {/* Text Context layout */}
              <div className="absolute bottom-0 p-8 text-white w-full">
                <h3 className="text-2xl font-black mb-3">
                  {service.title}
                </h3>
                <p className="text-white/85 leading-relaxed mb-5">
                  {service.details}
                </p>
                {/* Button UI retained for clean visuals, but actions inherit from parent wrapper */}
                <div className="inline-block bg-[#962065] px-6 py-3 rounded-xl font-bold group-hover:bg-white group-hover:text-[#131452] transition">
                  Contact Us
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;