'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Dealer', {
  name: String,
  rate: Number,
  brand: String
})
