
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('breed').del()
    .then(function () {
      // Inserts seed entries
      return knex('breed').insert([
        {id: 1, name: 'german shepard'},
        {id: 2, name: 'shi tzu'},
        {id: 3, name: 'lab'},
        {id: 4, name: 'retriever'},
        {id: 5, name: 'bulldog'},
      ]);
    });
};
