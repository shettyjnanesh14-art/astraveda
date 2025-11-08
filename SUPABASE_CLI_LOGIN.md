# Supabase CLI Login & Setup

## ✅ Supabase CLI is Installed!

Version: **2.54.11** ✅

---

## 🔐 Login to Supabase CLI

### **Step 1: Run Login Command**

Open your Terminal and run:

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
supabase login
```

**What happens:**
- Opens browser for authentication
- You'll login to your Supabase account
- Grants CLI access to your projects

---

### **Step 2: Link to Your Project**

After logging in:

```bash
cd /Users/jnaneshshetty/Desktop/Astraveda
supabase link --project-ref nzthhzcluswivbxmvetr
```

**You'll be asked for database password** - this is the password you set when creating the Supabase project.

---

### **Step 3: Verify It Works**

```bash
supabase status
```

You should see your project details!

---

## 🎯 Once Linked - Available Commands

### **Database Management:**

```bash
# Execute SQL file directly
supabase db execute -f lib/database-schema.sql

# Push migrations
supabase db push

# Reset database (careful!)
supabase db reset

# Dump database schema
supabase db dump
```

### **Type Generation:**

```bash
# Generate TypeScript types from your database
supabase gen types typescript --linked > lib/database.types.ts
```

### **Project Info:**

```bash
# Check status
supabase status

# List all functions
supabase functions list

# View logs
supabase functions logs
```

---

## 💡 Alternative: Keep Using Custom CLI

If you don't want to login, you can continue using our custom Node.js CLI:

```bash
# Works without authentication
node scripts/supabase-cli.js status
node scripts/supabase-cli.js tables
node scripts/supabase-cli.js dashboard
node scripts/supabase-cli.js editor
```

---

## 🚀 Quick Test

Run this comprehensive test:

```bash
./scripts/test-all.sh
```

Shows status of:
- ✅ Environment variables
- ✅ Database connection
- ✅ Tables
- ✅ Dev server
- ✅ Git repository
- ✅ Dependencies

---

## 📊 Your Project Info

**Project Reference:** `nzthhzcluswivbxmvetr`
**Project URL:** https://nzthzhclsuswivbxmvetr.supabase.co
**Dashboard:** https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr

---

## ⚙️ Add Supabase to PATH Permanently

To use `supabase` command from any terminal:

```bash
# Add to your shell profile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile

# Reload your shell
source ~/.zprofile

# Test it
supabase --version
```

---

## 🎯 Recommended Next Steps

### **Option A: Login & Link (Full Features)**
```bash
supabase login
supabase link --project-ref nzthhzcluswivbxmvetr
```

### **Option B: Use Custom CLI (No Login Needed)**
```bash
node scripts/supabase-cli.js help
```

Both work great! Choose what's most convenient for you.

---

## 🆘 Troubleshooting

**"Command not found: supabase"**
```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
supabase --version
```

**"Unauthorized" error**
```bash
supabase login
# Then try linking again
```

**"Database password required"**
- Use the password you set when creating Supabase project
- Find it in your Supabase project settings

---

**Your CLI is ready! Login when you're ready to use advanced features!** 🚀

