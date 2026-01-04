const mongoose = require('mongoose');
const Vessel = require('./models/Vessel');
require('dotenv').config();

const vessels = [
  {
    name: 'Luxury Yacht',
    type: 'yacht',
    description: 'A premium luxury yacht with spacious interiors and modern amenities',
    dimensions: {
      length: 80,
      width: 18,
      height: 25
    },
    modelUrl: '/models/yacht.glb',
    thumbnailUrl: '/images/yacht-thumb.jpg'
  },
  {
    name: 'Classic Sailboat',
    type: 'sailboat',
    description: 'Traditional sailboat perfect for ocean adventures',
    dimensions: {
      length: 45,
      width: 12,
      height: 60
    },
    modelUrl: '/models/sailboat.glb',
    thumbnailUrl: '/images/sailboat-thumb.jpg'
  },
  {
    name: 'Sport Speedboat',
    type: 'speedboat',
    description: 'High-performance speedboat for thrill seekers',
    dimensions: {
      length: 30,
      width: 10,
      height: 8
    },
    modelUrl: '/models/speedboat.glb',
    thumbnailUrl: '/images/speedboat-thumb.jpg'
  },
  {
    name: 'Catamaran Cruiser',
    type: 'catamaran',
    description: 'Stable and spacious catamaran ideal for family cruising',
    dimensions: {
      length: 50,
      width: 25,
      height: 15
    },
    modelUrl: '/models/catamaran.glb',
    thumbnailUrl: '/images/catamaran-thumb.jpg'
  }
];

async function seedVessels() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vessel-customization');
    console.log('Connected to MongoDB');

    // Clear existing vessels
    await Vessel.deleteMany({});
    console.log('Cleared existing vessels');

    // Insert new vessels
    const result = await Vessel.insertMany(vessels);
    console.log(`Successfully seeded ${result.length} vessels`);
    
    result.forEach(vessel => {
      console.log(`- ${vessel.name} (${vessel.type})`);
    });

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding vessels:', error);
    process.exit(1);
  }
}

seedVessels();
