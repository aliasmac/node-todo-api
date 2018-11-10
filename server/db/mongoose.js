var mongoose = require('mongoose')

// tell mogoose to use built in promise library instaead of thrid party
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/TodoApp', )

module.exports = { mongoose }