import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FileText, BarChart3, Calendar, MessageSquare, User } from 'lucide-react';

export const metadata = {
  title: 'Client Portal - AstraVeda',
  description: 'Access your projects, reports, and invoices.',
};

// This is a placeholder. In production, you'd integrate Supabase Auth
export default function ClientPortalPage() {
  // Mock user data - replace with actual auth
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen flex items-center">
        <Section>
          <div className="max-w-md mx-auto">
            <Card padding="lg">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🔐</div>
                <h1 className="text-3xl font-display font-bold text-charcoal-900 mb-2">
                  Client Portal
                </h1>
                <p className="text-charcoal-600">
                  Sign in to access your projects, reports, and more.
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="••••••••"
                  />
                </div>

                <Button variant="primary" fullWidth>
                  Sign In
                </Button>

                <div className="text-center text-sm text-charcoal-600">
                  <a href="#" className="text-primary-500 hover:text-primary-600">
                    Forgot password?
                  </a>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-charcoal-200 text-center text-sm text-charcoal-600">
                Not a client yet?{' '}
                <a href="/pricing" className="text-primary-500 hover:text-primary-600 font-semibold">
                  Get Started
                </a>
              </div>
            </Card>
          </div>
        </Section>
      </div>
    );
  }

  // Authenticated view - Dashboard
  return (
    <div className="pt-20">
      <Section background="gray">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-charcoal-900 mb-2">
            Welcome back, Client Name
          </h1>
          <p className="text-charcoal-600">Here's what's happening with your projects.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="text-3xl font-bold text-primary-500 mb-1">5</div>
            <div className="text-sm text-charcoal-600">Active Services</div>
          </Card>
          <Card>
            <div className="text-3xl font-bold text-primary-500 mb-1">₹1.2L</div>
            <div className="text-sm text-charcoal-600">Monthly Retainer</div>
          </Card>
          <Card>
            <div className="text-3xl font-bold text-green-500 mb-1">+180%</div>
            <div className="text-sm text-charcoal-600">Growth This Quarter</div>
          </Card>
          <Card>
            <div className="text-3xl font-bold text-primary-500 mb-1">12</div>
            <div className="text-sm text-charcoal-600">Pending Approvals</div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card variant="hover" className="text-center cursor-pointer">
            <FileText className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="font-semibold text-charcoal-900">View Reports</div>
          </Card>
          <Card variant="hover" className="text-center cursor-pointer">
            <BarChart3 className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="font-semibold text-charcoal-900">Analytics</div>
          </Card>
          <Card variant="hover" className="text-center cursor-pointer">
            <Calendar className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="font-semibold text-charcoal-900">Content Calendar</div>
          </Card>
          <Card variant="hover" className="text-center cursor-pointer">
            <MessageSquare className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="font-semibold text-charcoal-900">Support</div>
          </Card>
          <Card variant="hover" className="text-center cursor-pointer">
            <User className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="font-semibold text-charcoal-900">My Account</div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card padding="lg">
          <h3 className="text-xl font-bold text-charcoal-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-charcoal-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600">✓</span>
              </div>
              <div>
                <div className="font-semibold text-charcoal-900">Monthly Report Available</div>
                <div className="text-sm text-charcoal-600">Your December performance report is ready to view</div>
                <div className="text-xs text-charcoal-500 mt-1">2 hours ago</div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-charcoal-50 rounded-lg">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600">📱</span>
              </div>
              <div>
                <div className="font-semibold text-charcoal-900">Content Requires Approval</div>
                <div className="text-sm text-charcoal-600">12 new posts are ready for your review</div>
                <div className="text-xs text-charcoal-500 mt-1">Yesterday</div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-charcoal-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600">💰</span>
              </div>
              <div>
                <div className="font-semibold text-charcoal-900">Invoice Generated</div>
                <div className="text-sm text-charcoal-600">Invoice #1234 for ₹1,20,000 is ready</div>
                <div className="text-xs text-charcoal-500 mt-1">3 days ago</div>
              </div>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}

