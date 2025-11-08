# AstraVeda - Premium Digital Marketing Studio

## 🚀 Overview

AstraVeda is a growth-first digital marketing and creative studio website built with Next.js, featuring an advanced quotation builder, client portal, and comprehensive service management system.

### Key Features

- ✨ **Custom Quotation Builder** - Multi-step wizard that auto-generates personalized proposals with PDF export
- 🎨 **Modern Design System** - Clean, minimal UI with glassmorphism and smooth animations
- 📱 **9 Service Categories** - From social media to 360° growth retainers
- 🏢 **8 Industry Verticals** - Specialized solutions for Ayurveda, Healthcare, Fitness, Education, and more
- 📊 **Client Portal** - Dashboard for existing clients to view services, reports, and approve content
- 🔐 **Admin Dashboard** - Comprehensive management system for quotes, leads, and content
- 💼 **Case Studies & Portfolio** - Showcase real results with filterable galleries
- 📝 **Blog & Resources** - Educational content with SEO optimization
- 🎯 **Multi-step Contact Forms** - Lead capture with intelligent routing

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **PDF Generation:** jsPDF + html2canvas
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

## 📁 Project Structure

```
astraveda/
├── app/                          # Next.js App Router
│   ├── (pages)/                 # Public pages
│   │   ├── about/
│   │   ├── pricing/
│   │   ├── services/
│   │   ├── industries/
│   │   ├── case-studies/
│   │   ├── portfolio/
│   │   ├── contact/
│   │   └── resources/
│   ├── portal/                  # Client portal (authenticated)
│   ├── admin/                   # Admin dashboard (authenticated)
│   ├── layout.tsx
│   ├── page.tsx                 # Home page
│   └── globals.css
├── components/
│   ├── home/                    # Home page sections
│   ├── layout/                  # Navigation, Footer
│   ├── quotation/              # Quotation builder components
│   │   ├── QuotationBuilder.tsx
│   │   ├── types.ts
│   │   └── steps/
│   │       ├── BusinessProfile.tsx
│   │       ├── ServicesSelection.tsx
│   │       ├── ScopeConfiguration.tsx
│   │       └── ProposalOutput.tsx
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── Section.tsx
│       └── Badge.tsx
├── lib/
│   ├── supabase.ts             # Supabase client
│   ├── database.types.ts       # TypeScript types for database
│   ├── database-schema.sql     # Database schema
│   └── services-data.ts        # Services and industries data
└── public/
    └── images/                  # Static assets
```

## 🎨 Design System

### Colors

- **Primary:** Electric Orange (#f97316) - Main accent color
- **Charcoal:** (#2a2a2a) - Text and dark elements
- **White:** Background and clean spaces

### Typography

- **Display:** Sora (headings, bold statements)
- **Body:** Inter (paragraphs, UI text)

### Components

- **Buttons:** 4 variants (primary, secondary, outline, ghost)
- **Cards:** Glass morphism effects with hover states
- **Sections:** Consistent padding and spacing
- **Badges:** Status indicators and labels

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account (for database)
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repo-url>
cd astraveda
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Set up database**

Go to your Supabase project SQL editor and run the schema from `lib/database-schema.sql`

5. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Database Schema

The application uses Supabase with the following main tables:

- **services** - Service catalog with pricing tiers and add-ons
- **industries** - Industry-specific data and templates
- **quotations** - Generated quotes with full client and service data
- **leads** - Lead management from contact forms
- **clients** - Active client accounts
- **case_studies** - Success stories with metrics
- **portfolio_items** - Creative work showcase
- **blog_posts** - Content marketing articles
- **user_profiles** - Extended user information

See `lib/database-schema.sql` for the complete schema.

## 🎯 Key Features Deep Dive

### Quotation Builder

The quotation builder is a 4-step wizard:

1. **Business Profile** - Collect client information and needs
2. **Service Selection** - Choose from 9 service categories
3. **Scope Configuration** - Customize deliverables for each service
4. **Proposal Output** - Auto-generate branded proposal with pricing

**Pricing Logic:**
- Base prices per service from database
- Dynamic pricing based on scope (platforms, volume, etc.)
- Automatic bundle discounts (10% for 2 services, 15% for 3+)
- Add-on calculations
- GST and payment terms included

### Client Portal

Features for logged-in clients:
- View active services and plan details
- Download invoices and quotations
- Approve creative content
- View monthly performance reports
- Support ticket system

### Admin Dashboard

Management features:
- Quote management and tracking
- Lead pipeline with status updates
- Content management (blog, case studies, portfolio)
- Service and pricing configuration
- Client management
- Analytics dashboard

## 🎨 Customization

### Adding a New Service

1. Add service data to `lib/services-data.ts`
2. Create service page in `app/services/[slug]/page.tsx`
3. Add pricing logic in `ScopeConfiguration.tsx`
4. Update service icons in `ServicesGrid.tsx`

### Adding a New Industry

1. Add industry data to `lib/services-data.ts`
2. Create industry page in `app/industries/[slug]/page.tsx`
3. Add industry-specific templates if needed

## 📝 Content Management

### Case Studies
Add case studies through the admin panel or directly in Supabase. Each case study includes:
- Client information
- Challenge, solution, and results
- Key metrics with values
- Services used
- Images and testimonials

### Blog Posts
Create SEO-optimized blog posts with:
- Markdown support
- Category and tag management
- Featured images
- Read time calculation
- Social sharing

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with PM2/Docker

## 🔐 Authentication & Security

- Row Level Security (RLS) enabled on all tables
- Role-based access control (admin, team, client)
- Email verification for new accounts
- Secure API routes with middleware
- Environment variables for sensitive data

## 📈 Performance Optimization

- Next.js Image optimization
- Code splitting and lazy loading
- Framer Motion animations optimized
- Database queries indexed
- Static generation where possible

## 🐛 Troubleshooting

### Common Issues

**Database connection failed:**
- Check Supabase URL and keys in `.env.local`
- Verify RLS policies are set correctly

**Quotation builder not calculating:**
- Check service pricing data in `services-data.ts`
- Verify pricing logic in `ScopeConfiguration.tsx`

**Styling not loading:**
- Run `npm install` to ensure Tailwind is installed
- Check `tailwind.config.ts` paths configuration

## 📄 License

This project is proprietary software for AstraVeda.

## 🤝 Support

For support, email support@astraveda.com or open an issue in the repository.

---

Built with ❤️ by AstraVeda Team

