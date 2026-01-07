# Local Development Environment Setup Guide

## 🚀 Quick Start (TL;DR)

```bash
# 1. Start MongoDB
mongod

# 2. Start Backend (new terminal)
cd backend
npm run dev

# 3. Start Frontend (new terminal)
cd frontend
npm run dev

# 4. Open browser → http://localhost:3000
```

---

## 📋 Prerequisites

Before starting, ensure you have:

- ✅ **Node.js v18+** installed ([Download](https://nodejs.org/))
- ✅ **MongoDB v6+** installed ([Download](https://www.mongodb.com/try/download/community))
- ✅ **npm** (comes with Node.js) or **yarn**
- ✅ **Git** (for version control)

### Verify Installation

```bash
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
mongod --version  # Should show v6.x.x or higher
```

---

## 🗂️ Project Structure

```
vessel-customization-platform/
├── backend/              # Node.js + Express API
│   ├── src/
│   │   ├── server.js    # Main server file
│   │   ├── models/      # Mongoose models
│   │   ├── routes/      # API routes
│   │   └── controllers/ # Business logic
│   ├── .env             # Environment variables (DO NOT COMMIT)
│   ├── .env.example     # Template for .env
│   └── package.json
│
├── frontend/            # React + Vite app
│   ├── src/
│   │   ├── main.jsx     # Entry point
│   │   ├── App.jsx      # Main component
│   │   ├── components/  # React components
│   │   └── pages/       # Page components
│   ├── .env             # Environment variables (DO NOT COMMIT)
│   ├── .env.example     # Template for .env
│   └── package.json
│
└── database/            # Database scripts
    └── seed.js          # Seed data script
```

---

## 🔧 Step-by-Step Setup

### Step 1: Clone Repository (if not already done)

```bash
git clone <repository-url>
cd vessel-customization-platform
```

### Step 2: Environment Variables Setup

#### Backend Environment Variables

```bash
cd backend

# If .env doesn't exist, copy from example
cp .env.example .env

# Edit .env file with your preferred editor
# The default values work for local development
```

**Backend .env variables:**
- `PORT=5000` - Server port
- `MONGODB_URI=mongodb://localhost:27017/vessel-customization` - Database connection
- `JWT_SECRET=your_jwt_secret_key_here` - JWT signing key (change in production!)
- `NODE_ENV=development` - Environment mode

#### Frontend Environment Variables

```bash
cd frontend

# If .env doesn't exist, copy from example
cp .env.example .env

# Edit .env file if needed
```

**Frontend .env variables:**
- `VITE_API_URL=http://localhost:5000/api` - Backend API endpoint
- `VITE_WHATSAPP_NUMBER=1234567890` - WhatsApp contact number

### Step 3: Install Dependencies

**Note:** Dependencies are already installed if `node_modules/` folders exist. Skip this step unless you need to reinstall.

```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd frontend
npm install
```

### Step 4: Start MongoDB

#### Windows:
```bash
# Option 1: Start as Windows service
net start MongoDB

# Option 2: Start manually
mongod
```

#### macOS/Linux:
```bash
# Option 1: Start as service
sudo systemctl start mongod

# Option 2: Start manually
mongod --dbpath /path/to/data/directory
```

**Verify MongoDB is running:**
```bash
# Should connect without errors
mongosh
# Or for older versions:
mongo
```

### Step 5: (Optional) Seed Database

Populate the database with initial data:

```bash
# Option 1: Use the main seed script
cd database
node seed.js

# Option 2: Seed only vessels
cd backend/src
node seedVessels.js
```

**Expected output:**
```
MongoDB connected successfully
Database seeded successfully!
4 vessels created
5 reviews created
```

### Step 6: Start Backend Server

```bash
cd backend
npm run dev
```

**Expected output:**
```
Server running on port 5000
MongoDB connected successfully
```

**Backend is now running at:** http://localhost:5000

**Test the backend:**
```bash
# Health check endpoint
curl http://localhost:5000/api/health

# Should return:
# {"status":"OK","message":"Server is running"}
```

### Step 7: Start Frontend Server

Open a **new terminal** (keep backend running):

```bash
cd frontend
npm run dev
```

**Expected output:**
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

**Frontend is now running at:** http://localhost:3000

### Step 8: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

You should see the **Vessel Customization Platform** homepage!

---

## 🎯 Available Scripts

### Backend Scripts

```bash
cd backend

# Development mode (with auto-reload)
npm run dev

# Production mode
npm start

# Seed database
node src/seedVessels.js
```

### Frontend Scripts

```bash
cd frontend

# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔍 API Endpoints

Once the backend is running, you can access:

### Health Check
```
GET http://localhost:5000/api/health
```

### Vessels
```
GET    http://localhost:5000/api/vessels       # Get all vessels
GET    http://localhost:5000/api/vessels/:id   # Get vessel by ID
POST   http://localhost:5000/api/vessels       # Create vessel
PUT    http://localhost:5000/api/vessels/:id   # Update vessel
DELETE http://localhost:5000/api/vessels/:id   # Delete vessel
```

### Flooring Configurations
```
GET    http://localhost:5000/api/flooring
POST   http://localhost:5000/api/flooring
```

### Reviews
```
GET    http://localhost:5000/api/reviews
GET    http://localhost:5000/api/reviews/approved
POST   http://localhost:5000/api/reviews
```

### Contact
```
GET    http://localhost:5000/api/contact
POST   http://localhost:5000/api/contact
```

---

## 🐛 Troubleshooting

### Issue 1: MongoDB Connection Failed

**Error:** `MongoDB connection error`

**Solutions:**
1. Ensure MongoDB is running:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl status mongod
   ```

2. Check if MongoDB is listening on port 27017:
   ```bash
   netstat -an | findstr 27017  # Windows
   netstat -an | grep 27017     # macOS/Linux
   ```

3. Verify `MONGODB_URI` in `backend/.env`

### Issue 2: Port Already in Use

**Error:** `Port 5000 is already in use`

**Solutions:**
1. Change the port in `backend/.env`:
   ```
   PORT=5001
   ```

2. Update frontend API URL in `frontend/.env`:
   ```
   VITE_API_URL=http://localhost:5001/api
   ```

3. Or kill the process using port 5000:
   ```bash
   # Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   
   # macOS/Linux
   lsof -ti:5000 | xargs kill -9
   ```

### Issue 3: CORS Errors

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solutions:**
1. Ensure frontend is running on `http://localhost:3000`
2. Check backend CORS configuration in `backend/src/server.js`
3. If using a different port, update the CORS origin in server.js

### Issue 4: Module Not Found

**Error:** `Cannot find module 'express'` or similar

**Solution:**
```bash
# Reinstall dependencies
cd backend  # or frontend
rm -rf node_modules package-lock.json
npm install
```

### Issue 5: Vite Port Conflict

**Error:** Frontend tries to use a different port

**Solution:**
Vite will automatically use the next available port. Update your browser URL accordingly, or specify a port:

```bash
# In frontend/package.json, modify the dev script:
"dev": "vite --port 3000"
```

### Issue 6: Socket.io Connection Issues

**Error:** WebSocket connection failed

**Solutions:**
1. Ensure backend is running
2. Check browser console for errors
3. Verify `VITE_API_URL` in frontend/.env points to correct backend
4. Check firewall settings

---

## 🔐 Security Notes

### Development Environment

✅ **Safe for local development:**
- `.env` files contain placeholder values
- MongoDB is running locally without authentication
- CORS allows localhost:3000

⚠️ **DO NOT use in production without:**
1. Changing `JWT_SECRET` to a secure random string
2. Enabling MongoDB authentication
3. Restricting CORS to specific domains
4. Using HTTPS
5. Implementing rate limiting
6. Adding input validation

### Environment Files

- ✅ `.env` files are in `.gitignore` (not tracked)
- ✅ `.env.example` files are tracked (safe templates)
- ❌ **NEVER commit `.env` files to git**

---

## 📊 Development Workflow

### Typical Development Session

```bash
# Terminal 1: MongoDB
mongod

# Terminal 2: Backend
cd backend
npm run dev
# Watch for: "Server running on port 5000"
# Watch for: "MongoDB connected successfully"

# Terminal 3: Frontend
cd frontend
npm run dev
# Watch for: "Local: http://localhost:3000/"

# Terminal 4: (Optional) Run tests, seed data, etc.
```

### Making Changes

**Backend changes:**
- Edit files in `backend/src/`
- Nodemon will auto-reload the server
- Check Terminal 2 for errors

**Frontend changes:**
- Edit files in `frontend/src/`
- Vite will hot-reload the browser
- Check browser console for errors

**Database changes:**
- Edit models in `backend/src/models/`
- Restart backend server
- Re-seed database if needed

---

## 🧪 Testing the Setup

### 1. Test Backend Health
```bash
curl http://localhost:5000/api/health
# Expected: {"status":"OK","message":"Server is running"}
```

### 2. Test Database Connection
```bash
# Backend terminal should show:
# "MongoDB connected successfully"
```

### 3. Test Frontend
- Open http://localhost:3000
- Should see the homepage
- Check browser console (F12) for errors

### 4. Test Real-time Features
- Open the app in two browser windows
- Backend terminal should show:
  ```
  New client connected: <socket-id>
  New client connected: <socket-id>
  ```

### 5. Test API Endpoints
```bash
# Get all vessels
curl http://localhost:5000/api/vessels

# Should return JSON array of vessels
```

---

## 📚 Additional Resources

- **React Documentation:** https://react.dev/
- **Vite Documentation:** https://vitejs.dev/
- **Express Documentation:** https://expressjs.com/
- **MongoDB Documentation:** https://docs.mongodb.com/
- **Three.js Documentation:** https://threejs.org/docs/
- **Socket.io Documentation:** https://socket.io/docs/

---

## 🆘 Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Review the console/terminal output for error messages
3. Verify all prerequisites are installed correctly
4. Ensure all environment variables are set
5. Check that MongoDB is running
6. Verify ports 3000 and 5000 are available

---

## ✅ Checklist

Before starting development, ensure:

- [ ] Node.js v18+ installed
- [ ] MongoDB v6+ installed
- [ ] MongoDB service is running
- [ ] Backend `.env` file exists with correct values
- [ ] Frontend `.env` file exists with correct values
- [ ] Backend dependencies installed (`node_modules/` exists)
- [ ] Frontend dependencies installed (`node_modules/` exists)
- [ ] Backend server starts without errors
- [ ] Frontend server starts without errors
- [ ] Can access http://localhost:3000 in browser
- [ ] No CORS errors in browser console
- [ ] Backend health check returns OK

---

**Happy Coding! 🚀**
