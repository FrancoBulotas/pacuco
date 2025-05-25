
const { MercadoPagoConfig } = require('mercadopago');
require('dotenv').config();

const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN_MP_DEV,
});

module.exports = client;
