
import axios from 'axios'
const baseUrl = `/api/config`

const get = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const update = async (data, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }
    
    const response = await axios.put(`${baseUrl}/${data.id}`, data, config);
    return response.data;
}

export default { get, update }

