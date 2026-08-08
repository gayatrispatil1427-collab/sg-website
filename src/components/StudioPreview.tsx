import { ArrowRight, Sparkles } from 'lucide-react';
import { STUDIO_SPECS } from '../data/studioData';
import type { NavigationPage } from '../types';

interface StudioPreviewProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const StudioPreview = ({ onNavigate, onOpenBooking }: StudioPreviewProps) => {
  return (
    <section id="studio" className="py-24 md:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="max-w-3xl text-left space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
            State of the Art Facilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18] leading-[1.1]">
            Architectural Stages Crafted for High-End Visionaries.
          </h2>
          <p className="text-base text-[#1C1B18]/70 font-light leading-relaxed">
            Spanning over 6,000 square feet in our Sangli flagship location, our light-flooded stages provide flawless color reproduction, tethered workstations, and private VIP client suites.
          </p>
        </div>

        {/* Studio Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {STUDIO_SPECS.map((spec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE6DF]">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#1C1B18]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-wider rounded-full">
                  {spec.dimension}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif-luxury text-[#1C1B18] group-hover:text-[#C5A880] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-[#1C1B18]/70 font-light leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-4 border-t border-[#EAE6DF]/70 text-xs">
                  {spec.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 text-[#1C1B18]/80">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[#1C1B18] text-[#FAF8F5] p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 text-left z-10 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              Rental & Production Inquiries
            </span>
            <h4 className="text-2xl md:text-3xl font-serif-luxury">
              Need Stage A or Commercial Lighting Systems?
            </h4>
            <p className="text-xs text-[#EAE6DF]/70 font-light">
              Our studio concierge handles gear rentals, set builders, digital tech assistants, and catering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 z-10">
            <button
              onClick={() => onNavigate('studio')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs uppercase tracking-widest font-medium text-white transition-colors"
            >
              View Full Gear Specs
            </button>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-[#C5A880] text-[#1C1B18] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors flex items-center space-x-2"
            >
              <span>Check Stage Dates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
