

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

export default { getAll, update }