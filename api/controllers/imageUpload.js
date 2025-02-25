
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

    const containerName = process.env.NODE_ENV === 'development' 
    ? 'guardapolvos-dev' 
    :  req.body.containerName

    for (const file of files) {
      const blobName = `${req.body.blobName}-${file.originalname}`
      const stream = bufferToStream(file.buffer)
      const streamLength = file.buffer.length

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

// const containerName = 'guardapolvos'

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'images/guardapolvos/') 
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = req.body.uniqueSuffix
//       console.log(uniqueSuffix)
//       cb(null, uniqueSuffix + "-" + file.originalname)
//     },
// })
// const upload = multer({ storage: storage })

// imageUploadRouter.post('/edit', upload.array('images', 2), async (req, res) => {
//     try {

//         const files = req.files

//         const blobName = getBlobName(req.file.originalname)
        
//         const stream = bufferToStream(req.file.buffer)
//         const streamLength = req.file.buffer.length

//         blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, async err => {
//           if(err){
//             console.log(err)
//             return
//           }

//           const id = req.body.id
//           const name = req.body.name
//           const price = req.body.price
//           const description = req.body.description
//           const images = req.file
//           let imgName = req.body.img
//           let imgName2 = req.body.img2
  
//           const data = {
//               name : name,
//               price : price,
//               description : description,
//               img : imgName,
//               img2 : imgName2,
//           }
              
//           console.log(data)
//           console.log(images)
  
//           await axios.put(`http://localhost:${process.env.PORT}/api/products/guardapolvos/${id}`, data)
  
//           console.log('Image uploaded')
//           res.status(200).json({ message: 'Image uploaded successfully' })
//         })
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({ message: 'Image upload failed' })
//     }
// })

// imageUploadRouter.post('/create', upload.array('images', 2), async (req, res) => {
//     try {

//       let requestAborted = false
//       req.on('close', () => {
//         if (!res.headersSent) {
//           requestAborted = true
//           console.error('Request aborted by the client')
//         }
//       })
  
//       setTimeout(async () => {
//         if (requestAborted) {
//           console.log('La solicitud fue abortada, no se enviará respuesta.')
//           return
//         }
              
//         const table = req.body.table

//         const data = {
//             name : req.body.name,
//             price : req.body.price,
//             amount: req.body.amount,
//             amountToBuy: req.body.amountToBuy,
//             size: req.body.size,
//             table: table,
//             description : req.body.description,
//             img : req.body.img,
//             img2 : req.body.img2,
//         }

//         console.log(data)
//         console.log(req.files)

//         await axios.post(`http://localhost:${process.env.PORT}/api/products/guardapolvos`, data)

//         console.log('Image uploaded')
//         res.status(200).json({ message: 'Image uploaded successfully' })
//       }, 1000)
//     } catch (error) {
//       console.error(error)
//       res.status(500).json({ message: 'Image upload failed' })
//     }
// })

// const checkHeaders = (res, req) => {
//   let requestAborted = false
//   req.on('close', () => {
//     if (!res.headersSent) {
//       requestAborted = true
//       console.error('Request aborted by the client')
//     }
//   })

//   setTimeout(() => {
//     if (requestAborted) {
//       console.log('La solicitud fue abortada, no se enviará respuesta.')
//       return
//     }
//     console.log('Image uploaded')
//     res.status(200).json({ message: 'Image uploaded successfully' })
//   }, 1000)
// }

// imageUploadRouter.post('/', upload.single('image'), (req, res) => {
//   try {
//     checkHeaders(res, req)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ message: 'Image upload failed' })
//   }
// })
