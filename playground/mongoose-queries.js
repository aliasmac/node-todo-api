const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')


// var id = '5be703b2c98d191a0c6332b611'

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// })

// when you want to find one document by id only:
// the catch call is for an invalid id e.g. when 11 is added to the id above
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Id not found")
//     }
//     console.log('Todo by ID:', todo)
// }).catch((e) => console.log(e))

// Challenge
var userId = "5be6dcf1317191107a1ae4c6"

User.findById(userId).then((user) => {
    if (!user) {
        return console.log("User not found")
    }
    console.log("User:", user)
}, (e) => {
    console.log(e)
})


/*
https://mongoosejs.com/docs/queries.html

*/