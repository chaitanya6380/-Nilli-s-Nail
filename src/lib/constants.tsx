import { Service, MembershipTier, Testimonial, GalleryItem } from './types';

export const COLORS = {
  brand: '#E7646A',
  blush: '#E7646A',
  beige: '#EAD8C0',
  white: '#FAF9F6',
  rose: '#E7646A',
  gold: '#E7646A',
};

export const SERVICES: Service[] = [
  {
    id: 'h1',
    name: 'Royal Blowout',
    category: 'Hair',
    description: 'Signature wash, massage, and expert styling for that perfect bounce.',
    price: '$65',
    duration: '45 mins',
    image: 'https://picsum.photos/seed/hair1/600/800'
  },
  {
    id: 's1',
    name: 'Glow Radiance Facial',
    category: 'Skin',
    description: 'A luxurious 12-step facial using premium organic serums for instant luminosity.',
    price: '$120',
    duration: '60 mins',
    image: 'https://picsum.photos/seed/skin1/600/800'
  },
  {
    id: 'n1',
    name: 'Silk Gel Manicure',
    category: 'Nails',
    description: 'Refined cuticle care and long-lasting silk-infused gel polish.',
    price: '$55',
    duration: '50 mins',
    image: 'https://picsum.photos/seed/nail1/600/800'
  },
  {
    id: 'w1',
    name: 'Botanical Waxing',
    category: 'Waxing',
    description: 'Gentle, rose-infused wax suitable for sensitive skin.',
    price: '$45',
    duration: '30 mins',
    image: 'https://picsum.photos/seed/wax1/600/800'
  }
];

export const MEMBERSHIPS: MembershipTier[] = [
  {
    id: 'silver',
    name: 'Silver',
    price: '₹15,000',
    period: 'month',
    benefits: [
      'Validity 3 months',
      'Total value ₹20,000',
      'Free services worth ₹5,000',
      'Referral bonus: ₹500 voucher added',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '₹20,000',
    period: 'month',
    benefits: [
      'Validity 4 months',
      'Total value ₹27,000',
      'Free services worth ₹7,000',
      'Referral bonus: ₹1,000 voucher added',
    ],
    isFeatured: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '₹25,000',
    period: 'month',
    benefits: [
      'Validity 5 months',
      'Total value ₹34,000',
      'Free services worth ₹9,000',
      'Referral bonus: ₹1,500 voucher added',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'IT Professional',
    text: "The most refined atmosphere I've experienced. My skin has never looked better than after their Glow Radiance facial.",
    rating: 5,
    image: 'https://picsum.photos/seed/p1/200/200'
  },
  {
    id: 't2',
    name: 'Rahul Verma',
    role: 'Entrepreneur',
    text: "True luxury is in the details. Nilli's Nail & Beauty Lounge gets everything right, from the soft linen to the expert colorists.",
    rating: 5,
    image: 'https://picsum.photos/seed/p2/200/200'
  },
  {
    id: 't3',
    name: 'Aisha Khan',
    role: 'Bridal Client',
    text: "From my pre-bridal rituals to the final look, the team made me feel completely taken care of. I’ve never felt more confident on a big day.",
    rating: 5,
    image: 'https://picsum.photos/seed/p3/200/200'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', category: 'Nails', image: 'https://picsum.photos/seed/g1/800/800', title: 'Pearl Finish' },
  { id: 'g2', category: 'Hair', image: 'https://picsum.photos/seed/g2/800/800', title: 'Balayage Glow' },
  { id: 'g3', category: 'Skin', image: 'https://picsum.photos/seed/g3/800/800', title: 'Hydra Therapy' },
  { id: 'g4', category: 'Nails', image: 'https://picsum.photos/seed/g4/800/800', title: 'Minimalist Chic' },
];
