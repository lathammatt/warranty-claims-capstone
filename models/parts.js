'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Parts', {
  name: String,
  cost: Number,
  section: String,
  labor: String,
  description: String,
  models: Array
})

