'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Labor', {
  name: String,
  perHour: Number
})

