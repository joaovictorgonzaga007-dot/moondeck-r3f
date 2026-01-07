const mongoose = require('mongoose')

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  whatsapp: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: false
  },
  vesselType: {
    type: String,
    required: true
  },
  vesselId: {
    type: String,
    required: false
  },
  pattern: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'in-progress', 'completed', 'cancelled'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Lead', leadSchema)