
const configsRouter = require('express').Router()
const Config = require('../models/config')
const jwt = require('jsonwebtoken')
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

configsRouter.post('/clearCache', (req, res) => {
    cache.flushAll(); 
    console.log("🗑  Caché de config eliminada");
    res.json({ message: "Cache cleared" });
})

configsRouter.get('/', async (request, response) =>{
    let configs = cache.get("configs");
    
    if (!configs) {
        console.log("⚡ Obteniendo config de la base de datos...");
        configs = await Config.find({})    
        cache.set("configs", configs); 
    } else {
        console.log("♻️ Usando config desde caché...");
    }
    response.json(configs);
})


// como el id es fijo, ponerlo en .env y que lo tome de ahi
configsRouter.put('/:id', async (request, response) => {
    const data = request.body;

    // const decodedToken = jwt.verify(request.token, process.env.SECRET)  
    // if (!decodedToken.id) {    
    //     return response.status(401).json({ error: 'token invalid' })  
    // }  
    
    cache.flushAll(); 
    console.log("🗑  Caché de config eliminada");

    const res = await Config.findByIdAndUpdate(request.params.id, data, { new:true });

    response.status(200).json(res);
})

module.exports = configsRouter