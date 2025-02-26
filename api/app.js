
const config = require('./utils/config')
const express = require('express')
const path = require('path')
require('express-async-errors')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const guardapolvosRouter = require('./controllers/guardapolvos')
// const whatsAppWebRouter = require('./controllers/whatsapp-server')
const searchProdsRouter = require('./controllers/searchProds')
const imageUploadRouter = require('./controllers/imageUpload')
const usersRouter = require('./controllers/users') 
const configRouter = require('./controllers/configs') 
const loginRouter = require('./controllers/login')
const paymentsRouter = require('./controllers/payments')
const purchasedProductsRouter = require('./controllers/purchased_products')
const emailsRouter = require('./controllers/emails')
const middleware = require('./utils/middleware')


mongoose.set('strictQuery', false)
mongoose.connect(config.MONGODB_URI)
    .then(() => {
    console.log(`connected to MongoDB`)
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

app.use(cors({
    origin: 'https://pacuco-client.vercel.app/', // Reemplaza con la URL de tu frontend
    credentials: true,
}));

app.use(express.json())
// app.use(express.static('dist'))
app.use(express.static(path.join(__dirname, "dist")));
 
app.use(middleware.tokenExtractor)
app.use(middleware.userExtractor)

app.use('/api/users', usersRouter)
app.use('/api/config', configRouter)
app.use('/api/login', loginRouter)
app.use('/api/uploadImage', imageUploadRouter)
app.use('/api/products/guardapolvos', guardapolvosRouter)
// app.use('/api/sendMessage', whatsAppWebRouter)
app.use('/api/', searchProdsRouter)
app.use('/api/payments', paymentsRouter)
app.use('/api/purchasedProduct', purchasedProductsRouter)
app.use('/api/emails', emailsRouter)

app.use(middleware.errorHandler)

module.exports = app