const { table } = require("console");

exports.up = async function(knex) {
  await knex.schema.createTable("task", (table) => {
    table.increments("task_id");
    table.integer("project_id").notNull().references("id");
    table.text("description").notNull();
    table.text("notes");
    table.boolean("completed_task").defaultTo(false).notNull();
  })
};

exports.down = function(knex) {
  
};
