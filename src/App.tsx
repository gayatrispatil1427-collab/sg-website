import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { StudioPage } from './pages/StudioPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PORTFOLIO_ITEMS } from './data/studioData';
import type { NavigationPage, PortfolioItem } from './types';

export function App() {
  const [activePage, setActivePage] = useState<NavigationPage>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Handle Page Navigation with Smooth Scroll to Top
  const handleNavigate = (page: NavigationPage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1B18] flex flex-col font-sans film-grain selection:bg-[#C5A880]/20 selection:text-[#1C1B18]">
      {/* Navigation Header */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Page View Switch */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
            onSelectItem={(item) => setSelectedPortfolioItem(item)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {activePage === 'portfolio' && (
          <PortfolioPage
            onSelectItem={(item) => setSelectedPortfolioItem(item)}
          />
        )}

        {activePage === 'studio' && (
          <StudioPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {activePage === 'blog' && <BlogPage />}

        {activePage === 'contact' && (
          <ContactPage onOpenBooking={() => setIsBookingOpen(true)} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Interactive Booking Drawer / Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Fullscreen Portfolio Lightbox Modal */}
      <LightboxModal
        item={selectedPortfolioItem}
        items={PORTFOLIO_ITEMS}
        onClose={() => setSelectedPortfolioItem(null)}
        onNavigate={(item) => setSelectedPortfolioItem(item)}
      />
    </div>
  );
}

export default App;
