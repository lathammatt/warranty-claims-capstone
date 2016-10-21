'use strict';

const { Router } = require('express')
const router = Router()
const Claim = require('../models/claim')

router.get("/", (req, res) => {
  res.render('index')
})

router.get('/claim', (req, res) => {
  res.render('claim', {page: 'Claim',
//all elements to be put in select menus
})
})

router.post('/claim', (req, res, err) => {
  Claim
    .create(req.body)
    .then(() => res.redirect('/confirm'))
    .catch(err)
})

router.get('/confirm', (req, res) => {
  res.render('confirm', {page: 'Claim'})
})

router.get("/404", (req, res) => {
  res.render('404', { page: '404' })
})

module.exports = router