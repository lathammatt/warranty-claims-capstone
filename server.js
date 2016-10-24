'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index')

const app = express()

const PORT = process.env.PORT || 7575
app.set('port', PORT)

app.set('view engine', 'pug')

if(process.env.NODE_ENV !== 'production'){
	app.locals.pretty = true
}
app.locals.company = "Warranty Claims"

//middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
	console.log("Request sent to", req.url);
	next()
})

// Error-handling middleware
app.use((err, {method, url, headers: {'user-agent': agent}}, res, next) => {
	res.sendStatus(err.status || 500)
	const timestamp = new Date()
	console.error(`[${timestamp}] Error(${res.statusCode}) :"${res.statusMessage}"`);
	console.error(err.stack)
})

// routes
app.use(routes)



//server ears
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})