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