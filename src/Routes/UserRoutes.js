const express = require('express');
const routes = express.Router();
const UserController = require('../Controllers/UserController');

// Register new User
routes.post('/', UserController.store);

// Retrieve a user
routes.get('/:id', UserController.showById);

// Retrieve a user by email
routes.get('email/:email', UserController.showByEmail);

// Retrieve a user by username
routes.get('username/:username', UserController.showByUsername);

// Update user
routes.put('/:id', UserController.update);

// Delete user
routes.delete('/:id', UserController.delete);

// List all users
routes.get('/', UserController.index);

module.exports = routes;