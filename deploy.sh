#!/bin/bash

echo "🚀 Starting deployment process..."

# Build the frontend
echo "📦 Building frontend..."
cd client
npm run build
cd ..

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful!"
else
    echo "❌ Frontend build failed!"
    exit 1
fi

# Install dependencies if needed
echo "📥 Installing dependencies..."
npm install

echo "🎉 Project is ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Push your code to GitHub"
echo "2. Go to https://vercel.com"
echo "3. Import your repository"
echo "4. Set environment variables:"
echo "   - MONGO_URI: your_mongodb_connection_string"
echo "   - JWT_SECRET: your_jwt_secret"
echo "   - NODE_ENV: production"
echo "5. Deploy!"
echo ""
echo "After deployment, update the CORS origin in server.js with your Vercel domain."
