"use client";

import { useQuery } from "react-query";

import { axiosInstance } from "@/api/axiosClient";
import { VideoModel } from "@/models/Video";

const endpoint = async (query?: string): Promise<VideoModel[]> => {
  const response = await axiosInstance.get(`/api/Video?${query}`);

  return response.data as VideoModel[];
};

const useGetVideo = (query?: string) => {
  return useQuery<VideoModel[], Error>(["get-video"], () => endpoint(query), {
    onSuccess: () => {
      console.log("API call successful");
    },
    onError: (error: Error) => {
      console.error("API call failed:", error);
    },
  });
};

export { useGetVideo };
