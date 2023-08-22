const mongoose = require('mongoose')
require('dotenv').config();

const main = async()=>{
    try {        
        await mongoose.connect(`mongodb+srv://${process.env.USER_DB_MONGO}:${process.env.KEY_DB_MONGO}@cluster0.de6wbyw.mongodb.net/?retryWrites=true&w=majority`)
        console.log('DB_Mongo conectado!')
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = main