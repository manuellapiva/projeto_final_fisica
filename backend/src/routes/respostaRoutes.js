const express = require('express');
const router = express.Router();

const RespostaController = require('../controllers/respostaController');

router.get('/', RespostaController.listarTodos);

module.exports = router;