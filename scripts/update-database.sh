#!/bin/bash

# AstraVeda - Database Update Script
# Use this to run SQL migrations from command line

echo "🔧 AstraVeda Database Update Tool"
echo ""

# Load environment variables
if [ -f .env.local ]; then
  export $(cat .env.local | grep -v '^#' | xargs)
else
  echo "❌ Error: .env.local not found"
  exit 1
fi

# Check if SQL file is provided
if [ -z "$1" ]; then
  echo "Usage: ./scripts/update-database.sh <sql-file>"
  echo "Example: ./scripts/update-database.sh lib/database-schema.sql"
  exit 1
fi

SQL_FILE=$1

if [ ! -f "$SQL_FILE" ]; then
  echo "❌ Error: File not found: $SQL_FILE"
  exit 1
fi

echo "📄 Reading SQL from: $SQL_FILE"
echo "🔗 Connecting to: $NEXT_PUBLIC_SUPABASE_URL"
echo ""

# Read SQL file
SQL_CONTENT=$(cat "$SQL_FILE")

# Execute SQL via Supabase REST API
curl -X POST \
  "${NEXT_PUBLIC_SUPABASE_URL}/rest/v1/rpc/exec_sql" \
  -H "apikey: ${SUPABASE_SERVICE_ROLE_KEY}" \
  -H "Authorization: Bearer ${SUPABASE_SERVICE_ROLE_KEY}" \
  -H "Content-Type: application/json" \
  -d "{\"query\": $(echo "$SQL_CONTENT" | jq -Rs .)}"

echo ""
echo ""
echo "✅ SQL execution attempted!"
echo "💡 Verify in Supabase dashboard: https://supabase.com/dashboard/project/nzthhzcluswivbxmvetr/editor"

