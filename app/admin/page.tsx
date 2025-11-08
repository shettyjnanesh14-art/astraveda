'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { 
  Users, 
  FileText, 
  TrendingUp, 
  DollarSign,
  Mail,
  Phone,
  Calendar,
  Eye
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalQuotations: 0,
    totalLeads: 0,
    activeClients: 0,
    totalRevenue: 0,
  });
  const [recentQuotations, setRecentQuotations] = useState<any[]>([]);
  const [recentLeads, setRecentLeads] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      loadAdminData();
    }
  }, [user]);

  const loadAdminData = async () => {
    try {
      // Load quotations count
      const { count: quotationsCount } = await supabase
        .from('quotations')
        .select('*', { count: 'exact', head: true });

      // Load leads count
      const { count: leadsCount } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true });

      // Load active clients count
      const { count: clientsCount } = await supabase
        .from('clients')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');

      // Load recent quotations
      const { data: quotations } = await supabase
        .from('quotations')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      // Load recent leads
      const { data: leads } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

      setStats({
        totalQuotations: quotationsCount || 0,
        totalLeads: leadsCount || 0,
        activeClients: clientsCount || 0,
        totalRevenue: 0, // Calculate from clients table if needed
      });

      setRecentQuotations(quotations || []);
      setRecentLeads(leads || []);
    } catch (error) {
      console.error('Error loading admin data:', error);
    }
  };

  return (
    <ProtectedRoute requireRole="admin">
      <div className="pt-20">
        <Section background="gray">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-display font-bold text-charcoal-900 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-charcoal-600">Manage quotations, leads, and clients</p>
            </div>
            <Badge variant="warning" className="text-base px-4 py-2">
              Admin Access
            </Badge>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-3xl font-bold text-primary-500">{stats.totalQuotations}</div>
                  <div className="text-sm text-charcoal-600">Total Quotations</div>
                </div>
                <FileText className="w-10 h-10 text-primary-200" />
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-3xl font-bold text-blue-500">{stats.totalLeads}</div>
                  <div className="text-sm text-charcoal-600">Total Leads</div>
                </div>
                <Users className="w-10 h-10 text-blue-200" />
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-3xl font-bold text-green-500">{stats.activeClients}</div>
                  <div className="text-sm text-charcoal-600">Active Clients</div>
                </div>
                <TrendingUp className="w-10 h-10 text-green-200" />
              </div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-3xl font-bold text-primary-500">
                    ₹{(stats.totalRevenue / 100000).toFixed(1)}L
                  </div>
                  <div className="text-sm text-charcoal-600">Monthly Revenue</div>
                </div>
                <DollarSign className="w-10 h-10 text-primary-200" />
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Quotations */}
            <Card padding="lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-charcoal-900">Recent Quotations</h3>
                <Button href="/admin/quotations" variant="ghost" size="sm">
                  View All
                </Button>
              </div>

              {recentQuotations.length === 0 ? (
                <div className="text-center py-12 text-charcoal-500">
                  <FileText className="w-12 h-12 mx-auto mb-3 text-charcoal-300" />
                  <p>No quotations yet</p>
                  <p className="text-sm mt-2">Quotations will appear here when clients use the builder</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentQuotations.map((quote) => (
                    <div
                      key={quote.id}
                      className="p-4 border border-charcoal-200 rounded-lg hover:border-primary-500 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold text-charcoal-900">{quote.client_name}</div>
                          <div className="text-sm text-charcoal-600">{quote.client_email}</div>
                        </div>
                        <Badge variant={quote.status === 'draft' ? 'secondary' : 'primary'} size="sm">
                          {quote.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-charcoal-600">{quote.business_category}</span>
                        <span className="font-bold text-primary-500">
                          ₹{quote.total?.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Recent Leads */}
            <Card padding="lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-charcoal-900">Recent Leads</h3>
                <Button href="/admin/leads" variant="ghost" size="sm">
                  View All
                </Button>
              </div>

              {recentLeads.length === 0 ? (
                <div className="text-center py-12 text-charcoal-500">
                  <Users className="w-12 h-12 mx-auto mb-3 text-charcoal-300" />
                  <p>No leads yet</p>
                  <p className="text-sm mt-2">Leads will appear here when someone fills out the contact form</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-4 border border-charcoal-200 rounded-lg hover:border-primary-500 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="font-semibold text-charcoal-900">{lead.name}</div>
                          <div className="text-sm text-charcoal-600 flex items-center space-x-3">
                            <span className="flex items-center">
                              <Mail className="w-3 h-3 mr-1" />
                              {lead.email}
                            </span>
                            {lead.phone && (
                              <span className="flex items-center">
                                <Phone className="w-3 h-3 mr-1" />
                                {lead.phone}
                              </span>
                            )}
                          </div>
                        </div>
                        <Badge variant={lead.status === 'new' ? 'warning' : 'primary'} size="sm">
                          {lead.status}
                        </Badge>
                      </div>
                      {lead.industry && (
                        <div className="text-sm text-charcoal-600">{lead.industry}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-charcoal-900 mb-4">Quick Actions</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <Button href="/admin/quotations" variant="outline" fullWidth>
                <FileText className="w-4 h-4 mr-2" />
                Manage Quotes
              </Button>
              <Button href="/admin/leads" variant="outline" fullWidth>
                <Users className="w-4 h-4 mr-2" />
                Manage Leads
              </Button>
              <Button href="/admin/clients" variant="outline" fullWidth>
                <TrendingUp className="w-4 h-4 mr-2" />
                Manage Clients
              </Button>
              <Button href="/admin/content" variant="outline" fullWidth>
                <Eye className="w-4 h-4 mr-2" />
                Manage Content
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </ProtectedRoute>
  );
}

