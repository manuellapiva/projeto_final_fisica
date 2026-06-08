const pool = require('../config/database');

async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM vestibulares ORDER BY ID'
  );
  return result.rows;
}

module.exports = {
  listarTodos
};