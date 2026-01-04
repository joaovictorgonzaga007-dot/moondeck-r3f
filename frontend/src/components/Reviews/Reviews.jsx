import React from 'react'
import { FaStar } from 'react-icons/fa'

const reviews = [
  {
    id: 1,
    name: 'John Smith',
    rating: 5,
    text: 'Absolutely amazing service! The 3D customizer made it so easy to visualize my yacht flooring. The installation was flawless.',
    date: '2025-12-15'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    rating: 5,
    text: 'Best EVA flooring I\'ve ever had. The teak pattern looks incredibly realistic and the quality is outstanding.',
    date: '2025-11-28'
  },
  {
    id: 3,
    name: 'David Chen',
    rating: 4,
    text: 'Great product and excellent customer service. The customization options are fantastic. Highly recommend!',
    date: '2025-11-10'
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'The 360° viewer helped me make the perfect choice. Installation team was professional and efficient.',
    date: '2025-10-22'
  }
]

const Reviews = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">{review.name}</h3>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-3">{review.text}</p>
            <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      {/* Overall Rating */}
      <div className="mt-12 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg text-center">
        <h3 className="text-3xl font-bold mb-2">4.8 / 5.0</h3>
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-300 text-2xl" />
          ))}
        </div>
        <p className="text-lg">Based on 150+ customer reviews</p>
      </div>
    </div>
  )
}

export default Reviews
