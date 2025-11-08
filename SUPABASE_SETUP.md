# Supabase Database Setup Guide

## ✅ Environment Variables - DONE!

Your Supabase credentials are already configured in `.env.local`:
- **Project URL:** https://nzthzhclsuswivbxmvetr.supabase.co
- **Anon Key:** ✅ Configured
- **Service Role Key:** ✅ Configured

---

## 📊 Next Step: Set Up Database Schema

### **Option 1: Using Supabase Dashboard (Easiest)**

1. **Go to Supabase SQL Editor:**
   👉 https://supabase.com/dashboard/project/nzthzhclsuswivbxmvetr/sql/new

2. **Copy the Database Schema:**
   - Open the file: `lib/database-schema.sql`
   - Copy ALL the contents (it's a long SQL file)

3. **Paste and Run:**
   - Paste the SQL into the Supabase SQL Editor
   - Click "Run" button (or press Ctrl/Cmd + Enter)
   - Wait for it to complete (should take 5-10 seconds)

4. **Verify Tables Created:**
   - Go to: https://supabase.com/dashboard/project/nzthzhclsuswivbxmvetr/editor
   - You should see these tables:
     ✅ services
     ✅ industries
     ✅ quotations
     ✅ leads
     ✅ clients
     ✅ case_studies
     ✅ portfolio_items
     ✅ blog_posts
     ✅ user_profiles

---

### **Option 2: Using Command Line**

```bash
# Install Supabase CLI (if not installed)
brew install supabase/tap/supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref nzthzhclsuswivbxmvetr

# Run the schema
supabase db push
```

---

## 🎯 What Each Table Does

| Table | Purpose |
|-------|---------|
| **services** | Your 9 services with pricing tiers |
| **industries** | 8 industry verticals you serve |
| **quotations** | Generated quotes from the builder |
| **leads** | Contact form submissions |
| **clients** | Active client accounts |
| **case_studies** | Success stories with metrics |
| **portfolio_items** | Your creative work showcase |
| **blog_posts** | Blog articles & resources |
| **user_profiles** | User authentication data |

---

## 🔐 Security Features Included

✅ **Row Level Security (RLS)** - Enabled on all tables
✅ **Public Read Access** - For services, case studies, blog
✅ **Admin Full Access** - For authenticated admins
✅ **Client Access** - Clients can view their own data
✅ **Auto Timestamps** - Created/updated dates tracked

---

## 📝 Optional: Add Sample Data

After creating tables, you can add sample data:

```sql
-- Insert a sample service
INSERT INTO services (name, slug, description, base_price, category) VALUES
('Social Media Management', 'social-media', 'End-to-end social media management', 25000, 'social');

-- Insert a sample industry
INSERT INTO industries (name, slug, description, icon) VALUES
('Ayurveda & Wellness', 'ayurveda', 'Digital marketing for Ayurvedic clinics', '🌿');

-- Insert a sample case study
INSERT INTO case_studies (title, slug, client_name, industry, challenge, solution, result, published) VALUES
('Amogha Ayurveda Success', 'amogha-ayurveda', 'Amogha Ayurveda', 'Ayurveda & Wellness', 
'Zero digital presence', 'Comprehensive digital strategy', '350% growth in 90 days', true);
```

---

## ✅ Verification Checklist

After running the schema:

- [ ] All 9 tables created successfully
- [ ] No errors in SQL execution
- [ ] Can view tables in Supabase dashboard
- [ ] Row Level Security policies active
- [ ] Ready to restart dev server

---

## 🚀 After Database Setup

1. **Restart your dev server:**
   ```bash
   npm run dev
   ```

2. **Test the quotation builder:**
   - Go to http://localhost:3000/pricing
   - Fill out the form
   - Generate a quote
   - It should now save to database!

3. **Test database connection:**
   - Check browser console for any Supabase errors
   - Try submitting the contact form
   - Check if data appears in Supabase dashboard

---

## 🐛 Troubleshooting

**Error: "relation does not exist"**
- The schema wasn't run successfully
- Go back and run the SQL again

**Error: "permission denied"**
- Check your service role key is correct
- Verify RLS policies are set up

**Error: "Failed to fetch"**
- Check your Supabase URL is correct
- Verify anon key is valid
- Check internet connection

---

## 📞 Need Help?

- **Supabase Docs:** https://supabase.com/docs
- **SQL Editor:** https://supabase.com/dashboard/project/nzthzhclsuswivbxmvetr/sql
- **Tables:** https://supabase.com/dashboard/project/nzthzhclsuswivbxmvetr/editor

---

**Your Supabase project is ready to go!** 🎉

Next: Run the schema SQL and restart your dev server!

