

import api from './api';

const baseUrl = '/api/uploadImage';

const upload = async (data, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }

    const response = await api.post(baseUrl, data, config)
    return response.data
}

export default { upload }