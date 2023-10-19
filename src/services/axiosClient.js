import axios from 'axios'
const axiosClient = axios.create({
  baseURL: 'https://petstore.swagger.io/v2/',
  timeout: 1000
})
export default axiosClient
