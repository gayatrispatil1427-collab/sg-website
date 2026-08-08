import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, CheckCircle2, Sparkles, Film, Maximize2 } from 'lucide-react';
import type { NavigationPage } from '../types';

interface StudioPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const StudioPage = ({ onOpenBooking }: StudioPageProps) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [selectedBts, setSelectedBts] = useState<string | null>(null);

  const stages = [
    {
      id: 0,
      title: 'Stage A — The Great Daylight Cyclorama',
      sqft: '3,200 sq. ft. • 22ft Ceiling',
      windows: '18ft South-Facing Window Wall',
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1600&auto=format&fit=crop',
      features: [
        '360° Seamless White Cyclorama Wall',
        'Motorized Overhead Light Truss System',
        '18ft South-facing Floor-to-Ceiling Solar Glass',
        'Private Hair & Makeup Suite with Daylight Bulbs'
      ],
      desc: 'Flooded with diffused natural sunlight from sunrise to dusk. Engineered for high-fashion lookbooks, editorial campaigns, and large-scale architectural set builds.'
    },
    {
      id: 1,
      title: 'Stage B — Strobe Vault & Blackout Chamber',
      sqft: '2,400 sq. ft. • Total Blackout Control',
      windows: 'Zero Light Leak Acoustic Walls',
      image: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1600&auto=format&fit=crop',
      features: [
        'Profoto Pro-11 2400W Generator Array',
        'Briese Focus Para 220 & 180 Light Modifiers',
        'Soundproof Matte Black Walls & Matte Concrete',
        'Direct Vehicle & Set Loading Dock Access'
      ],
      desc: 'Designed for total lighting command. Ideal for high-contrast portraiture, jewelry micro-reflection sculpting, and cinematic strobe choreography.'
    },
    {
      id: 2,
      title: 'Stage C — VIP Mezzanine & Creative Lounge',
      sqft: '1,400 sq. ft. • Private Executive Loft',
      windows: 'Overlooking Stage A Cyclorama',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      features: [
        'Artisanal Espresso & Vintage Champagne Bar',
        'Dual EIZO ColorEdge 4K Tethered Workstations',
        'Private Dining & Client Executive Desk',
        'Ultra High-Speed Fiber Tethering Line (10Gbps)'
      ],
      desc: 'A serene sanctuary where creative directors, agency executives, and celebrity talents relax, review live tethered feeds, and dine in comfort.'
    }
  ];

  const gearVault = [
    { category: 'Medium Format Bodies', items: ['Hasselblad H6D-100c Digital Back', 'Phase One IQ4 150MP System', 'Leica SL2-S 24MP Cinema Body', 'Leica M11 Silver Gelatin Edition'] },
    { category: 'Prime Optical Lenses', items: ['Hasselblad HC 100mm f/2.2 Orange Dot', 'Leica APO-Summicron-SL 50mm f/2', 'Phase One Schneider Kreuznach 110mm f/2.8', 'Hasselblad HC 35-90mm f/4-5.6 Zoom'] },
    { category: 'Strobe Generators & Lights', items: ['Profoto Pro-11 2400W AirTTL Generators (x6)', 'Briese Focus Para 220 Reflector', 'Broncolor Para 88 FB Reflector', 'Profoto B10X Plus OCF Strobes (x8)'] },
    { category: 'Tethering & Master Monitors', items: ['EIZO ColorEdge CG319X 4K Hardware Calibrated', 'Apple Mac Studio M2 Ultra (128GB RAM)', 'Tether Tools Pro 10Gbps Cables', 'Capture One Pro 23 Enterprise Network'] }
  ];

  const creativeProcess = [
    { step: '01', title: 'Lighting & Moodboard Consultation', desc: 'We dissect brand vision, color palettes, and shadow intensity before setting foot on stage.' },
    { step: '02', title: 'Stage Setup & Optical Rigging', desc: 'Pre-lighting Stage A with custom diffusion scrims and hardware-calibrated strobe packs.' },
    { step: '03', title: 'The Live Tethered Shoot', desc: 'Capturing on Hasselblad 100MP backs with live 4K feed streaming directly to client mezzanine monitors.' },
    { step: '04', title: 'Tonal Retouching & Color Grading', desc: 'Hand-editing skin micro-textures, silver gelatin contrast curve, and silk highlights.' },
    { step: '05', title: 'Museum Archival Delivery', desc: 'Delivering full-res TIFF master files alongside museum-grade cotton rag fine art prints.' }
  ];

  const behindTheScenes = [
    { title: 'Morning Light Calibration in Stage A', category: 'Daylight Set', image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Profoto Pro-11 Strobe Alignment', category: 'Gear Vault', image: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Live Tethered Client Review', category: 'VIP Lounge', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Silk Diffusion Scrim Setup', category: 'Fashion Rig', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop' }
  ];

  const team = [
    { name: 'Elena Rostova', role: 'Founder & Principal Photographer', bio: 'Specializes in high-fashion editorial portraiture and medium format light sculpting.', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
    { name: 'Marcus Vance', role: 'Director of Photography & Lighting Master', bio: 'Pioneered spatial strobe manipulation techniques for global commercial campaigns.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop' },
    { name: 'Sofia Chen', role: 'Lead Documentary & Destination Specialist', bio: 'Captures unfiltered luxury moments and private architectural estates worldwide.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Henri Laurent', role: 'Master Retoucher & Print Conservator', bio: 'Expert in silver gelatin tonal grading and museum-grade cotton print archiving.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <div className="pt-28 pb-24 space-y-28 bg-[#FAF8F5] text-[#1C1B18] overflow-x-hidden">
      
      {/* 1. Studio Tour Hero Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#C5A880]/15 border border-[#C5A880]/30 rounded-full text-[#C5A880] text-xs uppercase tracking-[0.25em] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>The Aetheria Atelier Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury leading-[1.05]">
            State of the Art Daylight & Strobe Stages.
          </h1>
          <p className="text-base sm:text-xl text-[#1C1B18]/75 font-light leading-relaxed">
            Spanning over 7,000 sq. ft. in our Sangli flagship studio. Engineered with 18ft natural solar windows, 360° white cycloramas, and Hasselblad medium format gear vaults.
          </p>
        </div>
      </section>

      {/* 2. Interactive Studio Stage Tour */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column Stage Selector */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-2">
              Virtual Stage Tour
            </span>
            {stages.map((stg) => {
              const isActive = activeStage === stg.id;
              return (
                <button
                  key={stg.id}
                  onClick={() => setActiveStage(stg.id)}
                  className={`w-full p-6 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 ${
                    isActive
                      ? 'bg-[#1C1B18] text-white border-[#1C1B18] shadow-2xl scale-[1.02]'
                      : 'bg-white text-[#1C1B18]/70 border-[#EAE6DF] hover:border-[#C5A880]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#C5A880] uppercase tracking-widest">
                      {stg.sqft}
                    </span>
                    {isActive && <Sparkles className="w-4 h-4 text-[#C5A880]" />}
                  </div>
                  <h3 className={`text-xl font-serif-luxury ${isActive ? 'text-white' : 'text-[#1C1B18]'}`}>
                    {stg.title}
                  </h3>
                  <p className={`text-xs font-light leading-relaxed ${isActive ? 'text-white/80' : 'text-[#1C1B18]/60'}`}>
                    {stg.windows}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column Stage Details Showcase */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#EAE6DF] shadow-xl overflow-hidden flex flex-col justify-between">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE6DF]">
              <motion.img
                key={stages[activeStage].id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={stages[activeStage].image}
                alt={stages[activeStage].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1 bg-[#1C1B18]/80 text-white text-[10px] uppercase tracking-wider rounded-full backdrop-blur-md">
                Active Specification View
              </div>
            </div>

            <div className="p-8 lg:p-10 space-y-6">
              <div>
                <h3 className="text-3xl font-serif-luxury text-[#1C1B18]">
                  {stages[activeStage].title}
                </h3>
                <p className="text-xs text-[#1C1B18]/70 font-light mt-2 leading-relaxed">
                  {stages[activeStage].desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#EAE6DF]">
                {stages[activeStage].features.map((ft, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-[#1C1B18]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                    <span>{ft}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-[#1C1B18]/50">Dry Hire & Full Production Rentals</span>
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-2.5 bg-[#1C1B18] text-[#FAF8F5] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A880] transition-colors"
                >
                  Reserve Stage &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Equipment & Optical Gear Vault */}
      <section className="bg-[#F5F2EB] py-28 border-y border-[#EAE6DF] text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              The Gear Vault & Hardware Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18]">
              Uncompromising Optical Precision
            </h2>
            <p className="text-sm text-[#1C1B18]/70 font-light leading-relaxed">
              We exclusively deploy medium format digital backs, prime optical glass, and high-wattage strobe generators to achieve museum-grade clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gearVault.map((gv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-[#EAE6DF] shadow-md flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-[#C5A880]/15 text-[#C5A880] rounded-2xl flex items-center justify-center border border-[#C5A880]/30">
                    <Camera className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif-luxury text-[#1C1B18]">
                    {gv.category}
                  </h3>
                  <ul className="space-y-2 text-xs text-[#1C1B18]/75 font-light">
                    {gv.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-[#C5A880] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-[#EAE6DF] text-[10px] uppercase font-semibold text-[#C5A880] tracking-wider">
                  Calibrated Daily
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Creative Process Steps */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
            The Atelier Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18]">
            Our 5-Stage Creative Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {creativeProcess.map((cp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-[#EAE6DF] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#C5A880] transition-colors"
            >
              <div className="space-y-3">
                <span className="text-3xl font-serif-luxury font-bold text-[#C5A880]">
                  {cp.step}
                </span>
                <h4 className="text-lg font-serif-luxury text-[#1C1B18] leading-tight">
                  {cp.title}
                </h4>
                <p className="text-xs text-[#1C1B18]/70 font-light leading-relaxed">
                  {cp.desc}
                </p>
              </div>
              <div className="h-0.5 bg-[#EAE6DF] w-full rounded-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Editing Workflow & Tonal Grading */}
      <section className="bg-[#1C1B18] text-white py-28 relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
                Post-Production Excellence
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury leading-tight text-white">
                Master Retouching & Silver Gelatin Tonal Curves
              </h2>
              <p className="text-xs sm:text-sm text-[#EAE6DF]/80 font-light leading-relaxed">
                We eschew automated filters in favor of meticulous frequency separation, hand-drawn dodging and burning, and color calibration performed on EIZO hardware monitors.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  { title: 'Micro-Texture Preservation', desc: 'Retaining real skin pores, fabric weave details, and organic grain without plastic blurring.' },
                  { title: 'Custom Silver Gelatin Contrast', desc: 'Developing bespoke black-and-white curves inspired by historical 8x10 film stocks.' },
                  { title: '16-Bit Master TIFF Deliverables', desc: 'Full-resolution master files suitable for billboard campaigns or fine art exhibition prints.' }
                ].map((ef, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-1">
                    <h4 className="text-sm font-semibold text-[#C5A880]">{ef.title}</h4>
                    <p className="text-xs text-[#EAE6DF]/70 font-light">{ef.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1200&auto=format&fit=crop"
                  alt="EIZO Monitor Color Grading Session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Behind the Scenes Image Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left space-y-12">
        <div className="flex items-center justify-between border-b border-[#EAE6DF] pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-1">
              Atmosphere & Action
            </span>
            <h2 className="text-3xl font-serif-luxury text-[#1C1B18]">Behind the Scenes Gallery</h2>
          </div>
          <Film className="w-6 h-6 text-[#C5A880]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {behindTheScenes.map((bts, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedBts(bts.image)}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-md cursor-pointer group"
            >
              <div className="relative aspect-square overflow-hidden bg-[#EAE6DF]">
                <img
                  src={bts.image}
                  alt={bts.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 className="w-5 h-5 text-[#C5A880]" />
                </div>
              </div>
              <div className="p-4 space-y-1">
                <span className="text-[9px] uppercase tracking-widest text-[#C5A880] font-semibold block">{bts.category}</span>
                <h4 className="text-xs font-semibold text-[#1C1B18]">{bts.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. Meet Our Studio Team */}
      <section className="bg-[#F5F2EB] py-28 border-y border-[#EAE6DF] text-left">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              The People Behind the Optics
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18]">
              Meet Our Studio Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((tm, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-md space-y-4 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#EAE6DF]">
                    <img src={tm.image} alt={tm.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif-luxury text-[#1C1B18]">{tm.name}</h3>
                    <span className="text-[10px] text-[#C5A880] uppercase tracking-wider font-semibold block">{tm.role}</span>
                  </div>
                  <p className="text-xs text-[#1C1B18]/70 font-light leading-relaxed">{tm.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BTS Modal Overlay */}
      {selectedBts && (
        <div
          onClick={() => setSelectedBts(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
        >
          <div className="relative max-w-4xl w-full flex items-center justify-center">
            <img src={selectedBts} alt="Studio action" className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl" />
            <button
              onClick={() => setSelectedBts(null)}
              className="absolute top-4 right-4 px-4 py-2 bg-white/20 text-white rounded-full text-xs font-semibold uppercase hover:bg-white hover:text-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
