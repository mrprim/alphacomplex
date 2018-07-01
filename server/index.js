const express = require('express')
const app = express()

const config = require('../firebase.config')
const firebase = require('firebase/app')
require('firebase/firestore')

firebase.initializeApp(config)
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

const onStartup = () => console.log('STARTED!')

app.use(express.static('build'))
app.use(express.static('public'))

app.get('/card', (req, res) => {
  db.collection('cards').doc('a').set({
    name: 'Los',
    state: 'CA',
    country: 'USA'
  }).then(() => res.send('card created'))
})

app.listen(3000, onStartup)
