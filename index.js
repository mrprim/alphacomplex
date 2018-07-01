const express = require('express')
const app = express()

const onStartup = () => console.log('STARTED!')

app.use(express.static('public'))
app.use(express.static('build'))
app.listen(3000, onStartup)
