const Vessel = require('../models/Vessel')

exports.getAllVessels = async (req, res) => {
  try {
    const vessels = await Vessel.find()
    res.json(vessels)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getVesselById = async (req, res) => {
  try {
    const vessel = await Vessel.findById(req.params.id)
    if (!vessel) {
      return res.status(404).json({ error: 'Vessel not found' })
    }
    res.json(vessel)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.createVessel = async (req, res) => {
  try {
    const vessel = new Vessel(req.body)
    await vessel.save()
    res.status(201).json(vessel)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.updateVessel = async (req, res) => {
  try {
    const vessel = await Vessel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!vessel) {
      return res.status(404).json({ error: 'Vessel not found' })
    }
    res.json(vessel)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteVessel = async (req, res) => {
  try {
    const vessel = await Vessel.findByIdAndDelete(req.params.id)
    if (!vessel) {
      return res.status(404).json({ error: 'Vessel not found' })
    }
    res.json({ message: 'Vessel deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
