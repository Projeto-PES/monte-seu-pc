import axios from "axios";

const BASE_URL = "http://localhost:4000";

function register(body) {
  const promise = axios.post(`${BASE_URL}/register`, body);
  return promise;
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/login`, body);
}

const api = { register, login };

export default api;
