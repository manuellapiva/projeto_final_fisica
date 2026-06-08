const RespostasModel = require('../models/respostaModel');

async function listarTodos(req, res) {
  try {
    const respostas = await RespostasModel.listarTodos();
    res.status(200).json(respostas);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar respostas', 
      erro: erro.message 
    });
  }
}

module.exports = {
  listarTodos
};