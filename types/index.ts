export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  url?: string;
}

export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}
