
exports.up = async function(knex) {
  await knex.schema.createTable("project_resources", (table) => {
      table.integer("project_id").references("id");
      table.integer("resource_id").references("resource_id")
      table.primary(["resource_id", "project_id"])
  })
};

exports.down = function(knex) {
  
};
