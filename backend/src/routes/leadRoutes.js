const express = require('express')
const router = express.Router()
const leadController = require('../controllers/leadController')

router.get('/', leadController.getAllLeads)
router.post('/', leadController.createLead)
router.get('/:id', leadController.getLeadById)

module.exports = router