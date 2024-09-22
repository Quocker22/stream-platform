import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/api/axiosClient";
import { VideoStatus } from "@/models/Video";

const endpoint = async (userData: VideoStatus): Promise<string> => {
  const response = await axiosInstance.put(
    `/Video/updateVideoStatus/${userData.id}?status=${userData.status}`,
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
