const port = 3003

const bodyParser =  require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true }))

server.listen(port, function() {
    console.log(`BACAEND as running on port ${port}.`)
})