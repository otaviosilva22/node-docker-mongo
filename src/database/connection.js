const mongoose = require('mongoose');

async function mongooseConnection(){
    mongoose
        .connect('mongodb://mongo_database:27017/mongo-database', {
            useNewUrlParser: true
        })
        .then(result => {
            console.log('MongoDB is connected!');
        })
        .catch(error => {
            console.log('Error message: ',error);
        });
}

module.exports = {mongooseConnection};