const pool = require('../config/database');

async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM resposta ORDER BY id_resp'
  );
  return result.rows;
}

module.exports = {
  listarTodos
};