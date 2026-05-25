const express = require('express');
const router = express.Router();

const TopicoController = require('../controllers/topicoController');

router.get('/', TopicoController.listarTodos);

module.exports = router;