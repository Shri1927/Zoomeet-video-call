# Render Deployment Guide

## Environment Variables Required

Set these environment variables in your Render dashboard:

### Backend Environment Variables:
- `PORT` - Render will set this automatically
- `JWT_SECRET_KEY` - Your JWT secret key
- `MONGODB_URI` - Your MongoDB connection string
- `STEAM_API_KEY` - Your Stream Chat API key
- `STEAM_API_SECRET` - Your Stream Chat API secret
- `NODE_ENV` - Set to "production"

### Frontend Environment Variables:
- `VITE_API_URL` - Your backend API URL (e.g., https://your-app.onrender.com/api)

## Build Configuration

The build process will:
1. Install backend dependencies
2. Install frontend dependencies (including Vite)
3. Build the frontend for production
4. Start the backend server

## Troubleshooting

If you encounter "vite: not found" error:
- Ensure all build dependencies are in `dependencies` not `devDependencies`
- Check that the build command is running from the correct directory
- Verify that all required environment variables are set
