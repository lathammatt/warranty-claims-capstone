'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Labor', {
  name: String,
  description: String,
  smallRate: Number,
  largeRate: Number,
  smallCars: Array,
  largeCars: Array
})

