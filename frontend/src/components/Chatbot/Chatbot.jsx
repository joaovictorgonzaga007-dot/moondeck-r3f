import React, { useState } from 'react'
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you customize your vessel today?', sender: 'bot' }
  ])
  const [inputText, setInputText] = useState('')

  const handleSend = () => {
    if (!inputText.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    }

    setMessages([...messages, userMessage])
    setInputText('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        sender: 'bot'
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase()
    
    if (lowerInput.includes('price') || lowerInput.includes('cost')) {
      return 'Our EVA flooring prices vary based on vessel size and pattern complexity. Would you like me to connect you with our sales team for a quote?'
    } else if (lowerInput.includes('pattern')) {
      return 'We offer Teak, Diamond, Herringbone, and Solid patterns. You can customize colors and line width in the customizer!'
    } else if (lowerInput.includes('install')) {
      return 'Installation typically takes 1-3 days depending on vessel size. We provide professional installation services.'
    } else if (lowerInput.includes('material')) {
      return 'Our EVA foam is marine-grade, UV-resistant, non-slip, and easy to clean. Perfect for any vessel!'
    } else {
      return 'I can help you with patterns, pricing, installation, and materials. What would you like to know more about?'
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-primary hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition z-50"
        >
          <FaComments className="text-3xl" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-50">
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold text-lg">Chat Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
              />
              <button
                onClick={handleSend}
                className="bg-primary hover:bg-blue-700 text-white p-2 rounded-lg transition"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
