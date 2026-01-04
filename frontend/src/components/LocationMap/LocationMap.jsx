import React from 'react'
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'

const LocationMap = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Visit Our Showroom</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 bg-gray-300 flex items-center justify-center">
            {/* Placeholder for actual map integration (Google Maps, Mapbox, etc.) */}
            <div className="text-center">
              <FaMapMarkerAlt className="text-6xl text-primary mx-auto mb-4" />
              <p className="text-gray-600">Map Integration</p>
              <p className="text-sm text-gray-500">123 Marina Boulevard, Coastal City, CC 12345</p>
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-3xl text-primary mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Address</h3>
                <p className="text-gray-700">123 Marina Boulevard</p>
                <p className="text-gray-700">Coastal City, CC 12345</p>
                <p className="text-gray-700">United States</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start space-x-4">
              <FaClock className="text-3xl text-primary mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Business Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-700">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start space-x-4">
              <FaPhone className="text-3xl text-primary mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Contact</h3>
                <p className="text-gray-700">Phone: +1 (234) 567-890</p>
                <p className="text-gray-700">Email: info@vesselcustomizer.com</p>
              </div>
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
            Get Directions
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocationMap
