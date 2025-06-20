import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8004/api',
  timeout: 360
})

api.interceptors.request.use(config => {
  const paths = ['/login', '/register']
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1]

  if (!paths.includes(config.url || '') && token) {
    config.headers.Authorization = `Bearer ${token} `
  }
  return config
})

export default api
