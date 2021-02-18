const express = require('express');
const routes = express.Router();

/* Require Todo models here */
let Todo = require('../Models/todo.model');

// Fetch Todo data Route
routes.get("", (req, res, next) => {

  Todo.find()
  .then( (results) => {
    // console.log(results);
    res.status(200).json({
      message: "todos fetched successfully!",
      data: results
    });
  })
  .catch( err => {
    console.log(err.message)
  })

});

// Create New Todo data Route
routes.post("", (req, res, next) => {
  
  const todo = new Todo(req.body)
  
  todo.save()
  .then( (results) => {
    console.log('created res', results);
    res.status(201).json({
      message: "todo created successfully!",
      data: results
    });
  })
  .catch( err => {
    console.log(err.message)
  });

});

// Create New Todo data Route
routes.post("", (req, res, next) => {
  
  const todo = new Todo(req.body)
  
  todo.save().then( (results) => {
    console.log('res', results);
    res.status(201).json({
      message: "todo created successfully!",
      data: results
    });
  }).catch( err => {
    console.log(err.message)
  });

});

// Delete Todo data Route
routes.delete("/:id", (req, res, next) => {
  
  console.log(req.params.id)
  
  Todo.findByIdAndDelete(req.params.id).then( (results) => {
    console.log('res', results);
    res.status(202).json({
      message: "todo has been deleted successfully!",
      data: results
    });
  }).catch( err => {
    console.log(err.message)
  });

});

// Update Todo data Route
routes.put("/:id", (req, res, next) => {
  
  console.log('Body ', req.body);
  Todo.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then( (results) => {
    results.completed = req.body.completed;
    console.log('Updated res', results);
    res.status(200).json({
      message: "todo updated successfully!",
      data: results
    });
  })
  .catch( err => {
    console.log(err.message)
  });

});

module.exports = routes;