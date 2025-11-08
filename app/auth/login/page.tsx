'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signIn(email, password);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen flex items-center">
      <Section>
        <div className="max-w-md mx-auto">
          <Card padding="lg">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🔐</div>
              <h1 className="text-3xl font-display font-bold text-charcoal-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-charcoal-600">
                Sign in to access your client portal
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-500 border-charcoal-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-charcoal-600">Remember me</span>
                </label>
                <Link href="/auth/forgot-password" className="text-primary-500 hover:text-primary-600">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={isLoading}
                icon={<ArrowRight className="w-5 h-5" />}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-charcoal-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-charcoal-500">Or</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-charcoal-600">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-primary-500 hover:text-primary-600 font-semibold">
                Create Account
              </Link>
            </div>

            {/* Not a Client */}
            <div className="mt-6 pt-6 border-t border-charcoal-200 text-center text-sm text-charcoal-600">
              Not a client yet?{' '}
              <Link href="/pricing" className="text-primary-500 hover:text-primary-600 font-semibold">
                Get Started
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}

