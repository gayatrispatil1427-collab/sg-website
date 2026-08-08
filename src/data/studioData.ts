import type { PortfolioItem, BlogPost, Testimonial, StudioSpec, TeamMember, CinematicFilm, CategoryShowcase } from '../types';

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Royal Heritage Vows & Grand Villa Ceremonies',
    subtitle: 'WEDDING PHOTOGRAPHY',
    category: 'Wedding',
    location: 'DESTINATION & LUXURY WEDDINGS',
    image: '/img/bb.jpg',
    tagline: 'Documenting high-society vows with medium format depth and cinematic romance.'
  },
  {
    id: 2,
    title: 'Golden Hour Dawn & Heritage Promenade',
    subtitle: 'PRE-WEDDING PHOTOGRAPHY',
    category: 'Pre-Wedding',
    location: 'PRE-WEDDING DESTINATIONS & LOCATIONS',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000&auto=format&fit=crop',
    tagline: 'High-fashion editorial pre-wedding portraits captured in golden hour light.'
  },
  {
    id: 3,
    title: 'Haute Couture Soirées & Milestone Galas',
    subtitle: 'BIRTHDAY PHOTOGRAPHY',
    category: 'Birthday',
    location: 'SANGLI — PUNE — KOLHAPUR',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop',
    tagline: 'Luminous event documentation for landmark birthday galas and anniversary celebrations.'
  },
  {
    id: 4,
    title: 'Pure Organic Daylight Milestones',
    subtitle: 'BABY & NEWBORN PHOTOGRAPHY',
    category: 'Baby',
    location: 'SANGLI FLAGSHIP STUDIO',
    image: '/img/bbb.jpg',
    tagline: 'Gentle newborn and baby milestone portraiture flooded with 18ft natural window light.'
  },
  {
    id: 5,
    title: 'Generational Legacy & Heritage Estates',
    subtitle: 'FAMILY PHOTOGRAPHY',
    category: 'Family',
    location: 'HERITAGE ESTATE & STUDIO SESSIONS',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop',
    tagline: 'Timeless heirlooms crafted across multi-generational estate portraits.'
  }
];

export interface StudioService {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  iconName: string;
}

export const STUDIO_SERVICES: StudioService[] = [
  {
    id: 'serv-wedding',
    title: 'Wedding Photography',
    category: 'Wedding',
    subtitle: 'FINE ART & ROYAL NUPTIALS',
    description: 'Cinematic, timeless wedding photography that documents authentic emotion, wardrobe details, and architectural backdrops.',
    image: '/img/bb.jpg',
    iconName: 'Camera'
  },
  {
    id: 'serv-prewedding',
    title: 'Pre-Wedding Photography',
    category: 'Pre-Wedding',
    subtitle: 'EDITORIAL DAWN ROMANCES',
    description: 'High-fashion pre-wedding sessions crafted for couples who desire magazine-grade portraiture amidst historic backdrops.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    iconName: 'Heart'
  },
  {
    id: 'serv-films',
    title: 'Cinematic Wedding Films',
    category: 'Cinematic Films',
    subtitle: '4K FEATURE DOCUMENTARIES',
    description: 'Moving image masterpieces shot in 4K resolution with high-fidelity acoustic soundscapes and slow-motion color grading.',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop',
    iconName: 'Film'
  },
  {
    id: 'serv-birthday',
    title: 'Birthday Photography',
    category: 'Birthday',
    subtitle: 'MILESTONE GALA SOIRÉES',
    description: 'Luminous event documentation capturing champagne toasts, live performances, and milestone galas.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    iconName: 'Gift'
  },
  {
    id: 'serv-baby',
    title: 'Baby & Newborn Photography',
    category: 'Baby',
    subtitle: 'ORGANIC DAYLIGHT MILESTONES',
    description: 'Gentle newborn and baby milestone portraiture flooded with natural window daylight and pure linen textures.',
    image: '/img/bbb.jpg',
    iconName: 'Sun'
  },
  {
    id: 'serv-family',
    title: 'Family & Heirloom Portraits',
    category: 'Family',
    subtitle: 'GENERATIONAL ESTATE LEGACY',
    description: 'Timeless heirlooms crafted across multi-generational family estate portraits and studio sessions.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop',
    iconName: 'Users'
  },
  {
    id: 'serv-maternity',
    title: 'Maternity Photography',
    subtitle: 'SILK SILHOUETTES & LIGHT',
    category: 'Maternity',
    description: 'Sculptural maternity silhouettes utilizing delicate rim lighting and dramatic sheer silk drapery.',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop',
    iconName: 'Sparkles'
  },
  {
    id: 'serv-couple',
    title: 'Couple Photography',
    subtitle: 'CANDID SUNSET EMOTIONS',
    category: 'Couple',
    description: 'Unfiltered, romantic couple sessions captured in golden hour light along panoramic scenery.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800&auto=format&fit=crop',
    iconName: 'HeartHandshake'
  },
  {
    id: 'serv-engagement',
    title: 'Engagement Photography',
    subtitle: 'DISCREET PROPOSAL CAPTURE',
    category: 'Engagement',
    description: 'Secretly staged proposal capture and emotional ring unveiling sessions.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop',
    iconName: 'Award'
  },
  {
    id: 'serv-traditional',
    title: 'Traditional Photography',
    subtitle: 'CULTURAL RITUAL HERITAGE',
    category: 'Traditional',
    description: 'Vibrant, culturally rich documentation preserving traditional ceremonies and heritage rituals.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
    iconName: 'Flame'
  },
  {
    id: 'serv-events',
    title: 'Event Photography',
    subtitle: 'HIGH-PROFILE VIP GALAS',
    category: 'Events',
    description: 'Discreet high-profile gala coverage for corporate milestones, art galas, and VIP receptions.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
    iconName: 'Shield'
  }
];

export const CINEMATIC_FILMS: CinematicFilm[] = [
  {
    id: 'film-1',
    title: 'Royal Destination Vows',
    subtitle: 'FULL CINEMATIC FEATURE FILM',
    category: 'Wedding Film',
    duration: '04:20',
    location: 'Grand Heritage Estate',
    poster: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-in-a-park-41584-large.mp4',
    description: 'An emotional 4K feature film documenting vows, sunset garden walks, and candlelit receptions.',
    director: 'Aetheria Cinema Team'
  },
  {
    id: 'film-2',
    title: 'Golden Dawn Serenade',
    subtitle: 'PRE-WEDDING CINEMATIC TEASER',
    category: 'Pre-Wedding Film',
    duration: '01:30',
    location: 'Flagship Studio & Waterfront Venue',
    poster: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-couple-walking-on-a-sunny-day-41583-large.mp4',
    description: 'A 90-second slow-motion teaser capturing quiet romance along scenic waterfront locations before sunrise.',
    director: 'Sofia Chen'
  },
  {
    id: 'film-3',
    title: 'The Heritage Soirée Highlight',
    subtitle: 'BIRTHDAY GALA HIGHLIGHT REEL',
    category: 'Highlight Reel',
    duration: '02:45',
    location: 'Grand Ballroom Venue',
    poster: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-party-crowd-raising-their-hands-41586-large.mp4',
    description: 'High-energy documentary reel covering champagne toasts, live orchestra, and ballroom dancing.',
    director: 'Marcus Vance'
  },
  {
    id: 'film-4',
    title: 'Heritage Estate Legacy',
    subtitle: 'HERITAGE FAMILY CINEMATIC REEL',
    category: 'Highlight Reel',
    duration: '03:15',
    location: 'Sangli & Regional Estates',
    poster: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-family-walking-in-the-grass-during-sunset-41585-large.mp4',
    description: 'A poetic cinematic tribute celebrating family heritage, golden hour walks, and generational connection.',
    director: 'Elena Rostova'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. Wedding Photography
  {
    id: 'p-wedding-1',
    title: 'Royal Destination Nuptials',
    category: 'Wedding',
    year: '2026',
    client: 'Private Client',
    image: '/img/bb.jpg',
    aspectRatio: 'landscape',
    description: 'A grand destination wedding featuring twilight lake boat rides and candlelit dinners.',
    tags: ['Destination Wedding', 'Luxury Vows', 'Hasselblad', 'Blue Hour']
  },
  {
    id: 'p-wedding-2',
    title: 'Grand Vineyard Romance',
    category: 'Wedding',
    year: '2025',
    client: 'Luxury Weddings Feature',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'portrait',
    description: 'Intimate sunset vows amidst rolling hills and historic courtyard receptions.',
    tags: ['Heritage', 'Sunset', 'Candid', 'Luxury Weddings']
  },
  {
    id: 'p-wedding-3',
    title: 'Candlelit Palace Reception',
    category: 'Wedding',
    year: '2026',
    client: 'Vogue Feature',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'landscape',
    description: 'Luminous indoor palace reception framed with hanging floral chandeliers and acoustic strings.',
    tags: ['Palace Wedding', 'Candlelit', 'Fine Art', 'Luxury']
  },

  // 2. Pre-Wedding Photography
  {
    id: 'p-prewedding-2',
    title: 'Scenic Riverboat Serenade',
    category: 'Pre-Wedding',
    year: '2025',
    client: 'Luxury Bride Feature',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'portrait',
    description: 'Atmospheric reflections and marble bridge portraits captured in misty golden dawn.',
    tags: ['Riverfront', 'Canal', 'Editorial', 'Luxury Bride']
  },
  {
    id: 'p-prewedding-3',
    title: 'Architectural Twilight Promenade',
    category: 'Pre-Wedding',
    year: '2026',
    client: 'Private Couple',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'landscape',
    description: 'Dramatic twilight silhouettes framed by historical stone arches and ambient lighting.',
    tags: ['Architecture', 'Twilight', 'Silhouette', 'Elegance']
  },

  // 3. Cinematic Films
  {
    id: 'p-film-1',
    title: '4K Wedding Feature Teaser',
    category: 'Cinematic Films',
    year: '2026',
    client: 'Cinema Release',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'landscape',
    description: '4K cinematic film stills highlighting slow-motion vows, acoustic violins, and emotional toasts.',
    tags: ['Cinematic Film', '4K Documentary', 'Wedding Reel']
  },
  {
    id: 'p-film-2',
    title: 'Golden Hour Sunset Teaser',
    category: 'Cinematic Films',
    year: '2026',
    client: 'Feature Reel',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'portrait',
    description: 'High-speed camera captures of sunset warmth, flare dynamics, and emotional speeches.',
    tags: ['Teaser', 'Golden Hour', 'Slow Motion']
  },

  // 4. Birthday Photography
  {
    id: 'p-birthday-1',
    title: 'Grand Ballroom Soirée',
    category: 'Birthday',
    year: '2026',
    client: 'Private Commission',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'landscape',
    description: 'Documentary coverage of a landmark 30th birthday gala featuring live orchestra.',
    tags: ['Birthday', 'Grand Gala', 'Milestone', 'High Society']
  },
  {
    id: 'p-birthday-2',
    title: 'Milestone Jubilee Celebration',
    category: 'Birthday',
    year: '2025',
    client: 'Private Client',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'portrait',
    description: 'Vibrant party documentation showcasing fireworks, live band performances, and custom cake unveilings.',
    tags: ['Jubilee', 'Celebration', 'Party', 'Milestone']
  },

  // 5. Baby & Newborn Photography
  {
    id: 'p-baby-1',
    title: 'Daylight Serenity in Studio Stage',
    category: 'Baby',
    year: '2026',
    client: 'Private Family',
    image: '/img/bbb.jpg',
    aspectRatio: 'square',
    description: 'Soft 18ft natural window daylight portraiture of newborn grace wrapped in organic linen.',
    tags: ['Baby', 'Newborn', 'Studio Stage', 'Natural Light']
  },
  {
    id: 'p-baby-3',
    title: 'Pure Daylight Baby Portraits',
    category: 'Baby',
    year: '2025',
    client: 'Private Client',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'landscape',
    description: 'Natural daylight studio session capturing candid laughter and first milestone steps.',
    tags: ['Daylight', 'Newborn', 'Pure', 'Studio']
  },

  // 6. Family Photography
  {
    id: 'p-family-1',
    title: 'Heritage Estate Legacy',
    category: 'Family',
    year: '2026',
    client: 'Private Estate',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'portrait',
    description: 'Three-generation heirloom family portraiture captured during golden hour.',
    tags: ['Family', 'Heritage', 'Estates', 'Heirloom']
  },
  // 7. Maternity Photography
  {
    id: 'p-maternity-1',
    title: 'Silk Drapery & Rim Light',
    category: 'Maternity',
    year: '2026',
    client: 'Private Commission',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'tall',
    description: 'Sculptural maternity silhouette utilizing rim lighting and dramatic sheer silk drapery.',
    tags: ['Maternity', 'Sculptural', 'Rim Light', 'Elegance']
  },

  // 8. Couple Photography
  {
    id: 'p-couple-1',
    title: 'Cliffside Coastal Romance',
    category: 'Couple',
    year: '2026',
    client: 'Private Couple',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'landscape',
    description: 'Unfiltered, candid couple session along panoramic terraces at sunset.',
    tags: ['Couple', 'Coastal', 'Sunset', 'Romance']
  },
  {
    id: 'p-couple-2',
    title: 'Golden Hour Meadow Embrace',
    category: 'Couple',
    year: '2025',
    client: 'Private Couple',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'portrait',
    description: 'Candid lifestyle session celebrating authentic love and quiet emotional connection.',
    tags: ['Couple', 'Embrace', 'Meadow', 'Candid']
  },

  // 9. Engagement Photography
  {
    id: 'p-engagement-1',
    title: 'Sunset Cliffside Proposal',
    category: 'Engagement',
    year: '2026',
    client: 'Private Client',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'portrait',
    description: 'Discreet proposal capture atop scenic whitewashed rooftop overlooking the blue waters.',
    tags: ['Engagement', 'Proposal', 'Sunset', 'Romance']
  },
  {
    id: 'p-engagement-2',
    title: 'Secret Garden Ring Unveiling',
    category: 'Engagement',
    year: '2025',
    client: 'Private Client',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'landscape',
    description: 'Surprise proposal documented quietly amidst lush botanical garden pathways.',
    tags: ['Secret Proposal', 'Garden', 'Ring Unveiling']
  },

  // 10. Traditional Photography
  {
    id: 'p-traditional-2',
    title: 'Festive Ceremonial Rituals',
    category: 'Traditional',
    year: '2025',
    client: 'Heritage Feature',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'landscape',
    description: 'Authentic captures of ceremonial attire, floral decorations, and ritual sacred fires.',
    tags: ['Festive', 'Traditional', 'Ceremony', 'Gold']
  },

  // 11. Event Photography
  {
    id: 'p-events-1',
    title: 'Heritage Art VIP Gala',
    category: 'Events',
    year: '2026',
    client: 'Private Art Gala',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'landscape',
    description: 'Discreet high-profile reception photography for art collectors and gallery galas.',
    tags: ['Events', 'Gala', 'VIP Gala', 'Art World']
  },
  {
    id: 'p-events-2',
    title: 'Corporate Leadership Summit',
    category: 'Events',
    year: '2025',
    client: 'Corporate Client',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'portrait',
    description: 'High-end corporate keynote and networking reception documentation.',
    tags: ['Corporate', 'Summit', 'Keynote', 'Leadership']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b-featured',
    title: 'The Master Class: Sculpting High Fashion Light & Shadow',
    excerpt: 'An in-depth guide on medium format sensor dynamics, large-surface diffusion scrims, and Rembrandt contrast control.',
    content: `When capturing editorial portraiture, the difference between a good photograph and a masterpiece lies in the gradations of shadow and light. Medium format cameras, with their physically massive sensors, afford an unparalleled dynamic range.

In our studio, we rely on the Hasselblad H6D system. It doesn't merely capture pixels; it renders volume, depth, and three-dimensional realism.`,
    category: 'Technical & Craft',
    date: 'July 28, 2026',
    readTime: '8 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Founder & Principal Director',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
    },
    coverImage: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'b-wedding',
    title: 'Preparing Your Timeline for Sunset Wedding & Pre-Wedding Portraits',
    excerpt: 'How to structure your wedding itinerary so you never miss twilight golden hour.',
    content: `Wedding photography requires meticulous scheduling around solar angles. Natural light moves quickly across gardens and historic venues.`,
    category: 'Wedding Tips',
    date: 'July 15, 2026',
    readTime: '6 min read',
    author: {
      name: 'Sofia Chen',
      role: 'Lead Destination Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
    },
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Aetheria did not just document our wedding; they rendered it like a high-fashion film. The Hasselblad prints in our home are true heritage masterpieces.',
    clientName: 'Clarissa & Vikram',
    clientRole: 'Private Commission',
    brandOrEvent: 'Luxury Wedding Nuptials',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 't2',
    quote: 'From our pre-wedding editorial stroll to our newborn studio sessions, our team possesses an effortless eye for light and emotional grace.',
    clientName: 'Henri & Vivienne',
    clientRole: 'Private Client',
    brandOrEvent: 'Pre-Wedding & Family Monograph',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    rating: 5
  }
];

export const STUDIO_SPECS: StudioSpec[] = [
  {
    title: 'The Great Daylight Stage',
    dimension: '3,200 sq. ft. / 22ft Ceiling',
    features: ['18ft South-facing Floor-to-Ceiling Windows', '360° Seamless White Cyclorama Wall', 'Motorized Overhead Light Truss System', 'Private Hair & Makeup Suite'],
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1600&auto=format&fit=crop',
    description: 'Flooded with diffused natural sunlight from sunrise to sunset, optimized for editorial fashion, campaign films, and studio set builds.'
  }
];

export const CATEGORY_SHOWCASES: CategoryShowcase[] = [
  {
    id: 'cat-wedding',
    title: 'Wedding Photography',
    subtitle: 'Fine Art & Royal Celebrations',
    description: 'Cinematic, timeless wedding photography that documents authentic emotion, wardrobe details, and breathtaking architectural backdrops across luxury venues and flagship studio settings.',
    image: '/img/bb.jpg',
    features: ['Hasselblad Medium Format Detail', 'Discreet Photojournalistic Coverage', 'Twilight Blue Hour Couples Session', 'Museum Fine Art Albums'],
    categoryKey: 'Wedding'
  },
  {
    id: 'cat-prewedding',
    title: 'Pre-Wedding Photography',
    subtitle: 'High-Fashion Dawn & Dusk Romances',
    description: 'Editorial pre-wedding sessions crafted for couples who desire magazine-grade portraiture amidst iconic historic architectural estates and scenic natural landscapes.',
    image: '/img/bbb.jpg',
    features: ['Private Location Permitting', 'Stylist & Hair/Makeup Support', 'Sunrise Golden Hour Lighting', 'Color Calibrated 4K Galleries'],
    categoryKey: 'Pre-Wedding'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Elena Rostova',
    role: 'Founder & Principal Creative Director',
    bio: 'Renowned portrait artist with 14 years of master photography and luxury studio leadership.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    specialty: 'Fine Art Portraiture & Creative Direction'
  }
];
