import { useState } from 'react';
import { ArrowUpRight, Clock, X } from 'lucide-react';
import { BLOG_POSTS } from '../data/studioData';
import type { BlogPost, NavigationPage } from '../types';

interface LatestBlogProps {
  onNavigate: (page: NavigationPage) => void;
}

export const LatestBlog = ({ onNavigate }: LatestBlogProps) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 md:py-36 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3 text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold block">
              Editorial Dispatches & Craft
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury text-[#1C1B18] leading-[1.1]">
              The Studio Journal
            </h2>
          </div>

          <button
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#1C1B18] hover:text-[#C5A880] transition-colors group"
          >
            <span>Read All Articles</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE6DF] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col group"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE6DF]">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#1C1B18]/80 text-white text-[10px] uppercase tracking-wider rounded-full backdrop-blur-md">
                  {post.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-[11px] text-[#1C1B18]/50 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#C5A880]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  <h3 className="text-xl font-serif-luxury text-[#1C1B18] group-hover:text-[#C5A880] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#1C1B18]/70 font-light line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author Footer */}
                <div className="pt-4 border-t border-[#EAE6DF] flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-[#C5A880]"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#1C1B18] block leading-none">
                        {post.author.name}
                      </span>
                      <span className="text-[10px] text-[#1C1B18]/50 block">
                        {post.author.role}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#C5A880] font-semibold uppercase tracking-wider flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Read Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#EAE6DF] rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto p-6 md:p-10 text-left animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-[#EAE6DF] text-[#1C1B18] hover:bg-[#C5A880] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
              {selectedPost.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-luxury text-[#1C1B18] mb-4">
              {selectedPost.title}
            </h2>

            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-[#EAE6DF] text-xs text-[#1C1B18]/60">
              <span className="font-semibold text-[#1C1B18]">{selectedPost.author.name}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <img
              src={selectedPost.coverImage}
              alt={selectedPost.title}
              className="w-full h-80 object-cover rounded-xl mb-8 border border-[#EAE6DF]"
            />

            <div className="prose prose-stone max-w-none text-sm text-[#1C1B18]/80 leading-relaxed space-y-4 font-light whitespace-pre-line">
              {selectedPost.content}
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE6DF] text-right">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2.5 bg-[#1C1B18] text-[#FAF8F5] rounded-full text-xs font-medium uppercase tracking-wider hover:bg-[#C5A880] transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
