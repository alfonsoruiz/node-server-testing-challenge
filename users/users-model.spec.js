const db = require('../database/db-config');
const Users = require('./users-model');

describe('Users model', () => {
  describe('insert()', () => {
    beforeEach(async () => {
      await db('users').truncate();
    });

    it('should insert new user into database', async () => {
      await Users.insert({ name: 'Ru' });
      const users = await db('users');
      expect(users).toHaveLength(1);
    });

    it('should insert specified user data into database', async () => {
      await Users.insert({ name: 'Ru' });
      const users = await db('users');
      expect(users[0].name).toBe('Ru');
    });
  });

  describe('remove()', () => {
    beforeEach(async () => {
      await db('users').truncate();
    });

    it('should delete a user from database', async () => {
      await Users.remove(1);
      const users = await db('users');
      expect(users).toHaveLength(0);
    });

    it('should delete specified user from database', async () => {
      await Users.remove(1);
      const user = await Users.getBy(1);
      expect(user).toBe(undefined);
    });
  });
});
