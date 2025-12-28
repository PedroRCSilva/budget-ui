import axios, { AxiosError } from 'axios'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 360
})

const paths = ['/login', '/register']

api.interceptors.request.use(config => {
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('access_token='))
    ?.split('=')[1]

  if (!paths.includes(config.url || '') && token) {
    config.headers.Authorization = `Bearer ${token} `
  }
  return config
})

api.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (
      error.response &&
      !paths.includes(error.config?.url || '') &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)

export default api
