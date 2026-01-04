import React from 'react'

const patterns = [
  { id: 'teak', name: 'Teak', description: 'Classic teak pattern' },
  { id: 'diamond', name: 'Diamond', description: 'Diamond pattern' },
  { id: 'herringbone', name: 'Herringbone', description: 'Herringbone pattern' },
  { id: 'solid', name: 'Solid', description: 'Solid color' },
]

const FlooringCustomizer = ({ config, onConfigChange, onSave }) => {
  const handleChange = (key, value) => {
    onConfigChange({ ...config, [key]: value })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Customize Flooring</h2>
      
      {/* Pattern Selection */}
      <div className="mb-6">
        <label className="block text-sm font-bold mb-2">Pattern</label>
        <div className="grid grid-cols-2 gap-3">
          {patterns.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => handleChange('pattern', pattern.id)}
              className={`p-3 rounded-lg border-2 transition ${
                config.pattern === pattern.id
                  ? 'border-primary bg-blue-50'
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              <div className="text-left">
                <h4 className="font-bold">{pattern.name}</h4>
                <p className="text-xs text-gray-600">{pattern.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Primary Color</label>
        <input
          type="color"
          value={config.color1}
          onChange={(e) => handleChange('color1', e.target.value)}
          className="w-full h-12 rounded cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Secondary Color</label>
        <input
          type="color"
          value={config.color2}
          onChange={(e) => handleChange('color2', e.target.value)}
          className="w-full h-12 rounded cursor-pointer"
        />
      </div>

      {/* Line Width */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Line Width: {config.lineWidth}</label>
        <input
          type="range"
          min="0.01"
          max="0.1"
          step="0.01"
          value={config.lineWidth}
          onChange={(e) => handleChange('lineWidth', parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      <button 
        onClick={onSave}
        className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition"
      >
        Save Configuration
      </button>
    </div>
  )
}

export default FlooringCustomizer
