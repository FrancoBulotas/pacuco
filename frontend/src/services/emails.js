

import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_URL}/api/emails`


const sendEmail = async (msg) => {
    const msgData = {
        msg : msg
    }
    const response = await axios.post(`${baseUrl}/send`, msgData)
    return response.data
}

export default { sendEmail }




