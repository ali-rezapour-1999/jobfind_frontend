// lib/baseApi.ts
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

const baseApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseApi;
