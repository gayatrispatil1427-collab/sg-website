import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, Camera, Eye, ArrowUpRight, Compass, ShieldCheck, Maximize2 } from 'lucide-react';
import type { NavigationPage } from '../types';

interface AboutPageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const AboutPage = ({ onNavigate, onOpenBooking }: AboutPageProps) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'craft'>('mission');
  const [selectedBtsImage, setSelectedBtsImage] = useState<string | null>(null);

  const stats = [
    { value: '14+', label: 'Years of Atelier Excellence', detail: 'Est. 2012' },
    { value: '120+', label: 'Luxury Fashion Editorials', detail: 'Vogue, Elle & Harper’s Bazaar' },
    { value: '04', label: 'Master Stages', detail: 'Flagship & Destination Stages' },
    { value: '99.4%', label: 'Collector Satisfaction', detail: 'Private & Commercial Clients' }
  ];

  const timelineEvents = [
    { year: '2012', title: 'Founding of Aetheria Studio', desc: 'Elena Rostova establishes a private daylight studio dedicated to medium format film and fine art portraiture.' },
    { year: '2016', title: 'Fashion Week Debut', desc: 'Commissioned as principal atelier for fashion week runway editorials and backstage beauty portraiture.' },
    { year: '2019', title: 'The Great Daylight Stage', desc: 'Unveiling a 3,200 sq ft architectural cyclorama studio with 18-foot south-facing windows.' },
    { year: '2022', title: 'Strobe & Medium Format Expansion', desc: 'Expanding the studio vault equipped with Phase One and Profoto Pro-11 strobe matrices.' },
    { year: '2024', title: 'Fine Art Galleries Expansion', desc: 'Expanding into fine art print publishing, hosting photography retrospectives.' },
    { year: '2026', title: 'The Master Monolith Collection', desc: 'Pioneering hybrid high-dynamic range digital medium format photography for global campaigns.' }
  ];

  const behindTheScenes = [
    { id: 1, title: 'Stage A Morning Solar Sculpting', category: 'Daylight Architecture', image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1600&auto=format&fit=crop', desc: 'Capturing 9:00 AM natural directional sunlight across our 360° white cyclorama.' },
    { id: 2, title: 'Hasselblad 100MP Gear Calibration', category: 'Technical Rigor', image: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1600&auto=format&fit=crop', desc: 'Micro-contrast calibration before an haute couture jewelry campaign.' },
    { id: 3, title: 'Fashion Campaign Strobe Diffusion', category: 'Set Lighting', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop', desc: 'Sculpting key light bounce through 8-foot silk diffusion scrims.' },
    { id: 4, title: 'VIP Mezzanine Client Lounge', category: 'Hospitality', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop', desc: 'Live tethered viewing workstations where creative directors review 4K color feeds.' }
  ];

  const awards = [
    { title: 'International Editorial Photographer of the Year', year: '2025', org: 'International Photo Biennale', category: 'Fashion & Fine Art' },
    { title: 'Mastery in Daylight Architectural Staging', year: '2024', org: 'Architectural Digest Guild', category: 'Spatial Photography' },
    { title: 'Destination Wedding Portfolio of Distinction', year: '2026', org: 'Vogue International Weddings', category: 'Luxury Event' },
    { title: 'Excellence in Silver Gelatin Print Archiving', year: '2025', org: 'European Fine Art Academy', category: 'Print Craft' }
  ];

  const teamMembers = [
    {
      name: 'Elena Rostova',
      role: 'Founder & Creative Director',
      location: 'Sangli Flagship Studio',
      bio: 'Trained in fine arts and portraiture. Former Vogue contributor known for painterly shadow depth and effortless, authentic vulnerability.',
      quote: '“A great portrait is not built by taking; it is received by listening to how light falls on human emotion.”',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
      gear: 'Hasselblad H6D-100c & HC 100mm f/2.2'
    },
    {
      name: 'Marcus Vance',
      role: 'Director of Photography & Lighting Master',
      location: 'Strobe & Lighting Vault',
      bio: 'Pioneered spatial strobe manipulation techniques for global commercial campaigns. Spent 12 years rigging large-scale sets for international campaigns.',
      quote: '“Control is not about overpowering light; it is about sculpting shadows until the subject breathes.”',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
      gear: 'Profoto Pro-11 2400W & Briese Para 220'
    },
    {
      name: 'Sofia Chen',
      role: 'Lead Destination & Documentary Director',
      location: 'Destination Hubs',
      bio: 'Specializes in intimate, high-society destination weddings and architectural monographs across historic architectural estates and coastal landscapes.',
      quote: '“Intimacy requires discretion. We capture legacy moments without interrupting the magic.”',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
      gear: 'Leica SL2-S & Phase One IQ4 150MP'
    }
  ];

  return (
    <div className="pt-28 pb-24 space-y-28 bg-[#FAF8F5] overflow-x-hidden">
      
      {/* 1. Asymmetrical Editorial Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#C5A880]/15 border border-[#C5A880]/30 rounded-full text-[#C5A880] text-xs uppercase tracking-[0.25em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Atelier Legacy • Sangli Studio</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury text-[#1C1B18] leading-[1.05] tracking-tight">
              Where Optical Precision Meets Fine Art Poetry.
            </h1>

            <p className="text-base sm:text-xl text-[#1C1B18]/75 font-light leading-relaxed max-w-2xl">
              Aetheria is a creative photography collective. We craft fine-art portraiture, high-fashion lookbooks, and luxury destination wedding visual legacies.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#1C1B18] text-[#FAF8F5] rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A880] transition-all duration-300 shadow-lg flex items-center space-x-2 group"
              >
                <span>Reserve Private Session</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-4 bg-white border border-[#EAE6DF] text-[#1C1B18] rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-[#EAE6DF] transition-colors"
              >
                View Selected Works
              </button>
            </div>
          </motion.div>

          {/* Asymmetrical Floating Hero Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-[#EAE6DF] aspect-[4/5] bg-[#EAE6DF]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop"
                alt="Studio Principal Director Portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6 text-white text-left space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                  Principal Director
                </span>
                <p className="font-serif-luxury text-2xl">Elena Rostova</p>
                <p className="text-xs text-white/70 font-light">Flagship Studio • Hasselblad H6D-100c</p>
              </div>
            </div>

            {/* Overlapping Decorative Badge */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-[#EAE6DF] shadow-2xl max-w-xs text-left">
              <div className="flex items-center space-x-2 text-[#C5A880] mb-1">
                <Camera className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-wider font-semibold">Medium Format Standard</span>
              </div>
              <p className="text-xs text-[#1C1B18]/80 leading-relaxed font-light">
                100-Megapixel sensor resolution rendering unparalleled tonal micro-contrast.
              </p>
            </div>

            {/* Background Soft Glow */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

        </div>
      </section>

      {/* 2. Animated Statistics Grid */}
      <section className="bg-[#F5F2EB] py-16 border-y border-[#EAE6DF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-2"
              >
                <span className="block font-serif-luxury text-4xl sm:text-6xl text-[#1C1B18] font-semibold">
                  {st.value}
                </span>
                <span className="block text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                  {st.label}
                </span>
                <span className="block text-[11px] text-[#1C1B18]/60 font-light">
                  {st.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Studio Story, Mission & Vision Tabs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Mission & Vision Interactive Controller */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-2">
                Core Ethos & Purpose
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18] leading-tight">
                Driven by Light, Guided by Emotion.
              </h2>
            </div>

            {/* Tab Selector Buttons */}
            <div className="flex flex-col space-y-3">
              {[
                { id: 'mission', title: 'Our Mission', icon: Compass },
                { id: 'vision', title: 'Our Vision', icon: Eye },
                { id: 'craft', title: 'Optical Craftsmanship', icon: ShieldCheck }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'bg-[#1C1B18] text-[#FAF8F5] border-[#1C1B18] shadow-xl'
                        : 'bg-white text-[#1C1B18]/70 border-[#EAE6DF] hover:border-[#C5A880]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-[#C5A880]' : 'text-[#1C1B18]/50'}`} />
                      <span className="text-sm font-semibold uppercase tracking-wider">{tab.title}</span>
                    </div>
                    {isActive && <Sparkles className="w-4 h-4 text-[#C5A880]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Tab Content Frame */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-3xl border border-[#EAE6DF] shadow-xl min-h-[380px] flex flex-col justify-between space-y-6">
            {activeTab === 'mission' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="inline-block px-3 py-1 bg-[#C5A880]/15 text-[#C5A880] rounded-full text-xs font-mono font-semibold uppercase tracking-wider">
                  Mission Statement
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#1C1B18] leading-relaxed">
                  "To elevate photography from simple documentation into permanent fine-art heritage that honors human vulnerability and structural beauty."
                </h3>
                <p className="text-sm text-[#1C1B18]/75 leading-relaxed font-light">
                  Every project undertaken at Aetheria starts with quiet listening. Whether sculpting soft Rembrandt key lighting for an editorial profile or coordinating multi-camera coverage for a wedding, our commitment remains constant: truth, elegance, and dynamic tonal depth.
                </p>
              </motion.div>
            )}

            {activeTab === 'vision' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="inline-block px-3 py-1 bg-[#C5A880]/15 text-[#C5A880] rounded-full text-xs font-mono font-semibold uppercase tracking-wider">
                  Future Vision
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#1C1B18] leading-relaxed">
                  "Building daylight stages where clients and art collectors find sanctuary for creative expression."
                </h3>
                <p className="text-sm text-[#1C1B18]/75 leading-relaxed font-light">
                  We are expanding our daylight architecture across our flagship stages and destination locations. By offering state-of-the-art medium format digital backs alongside traditional silver gelatin darkrooms, we bridge historical reverence with modern digital speed.
                </p>
              </motion.div>
            )}

            {activeTab === 'craft' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="inline-block px-3 py-1 bg-[#C5A880]/15 text-[#C5A880] rounded-full text-xs font-mono font-semibold uppercase tracking-wider">
                  The Craft Standards
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#1C1B18] leading-relaxed">
                  "Zero plastic filters. Zero artificial shortcuts. Pure optical glass, calibrated strobe power, and master color grading."
                </h3>
                <p className="text-sm text-[#1C1B18]/75 leading-relaxed font-light">
                  We capture exclusively on Hasselblad H6D-100c and Leica optical systems. Our digital technicians utilize hardware-calibrated EIZO ColorEdge 4K monitors on set, ensuring that what you see on tethered screens matches museum print deliverables identically.
                </p>
              </motion.div>
            )}

            <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between text-xs text-[#1C1B18]/60">
              <span>Aetheria Studio Standards • Verified Quality</span>
              <button
                onClick={onOpenBooking}
                className="text-[#C5A880] font-semibold uppercase tracking-wider hover:text-[#1C1B18] transition-colors"
              >
                Inquire Atelier Session &rarr;
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Meet the Photographer & Creative Collective */}
      <section className="bg-[#F5F2EB] py-28 border-y border-[#EAE6DF] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              The Creative Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18]">
              Meet the Photographers & Lighting Directors
            </h2>
            <p className="text-sm text-[#1C1B18]/70 font-light leading-relaxed">
              Our collective is led by acclaimed artists who have shot campaigns for Vogue and Architectural Digest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group"
              >
                <div>
                  {/* Portrait Image Frame */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE6DF]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#1C1B18]/80 text-white text-[10px] uppercase tracking-wider rounded-full backdrop-blur-md">
                      {member.location}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-serif-luxury text-[#1C1B18] group-hover:text-[#C5A880] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[#C5A880] font-semibold uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-xs text-[#1C1B18]/75 leading-relaxed font-light">
                      {member.bio}
                    </p>

                    <blockquote className="p-4 bg-[#FAF8F5] border-l-2 border-[#C5A880] text-xs font-serif-luxury italic text-[#1C1B18]/90 rounded-r-xl">
                      {member.quote}
                    </blockquote>
                  </div>
                </div>

                {/* Footer Gear Badge */}
                <div className="p-6 bg-[#FAF8F5] border-t border-[#EAE6DF] flex items-center justify-between text-[11px] text-[#1C1B18]/70">
                  <span className="font-semibold text-[#1C1B18]">Primary Lens</span>
                  <span className="font-mono text-[#C5A880]">{member.gear}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Behind the Scenes (Cinematic Studio Showcase) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              Inside Daylight Stage & Vault
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18]">
              Behind the Scenes at Aetheria
            </h2>
          </div>
          <p className="text-xs text-[#1C1B18]/60 max-w-md">
            Click any image to inspect high-resolution studio atmosphere, lighting rigs, and tethering workstations.
          </p>
        </div>

        {/* BTS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {behindTheScenes.map((bts) => (
            <motion.div
              key={bts.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedBtsImage(bts.image)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-md cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE6DF]">
                <img
                  src={bts.image}
                  alt={bts.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#1C1B18] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Maximize2 className="w-4 h-4 text-[#C5A880]" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-6 inset-x-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                    {bts.category}
                  </span>
                  <h4 className="text-xl font-serif-luxury text-white">{bts.title}</h4>
                  <p className="text-xs text-white/80 font-light">{bts.desc}</p>
                </div>
              </div>

              <div className="p-6 flex items-center justify-between text-xs border-t border-[#EAE6DF]">
                <div>
                  <h4 className="font-serif-luxury text-lg text-[#1C1B18] group-hover:text-[#C5A880] transition-colors">
                    {bts.title}
                  </h4>
                  <span className="text-[11px] text-[#1C1B18]/50">{bts.category}</span>
                </div>
                <span className="px-3 py-1 bg-[#FAF8F5] border border-[#EAE6DF] rounded-full text-[10px] font-semibold uppercase tracking-wider text-[#1C1B18]/70">
                  Inspect &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Studio Evolution Timeline */}
      <section className="bg-[#1C1B18] text-[#FAF8F5] py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-left space-y-16 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              Historical Milestones
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#FAF8F5]">
              Fourteen Years of Atelier Evolution
            </h2>
            <p className="text-sm text-[#EAE6DF]/70 font-light">
              From our founding origins to establishing flagship stages and destination services.
            </p>
          </div>

          <div className="relative border-l border-white/20 ml-4 md:ml-8 space-y-12 pl-8 md:pl-12">
            {timelineEvents.map((ev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative space-y-2 group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[#1C1B18] border-2 border-[#C5A880] group-hover:bg-[#C5A880] transition-colors" />

                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-serif-luxury font-semibold text-[#C5A880]">
                    {ev.year}
                  </span>
                  <span className="h-px w-12 bg-white/20" />
                </div>

                <h3 className="text-2xl font-serif-luxury text-white group-hover:text-[#C5A880] transition-colors">
                  {ev.title}
                </h3>
                <p className="text-xs text-[#EAE6DF]/80 font-light max-w-2xl leading-relaxed">
                  {ev.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 7. Awards & Gallery Achievements */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left space-y-12">
        <div className="flex items-center justify-between border-b border-[#EAE6DF] pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-1">
              Honors & Press Recognition
            </span>
            <h2 className="text-3xl font-serif-luxury text-[#1C1B18]">Awards & Gallery Exhibitions</h2>
          </div>
          <Award className="w-8 h-8 text-[#C5A880]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((aw, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 4 }}
              className="p-8 bg-white rounded-2xl border border-[#EAE6DF] shadow-sm flex items-center justify-between text-left space-x-4"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                  {aw.category}
                </span>
                <h4 className="text-xl font-serif-luxury text-[#1C1B18]">{aw.title}</h4>
                <p className="text-xs text-[#1C1B18]/50">{aw.org}</p>
              </div>
              <span className="px-4 py-2 bg-[#C5A880]/15 text-[#C5A880] font-mono text-sm font-semibold rounded-full flex-shrink-0">
                {aw.year}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-r from-[#1C1B18] to-[#2B2925] text-white rounded-3xl p-10 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
            Collaborate With Aetheria
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury max-w-2xl mx-auto">
            Ready to Sculpt Your Brand Story in Light?
          </h2>
          <p className="text-xs sm:text-sm text-[#EAE6DF]/80 font-light max-w-xl mx-auto leading-relaxed">
            Reserve our daylight studio stages, hire our lighting team, or inquire about luxury destination wedding coverage.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-9 py-4 bg-[#C5A880] text-[#1C1B18] rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors shadow-xl"
            >
              Inquire Atelier Availability
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-9 py-4 bg-white/10 text-white border border-white/20 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white/20 transition-colors"
            >
              Contact Studio Concierge
            </button>
          </div>
        </div>
      </section>

      {/* BTS Fullscreen Lightbox Overlay */}
      {selectedBtsImage && (
        <div
          onClick={() => setSelectedBtsImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
        >
          <div className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center">
            <img
              src={selectedBtsImage}
              alt="Behind the scenes inspection"
              className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setSelectedBtsImage(null)}
              className="absolute top-4 right-4 px-4 py-2 bg-white/20 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
