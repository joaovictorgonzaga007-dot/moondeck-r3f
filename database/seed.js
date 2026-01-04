// Database seeding script
const mongoose = require('mongoose')
const Vessel = require('../backend/src/models/Vessel')
const Review = require('../backend/src/models/Review')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vessel-customization'

const vessels = [
  {
    name: 'Luxury Yacht',
    type: 'yacht',
    description: 'Premium luxury yacht with spacious deck',
    dimensions: { length: 50, width: 15, height: 12 }
  },
  {
    name: 'Classic Sailboat',
    type: 'sailboat',
    description: 'Traditional sailboat for ocean adventures',
    dimensions: { length: 35, width: 10, height: 25 }
  },
  {
    name: 'Speed Cruiser',
    type: 'speedboat',
    description: 'High-performance speedboat',
    dimensions: { length: 25, width: 8, height: 6 }
  },
  {
    name: 'Twin Hull Catamaran',
    type: 'catamaran',
    description: 'Stable and spacious catamaran',
    dimensions: { length: 40, width: 20, height: 10 }
  }
]

const reviews = [
  {
    name: 'John Smith',
    email: 'john@example.com',
    rating: 5,
    text: 'Absolutely amazing service! The 3D customizer made it so easy to visualize my yacht flooring.',
    vesselType: 'yacht',
    approved: true
  },
  {
    name: 'Maria Garcia',
    email: 'maria@example.com',
    rating: 5,
    text: 'Best EVA flooring I\'ve ever had. The teak pattern looks incredibly realistic.',
    vesselType: 'sailboat',
    approved: true
  },
  {
    name: 'David Chen',
    email: 'david@example.com',
    rating: 4,
    text: 'Great product and excellent customer service. Highly recommend!',
    vesselType: 'speedboat',
    approved: true
  }
]

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('Connected to MongoDB')

    // Clear existing data
    await Vessel.deleteMany({})
    await Review.deleteMany({})
    console.log('Cleared existing data')

    // Insert vessels
    await Vessel.insertMany(vessels)
    console.log('Vessels seeded')

    // Insert reviews
    await Review.insertMany(reviews)
    console.log('Reviews seeded')

    console.log('Database seeding completed successfully')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
