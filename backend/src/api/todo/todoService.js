const Todo = require('./todo')

//API Rest padrão
Todo.methods(['get', 'post', 'put', 'delete'])

//new : true - retornar o registro atualizado, e não o antigo
//runValidators: true - quando é um update, ele não valida. Com essa linha ele valida
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo