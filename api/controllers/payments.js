
const axios  = require('axios')
const paymentsRouter = require('express').Router()
const Payment = require('../models/payment')


paymentsRouter.get('/', async (req, res) => {
    const paymentsMethods = await Payment.find({})
    res.json(paymentsMethods)
})

// paymentsRouter.post('/', async (request, response) => {
//     const paymentMethod = new Payment({
//         cvu: "123456",
//         aliasCvu: "pepe.salva.ola",
//         cbu: "123456",
//         aliasCbu: "pepe.salva.hola",
//         imgQr: "image",
//         priceShipmentSucursal: "4000", 
//         priceShipmentDomicilio: "5000",
//     })
  
//     const savedPayment = await paymentMethod.save()
//     response.status(201).json(savedPayment)
// })

paymentsRouter.put('/:id', async (request, response) => {
    const paymentMethod = await Payment.findByIdAndUpdate(request.params.id, request.body, { new: true })
    response.json(paymentMethod)
})


module.exports = paymentsRouter