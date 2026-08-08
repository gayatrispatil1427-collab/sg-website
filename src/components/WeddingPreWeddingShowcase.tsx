import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import type { NavigationPage } from '../types';

interface WeddingPreWeddingShowcaseProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const WeddingPreWeddingShowcase = ({ onNavigate, onOpenBooking }: WeddingPreWeddingShowcaseProps) => {
  return (
    <section className="py-24 bg-[#1C1B18] text-[#FAF8F5] relative overflow-hidden">

      {/* Soft Ambient Light Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A880]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-20 text-left">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              <Heart className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Flagship Division</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-luxury text-[#FAF8F5] leading-tight">
              Wedding & Pre-Wedding Artistry.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#EAE6DF]/70 max-w-md font-light leading-relaxed">
            Documenting historic destination vows and high-fashion pre-wedding editorial strolls across grand venues and scenic locations.
          </p>
        </div>

        {/* Dual Asymmetrical Editorial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Card 1: Royal Destination Wedding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-[#262420] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between group"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/img/bb.jpg"
                alt="Royal Destination Wedding"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262420] via-transparent to-transparent opacity-80" />
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/70 backdrop-blur-md text-[#C5A880] text-[10px] uppercase tracking-widest font-semibold rounded-full border border-white/10">
                Destination Wedding
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block">
                  DESTINATION & LUXURY VENUES
                </span>
                <h3 className="text-3xl font-serif-luxury text-white">
                  Royal Heritage Vows & Grand Nuptials
                </h3>
                <p className="text-xs text-[#EAE6DF]/75 font-light leading-relaxed">
                  Discreet photojournalistic coverage capturing candlelit receptions, grand arrivals, and medium format silver gelatin prints.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="px-6 py-3 bg-[#C5A880] text-[#1C1B18] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors flex items-center space-x-2"
                >
                  <span>Explore Wedding Stories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Pre-Wedding Editorial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-[#262420] rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between group"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop"
                alt="Pre-Wedding Editorial"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262420] via-transparent to-transparent opacity-80" />
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/70 backdrop-blur-md text-[#C5A880] text-[10px] uppercase tracking-widest font-semibold rounded-full border border-white/10">
                Pre-Wedding Editorial
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block">
                  PRE-WEDDING LOCATIONS
                </span>
                <h3 className="text-3xl font-serif-luxury text-white">
                  High-Fashion Sunrise Editorial Strolls
                </h3>
                <p className="text-xs text-[#EAE6DF]/75 font-light leading-relaxed">
                  Magazine-grade portraiture crafted along scenic locations at dawn with dedicated hair, makeup, and stylist teams.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="px-6 py-3 bg-white/10 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A880] hover:text-[#1C1B18] transition-colors flex items-center space-x-2 border border-white/20"
                >
                  <span>Explore Pre-Wedding</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
