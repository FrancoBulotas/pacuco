
// const mercadopagoRouter = require('express').Router();

// const { client, Preference } = require('../models/mercadopago.config');

// mercadopagoRouter.post('/create-preference', async (req, res) => {
//     try {
//         const { items, backUrl, shippingPrice } = req.body;


//         // Crear los ítems del carrito
//         const cartItems = items.map((item) => ({
//             title: item.name,
//             unit_price: item.price,
//             quantity: item.quantity,
//         }));
    
//         // Agregar el costo del envío como un ítem adicional
//         if (shippingPrice > 0) {
//             cartItems.push({
//             title: 'Costo de Envío',
//             unit_price: shippingPrice,
//             quantity: 1,
//             });
//         }
    
//         const preferenceData = {
//             items: cartItems,
//             back_urls: {
//             success: `${backUrl}/finalizarCompra/success`,
//             failure: `${backUrl}/finalizarCompra`,
//             pending: `${backUrl}/pending`,
//             },
//             auto_return: 'approved', // Redirige automáticamente si el pago es aprobado
//         };
    
//         const preference = new Preference(client);
//         const response = await preference.create({ body: preferenceData });
    
//         res.json({ id: response.id }); // Devuelve el ID de la preferencia
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error al crear la preferencia de pago' });
//       }
// });

// module.exports = mercadopagoRouter;