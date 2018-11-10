var express = require('express')
var bodyParser = require('body-parser')

// importing all local dependencies 
// database
var {mongoose} = require('./db/mongoose')
// models
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e)
    })
})

app.listen(3000, () => {
    console.log('Started on port 3000')
})






































// // tell mogoose to use built in promise library instaead of thrid party
// mongoose.Promise = global.Promise

// mongoose.connect('mongodb://localhost:27017/TodoApp', )

// // .model() is a method used to create a new mode
// // the second argument is similar to the schema object on the 
// // mongoose schema website 

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String, 
//         required: true, 
//         minlength: 1, 
//         trim: true
//     },
//     completed: {
//         type: Boolean, 
//         default: false 
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// })

// // var newTodo = new Todo({
// //     text: "Cook dinner"
// // })

// // newTodo.save().then((doc) => {
// //     console.log("Saved todo", doc)
// // }, (error) => {
// //     console.log('Unable to save Todo')
// // })

// // var secondToDo = new Todo({
// //     text: "hello"
// //  })

// // secondToDo.save().then((doc) => {
// //     console.log(JSON.stringify(doc, undefined, 2))
// // }, (error) => {
// //     console.log("Unable to save todo")
// // })



// // #Challenge: create new User model 
// var User = mongoose.model('User', {
//     email: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     }
// })

// var newUser = new User({
//     email: "makdaa1@gmail.com"
// })

// newUser.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2))
// }, (error) => {
//     console.log("unable to save user")
// })






/*
https://mongoosejs.com/docs/validation.html

Schema:
https://mongoosejs.com/docs/guide.html
is the same as schema.rb file in RoR and in the same way each model 
has a table, each collection/model has a schema

*/


