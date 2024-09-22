"use client";

import { useQuery } from "react-query";

import { axiosInstance } from "@/api/axiosClient";
import { RoomModel } from "@/models/Meet";

const endpoint = async (id?: string): Promise<RoomModel> => {
  const response = await axiosInstance.get(`/Room/${id}`);

  return response.data.entity as RoomModel;
};

const useGetRoomDetail = (id?: string) => {
  return useQuery<RoomModel, Error>(
    ["get-course-detail", id],
    () => endpoint(id),
    {
      onSuccess: () => {},
      onError: (error: Error) => {
        console.error("API call failed:", error);
      },
    },
  );
};

export { useGetRoomDetail };
