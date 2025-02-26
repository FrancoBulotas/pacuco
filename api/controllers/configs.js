
const configsRouter = require('express').Router()
const Config = require('../models/config')

const jwt = require('jsonwebtoken')


configsRouter.get('/', async (request, response) =>{
    const config = await Config.find({})    
    response.json(config)   
})


// como el id es fijo, ponerlo en .env y que lo tome de ahi
configsRouter.put('/:id', async (request, response) => {
    const data = request.body    

    const decodedToken = jwt.verify(request.token, process.env.SECRET)  
    if (!decodedToken.id) {    
      return response.status(401).json({ error: 'token invalid' })  
    }  

    const res = await Config.findByIdAndUpdate(request.params.id, data, { new:true });

    response.status(200).json(res);
})

module.exports = configsRouter