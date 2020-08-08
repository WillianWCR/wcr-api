const express = require('express');
const routes = express.Router();
const AuthController = require('../Controllers/AuthController');

routes.post('/', AuthController.login);

module.exports = routes;