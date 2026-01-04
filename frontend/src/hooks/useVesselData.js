import { useState, useEffect } from 'react'
import { vesselAPI } from '../services/api'

export const useVesselData = () => {
  const [vessels, setVessels] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchVessels()
  }, [])

  const fetchVessels = async () => {
    try {
      setLoading(true)
      const response = await vesselAPI.getAll()
      setVessels(response.data)
      setError(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { vessels, loading, error, refetch: fetchVessels }
}
