#!/bin/bash

# AstraVeda - Environment Setup Script
echo "🔧 Setting up environment variables..."

# Create .env.local file
cat > .env.local << 'EOF'
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://nzthzhclsuswivbxmvetr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dGhoemNsdXN3aXZieG12ZXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0OTU3NjIsImV4cCI6MjA3ODA3MTc2Mn0.7cfYa9FJ4R03IWFSXdFzPixCQ6uFe_gZvjz9vP-ad9g
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dGhoemNsdXN3aXZieG12ZXRyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjQ5NTc2MiwiZXhwIjoyMDc4MDcxNzYyfQ.myxYGFS_M8Ix65So0B3XPMMBvJ0t0g8TYetRLt2OvEY

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email Service (Optional)
# EMAIL_SERVICE_API_KEY=your_email_api_key
# ADMIN_EMAIL=admin@astraveda.com
EOF

echo "✅ Environment file created: .env.local"
echo ""
echo "🔐 Your Supabase credentials have been configured:"
echo "   URL: https://nzthzhclsuswivbxmvetr.supabase.co"
echo "   Keys: Configured and ready!"
echo ""
echo "⚠️  IMPORTANT: Never commit .env.local to Git!"
echo "   (It's already in .gitignore for safety)"
echo ""
echo "🚀 Next steps:"
echo "   1. Restart your dev server: npm run dev"
echo "   2. Set up database schema in Supabase"
echo ""

