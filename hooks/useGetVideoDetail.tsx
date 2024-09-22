"use client";

import { useQuery } from "react-query";

import { axiosInstance } from "@/api/axiosClient";
import { VideoModel } from "@/models/Video";

const endpoint = async (id?: string): Promise<VideoModel> => {
  const response = await axiosInstance.get(`/Video/getVideo/${id}`);

  return response.data as VideoModel;
};

const useGetVideoDetail = (id?: string) => {
  return useQuery<VideoModel, Error>(
    ["get-video-detail", id],
    () => endpoint(id),
    {
      onSuccess: () => {},
      onError: (error: Error) => {
        console.error("API call failed:", error);
      },
    },
  );
};

export { useGetVideoDetail };
