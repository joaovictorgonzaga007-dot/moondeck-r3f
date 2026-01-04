const express = require('express')
const router = express.Router()
const flooringController = require('../controllers/flooringController')

router.get('/', flooringController.getAllConfigs)
router.get('/:id', flooringController.getConfigById)
router.post('/', flooringController.createConfig)
router.put('/:id', flooringController.updateConfig)
router.delete('/:id', flooringController.deleteConfig)

module.exports = router
