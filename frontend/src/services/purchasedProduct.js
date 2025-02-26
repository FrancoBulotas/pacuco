
import axios from 'axios'
const baseUrl = '/api/purchasedProduct'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (product) => {
  const response = await axios.post(baseUrl, product)
  return response.data
}

const update = async (id, data, token) => {
  const config = {    
    headers: { Authorization: token }, 
  } 

  const response = await axios.put(`${baseUrl}/${id}`, data, config)
  return response.data
}

const deletePurchase = async (id, token) => {
  const config = {    
    headers: { Authorization: token }, 
  } 

  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { getAll, create, update, deletePurchase }