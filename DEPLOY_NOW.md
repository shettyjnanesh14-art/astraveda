# 🚀 Deploy AstraVeda to Production

## Quick Deploy Guide - Go Live in 10 Minutes!

---

## ✅ Pre-Deployment Checklist

- [x] ✅ Website built and tested locally
- [x] ✅ Code on GitHub
- [x] ✅ Database schema created in Supabase
- [x] ✅ Environment variables configured locally
- [x] ✅ All features tested

**You're ready to deploy!** 🎉

---

## 🚀 Deploy to Vercel (Recommended - Easiest)

### **Step 1: Create Vercel Account**

1. Go to: **https://vercel.com/signup**
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub

### **Step 2: Import Your Project**

1. After signing in, click **"Add New..."** → **"Project"**
2. Find your repository: **astraveda**
3. Click **"Import"**

### **Step 3: Configure Project**

Vercel will auto-detect Next.js. Verify:

**Framework Preset:** Next.js ✅ (auto-detected)
**Root Directory:** ./ ✅
**Build Command:** `npm run build` ✅
**Output Directory:** `.next` ✅

**Click "Deploy"** but WAIT - we need to add environment variables first!

### **Step 4: Add Environment Variables** ⚠️ IMPORTANT

Before deploying, click **"Environment Variables"** and add:

```env
NEXT_PUBLIC_SUPABASE_URL=https://nzthzhclsuswivbxmvetr.supabase.co
```

```env
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dGhoemNsdXN3aXZieG12ZXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0OTU3NjIsImV4cCI6MjA3ODA3MTc2Mn0.7cfYa9FJ4R03IWFSXdFzPixCQ6uFe_gZvjz9vP-ad9g
```

```env
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dGhoemNsdXN3aXZieG12ZXRyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjQ5NTc2MiwiZXhwIjoyMDc4MDcxNzYyfQ.myxYGFS_M8Ix65So0B3XPMMBvJ0t0g8TYetRLt2OvEY
```

**Important:** Set these for **Production**, **Preview**, AND **Development**!

### **Step 5: Deploy!**

Click **"Deploy"** and wait 2-3 minutes.

Vercel will:
- Clone your repo
- Install dependencies
- Build your site
- Deploy to global CDN

---

## 🌐 Your Site Will Be Live!

After deployment, you'll get a URL like:
```
https://astraveda-xxxxx.vercel.app
```

**Test it immediately:**
- Visit the URL
- Check all pages load
- Test navigation
- Try quotation builder

---

## 🔧 Post-Deployment Configuration

### **Update Supabase Auth URLs (CRITICAL!)**

1. Go to: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/url-configuration

2. **Update Site URL:**
   ```
   https://your-vercel-url.vercel.app
   ```

3. **Add Redirect URLs:**
   ```
   https://your-vercel-url.vercel.app/auth/callback
   https://your-vercel-url.vercel.app/portal
   https://your-vercel-url.vercel.app/admin
   ```

4. Keep localhost URLs for local development

**Without this, authentication will not work on production!**

---

## 🎯 Add Custom Domain (Optional)

### **Step 1: Add Domain in Vercel**

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your domain (e.g., `astraveda.com`)
3. Vercel will provide DNS records

### **Step 2: Configure DNS**

In your domain registrar (GoDaddy, Namecheap, etc.):

**For Root Domain:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### **Step 3: Update URLs**

After domain is active:

1. **Update in Vercel:**
   - Go to Settings → Environment Variables
   - Update `NEXT_PUBLIC_SITE_URL` to `https://astraveda.com`
   - Redeploy

2. **Update in Supabase:**
   - Update Site URL to `https://astraveda.com`
   - Update redirect URLs with new domain

---

## 🔐 SSL Certificate

Vercel automatically provides SSL certificates (HTTPS).
- No configuration needed
- Auto-renews
- Your site will be secure by default

---

## 📊 Verify Deployment

### **Check these URLs work:**

```
https://your-site.vercel.app/
https://your-site.vercel.app/pricing
https://your-site.vercel.app/auth/login
https://your-site.vercel.app/services
https://your-site.vercel.app/case-studies
```

### **Test Authentication:**

1. Create account on production
2. Verify email (if enabled)
3. Login works
4. Portal accessible
5. Sign out works

### **Test Quotation Builder:**

1. Go to `/pricing`
2. Fill out form
3. Generate proposal
4. Download PDF
5. Check Supabase for saved quote

---

## 🐛 Common Issues

### **Build Fails on Vercel**

**Error: Missing environment variables**
- Add all vars in Vercel settings
- Ensure correct spelling
- Set for all environments

**Error: Build timeout**
- Increase timeout in Vercel settings
- Or optimize build

### **Authentication Not Working**

**Error: Redirect URI mismatch**
- Update Supabase auth URLs with Vercel URL
- Include /auth/callback path
- Wait 1-2 minutes for DNS propagation

### **Database Connection Issues**

**Error: Cannot connect to Supabase**
- Check environment variables in Vercel
- Verify Supabase project is active
- Check RLS policies

---

## 📈 Performance Optimization

### **Vercel Automatically:**
- ✅ Optimizes images
- ✅ Minifies JavaScript/CSS
- ✅ Enables HTTP/2
- ✅ Global CDN
- ✅ Edge caching
- ✅ Automatic HTTPS

### **Your Site Will Be:**
- ⚡ Lightning fast
- 🌍 Globally distributed
- 🔒 Secure (HTTPS)
- 📱 Mobile optimized
- 🎯 SEO friendly

---

## 📊 Monitor Your Site

### **Vercel Analytics:**
1. Go to project dashboard
2. Click **Analytics** tab
3. View:
   - Page views
   - Performance metrics
   - User locations
   - Device breakdown

### **Supabase Logs:**
1. Go to: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/logs
2. Monitor:
   - Database queries
   - Authentication events
   - API calls
   - Errors

---

## 🔄 Future Updates

### **Deploy Updates:**

```bash
# 1. Make changes locally
# 2. Test locally
npm run dev

# 3. Commit and push
git add .
git commit -m "Your update message"
git push

# 4. Vercel auto-deploys from GitHub!
# (Usually takes 2-3 minutes)
```

### **Rollback if Needed:**

1. Go to Vercel dashboard
2. Click **Deployments**
3. Find previous working deployment
4. Click **"..."** → **"Promote to Production"**

---

## 🎯 Quick Deploy Commands

I'll create a helper script for you:

```bash
# Deploy checklist
./scripts/deploy-checklist.sh

# Test production build locally
npm run build
npm start
```

---

## 📞 Support

**Vercel:**
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

**Supabase:**
- Docs: https://supabase.com/docs
- Support: https://supabase.com/support

---

## 🎉 Deployment Timeline

```
Step 1: Sign up on Vercel          (2 min)
Step 2: Import project              (1 min)
Step 3: Add environment variables   (2 min)
Step 4: Deploy                      (3 min)
Step 5: Update Supabase URLs        (2 min)
────────────────────────────────────────────
Total Time: ~10 minutes
```

---

## ✅ Post-Deployment Checklist

After deployment:
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Authentication working
- [ ] Quotation builder saves to DB
- [ ] Forms submit correctly
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Performance good (90+ score)

---

## 🎊 Ready to Deploy?

**Click here to start:**
👉 **https://vercel.com/new**

**Or tell me you're ready and I'll guide you through each step!**

---

**Your website will be live in ~10 minutes!** 🚀

