const DificuldadeModel = require('../models/dificuldadeModel');

async function listarTodos(req, res) {
  try {
    const dificuldades = await DificuldadeModel.listarTodos();
    res.status(200).json(dificuldades);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar dificuldade', 
      erro: erro.message 
    });
  }
}

module.exports = {
  listarTodos
};