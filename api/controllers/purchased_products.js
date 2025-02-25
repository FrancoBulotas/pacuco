
const purchasedProductsRouter = require('express').Router()
const PurchasedProduct = require('../models/purchased_product')
const jwt = require('jsonwebtoken')


purchasedProductsRouter.get('/', async (request, response) => {
    const product = await PurchasedProduct.find({})
    response.json(product)
})

purchasedProductsRouter.get('/:id', async (request, response) => {
    const product = await PurchasedProduct.findById(request.params.id)
    response.json(product)
})

purchasedProductsRouter.put('/:id', async (request, response) => {
    const editedPurchasedProduct = await PurchasedProduct.findByIdAndUpdate(request.params.id, request.body)
    response.json(editedPurchasedProduct)
})

purchasedProductsRouter.post('/', async (request, response) => {
    const body = request.body

    const product = new PurchasedProduct({
        operationCode: body.operationCode,
        clientData: body.clientData,
        cartPurchased: body.cart,
        totalPricePurchased: body.totalPricePurchased,
        time: body.time,
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

module.exports = purchasedProductsRouter