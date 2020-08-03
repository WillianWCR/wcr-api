const express = require('express');
const routes = express.Router();
const UserController = require('../Controllers/UserController');

routes.post('/', async (req, res) => {

});

routes.get('/:id', UserController.show);

module.exports = routes;