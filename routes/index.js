'use strict';

const {Router} = require('express')
const router = Router()

	router.get("/", (req, res) => {
		res.render('index')
	})


	router.get("/404", (req, res) => {
		res.render('404', {page: '404'})
	})

module.exports = router