'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Claim', {
  "dealer": String,
  "brand": String,
  "model": String,
  "section": String,
  "parts": String,
  "labor": String,
})
