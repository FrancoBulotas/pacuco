
import api from './api';
const baseUrl = `/api/products/guardapolvos`

const getAll = async () => {
    const response = await api.get(baseUrl)
    return response.data
}

const getById = async (id) => {
    const response = await api.get(`${baseUrl}/${id}`)
    return response.data;
}

const getGuardapolvoByTable = async table => {
    const response = await api.get(baseUrl)
    const guardapolvosSorted = response.data.filter(item => item.table === table)
    return guardapolvosSorted
}

const create = async (newObject, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }

    const response = await api.post(baseUrl, newObject, config)
    return response.data
}

const changePriceByPorcentage = async (body, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }

    const response = await api.post(`${baseUrl}/changePriceByPorcentage`, body, config)
    return response.data
}

const update = async (id, newObject, token) => {
    // const config = {    
    //     headers: { Authorization: token }, 
    // }

    const response = await api.put(`${baseUrl}/${id}`, newObject)
    return response.data
}

const deleteGuardapolvo = async (id, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }

    const response = await api.delete(`${baseUrl}/${id}`, config)
    return response.data
}

export default { getAll, getById, deleteGuardapolvo, create, changePriceByPorcentage, getGuardapolvoByTable, update }