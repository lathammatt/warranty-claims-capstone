'use strict';

const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/warranty'

mongoose.Promise = Promise

mongoose.model('Claim', {
  "brand": String,
  "model": String,
  "sections": {
    "name": String,
    "labor": Number,
    "parts": {
      "name": String,
      "number": String,
      "cost": Number
    }
  }
})

module.exports.connect = () => mongoose.connect(MONGODB_URL)
module.exports.disconnect = () => mongoose.disconnect()