const MateriasModel = require('../models/materiaModel');

async function listarTodos(req, res) {
  try {
    const materias = await MateriasModel.listarTodos();
    res.status(200).json(materias);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar materias', 
      erro: erro.message 
    });
  }
}

module.exports = {
  listarTodos
};