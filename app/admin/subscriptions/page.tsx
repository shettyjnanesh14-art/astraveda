'use client';

import { useEffect, useState } from 'react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Calendar, Users, TrendingUp } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminSubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [stats, setStats] = useState({
    active: 0,
    paused: 0,
    mrr: 0,
    arr: 0,
  });

  useEffect(() => {
    loadSubscriptions();
  }, []);

  const loadSubscriptions = async () => {
    try {
      const { data } = await supabase
        .from('subscriptions')
        .select('*')
        .order('created_at', { ascending: false });

      setSubscriptions(data || []);

      // Calculate MRR/ARR
      const active = data?.filter((s: any) => s.status === 'active') || [];
      const mrr = active.reduce((sum: number, s: any) => {
        const monthlyAmount = s.billing_cycle === 'annual' 
          ? s.amount / 12 
          : s.billing_cycle === 'quarterly'
          ? s.amount / 3
          : s.amount;
        return sum + monthlyAmount;
      }, 0);

      setStats({
        active: active.length,
        paused: data?.filter((s: any) => s.status === 'paused').length || 0,
        mrr: Math.round(mrr),
        arr: Math.round(mrr * 12),
      });
    } catch (error) {
      console.error('Error loading subscriptions:', error);
    }
  };

  return (
    <ProtectedRoute requireRole="admin">
      <div className="pt-20">
        <Section background="gray">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-display font-bold text-charcoal-900 mb-2">
                Subscription Management
              </h1>
              <p className="text-charcoal-600">Track recurring revenue and subscriptions</p>
            </div>
            <Button href="/admin" variant="outline">
              Back to Dashboard
            </Button>
          </div>

          {/* Revenue Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="text-3xl font-bold text-green-500 mb-1">{stats.active}</div>
              <div className="text-sm text-charcoal-600">Active Subscriptions</div>
            </Card>
            <Card>
              <div className="text-3xl font-bold text-yellow-500 mb-1">{stats.paused}</div>
              <div className="text-sm text-charcoal-600">Paused</div>
            </Card>
            <Card>
              <div className="text-3xl font-bold text-primary-500 mb-1">
                ₹{(stats.mrr / 1000).toFixed(0)}K
              </div>
              <div className="text-sm text-charcoal-600">Monthly Recurring Revenue</div>
            </Card>
            <Card>
              <div className="text-3xl font-bold text-primary-500 mb-1">
                ₹{(stats.arr / 100000).toFixed(1)}L
              </div>
              <div className="text-sm text-charcoal-600">Annual Recurring Revenue</div>
            </Card>
          </div>

          {/* Subscriptions List */}
          <Card padding="lg">
            <h3 className="text-xl font-bold text-charcoal-900 mb-6">All Subscriptions</h3>
            
            {subscriptions.length === 0 ? (
              <div className="text-center py-12 text-charcoal-500">
                <Users className="w-12 h-12 mx-auto mb-3 text-charcoal-300" />
                <p>No subscriptions yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {subscriptions.map((sub) => (
                  <div
                    key={sub.id}
                    className="p-4 border border-charcoal-200 rounded-lg hover:border-primary-500 transition-colors"
                  >
                    <div className="grid md:grid-cols-[2fr,1fr,1fr,auto] gap-4 items-center">
                      <div>
                        <div className="font-bold text-charcoal-900">{sub.service_id}</div>
                        <div className="text-sm text-charcoal-600">{sub.package_name}</div>
                      </div>
                      <div className="text-sm">
                        <div className="flex items-center text-charcoal-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          Next: {new Date(sub.next_billing_date).toLocaleDateString()}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-primary-500">
                          ₹{sub.amount?.toLocaleString('en-IN')}
                        </div>
                        <div className="text-xs text-charcoal-600">{sub.billing_cycle}</div>
                      </div>
                      <Badge variant={sub.status === 'active' ? 'success' : 'secondary'}>
                        {sub.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </Section>
      </div>
    </ProtectedRoute>
  );
}

