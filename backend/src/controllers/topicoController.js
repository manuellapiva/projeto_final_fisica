const TopicoModel = require('../models/topicoModel');

async function listarTodos(req, res) {
  try {
    const topicos = await TopicoModel.listarTodos();
    res.status(200).json(topicos);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar tópicos', 
      erro: erro.message 
    });
  }
}

module.exports = {
  listarTodos
};