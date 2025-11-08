export interface Order {
  id: string;
  order_number: string;
  user_id?: string;
  client_email: string;
  client_name: string;
  client_phone?: string;
  
  service_id: string;
  service_name: string;
  package_name: string;
  package_price: number;
  
  is_subscription: boolean;
  billing_cycle: 'monthly' | 'quarterly' | 'annual';
  subscription_start?: string;
  subscription_end?: string;
  
  subtotal: number;
  discount_amount: number;
  gst_amount: number;
  total_amount: number;
  currency: 'INR' | 'USD';
  
  payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
  payment_method?: string;
  payment_id?: string;
  razorpay_order_id?: string;
  razorpay_payment_id?: string;
  razorpay_signature?: string;
  
  status: 'active' | 'paused' | 'cancelled' | 'completed';
  
  add_ons?: any[];
  custom_requirements?: string;
  
  created_at: string;
  updated_at: string;
  paid_at?: string;
  cancelled_at?: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  order_id?: string;
  
  service_id: string;
  package_name: string;
  billing_cycle: 'monthly' | 'quarterly' | 'annual';
  amount: number;
  currency: 'INR' | 'USD';
  
  start_date: string;
  end_date?: string;
  next_billing_date: string;
  last_billing_date?: string;
  
  status: 'active' | 'paused' | 'cancelled' | 'expired';
  
  razorpay_subscription_id?: string;
  payment_method?: string;
  
  created_at: string;
  updated_at: string;
  cancelled_at?: string;
}

export interface Invoice {
  id: string;
  invoice_number: string;
  order_id?: string;
  subscription_id?: string;
  user_id?: string;
  
  client_name: string;
  client_email: string;
  client_company?: string;
  billing_address?: string;
  gstin?: string;
  
  subtotal: number;
  discount_amount: number;
  gst_amount: number;
  total_amount: number;
  currency: 'INR' | 'USD';
  
  line_items: InvoiceLineItem[];
  
  status: 'pending' | 'paid' | 'overdue' | 'cancelled';
  payment_status: 'unpaid' | 'partially_paid' | 'paid';
  
  issue_date: string;
  due_date: string;
  paid_date?: string;
  
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface InvoiceLineItem {
  description: string;
  quantity: number;
  unit_price: number;
  amount: number;
}

export interface PaymentTransaction {
  id: string;
  order_id?: string;
  invoice_id?: string;
  user_id?: string;
  
  transaction_id: string;
  payment_gateway: string;
  gateway_transaction_id?: string;
  
  amount: number;
  currency: 'INR' | 'USD';
  
  status: 'initiated' | 'processing' | 'success' | 'failed' | 'refunded';
  payment_method?: string;
  
  gateway_response?: any;
  error_message?: string;
  
  created_at: string;
  updated_at: string;
}

export interface CheckoutData {
  service_id: string;
  service_name: string;
  package_name: string;
  package_price: number;
  billing_cycle: 'monthly' | 'quarterly' | 'annual';
  add_ons?: AddOn[];
  custom_requirements?: string;
}

export interface AddOn {
  name: string;
  price: number;
  quantity?: number;
}

