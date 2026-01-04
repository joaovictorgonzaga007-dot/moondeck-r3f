const mongoose = require('mongoose')

const vesselSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['yacht', 'sailboat', 'speedboat', 'catamaran']
  },
  description: {
    type: String,
    required: true
  },
  dimensions: {
    length: Number,
    width: Number,
    height: Number
  },
  modelUrl: String,
  thumbnailUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Vessel', vesselSchema)
