import axios from "axios";

const signalRApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
const axiosInstance = axios.create({
  baseURL: `https://api.hightfive.click/api`,
  withCredentials: true,
});

const axiosInstanceUpVideo = axios.create({
  headers: {
    "Content-Type": "video/mp4",
  },
});

export { axiosInstance, axiosInstanceUpVideo };
