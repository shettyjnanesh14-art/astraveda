-- AstraVeda Database Schema for Supabase

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Services Table
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  category TEXT CHECK (category IN ('social', 'marketing', 'creative', 'technical', 'strategy')),
  base_price DECIMAL(10, 2) NOT NULL,
  features JSONB DEFAULT '[]',
  deliverables JSONB DEFAULT '[]',
  pricing_tiers JSONB DEFAULT '[]',
  add_ons JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Industries Table
CREATE TABLE industries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  pain_points JSONB DEFAULT '[]',
  solutions JSONB DEFAULT '[]',
  sample_services JSONB DEFAULT '[]',
  case_study_ids JSONB DEFAULT '[]',
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Quotations Table
CREATE TABLE quotations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  quote_number TEXT UNIQUE NOT NULL,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT,
  client_company TEXT,
  industry TEXT,
  business_category TEXT,
  location TEXT,
  digital_maturity TEXT CHECK (digital_maturity IN ('new', 'moderate', 'established')),
  monthly_ad_budget TEXT,
  selected_services JSONB DEFAULT '[]',
  subtotal DECIMAL(10, 2) NOT NULL,
  discount_percentage DECIMAL(5, 2) DEFAULT 0,
  discount_amount DECIMAL(10, 2) DEFAULT 0,
  total DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'INR' CHECK (currency IN ('INR', 'USD')),
  payment_terms TEXT,
  validity_days INTEGER DEFAULT 30,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'viewed', 'accepted', 'rejected')),
  notes TEXT,
  custom_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id)
);

-- Leads Table
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  industry TEXT,
  message TEXT,
  source TEXT DEFAULT 'website' CHECK (source IN ('website', 'quotation', 'contact_form', 'other')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'proposal_sent', 'won', 'lost')),
  budget_range TEXT,
  timeline TEXT,
  goals JSONB DEFAULT '[]',
  files JSONB DEFAULT '[]',
  quotation_id UUID REFERENCES quotations(id),
  assigned_to UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Clients Table
CREATE TABLE clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  industry TEXT,
  logo_url TEXT,
  website TEXT,
  address TEXT,
  active_services JSONB DEFAULT '[]',
  contract_start DATE,
  contract_end DATE,
  monthly_retainer DECIMAL(10, 2),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'cancelled')),
  assigned_strategist UUID REFERENCES auth.users(id),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Case Studies Table
CREATE TABLE case_studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  client_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  result TEXT NOT NULL,
  metrics JSONB DEFAULT '[]',
  services_used JSONB DEFAULT '[]',
  duration_months INTEGER,
  featured BOOLEAN DEFAULT FALSE,
  images JSONB DEFAULT '[]',
  testimonial JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published BOOLEAN DEFAULT FALSE
);

-- Portfolio Items Table
CREATE TABLE portfolio_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  client TEXT,
  category TEXT CHECK (category IN ('social', 'branding', 'web', 'video', 'photography', 'other')),
  tags JSONB DEFAULT '[]',
  media_urls JSONB DEFAULT '[]',
  media_type TEXT CHECK (media_type IN ('image', 'video')),
  featured BOOLEAN DEFAULT FALSE,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published BOOLEAN DEFAULT FALSE
);

-- Blog Posts Table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  featured_image TEXT,
  category TEXT,
  tags JSONB DEFAULT '[]',
  read_time INTEGER,
  published BOOLEAN DEFAULT FALSE,
  featured BOOLEAN DEFAULT FALSE,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- User Profiles Table (extends Supabase auth.users)
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  role TEXT DEFAULT 'client' CHECK (role IN ('admin', 'team', 'client')),
  avatar_url TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better query performance
CREATE INDEX idx_quotations_status ON quotations(status);
CREATE INDEX idx_quotations_client_email ON quotations(client_email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_clients_status ON clients(status);
CREATE INDEX idx_case_studies_industry ON case_studies(industry);
CREATE INDEX idx_case_studies_featured ON case_studies(featured);
CREATE INDEX idx_portfolio_items_category ON portfolio_items(category);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger to relevant tables
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_industries_updated_at BEFORE UPDATE ON industries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quotations_updated_at BEFORE UPDATE ON quotations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_case_studies_updated_at BEFORE UPDATE ON case_studies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotations ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Public read access for services, industries, case studies, portfolio, blog
CREATE POLICY "Public can view services" ON services FOR SELECT USING (true);
CREATE POLICY "Public can view industries" ON industries FOR SELECT USING (true);
CREATE POLICY "Public can view published case studies" ON case_studies FOR SELECT USING (published = true);
CREATE POLICY "Public can view published portfolio" ON portfolio_items FOR SELECT USING (published = true);
CREATE POLICY "Public can view published blog posts" ON blog_posts FOR SELECT USING (published = true);

-- Admin full access to all tables
CREATE POLICY "Admins can do everything on services" ON services FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admins can do everything on industries" ON industries FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admins can do everything on quotations" ON quotations FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admins can do everything on leads" ON leads FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');
CREATE POLICY "Admins can do everything on clients" ON clients FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');

-- Clients can view their own data
CREATE POLICY "Clients can view their own quotations" ON quotations FOR SELECT 
  USING (auth.jwt() ->> 'email' = client_email);
CREATE POLICY "Clients can view their own profile" ON clients FOR SELECT 
  USING (auth.jwt() ->> 'email' = email);

