"use client";

import { useQuery } from "react-query";

import { axiosInstance } from "@/api/axiosClient";
import { MeetModel } from "@/models/Meet";

const endpoint = async (): Promise<{ entity: MeetModel[] }> => {
  const response = await axiosInstance.get(`/Room/GetUserRoom`);

  return response.data as { entity: MeetModel[] };
};

const useGetMeetList = () => {
  return useQuery<{ entity: MeetModel[] }, Error>(
    ["get-video"],
    () => endpoint(),
    {
      onSuccess: () => {},
      onError: (error: Error) => {
        console.error("API call failed:", error);
      },
    },
  );
};

export { useGetMeetList };
