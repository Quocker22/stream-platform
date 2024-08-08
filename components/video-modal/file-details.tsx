"use client";

import { Button, Form } from "antd";
import { useUploadVideo } from "@/hooks/useUploadVideo";
import { ResponseVideoModel, UploadVideoModel } from "@/models/Upload";
import { Input } from "@nextui-org/input";
import { title } from "process";
import { useEffect, useState } from "react";
import { useUpVideo } from "@/hooks/useUpVideo";
import { UploadField } from "../upload-field";
import { useForm } from "antd/es/form/Form";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useUpdateVideoStatus } from "@/hooks/useUpdateVideoStatus";

type FormItemName = keyof UploadVideoModel;

interface FormItemProps {
  name?: FormItemName;
  label?: string;
  rules?: any[];
  prefix?: React.ReactNode;
  placeholder?: string;
  type?: string;
}

const CustomFormItem: React.FC<FormItemProps> = ({
  name,
  label,
  rules,
  prefix,
  placeholder,
  type,
}) => (
  <Form.Item name={name} rules={rules}>
    <Input size="lg" label={label} type={type} />
  </Form.Item>
);

export interface FileDetailsProps {
  file: File;
  onSave: () => void;
}

export const FileDetails: React.FC<FileDetailsProps> = ({ file, onSave }) => {
  const [privateStatus, setPrivateStatus] = useState("1");
  const [form] = useForm<UploadVideoModel>();
  const { mutateAsync: uploadVideo } = useUploadVideo();
  const { mutateAsync: upVideo } = useUpVideo();
  const { mutateAsync: updateVideoStatus } = useUpdateVideoStatus();

  const onFinish = async (data: UploadVideoModel) => {
    const newData = {
      ...data,
      tags: [""],
      file_type: file.type,
      video_size: file.size,
      image_url: data.image_url,
    };

    await uploadVideo(newData, {
      onSuccess: async (response: ResponseVideoModel) => {
        await upVideo({ data: file, url: response.preSignedUrl });
      },
    });

    updateVideoStatus({ id: "234234", status: privateStatus });
  };

  return (
    <div>
      {/* <div className="flex flex-col gap-2">
        <div>Tên tệp: {file.name}</div>
        <div>Kích thước: {(file.size / 1024 / 1024).toFixed(2)} MB</div>
        <div>Loại tệp: {file.type}</div>
      </div> */}
      <Form
        form={form}
        name="normal_login"
        className="space-y-4 md:space-y-6"
        initialValues={{ title: file.name }}
        onFieldsChange={(changedFields: any, allFields: any) => {
          console.log("Changed fields:", changedFields);
          console.log("All fields:", allFields);
        }}
        onFinish={onFinish}
      >
        <Form.Item name="image_url" hidden>
          <Input />
        </Form.Item>
        <UploadField
          onChange={(url) => {
            form.setFieldsValue({ image_url: url });
          }}
        />

        <CustomFormItem name="title" label="Tiêu đề" />

        <CustomFormItem name="description" label="Mô tả" />

        <RadioGroup
          onValueChange={(value: string) => {
            setPrivateStatus(value);
          }}
          defaultValue="1"
          label="Quyền riêng tư"
          color="warning"
        >
          <Radio value="1" description="Tất cả mọi người đều thấy.">
            Công khai
          </Radio>
          <Radio value="0" description="Chỉ mình bạn xem được video này.">
            Riêng tư
          </Radio>
        </RadioGroup>

        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Tải lên
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
