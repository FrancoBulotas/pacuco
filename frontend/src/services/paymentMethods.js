

import axios from 'axios'
const baseUrl = '/api/payments'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data[0]
}

const update = async (id, content) => {
    const response = await axios.put(`${baseUrl}/${id}`, content)
    return response.data
}

export default { getAll, update }