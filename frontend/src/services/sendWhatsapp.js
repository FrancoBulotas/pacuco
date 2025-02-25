
import axios from 'axios';
const baseUrl = '/api/sendMessage';

const sendMessage = async (phone, message) => {
    const response = await axios.post(baseUrl, {
        phone : phone,
        message: message
    } );
    
    return response.data;
}

export default { sendMessage }