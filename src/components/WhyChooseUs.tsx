import { motion } from 'framer-motion';
import { Camera, ShieldCheck, Globe, Sparkles, Award } from 'lucide-react';

export const WhyChooseUs = () => {
  const pillars = [
    {
      icon: Camera,
      title: 'Medium Format 100MP Optics',
      subtitle: 'OPTICAL PURITY',
      description: 'We shoot exclusively on Hasselblad H6D-100c and Leica medium format systems, delivering uncompressed dynamic range, lifelike volume, and subtle skin micro-textures.'
    },
    {
      icon: ShieldCheck,
      title: 'Master Tonal Retouching',
      subtitle: 'FINE ART CRAFTSMANSHIP',
      description: 'Our in-house master retouchers hand-grade every frame to preserve authentic micro-textures, creating custom silver gelatin contrast curves with zero heavy AI artifacts.'
    },
    {
      icon: Globe,
      title: 'Worldwide Destination Concierge',
      subtitle: 'GLOBAL PERMITTING',
      description: 'Streamlined permitting and exclusive access to historic heritage villas, private estates, and panoramic rooftop terraces for landmark shoots.'
    },
    {
      icon: Sparkles,
      title: 'Unrivaled Client Hospitality',
      subtitle: 'VIP MEZZANINE EXPERIENCE',
      description: 'Relax in our 1,400 sq. ft. mezzanine lounge featuring artisanal espresso, champagne bars, soundproof viewing pods, and instant high-speed fiber tethering lines.'
    }
  ];

  return (
    <section className="py-24 bg-[#FAF8F5] text-[#1C1B18] border-t border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 text-left">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE6DF] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>4 Pillars of Distinction</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-serif-luxury leading-tight">
              Why Discerning Clients Choose Aetheria.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#1C1B18]/70 max-w-md font-light leading-relaxed">
            Our atelier combines technical medium format mastery with unmatched client hospitality to deliver museum-grade heirloom art.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[#EAE6DF] shadow-md hover:shadow-xl transition-all duration-500 space-y-4 hover-lift"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1C1B18] text-[#C5A880] flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                  {pillar.subtitle}
                </span>
                <h3 className="text-xl font-serif-luxury text-[#1C1B18]">{pillar.title}</h3>
                <p className="text-xs text-[#1C1B18]/70 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
