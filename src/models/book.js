const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
    },
    author: {
      type: String,
      required: true,
      minlength: 2,
    },
    dateRelease: {
      type: Number,
      required: true,
      minlength: 4,
    },
  });
  
  module.exports = mongoose.model('book', bookSchema);