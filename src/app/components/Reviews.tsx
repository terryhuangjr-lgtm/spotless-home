import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Jennifer Martinez",
      date: "2 weeks ago",
      rating: 5,
      text: "Vicki is absolutely amazing! She cleaned my home before a big party and everything was spotless. Her attention to detail is incredible - she even organized my pantry without being asked! Highly recommend!"
    },
    {
      name: "David Chen",
      date: "1 month ago",
      rating: 5,
      text: "We've been using Vicki's services for 6 months now and couldn't be happier. She's reliable, thorough, and trustworthy. Coming home to a clean house every week is such a relief!"
    },
    {
      name: "Sarah Johnson",
      date: "1 month ago",
      rating: 5,
      text: "Best cleaning service on Long Island! Vicki is professional, friendly, and does an outstanding job. She uses eco-friendly products which is important to us with young kids. Worth every penny!"
    },
    {
      name: "Michael & Lisa K.",
      date: "2 months ago",
      rating: 5,
      text: "After our kitchen renovation, Vicki did a post-construction deep clean that was phenomenal. She removed all the dust and left everything sparkling. We now use her bi-weekly service!"
    },
    {
      name: "Rachel Goldstein",
      date: "2 months ago",
      rating: 5,
      text: "Vicki is a gem! She's been cleaning my elderly mother's home and treats her with such kindness and respect. The house always looks beautiful and mom looks forward to her visits."
    },
    {
      name: "Tom Anderson",
      date: "3 months ago",
      rating: 5,
      text: "Excellent service! Vicki cleaned our office space and it's never looked better. She's flexible with scheduling and always arrives on time. Highly professional and reasonably priced."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            What Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-gray-600">
            40+ five-star Google reviews from happy clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="p-8 bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="border-t border-purple-100 pt-4">
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
