
require('dotenv').config()

const PORT = process.env.PORT || 8080

const MONGODB_URI = process.env.NODE_ENV === 'development'   
    ? process.env.MONGODB_URI_DEV  
    : process.env.MONGODB_URI


const _module = {
  getStorageAccountName: () => {
    const matches = /AccountName=(.*?);/.exec(process.env.AZURE_STORAGE_CONNECTION_STRING)
    return matches[1]
  }
}

module.exports = {
  MONGODB_URI,
  PORT,
  _module
}