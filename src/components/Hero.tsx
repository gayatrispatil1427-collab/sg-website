import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/studioData';
import type { NavigationPage } from '../types';

interface HeroProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const Hero = ({ onNavigate, onOpenBooking }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full h-screen min-h-[720px] flex items-center justify-center overflow-hidden bg-[#1C1B18]">

      {/* 1. Photography Slide Stack */}
      {HERO_SLIDES.map((item, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-full object-cover transition-transform duration-[9000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'
                }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/90 via-[#1C1B18]/40 to-[#1C1B18]/30" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(28,27,24,0.6)_100%)]" />
          </div>
        );
      })}

      {/* 2. Main Hero Content Container */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 lg:px-12 flex flex-col justify-between h-full pt-32 pb-16 text-left">


        {/* Center Typography & Action Controls */}
        <div className="my-auto max-w-3xl space-y-6">
          <div className="inline-block px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#C5A880] text-[11px] uppercase tracking-[0.25em] font-semibold">
            {slide.subtitle}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury text-[#FAF8F5] leading-[1.08] font-normal tracking-tight">
            {slide.title}
          </h1>

          <p className="text-base sm:text-lg text-[#EAE6DF]/90 font-light max-w-xl leading-relaxed">
            {slide.tagline}
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-8 py-4 bg-[#C5A880] text-[#1C1B18] rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-[#FAF8F5] transition-all duration-300 shadow-xl flex items-center space-x-3 group"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-[#FAF8F5] border border-white/30 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span>Reserve Session</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
