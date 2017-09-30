exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function (table) {
    table.increments()
    table.text("name")
    table.text("email")
    table.string("password")
    table.string("phone")
    table.string("address")
    table.string("description")

  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users")
}
