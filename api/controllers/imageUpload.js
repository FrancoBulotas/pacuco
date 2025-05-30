
const axios  = require('axios')

const imageUploadRouter = require('express').Router()
const multer = require('multer')

const Readable = require('stream').Readable
const azureStorage = require('azure-storage')
const blobService = azureStorage.createBlobService()
const jwt = require('jsonwebtoken')


const inMemoryStorage = multer.memoryStorage()
const upload = multer({ storage: inMemoryStorage })

const bufferToStream = (buffer) => {
  const stream = new Readable()
  stream.push(buffer)
  stream.push(null)
  return stream
}

imageUploadRouter.post('/', upload.array('images'), async (req, res) => {
  try {
    const files = req.files

    const decodedToken = jwt.verify(req.token, process.env.SECRET)  
    if (!decodedToken.id) {    
      return res.status(401).json({ error: 'token invalid' })  
    }  

    if(!files || files.length === 0){
      return res.json({ message: 'No image uploaded' })
    }

    const containerName = process.env.NODE_ENV === 'development' ? 'guardapolvos-dev' :  req.body.containerName

    for (const file of files) {
      const blobName = `${req.body.blobName}-${file.originalname}`
      const stream = bufferToStream(file.buffer)
      const streamLength = file.buffer.length

      console.log(`Uploading ${blobName} to container ${containerName}`)

      blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, async err => {
        if(err){
          console.log(err)
          return
        }
        console.log('Image uploaded') 
      })
    }
    res.status(200).json({ message: 'Image uploaded successfully' })
  }
  catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Image upload failed' })
  }
})

module.exports = imageUploadRouter
