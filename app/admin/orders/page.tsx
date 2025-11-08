'use client';

import { useEffect, useState } from 'react';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { FileText, Download, Eye, Filter } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    paid: 0,
    revenue: 0,
  });

  useEffect(() => {
    loadOrders();
  }, [filter]);

  const loadOrders = async () => {
    try {
      let query = supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('payment_status', filter);
      }

      const { data, count } = await query;
      
      setOrders(data || []);

      // Calculate stats
      const { count: total } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true });

      const { count: pending } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })
        .eq('payment_status', 'pending');

      const { count: paid } = await supabase
        .from('orders')
        .select('*', { count: 'exact', head: true })
        .eq('payment_status', 'paid');

      setStats({
        total: total || 0,
        pending: pending || 0,
        paid: paid || 0,
        revenue: 0, // Calculate from paid orders
      });
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute requireRole="admin">
      <div className="pt-20">
        <Section background="gray">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-display font-bold text-charcoal-900 mb-2">
                Order Management
              </h1>
              <p className="text-charcoal-600">View and manage all customer orders</p>
            </div>
            <Button href="/admin" variant="outline">
              Back to Dashboard
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="text-3xl font-bold text-primary-500 mb-1">{stats.total}</div>
              <div className="text-sm text-charcoal-600">Total Orders</div>
            </Card>
            <Card>
              <div className="text-3xl font-bold text-yellow-500 mb-1">{stats.pending}</div>
              <div className="text-sm text-charcoal-600">Pending Payment</div>
            </Card>
            <Card>
              <div className="text-3xl font-bold text-green-500 mb-1">{stats.paid}</div>
              <div className="text-sm text-charcoal-600">Paid Orders</div>
            </Card>
            <Card>
              <div className="text-3xl font-bold text-primary-500 mb-1">
                ₹{(stats.revenue / 100000).toFixed(1)}L
              </div>
              <div className="text-sm text-charcoal-600">Total Revenue</div>
            </Card>
          </div>

          {/* Filters */}
          <Card padding="lg" className="mb-6">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-charcoal-600" />
              <div className="flex gap-2">
                {['all', 'pending', 'paid', 'failed'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                      filter === status
                        ? 'bg-primary-500 text-white'
                        : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Orders List */}
          {loading ? (
            <Card padding="lg" className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
              <p className="text-charcoal-600">Loading orders...</p>
            </Card>
          ) : orders.length === 0 ? (
            <Card padding="lg" className="text-center">
              <FileText className="w-12 h-12 text-charcoal-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">No Orders Yet</h3>
              <p className="text-charcoal-600">
                Orders will appear here when customers make purchases
              </p>
            </Card>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} padding="lg">
                  <div className="grid md:grid-cols-[2fr,1fr,1fr,auto] gap-6 items-center">
                    {/* Order Details */}
                    <div>
                      <div className="font-mono text-xs text-charcoal-500 mb-1">
                        {order.order_number}
                      </div>
                      <div className="font-bold text-lg text-charcoal-900 mb-1">
                        {order.service_name}
                      </div>
                      <div className="text-sm text-charcoal-600">
                        {order.package_name} Package • {order.billing_cycle}
                      </div>
                      <div className="text-sm text-charcoal-600 mt-2">
                        {order.client_name} ({order.client_email})
                      </div>
                    </div>

                    {/* Date */}
                    <div className="text-sm">
                      <div className="text-charcoal-600 mb-1">Order Date</div>
                      <div className="font-semibold text-charcoal-900">
                        {new Date(order.created_at).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Amount & Status */}
                    <div>
                      <div className="text-2xl font-bold text-primary-500 mb-2">
                        ₹{order.total_amount?.toLocaleString('en-IN')}
                      </div>
                      <Badge
                        variant={
                          order.payment_status === 'paid'
                            ? 'success'
                            : order.payment_status === 'pending'
                            ? 'warning'
                            : 'secondary'
                        }
                      >
                        {order.payment_status}
                      </Badge>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Invoice
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Section>
      </div>
    </ProtectedRoute>
  );
}

