

const mongoose = require('mongoose')

const purchasedProductSchema = new mongoose.Schema({
    operationCode: {
        type: String,
        required: true,
        unique: true,
    },
    clientData: Object,
    cartPurchased : Array,
    totalPricePurchased: String,
    time: String,
    saleConfirmed: Boolean,
}, { collection: 'purchased_products' })


purchasedProductSchema.set('toJSON', {
transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    }
})

const PurchasedProduct = mongoose.model('PurchasedProduct', purchasedProductSchema)

module.exports = PurchasedProduct