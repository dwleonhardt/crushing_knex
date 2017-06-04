
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('breed', function(breed) {
    breed.increments('id').primary().unsigned();
    breed.text('name');
  })
  .createTable('temperment', function(temperment){
    temperment.increments('id').primary().unsigned();
    temperment.text('name');
  })
  .createTable('owner', function(owner){
    owner.increments('id').primary().unsigned();
    owner.text('name');
    owner.text('sex');
    owner.integer('age');
  })
  .createTable('dog', function(dog) {
    dog.increments('id').primary().unsigned();
    dog.text('name');
    dog.integer('age');
    dog.integer('breed_id').unsigned();
    dog.integer('owner_id').unsigned();
    dog.integer('temperment_id').unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('dog')
  .dropTable('owner')
  .dropTable('temperment')
  .dropTable('breed');
};
