const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {type : String },
    completed: {type : Boolean }
});

module.exports = mongoose.model('Todo',todoSchema);
