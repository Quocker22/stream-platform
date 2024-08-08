// axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

const axiosInstanceUpVideo = axios.create({
  headers: {
    "Content-Type": "video/mp4",
  },
});

export { axiosInstance, axiosInstanceUpVideo };
