exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({id: 1, name: 'Church on Park', email:"test@test.com", password:"password", phone:"303678309", address:"Denver,CO", description: "Church in Denver that feeds homeless" }),
  );
};
