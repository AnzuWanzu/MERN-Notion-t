import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"; //makes the baseurl dynamic since there's no localhost in production
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
