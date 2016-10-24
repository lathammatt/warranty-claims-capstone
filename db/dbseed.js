'use strict';

const {connect, disconnect} = require('./database')


const Vehicles = require('../models/vehicle')
const Parts = require('../models/parts')
const Labor = require('../models/labor')

const part = require('./parts')

connect()
  .then(() => Parts.remove({}))
  .then(() => Parts.insertMany(part))
  .then(disconnect)
  .catch(console.error)