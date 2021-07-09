const express = require('express')

// Forma para receber parametro, é exportar uma função que recebe um parametro
module.exports = function(server) {

   // API Routes
   const router = express.Router()
   server.use('/api', router)

   // TODO Routes
   const todoService = require('../api/todo/todoService')

   // Vai usar todos os métodos usando a url /todos como base
   todoService.register(router, '/todos')
}