import { Hero } from '../components/Hero';
import { SpecializationsGrid } from '../components/SpecializationsGrid';
import { WeddingPreWeddingShowcase } from '../components/WeddingPreWeddingShowcase';
import { VideoGallery } from '../components/VideoGallery';
import { FeaturedPortfolio } from '../components/FeaturedPortfolio';
import { StudioPreview } from '../components/StudioPreview';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { LatestBlog } from '../components/LatestBlog';
import { ContactCTA } from '../components/ContactCTA';
import type { PortfolioItem, NavigationPage } from '../types';

interface HomePageProps {
  onNavigate: (page: NavigationPage) => void;
  onOpenBooking: () => void;
  onSelectItem: (item: PortfolioItem) => void;
}

export const HomePage = ({ onNavigate, onOpenBooking, onSelectItem }: HomePageProps) => {
  return (
    <div className="space-y-0">
      {/* 2. Fullscreen Hero Video & 5 Slides (Wedding, Pre-Wedding, Birthday, Baby, Family) */}
      <Hero onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

      {/* 3. Featured Photography Categories (All 12 Specializations) */}
     <SpecializationsGrid onNavigate={onNavigate} />

      {/* 4. Wedding & Pre-Wedding Showcase */}
      <WeddingPreWeddingShowcase onNavigate={onNavigate} />

      {/* 5. Cinematic Films Preview (Video Section) */}
      <VideoGallery />

      {/* 6. Premium Portfolio Preview */}
      <FeaturedPortfolio onNavigate={onNavigate} onSelectItem={onSelectItem} />

      {/* 7 & 8. Studio Experience & Behind The Scenes */}
      <StudioPreview onNavigate={onNavigate} onOpenBooking={onOpenBooking} />

      {/* 9. Why Choose Us */}
      <WhyChooseUs />

      {/* 10. Client Testimonials */}
      <Testimonials />

      {/* 11. Latest Blog */}
      <LatestBlog onNavigate={onNavigate} />

      {/* 12. Contact & Booking CTA */}
      <ContactCTA onNavigate={onNavigate} onOpenBooking={onOpenBooking} />
    </div>
  );
};
