import { ArrowUpRight, Sparkles, Phone } from 'lucide-react';
import type { NavigationPage } from '../types';

interface ContactCTAProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const ContactCTA = ({ onNavigate, onOpenBooking }: ContactCTAProps) => {
  return (
    <section className="py-24 md:py-32 bg-[#F5F2EB] relative border-t border-[#EAE6DF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative bg-[#1C1B18] text-[#FAF8F5] rounded-3xl p-10 md:p-20 overflow-hidden shadow-2xl text-center space-y-8">
          
          {/* Ambient Decorative Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#C5A88033,transparent_60%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/10 rounded-full border border-white/20 text-[#C5A880] text-xs uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio & Destination Commissions 2026 / 2027</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif-luxury leading-[1.08] font-normal">
              Let’s Create Your Next Masterpiece in Light.
            </h2>

            <p className="text-base sm:text-lg text-[#EAE6DF]/80 font-light max-w-2xl mx-auto leading-relaxed">
              Accepting shoot bookings for weddings, pre-wedding destination films, birthday galas, and family legacy monographs across Sangli, Pune, Kolhapur, and global locations.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-9 py-4 bg-[#C5A880] text-[#1C1B18] rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl flex items-center space-x-3 group"
              >
                <span>Initiate Booking Request</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-9 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>Contact Studio Concierge</span>
              </button>
            </div>
          </div>

          <div className="relative z-10 pt-8 border-t border-white/10 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-[#EAE6DF]/70">
            <span>Office: <a href="tel:9130053081" className="text-[#C5A880] hover:underline font-semibold">9130053081</a></span>
            <span>•</span>
            <span>Mobile: <a href="tel:9422427981" className="text-[#C5A880] hover:underline font-semibold">9422427981</a></span>
            <span>•</span>
            <span>Hours: 9:30 AM – 8:30 PM (Daily)</span>
          </div>

        </div>
      </div>
    </section>
  );
};
