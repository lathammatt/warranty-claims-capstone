'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Claim', {
  "brand": String,
  "model": String,
  "section": String,
  "parts": String,
  "labor": String,
})

