const db = require('../database/db-config');

module.exports = {
  insert,
  getAll,
  getBy,
  update,
  remove,
};

async function insert(user) {
  // Resolves to an array with value so it needs to be destructured to only contain value
  const [id] = await db('users').insert(user);
  console.log(id);

  return db('users')
    .where({ id })
    .first();
}

async function getAll() {
  const users = await db('users');
  return users;
}

async function getBy(id) {
  const user = await db('users')
    .where({ id })
    .first();
  return user;
}

async function update(id, updates) {
  const updatedUser = await db('users')
    .where({ id })
    .first()
    .update(updates);

  return updatedUser;
}

async function remove(id) {
  const deletedUser = await db('users')
    .where({ id })
    .first()
    .del();
  return deletedUser;
}
