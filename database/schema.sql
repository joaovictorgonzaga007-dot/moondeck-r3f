-- Vessel Customization Platform Database Schema
-- This is a reference schema for MongoDB collections

-- Vessels Collection
/*
{
  _id: ObjectId,
  name: String,
  type: String (enum: 'yacht', 'sailboat', 'speedboat', 'catamaran'),
  description: String,
  dimensions: {
    length: Number,
    width: Number,
    height: Number
  },
  modelUrl: String,
  thumbnailUrl: String,
  createdAt: Date
}
*/

-- FlooringConfigs Collection
/*
{
  _id: ObjectId,
  userId: String,
  vesselId: ObjectId (ref: Vessel),
  pattern: String (enum: 'teak', 'diamond', 'herringbone', 'solid'),
  color1: String,
  color2: String,
  lineWidth: Number,
  createdAt: Date,
  updatedAt: Date
}
*/

-- Reviews Collection
/*
{
  _id: ObjectId,
  name: String,
  email: String,
  rating: Number (1-5),
  text: String,
  vesselType: String,
  approved: Boolean,
  createdAt: Date
}
*/

-- Contacts Collection
/*
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  message: String,
  status: String (enum: 'new', 'contacted', 'resolved'),
  createdAt: Date
}
*/
