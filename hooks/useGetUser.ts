"use client";

import { useQuery } from "react-query";

import { UserModel } from "@/models/Auth";
import { axiosInstance } from "@/api/axiosClient";

const endpoint = async (): Promise<UserModel> => {
  const response = await axiosInstance.get("/api/User");

  return response.data as UserModel;
};

const useGetUser = () => {
  return useQuery<UserModel, Error>(["get-user-by-cookie"], () => endpoint());
};

export { useGetUser };
