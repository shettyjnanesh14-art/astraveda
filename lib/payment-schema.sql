-- AstraVeda Payment & Subscription Schema

-- Orders Table (for one-time purchases and subscriptions)
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  client_email TEXT NOT NULL,
  client_name TEXT NOT NULL,
  client_phone TEXT,
  
  -- Order Details
  service_id TEXT NOT NULL,
  service_name TEXT NOT NULL,
  package_name TEXT NOT NULL,
  package_price DECIMAL(10, 2) NOT NULL,
  
  -- Subscription Details
  is_subscription BOOLEAN DEFAULT TRUE,
  billing_cycle TEXT DEFAULT 'monthly' CHECK (billing_cycle IN ('monthly', 'quarterly', 'annual')),
  subscription_start DATE,
  subscription_end DATE,
  
  -- Pricing
  subtotal DECIMAL(10, 2) NOT NULL,
  discount_amount DECIMAL(10, 2) DEFAULT 0,
  gst_amount DECIMAL(10, 2) NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'INR' CHECK (currency IN ('INR', 'USD')),
  
  -- Payment Details
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  payment_method TEXT, -- razorpay, stripe, bank_transfer
  payment_id TEXT, -- Razorpay payment ID
  razorpay_order_id TEXT,
  razorpay_payment_id TEXT,
  razorpay_signature TEXT,
  
  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'cancelled', 'completed')),
  
  -- Add-ons
  add_ons JSONB DEFAULT '[]',
  custom_requirements TEXT,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  paid_at TIMESTAMP WITH TIME ZONE,
  cancelled_at TIMESTAMP WITH TIME ZONE
);

-- Subscriptions Table (for recurring billing)
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  order_id UUID REFERENCES orders(id),
  
  -- Subscription Details
  service_id TEXT NOT NULL,
  package_name TEXT NOT NULL,
  billing_cycle TEXT DEFAULT 'monthly' CHECK (billing_cycle IN ('monthly', 'quarterly', 'annual')),
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  
  -- Dates
  start_date DATE NOT NULL,
  end_date DATE,
  next_billing_date DATE NOT NULL,
  last_billing_date DATE,
  
  -- Status
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'cancelled', 'expired')),
  
  -- Payment
  razorpay_subscription_id TEXT,
  payment_method TEXT,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  cancelled_at TIMESTAMP WITH TIME ZONE
);

-- Invoices Table
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  invoice_number TEXT UNIQUE NOT NULL,
  order_id UUID REFERENCES orders(id),
  subscription_id UUID REFERENCES subscriptions(id),
  user_id UUID REFERENCES auth.users(id),
  
  -- Invoice Details
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_company TEXT,
  billing_address TEXT,
  gstin TEXT, -- GST number if applicable
  
  -- Amounts
  subtotal DECIMAL(10, 2) NOT NULL,
  discount_amount DECIMAL(10, 2) DEFAULT 0,
  gst_amount DECIMAL(10, 2) NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  
  -- Line Items
  line_items JSONB NOT NULL,
  
  -- Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'overdue', 'cancelled')),
  payment_status TEXT DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'partially_paid', 'paid')),
  
  -- Dates
  issue_date DATE NOT NULL,
  due_date DATE NOT NULL,
  paid_date DATE,
  
  -- Metadata
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payment Transactions Table
CREATE TABLE payment_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id),
  invoice_id UUID REFERENCES invoices(id),
  user_id UUID REFERENCES auth.users(id),
  
  -- Transaction Details
  transaction_id TEXT UNIQUE NOT NULL,
  payment_gateway TEXT NOT NULL, -- razorpay, stripe, etc.
  gateway_transaction_id TEXT,
  
  -- Amount
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  
  -- Status
  status TEXT DEFAULT 'initiated' CHECK (status IN ('initiated', 'processing', 'success', 'failed', 'refunded')),
  
  -- Payment Method
  payment_method TEXT, -- card, upi, netbanking, wallet
  
  -- Gateway Response
  gateway_response JSONB,
  error_message TEXT,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Indexes
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_payment_status ON orders(payment_status);
CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_next_billing ON subscriptions(next_billing_date);
CREATE INDEX idx_invoices_user_id ON invoices(user_id);
CREATE INDEX idx_invoices_status ON invoices(status);
CREATE INDEX idx_payment_transactions_order_id ON payment_transactions(order_id);

-- Updated_at triggers
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_subscriptions_updated_at BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_invoices_updated_at BEFORE UPDATE ON invoices
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payment_transactions_updated_at BEFORE UPDATE ON payment_transactions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- RLS Policies
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_transactions ENABLE ROW LEVEL SECURITY;

-- Users can view their own orders
CREATE POLICY "Users can view own orders" ON orders FOR SELECT 
  USING (auth.uid() = user_id OR auth.jwt() ->> 'email' = client_email);

-- Users can view their own subscriptions
CREATE POLICY "Users can view own subscriptions" ON subscriptions FOR SELECT 
  USING (auth.uid() = user_id);

-- Users can view their own invoices
CREATE POLICY "Users can view own invoices" ON invoices FOR SELECT 
  USING (auth.uid() = user_id OR auth.jwt() ->> 'email' = client_email);

-- Admins have full access
CREATE POLICY "Admins full access to orders" ON orders FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins full access to subscriptions" ON subscriptions FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins full access to invoices" ON invoices FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');

CREATE POLICY "Admins full access to transactions" ON payment_transactions FOR ALL 
  USING (auth.jwt() ->> 'role' = 'admin');

