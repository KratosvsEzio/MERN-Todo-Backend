const express = require('express');
const bodyParser= require('body-parser');
const path = require("path");

// Routes
const todosRoutes = require('./Routes/todos');

const app = express();

require('./Db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/todos',todosRoutes);

module.exports = app;