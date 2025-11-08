'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import { ShoppingCart, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

interface CheckoutButtonProps {
  serviceId: string;
  serviceName: string;
  packageName: string;
  packagePrice: number;
  billingCycle?: 'monthly' | 'quarterly' | 'annual';
  features: string[];
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function CheckoutButton({
  serviceId,
  serviceName,
  packageName,
  packagePrice,
  billingCycle = 'monthly',
  features,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}: CheckoutButtonProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      // If not logged in, redirect to signup with return URL
      if (!user) {
        const checkoutData = encodeURIComponent(
          JSON.stringify({
            serviceId,
            serviceName,
            packageName,
            packagePrice,
            billingCycle,
          })
        );
        router.push(`/auth/signup?checkout=${checkoutData}`);
        return;
      }

      // Create checkout session
      const response = await fetch('/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId,
          serviceName,
          packageName,
          packagePrice,
          billingCycle,
          features,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout');
      }

      const data = await response.json();

      // Redirect to checkout page
      router.push(`/checkout/${data.checkoutId}`);
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast.error(error.message || 'Failed to start checkout');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={handleCheckout}
      disabled={isLoading}
      icon={<ShoppingCart className="w-5 h-5" />}
    >
      {isLoading ? 'Processing...' : user ? 'Buy Now' : 'Sign Up & Buy'}
    </Button>
  );
}

