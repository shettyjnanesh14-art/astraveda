// Razorpay integration for payments

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  handler: (response: RazorpayResponse) => void;
  modal: {
    ondismiss: () => void;
  };
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function initiatePayment(options: RazorpayOptions): Promise<void> {
  const loaded = await loadRazorpayScript();
  
  if (!loaded) {
    throw new Error('Razorpay SDK failed to load');
  }

  const razorpay = new window.Razorpay(options);
  razorpay.open();
}

export function calculateGST(amount: number): number {
  return amount * 0.18; // 18% GST
}

export function calculateTotal(subtotal: number, discount: number = 0): {
  subtotal: number;
  discount: number;
  gst: number;
  total: number;
} {
  const afterDiscount = subtotal - discount;
  const gst = calculateGST(afterDiscount);
  const total = afterDiscount + gst;

  return {
    subtotal,
    discount,
    gst,
    total: Math.round(total),
  };
}

export function generateOrderNumber(): string {
  const prefix = 'AV';
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}-${timestamp}-${random}`;
}

export function generateInvoiceNumber(): string {
  const prefix = 'INV';
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${prefix}-${year}${month}-${random}`;
}

