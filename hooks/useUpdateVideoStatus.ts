import { useMutation } from "react-query";
import { message, notification } from "antd";
import { axiosInstance } from "@/api/axiosClient";
import { FormLoginModel, UserModel } from "@/models/Auth";
import { AxiosError } from "axios";
import { VideoStatus } from "@/models/Video";

const endpoint = async (userData: VideoStatus): Promise<string> => {
  const response = await axiosInstance.put(
    `/api/Video/updateVideoStatus/${userData.id}?status=${userData.status}`
  );

  return response.data as string;
};

const useUpdateVideoStatus = () => {
  return useMutation((data: VideoStatus) => endpoint(data), {
    onSuccess: (data) => {},
    onError: (e: AxiosError) => {},
  });
};

export { useUpdateVideoStatus };
