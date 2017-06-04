
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dog').del()
    .then(function () {
      // Inserts seed entries
      return knex('dog').insert([
        {id: 1, name: 'Brock', age: 5, breed_id: 4, owner_id: 3, temperment_id: 2},
        {id: 2, name: 'Spot', age: 1, breed_id: 5, owner_id: 1, temperment_id: 1},
        {id: 3, name: 'Calli', age: 2, breed_id: 1, owner_id: 2, temperment_id: 4}
      ]);
    });
};
