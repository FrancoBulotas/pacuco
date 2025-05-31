

import api from './api';
const baseUrl = '/api/payments';

const getAll = async () => {
  const response = await api.get(baseUrl)
  return response.data[0]
}

const update = async (id, content) => {
    const response = await api.put(`${baseUrl}/${id}`, content)
    return response.data
}

const clearCache = async () => {
  const response = await api.post(baseUrl + '/clearCache');
  return response;
}

export default { getAll, update, clearCache }