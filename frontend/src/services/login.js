

import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_URL}/api/login`

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const checkActiveSession = async token => {
  const config = {    
    headers: { Authorization: token }, 
  } 
  const response = await axios.post(baseUrl + '/checkUserSession', config)
  return response.data
}

export default { login, checkActiveSession }