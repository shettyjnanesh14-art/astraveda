# 🚀 GO LIVE CHECKLIST - astraveda.io

## Your 5-Step Launch Plan

---

## ☐ STEP 1: Deploy to Vercel (5 minutes)

### **Action:**
👉 **https://vercel.com/new**

### **Tasks:**
- [ ] Sign in with GitHub
- [ ] Import **astraveda** repository
- [ ] Add 3 environment variables (see VERCEL_ENV_VARS.txt)
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes
- [ ] ✅ Copy your temporary URL: `https://astraveda-xxxxx.vercel.app`

**Status:** ⏳ Start Here

---

## ☐ STEP 2: Add Custom Domain (2 minutes)

### **Action:**
In Vercel project settings

### **Tasks:**
- [ ] Go to **Settings** → **Domains**
- [ ] Click "Add Domain"
- [ ] Enter: `astraveda.io`
- [ ] Click "Add"
- [ ] Also add: `www.astraveda.io`
- [ ] ✅ Note the DNS records Vercel shows you

**Status:** ⏳ After Step 1

---

## ☐ STEP 3: Configure DNS (3 minutes)

### **Action:**
In your domain registrar (where you bought astraveda.io)

### **Tasks:**
- [ ] Login to your domain registrar
- [ ] Find DNS settings for astraveda.io
- [ ] Add A record: `@` → `76.76.21.21`
- [ ] Add CNAME: `www` → `cname.vercel-dns.com`
- [ ] Save DNS changes
- [ ] ✅ Wait for propagation (5-30 minutes)

**DNS Records:**
```
A Record:
  Name: @ (or blank)
  Value: 76.76.21.21

CNAME Record:
  Name: www
  Value: cname.vercel-dns.com
```

**Status:** ⏳ After Step 2

---

## ☐ STEP 4: Update Supabase Auth (2 minutes)

### **Action:**
👉 **https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/url-configuration**

### **Tasks:**
- [ ] Change Site URL to: `https://astraveda.io`
- [ ] Add redirect URLs:
  - [ ] `https://astraveda.io/auth/callback`
  - [ ] `https://astraveda.io/portal`
  - [ ] `https://astraveda.io/admin`
  - [ ] `https://www.astraveda.io/auth/callback`
  - [ ] `https://www.astraveda.io/portal`
  - [ ] `https://www.astraveda.io/admin`
- [ ] Keep localhost URLs for dev
- [ ] Click "Save"
- [ ] ✅ Auth configured for production

**Status:** ⏳ After DNS propagates

---

## ☐ STEP 5: Test & Verify (5 minutes)

### **Action:**
Test your live site!

### **Tasks:**
- [ ] Visit: `https://astraveda.io`
- [ ] Check: HTTPS working (🔒)
- [ ] Test: All pages load
- [ ] Test: Navigation works
- [ ] Test: Create account (`/auth/signup`)
- [ ] Test: Login (`/auth/login`)
- [ ] Test: Access portal after login
- [ ] Test: Quotation builder (`/pricing`)
- [ ] Test: Submit contact form
- [ ] Check: Mobile responsive
- [ ] ✅ Everything working!

**Status:** ⏳ After Step 4

---

## 🎯 Quick Timeline

```
Now          → Step 1: Deploy to Vercel (3 min)
+3 min       → Step 2: Add domain (2 min)
+5 min       → Step 3: Configure DNS (3 min)
+8 min       → Wait for DNS propagation (5-30 min)
+38 min      → Step 4: Update Supabase (2 min)
+40 min      → Step 5: Test everything (5 min)
────────────────────────────────────────────────
+45 min      → 🎉 LIVE!
```

**Best case:** 20 minutes
**Worst case:** 70 minutes (if DNS is slow)

---

## 📧 Email Template for DNS Provider

If you need help from your registrar's support:

```
Subject: DNS Configuration for astraveda.io

Hello,

I need to configure DNS records for astraveda.io to point to Vercel.

Please add these records:

A Record:
- Type: A
- Name/Host: @
- Value/Points to: 76.76.21.21
- TTL: 3600

CNAME Record:
- Type: CNAME
- Name/Host: www
- Value/Points to: cname.vercel-dns.com
- TTL: 3600

Thank you!
```

---

## 🔍 DNS Verification Tools

### **Check if DNS is working:**

**Tool 1:** https://dnschecker.org
- Enter: `astraveda.io`
- Should show: 76.76.21.21
- Check multiple locations

**Tool 2:** Command Line
```bash
# Check A record
dig astraveda.io +short
# Should show: 76.76.21.21

# Check CNAME
dig www.astraveda.io +short
# Should show: cname.vercel-dns.com
```

**Tool 3:** https://www.whatsmydns.net
- Enter: `astraveda.io`
- Type: A
- Should propagate globally

---

## 🎨 Vercel Domain Settings

### **After domain is added:**

**Primary Domain:**
- Choose: `astraveda.io` or `www.astraveda.io`
- Other will auto-redirect

**Recommended:** Make `astraveda.io` primary
- Cleaner URL
- Better for branding
- www redirects automatically

---

## 📊 After Going Live

### **Update These:**

**1. Google Analytics** (if using)
- Add production domain

**2. Social Media**
- Update bio links to https://astraveda.io

**3. Business Cards**
- Use https://astraveda.io

**4. Email Signatures**
- Update to new URL

---

## 🎉 Success Indicators

### **Your site is live when:**

✅ https://astraveda.io loads
✅ Shows 🔒 (HTTPS secure)
✅ All pages working
✅ Authentication functional
✅ Forms submitting
✅ Database connected

---

## 🐛 If Something Goes Wrong

### **Site Not Loading:**
- Check DNS propagation (dnschecker.org)
- Wait 30 more minutes
- Clear browser cache

### **Authentication Error:**
- Update Supabase auth URLs
- Clear cookies
- Try incognito mode

### **Build Failed in Vercel:**
- Check environment variables
- View build logs
- Ensure all vars added correctly

---

## 📞 Get Help

**Vercel Support:**
- Docs: https://vercel.com/docs
- Chat: Available in dashboard

**DNS Issues:**
- Contact your registrar support
- Most have 24/7 support

**Supabase:**
- Discord: https://discord.supabase.com

---

## 🎊 You're Ready to Launch!

**Current Status:**
- ✅ Code ready
- ✅ Build tested
- ✅ Database ready
- ✅ All features working

**Start deploying:**
👉 **https://vercel.com/new**

**Follow:** `DEPLOY_ASTRAVEDA_IO.md` for detailed steps

---

**Let's make astraveda.io LIVE!** 🚀

**Tell me when you've:**
1. Deployed to Vercel (I'll help with next steps)
2. Added the domain (I'll help with DNS)
3. Configured DNS (I'll help verify)
4. Got any questions! (I'm here to help)

