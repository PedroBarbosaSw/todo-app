//Mongoose serve para fazer o mapeamento dos objetos em javascript
//Também serve para abrir uma conexão com o Mongo e mandar os comandos (insert, update, etc...)
const mongoose = require('mongoose')

//Apenas para evitar a advertência
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')