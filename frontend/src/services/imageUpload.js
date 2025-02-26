

import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_URL}/api/uploadImage`

const upload = async (data, token) => {
    const config = {    
        headers: { Authorization: token }, 
    }

    const response = await axios.post(baseUrl, data, config)
    return response.data
}

export default { upload }