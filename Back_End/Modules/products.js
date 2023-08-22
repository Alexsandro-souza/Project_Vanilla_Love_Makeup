const mongoose = require('mongoose')
const {Schema} = mongoose;


const productsSchema = new Schema({    
        categoria: {
            type: String,
            required: true
        },
        nome: {
          type: String,
          required: true
        },
        descrição: {
          type: String,
          required: true
        },
        preço: {
          type: Number,
          required: true
        },
        estoque: {
          type: Number,
          required: true
        },
        favorito: {
          type: Number,
          
        }     
    
},{timestamps : true})

const Products = mongoose.model('Products', productsSchema)

module.exports = Products

