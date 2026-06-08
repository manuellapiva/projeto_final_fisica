const express = require('express');
const router = express.Router();

const DificuldadeController = require('../controllers/dificuldadeController');

router.get('/', DificuldadeController.listarTodos);

module.exports = router;