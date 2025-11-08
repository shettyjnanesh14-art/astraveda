-- Create Admin User for AstraVeda
-- Email: jnaneshshetty08@gmail.com
-- This SQL will create the user and set admin role

-- Step 1: First create the user via Supabase Auth UI
-- Go to: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/users
-- Click "Invite User" or "Add User"
-- Email: jnaneshshetty08@gmail.com
-- Password: PocoX2@512200
-- Confirm Password: false (so you can login immediately)

-- Step 2: Then run this SQL to make the user admin
-- Replace 'USER_ID_HERE' with the actual user ID from auth.users table

-- First, check if user exists
SELECT id, email FROM auth.users WHERE email = 'jnaneshshetty08@gmail.com';

-- Make user admin (run after user is created)
INSERT INTO user_profiles (id, full_name, role)
SELECT 
  id,
  'Admin User' as full_name,
  'admin' as role
FROM auth.users 
WHERE email = 'jnaneshshetty08@gmail.com'
ON CONFLICT (id) DO UPDATE 
SET role = 'admin', full_name = 'Admin User';

-- Verify admin role
SELECT 
  u.email, 
  p.role, 
  p.full_name 
FROM auth.users u
LEFT JOIN user_profiles p ON u.id = p.id
WHERE u.email = 'jnaneshshetty08@gmail.com';

