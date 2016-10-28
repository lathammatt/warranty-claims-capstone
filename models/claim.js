'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Claim', {
  "dealer": String,
  "model": String,
  "section": String,
  "parts": String,
  "labor": String,
  "totalParts": Number,
  "totalLabor": Number,
  "claimTotal": Number
})
