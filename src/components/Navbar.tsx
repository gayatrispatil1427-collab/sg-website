import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import type { NavigationPage } from '../types';

interface NavbarProps {
  activePage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
}

export const Navbar = ({ activePage, onNavigate, onOpenBooking }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: NavigationPage }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About Studio', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Studio', id: 'studio' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${isScrolled
          ? 'py-4 glass-nav border-b border-[#EAE6DF]/70 shadow-sm'
          : 'py-7 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo Mark */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3.5 text-left group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C5A880]/50 shadow-md group-hover:scale-105 transition-transform duration-300 bg-[#1C1B18] flex items-center justify-center">
              <img
                src="/sg_logo.png"
                alt="SG Studio Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="block font-serif-luxury text-xl md:text-2xl tracking-[0.25em] text-[#1C1B18] uppercase font-bold leading-none">
                SG Studio
              </span>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#C5A880] font-semibold block mt-1">
                Photography & Film Studio
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 py-1 ${isActive
                    ? 'text-[#1C1B18]'
                    : 'text-[#1C1B18] hover:text-[#C5A880]'
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#C5A880] rounded-full animate-in fade-in zoom-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 bg-[#1C1B18] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium rounded-full hover:bg-[#C5A880] transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <span>Book Session</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-white/80 border border-[#EAE6DF] text-[#1C1B18] hover:bg-[#EAE6DF] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF8F5] md:hidden flex flex-col justify-between p-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#C5A880]/50 bg-[#1C1B18] flex items-center justify-center shadow-md">
                <img
                  src="/sg_logo.png"
                  alt="SG Studio Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif-luxury text-xl tracking-[0.2em] uppercase font-bold text-[#1C1B18]">
                SG Studio
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-[#EAE6DF] text-[#1C1B18]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 my-auto text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-2xl font-serif-luxury tracking-wider uppercase font-bold ${activePage === item.id ? 'text-[#C5A880]' : 'text-[#1C1B18]'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 bg-[#1C1B18] text-[#FAF8F5] rounded-full text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span>Inquire Private Session</span>
            </button>
            <p className="text-[10px] text-center uppercase tracking-widest text-[#1C1B18]/50">
              Sangli • Maharashtra
            </p>
          </div>
        </div>
      )}
    </>
  );
};
