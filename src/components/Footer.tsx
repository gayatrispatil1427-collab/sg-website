import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import type { NavigationPage } from '../types';

interface FooterProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking?: () => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F2EB] border-t border-[#EAE6DF] text-[#1C1B18] pt-16 pb-12 relative overflow-hidden">
      {/* Editorial Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1b1808_1px,transparent_1px),linear-gradient(to_bottom,#1c1b1808_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Navigation & Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EAE6DF] text-left">
          
          {/* Brand Intro Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C5A880]/50 bg-[#1C1B18] flex items-center justify-center shadow-md">
                <img
                  src="/sg_logo.png"
                  alt="SG Studio Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif-luxury text-2xl tracking-[0.2em] uppercase font-bold text-[#1C1B18]">
                SG Studio
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#1C1B18]/70 leading-relaxed font-light max-w-sm">
              A premier professional photography & cinematic film studio based in Sangli, Maharashtra. Crafting fine-art wedding memories, pre-wedding films, and milestone portraits.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE6DF] text-[#1C1B18] flex items-center justify-center hover:bg-[#1C1B18] hover:text-[#C5A880] hover:border-[#1C1B18] transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE6DF] text-[#1C1B18] flex items-center justify-center hover:bg-[#1C1B18] hover:text-[#C5A880] hover:border-[#1C1B18] transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE6DF] text-[#1C1B18] flex items-center justify-center hover:bg-[#1C1B18] hover:text-[#C5A880] hover:border-[#1C1B18] transition-all duration-300 shadow-sm"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919422427981"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE6DF] text-[#1C1B18] flex items-center justify-center hover:bg-[#1C1B18] hover:text-[#C5A880] hover:border-[#1C1B18] transition-all duration-300 shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE6DF] text-[#1C1B18] flex items-center justify-center hover:bg-[#1C1B18] hover:text-[#C5A880] hover:border-[#1C1B18] transition-all duration-300 shadow-sm"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 text-xs space-y-3">
            <h5 className="uppercase tracking-[0.2em] font-semibold text-[#1C1B18] text-[11px]">
              Studio Pages
            </h5>
            <ul className="space-y-2 text-[#1C1B18]/70">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#1C1B18] transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#1C1B18] transition-colors">About Studio</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="hover:text-[#1C1B18] transition-colors">Portfolio</button></li>
              <li><button onClick={() => onNavigate('studio')} className="hover:text-[#1C1B18] transition-colors">Studio</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-[#1C1B18] transition-colors">Blog</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#1C1B18] transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 text-xs space-y-3">
            <h5 className="uppercase tracking-[0.2em] font-semibold text-[#1C1B18] text-[11px]">
              Contact Studio
            </h5>
            <ul className="space-y-2.5 text-[#1C1B18]/70">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <span className="leading-tight">Vishrambag Ganpati Temple, Sangli - 416415</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Office: <a href="tel:9130053081" className="hover:text-[#C5A880] font-medium underline">9130053081</a></span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Mobile: <a href="tel:9422427981" className="hover:text-[#C5A880] font-medium underline">9422427981</a></span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <a href="mailto:sachinphoto32@gmail.com" className="hover:text-[#C5A880] font-medium underline">sachinphoto32@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#1C1B18]/60">
          <div>
            © {new Date().getFullYear()} SG Studio Inc. Sangli, Maharashtra. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#1C1B18] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1C1B18] transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white border border-[#EAE6DF] text-[#1C1B18] hover:bg-[#1C1B18] hover:text-white transition-colors shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
