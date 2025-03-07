
const axios  = require('axios')
const paymentsRouter = require('express').Router()
const Payment = require('../models/payment')
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

paymentsRouter.post('/clearCache', (req, res) => {
    cache.flushAll(); // Borra toda la caché
    console.log("🗑 Caché eliminada");
    res.json({ message: "Cache cleared" });
})

paymentsRouter.get('/', async (req, res) => {
    let paymentMethods = cache.get("paymentMethods");

    if (!paymentMethods) {
        console.log("Obteniendo medios de pago de la base de datos...");
        paymentMethods = await Payment.find({})
        cache.set("paymentMethods", paymentMethods); 
    } else {
        console.log("Usando medios de pago desde caché...");
    }

    res.json(paymentMethods)
})

paymentsRouter.put('/:id', async (request, response) => {
    const paymentMethod = await Payment.findByIdAndUpdate(request.params.id, request.body, { new: true })
    response.json(paymentMethod)
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




module.exports = paymentsRouter