export interface NavLink {
  label: string;
  href: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  stat: string;
  description: string;
}

export interface ServiceFeature {
  text: string;
}

export interface Service {
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: ServiceFeature[];
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  decimals?: number;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  rating: number;
  quote: string;
  result: string;
}

export interface PricingFeature {
  name: string;
  starter: string | boolean;
  growth: string | boolean;
  dominator: string | boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  url: string;
}

export interface LeadFormData {
  firstName: string;
  lastName?: string;
  email?: string;
  phone: string;
  company: string;
  trucks?: string;
  budget?: string;
  message?: string;
}

export type ProjectCategory = "website-design" | "seo" | "google-ads" | "ai-receptionist" | "full-service";

export interface ProjectMetric {
  label: string;
  before: string;
  after: string;
  suffix?: string;
  improvement: string;
}

export interface ProjectTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Project {
  title: string;
  slug: string;
  client: string;
  industry: string;
  category: ProjectCategory;
  featured: boolean;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: ProjectMetric[];
  testimonial: ProjectTestimonial;
  services: string[];
  timeline: string;
  heroStat: string;
}

export interface ProjectCategoryInfo {
  value: ProjectCategory;
  label: string;
  icon: string;
  description: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  icon: string;
  title: string;
  headline: string;
  subheadline: string;
  heroStats: ServiceStat[];
  painPoints: string[];
  solutionTitle: string;
  solutionDescription: string;
  features: { title: string; description: string; icon: string }[];
  process: ServiceProcessStep[];
  benefits: string[];
  faqs: ServiceFAQ[];
  ctaTitle: string;
  ctaDescription: string;
}
