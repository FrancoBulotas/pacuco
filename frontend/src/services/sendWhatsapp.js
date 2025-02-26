
import api from './api';

const baseUrl = '/api/sendMessage';

const sendMessage = async (phone, message) => {
    const response = await api.post(baseUrl, {
        phone : phone,
        message: message
    } );
    
    return response.data;
}

export default { sendMessage }