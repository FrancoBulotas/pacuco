
// const client = require('./whatsapp-client');
// const whatsAppWebRouter = require('express').Router()

// // Endpoint para enviar mensajes
// whatsAppWebRouter.post('/', async (req, res) => {
//     const { phone, message } = req.body;

//     if (!phone || !message) {
//         return res.status(400).json({ error: 'Número de teléfono y mensaje son requeridos' });
//     }

//     try {
//         const chatId = phone.includes('@c.us') ? phone : `${phone}@c.us`; // Formato de WhatsApp
//         await client.sendMessage(chatId, message);
//         res.json({ success: true, message: `Mensaje enviado a ${phone}` });
//     } catch (error) {
//         console.error('Error enviando mensaje:', error);
//         res.status(500).json({ error: 'Error enviando mensaje' });
//     }
// });


// module.exports = whatsAppWebRouter;