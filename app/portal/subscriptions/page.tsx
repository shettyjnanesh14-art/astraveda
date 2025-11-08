'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Calendar, CreditCard, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function SubscriptionsPage() {
  const { user } = useAuth();
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadSubscriptions();
    }
  }, [user]);

  const loadSubscriptions = async () => {
    try {
      // Load user's subscriptions
      const { data: subs } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false });

      // Load user's orders
      const { data: userOrders } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user!.id)
        .order('created_at', { ascending: false });

      setSubscriptions(subs || []);
      setOrders(userOrders || []);
    } catch (error) {
      console.error('Error loading subscriptions:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="pt-20">
        <Section background="gray">
          <h1 className="text-4xl font-display font-bold text-charcoal-900 mb-8">
            My Subscriptions
          </h1>

          {/* Active Subscriptions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Active Subscriptions</h2>
            
            {subscriptions.length === 0 ? (
              <Card padding="lg" className="text-center">
                <AlertCircle className="w-12 h-12 text-charcoal-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">No Active Subscriptions</h3>
                <p className="text-charcoal-600 mb-6">
                  Browse our services and start your growth journey today!
                </p>
                <Button href="/services" variant="primary">
                  Explore Services
                </Button>
              </Card>
            ) : (
              <div className="grid gap-6">
                {subscriptions.map((sub) => (
                  <Card key={sub.id} padding="lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-charcoal-900">
                            {sub.service_id}
                          </h3>
                          <Badge variant={sub.status === 'active' ? 'success' : 'secondary'}>
                            {sub.status}
                          </Badge>
                        </div>
                        <div className="text-charcoal-600 mb-2">{sub.package_name} Package</div>
                        <div className="flex flex-wrap gap-4 text-sm text-charcoal-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            Next Billing: {new Date(sub.next_billing_date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <CreditCard className="w-4 h-4 mr-1" />
                            ₹{sub.amount?.toLocaleString('en-IN')}/{sub.billing_cycle}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Order History */}
          <div>
            <h2 className="text-2xl font-bold text-charcoal-900 mb-4">Order History</h2>
            
            {orders.length === 0 ? (
              <Card padding="lg" className="text-center">
                <p className="text-charcoal-600">No orders yet</p>
              </Card>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} padding="lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="font-mono text-sm text-charcoal-500 mb-1">
                          {order.order_number}
                        </div>
                        <div className="font-bold text-lg text-charcoal-900 mb-1">
                          {order.service_name} - {order.package_name}
                        </div>
                        <div className="text-sm text-charcoal-600">
                          {new Date(order.created_at).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-500">
                            ₹{order.total_amount?.toLocaleString('en-IN')}
                          </div>
                          <Badge
                            variant={order.payment_status === 'paid' ? 'success' : 'warning'}
                            size="sm"
                          >
                            {order.payment_status}
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          View Invoice
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Section>
      </div>
    </ProtectedRoute>
  );
}

