const express = require('express');
const router = express.Router();

const MateriaController = require('../controllers/materiaController');

router.get('/', MateriaController.listarTodos);

module.exports = router;