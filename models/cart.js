const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Cart = new Schema({
  brand: {
    type: String
  },
  name: {
    type: String
  },
  price: {
    type: Number
  }
})

module.exports = mongoose.model('Cart', Cart);