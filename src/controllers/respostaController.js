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

async function buscarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({ 
        mensagem: 'ID inválido' 
      });
    }
    
    const resposta = await RespostasModel.buscarPorId(id);
    
    if (resposta) {
      res.status(200).json(resposta);
    } else {
      res.status(404).json({ 
        mensagem: `Resposta ${id} não encontrada` 
      });
    }
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao buscar resposta',
      erro: erro.message 
    });
  }
}

async function criar(req, res) {
  try {
    const {resp_correta, explicacao_prof, contas_url, videoaula} = req.body;
    
    if (!resp_correta || !explicacao_prof) {
      return res.status(400).json({ 
        mensagem: 'Todos os campos são obrigatórios' 
      });
    }
    
    const novaresposta = await RespostasModel.criar({ 
    resp_correta,
    explicacao_prof, 
    contas_url,
    videoaula
    });
    
    res.status(201).json(novaresposta);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao criar resposta',
      erro: erro.message 
    });
  }
}