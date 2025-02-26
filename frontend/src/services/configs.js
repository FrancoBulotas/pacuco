

import api from './api';
const baseUrl = `/api/config`;

const get = async () => {
    const response = await api.get(baseUrl)
    return response.data
}

const update = async (data, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }
    
    const response = await api.put(`${baseUrl}/${data.id}`, data, config);
    return response.data;
}

export default { get, update }

