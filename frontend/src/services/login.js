

import api from './api';

const baseUrl = '/api/login';

const login = async credentials => {
  const response = await api.post(baseUrl, credentials)
  return response.data
}

const checkActiveSession = async token => {
  const config = {    
    headers: { Authorization: token }, 
  } 
  const response = await api.post(baseUrl + '/checkUserSession', config)
  return response.data
}

export default { login, checkActiveSession }