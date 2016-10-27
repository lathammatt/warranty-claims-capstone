'use strict';

const { Router } = require('express')
const router = Router()
const Claim = require('../models/claim')
const Dealer = require('../models/dealers')
const Vehicle = require('../models/vehicle')

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


router.post('/claim', (req, res, err) => {
  Claim
    .create(req.body)
    .then(() => res.redirect('/confirm'))
    .catch(err)
})

router.get('/confirm', (req, res) => {
  res.render('index')
})

router.get("/404", (req, res) => {
  res.render('404', { page: '404' })
})

module.exports = router