import React, { useState, useEffect } from 'react'
import { FaShip, FaAnchor } from 'react-icons/fa'
import { FaSailboat } from 'react-icons/fa6'
import { vesselAPI } from '../../services/api'

// Icon mapping for vessel types
const iconMap = {
  yacht: FaShip,
  sailboat: FaSailboat,
  speedboat: FaAnchor,
  catamaran: FaShip
}

const VesselSelector = ({ selectedVessel, onSelectVessel }) => {
  const [vessels, setVessels] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVessels = async () => {
      try {
        setLoading(true)
        const response = await vesselAPI.getAll()
        setVessels(response.data)
        setError(null)
      } catch (err) {
        console.error('Error fetching vessels:', err)
        setError('Failed to load vessels. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchVessels()
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Select Your Vessel</h2>
        <p className="text-gray-600">Loading vessels...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Select Your Vessel</h2>
        <p className="text-red-600">{error}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Select Your Vessel</h2>
      <div className="space-y-3">
        {vessels.map((vessel) => {
          const Icon = iconMap[vessel.type] || FaShip
          return (
            <button
              key={vessel._id}
              onClick={() => onSelectVessel(vessel)}
              className={`w-full p-4 rounded-lg border-2 transition ${
                selectedVessel?._id === vessel._id
                  ? 'border-primary bg-blue-50'
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="text-3xl text-primary" />
                <div className="text-left">
                  <h3 className="font-bold text-lg">{vessel.name}</h3>
                  <p className="text-sm text-gray-600">{vessel.description}</p>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default VesselSelector
