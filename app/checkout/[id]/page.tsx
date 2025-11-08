'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Check, Lock, CreditCard, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CheckoutPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [checkoutData, setCheckoutData] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'annual'>('monthly');

  useEffect(() => {
    // In production, load checkout data from API
    // For now, using mock data
    setCheckoutData({
      serviceId: 'social-media',
      serviceName: 'Social Media Management',
      packageName: 'Growth',
      packagePrice: 45000,
      features: [
        'All major platforms',
        '30 posts per month',
        '12 reels per month',
        'Advanced analytics',
        'Strategy calls',
      ],
    });
  }, [params.id]);

  const calculateTotal = () => {
    if (!checkoutData) return { subtotal: 0, gst: 0, total: 0, discount: 0 };
    
    const subtotal = checkoutData.packagePrice;
    
    // Apply billing cycle discount
    let discount = 0;
    if (billingCycle === 'quarterly') {
      discount = subtotal * 3 * 0.05; // 5% off quarterly
    } else if (billingCycle === 'annual') {
      discount = subtotal * 12 * 0.15; // 15% off annual
    }
    
    const afterDiscount = billingCycle === 'monthly' 
      ? subtotal 
      : billingCycle === 'quarterly'
      ? subtotal * 3 - discount
      : subtotal * 12 - discount;
    
    const gst = afterDiscount * 0.18; // 18% GST
    const total = afterDiscount + gst;
    
    return { subtotal, discount, gst, total: Math.round(total) };
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    toast.loading('Initiating payment...');

    try {
      // Create order in database
      const response = await fetch('/api/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...checkoutData,
          billingCycle,
          ...calculateTotal(),
        }),
      });

      if (!response.ok) throw new Error('Failed to create order');

      const { orderId, razorpayOrderId } = await response.json();

      // Initialize Razorpay (in production)
      // For now, simulate success
      toast.dismiss();
      toast.success('Payment processing simulated!');
      
      // Redirect to success page
      setTimeout(() => {
        router.push(`/checkout/success?order=${orderId}`);
      }, 1500);

      // In production:
      // const options = {
      //   key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      //   amount: calculateTotal().total * 100,
      //   currency: 'INR',
      //   order_id: razorpayOrderId,
      //   handler: function (response: any) {
      //     // Verify payment
      //     verifyPayment(response);
      //   },
      // };
      // const razorpay = new Razorpay(options);
      // razorpay.open();

    } catch (error: any) {
      console.error('Payment error:', error);
      toast.dismiss();
      toast.error(error.message || 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  if (!checkoutData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-charcoal-600">Loading checkout...</p>
        </div>
      </div>
    );
  }

  const totals = calculateTotal();

  return (
    <ProtectedRoute>
      <div className="pt-20 min-h-screen bg-charcoal-50">
        <Section>
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <button
                onClick={() => router.back()}
                className="flex items-center text-charcoal-600 hover:text-primary-500 mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </button>
              <h1 className="text-4xl font-display font-bold text-charcoal-900">
                Complete Your Purchase
              </h1>
              <p className="text-charcoal-600 mt-2">
                Secure checkout powered by Razorpay
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Order Summary */}
              <div className="lg:col-span-2 space-y-6">
                {/* Package Details */}
                <Card padding="lg">
                  <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Package Details</h2>
                  
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-charcoal-900">{checkoutData.serviceName}</h3>
                      <Badge variant="primary" className="mt-2">{checkoutData.packageName} Package</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary-500">
                        ₹{checkoutData.packagePrice.toLocaleString('en-IN')}
                      </div>
                      <div className="text-sm text-charcoal-600">per month</div>
                    </div>
                  </div>

                  <div className="bg-charcoal-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-charcoal-900 mb-3">Included Features:</h4>
                    <ul className="space-y-2">
                      {checkoutData.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-charcoal-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Billing Cycle */}
                  <div>
                    <h4 className="font-semibold text-charcoal-900 mb-3">Choose Billing Cycle:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'monthly', label: 'Monthly', discount: '0%' },
                        { value: 'quarterly', label: 'Quarterly', discount: 'Save 5%' },
                        { value: 'annual', label: 'Annual', discount: 'Save 15%' },
                      ].map((cycle) => (
                        <button
                          key={cycle.value}
                          onClick={() => setBillingCycle(cycle.value as any)}
                          className={`p-4 border-2 rounded-lg transition-all ${
                            billingCycle === cycle.value
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-charcoal-200 hover:border-charcoal-400'
                          }`}
                        >
                          <div className="font-semibold text-charcoal-900">{cycle.label}</div>
                          {cycle.discount !== '0%' && (
                            <div className="text-xs text-green-600 mt-1">{cycle.discount}</div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Customer Information */}
                <Card padding="lg">
                  <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Customer Information</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-charcoal-200">
                      <span className="text-charcoal-600">Name:</span>
                      <span className="font-semibold text-charcoal-900">
                        {user?.user_metadata?.full_name || user?.email?.split('@')[0]}
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-charcoal-200">
                      <span className="text-charcoal-600">Email:</span>
                      <span className="font-semibold text-charcoal-900">{user?.email}</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Payment Summary Sidebar */}
              <div>
                <Card padding="lg" className="sticky top-24">
                  <h3 className="text-xl font-bold text-charcoal-900 mb-6">Payment Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">Package Price:</span>
                      <span className="font-semibold">₹{totals.subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    
                    {billingCycle !== 'monthly' && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-charcoal-600">
                            {billingCycle === 'quarterly' ? '3 months' : '12 months'}:
                          </span>
                          <span className="font-semibold">
                            ₹{(totals.subtotal * (billingCycle === 'quarterly' ? 3 : 12)).toLocaleString('en-IN')}
                          </span>
                        </div>
                        {totals.discount > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span>Discount:</span>
                            <span className="font-semibold">-₹{totals.discount.toLocaleString('en-IN')}</span>
                          </div>
                        )}
                      </>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-charcoal-600">GST (18%):</span>
                      <span className="font-semibold">₹{Math.round(totals.gst).toLocaleString('en-IN')}</span>
                    </div>
                    
                    <div className="pt-3 border-t border-charcoal-300">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-charcoal-900">Total:</span>
                        <span className="text-2xl font-bold text-primary-500">
                          ₹{totals.total.toLocaleString('en-IN')}
                        </span>
                      </div>
                      {billingCycle !== 'monthly' && (
                        <div className="text-xs text-charcoal-500 text-right mt-1">
                          Billed {billingCycle}
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    fullWidth
                    size="lg"
                    onClick={handlePayment}
                    disabled={isProcessing}
                    icon={<Lock className="w-5 h-5" />}
                  >
                    {isProcessing ? 'Processing...' : 'Proceed to Payment'}
                  </Button>

                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center text-sm text-charcoal-500 mb-2">
                      <Lock className="w-4 h-4 mr-1" />
                      Secure checkout
                    </div>
                    <div className="text-xs text-charcoal-400">
                      Powered by Razorpay • Your data is encrypted
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mt-6 pt-6 border-t border-charcoal-200">
                    <div className="text-xs text-charcoal-600 mb-3 text-center">
                      We accept:
                    </div>
                    <div className="flex justify-center gap-3 flex-wrap">
                      {['💳 Cards', '🏦 UPI', '🏧 Net Banking', '💰 Wallets'].map((method) => (
                        <span
                          key={method}
                          className="px-3 py-1 bg-charcoal-100 rounded text-xs font-medium text-charcoal-700"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="mt-6 pt-6 border-t border-charcoal-200">
                    <p className="text-xs text-charcoal-500">
                      By completing this purchase, you agree to our{' '}
                      <a href="/terms" className="text-primary-500 hover:underline">
                        Terms of Service
                      </a>{' '}
                      and understand that subscriptions auto-renew until cancelled.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </ProtectedRoute>
  );
}

