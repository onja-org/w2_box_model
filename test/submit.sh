#!/bin/bash

echo "🔍 Running submission checks..."

# Run the test script
npm test

# Check if required files exist
if [[ -f "index.html" && -f "styles.css" ]]; then
  echo "✅ Required files found."
else
  echo "❌ index.html or styles.css is missing!"
  exit 1
fi

echo "📤 Submission complete!"
