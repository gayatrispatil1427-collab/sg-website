import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Maximize2, Sparkles, Filter, Eye, Layers } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/studioData';
import type { PortfolioItem } from '../types';

interface PortfolioPageProps {
  onSelectItem: (item: PortfolioItem) => void;
}

export const PortfolioPage = ({ onSelectItem }: PortfolioPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Wedding',
    'Pre-Wedding',
    'Cinematic Films',
    'Birthday',
    'Baby',
    'Family',
    'Maternity',
    'Couple',
    'Engagement',
    'Traditional',
    'Events'
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 space-y-16 bg-[#FAF8F5] min-h-screen">
      
      {/* Editorial Page Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#EAE6DF] pb-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Monolith Works</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif-luxury text-[#1C1B18] leading-[1.05]">
              Fine Art Editorial & Life Legacy Portfolio.
            </h1>
            <p className="text-sm sm:text-base text-[#1C1B18]/70 font-light leading-relaxed">
              Explore our master archive spanning high-fashion weddings, emotional pre-wedding serenades, family legacies, and silver gelatin portraiture.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="w-4 h-4 text-[#1C1B18]/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search category, location, or tag..."
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#EAE6DF] rounded-full text-xs focus:outline-none focus:border-[#C5A880] transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] uppercase font-semibold text-[#1C1B18]/40 hover:text-[#1C1B18]"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter Pills (Scrollable Bar) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center space-x-3 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#1C1B18]/50 pr-3 border-r border-[#EAE6DF]">
            <Filter className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Category</span>
          </div>

          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-[#1C1B18] text-[#FAF8F5] shadow-lg scale-105'
                    : 'bg-white text-[#1C1B18]/70 hover:bg-[#EAE6DF] border border-[#EAE6DF]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Editorial Masonry Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        {filteredItems.length === 0 ? (
          <div className="py-24 text-center space-y-4 bg-white rounded-3xl border border-[#EAE6DF]">
            <Layers className="w-10 h-10 text-[#C5A880] mx-auto opacity-50" />
            <h3 className="text-2xl font-serif-luxury text-[#1C1B18]">No Works Found</h3>
            <p className="text-xs text-[#1C1B18]/60 max-w-sm mx-auto">
              No portfolio commissions match your current filter or search criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 bg-[#1C1B18] text-[#FAF8F5] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A880] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 text-left"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => onSelectItem(item)}
                  className="break-inside-avoid bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-md hover:shadow-2xl transition-all duration-700 cursor-pointer group relative flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-[#EAE6DF]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Category Tag Overlay */}
                    <div className="absolute top-4 left-4 z-10 px-3.5 py-1 bg-[#1C1B18]/85 text-[#FAF8F5] text-[10px] uppercase tracking-wider font-semibold rounded-full backdrop-blur-md border border-white/10">
                      {item.category}
                    </div>

                    {/* Hover Fullscreen Icon */}
                    <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#1C1B18] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <Maximize2 className="w-4 h-4 text-[#C5A880]" />
                    </div>

                    {/* Hover Dark Glass Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/90 via-[#1C1B18]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white space-y-2">
                      <div className="flex items-center space-x-2 text-[#C5A880] text-[10px] uppercase tracking-widest font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Master Frame</span>
                      </div>
                      <h3 className="text-2xl font-serif-luxury text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 font-light line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.tags.map((tg, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 bg-white/15 backdrop-blur-md rounded-full text-[9px] text-white uppercase tracking-wider"
                          >
                            #{tg}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footnote */}
                  <div className="p-6 bg-white flex items-center justify-between border-t border-[#EAE6DF]/60">
                    <div>
                      <h4 className="font-serif-luxury text-xl text-[#1C1B18] group-hover:text-[#C5A880] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-[#1C1B18]/50 block font-light">
                        {item.client} • {item.year}
                      </span>
                    </div>

                    <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE6DF] flex items-center justify-center group-hover:bg-[#1C1B18] group-hover:text-white transition-colors">
                      &rarr;
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  );
};
