import axios from 'axios';

const api = axios.create({
  baseURL: "https://nutriexpress-backend.herokuapp.com/"
});
export default api;