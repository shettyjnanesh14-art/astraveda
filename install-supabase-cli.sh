#!/bin/bash

# AstraVeda - Supabase CLI Installation Script
# This script will install Homebrew and Supabase CLI

echo "🚀 AstraVeda - Supabase CLI Installer"
echo "======================================"
echo ""

# Check if Homebrew is installed
if command -v brew &> /dev/null; then
    echo "✅ Homebrew is already installed"
    brew --version
else
    echo "📦 Installing Homebrew..."
    echo ""
    echo "⚠️  You will be asked for your Mac password (sudo access)"
    echo "Press Enter to continue..."
    read
    
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # Add Homebrew to PATH
    echo ""
    echo "🔧 Adding Homebrew to PATH..."
    
    if [[ $(uname -m) == 'arm64' ]]; then
        # Apple Silicon
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    else
        # Intel
        echo 'eval "$(/usr/local/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/usr/local/bin/brew shellenv)"
    fi
    
    echo "✅ Homebrew installed successfully!"
fi

echo ""
echo "📦 Installing Supabase CLI..."
brew tap supabase/tap
brew install supabase

echo ""
echo "✅ Checking installation..."
supabase --version

echo ""
echo "🎉 Supabase CLI installed successfully!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Login to Supabase:"
echo "   supabase login"
echo ""
echo "2. Link to your project:"
echo "   cd /Users/jnaneshshetty/Desktop/Astraveda"
echo "   supabase link --project-ref nzthhzcluswivbxmvetr"
echo ""
echo "3. Test it:"
echo "   supabase status"
echo ""
echo "💡 Full documentation in CLI_TOOLS.md"

