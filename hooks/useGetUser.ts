"use client";

import { useQuery, UseQueryOptions } from "react-query";

import { UserModel } from "@/models/Auth";
import { axiosInstance } from "@/api/axiosClient";

const endpoint = async (): Promise<UserModel> => {
  const response = await axiosInstance.get("/User");

  return response.data as UserModel;
};

const useGetUser = (options?: UseQueryOptions<UserModel, Error>) => {
  return useQuery<UserModel, Error>(["get-user-by-cookie"], () => endpoint(), {
    ...options,
  });
};

export { useGetUser };
