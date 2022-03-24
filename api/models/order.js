'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Order = new Schema({
    entry_date: {
        type: Date,
        default: Date.now
        },
    exit_date: {
        type: Date,
        },
    elaboration_Date: {
        type: Date,
        },
    status: {
        type: String
    },
    products: [{
        product: String,
        quantity: Number,
        price: Number
    }],
    client: {
        type: Schema.Types.ObjectId, required: true, ref: 'Client' 
    }
    });

module.exports = mongoose.model('Order', Order);