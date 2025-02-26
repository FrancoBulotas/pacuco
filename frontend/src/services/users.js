
import api from './api';
const baseUrl = '/api/users';

const getAll = async () => {
    const response = await api.get(baseUrl);
    return response.data;
}

const create = async credentials => {
  const response = await api.post(baseUrl + '/create', credentials);
  return response.data;
}

export default { getAll, create }