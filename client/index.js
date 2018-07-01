const config = require('../firebase.config')
const firebase = require('firebase/app')
require('firebase/firestore')

firebase.initializeApp(config)
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

db.collection('cards').get().then(querySnapshot => {
  querySnapshot.forEach(doc => document.write(`${doc.id} => ${JSON.stringify(doc.data())}<br/>`))
})

console.log('bundle built and loaded')
