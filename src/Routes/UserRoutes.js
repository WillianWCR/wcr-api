const express = require('express');
const routes = express.Router();
const UserController = require('../Controllers/UserController');

// List all users
routes.get('/', UserController.index);

// Register new User
routes.post('/', UserController.store);

// Retrieve a user
routes.get('/:id', UserController.showById);

// Update user
routes.put('/:id', UserController.update);

// Delete user
routes.delete('/:id', UserController.delete);

module.exports = routes;