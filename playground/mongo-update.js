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


    // findOneAndUpdate, takes 3x {} as arguments!
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5be6c0ff8be7535e5f4af820"),
    // }, {
    //     $set: {
    //         completed: true
    //     }     
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })   
    

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5be3191ec469cc4eb2311f1b")
    }, {
        $set: {
            text: 'Aliasgar'
        },
        $inc: {
            age: 9
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // client.close()

})

/* 
https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/
https://docs.mongodb.com/manual/reference/operator/update/

returnOriginal: false gives back the new updated document as opposed to the
default value which gives back the original document 
*/



