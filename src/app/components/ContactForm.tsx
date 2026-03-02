import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We\'ll be in touch soon! (Demo only - no actual submission)');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden">
      {/* Wave Divider Top */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-auto rotate-180">
          <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600">
            Let's discuss how we can make your space sparkle!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-2xl text-gray-900 focus:border-purple-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-2xl text-gray-900 focus:border-purple-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-2xl text-gray-900 focus:border-purple-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-2xl text-gray-900 focus:border-purple-400 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="construction">Post-Construction</option>
                  <option value="recurring">Recurring Service</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tell Us About Your Needs</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-2xl text-gray-900 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-200"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="p-8 bg-white rounded-3xl shadow-lg border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600 mb-1">Call or Text</p>
                    <a href="tel:5165557890" className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors">
                      (516) 555-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-pink-400 to-rose-400 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600 mb-1">Email</p>
                    <a href="mailto:margot@spotlesshomecleaning.com" className="text-xl font-bold text-gray-900 hover:text-purple-600 transition-colors break-all">
                      margot@spotlesshomecleaning.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-400 to-violet-400 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600 mb-1">Service Area</p>
                    <p className="text-xl font-bold text-gray-900">
                      New Hyde Park & Surrounding Areas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-pink-400 to-purple-400 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-600 mb-1">Hours</p>
                    <p className="text-lg font-bold text-gray-900">
                      Mon-Sat: 8am - 6pm
                    </p>
                    <p className="text-sm text-gray-600">Flexible scheduling available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Same-day quotes available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Eco-friendly cleaning products
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  100% satisfaction guaranteed
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Insured & bonded for your peace of mind
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
