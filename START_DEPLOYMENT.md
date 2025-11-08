# 🚀 START HERE: Deploy astraveda.io

## Quick Start - Your Action Plan

---

## 🎯 STEP 1: Deploy to Vercel NOW

### **Click This Link:**
👉 **https://vercel.com/new**

### **Then:**
1. ✅ Sign in with GitHub
2. ✅ Find and import: **astraveda**
3. ✅ Add environment variables (I've prepared them for you!)

### **Environment Variables to Add:**

Open the file: **`VERCEL_ENV_VARS.txt`** in your project

Copy-paste each variable into Vercel:
- ✅ NEXT_PUBLIC_SUPABASE_URL
- ✅ NEXT_PUBLIC_SUPABASE_ANON_KEY  
- ✅ SUPABASE_SERVICE_ROLE_KEY

**Make sure to select:** Production ✅ Preview ✅ Development ✅

4. ✅ Click **"Deploy"**

---

## ⏰ What Happens Next

```
Deploying... (2-3 minutes)
   ↓
Build Complete ✅
   ↓
You get temporary URL: https://astraveda-xxxxx.vercel.app
   ↓
Your site is LIVE! (temporarily)
```

---

## 🎯 STEP 2: Add Your Domain

### **In Vercel Dashboard:**

1. ✅ Go to: **Settings** → **Domains**
2. ✅ Click "Add Domain"
3. ✅ Type: `astraveda.io`
4. ✅ Click "Add"

Vercel will show you DNS records to add.

---

## 🎯 STEP 3: Configure DNS

### **Where did you buy astraveda.io?**

Tell me and I'll give you exact instructions!

Common registrars:
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- Other?

### **DNS Records to Add:**

```
A Record:
Type: A
Name: @
Value: 76.76.21.21

CNAME Record:
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**See `DNS_CONFIGURATION.md` for registrar-specific steps!**

---

## ⏳ STEP 4: Wait for DNS

**DNS Propagation Time:**
- Minimum: 5 minutes
- Typical: 15-30 minutes
- Maximum: 24 hours

**Check progress:**
👉 https://dnschecker.org

Enter: `astraveda.io`

---

## 🎯 STEP 5: Update Supabase

### **After DNS is working:**

👉 https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/url-configuration

**Change:**
- Site URL → `https://astraveda.io`
- Add redirect URLs:
  - `https://astraveda.io/auth/callback`
  - `https://astraveda.io/portal`
  - `https://astraveda.io/admin`

---

## ✅ Final Test

### **Visit:**
```
https://astraveda.io
```

### **Test:**
- [ ] Home page loads
- [ ] All pages work
- [ ] Create account
- [ ] Login
- [ ] Test quotation builder
- [ ] Check mobile view

---

## 🎉 Success!

When everything works:

```
✅ astraveda.io is LIVE!
✅ HTTPS enabled (🔒)
✅ Authentication working
✅ All features functional
✅ Global CDN active
✅ Production ready!
```

---

## 📚 Need More Details?

| Guide | Use For |
|-------|---------|
| `DEPLOY_ASTRAVEDA_IO.md` | Complete deployment guide |
| `DNS_CONFIGURATION.md` | DNS setup by registrar |
| `GO_LIVE_CHECKLIST.md` | Step-by-step checklist |
| `VERCEL_ENV_VARS.txt` | Environment variables |
| `DEPLOY_NOW.md` | General deployment info |

---

## 📞 Questions?

Tell me:
- ✅ Where you are in the process
- ✅ Your domain registrar
- ✅ Any errors you see
- ✅ What help you need

I'll guide you through each step!

---

## 🎯 START NOW!

**👉 Click:** https://vercel.com/new

**Then tell me:** "Step 1 done" and I'll guide you to Step 2!

---

**Your site will be live at astraveda.io in ~30 minutes!** 🚀

