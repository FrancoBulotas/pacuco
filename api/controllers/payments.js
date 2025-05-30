
const axios  = require('axios')
const paymentsRouter = require('express').Router()
const Payment = require('../models/payment')
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

paymentsRouter.post('/clearCache', (req, res) => {
    cache.flushAll(); // Borra toda la caché
    console.log("🗑 Caché Payment Methods eliminada");
    res.json({ message: "Cache cleared" });
})

paymentsRouter.get('/', async (req, res) => {
    let paymentMethods = cache.get("paymentMethods");

    try {
        if (!paymentMethods) {
            console.log("⚡ Obteniendo medios de pago de la base de datos...");
            paymentMethods = await Payment.find({}).lean();
            cache.set("paymentMethods", paymentMethods); 
        } else {
            console.log("♻️ Usando medios de pago desde caché...");
        }

        res.json(paymentMethods)
    } catch (error) {
        console.error("Error al obtener los métodos de pago:", error);
        res.status(500).json({ error: 'Error al obtener los métodos de pago' });
    }
})

paymentsRouter.put('/:id', async (request, response) => {
    try {
        const paymentMethod = await Payment.findByIdAndUpdate(request.params.id, request.body, { new: true })

        cache.flushAll(); // Borra toda la caché
        console.log("🗑 Caché Payment Methods eliminada");

        response.json(paymentMethod)
    } catch (error) {
        console.error("Error al actualizar el método de pago:", error);
        response.status(500).json({ error: 'Error al actualizar el método de pago' });
    }
})

// PATCH para eliminar campos específicos de un documento
paymentsRouter.patch('/clean/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Payment.updateOne(
            { _id: id },
            {
                $unset: {
                    cvu: "",
                    aliasCvu: "",
                    cbu: "",
                    aliasCbu: "",
                    imgQr: "",
                    titularCuentaCbu: "",
                    titularCuentaCvu: ""
                }
            }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Método de pago no encontrado' });
        }

        const updated = await Payment.findById(id).lean();

        res.json({ message: 'Campos eliminados correctamente', updatedDocument: updated });
    } catch (error) {
        console.error('Error al eliminar campos:', error);
        res.status(500).json({ error: 'Error al limpiar campos del método de pago' });
    }
});

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