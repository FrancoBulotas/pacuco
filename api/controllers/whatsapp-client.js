
// const { Client, LocalAuth } = require('whatsapp-web.js');
// const qrcode = require('qrcode-terminal');

// const client = new Client({
//     authStrategy: new LocalAuth(), // Guarda la sesión localmente
//     puppeteer: {
//         headless: true, // Ejecuta el navegador en modo headless
//         executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
//         args: [
//             '--no-sandbox', // Desactiva el sandboxing
//             '--disable-setuid-sandbox', // Desactiva el setuid sandbox
//             '--disable-dev-shm-usage', // Evita problemas de memoria compartida
//             '--disable-accelerated-2d-canvas', // Desactiva la aceleración de canvas 2D
//             '--no-first-run', // Evita la ejecución de procesos iniciales
//             '--no-zygote', // Desactiva el proceso zygote
//             '--single-process', // Ejecuta en un solo proceso
//             '--disable-gpu' // Desactiva la aceleración por GPU
//         ]
//     }
// });

// client.on('qr', qr => {
//     console.log('Escanea este código QR con WhatsApp:');
//     qrcode.generate(qr, { small: true });
// });

// client.on('ready', () => {
//     console.log('Cliente de WhatsApp está listo');
// });

// client.on('auth_failure', () => {
//     console.log('Fallo de autenticación');
// });

// client.on('disconnected', () => {
//     console.log('Cliente desconectado');
// });

// client.on('error', (error) => {
//     console.log('Error en el cliente de WhatsApp:', error);
// });

// client.initialize();

// module.exports = client;
