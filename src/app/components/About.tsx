import { Heart, Award, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-auto rotate-180">
          <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Meet Margot,
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Spotless Home Cleaning Owner
              </span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hi! I'm Margot, and I started Spotless Home Cleaning with a simple mission: 
              to give Long Island families the gift of time by taking care of their cleaning needs 
              with care, attention to detail, and a personal touch.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              As a woman-owned local business, I understand the importance of trust when 
              welcoming someone into your home. That's why every cleaning is done with the 
              same care and attention I'd give my own space.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Personal Touch</h3>
                  <p className="text-gray-600 text-sm">Every home gets individual attention</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-400 to-rose-400 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Trusted Service</h3>
                  <p className="text-gray-600 text-sm">Insured, bonded & background checked</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-400 to-violet-400 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">40+ Reviews</h3>
                  <p className="text-gray-600 text-sm">5-star rated on Google</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-pink-400 to-purple-400 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Local & Proud</h3>
                  <p className="text-gray-600 text-sm">Serving New Hyde Park & beyond</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-purple-200">
              <img
                src="https://images.unsplash.com/photo-1758273705723-26ef454252ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNsZWFuaW5nJTIwcHJvZmVzc2lvbmFsJTIwc2VydmljZXxlbnwxfHx8fDE3NzIyMzk3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional cleaning service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
