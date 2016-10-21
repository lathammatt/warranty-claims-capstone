'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Vehicle', {
  brand: String,
  name: String,
  sections: Array
})