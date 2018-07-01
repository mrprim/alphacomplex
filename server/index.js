const express = require('express')
const app = express()
const routes = require('./routes/')
const config = require('../firebase.config')
const firebase = require('firebase/app')
require('firebase/firestore')

firebase.initializeApp(config)
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)
app.db = db

const onStartup = () => console.log('STARTED!')

app.use(express.static('build'))
app.use(express.static('public'))

routes(app)

app.listen(3000, onStartup)
