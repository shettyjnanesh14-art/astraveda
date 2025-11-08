'use client';

import { useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { getUserRole } from '@/lib/auth-helpers';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRole?: 'admin' | 'team' | 'client';
}

export default function ProtectedRoute({ children, requireRole }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const checkAccess = async () => {
      if (!loading) {
        if (!user) {
          router.push('/auth/login');
          return;
        }

        if (requireRole) {
          try {
            const userRole = await getUserRole(user.id);
            
            // Check role hierarchy
            const roleHierarchy = { admin: 3, team: 2, client: 1 };
            const requiredLevel = roleHierarchy[requireRole];
            const userLevel = roleHierarchy[userRole];

            if (userLevel < requiredLevel) {
              router.push('/portal'); // Redirect to appropriate page
            }
          } catch (error) {
            console.error('Error checking role:', error);
            router.push('/auth/login');
          }
        }
      }
    };

    checkAccess();
  }, [user, loading, requireRole, router]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-charcoal-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show nothing while redirecting
  if (!user) {
    return null;
  }

  return <>{children}</>;
}

