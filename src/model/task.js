const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  nombre: String,
  apellido: String,
  producto: String,
  precio: String,
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('tasks', TaskSchema);
