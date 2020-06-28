
exports.up = async function(knex) {
    await knex.schema.createTable("resource", (table) => {
        table.increments("resource_id");
        table.text("name").notNull().unique();
        table.text("description");
    })
  
};

exports.down = function(knex) {
  
};
