
const guardapolvosRouter = require('express').Router();
const Guardapolvo = require('../models/guardapolvo')
const jwt = require('jsonwebtoken')

// GET
guardapolvosRouter.get('/', async (request, response) => {
    const guardapolvos = await Guardapolvo.find({})    
    response.json(guardapolvos)      
})

guardapolvosRouter.get('/:id', async (request, response) => {
    const guardapolvo = await Guardapolvo.findById(request.params.id)    
    response.json(guardapolvo);      
})

// POST
guardapolvosRouter.post('/', async (request, response) => {
    const body = request.body

    const decodedToken = jwt.verify(request.token, process.env.SECRET)  
    if (!decodedToken.id) {    
      return response.status(401).json({ error: 'token invalid' })  
    }  

    const guardapolvo = new Guardapolvo({
        name: body.name,
        type: body.type,
        category: body.category,
        amount: body.amount,
        amountToBuy: body.amountToBuy,
        price: body.price,
        listedPrice: body.listedPrice,
        discountPrice: body.discountPrice,
        type: body.type,
        size: body.size,
        img: body.img,
        img2: body.img2,
        img3: body.img3,
        table: body.table,
        description: body.description,
        featured: body.featured,
        show: body.show
    })

    const savedGuguardapolvo = await guardapolvo.save()
    response.status(201).json(savedGuguardapolvo)
})

function roundDownToNearestHundred(number) {
    return Math.floor(number / 100) * 100;
}

guardapolvosRouter.post('/changePriceByPorcentage', async (request, response) => {
    // aca habria que desarrollar la logica que le agregue cierto % que viene en la request, al precio de todos los guarapolvos
    const body = request.body

    const decodedToken = jwt.verify(request.token, process.env.SECRET)  
    if (!decodedToken.id) {    
      return response.status(401).json({ error: 'token invalid' })  
    }  

    // guardapolvos a editar precio
    const guardapolvos = body.guardapolvos
    // porcentaje que se aumentara el precio
    const porcent = body.porcent

    try {
        await Promise.all (guardapolvos.map(async (guardapolvo) => {
            const newPrice = guardapolvo.price = roundDownToNearestHundred(Number(guardapolvo.price) + (Number(guardapolvo.price) * porcent))
                
            const newGuardapolvo = {
                ...guardapolvo,
                price: newPrice 
            }

            await Guardapolvo.findByIdAndUpdate(newGuardapolvo.id, newGuardapolvo, { runValidators: true, context: 'query' })
        }))
        response.status(201).json({ message: 'Prices updated successfully', ok: true });
    } catch(error){
      response.status(501).json({ error: 'error trying to change price', ok: false }).end()
    }
})

// lo hice para agregar el campo type:guardapolvo por primera vez en todos los guardapolvos
guardapolvosRouter.post('/updateField', async (request, response) => {
    
    try {
        const result = await Guardapolvo.updateMany(
            { listedPrice: { $exists: false } }, // Solo documentos que ya tengan listedPrice
            [{ $set: { listedPrice: { $add: ["$price", 4000] } } } ]
        );
        console.log('Documentos actualizados:', result.modifiedCount);
        response.status(201).json({ message: 'Added successfully', ok: true });
    } catch (err) {
        console.error('Error actualizando documentos:', err);
        response.status(501).json({ error: 'Error trying to add field', ok: false });
    }
})

// PUT
guardapolvosRouter.put('/:id', async (request, response) => {
    const { name, type, amount, amountToBuy, size, price, listedPrice,
        discountPrice, img, img2, img3, table, description, category, show } = request.body

    // const decodedToken = jwt.verify(request.token, process.env.SECRET)  
    // if (!decodedToken.id) {    
    //   return response.status(401).json({ error: 'token invalid' })  
    // }  

    response.json(await Guardapolvo.findByIdAndUpdate(request.params.id,
    { name, type, amount, amountToBuy, size, price, listedPrice, discountPrice, img, img2, img3, table, description, category, show }, 
    { new: true, runValidators: true, context: 'query' }))
})



// DELETE
guardapolvosRouter.delete('/:id', async (request, response) => {
    
    const decodedToken = jwt.verify(request.token, process.env.SECRET)  
    if (!decodedToken.id) {    
      return response.status(401).json({ error: 'token invalid' })  
    }  

    await Guardapolvo.findByIdAndDelete(request.params.id)
    response.status(204).end()
})

module.exports = guardapolvosRouter