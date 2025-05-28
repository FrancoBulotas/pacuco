
const guardapolvosRouter = require('express').Router();
const Guardapolvo = require('../models/guardapolvo')
const jwt = require('jsonwebtoken')

function roundDownToNearestHundred(number) {
    return Math.floor(number / 100) * 100;
}

const roundNumber = (num) => {
    if(num === undefined || num === null) {
        return num;
    }
    return Math.ceil(num / 100) * 100;
}


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
    // price viene === al listedPrice, por lo que se le aplica un descuento del 6% al precio
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
        price: roundNumber(body.price * 0.94),
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

// PUT
guardapolvosRouter.put('/:id', async (request, response) => {
    // price viene === al listedPrice, por lo que se le aplica un descuento del 6% al precio
    const { name, type, amount, amountToBuy, size, price, listedPrice,
        discountPrice, img, img2, img3, table, description, category, show } = request.body

    // const decodedToken = jwt.verify(request.token, process.env.SECRET)  
    // if (!decodedToken.id) {    
    //   return response.status(401).json({ error: 'token invalid' })  
    // }  
    const newPrice = roundNumber(price * 0.94)

    response.json(await Guardapolvo.findByIdAndUpdate(request.params.id,
    { name, type, amount, amountToBuy, size, price: newPrice, listedPrice, discountPrice, img, img2, img3, table, description, category, show }, 
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

// Actualiza el campo listedPrice de todos los guardapolvos que ya tengan listedPrice
guardapolvosRouter.post('/updateField', async (request, response) => {
    
    try {
        const result = await Guardapolvo.updateMany(
            { listedPrice: { $exists: false } },
            [{ $set: { listedPrice: { $multiply: [ { $ceil: { $divide: [ { $multiply: ["$price", 1.06] }, 100 ] } }, 100 ] } } } ]
        );
        console.log('Documentos actualizados:', result.modifiedCount);
        response.status(201).json({ message: 'Added successfully', ok: true });
    } catch (err) {
        console.error('Error actualizando documentos:', err);
        response.status(501).json({ error: 'Error trying to add field', ok: false });
    }
})

// Elimina el campo pasado por el body de todos los guardapolvos que ya tengan el campo
guardapolvosRouter.post('/deleteField', async (request, response) => {
    const { field } = request.body;

    if (!field || typeof field !== 'string') {
        return response.status(400).json({ error: 'Field name is required and must be a string', ok: false });
    }

    try {
        const result = await Guardapolvo.updateMany(
            { [field]: { $exists: true } },
            { $unset: { [field]: "" } }
        );
        
        console.log(`Campo '${field}' eliminado en ${result.modifiedCount} documentos`);
        response.status(200).json({ message: `Field '${field}' deleted successfully`, ok: true });
    } catch (err) {
        console.error('Error eliminando campo:', err);
        response.status(500).json({ error: 'Error trying to delete field', ok: false });
    }
});




module.exports = guardapolvosRouter