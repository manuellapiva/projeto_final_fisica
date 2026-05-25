const pool = require('../config/database');

async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM materia ORDER BY id_mat'
  );
  return result.rows;
}

async function buscarPorId(id) {
  // PostgreSQL usa $1, $2, $3... como placeholders
  // (SQLite usava ? ? ?)
  const result = await pool.query(
    'SELECT * FROM materia WHERE id_mat = $1',
    [id]
  );
  return result.rows[0];
}