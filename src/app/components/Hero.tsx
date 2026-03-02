import { Phone, Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-white py-24 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <Star className="w-4 h-4 fill-purple-700" />
              40+ Five-Star Reviews
            </div>
            
            <h1 className="text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Your Home,
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Sparkling Clean
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional cleaning services in New Hyde Park and surrounding areas. 
              Let us handle the dirty work so you can enjoy what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:5165557890" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg shadow-purple-200 text-center font-semibold flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Book a Cleaning
              </a>
              <a href="#services" className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full hover:bg-purple-50 transition-all text-center font-semibold">
                Our Services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">Eco-Friendly Products</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-500" />
                <span className="text-sm font-medium text-gray-700">Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-medium text-gray-700">Woman-Owned</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-purple-200">
              <img
                src="https://images.unsplash.com/photo-1648475235027-21cd0ed83671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGhvbWUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcyMjM5NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Beautiful clean modern living room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">40+</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Happy Clients</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
