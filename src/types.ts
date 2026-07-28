export interface HeroSlide {
  id: number;
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  image: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
}

export interface StatItem {
  number: string;
  suffix: string;
  label: string;
}

export interface AdvantageCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  fullContent?: string;
  colorTheme: 'primary' | 'secondary';
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  education: string;
  experience: string;
  email: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface EventItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  dateLocation: string;
  isUpcoming?: boolean;
}

export interface AcademicProgram {
  id: string;
  title: string;
  grades: string;
  description: string;
  subjects: string[];
  features: string[];
}
