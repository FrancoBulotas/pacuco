

import api from './api';
const baseUrl = '/api/emails'


const sendEmail = async (msg) => {
    const msgData = {
        msg : msg
    }
    const response = await api.post(`${baseUrl}/send`, msgData)
    return response.data
}

export default { sendEmail }




