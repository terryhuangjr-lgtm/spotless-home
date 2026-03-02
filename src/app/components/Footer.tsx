import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Vicki's Secret Cleaning</h3>
            <p className="text-purple-100 leading-relaxed">
              Making Long Island homes sparkle, one clean at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-purple-100">
              <li><a href="#services" className="hover:text-white transition-colors">Residential Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Post-Construction</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Green Cleaning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-purple-100">
              <li><a href="#about" className="hover:text-white transition-colors">About Vicki</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-purple-100">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:5165557890" className="hover:text-white transition-colors">(516) 555-7890</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:vicki@vickisecretcleaning.com" className="hover:text-white transition-colors text-sm">
                  vicki@vickisecretcleaning.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>New Hyde Park, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-400/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-100 text-sm flex items-center gap-2">
            © 2026 Vicki's Secret Cleaning. Made with <Heart className="w-4 h-4 fill-white" /> in New Hyde Park
          </p>
          <div className="flex gap-6 text-sm text-purple-100">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
