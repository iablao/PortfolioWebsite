import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Your FastAPI base URL
});

export default axiosInstance;