// const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')

// var obj = new ObjectID()
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'finish database work today'})
    //     .then((result) => {
    //         console.log(result)
    //     })


    // deleteOne >> deletes the first record that matced the found
    // db.collection('Todos').deleteOne({text: 'finish database work today'})
    //     .then((result) => {
    //         console.log(result)
    //     })


    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result)
    //     })
    // returns a value object 

    // #Challenge 1: delete duplicates from user collection
    // db.collection('Users').deleteMany({text: 'Ciaran'})
    //     .then((result) => {
    //         console.log(result)
    //     })

    // Challenge 2: delete one fron User collection ussing ID:
    db.collection('Users').findOneAndDelete({ 
        _id: new ObjectID("5be6c49f8be7535e5f4af995") 
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2))
    })




    // client.close()
})

/*
db.collection
lets us target a collection



*/



