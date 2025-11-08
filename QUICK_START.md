# AstraVeda - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Set Up Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Don't have Supabase yet?** Follow the [Database Setup](#database-setup) section below.

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

---

## 🗄️ Database Setup

### Quick Option: Use Supabase (Recommended)

1. **Create account**: Go to [supabase.com](https://supabase.com)
2. **New project**: Click "New Project"
3. **Run schema**: 
   - Open SQL Editor in Supabase
   - Copy contents of `lib/database-schema.sql`
   - Paste and run
4. **Get keys**: Settings → API
   - Copy Project URL and API keys to `.env.local`

That's it! Your database is ready.

---

## 📄 What's Included

### Pages Built & Ready

✅ **Home** - Hero, services, testimonials, CTA  
✅ **Services** - 9 service pages with pricing  
✅ **Industries** - 8 industry verticals  
✅ **Pricing** - Preset packages + quotation builder  
✅ **About** - Company story and team  
✅ **Process** - How we work  
✅ **Case Studies** - Success stories  
✅ **Portfolio** - Work showcase  
✅ **Contact** - Multi-step lead form  
✅ **Resources** - Blog and downloads  
✅ **Client Portal** - Dashboard (basic)

### Core Features

🎯 **Quotation Builder**
- 4-step wizard
- Auto-pricing with bundle discounts
- PDF generation
- Email delivery

🎨 **Design System**
- Tailwind CSS
- Framer Motion animations
- Responsive components
- Dark mode ready

🗃️ **Database Schema**
- Services & pricing
- Quotations & leads
- Clients & case studies
- Portfolio & blog posts

---

## 🎯 Next Steps

### 1. Customize Content

**Update company info** in components:
```
components/layout/Footer.tsx
components/layout/Navigation.tsx
app/layout.tsx (metadata)
```

**Update services** in:
```
lib/services-data.ts
```

### 2. Add Real Data

**Sample data to add**:
- Your actual services and pricing
- Real case studies
- Portfolio items
- Team member photos
- Client logos

**Where to add**:
- Directly in Supabase Table Editor
- Or via SQL in Supabase SQL Editor

### 3. Set Up Integrations

**Email (for contact forms)**:
```bash
npm install @sendgrid/mail
# Add SENDGRID_API_KEY to .env.local
```

**Analytics**:
- Google Analytics (add to `app/layout.tsx`)
- Vercel Analytics (auto-enabled on Vercel)

### 4. Deploy

**Recommended: Vercel** (Easiest)
1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy! 🚀

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 📚 Project Structure

```
astraveda/
├── app/                      # Next.js pages
│   ├── (main pages)/        # All public pages
│   ├── portal/              # Client portal
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── home/                # Home page sections
│   ├── quotation/          # Quotation builder
│   ├── layout/             # Nav, Footer
│   └── ui/                 # Reusable components
├── lib/
│   ├── supabase.ts         # Database client
│   ├── database.types.ts   # TypeScript types
│   ├── services-data.ts    # Services catalog
│   └── pdf-generator.ts    # PDF creation
└── public/                  # Static assets
```

---

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#f97316', // Your brand color
  },
  charcoal: {
    900: '#2a2a2a', // Dark text
  },
}
```

### Fonts

Edit `app/layout.tsx`:

```typescript
const inter = Inter({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });
```

### Logo

Replace logo in `components/layout/Navigation.tsx`:

```tsx
<div className="text-2xl font-display font-bold">
  Your<span className="text-primary-500">Brand</span>
</div>
```

---

## 💡 Pro Tips

1. **Test quotation builder first** - It's the star feature!
2. **Use Supabase Table Editor** - Easiest way to manage data
3. **Check mobile responsive** - Design works great on all devices
4. **Customize services data** - Match your actual offerings
5. **Add real testimonials** - Social proof is powerful

---

## 🐛 Common Issues

**Build fails:**
```bash
rm -rf node_modules .next
npm install
npm run build
```

**Environment variables not loading:**
- Restart dev server after changing `.env.local`
- Verify spelling and syntax

**Database connection error:**
- Double-check Supabase URL and keys
- Verify schema was run successfully

---

## 📞 Need Help?

- **Documentation**: See [README.md](./README.md)
- **Deployment**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)

---

## ✅ Launch Checklist

Before going live:

- [ ] Add real content (services, pricing, about)
- [ ] Test quotation builder end-to-end
- [ ] Add Google Analytics / tracking
- [ ] Set up email service for forms
- [ ] Test on mobile devices
- [ ] Run PageSpeed test
- [ ] Set up custom domain
- [ ] Enable SSL certificate
- [ ] Add favicon and OG images
- [ ] Test all links work

---

**You're all set! Build something amazing! 🚀**

For questions: hello@astraveda.com

