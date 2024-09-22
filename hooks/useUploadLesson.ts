import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { axiosInstance } from "@/api/axiosClient";
import { ResponseVideoModel, UploadVideoModel } from "@/models/Upload";

const endpoint = async (
  id: string,
  userData: UploadVideoModel,
): Promise<ResponseVideoModel> => {
  const response = await axiosInstance.put(
    `/Course/PutCourseVideo/${id}`,
    userData,
  );

  return response.data as ResponseVideoModel;
};

const useUploadLesson = () => {
  return useMutation(
    ({ id, data }: { id: string; data: UploadVideoModel }) =>
      endpoint(id, data),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (e: AxiosError) => {
        const mesageError = e.response?.data as string;

        console.error(e);
      },
    },
  );
};

export { useUploadLesson };
