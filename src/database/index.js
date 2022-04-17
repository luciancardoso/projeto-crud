const mongoose = require('mongoose');

function connect(){

    mongoose.connect('mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false')

    const db = mongoose.connection

    db.once('open', () => {
        console.log('Connected to database')
    })

    db.on('error', console.error.bind(console, 'connection error: '))

}

// exportar como um objeto
module.exports = {
    connect
}