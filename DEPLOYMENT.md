# AstraVeda Deployment Guide

## Prerequisites

Before deploying, ensure you have:

1. **Supabase Account**: Sign up at [supabase.com](https://supabase.com)
2. **Vercel Account** (recommended): Sign up at [vercel.com](https://vercel.com)
3. **Git Repository**: Code pushed to GitHub/GitLab
4. **Domain Name** (optional): For custom domain

## Step 1: Database Setup (Supabase)

### 1.1 Create Supabase Project

1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Fill in:
   - **Name**: astraveda
   - **Database Password**: (save this securely)
   - **Region**: Choose closest to your users
4. Click "Create new project"

### 1.2 Run Database Schema

1. Go to **SQL Editor** in Supabase dashboard
2. Click "New Query"
3. Copy the entire contents of `lib/database-schema.sql`
4. Paste and click "Run"
5. Verify all tables are created in the **Table Editor**

### 1.3 Get API Keys

1. Go to **Settings** > **API**
2. Copy these values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (keep secure!)

### 1.4 Optional: Seed Data

If you want sample data:

```sql
-- Insert sample services
INSERT INTO services (name, slug, description, base_price, category) VALUES
('Social Media Management', 'social-media', 'End-to-end social media management', 25000, 'social'),
('Performance Marketing', 'performance-marketing', 'Meta & Google ads optimization', 30000, 'marketing');
-- Add more as needed
```

## Step 2: Environment Variables

Create a `.env.local` file in your project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Site
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Email (Optional - for contact forms)
EMAIL_SERVICE_API_KEY=your_email_api_key
ADMIN_EMAIL=admin@astraveda.com
```

## Step 3: Deploy to Vercel

### 3.1 Connect Repository

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Vercel will auto-detect Next.js

### 3.2 Configure Build Settings

Vercel should auto-configure, but verify:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3.3 Add Environment Variables

1. Go to **Settings** > **Environment Variables**
2. Add all variables from your `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_SITE_URL`
   - (Add others as needed)
3. Make sure to set for **Production**, **Preview**, and **Development** environments

### 3.4 Deploy

1. Click **Deploy**
2. Wait 2-3 minutes for build to complete
3. Visit your deployment URL!

## Step 4: Custom Domain (Optional)

### 4.1 Add Domain in Vercel

1. Go to **Settings** > **Domains**
2. Add your domain (e.g., `astraveda.com`)
3. Vercel will provide DNS records

### 4.2 Configure DNS

In your domain registrar (GoDaddy, Namecheap, etc.):

**For Root Domain (astraveda.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www Subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4.3 SSL Certificate

- Vercel automatically provisions SSL certificates
- Wait 24-48 hours for DNS propagation
- Your site will be live at `https://yourdomain.com`

## Step 5: Post-Deployment Setup

### 5.1 Update Site URL

In Vercel environment variables, update:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Redeploy for changes to take effect.

### 5.2 Configure Supabase Authentication (if using)

1. In Supabase dashboard: **Authentication** > **URL Configuration**
2. Add your site URL: `https://yourdomain.com`
3. Add redirect URLs:
   - `https://yourdomain.com/auth/callback`
   - `http://localhost:3000/auth/callback` (for local dev)

### 5.3 Set up Email Service (Optional)

For contact forms to work:

**Option A: SendGrid**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Add to Vercel env: `EMAIL_SERVICE_API_KEY`

**Option B: Mailgun**
1. Sign up at [mailgun.com](https://mailgun.com)
2. Get API key and domain
3. Add to Vercel env

## Step 6: Testing

### 6.1 Test Key Features

- [ ] Home page loads correctly
- [ ] Navigation works
- [ ] Quotation builder functions
- [ ] Forms submit successfully
- [ ] Database connections work
- [ ] PDF generation works

### 6.2 Performance Check

Use [PageSpeed Insights](https://pagespeed.web.dev/):
- Check both mobile and desktop scores
- Aim for 90+ on all metrics

## Step 7: Monitoring & Analytics

### 7.1 Vercel Analytics

1. Go to **Analytics** in Vercel dashboard
2. Enable analytics
3. Monitor page views, performance

### 7.2 Error Tracking (Optional)

**Sentry Integration:**
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### 7.3 Uptime Monitoring

Use services like:
- **UptimeRobot** (free)
- **Pingdom**
- **Better Uptime**

## Alternative Deployment Options

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Import repository
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Add environment variables
5. Deploy

### Deploy to AWS Amplify

1. Go to AWS Amplify Console
2. Connect repository
3. Amplify auto-detects Next.js
4. Add environment variables
5. Deploy

### Self-Hosted with Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
docker build -t astraveda .
docker run -p 3000:3000 astraveda
```

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

**Error: Environment variable missing**
- Check all required vars are in Vercel
- Verify spelling and case sensitivity

### Database Connection Issues

**Error: Invalid API key**
- Double-check Supabase keys
- Ensure keys are for correct project
- Check RLS policies are set up

### Performance Issues

**Slow page loads:**
1. Enable Next.js Image Optimization
2. Check Vercel Analytics for bottlenecks
3. Optimize heavy components
4. Use dynamic imports for large libraries

## Maintenance

### Regular Tasks

**Weekly:**
- Monitor error logs
- Check uptime reports
- Review analytics

**Monthly:**
- Update dependencies
- Backup database
- Review performance metrics

**Quarterly:**
- Security audit
- Performance optimization
- Feature review

## Support

For deployment issues:
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Supabase**: [supabase.com/docs](https://supabase.com/docs)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)

---

**Congratulations! Your AstraVeda website is now live! 🚀**

