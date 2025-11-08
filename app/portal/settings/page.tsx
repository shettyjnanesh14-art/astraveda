'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { User, Mail, Phone, Camera } from 'lucide-react';
import { getUserProfile, getAvatarUrl } from '@/lib/auth-helpers';
import toast from 'react-hot-toast';

export default function SettingsPage() {
  const { user, updateProfile } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    try {
      const profileData = await getUserProfile(user!.id);
      setProfile(profileData);
      setFullName(profileData.full_name || '');
      setPhone(profileData.phone || '');
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await updateProfile({
        full_name: fullName,
        phone: phone,
      });
      await loadProfile();
    } catch (error) {
      console.error('Update error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="pt-20">
        <Section background="gray">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-display font-bold text-charcoal-900 mb-8">
              Account Settings
            </h1>

            <div className="grid gap-6">
              {/* Profile Information */}
              <Card padding="lg">
                <h3 className="text-xl font-bold text-charcoal-900 mb-6">Profile Information</h3>

                <div className="flex items-center space-x-6 mb-8">
                  <div className="relative">
                    <img
                      src={getAvatarUrl(user)}
                      alt="Profile"
                      className="w-24 h-24 rounded-full"
                    />
                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-charcoal-900">
                      {profile?.full_name || 'User'}
                    </div>
                    <div className="text-charcoal-600">{user?.email}</div>
                    <div className="text-sm text-charcoal-500 mt-1">
                      Role: {profile?.role || 'client'}
                    </div>
                  </div>
                </div>

                <form onSubmit={handleUpdateProfile} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                        <input
                          type="email"
                          value={user?.email || ''}
                          className="w-full pl-10 pr-4 py-3 border border-charcoal-300 rounded-lg bg-charcoal-100 cursor-not-allowed"
                          disabled
                        />
                      </div>
                      <p className="text-xs text-charcoal-500 mt-1">
                        Email cannot be changed
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </div>
                </form>
              </Card>

              {/* Account Information */}
              <Card padding="lg">
                <h3 className="text-xl font-bold text-charcoal-900 mb-6">Account Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-charcoal-200">
                    <span className="text-charcoal-600">Account Type</span>
                    <span className="font-semibold text-charcoal-900 capitalize">
                      {profile?.role || 'Client'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-charcoal-200">
                    <span className="text-charcoal-600">Member Since</span>
                    <span className="font-semibold text-charcoal-900">
                      {profile?.created_at
                        ? new Date(profile.created_at).toLocaleDateString()
                        : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-charcoal-200">
                    <span className="text-charcoal-600">Last Login</span>
                    <span className="font-semibold text-charcoal-900">
                      {profile?.last_login
                        ? new Date(profile.last_login).toLocaleDateString()
                        : 'Now'}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Security */}
              <Card padding="lg">
                <h3 className="text-xl font-bold text-charcoal-900 mb-6">Security</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-charcoal-900">Password</div>
                      <div className="text-sm text-charcoal-600">Last changed 30 days ago</div>
                    </div>
                    <Button href="/auth/forgot-password" variant="outline" size="sm">
                      Change Password
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </ProtectedRoute>
  );
}

