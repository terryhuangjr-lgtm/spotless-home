import { Home, Briefcase, Sparkles, Clock, Wind, Droplet } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Deep cleaning, regular maintenance, move-in/move-out services for your home.",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: Briefcase,
      title: "Commercial Cleaning",
      description: "Office spaces, retail stores, and professional environments kept pristine.",
      color: "from-pink-400 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Thorough top-to-bottom cleaning for that extra shine and freshness.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Wind,
      title: "Post-Construction",
      description: "Remove dust and debris after renovations or construction projects.",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: Droplet,
      title: "Green Cleaning",
      description: "Eco-friendly, non-toxic products safe for kids, pets, and the planet.",
      color: "from-emerald-400 to-teal-400"
    },
    {
      icon: Clock,
      title: "Recurring Service",
      description: "Weekly, bi-weekly, or monthly plans to keep your space consistently clean.",
      color: "from-violet-400 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-gradient-to-br from-white to-purple-50/50 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-purple-100 transition-all border border-purple-100 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-200 font-semibold">
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
