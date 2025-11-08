export interface QuotationData {
  businessProfile: BusinessProfile;
  selectedServices: string[];
  serviceScopes: Record<string, ServiceScope>;
  pricing: Pricing;
}

export interface BusinessProfile {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  category?: string;
  industry?: string;
  location?: string;
  branches?: number;
  digitalMaturity?: 'new' | 'moderate' | 'established';
  adBudget?: string;
  goals?: string[];
  timeline?: string;
}

export interface ServiceScope {
  platforms?: string[];
  postsPerMonth?: number;
  reelsPerMonth?: number;
  adCampaigns?: number;
  shootDays?: number;
  strategyCalls?: number;
  reportingDepth?: 'basic' | 'standard' | 'advanced';
  customFields?: Record<string, any>;
}

export interface Pricing {
  subtotal: number;
  discount: number;
  total: number;
  currency: 'INR' | 'USD';
  breakdown?: PricingItem[];
}

export interface PricingItem {
  service: string;
  monthlyCost: number;
  oneTimeCost?: number;
  description: string;
}

