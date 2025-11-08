#!/bin/bash

# AstraVeda - Push to GitHub Script
# GitHub Username: shettyjnanesh14-art
# Repository: astraveda

echo "🚀 Connecting to GitHub..."
echo ""

# Add remote
git remote add origin https://github.com/shettyjnanesh14-art/astraveda.git

# Verify
echo "✅ Remote added. Verifying..."
git remote -v
echo ""

# Push to GitHub
echo "📤 Pushing code to GitHub..."
git push -u origin main

echo ""
echo "✨ Done! Visit your repository at:"
echo "👉 https://github.com/shettyjnanesh14-art/astraveda"

