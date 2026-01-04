const Contact = require('../models/Contact')

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body)
    await contact.save()
    res.status(201).json({ message: 'Contact request submitted successfully', contact })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    )
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }
    res.json(contact)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' })
    }
    res.json({ message: 'Contact deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
