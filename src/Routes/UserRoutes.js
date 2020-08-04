const express = require('express');
const routes = express.Router();
const UserController = require('../Controllers/UserController');

routes.post('/', UserController.store);
routes.get('/:id', UserController.show);

module.exports = routes;