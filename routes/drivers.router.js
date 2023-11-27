const express = require('express')  // Importa o EXPRESSJS.
const router = express.Router()     // Importa a configurações de rotas.

const driversController = require('../controller/drivers.controller')   // Importa o controlador de 'motorista'.

router.get('/', driversController.getAll)           // Define as rotas e o controles.
router.get('/:cnh', driversController.getById)
router.post('/', driversController.create)
router.put('/:cnh', driversController.update)
router.delete('/:cnh', driversController.delete)

module.exports = router     // Exporta a configuração de rotas.