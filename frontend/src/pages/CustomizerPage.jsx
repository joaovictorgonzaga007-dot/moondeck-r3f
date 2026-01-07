import React, { useState, useEffect } from 'react'
import VesselSelector from '../components/VesselSelector/VesselSelector'
import FlooringCustomizer from '../components/FlooringCustomizer/FlooringCustomizer'
import Viewer3D from '../components/Viewer3D/Viewer3D'
import Chatbot from '../components/Chatbot/Chatbot'
import LeadSubmissionModal from '../components/LeadSubmissionModal/LeadSubmissionModal'
import { flooringAPI } from '../services/api'

const CustomizerPage = () => {
  const [selectedVessel, setSelectedVessel] = useState(null)
  const [flooringConfig, setFlooringConfig] = useState({
    pattern: 'teak',
    color1: '#8B4513',
    color2: '#000000',
    lineWidth: 0.02
  })
  const [savedConfigId, setSavedConfigId] = useState(null)
  const [saveStatus, setSaveStatus] = useState(null)
  const [showLeadModal, setShowLeadModal] = useState(false)

  // Load saved configuration on mount
  useEffect(() => {
    const loadSavedConfig = async () => {
      try {
        const savedId = localStorage.getItem('savedConfigId')
        if (savedId) {
          const response = await flooringAPI.getById(savedId)
          if (response.data) {
            setFlooringConfig({
              pattern: response.data.pattern,
              color1: response.data.color1,
              color2: response.data.color2,
              lineWidth: response.data.lineWidth
            })
            setSavedConfigId(savedId)
            console.log('Loaded saved configuration:', response.data)
          }
        }
      } catch (err) {
        console.error('Error loading saved configuration:', err)
        localStorage.removeItem('savedConfigId')
      }
    }

    loadSavedConfig()
  }, [])

  const handleSaveConfiguration = async () => {
    if (!selectedVessel) {
      setSaveStatus({ type: 'error', message: 'Please select a vessel first' })
      setTimeout(() => setSaveStatus(null), 3000)
      return
    }

    try {
      setSaveStatus({ type: 'loading', message: 'Saving...' })
      
      const configData = {
        vesselId: selectedVessel._id,
        pattern: flooringConfig.pattern,
        color1: flooringConfig.color1,
        color2: flooringConfig.color2,
        lineWidth: flooringConfig.lineWidth,
        userId: 'guest' // For now, using guest user
      }

      let response
      if (savedConfigId) {
        // Update existing configuration
        response = await flooringAPI.update(savedConfigId, configData)
      } else {
        // Create new configuration
        response = await flooringAPI.create(configData)
        setSavedConfigId(response.data._id)
        localStorage.setItem('savedConfigId', response.data._id)
      }

      setSaveStatus({ type: 'success', message: 'Configuration saved successfully!' })
      setTimeout(() => setSaveStatus(null), 3000)
      console.log('Configuration saved:', response.data)
      
      // Show lead submission modal after successful save
      setShowLeadModal(true)
    } catch (err) {
      console.error('Error saving configuration:', err)
      setSaveStatus({ type: 'error', message: 'Failed to save configuration' })
      setTimeout(() => setSaveStatus(null), 3000)
    }
  }

  return (
    <div className="customizer-page min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Customize Your Vessel</h1>
        
        {/* Save Status Message */}
        {saveStatus && (
          <div className={`mb-4 p-4 rounded-lg text-center ${
            saveStatus.type === 'success' ? 'bg-green-100 text-green-800' :
            saveStatus.type === 'error' ? 'bg-red-100 text-red-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {saveStatus.message}
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Vessel Selection */}
          <div className="lg:col-span-1">
            <VesselSelector 
              selectedVessel={selectedVessel}
              onSelectVessel={setSelectedVessel}
            />
          </div>

          {/* Center Panel - 3D Viewer */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <Viewer3D 
                vessel={selectedVessel}
                flooringConfig={flooringConfig}
              />
            </div>
            
            {/* Flooring Customizer */}
            <div className="mt-4">
              <FlooringCustomizer 
                config={flooringConfig}
                onConfigChange={setFlooringConfig}
                onSave={handleSaveConfiguration}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />

      {/* Lead Submission Modal */}
      <LeadSubmissionModal
        isOpen={showLeadModal}
        onClose={() => setShowLeadModal(false)}
        configData={flooringConfig}
        vesselData={selectedVessel}
      />
    </div>
  )
}

export default CustomizerPage
