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

async function buscarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({ 
        mensagem: 'ID inválido' 
      });
    }