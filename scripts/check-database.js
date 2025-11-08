#!/usr/bin/env node

/**
 * AstraVeda - Database Health Check
 * Verify all tables exist and are accessible
 */

require('dotenv').config({ path: '.env.local' });

const checkDatabase = async () => {
  console.log('🔍 AstraVeda Database Health Check');
  console.log('');
  console.log(`🔗 Database: ${process.env.NEXT_PUBLIC_SUPABASE_URL}`);
  console.log('');

  const tables = [
    'services',
    'industries',
    'quotations',
    'leads',
    'clients',
    'case_studies',
    'portfolio_items',
    'blog_posts',
    'user_profiles'
  ];

  let allGood = true;

  for (const table of tables) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${table}?select=count`,
        {
          headers: {
            'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          }
        }
      );

      if (response.ok) {
        const data = await response.json();
        const count = data.length;
        console.log(`✅ ${table.padEnd(20)} - ${count} records`);
      } else {
        console.log(`❌ ${table.padEnd(20)} - Error: ${response.status}`);
        allGood = false;
      }
    } catch (error) {
      console.log(`❌ ${table.padEnd(20)} - Error: ${error.message}`);
      allGood = false;
    }
  }

  console.log('');
  if (allGood) {
    console.log('🎉 All tables are accessible!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Test quotation builder: http://localhost:3000/pricing');
    console.log('2. View data: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/editor');
  } else {
    console.log('⚠️  Some tables have issues. Check Supabase dashboard.');
  }
};

checkDatabase();

