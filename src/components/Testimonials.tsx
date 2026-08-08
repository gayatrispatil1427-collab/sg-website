import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 md:py-36 bg-[#F5F2EB] border-t border-[#EAE6DF] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-4">
          Client Acclaim & Endorsements
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18] mb-16">
          Words from Creative Directors & Collectors
        </h2>

        {/* Testimonial Card Frame */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-14 border border-[#EAE6DF] shadow-xl relative text-left">
          <Quote className="w-12 h-12 text-[#C5A880]/40 mb-6" />

          {/* Quote Text */}
          <blockquote className="text-xl sm:text-3xl font-serif-luxury text-[#1C1B18] leading-relaxed mb-8 font-light italic">
            "{item.quote}"
          </blockquote>

          {/* Client Bio & Stars */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#EAE6DF]">
            <div className="flex items-center space-x-4">
              <img
                src={item.avatar}
                alt={item.clientName}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#C5A880]"
              />
              <div>
                <h4 className="text-lg font-serif-luxury text-[#1C1B18] leading-none mb-1">
                  {item.clientName}
                </h4>
                <p className="text-xs text-[#1C1B18]/60 font-medium">
                  {item.clientRole} — <span className="text-[#C5A880]">{item.brandOrEvent}</span>
                </p>
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#C5A880] fill-[#C5A880]" />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white border border-[#EAE6DF] text-[#1C1B18] hover:bg-[#C5A880] hover:text-white transition-colors shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs uppercase tracking-widest text-[#1C1B18]/60 font-mono">
            0{currentIndex + 1} / 0{TESTIMONIALS.length}
          </span>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white border border-[#EAE6DF] text-[#1C1B18] hover:bg-[#C5A880] hover:text-white transition-colors shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
