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

    const materia = await MateriasModel.buscarPorId(id);
    
    if (materia) {
      res.status(200).json(materia);
    } else {
      res.status(404).json({ 
        mensagem: `Materia ${id} não encontrada` 
      });
    }
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao buscar materia',
      erro: erro.message 
    });
  }
}

async function criar(req, res) {
  try {
    const { nome_mat } = req.body;
    
    if (!nome_mat) {
      return res.status(400).json({ 
        mensagem: 'Todos os campos são obrigatórios' 
      });
    }