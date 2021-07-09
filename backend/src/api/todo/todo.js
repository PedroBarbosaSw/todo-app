const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
   //Descrição tarefa - obrigatória
   description: { type: String, required: true},
   //Verificar se concluiu a tarefa - obrigatória
   done: { type: Boolean, required: true, default: false},
   //Data de criação
   createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Todo', todoSchema)