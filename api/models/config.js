
const mongoose = require('mongoose')

const configSchema = new mongoose.Schema({
    frecuentQuestions: Array,
    aboutUs: Object,
    featuredProducts: Object,
    cuentaDniDiscount: Boolean,
    categories: Object,
    styles: Object
}, { collection: 'config' })


configSchema.set('toJSON', {
transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    }
})

const Config = mongoose.model('Configs', configSchema)

module.exports = Config