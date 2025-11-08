#!/bin/bash

# AstraVeda - Create Admin User
# Email: jnaneshshetty08@gmail.com

echo "🔐 Creating Admin User for AstraVeda"
echo "====================================="
echo ""

echo "📋 Admin Details:"
echo "   Email: jnaneshshetty08@gmail.com"
echo "   Password: PocoX2@512200"
echo "   Role: admin"
echo ""

echo "📝 Steps to create admin user:"
echo ""
echo "1. Go to Supabase Auth Dashboard:"
echo "   👉 https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/users"
echo ""
echo "2. Click 'Add User' button"
echo ""
echo "3. Fill in:"
echo "   Email: jnaneshshetty08@gmail.com"
echo "   Password: PocoX2@512200"
echo "   ☑️  Auto Confirm User (check this!)"
echo ""
echo "4. Click 'Create User'"
echo ""
echo "5. Then go to SQL Editor:"
echo "   👉 https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/sql/new"
echo ""
echo "6. Run this SQL to make user admin:"
echo ""
echo "────────────────────────────────────────────────────────────"
cat << 'EOF'

INSERT INTO user_profiles (id, full_name, role)
SELECT 
  id,
  'Admin User' as full_name,
  'admin' as role
FROM auth.users 
WHERE email = 'jnaneshshetty08@gmail.com'
ON CONFLICT (id) DO UPDATE 
SET role = 'admin', full_name = 'Admin User';

EOF
echo "────────────────────────────────────────────────────────────"
echo ""
echo "7. Verify it worked:"
cat << 'EOF'

SELECT u.email, p.role, p.full_name 
FROM auth.users u
LEFT JOIN user_profiles p ON u.id = p.id
WHERE u.email = 'jnaneshshetty08@gmail.com';

EOF
echo ""
echo "✅ You should see role = 'admin'"
echo ""
echo "8. Test login:"
echo "   👉 http://localhost:3000/auth/login"
echo "   Email: jnaneshshetty08@gmail.com"
echo "   Password: PocoX2@512200"
echo ""
echo "9. After login, visit:"
echo "   👉 http://localhost:3000/admin"
echo "   You should have full admin access!"
echo ""
echo "🎉 Admin user will be ready!"

