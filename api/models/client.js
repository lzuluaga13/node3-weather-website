'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Client = new Schema({
    nit: {
        type: String,
        required: 'Product name',
      },
  name: {
    type: String,
    required: 'Product name'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  direction: {
    type: String
  },
  orders: {
    type: Schema.Types.ObjectId, ref: 'Order'
  }
});



module.exports = mongoose.model('Client', Client);