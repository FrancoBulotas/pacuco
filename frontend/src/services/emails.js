

import axios from 'axios'
const baseUrl = '/api/emails'


const sendEmail = async (msg) => {
    const msgData = {
        msg : msg
    }
    const response = await axios.post(`${baseUrl}/send`, msgData)
    return response.data
}

export default { sendEmail }




