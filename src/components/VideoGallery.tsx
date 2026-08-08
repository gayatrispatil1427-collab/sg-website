import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Clock, MapPin, Film, Sparkles } from 'lucide-react';
import { CINEMATIC_FILMS } from '../data/studioData';
import type { CinematicFilm } from '../types';

export const VideoGallery = () => {
  const [activeFilm, setActiveFilm] = useState<CinematicFilm | null>(null);

  return (
    <section className="py-24 bg-[#1C1B18] text-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A880]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-16 text-left">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cinematic Film Gallery</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif-luxury text-[#FAF8F5] leading-tight">
              Motion Pictures & Wedding Highlight Reels.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#EAE6DF]/70 max-w-md font-light leading-relaxed">
            Every movement is choreographed with 35mm lens artistry, capturing genuine emotion, champagne toasts, and blue hour landscapes in 4K resolution.
          </p>
        </div>

        {/* Video Film Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CINEMATIC_FILMS.map((film, idx) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setActiveFilm(film)}
              className="group relative bg-[#262420] rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
            >
              {/* Poster Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={film.poster}
                  alt={film.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18] via-transparent to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-[#C5A880] text-[10px] uppercase tracking-widest font-semibold rounded-full border border-white/10">
                  {film.category}
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono rounded-full border border-white/10 flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-[#C5A880]" />
                  <span>{film.duration}</span>
                </div>

                {/* Center Animated Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#C5A880] text-[#1C1B18] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Text Description Box */}
              <div className="p-8 space-y-4">
                <div className="flex items-center space-x-2 text-xs text-[#C5A880] font-semibold tracking-wider uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{film.location}</span>
                </div>

                <h3 className="text-2xl font-serif-luxury text-white group-hover:text-[#C5A880] transition-colors">
                  {film.title}
                </h3>

                <p className="text-xs text-[#EAE6DF]/70 font-light leading-relaxed">
                  {film.description}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#EAE6DF]/50">
                  <span className="flex items-center space-x-1.5">
                    <Film className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Directed by {film.director}</span>
                  </span>
                  <span className="text-[#C5A880] uppercase tracking-widest font-semibold group-hover:translate-x-1 transition-transform">
                    Watch Reel &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Video Player Modal */}
      <AnimatePresence>
        {activeFilm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl w-full bg-[#1C1B18] rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative text-left"
            >
              <div className="relative aspect-video bg-black">
                <video
                  src={activeFilm.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setActiveFilm(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#C5A880] hover:text-[#1C1B18] transition-colors shadow-lg border border-white/20 z-10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#262420]">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block">
                    {activeFilm.subtitle}
                  </span>
                  <h4 className="text-2xl font-serif-luxury text-white">{activeFilm.title}</h4>
                  <p className="text-xs text-[#EAE6DF]/70 font-light mt-1">{activeFilm.description}</p>
                </div>

                <button
                  onClick={() => setActiveFilm(null)}
                  className="px-6 py-2.5 bg-white/10 hover:bg-[#C5A880] hover:text-[#1C1B18] text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-colors self-start sm:self-auto"
                >
                  Close Theater
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
