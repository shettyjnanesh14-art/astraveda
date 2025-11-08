#!/bin/bash

# Update Razorpay Live Keys

echo "💳 Updating Razorpay Live Keys"
echo "==============================="
echo ""

# Add Razorpay keys to .env.local
if [ -f .env.local ]; then
    # Check if Razorpay keys already exist
    if grep -q "RAZORPAY" .env.local; then
        # Update existing keys
        sed -i.bak '/RAZORPAY/d' .env.local
    fi
    
    # Add new keys
    echo "" >> .env.local
    echo "# Razorpay Payment Gateway (LIVE KEYS)" >> .env.local
    echo "NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RdHsZLsbWX3ub0" >> .env.local
    echo "RAZORPAY_KEY_SECRET=Ytd3NW1m2gOZXBDJXDlGophZ" >> .env.local
    
    echo "✅ Razorpay keys added to .env.local"
else
    echo "❌ .env.local not found"
    exit 1
fi

echo ""
echo "🔑 Keys configured:"
echo "   Key ID: rzp_live_RdHsZLsbWX3ub0"
echo "   Secret: Ytd3NW1m2gOZXBDJXDlGophZ"
echo ""
echo "⚠️  IMPORTANT: These are LIVE keys!"
echo "   • Real payments will be processed"
echo "   • Real money will be charged"
echo "   • Use test mode for testing first"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Test locally with live keys"
echo "2. When deploying to Vercel, add these as environment variables:"
echo ""
echo "   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RdHsZLsbWX3ub0"
echo "   RAZORPAY_KEY_SECRET=Ytd3NW1m2gOZXBDJXDlGophZ"
echo ""
echo "3. Restart dev server:"
echo "   npm run dev"
echo ""
echo "✅ Razorpay live mode configured!"

