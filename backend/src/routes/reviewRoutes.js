const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewController')

router.get('/', reviewController.getAllReviews)
router.get('/approved', reviewController.getApprovedReviews)
router.post('/', reviewController.createReview)
router.put('/:id/approve', reviewController.approveReview)
router.delete('/:id', reviewController.deleteReview)

module.exports = router
