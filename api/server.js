const express = require('express');
const usersRouter = require('../users/users-router');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

server.use('/api/users', usersRouter);

module.exports = server;