import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, Sparkles, Filter, X, Bookmark, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/studioData';
import type { BlogPost } from '../types';

export const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'Photography Tips', 'Wedding Tips', 'Baby Shoot Guide'];

  const featuredPost = BLOG_POSTS.find((p) => p.id === 'b-featured') || BLOG_POSTS[0];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  return (
    <div className="pt-28 pb-24 space-y-20 bg-[#FAF8F5] text-[#1C1B18] min-h-screen">
      
      {/* 1. Header & Gazette Banner */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EAE6DF] pb-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Atelier Gazette & Editorial Journal</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif-luxury leading-[1.05]">
              Insights on Light, Optics & Life Celebrations.
            </h1>
            <p className="text-sm sm:text-base text-[#1C1B18]/70 font-light leading-relaxed">
              Curated masterclasses, destination wedding timelines, photography lighting rules, and gentle newborn guides from our lead directors.
            </p>
          </div>

          <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
            <Filter className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1C1B18] text-white shadow-md'
                    : 'bg-white text-[#1C1B18]/70 border border-[#EAE6DF] hover:border-[#C5A880]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Article Hero Monolith */}
      {selectedCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setActiveArticle(featuredPost)}
            className="bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0 group"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#EAE6DF]">
              <img
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-6 left-6 px-3.5 py-1 bg-[#1C1B18]/85 text-[#FAF8F5] text-[10px] uppercase tracking-widest font-semibold rounded-full backdrop-blur-md">
                Featured Masterclass
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs text-[#C5A880] font-semibold uppercase tracking-wider">
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1 text-[#1C1B18]/50">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1B18] group-hover:text-[#C5A880] transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#1C1B18]/75 font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#C5A880]"
                  />
                  <div className="text-left">
                    <h4 className="text-xs font-semibold text-[#1C1B18]">{featuredPost.author.name}</h4>
                    <p className="text-[10px] text-[#1C1B18]/50">{featuredPost.author.role}</p>
                  </div>
                </div>

                <button className="px-5 py-2 bg-[#1C1B18] text-white rounded-full text-xs uppercase tracking-wider font-semibold group-hover:bg-[#C5A880] group-hover:text-[#1C1B18] transition-colors flex items-center space-x-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* 3. Article Grid (Latest, Photography Tips, Wedding Tips, Baby Guide) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 text-left space-y-12">
        <div className="flex items-center justify-between border-b border-[#EAE6DF] pb-4">
          <h3 className="text-2xl font-serif-luxury text-[#1C1B18]">
            {selectedCategory === 'All' ? 'Latest Publications & Guides' : `${selectedCategory} Articles`}
          </h3>
          <span className="text-xs text-[#1C1B18]/50">{filteredPosts.length} Articles Available</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActiveArticle(post)}
              className="bg-white rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE6DF]">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#1C1B18]/80 text-[#FAF8F5] text-[10px] uppercase tracking-wider font-semibold rounded-full backdrop-blur-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between text-[11px] text-[#1C1B18]/50 font-light">
                    <span>{post.date}</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#C5A880]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h4 className="text-2xl font-serif-luxury text-[#1C1B18] group-hover:text-[#C5A880] transition-colors leading-snug">
                    {post.title}
                  </h4>

                  <p className="text-xs text-[#1C1B18]/70 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#FAF8F5] border-t border-[#EAE6DF] flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-[#C5A880]"
                  />
                  <span className="text-xs font-semibold text-[#1C1B18]">{post.author.name}</span>
                </div>

                <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider group-hover:text-[#1C1B18] transition-colors">
                  Read &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Article Modal Reader */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FAF8F5] max-w-3xl w-full rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-2xl relative my-8 text-left"
            >
              {/* Header Cover Bar */}
              <div className="relative aspect-[16/8] overflow-hidden bg-[#EAE6DF]">
                <img
                  src={activeArticle.coverImage}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#1C1B18] flex items-center justify-center hover:bg-[#1C1B18] hover:text-white transition-colors shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute top-4 left-4 px-3.5 py-1 bg-[#1C1B18]/85 text-white text-[10px] uppercase tracking-widest font-semibold rounded-full backdrop-blur-md">
                  {activeArticle.category}
                </div>
              </div>

              {/* Article Content Container */}
              <div className="p-8 sm:p-12 space-y-8 max-h-[60vh] overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-[#C5A880] font-semibold uppercase tracking-wider">
                    <span>{activeArticle.date}</span>
                    <span>•</span>
                    <span>{activeArticle.readTime}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif-luxury text-[#1C1B18] leading-tight">
                    {activeArticle.title}
                  </h2>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-[#EAE6DF]">
                  <img
                    src={activeArticle.author.avatar}
                    alt={activeArticle.author.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C5A880]"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#1C1B18]">{activeArticle.author.name}</h4>
                    <p className="text-xs text-[#1C1B18]/60">{activeArticle.author.role}</p>
                  </div>
                </div>

                {/* Body Text */}
                <div className="prose prose-stone text-xs sm:text-sm leading-relaxed text-[#1C1B18]/80 space-y-4 font-light whitespace-pre-line">
                  {activeArticle.content}
                </div>

                {/* Footer Action Bar */}
                <div className="pt-6 border-t border-[#EAE6DF] flex items-center justify-between text-xs text-[#1C1B18]/60">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1.5 hover:text-[#C5A880] transition-colors">
                      <Bookmark className="w-4 h-4" />
                      <span>Save Article</span>
                    </button>
                    <button className="flex items-center space-x-1.5 hover:text-[#C5A880] transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-6 py-2 bg-[#1C1B18] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#C5A880] hover:text-[#1C1B18] transition-colors"
                  >
                    Close Reader
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
