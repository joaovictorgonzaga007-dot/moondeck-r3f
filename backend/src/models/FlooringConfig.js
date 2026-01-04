const mongoose = require('mongoose')

const flooringConfigSchema = new mongoose.Schema({
  userId: String,
  vesselId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vessel'
  },
  pattern: {
    type: String,
    required: true,
    enum: ['teak', 'diamond', 'herringbone', 'solid']
  },
  color1: {
    type: String,
    required: true
  },
  color2: {
    type: String,
    required: true
  },
  lineWidth: {
    type: Number,
    default: 0.02
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('FlooringConfig', flooringConfigSchema)
