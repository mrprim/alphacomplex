const express = require('express')
const app = express()

const onStartup = () => console.log('STARTED!')

app.use(express.static('public'))
app.listen(3000, onStartup)
