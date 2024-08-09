import { useMutation } from "react-query";
import { notification } from "antd";
import { AxiosError } from "axios";

import { axiosInstanceUpVideo } from "@/api/axiosClient";

const endpoint = async ({
  data,
  url,
}: {
  data: File;
  url: string;
}): Promise<string> => {
  const convertFileToBuffer = (file: File) => {
    const reader = new FileReader();

    reader.onload = async () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const response = await axiosInstanceUpVideo.put(url, arrayBuffer);

      console.log(arrayBuffer);

      return response.data as string;
    };

    reader.onerror = () => {
      console.error("File reading has failed");
    };

    reader.readAsArrayBuffer(file);
  };

  convertFileToBuffer(data);

  return "";
};

const useUpVideo = () => {
  return useMutation(
    ({ data, url }: { data: File; url: string }) => endpoint({ data, url }),
    {
      onSuccess: (data) => {
        notification.open({
          message: "Tải video lên thành công",
          type: "success",
          showProgress: true,
          pauseOnHover: false,
        });
        console.log(data);
      },
      onError: (e: AxiosError) => {
        const mesageError = e.response?.data as string;

        notification.open({
          message: "Tải lên thất bại",
          type: "error",
          showProgress: true,
          pauseOnHover: false,
        });
        console.error(mesageError);
      },
    },
  );
};

export { useUpVideo };

const convertFileToBuffer = (file: File) => {};
