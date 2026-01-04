const FlooringConfig = require('../models/FlooringConfig')

exports.getAllConfigs = async (req, res) => {
  try {
    const configs = await FlooringConfig.find().populate('vesselId')
    res.json(configs)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getConfigById = async (req, res) => {
  try {
    const config = await FlooringConfig.findById(req.params.id).populate('vesselId')
    if (!config) {
      return res.status(404).json({ error: 'Configuration not found' })
    }
    res.json(config)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.createConfig = async (req, res) => {
  try {
    const config = new FlooringConfig(req.body)
    await config.save()
    res.status(201).json(config)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.updateConfig = async (req, res) => {
  try {
    req.body.updatedAt = Date.now()
    const config = await FlooringConfig.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!config) {
      return res.status(404).json({ error: 'Configuration not found' })
    }
    res.json(config)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteConfig = async (req, res) => {
  try {
    const config = await FlooringConfig.findByIdAndDelete(req.params.id)
    if (!config) {
      return res.status(404).json({ error: 'Configuration not found' })
    }
    res.json({ message: 'Configuration deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
