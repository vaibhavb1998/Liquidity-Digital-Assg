const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    maxlength: 30,
    required: true
  },
  email: {
    type: String,
    maxlength: 30,
    required: true
  },
  age: {
    type: Number,
    max: 99,
    required: true
  },
  address: {
    type: String,
    maxlength: 30,
    required: true
  },
  mobile: {
    type: String,
    maxlength: 12,
    required: true
  },
})

module.exports = mongoose.model('user', userSchema);