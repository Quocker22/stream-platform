import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { message } from "antd";

import { axiosInstance } from "@/api/axiosClient";

const endpoint = async (formData: FormData): Promise<string> => {
  const response = await axiosInstance.post<{ url: string }>(
    "https://upload.hightfive.click/upload/",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  console.log("response", response);

  return response.data.url;
};

const useUploadImage = () => {
  return useMutation((formData: FormData) => endpoint(formData), {
    onSuccess: () => {
      message.success("Image uploaded successfully");
    },
    onError: (e: AxiosError) => {
      console.error("Upload error:", e);
      message.error("Upload failed");
    },
  });
};

export { useUploadImage };
