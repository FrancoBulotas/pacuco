

import axios from 'axios'
const baseUrl = '/api/uploadImage'

const upload = async (data, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }

    const response = await axios.post(baseUrl, data, config)
    return response.data
}

export default { upload }