import { useState } from 'react';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/studioData';
import type { PortfolioItem, NavigationPage } from '../types';

interface FeaturedPortfolioProps {
  onNavigate: (page: NavigationPage) => void;
  onSelectItem: (item: PortfolioItem) => void;
}

export const FeaturedPortfolio = ({ onNavigate, onSelectItem }: FeaturedPortfolioProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Fashion', 'Portrait', 'Editorial', 'Architecture', 'Weddings'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS.slice(0, 6)
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory).slice(0, 6);

  return (
    <section className="py-24 md:py-36 bg-[#F5F2EB] relative border-t border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3 text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              Curated Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18] leading-[1.1]">
              Selected Visual Commissions
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1C1B18] text-[#FAF8F5] shadow-md'
                    : 'bg-white/60 text-[#1C1B18]/70 hover:bg-white hover:text-[#1C1B18] border border-[#EAE6DF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/5] bg-[#EAE6DF]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Lightbox Trigger Badge */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md text-[#1C1B18] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Maximize2 className="w-4 h-4 text-[#C5A880]" />
                </div>

                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B18]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Client Overlay Info on Hover */}
                <div className="absolute bottom-4 inset-x-4 z-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] block font-semibold">
                    Client: {item.client}
                  </span>
                  <p className="text-xs text-white/80 line-clamp-1">{item.description}</p>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold mb-1">
                    <span>{item.category}</span>
                    <span className="text-[#1C1B18]/40">{item.year}</span>
                  </div>
                  <h3 className="text-2xl font-serif-luxury text-[#1C1B18] group-hover:text-[#C5A880] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Element Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#EAE6DF]/60">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#FAF8F5] border border-[#EAE6DF] rounded-md text-[10px] text-[#1C1B18]/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Portfolio Action */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-[#1C1B18] text-[#FAF8F5] rounded-full text-xs uppercase tracking-widest font-medium hover:bg-[#C5A880] transition-all duration-300 shadow-md group"
          >
            <span>Explore Complete Archive (2020 — 2026)</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
