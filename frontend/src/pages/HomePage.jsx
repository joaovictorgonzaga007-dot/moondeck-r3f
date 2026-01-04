import React from 'react'
import { Link } from 'react-router-dom'
import Reviews from '../components/Reviews/Reviews'
import LocationMap from '../components/LocationMap/LocationMap'
import ContactFlow from '../components/ContactFlow/ContactFlow'

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Customize Your Vessel</h1>
          <p className="text-xl md:text-2xl mb-8">Premium EVA Flooring with Real-Time 3D Visualization</p>
          <Link 
            to="/customize" 
            className="bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition"
          >
            Start Customizing
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🚤</div>
              <h3 className="text-2xl font-bold mb-2">Multiple Vessels</h3>
              <p className="text-gray-600">Choose from a wide range of vessel types</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2">Custom Patterns</h3>
              <p className="text-gray-600">Design your perfect EVA flooring pattern</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold mb-2">3D Preview</h3>
              <p className="text-gray-600">See your design in real-time 3D</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <Reviews />
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-gray-50">
        <LocationMap />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <ContactFlow />
      </section>
    </div>
  )
}

export default HomePage
