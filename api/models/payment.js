
const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    transferencia: {
        cbu: String,
        aliasCbu: String,
        titularCuentaCbu: String
    },
    mercadoPago: {
        currentUser: String,
        currentUserPublicKey: String
    },
    bancoFrances: {
        imgQr: String
    },
    priceShipmentSucursal: String, 
    priceShipmentDomicilio: String
}, { collection: 'payments' })


paymentSchema.set('toJSON', {
transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    }
})

const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment