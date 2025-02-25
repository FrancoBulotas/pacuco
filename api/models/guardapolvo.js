
const mongoose = require('mongoose')
    
const guardapolvoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: String,
    type: String,
    amount: Number,
    amountToBuy: Number,
    price: {
        type: Number,
        required: true
    },
    discountPrice: Number,
    size: String,
    img: String,
    img2: String,
    img3: String,
    table: String,
    description: Object,
    featured: Boolean,
    show: Boolean
}, { collection: 'guardapolvos' })

guardapolvoSchema.set('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Guardapolvo', guardapolvoSchema)
