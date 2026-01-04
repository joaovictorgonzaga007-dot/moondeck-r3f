const Review = require('../models/Review')

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 })
    res.json(reviews)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getApprovedReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true }).sort({ createdAt: -1 })
    res.json(reviews)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body)
    await review.save()
    res.status(201).json(review)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.approveReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    )
    if (!review) {
      return res.status(404).json({ error: 'Review not found' })
    }
    res.json(review)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id)
    if (!review) {
      return res.status(404).json({ error: 'Review not found' })
    }
    res.json({ message: 'Review deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
