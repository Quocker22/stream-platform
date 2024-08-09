"use client";

import { useQuery } from "react-query";

import { axiosInstance } from "@/api/axiosClient";
import { VideoModel } from "@/models/Video";

const endpoint = async (): Promise<VideoModel[]> => {
  const response = await axiosInstance.get("/api/Video/1");

  return response.data as VideoModel[];
};

const useGetVideo = () => {
  return useQuery<VideoModel[], Error>(["get-video"], () => endpoint(), {
    onSuccess: () => {
      console.log("API call successful");
    },
    onError: (error: Error) => {
      console.error("API call failed:", error);
    },
  });
};

export { useGetVideo };
