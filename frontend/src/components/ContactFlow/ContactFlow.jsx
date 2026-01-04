import React, { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

const ContactFlow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in vessel customization.\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-2xl text-primary" />
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-2xl text-primary" />
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-gray-600">info@vesselcustomizer.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-2xl text-green-500" />
                <div>
                  <p className="font-bold">WhatsApp</p>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Quick Contact */}
          <button
            onClick={handleWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg flex items-center justify-center space-x-2 transition"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Contact via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactFlow
