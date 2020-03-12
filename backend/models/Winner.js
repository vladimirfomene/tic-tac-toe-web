const { Model } = require("objection");
const Knex = require("knex");
const knexConfig = require("../knexfile");

// Initialize knex.
const knex = Knex(knexConfig.development);
Model.knex(knex);

class Winner extends Model {
  static get tableName () {
    return "winners";
  }

  static get idColumn () {
    return "winnerId";
  }
}

module.exports = { Winner };
