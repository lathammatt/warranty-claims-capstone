'use strict';

const { Router } = require('express')
const router = Router()
const Claim = require('../models/claim')
const Dealer = require('../models/dealers')
const Vehicle = require('../models/vehicle')
const Sections = require('../models/sections')
const Parts = require('../models/parts')
const Labor = require('../models/labor')

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/api/dealer', (req, res, err) => {
  Dealer
    .find().sort({name: 1})
    .then(dealers => res.json(dealers))
    .catch(err)
})

router.get('/api/vehicles', (req, res, err) => {
  Vehicle
    .find().sort({name: 1})
    .then(vehicles => res.json(vehicles))
    .catch(err)
})

router.get('/api/sections', (req, res, err) => {
  Sections
    .find().sort({name: 1})
    .then(sections => res.json(sections))
    .catch(err)
})

router.get('/api/parts', (req, res, err) => {
  Parts
    .find()
    .then(parts => res.json(parts))
    .catch(err)
})

router.get('/api/labor', (req, res, err) => {
  Labor
    .find()
    .then(labor => res.json(labor))
    .catch(err)
})

router.post('/api/claim', (req, res, err) => {
  Claim
    .create(req.body)
    .then(res.end())
    .catch(err)
})

router.get('/api/claims', (req, res, err) => {
  Claim
    .find().sort({_id:-1})
    .then(claim => res.json(claim))
    .catch(err)
})

router.get("/404", (req, res) => {
  res.render('404', { page: '404' })
})

module.exports = router