# Installation Guide

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env` file and update with your settings
   - Set MongoDB connection string
   - Configure JWT secret

4. Seed the database (optional):
```bash
node ../database/seed.js
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env` file and update with your settings
   - Set API URL (default: http://localhost:5000/api)
   - Set WhatsApp number

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000`

## MongoDB Setup

1. Install MongoDB locally or use MongoDB Atlas (cloud)

2. Start MongoDB service:
```bash
mongod
```

3. The application will automatically create the database and collections

## Verification

1. Open your browser and navigate to `http://localhost:3000`
2. You should see the Vessel Customization Platform homepage
3. Test the customizer by clicking "Start Customizing"
4. Verify 3D viewer loads and responds to mouse interactions

## Troubleshooting

### Backend Issues
- Ensure MongoDB is running
- Check `.env` file configuration
- Verify port 5000 is not in use

### Frontend Issues
- Clear browser cache
- Check console for errors
- Verify backend is running
- Ensure API URL in `.env` is correct

### 3D Viewer Issues
- Update graphics drivers
- Try a different browser (Chrome recommended)
- Check WebGL support: visit `https://get.webgl.org/`

## Production Deployment

For production deployment:

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Set `NODE_ENV=production` in backend `.env`

3. Use a process manager like PM2:
```bash
pm2 start backend/src/server.js
```

4. Configure reverse proxy (nginx/Apache)

5. Set up SSL certificates

6. Use MongoDB Atlas for production database
