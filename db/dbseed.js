'use strict';

const {connect, disconnect} = require('./database')


const Vehicles = require('../models/vehicle')
const Parts = require('../models/parts')
const Labor = require('../models/labor')
const Sections = require('../models/sections')

const part = require('./parts')
const section = require('./sections')
const vehicle = require('./vehicles')

connect()
  .then(() => Parts.remove({}))
  .then(() => Parts.insertMany(part))
  .then(() => Sections.remove({}))
  .then(() => Sections.insertMany(section))
  .then(() => Vehicles.remove({}))
  .then(() => Vehicles.insertMany(vehicle))
  .then(disconnect)
  .catch(console.error)