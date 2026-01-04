# Architecture Documentation

## System Overview

The Vessel Customization Platform is a full-stack web application built with a modern, modular architecture that separates concerns and enables scalability.

## Architecture Principles

1. **Modular Design**: Each component is self-contained and reusable
2. **Separation of Concerns**: Clear boundaries between UI, logic, data, and rendering
3. **Scalability**: Easy to add new vessels, patterns, and features
4. **Performance**: Optimized 3D rendering and responsive design
5. **Maintainability**: Clean code structure with clear naming conventions

## Technology Stack

### Frontend
- **React 18**: UI framework with hooks and functional components
- **Vite**: Fast build tool and development server
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls
- **Socket.io Client**: Real-time communication

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **Socket.io**: Real-time bidirectional communication
- **JWT**: Authentication tokens
- **bcryptjs**: Password hashing

## Project Structure

```
vessel-customization-platform/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── VesselSelector/   # Vessel selection UI
│   │   │   ├── FlooringCustomizer/ # Flooring customization controls
│   │   │   ├── Viewer3D/         # 3D visualization component
│   │   │   ├── Chatbot/          # AI chatbot interface
│   │   │   ├── ContactFlow/      # Contact form with WhatsApp
│   │   │   ├── Reviews/          # Customer reviews display
│   │   │   ├── LocationMap/      # Location and map section
│   │   │   └── Layout/           # Header, Footer, Navigation
│   │   ├── pages/            # Page components
│   │   │   ├── HomePage.jsx      # Landing page
│   │   │   └── CustomizerPage.jsx # Main customization interface
│   │   ├── services/         # API service layer
│   │   │   └── api.js            # API client configuration
│   │   ├── utils/            # Utility functions
│   │   │   └── helpers.js        # Helper functions
│   │   ├── hooks/            # Custom React hooks
│   │   │   ├── useVesselData.js  # Vessel data management
│   │   │   └── useFlooringConfig.js # Flooring config state
│   │   ├── App.jsx           # Main application component
│   │   └── main.jsx          # Application entry point
│   └── public/              # Static assets
│
├── backend/                # Node.js backend application
│   └── src/
│       ├── routes/          # API route definitions
│       │   ├── vesselRoutes.js
│       │   ├── flooringRoutes.js
│       │   ├── reviewRoutes.js
│       │   └── contactRoutes.js
│       ├── controllers/     # Business logic
│       │   ├── vesselController.js
│       │   ├── flooringController.js
│       │   ├── reviewController.js
│       │   └── contactController.js
│       ├── models/          # Database schemas
│       │   ├── Vessel.js
│       │   ├── FlooringConfig.js
│       │   ├── Review.js
│       │   └── Contact.js
│       ├── middleware/      # Express middleware
│       ├── services/        # External services integration
│       └── server.js        # Server entry point
│
└── database/              # Database scripts
    ├── schema.sql         # Database schema reference
    └── seed.js            # Database seeding script
```

## Data Flow

1. **User Interaction**: User interacts with React components
2. **State Management**: React hooks manage local state
3. **API Calls**: Services layer makes HTTP requests to backend
4. **Backend Processing**: Express routes handle requests
5. **Database Operations**: Mongoose models interact with MongoDB
6. **Response**: Data flows back through the same path
7. **UI Update**: React re-renders with new data

## 3D Rendering Pipeline

1. **Configuration**: User selects vessel and flooring options
2. **Texture Generation**: Canvas API creates flooring texture based on pattern
3. **Three.js Scene**: Scene is constructed with vessel model and flooring
4. **React Three Fiber**: Renders Three.js scene in React component
5. **Interaction**: OrbitControls enable rotation, zoom, and pan
6. **Real-time Updates**: Changes trigger texture regeneration and re-render

## API Endpoints

### Vessels
- `GET /api/vessels` - Get all vessels
- `GET /api/vessels/:id` - Get vessel by ID
- `POST /api/vessels` - Create new vessel
- `PUT /api/vessels/:id` - Update vessel
- `DELETE /api/vessels/:id` - Delete vessel

### Flooring
- `GET /api/flooring` - Get all configurations
- `GET /api/flooring/:id` - Get configuration by ID
- `POST /api/flooring` - Save new configuration
- `PUT /api/flooring/:id` - Update configuration
- `DELETE /api/flooring/:id` - Delete configuration

### Reviews
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/approved` - Get approved reviews
- `POST /api/reviews` - Submit new review
- `PUT /api/reviews/:id/approve` - Approve review
- `DELETE /api/reviews/:id` - Delete review

### Contact
- `GET /api/contact` - Get all contacts
- `POST /api/contact` - Submit contact form
- `PUT /api/contact/:id/status` - Update contact status
- `DELETE /api/contact/:id` - Delete contact

## Real-time Features

Socket.io enables:
- Live chat functionality
- Real-time configuration sharing
- Collaborative customization sessions

## Security Considerations

1. **Input Validation**: All user inputs are validated
2. **CORS**: Configured to allow only trusted origins
3. **Environment Variables**: Sensitive data stored in .env files
4. **Error Handling**: Proper error messages without exposing internals

## Performance Optimizations

1. **Code Splitting**: React lazy loading for routes
2. **Memoization**: React.memo and useMemo for expensive computations
3. **Debouncing**: User input debouncing to reduce API calls
4. **3D Optimization**: Efficient geometry and texture management
5. **Caching**: API response caching where appropriate

## Scalability

### Adding New Vessels
1. Add vessel data to database
2. Optionally add custom 3D model
3. No code changes required

### Adding New Patterns
1. Add pattern to enum in FlooringConfig model
2. Add pattern rendering logic in Viewer3D component
3. Add pattern option in FlooringCustomizer component

### Adding New Features
1. Create new component in appropriate directory
2. Add route if needed
3. Create API endpoint if backend integration required
4. Update navigation/routing as needed

## Future Enhancements

1. **User Authentication**: JWT-based user accounts
2. **Payment Integration**: Stripe/PayPal for orders
3. **Advanced 3D**: Import custom vessel models
4. **AR/VR Support**: WebXR integration
5. **Admin Dashboard**: Content management system
6. **Analytics**: User behavior tracking
7. **Internationalization**: Multi-language support
8. **Progressive Web App**: Offline functionality
