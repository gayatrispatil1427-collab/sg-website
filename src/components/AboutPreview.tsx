import { ArrowUpRight } from 'lucide-react';
import type { NavigationPage } from '../types';

interface AboutPreviewProps {
  onNavigate: (page: NavigationPage) => void;
}

export const AboutPreview = ({ onNavigate }: AboutPreviewProps) => {
  return (
    <section className="py-24 md:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Editorial Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-[#EAE6DF]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop"
                alt="Studio Founder Principal Director"
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#1C1B18]/80 via-[#1C1B18]/40 to-transparent text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-1">
                  Creative Direction
                </span>
                <p className="font-serif-luxury text-xl">Elena Rostova & International Collective</p>
              </div>
            </div>

            {/* Overlapping Floating Secondary Image */}
            <div className="hidden md:block absolute -bottom-10 -right-8 z-20 w-64 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5]">
              <img
                src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop"
                alt="Daylight Stage A"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Soft decorative accent badge */}
            <div className="absolute -top-6 -left-6 z-0 w-32 h-32 bg-[#C5A880]/15 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Column - Typography & Narrative */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-3">
                Philosophy & Heritage
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18] leading-[1.15]">
                Sculpting Light Into Permanent Visual Memories.
              </h2>
            </div>

            <p className="text-base text-[#1C1B18]/75 leading-relaxed font-light">
              Headquartered in Sangli, Maharashtra, <strong className="font-medium text-[#1C1B18]">AETHERIA</strong> is a boutique photography studio built on the harmony of medium format precision, organic daylight, and authentic emotion.
            </p>

            <p className="text-sm text-[#1C1B18]/65 leading-relaxed font-light">
              Whether documenting luxury destination celebrations or producing fine-art portraits, we approach every frame with quiet elegance and uncompromising optical detail.
            </p>

            {/* Studio Key Metrics Grid */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-[#EAE6DF]">
              <div>
                <span className="block font-serif-luxury text-3xl md:text-4xl text-[#1C1B18]">14+</span>
                <span className="text-[11px] uppercase tracking-wider text-[#1C1B18]/60 font-medium">Years Active</span>
              </div>
              <div>
                <span className="block font-serif-luxury text-3xl md:text-4xl text-[#C5A880]">85+</span>
                <span className="text-[11px] uppercase tracking-wider text-[#1C1B18]/60 font-medium">Luxury Features</span>
              </div>
              <div>
                <span className="block font-serif-luxury text-3xl md:text-4xl text-[#1C1B18]">04</span>
                <span className="text-[11px] uppercase tracking-wider text-[#1C1B18]/60 font-medium">Master Stages</span>
              </div>
            </div>

            {/* Signature & Link CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
              <div>
                <span className="font-display-luxury italic text-2xl text-[#1C1B18] block">
                  Elena Rostova
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#1C1B18]/50">
                  Founder & Principal Director
                </span>
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 bg-[#1C1B18] text-[#FAF8F5] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#C5A880] transition-colors duration-300 flex items-center space-x-2 group"
              >
                <span>Read Studio Story</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
