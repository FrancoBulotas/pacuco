
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  }

  const token = jwt.sign(    
    userForToken,     
    process.env.SECRET,   
   { expiresIn: (60*60)*8 }  )
  //  { expiresIn: 10 }  )

  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
})


// para chequear que el token del usuario no haya expirado.
loginRouter.post('/checkUserSession', async (req, res) => {
  const decodedToken = jwt.verify(req.body.headers.Authorization, process.env.SECRET)  
    if (!decodedToken.id) {    
      return res.status(401).json({ error: 'token invalid' })  
    } 

    res.status(200).json({ status: 200, message: 'token valid' })
})

module.exports = loginRouter