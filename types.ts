
export interface Service {
  id: string;
  name: string;
  category: 'Hair' | 'Skin' | 'Nails' | 'Waxing';
  description: string;
  price: string;
  duration: string;
  image: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  period: 'month' | 'year';
  benefits: string[];
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: 'Hair' | 'Skin' | 'Nails';
  image: string;
  title: string;
}
