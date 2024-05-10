import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
