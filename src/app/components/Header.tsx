import { Phone, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-purple-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Centered Logo */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-purple-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Spotless Home Cleaning
            </h1>
            <Sparkles className="w-7 h-7 text-pink-400" />
          </div>
          
          {/* Centered Navigation */}
          <div className="flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-purple-500 transition-colors font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-purple-500 transition-colors font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-purple-500 transition-colors font-medium">About</a>
            <a href="#reviews" className="text-gray-700 hover:text-purple-500 transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-500 transition-colors font-medium">Contact</a>
          </div>
        </div>

        {/* Call Button */}
        <div className="flex justify-center">
          <a href="tel:5165557890" className="flex items-center gap-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all font-semibold shadow-lg shadow-purple-200">
            <Phone className="w-4 h-4" />
            <span>(516) 555-7890</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
