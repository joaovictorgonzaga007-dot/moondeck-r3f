# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
Currently, the API does not require authentication. Future versions will implement JWT-based authentication.

---

## Vessels API

### Get All Vessels
```http
GET /api/vessels
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Luxury Yacht",
    "type": "yacht",
    "description": "Premium luxury yacht",
    "dimensions": {
      "length": 50,
      "width": 15,
      "height": 12
    },
    "createdAt": "2026-01-01T00:00:00.000Z"
  }
]
```

### Get Vessel by ID
```http
GET /api/vessels/:id
```

**Response:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Luxury Yacht",
  "type": "yacht",
  "description": "Premium luxury yacht",
  "dimensions": {
    "length": 50,
    "width": 15,
    "height": 12
  }
}
```

### Create Vessel
```http
POST /api/vessels
```

**Request Body:**
```json
{
  "name": "New Yacht",
  "type": "yacht",
  "description": "Custom yacht",
  "dimensions": {
    "length": 45,
    "width": 12,
    "height": 10
  }
}
```

---

## Flooring API

### Get All Configurations
```http
GET /api/flooring
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439012",
    "vesselId": "507f1f77bcf86cd799439011",
    "pattern": "teak",
    "color1": "#8B4513",
    "color2": "#000000",
    "lineWidth": 0.02,
    "createdAt": "2026-01-01T00:00:00.000Z"
  }
]
```

### Save Configuration
```http
POST /api/flooring
```

**Request Body:**
```json
{
  "vesselId": "507f1f77bcf86cd799439011",
  "pattern": "diamond",
  "color1": "#8B4513",
  "color2": "#FFFFFF",
  "lineWidth": 0.03
}
```

---

## Reviews API

### Get Approved Reviews
```http
GET /api/reviews/approved
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439013",
    "name": "John Smith",
    "rating": 5,
    "text": "Amazing service!",
    "approved": true,
    "createdAt": "2026-01-01T00:00:00.000Z"
  }
]
```

### Submit Review
```http
POST /api/reviews
```

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "rating": 5,
  "text": "Excellent product!",
  "vesselType": "yacht"
}
```

---

## Contact API

### Submit Contact Form
```http
POST /api/contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "I'm interested in customizing my yacht."
}
```

**Response:**
```json
{
  "message": "Contact request submitted successfully",
  "contact": {
    "_id": "507f1f77bcf86cd799439014",
    "name": "John Doe",
    "email": "john@example.com",
    "status": "new"
  }
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "error": "Validation error message"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Something went wrong!"
}
```

---

## WebSocket Events

### Chat Message
```javascript
// Client sends
socket.emit('chatMessage', {
  text: 'Hello',
  sender: 'user'
})

// Server broadcasts
socket.on('chatMessage', (message) => {
  console.log(message)
})
```

### Configuration Update
```javascript
// Client sends
socket.emit('configUpdate', {
  pattern: 'teak',
  color1: '#8B4513'
})

// Other clients receive
socket.on('configUpdate', (config) => {
  console.log(config)
})
```
