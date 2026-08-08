import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Camera } from 'lucide-react';
import { CATEGORY_SHOWCASES } from '../data/studioData';
import type { NavigationPage } from '../types';

interface CategoryShowcasesProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const CategoryShowcases = ({ onNavigate, onOpenBooking }: CategoryShowcasesProps) => {
  return (
    <section className="py-24 bg-[#FAF8F5] text-[#1C1B18] space-y-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE6DF] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              <Camera className="w-3.5 h-3.5" />
              <span>Complete Photography Studio Services</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-luxury leading-tight">
              Master Atelier Specializations.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#1C1B18]/70 max-w-md font-light leading-relaxed">
            From destination royal weddings to intimate newborn daylight sessions, explore our master photography divisions.
          </p>
        </div>
      </div>

      {/* 6 Asymmetrical Category Showcase Blocks */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
        {CATEGORY_SHOWCASES.map((item, idx) => {
          const isReverse = idx % 2 !== 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-left ${
                isReverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Block */}
              <div className={`lg:col-span-7 relative ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-[#EAE6DF] group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#1C1B18]/85 text-white text-[10px] uppercase tracking-widest font-semibold rounded-full backdrop-blur-md">
                    Division 0{idx + 1}
                  </div>
                </div>
              </div>

              {/* Text Information Block */}
              <div className={`lg:col-span-5 space-y-6 ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1B18]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#1C1B18]/75 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Feature Bullet List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {item.features.map((feat: string, fIdx: number) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs text-[#1C1B18]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                      <span className="font-light">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={() => onNavigate('portfolio')}
                    className="px-6 py-3 bg-[#1C1B18] text-[#FAF8F5] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A880] hover:text-[#1C1B18] transition-colors flex items-center space-x-2 group"
                  >
                    <span>View {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
