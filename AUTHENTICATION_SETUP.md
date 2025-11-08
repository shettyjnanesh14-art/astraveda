# Authentication Setup Guide

## ✅ What's Been Built

I've implemented a complete authentication system for AstraVeda:

### **Features:**
- ✅ User registration and login
- ✅ Password reset functionality  
- ✅ Protected routes (client portal, admin)
- ✅ Role-based access control (admin, team, client)
- ✅ User profile management
- ✅ Session management
- ✅ Auth state in navigation

---

## 🔧 Supabase Authentication Configuration

### **Step 1: Enable Email Authentication**

1. Go to: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/providers
2. Ensure **Email** provider is enabled
3. Configure email settings:
   - ✅ Enable Email Confirmations (recommended)
   - ✅ Enable Secure Email Change
   - ✅ Double Confirm Email Changes

### **Step 2: Configure Auth URLs**

1. Go to: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/url-configuration
2. Add these URLs:

**Site URL:**
```
http://localhost:3000
```

**Redirect URLs:** (Add all of these)
```
http://localhost:3000/auth/callback
http://localhost:3000/portal
http://localhost:3000/admin
http://localhost:3000
```

### **Step 3: Configure Email Templates (Optional)**

1. Go to: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/templates
2. Customize:
   - Confirmation email
   - Password reset email
   - Magic link email

Add your branding and customize the messages!

---

## 📋 Authentication Flow

### **User Registration:**
1. User visits `/auth/signup`
2. Enters name, email, password
3. Account created in Supabase Auth
4. Profile created in `user_profiles` table
5. Email verification sent (if enabled)
6. User can login immediately

### **User Login:**
1. User visits `/auth/login`
2. Enters email and password
3. Session created (1-hour access token)
4. Redirected to `/portal`
5. Can access protected routes

### **Password Reset:**
1. User visits `/auth/forgot-password`
2. Enters email
3. Reset link sent to email
4. User clicks link
5. Redirected to reset password page
6. New password set

---

## 🔐 Security Features

### **Implemented:**
- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **Row Level Security** - Database-level security
- ✅ **Role-Based Access** - Admin/Team/Client roles
- ✅ **Protected Routes** - Auth required for portal/admin
- ✅ **Session Management** - 1-hour access tokens
- ✅ **Password Hashing** - Supabase handles securely
- ✅ **Email Verification** - Optional but recommended

### **Best Practices:**
- ✅ Passwords never stored in plain text
- ✅ Service role key only used server-side
- ✅ Anon key safe for client-side
- ✅ Automatic session refresh
- ✅ Logout clears all sessions

---

## 👥 User Roles

### **Client (Default)**
- Access to client portal
- View own data only
- Approve content
- View reports

### **Team**
- All client permissions
- View all clients
- Manage quotations
- View analytics

### **Admin**
- All permissions
- Manage users
- Configure services
- Access admin dashboard
- View all data

---

## 🎯 Testing Authentication

### **Test User Registration:**

1. Visit: http://localhost:3000/auth/signup
2. Create account with:
   - Name: Test User
   - Email: test@example.com
   - Password: test123456
3. Check Supabase Auth dashboard for new user

### **Test Login:**

1. Visit: http://localhost:3000/auth/login
2. Login with credentials above
3. Should redirect to /portal
4. Check navigation - shows user avatar

### **Test Protected Routes:**

1. **Without login:**
   - Visit http://localhost:3000/portal
   - Should redirect to /auth/login

2. **With login:**
   - Visit http://localhost:3000/portal
   - Should show dashboard

### **Test Sign Out:**

1. Click user avatar in navigation
2. Click "Sign Out"
3. Should redirect to home
4. Portal access should require login again

---

## 📊 Check Users in Supabase

### **View All Users:**
https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/users

### **View User Profiles:**
https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/editor

Click on `user_profiles` table

---

## 🛠️ Create Admin User

To make yourself an admin:

**Method 1: In Supabase Dashboard**
1. Go to: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/editor
2. Click `user_profiles` table
3. Find your user
4. Edit `role` field to `admin`
5. Save

**Method 2: SQL Query**
```sql
-- Replace with your email
UPDATE user_profiles 
SET role = 'admin' 
WHERE id = (
  SELECT id FROM auth.users WHERE email = 'your@email.com'
);
```

Run in: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/sql

---

## 🎨 Customization

### **Change Token Expiry:**

1. Go to: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/configuration
2. Update JWT expiry
3. Default: 3600 seconds (1 hour)
4. Recommended: 3600-86400 seconds

### **Email Templates:**

Customize in: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/templates

Add your branding:
- Logo
- Colors
- Custom messages
- Company name

---

## 🐛 Troubleshooting

### **"Email not confirmed"**
- Check email for confirmation link
- Or disable email confirmation in Supabase settings

### **"Invalid login credentials"**
- Check email/password are correct
- Verify user exists in Supabase Auth

### **"Session expired"**
- Token expired after 1 hour
- User will be auto-redirected to login

### **"Unauthorized"**
- Check RLS policies in Supabase
- Verify user role is set correctly

---

## 📝 Available Auth Pages

| Page | URL | Purpose |
|------|-----|---------|
| **Login** | `/auth/login` | User login |
| **Signup** | `/auth/signup` | New account creation |
| **Forgot Password** | `/auth/forgot-password` | Password reset |
| **Client Portal** | `/portal` | Client dashboard |
| **Admin Dashboard** | `/admin` | Admin only |
| **Settings** | `/portal/settings` | User profile |

---

## 🔗 Quick Links

| Resource | URL |
|----------|-----|
| **Auth Users** | https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/users |
| **Auth Settings** | https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/configuration |
| **Email Templates** | https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/templates |
| **URL Config** | https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/auth/url-configuration |

---

## 🎉 Your Authentication is Ready!

**What's working:**
- ✅ User registration
- ✅ Login/Logout
- ✅ Password reset
- ✅ Protected routes
- ✅ User profiles
- ✅ Role-based access
- ✅ Session management

**Test it now:**
1. Visit http://localhost:3000/auth/signup
2. Create an account
3. Explore the portal!

---

**Authentication system is production-ready!** 🚀

