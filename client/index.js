const config = require('../firebase.config')
const firebase = require('firebase/app')
require('firebase/firestore')

firebase.initializeApp(config)
const db = firebase.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

db.collection('users').get().then((querySnapshot) => {
  console.log('got users')
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
  })
})

console.log('bundle built and loaded')
