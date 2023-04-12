import axios from "axios";

const BASE_URL = "http://localhost:5000/";

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

authApi.defaults.headers.common["Content-Type"] = "application/json";