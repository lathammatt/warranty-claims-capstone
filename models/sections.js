'use strict';

const mongoose = require('mongoose')

module.exports = mongoose.model('Sections', {
  name: String,
})