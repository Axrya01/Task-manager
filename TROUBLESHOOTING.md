# 🔧 Vercel Deployment Troubleshooting

## ❌ If you get 500 Internal Server Error

### Step 1: Check Environment Variables
In Vercel dashboard, make sure these are set:
- `MONGO_URI`: `mongodb+srv://aarya:Baby1234@taskdb.laui1.mongodb.net/taskdb?retryWrites=true&w=majority&appName=taskDB`
- `JWT_SECRET`: `your-super-secret-jwt-key-2024`
- `NODE_ENV`: `production`

### Step 2: Check Vercel Logs
1. Go to your Vercel project dashboard
2. Click on "Functions" tab
3. Check the logs for error details

### Step 3: Test Health Endpoint
After deployment, test: `https://your-project.vercel.app/api/health`

### Step 4: Common Issues & Fixes

#### Issue: "MONGO_URI is not defined"
**Fix**: Add the environment variable in Vercel dashboard

#### Issue: "Module not found"
**Fix**: Make sure all dependencies are in package.json

#### Issue: "Port already in use"
**Fix**: Vercel handles this automatically, no action needed

#### Issue: "CORS errors"
**Fix**: Update CORS origin in server.js with your Vercel URL

### Step 5: Quick Fix Commands
```bash
# If you need to redeploy
git add .
git commit -m "Fix deployment issues"
git push origin main
```

## ✅ Success Indicators
- Health endpoint returns: `{"status":"healthy"}`
- Test endpoint returns: `{"message":"Backend is working!"}`
- No errors in Vercel function logs

## 🆘 Still Having Issues?
1. Check Vercel function logs
2. Verify all environment variables are set
3. Make sure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
4. Try redeploying with `git push`
