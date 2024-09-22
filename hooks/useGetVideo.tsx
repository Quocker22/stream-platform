"use client";

import { useQuery } from "react-query";

import { axiosInstance } from "@/api/axiosClient";
import { VideoModel } from "@/models/Video";
import { PaginationResponse } from "@/models/common";

const endpoint = async (
  query?: string,
): Promise<PaginationResponse<VideoModel[]>> => {
  const response = await axiosInstance.get(`/Video?${query || ""}`);

  return response.data as PaginationResponse<VideoModel[]>;
};

const useGetVideo = (query?: string) => {
  return useQuery<PaginationResponse<VideoModel[]>, Error>(
    ["get-video", query],
    () => endpoint(query),
    {
      onSuccess: () => {},
      onError: (error: Error) => {
        console.error("API call failed:", error);
      },
    },
  );
};

export { useGetVideo };
