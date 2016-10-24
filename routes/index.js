'use strict';

const { Router } = require('express')
const router = Router()
const Claim = require('../models/claim')

router.get("/", (req, res) => {
  res.render('index')
})

router.get('/claim', (req, res, err) => {
  Promise
    .all([
      Vehicles.find().sort({name: 1}),
      Parts.find().sort({name: 1}),
      Labor.find().sort({name: 1})
    ])
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