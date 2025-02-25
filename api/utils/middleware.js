
const User = require('../models/user')
const jwt = require('jsonwebtoken')


const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    
    if (response.headersSent) {
        return response.status(500).send({ error: 'header already sent' })

    }
    else if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    }
    else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })  
    }
    else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {    
        return response.status(400).json({ error: 'expected `username` to be unique' })  
    }
    else if (error.name ===  'JsonWebTokenError') {    
        return response.status(401).json({ error: 'token invalid' })  
    }
    else if (error.name === 'TokenExpiredError') {    
        return response.status(401).json({ error: 'token expired' })  
    }
    
    next(error)
}


const tokenExtractor = (request, respose, next) => {
    const authorization = request.get('authorization')  
    if (authorization && authorization.startsWith('Bearer ')) {    
        request.token = authorization.replace('Bearer ', '')
    }  
    next()
    return null   
}

const userExtractor = async (request, response, next) => {
    if(request.token){
        const decodedToken = jwt.verify(request.token, process.env.SECRET)  
        request.user = await User.findById(decodedToken.id)
    }
    next()
}


module.exports = {
    errorHandler,
    tokenExtractor,
    userExtractor
}