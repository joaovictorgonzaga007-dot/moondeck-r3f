import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vessel Customizer</h3>
            <p className="text-gray-400">Premium EVA flooring solutions for your vessel</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-secondary transition"><FaWhatsapp /></a>
              <a href="#" className="text-2xl hover:text-secondary transition"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-secondary transition"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-secondary transition"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Vessel Customization Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
