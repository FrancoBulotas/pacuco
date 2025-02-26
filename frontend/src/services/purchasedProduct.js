
import api from './api';
const baseUrl = '/api/purchasedProduct';

const getAll = async () => {
  const response = await api.get(baseUrl)
  return response.data
}

const create = async (product) => {
  const response = await api.post(baseUrl, product)
  return response.data
}

const update = async (id, data, token) => {
  const config = {    
    headers: { Authorization: token }, 
  } 

  const response = await api.put(`${baseUrl}/${id}`, data, config)
  return response.data
}

const deletePurchase = async (id, token) => {
  const config = {    
    headers: { Authorization: token }, 
  } 

  const response = await api.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { getAll, create, update, deletePurchase }