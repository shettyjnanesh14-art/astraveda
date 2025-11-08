# 🚀 Deploy AstraVeda to astraveda.io

## Complete Deployment Guide for Custom Domain

---

## 📋 Overview

We'll deploy your site to **astraveda.io** in 3 main steps:

1. ✅ Deploy to Vercel (get temporary URL)
2. ✅ Add custom domain (astraveda.io)
3. ✅ Update all configurations

**Total Time:** ~15 minutes

---

## STEP 1: Deploy to Vercel

### **1.1 Sign In to Vercel**

👉 **Go to:** https://vercel.com/new

- Click **"Continue with GitHub"**
- Authorize Vercel (if first time)

### **1.2 Import Repository**

1. You'll see "Import Git Repository"
2. Find: **astraveda** (shettyjnanesh14-art/astraveda)
3. Click **"Import"**

### **1.3 Configure Project**

**Project Name:** `astraveda` (or keep default)

**Framework:** Next.js ✅ (auto-detected)

**Root Directory:** `./` ✅

**Build Settings:** (leave as default)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### **1.4 Add Environment Variables** ⚠️ CRITICAL

Click **"Environment Variables"** and add these **3 variables**:

**Variable 1:**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://nzthzhclsuswivbxmvetr.supabase.co
Environment: ✅ Production ✅ Preview ✅ Development
```

**Variable 2:**
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dGhoemNsdXN3aXZieG12ZXRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0OTU3NjIsImV4cCI6MjA3ODA3MTc2Mn0.7cfYa9FJ4R03IWFSXdFzPixCQ6uFe_gZvjz9vP-ad9g
Environment: ✅ Production ✅ Preview ✅ Development
```

**Variable 3:**
```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dGhoemNsdXN3aXZieG12ZXRyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjQ5NTc2MiwiZXhwIjoyMDc4MDcxNzYyfQ.myxYGFS_M8Ix65So0B3XPMMBvJ0t0g8TYetRLt2OvEY
Environment: ✅ Production ✅ Preview ✅ Development
```

### **1.5 Deploy**

Click **"Deploy"** button!

**What happens:**
- Vercel clones your repo
- Installs dependencies
- Builds your site
- Deploys to CDN

**Wait 2-3 minutes...**

You'll get a temporary URL like:
```
https://astraveda-xxxxx.vercel.app
```

**✅ Your site is now live on Vercel!**

---

## STEP 2: Add Custom Domain (astraveda.io)

### **2.1 Add Domain in Vercel**

1. After deployment, go to your project dashboard
2. Click **"Settings"** tab
3. Click **"Domains"** in left sidebar
4. Click **"Add Domain"**
5. Enter: `astraveda.io`
6. Click **"Add"**

### **2.2 Also Add www Subdomain**

1. Click **"Add Domain"** again
2. Enter: `www.astraveda.io`
3. Click **"Add"**

Vercel will show you DNS configuration needed.

---

## STEP 3: Configure DNS (Your Domain Registrar)

### **3.1 Where is astraveda.io registered?**

Go to your domain registrar where you bought astraveda.io:
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- Others?

### **3.2 Add DNS Records**

In your domain's DNS settings, add these records:

**For Root Domain (astraveda.io):**
```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

**For www Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

**Save the DNS changes!**

### **3.3 Wait for DNS Propagation**

- Usually takes: 5-30 minutes
- Can take up to: 24-48 hours
- Check status in Vercel dashboard

Vercel will show:
- ⏳ "Pending" - DNS not propagated yet
- ✅ "Valid" - Domain is working!

---

## STEP 4: Update Supabase Configuration

### **4.1 Update Site URL**

👉 Go to: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/url-configuration

**Change Site URL to:**
```
https://astraveda.io
```

### **4.2 Add Redirect URLs**

Add these redirect URLs:

```
https://astraveda.io/auth/callback
https://astraveda.io/portal
https://astraveda.io/admin
https://www.astraveda.io/auth/callback
https://www.astraveda.io/portal
https://www.astraveda.io/admin
```

**Keep localhost URLs for local development**

Click **"Save"**

---

## STEP 5: Update Environment Variables

### **5.1 In Vercel**

1. Go to **Settings** → **Environment Variables**
2. Find: `NEXT_PUBLIC_SITE_URL`
3. Click **Edit**
4. Change to: `https://astraveda.io`
5. Click **Save**

### **5.2 Redeploy**

After updating env var:
1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**

Or just push any change to GitHub (auto-deploys)

---

## ✅ Verification Checklist

### **After DNS Propagates:**

- [ ] Visit https://astraveda.io
- [ ] Check HTTPS is enabled (🔒)
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Try creating account
- [ ] Test login
- [ ] Access portal after login
- [ ] Test quotation builder
- [ ] Submit contact form
- [ ] Check mobile responsive

---

## 🎯 Your Final URLs

**Production:**
- Main site: **https://astraveda.io**
- Login: **https://astraveda.io/auth/login**
- Signup: **https://astraveda.io/auth/signup**
- Portal: **https://astraveda.io/portal**
- Admin: **https://astraveda.io/admin**
- Quotation: **https://astraveda.io/pricing**

**Development:**
- Local: http://localhost:3000

---

## 🔐 SSL Certificate

✅ **Automatic!**

Vercel automatically:
- Provisions SSL certificate
- Enables HTTPS
- Redirects HTTP to HTTPS
- Auto-renews certificates

**Your site will be secure by default!**

---

## 📊 Post-Deployment Configuration

### **Update in Code (Optional):**

Update these files for production URLs:

**1. Metadata (SEO):**
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://astraveda.io'),
  // ...
};
```

**2. Sitemap:**
Create `app/sitemap.ts`:
```typescript
export default function sitemap() {
  return [
    {
      url: 'https://astraveda.io',
      lastModified: new Date(),
    },
    // ... more URLs
  ];
}
```

---

## 🌐 DNS Configuration Examples

### **GoDaddy:**
1. Go to: Domain Settings → Manage DNS
2. Add A record: @ → 76.76.21.21
3. Add CNAME: www → cname.vercel-dns.com

### **Namecheap:**
1. Go to: Domain List → Manage → Advanced DNS
2. Add A record: @ → 76.76.21.21
3. Add CNAME: www → cname.vercel-dns.com

### **Cloudflare:**
1. Go to: DNS → Records
2. Add A record: @ → 76.76.21.21 (Proxy: ON)
3. Add CNAME: www → cname.vercel-dns.com (Proxy: ON)

### **Google Domains:**
1. Go to: DNS → Custom records
2. Add A record: @ → 76.76.21.21
3. Add CNAME: www → cname.vercel-dns.com

---

## ⚡ Performance After Deployment

Your site will have:

✅ **Google PageSpeed Score: 90+**
- Fast load times
- Optimized images
- Minified code
- Edge caching

✅ **Global CDN:**
- Deployed to 20+ regions worldwide
- Fast for users everywhere
- Automatic edge optimization

✅ **SEO Optimized:**
- Proper meta tags
- Fast Core Web Vitals
- Mobile-friendly
- HTTPS secure

---

## 🔄 Auto-Deploy Setup

**Already configured!** ✅

Every time you push to GitHub:
```bash
git add .
git commit -m "Update site"
git push
```

Vercel automatically:
1. Detects the push
2. Builds new version
3. Deploys in ~2 minutes
4. Updates live site

**No manual deployment needed!**

---

## 📈 Monitor Your Live Site

### **Vercel Analytics:**
- Dashboard: https://vercel.com/dashboard
- Real-time visitors
- Page performance
- Error tracking

### **Vercel Logs:**
- Real-time logs
- Error messages
- Build logs
- Function logs

---

## 🐛 Troubleshooting

### **Domain Not Working**

**"Domain verification failed"**
- Check DNS records are correct
- Wait 30 minutes for propagation
- Try: https://dnschecker.org

**"Invalid configuration"**
- Verify A record: 76.76.21.21
- Verify CNAME: cname.vercel-dns.com
- Check TTL is not too high

### **Authentication Not Working**

**"Redirect URI mismatch"**
- Update Supabase auth URLs with astraveda.io
- Include /auth/callback
- Clear browser cache

### **Build Fails**

**"Missing environment variables"**
- Check all 3 vars added in Vercel
- Verify spelling
- Check for all environments

---

## 🎉 Success Checklist

After everything is configured:

- [ ] ✅ Site live at https://astraveda.io
- [ ] ✅ HTTPS working (🔒)
- [ ] ✅ www redirect working
- [ ] ✅ All pages loading
- [ ] ✅ Authentication functional
- [ ] ✅ Database connected
- [ ] ✅ Forms working
- [ ] ✅ Quotation builder saves to DB

---

## 📞 Next Steps After Going Live

1. **Test everything** on production
2. **Create your admin account**
3. **Add real content** (services, case studies)
4. **Set up Google Analytics** (optional)
5. **Submit to Google Search Console**
6. **Share with the world!** 🎊

---

## 🎯 Quick Reference

| Step | Action | Time |
|------|--------|------|
| 1 | Deploy to Vercel | 3 min |
| 2 | Add domain in Vercel | 1 min |
| 3 | Configure DNS | 2 min |
| 4 | Wait for DNS | 5-30 min |
| 5 | Update Supabase URLs | 2 min |
| 6 | Test live site | 5 min |
| **Total** | **~20-30 minutes** | ⏱️ |

---

## 🎊 You're About to Go Live!

**Start deploying:**
👉 **https://vercel.com/new**

**When done, tell me your Vercel URL and I'll help you:**
- Configure DNS properly
- Update Supabase
- Test everything
- Celebrate! 🎉

---

**Let's make astraveda.io live!** 🚀

