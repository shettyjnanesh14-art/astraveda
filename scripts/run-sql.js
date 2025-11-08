#!/usr/bin/env node

/**
 * AstraVeda - Database SQL Runner
 * Run SQL migrations from command line
 * 
 * Usage: node scripts/run-sql.js <sql-file>
 * Example: node scripts/run-sql.js lib/database-schema.sql
 */

const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Check if SQL file is provided
if (process.argv.length < 3) {
  console.error('❌ Error: No SQL file specified');
  console.log('Usage: node scripts/run-sql.js <sql-file>');
  console.log('Example: node scripts/run-sql.js lib/database-schema.sql');
  process.exit(1);
}

const sqlFilePath = process.argv[2];

// Check if file exists
if (!fs.existsSync(sqlFilePath)) {
  console.error(`❌ Error: File not found: ${sqlFilePath}`);
  process.exit(1);
}

// Read SQL file
const sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

console.log('🔧 AstraVeda Database SQL Runner');
console.log('');
console.log(`📄 File: ${sqlFilePath}`);
console.log(`🔗 Database: ${process.env.NEXT_PUBLIC_SUPABASE_URL}`);
console.log('');

// Execute SQL via Supabase REST API
const executeSQL = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/query`,
      {
        method: 'POST',
        headers: {
          'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: sqlContent })
      }
    );

    if (response.ok) {
      console.log('✅ SQL executed successfully!');
      const result = await response.json();
      console.log('Result:', JSON.stringify(result, null, 2));
    } else {
      console.error('❌ Error executing SQL');
      console.error('Status:', response.status);
      const error = await response.text();
      console.error('Error:', error);
      
      console.log('');
      console.log('💡 Alternative: Run SQL directly in Supabase Dashboard');
      console.log('👉 https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/sql');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('');
    console.log('💡 For manual execution, copy SQL and run in Supabase Dashboard:');
    console.log('👉 https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/sql');
  }
};

executeSQL();

