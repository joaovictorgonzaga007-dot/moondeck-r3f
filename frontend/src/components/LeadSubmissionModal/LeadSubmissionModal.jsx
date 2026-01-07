import React, { useState } from 'react'
import './LeadSubmissionModal.css'

const LeadSubmissionModal = ({ isOpen, onClose, configData, vesselData }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.name.trim() || !formData.whatsapp.trim()) {
      setErrorMessage('Name and WhatsApp are required')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')
    setSubmitStatus(null)

    try {
      const leadData = {
        name: formData.name.trim(),
        whatsapp: formData.whatsapp.trim(),
        city: formData.city.trim() || undefined,
        vesselType: vesselData?.name || 'Unknown',
        vesselId: vesselData?._id || undefined,
        pattern: configData?.pattern || undefined,
        color: configData?.color1 || undefined,
        notes: formData.notes.trim() || undefined
      }

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
      const response = await fetch(`${apiUrl}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit request')
      }

      const result = await response.json()
      console.log('Lead submitted successfully:', result)
      
      setSubmitStatus('success')
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        // Reset form
        setFormData({ name: '', whatsapp: '', city: '', notes: '' })
        setSubmitStatus(null)
      }, 2000)

    } catch (error) {
      console.error('Error submitting lead:', error)
      setErrorMessage(error.message || 'Failed to submit request. Please try again.')
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Submit Your Request</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        {submitStatus === 'success' ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Request Sent Successfully!</h3>
            <p>We'll contact you soon via WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="lead-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp">WhatsApp *</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                placeholder="+1234567890"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special requirements or questions?"
                rows="4"
                disabled={isSubmitting}
              />
            </div>

            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}

            <div className="form-actions">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default LeadSubmissionModal
