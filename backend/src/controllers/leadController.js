const Lead = require('../models/Lead')

// Get all leads
exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(50)
    res.json(leads)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Create a new lead
exports.createLead = async (req, res) => {
  try {
    const { name, whatsapp, vesselType } = req.body
    
    // Validate required fields
    if (!name || !whatsapp || !vesselType) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, whatsapp, and vesselType are required' 
      })
    }
    
    const lead = new Lead(req.body)
    await lead.save()
    res.status(201).json({ 
      message: 'Lead submitted successfully', 
      lead 
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Get a single lead by ID
exports.getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' })
    }
    res.json(lead)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}