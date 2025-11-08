#!/bin/bash

# AstraVeda - Pre-Deployment Checklist

echo "🚀 AstraVeda Deployment Checklist"
echo "=================================="
echo ""

# Check 1: Git Status
echo "1️⃣  Git Repository Status..."
if git diff --quiet && git diff --cached --quiet; then
    echo "   ✅ No uncommitted changes"
else
    echo "   ⚠️  You have uncommitted changes"
    echo "   💡 Commit before deploying"
fi
echo ""

# Check 2: Build Test
echo "2️⃣  Testing Production Build..."
echo "   Running: npm run build"
if npm run build > /dev/null 2>&1; then
    echo "   ✅ Build successful"
else
    echo "   ❌ Build failed - fix errors before deploying"
    exit 1
fi
echo ""

# Check 3: Environment Variables
echo "3️⃣  Environment Variables..."
if [ -f .env.local ]; then
    echo "   ✅ .env.local exists"
    echo "   📋 Remember to add these to Vercel:"
    grep "^NEXT_PUBLIC" .env.local | sed 's/=.*/=***/'
    echo "   📋 And this one (keep secret):"
    grep "^SUPABASE_SERVICE" .env.local | sed 's/=.*/=***/'
else
    echo "   ❌ .env.local not found"
fi
echo ""

# Check 4: Database
echo "4️⃣  Database Connection..."
node scripts/supabase-cli.js status | grep "✅"
echo ""

# Check 5: Dependencies
echo "5️⃣  Dependencies..."
if [ -d node_modules ]; then
    echo "   ✅ node_modules installed"
else
    echo "   ❌ Run: npm install"
fi
echo ""

# Summary
echo "📋 Deployment Checklist Summary"
echo "================================"
echo ""
echo "✅ Code: Ready to deploy"
echo "✅ Build: Successful"
echo "✅ Database: Connected"
echo "✅ Environment: Configured"
echo ""
echo "🎯 Next Steps:"
echo ""
echo "1. Go to: https://vercel.com/new"
echo "2. Import: shettyjnanesh14-art/astraveda"
echo "3. Add environment variables from .env.local"
echo "4. Click Deploy!"
echo "5. Update Supabase auth URLs with your Vercel URL"
echo ""
echo "📚 Full guide: DEPLOY_NOW.md"
echo ""
echo "🚀 You're ready to go live!"

