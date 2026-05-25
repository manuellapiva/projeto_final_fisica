const pool = require('../config/database');

async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM resposta ORDER BY id_resp'
  );
  return result.rows;
}

async function buscarPorId(id) {
  // PostgreSQL usa $1, $2, $3... como placeholders
  // (SQLite usava ? ? ?)
  const result = await pool.query(
    'SELECT * FROM resposta WHERE id_resp = $1',
    [id]
  );
  return result.rows[0];
}

async function criar(dados) {
  const { resp_correta, explicacao_prof, contas_url, videoaula } = dados;

  const sql = `
    INSERT INTO resposta (resp_correta, explicacao_prof, contas_url, videoaula)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;
  
  const result = await pool.query(
    sql,
    [resp_correta, explicacao_prof, contas_url, videoaula]
  );
  
  return result.rows[0];
}
