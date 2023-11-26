const express = require('express')
const router = express.Router()

const driversController = require('../controller/drivers.controller')

router.get('/', driversController.getAll)
router.get('/:cnh', driversController.getById)
router.post('/', driversController.create)
router.put('/:cnh', driversController.update)
router.delete('/:cnh', driversController.delete)

module.exports = router