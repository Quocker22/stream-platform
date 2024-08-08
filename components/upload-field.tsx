import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex, message, Upload } from "antd";
import { RcFile, UploadFile } from "antd/es/upload";
import { UploadChangeParam } from "antd/es/upload";

type IProps = {
  onChange: (url: string) => void;
};

const UploadField: React.FC<IProps> = ({ onChange }: IProps) => {
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    info.fileList.map(
      (e: UploadFile<{ data: { url: string } }>): UploadFile<any> => {
        if (e.response) {
          const url: string = e?.response.data.url;
          setImageUrl(e?.response.data.url);
          onChange(url);
        }
        return e;
      }
    );
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>thumbnail</div>
    </button>
  );

  return (
    <Flex gap="middle" wrap>
      <Upload
        name="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://minhduc-stag.wehatech.com/upload/image"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </Flex>
  );
};

export { UploadField };
