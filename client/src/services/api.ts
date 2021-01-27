import axios from 'axios'

const API = axios.create({
  baseURL: `http://localhost:${process.env.API_PORT}`
})

export default API
