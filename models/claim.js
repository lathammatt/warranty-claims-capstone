'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Claim', {
  "dealer": String,
  "rate": Number,
  "model": String,
  "section": String,
  "parts": String,
  "labor": String,
  "laborHours": Number,
  "totalParts": Number,
  "totalLabor": Number,
  "claimTotal": Number
})
