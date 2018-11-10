const {ObjectID} = require('mongodb')

const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')

// .remove() needs to be passed an argument, in this case an empty object
// Todo.remove({}).then((result) => {
//     console.log(result)
// }) 

// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '5be756138be7535e5f4b1202'}).then((todo) => {
    console.log(todo)
})


// Todo.findByIdAndRemove

Todo.findByIdAndRemove('5be756138be7535e5f4b1202').then((todo) => {
    console.log(todo)
})