import { supabase } from './supabase';

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}

export async function getUserRole(userId: string): Promise<'admin' | 'team' | 'client'> {
  try {
    const profile = await getUserProfile(userId);
    return profile.role || 'client';
  } catch {
    return 'client';
  }
}

export async function isAdmin(userId: string): Promise<boolean> {
  const role = await getUserRole(userId);
  return role === 'admin';
}

export async function isTeamMember(userId: string): Promise<boolean> {
  const role = await getUserRole(userId);
  return role === 'admin' || role === 'team';
}

export function getAvatarUrl(user: any): string {
  if (user?.user_metadata?.avatar_url) {
    return user.user_metadata.avatar_url;
  }
  
  // Generate initials avatar
  const name = user?.user_metadata?.full_name || user?.email || 'User';
  const initials = name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  
  return `https://ui-avatars.com/api/?name=${initials}&background=f97316&color=fff&bold=true`;
}

