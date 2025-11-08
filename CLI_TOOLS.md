# AstraVeda CLI Tools Guide

## 🎯 Quick Reference

You have **two CLI options** for managing your Supabase database:

---

## Option 1: Custom Node.js CLI (✅ Works Now!)

### **Available Commands:**

```bash
# Show help
node scripts/supabase-cli.js help

# Check database status
node scripts/supabase-cli.js status

# List all tables
node scripts/supabase-cli.js tables

# Open Supabase dashboard
node scripts/supabase-cli.js dashboard

# Open table editor
node scripts/supabase-cli.js editor

# Execute SQL file
node scripts/supabase-cli.js sql lib/database-schema.sql
```

### **Examples:**

```bash
# Check what tables you have
node scripts/supabase-cli.js tables

# Open dashboard to view data
node scripts/supabase-cli.js dashboard

# Open editor to add/edit records
node scripts/supabase-cli.js editor
```

---

## Option 2: Official Supabase CLI (Requires Homebrew)

### **Installation:**

```bash
# 1. Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 2. Add Homebrew to PATH (if needed)
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# 3. Install Supabase CLI
brew install supabase/tap/supabase

# 4. Verify installation
supabase --version
```

### **Setup:**

```bash
# Login to Supabase
supabase login

# Link to your project
cd /Users/jnaneshshetty/Desktop/Astraveda
supabase link --project-ref nzthhzcluswivbxmvetr
```

### **Common Commands:**

```bash
# Check project status
supabase status

# List all tables
supabase db list

# Execute SQL file
supabase db execute -f lib/database-schema.sql

# Run migrations
supabase db push

# Generate TypeScript types
supabase gen types typescript --local > lib/database.types.ts

# View logs
supabase functions logs

# Reset database (careful!)
supabase db reset
```

---

## 🗂️ Database Management Tasks

### **View Your Data:**

**Method 1: Dashboard (Easy)**
```bash
node scripts/supabase-cli.js dashboard
```

**Method 2: Table Editor**
```bash
node scripts/supabase-cli.js editor
```

**Method 3: Direct URL**
```
https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/editor
```

### **Add Sample Data:**

```bash
# Create a migration file
echo "INSERT INTO services (name, slug, description, base_price, category) 
VALUES ('Social Media Management', 'social-media', 'Complete social media solution', 25000, 'social');" > migrations/add-sample-data.sql

# Run it (if using official CLI)
supabase db execute -f migrations/add-sample-data.sql

# Or use custom CLI
node scripts/supabase-cli.js sql migrations/add-sample-data.sql
```

### **Run Migrations:**

```bash
# Using official CLI
supabase db push

# Using custom CLI (opens SQL editor)
node scripts/supabase-cli.js sql your-migration.sql
```

---

## 📊 Database Health Check

Check if all tables are accessible:

```bash
node scripts/check-database.js
```

Expected output:
```
✅ services             - 0 records
✅ industries           - 0 records
✅ quotations           - 0 records
✅ leads                - 0 records
✅ clients              - 0 records
✅ case_studies         - 0 records
✅ portfolio_items      - 0 records
✅ blog_posts           - 0 records
✅ user_profiles        - 0 records
```

---

## 🔧 Troubleshooting

### **Command Not Found: supabase**

Install Supabase CLI:
```bash
brew install supabase/tap/supabase
```

### **Command Not Found: brew**

Install Homebrew first:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### **Permission Denied**

Make scripts executable:
```bash
chmod +x scripts/*.sh scripts/*.js
```

### **Cannot Find Module**

Install dependencies:
```bash
npm install
```

---

## 🚀 Quick Start Workflow

### **Daily Development:**

```bash
# 1. Start dev server
npm run dev

# 2. Check database status
node scripts/supabase-cli.js status

# 3. View data in browser
node scripts/supabase-cli.js editor

# 4. Make changes in your app
# 5. View saved data in Supabase dashboard
```

### **Adding New Features:**

```bash
# 1. Create migration file
# migrations/add-new-feature.sql

# 2. Test locally first
node scripts/supabase-cli.js sql migrations/add-new-feature.sql

# 3. Verify in dashboard
node scripts/supabase-cli.js editor

# 4. Commit to Git
git add migrations/add-new-feature.sql
git commit -m "Add new feature"
git push
```

---

## 📚 Useful Links

| Resource | URL |
|----------|-----|
| **Dashboard** | https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr |
| **Table Editor** | https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/editor |
| **SQL Editor** | https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/sql |
| **API Docs** | https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/api |
| **Supabase CLI Docs** | https://supabase.com/docs/guides/cli |

---

## 💡 Pro Tips

1. **Use Custom CLI for Quick Tasks**
   - Fast and simple
   - No installation required
   - Works immediately

2. **Use Official CLI for Advanced Features**
   - Type generation
   - Migration management
   - Local development
   - CI/CD integration

3. **Always Test in Dashboard First**
   - Visual interface
   - Easy to verify
   - No command line errors

4. **Keep Migrations in Version Control**
   - Create `migrations/` folder
   - Name files with timestamps
   - Commit all schema changes

---

## ✅ CLI Commands Cheat Sheet

```bash
# Custom CLI (Always Available)
node scripts/supabase-cli.js help
node scripts/supabase-cli.js status
node scripts/supabase-cli.js tables
node scripts/supabase-cli.js dashboard
node scripts/supabase-cli.js editor

# Official CLI (After Installation)
supabase login
supabase link --project-ref nzthhzcluswivbxmvetr
supabase db execute -f migrations/file.sql
supabase db push
supabase gen types typescript
supabase status

# Database Health Check
node scripts/check-database.js

# Execute SQL
node scripts/run-sql.js your-file.sql
```

---

**Your database is fully set up and ready to use!** 🎉

Choose whichever CLI method you prefer and start building! 🚀

