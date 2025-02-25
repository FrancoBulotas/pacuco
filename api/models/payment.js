
const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    cvu: String,
    aliasCvu: String,
    titularCuentaCvu: String,
    cbu: String,
    aliasCbu: String,
    titularCuentaCbu: String,
    imgQr: String,
    priceShipmentSucursal: String, 
    priceShipmentDomicilio: String,
}, { collection: 'payments' })
// const paymentSchema = new mongoose.Schema({
//     mercadoPago: Object,
//     transferenciaBancaria: Object,
//     cuentaDNI: Object,
//     priceShipmentSucursal: String, 
//     priceShipmentDomicilio: String,
// }, { collection: 'payments' })


paymentSchema.set('toJSON', {
transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    }
})

const Payment = mongoose.model('Payment', paymentSchema)

module.exports = Payment