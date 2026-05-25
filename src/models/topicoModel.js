const pool = require('../config/database');

async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM topico ORDER BY id_top'
  );
  return result.rows;
}
module.exports = {
  listarTodos
};