const pool = require('../config/database');

async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM dificuldade ORDER BY id_d'
  );
  return result.rows;
}

module.exports = {
  listarTodos
};