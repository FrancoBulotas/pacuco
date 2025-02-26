
import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_URL}/api/products/guardapolvos`

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data;
}

const getGuardapolvoByTable = async table => {
    const response = await axios.get(baseUrl)
    const guardapolvosSorted = response.data.filter(item => item.table === table)
    return guardapolvosSorted
}

const create = async (newObject, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }

    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const changePriceByPorcentage = async (body, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }

    const response = await axios.post(`${baseUrl}/changePriceByPorcentage`, body, config)
    return response.data
}

const update = async (id, newObject, token) => {
    // const config = {    
    //     headers: { Authorization: token }, 
    // }

    const response = await axios.put(`${baseUrl}/${id}`, newObject)
    return response.data
}

const deleteGuardapolvo = async (id, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }

    const response = await axios.delete(`${baseUrl}/${id}`, config)
    return response.data
}

export default { getAll, getById, deleteGuardapolvo, create, changePriceByPorcentage, getGuardapolvoByTable, update }