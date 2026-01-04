import { useState, useCallback } from 'react'
import { flooringAPI } from '../services/api'

export const useFlooringConfig = (initialConfig) => {
  const [config, setConfig] = useState(initialConfig)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const updateConfig = useCallback((updates) => {
    setConfig(prev => ({ ...prev, ...updates }))
  }, [])

  const saveConfig = useCallback(async () => {
    try {
      setSaving(true)
      const response = await flooringAPI.create(config)
      setError(null)
      return response.data
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setSaving(false)
    }
  }, [config])

  return { config, updateConfig, saveConfig, saving, error }
}
