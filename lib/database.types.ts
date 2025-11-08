export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  category: 'social' | 'marketing' | 'creative' | 'technical' | 'strategy';
  base_price: number;
  features: string[];
  deliverables: string[];
  pricing_tiers: PricingTier[];
  add_ons: AddOn[];
  created_at: string;
  updated_at: string;
}

export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
}

export interface AddOn {
  name: string;
  price: number;
  description: string;
  unit?: string;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  pain_points: string[];
  solutions: string[];
  sample_services: string[];
  case_study_ids: string[];
  icon: string;
  created_at: string;
  updated_at: string;
}

export interface Quotation {
  id: string;
  quote_number: string;
  client_name: string;
  client_email: string;
  client_phone?: string;
  client_company?: string;
  industry?: string;
  business_category?: string;
  location?: string;
  digital_maturity?: 'new' | 'moderate' | 'established';
  monthly_ad_budget?: string;
  selected_services: QuotationService[];
  subtotal: number;
  discount_percentage: number;
  discount_amount: number;
  total: number;
  currency: 'INR' | 'USD';
  payment_terms: string;
  validity_days: number;
  status: 'draft' | 'sent' | 'viewed' | 'accepted' | 'rejected';
  notes?: string;
  custom_message?: string;
  created_at: string;
  updated_at: string;
  created_by?: string;
}

export interface QuotationService {
  service_id: string;
  service_name: string;
  description: string;
  scope: ServiceScope;
  monthly_cost: number;
  one_time_cost?: number;
  deliverables: string[];
}

export interface ServiceScope {
  platforms?: string[];
  posts_per_month?: number;
  reels_per_month?: number;
  ad_campaigns?: number;
  shoot_days?: number;
  strategy_calls?: number;
  reporting_depth?: 'basic' | 'standard' | 'advanced';
  custom_fields?: Record<string, any>;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  message?: string;
  source: 'website' | 'quotation' | 'contact_form' | 'other';
  status: 'new' | 'contacted' | 'qualified' | 'proposal_sent' | 'won' | 'lost';
  budget_range?: string;
  timeline?: string;
  goals?: string[];
  files?: string[];
  quotation_id?: string;
  assigned_to?: string;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  industry?: string;
  logo_url?: string;
  website?: string;
  address?: string;
  active_services: string[];
  contract_start?: string;
  contract_end?: string;
  monthly_retainer: number;
  status: 'active' | 'paused' | 'cancelled';
  assigned_strategist?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: CaseStudyMetric[];
  services_used: string[];
  duration_months: number;
  featured: boolean;
  images: string[];
  testimonial?: Testimonial;
  created_at: string;
  updated_at: string;
  published: boolean;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  icon?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  client?: string;
  category: 'social' | 'branding' | 'web' | 'video' | 'photography' | 'other';
  tags: string[];
  media_urls: string[];
  media_type: 'image' | 'video';
  featured: boolean;
  order: number;
  created_at: string;
  published: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  featured_image: string;
  category: string;
  tags: string[];
  read_time: number;
  published: boolean;
  featured: boolean;
  seo_title?: string;
  seo_description?: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'team' | 'client';
  avatar_url?: string;
  phone?: string;
  created_at: string;
  last_login?: string;
}

