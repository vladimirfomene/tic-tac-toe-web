/**
 * Create winners table
 */
exports.up = function (knex) {
  return knex.schema.createTable("winners", table => {
    table.increments("winnerId").primary();
    table.string("humanName");
    table.string("aiName");
    table.integer("humanScore");
    table.integer("aiScore");
    table.datetime("createdAt");
    table.datetime("updatedAt");
  });
};

/**
 * Drop winners table
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("winners");
};
