const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const http = require('http')
const socketIo = require('socket.io')

// Load environment variables
dotenv.config()

// Import routes
const vesselRoutes = require('./routes/vesselRoutes')
const flooringRoutes = require('./routes/flooringRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const contactRoutes = require('./routes/contactRoutes')

const app = express()
const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vessel-customization'
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err))

// Routes
app.use('/api/vessels', vesselRoutes)
app.use('/api/flooring', flooringRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/contact', contactRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// Socket.io for real-time features
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id)

  socket.on('chatMessage', (message) => {
    // Broadcast chat message
    io.emit('chatMessage', message)
  })

  socket.on('configUpdate', (config) => {
    // Broadcast configuration updates
    socket.broadcast.emit('configUpdate', config)
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id)
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
