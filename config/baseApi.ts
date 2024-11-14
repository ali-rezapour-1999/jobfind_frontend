import axios from "axios";

const baseURL = process.env.PUBLIC_API_URL || "http://localhost:8000";

const baseApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseApi;
