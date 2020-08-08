const express = require('express');
const dotenv = require('dotenv');

// Iniciando o App
const app = express();
app.use(express.json());
dotenv.config();

// Import Routes
app.use('/v1.0', require('./src/routes'));

// Start Listening
app.listen(3100, () => console.log('Server up and running!'));