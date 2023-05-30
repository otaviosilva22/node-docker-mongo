const express = require('express');
const routes = require('./routes.js');
const {mongooseConnection} = require('./database/connection');

mongooseConnection();

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;