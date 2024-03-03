import { user, host, database, password } from '../../vars';

const Pool = require("pg").Pool;
const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: 5432,
});

//GET All Users
const getAllLivestock = (request, response) => {
  pool.query("SELECT * FROM livestock ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//GET Livestock Record by ID
const getLivestockById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM livestock WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//Create new livestock record
const createLivestockRecord = (request, response) => {
  const { tag_number, tag_color, owner, type, notes } = request.body;

  pool.query(
    "INSERT INTO livestock (tag_number, tag_color, owner, type, notes) VALUES ($1, $2, $3, $4, $5)",
    [tag_number, tag_color, owner, type, notes],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Livestock added with ID: ${results.insertId}`);
    }
  );
};

//UPDATE Livestock record
const updateLivestockRecord = (request, response) => {
  const id = parseInt(request.params.id);
  const { tag_number, tag_color, owner, type, notes } = request.body;

  pool.query(
    "UPDATE livestock SET tag_number = $1, tag_color = $2, owner = $3, type = $4, notes = $5",
    [tag_number, tag_color, owner, type, notes],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Livestock modified with ID: ${id}`);
    }
  );
};

//DELETE Livestock record
const deleteLivestockRecord = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM livestock WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Livestock deleted with ID: ${id}`);
  });
};

module.exports = {
  getAllLivestock,
  getLivestockById,
  createLivestockRecord,
  updateLivestockRecord,
  deleteLivestockRecord,
};
