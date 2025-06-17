
const purchasedProductsRouter = require('express').Router()
const PurchasedProduct = require('../models/purchased_product')
const jwt = require('jsonwebtoken')
const { DateTime } = require('luxon');

purchasedProductsRouter.get('/', async (request, response) => {
    const products = await PurchasedProduct.find({});

    products.sort((a, b) => {
        return new Date(b.time) - new Date(a.time);
    });

    response.json(products)
})

purchasedProductsRouter.get('/:id', async (request, response) => {
    const product = await PurchasedProduct.findById(request.params.id);
    response.json(product)
})

purchasedProductsRouter.put('/:id', async (request, response) => {
    const editedPurchasedProduct = await PurchasedProduct.findByIdAndUpdate(request.params.id, request.body);
    response.json(editedPurchasedProduct);
})

purchasedProductsRouter.post('/', async (request, response) => {
    const body = request.body

    const product = new PurchasedProduct({
        operationCode: body.operationCode,
        clientData: body.clientData,
        cartPurchased: body.cart,
        totalPricePurchased: body.totalPricePurchased,
        time: DateTime.now().setZone('America/Argentina/Buenos_Aires').toJSDate(),
        saleConfirmed: body.saleConfirmed
    })

    const productSaved = await product.save()
    response.status(201).json(productSaved)
})

purchasedProductsRouter.delete('/:id', async (request, response) => {
    console.log(request.token)

    const decodedToken = jwt.verify(request.token, process.env.SECRET)  
    if (!decodedToken.id) {    
      return response.status(401).json({ error: 'token invalid' })  
    }  

    await PurchasedProduct.findByIdAndDelete(request.params.id)
    response.status(204).end()
}) 



// Fecha vieja: 1/3/2025, 07:12:18 - Fecha nueva: DateTime { ts: 2025-03-01T07:12:18.000-03:00, zone: America/Argentina/Buenos_Aires, locale: es-MX }
// Fecha vieja: 15/3/225, 03:51:33 - Fecha nueva: DateTime { Invalid, reason: unparsable }
// Fecha vieja: 09/03/2025, 09:11:48   - Fecha nueva: DateTime { Invalid, reason: unparsable }
purchasedProductsRouter.put('/update/time', async (request, response) => {
    try {
        const products = await PurchasedProduct.find({});
        let updatedCount = 0;        

        for (const product of products) {
            let time = product.time;
            let datePart = time.split(',')[0];
            let hourPart = time.split(',')[1].replace('p.', '').replace('a.', '').replace('m.', '').trimEnd();
            let splittedHourPart = hourPart.split(':');

            if(splittedHourPart[0].length == 2) {
                splittedHourPart[0] = splittedHourPart[0].replace(' ', ' 0');
            }
            hourPart = splittedHourPart.join(':');
            
            let cleanTime = `${datePart},${hourPart}`;
            // console.log(cleanTime);

            if(/^[0-9]/.test(product.time)) {
                // Parsea el string a Date usando luxon
                let fecha;
                fecha = DateTime.fromFormat(cleanTime, "d/M/yyyy, HH:mm:ss", { zone: 'America/Argentina/Buenos_Aires' });
                
                console.log('Fecha vieja:', cleanTime, '- Fecha nueva:', fecha)
                product.time = fecha.toJSDate();
                
                await product.save();
                updatedCount++; 
            }    
        }

        response.json({ updatedCount });
    } catch (e) {
        console.error(e);
        response.status(500).json({ error: "Error al actualizar las fechas." })
    }
})


purchasedProductsRouter.get('/get/onlyTimes', async (request, response) => {
    try {
        const products = await PurchasedProduct.aggregate([
            { $project: { time: 1 } }
        ]);

        products.sort((a, b) => {
            return new Date(b.time) - new Date(a.time);
        });

        response.json({products});
    } catch (e) {
        console.error(e);
        response.status(500).json({ error: "Error al obtener fechas."})
    }
})

purchasedProductsRouter.get('/get/topPaymentMethods', async (request, response) => {
    try {
        const topPaymentMethods = await PurchasedProduct.aggregate([
            { $project: { _id: 0, paymentMethods: '$clientData.paymentMethod' } },
            { $group: { _id: '$paymentMethods', count: { $sum: 1 } } }
        ]);

        response.json({ topPaymentMethods });
    } catch (e) {
        console.error(e);
        response.status(500).json({ error: "Error al obtener metodos de pago."})
    }
});

module.exports = purchasedProductsRouter