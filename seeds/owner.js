
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owner').del()
    .then(function () {
      // Inserts seed entries
      return knex('owner').insert([
        {id: 1, name: 'David', sex: 'male', age: 23},
        {id: 2, name: 'Johnathan', sex: 'male', age: 12},
        {id: 3, name: 'Tammy', sex: 'female', age: 24},
        {id: 4, name: 'Rachael', sex: 'female', age: 31}
      ]);
    });
};
