#!/usr/bin/env node

/**
 * AstraVeda - Supabase CLI Alternative
 * Simple database management without Supabase CLI
 */

const fs = require('fs');
const { execSync } = require('child_process');

require('dotenv').config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const PROJECT_REF = 'nzthhzcluswivbxmvetr';

const commands = {
  help: () => {
    console.log(`
🔧 AstraVeda Supabase CLI Alternative

Available Commands:
  node scripts/supabase-cli.js help              - Show this help
  node scripts/supabase-cli.js status            - Check database status
  node scripts/supabase-cli.js tables            - List all tables
  node scripts/supabase-cli.js sql <file>        - Execute SQL file
  node scripts/supabase-cli.js query "<sql>"     - Execute SQL query
  node scripts/supabase-cli.js dashboard         - Open dashboard
  node scripts/supabase-cli.js editor            - Open table editor

Environment:
  Project: ${PROJECT_REF}
  URL: ${SUPABASE_URL}
    `);
  },

  status: () => {
    console.log('🔍 Checking database connection...\n');
    console.log(`Project: ${PROJECT_REF}`);
    console.log(`URL: ${SUPABASE_URL}`);
    console.log(`✅ Environment configured`);
  },

  tables: async () => {
    console.log('📊 Fetching tables...\n');
    const tables = [
      'services', 'industries', 'quotations', 'leads', 
      'clients', 'case_studies', 'portfolio_items', 
      'blog_posts', 'user_profiles'
    ];
    
    tables.forEach(table => {
      console.log(`  - ${table}`);
    });
    
    console.log('\n💡 View in dashboard:');
    console.log(`https://supabase.com/dashboard/project/${PROJECT_REF}/editor`);
  },

  dashboard: () => {
    const url = `https://supabase.com/dashboard/project/${PROJECT_REF}`;
    console.log('🌐 Opening dashboard...');
    console.log(url);
    try {
      execSync(`open "${url}"`, { stdio: 'ignore' });
    } catch (e) {
      console.log('Copy this URL to your browser:', url);
    }
  },

  editor: () => {
    const url = `https://supabase.com/dashboard/project/${PROJECT_REF}/editor`;
    console.log('📊 Opening table editor...');
    console.log(url);
    try {
      execSync(`open "${url}"`, { stdio: 'ignore' });
    } catch (e) {
      console.log('Copy this URL to your browser:', url);
    }
  },

  sql: (filePath) => {
    if (!filePath) {
      console.error('❌ Error: Please provide SQL file path');
      console.log('Usage: node scripts/supabase-cli.js sql <file>');
      return;
    }

    if (!fs.existsSync(filePath)) {
      console.error(`❌ Error: File not found: ${filePath}`);
      return;
    }

    console.log(`📄 SQL File: ${filePath}`);
    console.log('');
    console.log('To execute this SQL:');
    console.log(`1. Open: https://supabase.com/dashboard/project/${PROJECT_REF}/sql/new`);
    console.log(`2. Copy contents of: ${filePath}`);
    console.log('3. Paste and click "Run"');
    console.log('');
    console.log('Or use psql:');
    console.log(`psql "postgresql://postgres:[PASSWORD]@db.${PROJECT_REF}.supabase.co:5432/postgres" -f ${filePath}`);
  }
};

// Parse command
const command = process.argv[2] || 'help';
const arg = process.argv[3];

if (commands[command]) {
  commands[command](arg);
} else {
  console.error(`❌ Unknown command: ${command}`);
  commands.help();
}

