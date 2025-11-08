# DNS Configuration for astraveda.io

## 🌐 DNS Records to Add

---

## For Domain Registrar

Add these records in your astraveda.io DNS settings:

---

## **Record 1: Root Domain (astraveda.io)**

```
Type: A
Name: @ (or leave blank, or astraveda.io)
Value: 76.76.21.21
TTL: 3600 (or Auto/Default)
```

**What this does:** Points astraveda.io to Vercel's servers

---

## **Record 2: WWW Subdomain**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto/Default)
```

**What this does:** Points www.astraveda.io to Vercel

---

## **Optional: Subdomain for Staging**

If you want a staging environment:

```
Type: CNAME
Name: staging
Value: cname.vercel-dns.com
TTL: 3600
```

Access at: https://staging.astraveda.io

---

## 📋 Step-by-Step for Common Registrars

### **GoDaddy:**

1. Login to GoDaddy
2. Go to: **My Products** → **DNS**
3. Click **"Add"** for each record:
   - **Type:** A, **Name:** @, **Value:** 76.76.21.21
   - **Type:** CNAME, **Name:** www, **Value:** cname.vercel-dns.com
4. Click **"Save"**

---

### **Namecheap:**

1. Login to Namecheap
2. Go to: **Domain List** → **Manage**
3. Click **"Advanced DNS"** tab
4. Add records:
   - **Type:** A Record, **Host:** @, **Value:** 76.76.21.21
   - **Type:** CNAME Record, **Host:** www, **Value:** cname.vercel-dns.com
5. Click **"Save All Changes"**

---

### **Cloudflare:**

1. Login to Cloudflare
2. Select domain: **astraveda.io**
3. Go to **DNS** → **Records**
4. Click **"Add record"**:
   - **Type:** A, **Name:** @, **IPv4:** 76.76.21.21, **Proxy:** 🟠 ON
   - **Type:** CNAME, **Name:** www, **Target:** cname.vercel-dns.com, **Proxy:** 🟠 ON
5. Click **"Save"**

**Note:** Cloudflare proxy can cause issues. If site doesn't work, turn proxy OFF (gray cloud).

---

### **Google Domains:**

1. Login to Google Domains
2. Select: **astraveda.io**
3. Click **"DNS"** in left menu
4. Scroll to **"Custom records"**
5. Add:
   - **Type:** A, **Host:** @, **Data:** 76.76.21.21
   - **Type:** CNAME, **Host:** www, **Data:** cname.vercel-dns.com
6. Click **"Save"**

---

### **Other Registrars:**

General steps:
1. Find DNS management section
2. Add A record pointing @ to 76.76.21.21
3. Add CNAME record pointing www to cname.vercel-dns.com
4. Save changes

---

## ⏱️ DNS Propagation Time

**Typical:** 5-30 minutes
**Maximum:** 24-48 hours

### **Check DNS Propagation:**

👉 https://dnschecker.org

Enter: `astraveda.io`

**Look for:**
- A record: 76.76.21.21 ✅
- Global propagation across regions

---

## 🔍 Verify DNS is Working

### **Check A Record:**
```bash
dig astraveda.io
# Should show: 76.76.21.21
```

### **Check CNAME:**
```bash
dig www.astraveda.io
# Should show: cname.vercel-dns.com
```

### **Check in Browser:**
```
https://astraveda.io
https://www.astraveda.io
```

Both should work and show your site!

---

## ✅ After DNS is Configured

### **In Vercel:**

1. Go to **Settings** → **Domains**
2. You should see:
   - ✅ `astraveda.io` - Valid
   - ✅ `www.astraveda.io` - Valid
3. SSL certificate auto-provisioned

### **Test Your Site:**

```
✅ https://astraveda.io
✅ https://www.astraveda.io
✅ http://astraveda.io (redirects to HTTPS)
```

---

## 🔧 Update Site URL

### **In .env.local (for local dev):**
```env
NEXT_PUBLIC_SITE_URL=https://astraveda.io
```

### **In Vercel:**
1. **Settings** → **Environment Variables**
2. Add new variable:
   ```
   NEXT_PUBLIC_SITE_URL=https://astraveda.io
   ```
3. **Redeploy** for changes to take effect

---

## 📧 Update Supabase Auth URLs

👉 https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/url-configuration

**Update to:**

**Site URL:**
```
https://astraveda.io
```

**Redirect URLs:**
```
https://astraveda.io/auth/callback
https://astraveda.io/portal
https://astraveda.io/admin
https://www.astraveda.io/auth/callback
https://www.astraveda.io/portal
https://www.astraveda.io/admin
http://localhost:3000/auth/callback (keep for local dev)
http://localhost:3000/portal (keep for local dev)
```

---

## 🎨 Domain Redirects (Vercel Handles Automatically)

Vercel automatically redirects:
- ✅ http://astraveda.io → https://astraveda.io
- ✅ https://www.astraveda.io → https://astraveda.io (or vice versa)

**You can configure which is primary in Vercel domain settings.**

---

## 🐛 Troubleshooting DNS

### **Domain shows "Server not found"**
- DNS not propagated yet (wait 30 minutes)
- Check DNS records are correct
- Verify with dnschecker.org

### **Domain shows old content**
- Clear browser cache (Cmd+Shift+R)
- Try incognito mode
- Check DNS propagation

### **SSL certificate error**
- Wait for Vercel to provision SSL (can take 10-30 minutes)
- Check domain is verified in Vercel
- Try clearing cache

### **"Too many redirects"**
- Check Cloudflare proxy settings
- Turn off proxy or set SSL to "Full"
- Check Vercel redirect settings

---

## 📊 After Going Live

### **Monitor:**
- Vercel Analytics dashboard
- Error logs in Vercel
- Database usage in Supabase
- User signups

### **Optimize:**
- Check PageSpeed Insights
- Monitor Core Web Vitals
- Review error logs
- Optimize slow queries

### **Marketing:**
- Update social media links
- Submit to Google Search Console
- Add to business listings
- Share with clients!

---

## 🎉 Success!

Once DNS propagates and everything is configured:

```
✅ astraveda.io is LIVE!
✅ HTTPS enabled automatically
✅ Global CDN active
✅ Authentication working
✅ Database connected
✅ All features functional
```

---

## 🎯 Quick Checklist

- [ ] Deploy to Vercel
- [ ] Add astraveda.io in Vercel domains
- [ ] Configure DNS records
- [ ] Wait for DNS propagation (5-30 min)
- [ ] Update Supabase auth URLs
- [ ] Update NEXT_PUBLIC_SITE_URL
- [ ] Test site at https://astraveda.io
- [ ] Test authentication
- [ ] Test all features
- [ ] Celebrate! 🎊

---

**Your premium website will soon be live at astraveda.io!** 🚀

**Need help with DNS? Let me know your domain registrar!**

