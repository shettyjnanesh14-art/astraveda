# GitHub Setup Instructions for AstraVeda

## Your GitHub Details
- **Username:** shettyjnanesh14-art
- **Repository Name:** astraveda
- **Repository URL:** https://github.com/shettyjnanesh14-art/astraveda

---

## Quick Setup Commands

After creating the repository on GitHub, run these commands:

```bash
# Navigate to project directory
cd /Users/jnaneshshetty/Desktop/Astraveda

# Add GitHub remote
git remote add origin https://github.com/shettyjnanesh14-art/astraveda.git

# Verify remote was added correctly
git remote -v

# Push your code to GitHub
git push -u origin main
```

---

## If You Get Authentication Error

GitHub no longer accepts password authentication. You'll need to use a Personal Access Token (PAT):

### Create Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "AstraVeda Development"
4. Select scopes:
   - ✅ repo (all)
   - ✅ workflow
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

### Use Token for Authentication:

When prompted for password during `git push`, use the token instead of your GitHub password.

**Or set up credential helper:**
```bash
# Store credentials (Mac)
git config --global credential.helper osxkeychain

# Store credentials (Linux)
git config --global credential.helper store
```

---

## Alternative: SSH Setup (More Secure)

If you prefer SSH:

```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub:
# Go to: https://github.com/settings/keys
# Click "New SSH key"
# Paste the key

# Change remote to SSH
git remote set-url origin git@github.com:shettyjnanesh14-art/astraveda.git

# Push
git push -u origin main
```

---

## Verify Everything Worked

After pushing, visit:
https://github.com/shettyjnanesh14-art/astraveda

You should see all your files there!

---

## Future Git Commands

```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

---

## Common Issues & Solutions

**Issue: "fatal: remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/shettyjnanesh14-art/astraveda.git
```

**Issue: "Authentication failed"**
- Use Personal Access Token instead of password
- Or set up SSH keys (see above)

**Issue: "Updates were rejected"**
```bash
git pull origin main --rebase
git push
```

---

Good luck! 🚀

