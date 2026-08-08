export type NavigationPage = 'home' | 'about' | 'portfolio' | 'studio' | 'blog' | 'contact';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Wedding' | 'Pre-Wedding' | 'Cinematic Films' | 'Birthday' | 'Baby' | 'Family' | 'Maternity' | 'Couple' | 'Engagement' | 'Events' | 'Traditional' | 'Portrait' | 'Fashion' | 'Editorial';
  year: string;
  client: string;
  image: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'tall';
  description: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  brandOrEvent: string;
  avatar: string;
  rating: number;
}

export interface StudioSpec {
  title: string;
  dimension: string;
  features: string[];
  image: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
}

export interface CinematicFilm {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  location: string;
  poster: string;
  videoUrl: string;
  description: string;
  director: string;
}

export interface CategoryShowcase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  categoryKey: string;
}
