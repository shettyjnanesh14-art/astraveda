'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { 
  FileText, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  User, 
  Download,
  CheckCircle,
  Clock,
  TrendingUp
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { getUserProfile, getAvatarUrl } from '@/lib/auth-helpers';

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [stats, setStats] = useState({
    activeServices: 0,
    monthlyRetainer: 0,
    growth: 0,
    pendingApprovals: 0,
  });
  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      loadUserData();
    }
  }, [user]);

  const loadUserData = async () => {
    try {
      // Load user profile
      const profileData = await getUserProfile(user!.id);
      setProfile(profileData);

      // Mock stats - In production, fetch from database
      setStats({
        activeServices: 5,
        monthlyRetainer: 120000,
        growth: 180,
        pendingApprovals: 12,
      });

      // Mock activity - In production, fetch from database
      setRecentActivity([
        {
          id: 1,
          type: 'report',
          title: 'Monthly Report Available',
          description: 'Your December performance report is ready to view',
          time: '2 hours ago',
          icon: '📊',
          color: 'green',
        },
        {
          id: 2,
          type: 'approval',
          title: 'Content Requires Approval',
          description: '12 new posts are ready for your review',
          time: 'Yesterday',
          icon: '📱',
          color: 'orange',
        },
        {
          id: 3,
          type: 'invoice',
          title: 'Invoice Generated',
          description: 'Invoice #1234 for ₹1,20,000 is ready',
          time: '3 days ago',
          icon: '💰',
          color: 'blue',
        },
      ]);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="pt-20">
        <Section background="gray">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-4xl font-display font-bold text-charcoal-900 mb-2">
                Welcome back, {profile?.full_name || user?.email?.split('@')[0] || 'Client'}!
              </h1>
              <p className="text-charcoal-600">Here's what's happening with your projects.</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img
                  src={getAvatarUrl(user)}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-charcoal-900">
                    {profile?.full_name || 'Client'}
                  </div>
                  <Badge variant="primary" size="sm">
                    {profile?.role || 'Client'}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-primary-500">{stats.activeServices}</div>
                <FileText className="w-8 h-8 text-primary-200" />
              </div>
              <div className="text-sm text-charcoal-600">Active Services</div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-primary-500">
                  ₹{(stats.monthlyRetainer / 1000).toFixed(0)}K
                </div>
                <BarChart3 className="w-8 h-8 text-primary-200" />
              </div>
              <div className="text-sm text-charcoal-600">Monthly Retainer</div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-green-500">+{stats.growth}%</div>
                <TrendingUp className="w-8 h-8 text-green-200" />
              </div>
              <div className="text-sm text-charcoal-600">Growth This Quarter</div>
            </Card>

            <Card>
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-primary-500">{stats.pendingApprovals}</div>
                <Clock className="w-8 h-8 text-primary-200" />
              </div>
              <div className="text-sm text-charcoal-600">Pending Approvals</div>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-charcoal-900 mb-4">Quick Actions</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <Card variant="hover" className="text-center cursor-pointer">
                <FileText className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="font-semibold text-charcoal-900 text-sm">View Reports</div>
              </Card>
              <Card variant="hover" className="text-center cursor-pointer">
                <BarChart3 className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="font-semibold text-charcoal-900 text-sm">Analytics</div>
              </Card>
              <Card variant="hover" className="text-center cursor-pointer">
                <Calendar className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="font-semibold text-charcoal-900 text-sm">Calendar</div>
              </Card>
              <Card variant="hover" className="text-center cursor-pointer">
                <MessageSquare className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="font-semibold text-charcoal-900 text-sm">Support</div>
              </Card>
              <Card variant="hover" className="text-center cursor-pointer">
                <User className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <div className="font-semibold text-charcoal-900 text-sm">My Account</div>
              </Card>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <Card padding="lg">
                <h3 className="text-xl font-bold text-charcoal-900 mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-4 p-4 bg-charcoal-50 rounded-lg hover:bg-charcoal-100 transition-colors cursor-pointer"
                    >
                      <div className={`w-10 h-10 bg-${activity.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-xl">{activity.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-charcoal-900">{activity.title}</div>
                        <div className="text-sm text-charcoal-600">{activity.description}</div>
                        <div className="text-xs text-charcoal-500 mt-1">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Active Services */}
              <Card padding="lg">
                <h3 className="text-lg font-bold text-charcoal-900 mb-4">Active Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-charcoal-700">Social Media</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-charcoal-700">Performance Ads</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-charcoal-700">SEO & Content</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-charcoal-700">Video Production</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-charcoal-700">Branding</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </Card>

              {/* Quick Links */}
              <Card padding="lg" className="bg-primary-50 border-primary-200">
                <h3 className="text-lg font-bold text-charcoal-900 mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <Button variant="outline" fullWidth size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                  <Button variant="outline" fullWidth size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </Card>

              {/* Account Actions */}
              <Card padding="lg">
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={signOut}
                  className="text-red-600 hover:bg-red-50"
                >
                  Sign Out
                </Button>
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </ProtectedRoute>
  );
}

