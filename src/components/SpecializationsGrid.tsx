import { motion } from 'framer-motion';
import { Camera, Sparkles, Film, Gift, Heart, Users, Sun, HeartHandshake, Award, Shield, Flame, Zap, ArrowRight } from 'lucide-react';
import { STUDIO_SERVICES } from '../data/studioData';
import type { NavigationPage } from '../types';

interface SpecializationsGridProps {
  onNavigate: (page: NavigationPage) => void;
}


const ICON_MAP: Record<string, any> = {
  Camera,
  Sparkles,
  Film,
  Gift,
  Heart,
  Users,
  Sun,
  HeartHandshake,
  Award,
  Shield,
  Flame,
  Zap
};

export const SpecializationsGrid = ({ onNavigate }: SpecializationsGridProps) => {
  return (
    <section className="py-24 bg-[#FAF8F5] text-[#1C1B18]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 text-left">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE6DF] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Service Atelier Specializations</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-luxury leading-tight">
              Crafted Lens & Film Divisions.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#1C1B18]/70 max-w-md font-light leading-relaxed">
            From 8K Hasselblad destination nuptials to daylight newborn portraiture, explore our specialized studio divisions.
          </p>
        </div>

        {/* 12 Specializations Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDIO_SERVICES.map((serv, idx) => {
            const IconComponent = ICON_MAP[serv.iconName] || Camera;

            return (
              <motion.div
                key={serv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between cursor-pointer"
                onClick={() => onNavigate('portfolio')}
              >
                <div>
                  {/* Image Container with Hover Scale */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE6DF]">
                    <img
                      src={serv.image}
                      alt={serv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    <div className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-[#1C1B18] shadow-md">
                      <IconComponent className="w-4 h-4 text-[#C5A880]" />
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#1C1B18]/80 text-[#FAF8F5] text-[10px] uppercase tracking-widest font-semibold rounded-full backdrop-blur-md">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-8 space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                      {serv.subtitle}
                    </span>
                    <h3 className="text-2xl font-serif-luxury text-[#1C1B18] group-hover:text-[#C5A880] transition-colors leading-snug">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-[#1C1B18]/70 font-light leading-relaxed">
                      {serv.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 bg-[#FAF8F5] border-t border-[#EAE6DF] flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1B18]">
                    Explore Division
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('portfolio');
                    }}
                    className="p-2 rounded-full bg-[#1C1B18] text-white hover:bg-[#C5A880] hover:text-[#1C1B18] transition-colors group-hover:translate-x-1"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
