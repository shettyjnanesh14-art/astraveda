'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await resetPassword(email);
      setEmailSent(true);
    } catch (error) {
      console.error('Reset error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-charcoal-50 to-primary-50">
      <div className="w-full max-w-md px-4">
          <Card padding="lg">
            {!emailSent ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">🔑</div>
                  <h1 className="text-3xl font-display font-bold text-charcoal-900 mb-2">
                    Reset Password
                  </h1>
                  <p className="text-charcoal-600">
                    Enter your email and we'll send you a reset link
                  </p>
                </div>

                {/* Form */}
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

                  <Button type="submit" variant="primary" fullWidth disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    href="/auth/login"
                    className="inline-flex items-center text-sm text-charcoal-600 hover:text-primary-500"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Sign In
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Success Message */}
                <div className="text-center">
                  <div className="text-6xl mb-4">📧</div>
                  <h2 className="text-2xl font-bold text-charcoal-900 mb-3">
                    Check Your Email
                  </h2>
                  <p className="text-charcoal-600 mb-6">
                    We've sent a password reset link to{' '}
                    <strong>{email}</strong>
                  </p>
                  <p className="text-sm text-charcoal-500 mb-8">
                    Didn't receive it? Check your spam folder or try again.
                  </p>

                  <div className="space-y-3">
                    <Button
                      variant="primary"
                      fullWidth
                      onClick={() => setEmailSent(false)}
                    >
                      Try Different Email
                    </Button>
                    <Link href="/auth/login">
                      <button className="w-full py-3 text-charcoal-600 hover:text-primary-500 transition-colors">
                        Back to Sign In
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
    </div>
  );
}

