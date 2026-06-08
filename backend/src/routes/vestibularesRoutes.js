const express = require('express');
const router = express.Router();

const VestibularesController = require('../controllers/vestibularesController');

router.get('/', VestibularesController.listarTodos);

module.exports = router;