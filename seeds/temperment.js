
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('temperment').del()
    .then(function () {
      // Inserts seed entries
      return knex('temperment').insert([
        {id: 1, name: 'calm'},
        {id: 2, name: 'energetic'},
        {id: 3, name: 'agressive'},
        {id: 4, name: 'malevolent'}
      ]);
    });
};
