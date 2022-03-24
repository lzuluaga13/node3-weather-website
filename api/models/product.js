'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Product = new Schema({
  name: {
    type: String,
    required: 'Product name'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  shelf_life: {
    type: String
  },
  price: {
    type: Number
  },
  stock: {
    type : Number
  }
});

module.exports = mongoose.model('Product', Product);