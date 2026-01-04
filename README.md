# Vessel Customization Platform

A full-stack web application for customizing vessels with EVA flooring, featuring real-time 3D visualization, chatbot integration, and WhatsApp contact flow.

## Features

- **Vessel Selection Module**: Browse and select from various vessel types
- **EVA Flooring Customization**: Interactive flooring pattern selection and customization
- **3D/360° Viewer**: Real-time 3D visualization with rotation, zoom, and touch interaction
- **Chatbot Integration**: AI-powered assistance for users
- **WhatsApp Contact Flow**: Direct communication channel
- **Reviews & Testimonials**: Customer feedback section
- **Location/Map Section**: Find us easily
- **Responsive Design**: Optimized for desktop and mobile

## Tech Stack

### Frontend
- React.js
- Three.js (3D rendering)
- React Three Fiber
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Socket.io (real-time features)

## Project Structure

```
vessel-customization-platform/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── VesselSelector/
│   │   │   ├── FlooringCustomizer/
│   │   │   ├── Viewer3D/
│   │   │   ├── Chatbot/
│   │   │   ├── ContactFlow/
│   │   │   ├── Reviews/
│   │   │   ├── LocationMap/
│   │   │   └── Layout/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   └── hooks/
│   └── public/
├── backend/
│   └── src/
│       ├── routes/
│       ├── controllers/
│       ├── models/
│       ├── middleware/
│       └── services/
└── database/
```

## Installation

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

## Development

This is an MVP (Minimum Viable Product) delivered for immediate functionality. The architecture is modular and scalable, making it easy to add new vessels, flooring patterns, and features.

## Future Enhancements

- Advanced material customization
- AR/VR support
- Payment integration
- User accounts and saved configurations
- Admin dashboard

## License

MIT License
