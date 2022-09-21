const { Router } = require('express');
const router = Router();

const consumidorCtrl = require('../controllers/consumidor.controller');

router.get('/', consumidorCtrl.listarConsumidores);
router.post('/', consumidorCtrl.Registro);
router.post('/login', consumidorCtrl.login);
router.get('/:id', consumidorCtrl.buscarConsumidor);
router.patch('/banear/:id', consumidorCtrl.banear);

module.exports = router;