import axios from 'axios';

const PORT = 3333

const API = axios.create({
  baseURL: `http://localhost:${PORT}`
})

export default API