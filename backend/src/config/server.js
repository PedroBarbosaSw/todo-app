const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//urlEncoded é o padrão usado para submissao de formulários.
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
   console.log(`Backend is running on port ${port}.`)
})

module.exports = server