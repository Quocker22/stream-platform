import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/api/axiosClient";
import { ResponseVideoModel, UploadVideoModel } from "@/models/Upload";

const endpoint = async (
  userData: UploadVideoModel,
): Promise<ResponseVideoModel> => {
  const response = await axiosInstance.post(
    `/api/Video/getPresignedUrl`,
    userData,
  );

  return response.data as ResponseVideoModel;
};

const useUploadVideo = () => {
  return useMutation((data: UploadVideoModel) => endpoint(data), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (e: AxiosError) => {
      const mesageError = e.response?.data as string;

      console.error(e);
    },
  });
};

export { useUploadVideo };
