const pool = require('../config/database');

async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM materia ORDER BY id_mat'
  );
  return result.rows;
}

module.exports = {
  listarTodos
};