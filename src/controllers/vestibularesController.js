const VestibularesModel = require('../models/vestibularesModel');

async function listarTodos(req, res) {
  try {
    const vestibulares = await VestibularesModel.listarTodos();
    res.status(200).json(vestibulares);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar vestibulares', 
      erro: erro.message 
    });
  }
}
module.exports = {
  listarTodos
};