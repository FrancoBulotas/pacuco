
const emailsRouter = require('express').Router()
const sendGridMail = require('@sendgrid/mail')

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY)

emailsRouter.post('/send', async (req, res) => {

    const msg = req.body.msg

    sendGridMail.send(msg)
    .then((data) => {
      console.log('Email sent')
      res.status(202).json({ statusCode: data[0].statusCode, body: data[0].body }).end()
    })
    .catch((error) => {
      console.error(error)
      res.status(400).json({ error }).end()
    })
})

module.exports = emailsRouter 