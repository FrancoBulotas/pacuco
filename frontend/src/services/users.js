
import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_URL}/api/users`

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const create = async credentials => {
  const response = await axios.post(baseUrl + '/create', credentials);
  return response.data;
}

export default { getAll, create }