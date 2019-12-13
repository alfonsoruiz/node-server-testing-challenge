const router = require('express').Router();
const Users = require('../users/users-model');

router.post('/', async (req, res) => {
  const user = req.body;

  try {
    const savedUser = await Users.insert(user);
    res.status(201).json(savedUser);
  } catch {
    res.status(500).json({ error: 'Error posting user from database' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await Users.getAll();
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: 'Error retrieving users from database' });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await Users.getBy(id);
    res.status(200).json(user);
  } catch {
    res
      .status(500)
      .json({ error: 'Error retrieving user by id from database' });
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    const updatedUser = await Users.update(id, updates);
    res.status(200).json(updatedUser);
  } catch {
    res.status(500).json({ error: 'Error updating user to database' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deltedUser = await Users.remove(id);
    res.status(200).json(deltedUser);
  } catch {
    res.status(500).json({ error: 'Error deleting user from database' });
  }
});

module.exports = router;
