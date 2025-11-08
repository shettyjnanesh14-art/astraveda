'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { CheckCircle, ArrowRight, Download } from 'lucide-react';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order');

  useEffect(() => {
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: orderId,
        value: 0, // Add actual value
        currency: 'INR',
      });
    }
  }, [orderId]);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-primary-50 flex items-center">
      <Section>
        <div className="max-w-2xl mx-auto">
          <Card padding="lg" className="text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            {/* Success Message */}
            <h1 className="text-4xl font-display font-bold text-charcoal-900 mb-4">
              Payment Successful! 🎉
            </h1>
            <p className="text-xl text-charcoal-600 mb-8">
              Welcome to AstraVeda! Your subscription is now active.
            </p>

            {/* Order Details */}
            <div className="bg-charcoal-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-charcoal-900 mb-4">Order Details:</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Order ID:</span>
                  <span className="font-mono font-semibold">{orderId || 'ORD-XXXX'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Payment Method:</span>
                  <span className="font-semibold">Razorpay</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-600">Status:</span>
                  <span className="text-green-600 font-semibold">Paid ✓</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-charcoal-900 mb-4">What Happens Next:</h3>
              <ol className="list-decimal list-inside space-y-2 text-charcoal-700">
                <li>Check your email for order confirmation</li>
                <li>Our team will reach out within 24 hours</li>
                <li>We'll schedule your onboarding call</li>
                <li>We kick off within 48 hours!</li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                href="/portal"
                variant="primary"
                size="lg"
                fullWidth
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Go to Dashboard
              </Button>
              <Button
                variant="outline"
                size="lg"
                fullWidth
                icon={<Download className="w-5 h-5" />}
              >
                Download Invoice
              </Button>
            </div>

            {/* Support */}
            <div className="mt-8 pt-6 border-t border-charcoal-200">
              <p className="text-sm text-charcoal-600">
                Questions?{' '}
                <a href="mailto:hello@astraveda.io" className="text-primary-500 hover:underline font-semibold">
                  hello@astraveda.io
                </a>{' '}
                |{' '}
                <a href="tel:+918660025993" className="text-primary-500 hover:underline font-semibold">
                  +91 86600 25993
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}

