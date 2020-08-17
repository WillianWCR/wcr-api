const express = require('express');
const routes = express.Router();

// Auth Endpoint
routes.use('/auth', require('./Routes/AuthRoutes'));

// User Endpoint
routes.use('/user', require('./Routes/UserRoutes'));

// Leads Endpoint

// Live Endpoint

// Bio Endpoint
routes.use('/bio', require('./Routes/BioRoutes'));

module.exports = routes;