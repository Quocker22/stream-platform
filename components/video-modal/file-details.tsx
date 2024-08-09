"use client";

import { Button, Form } from "antd";
import { Input, Textarea } from "@nextui-org/input";
import { useState, useCallback } from "react";
import { useForm } from "antd/es/form/Form";
import { Radio, RadioGroup, Chip } from "@nextui-org/react";

import { UploadField } from "../upload-field";

import { useUpVideo } from "@/hooks/useUpVideo";
import { ResponseVideoModel, UploadVideoModel } from "@/models/Upload";
import { useUploadVideo } from "@/hooks/useUploadVideo";
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
    <Input label={label} size="lg" type={type} />
  </Form.Item>
);

const CustomFormTextareaItem: React.FC<FormItemProps> = ({
  name,
  label,
  rules,
  prefix,
  placeholder,
  type,
}) => (
  <Form.Item name={name} rules={rules}>
    <Textarea label={label} size="lg" type={type} />
  </Form.Item>
);

export interface FileDetailsProps {
  file: File;
  onSave: () => void;
}

export const FileDetails: React.FC<FileDetailsProps> = ({ file, onSave }) => {
  const [privateStatus, setPrivateStatus] = useState(1);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [form] = useForm<UploadVideoModel>();
  const { mutateAsync: uploadVideo } = useUploadVideo();
  const { mutateAsync: upVideo } = useUpVideo();
  const { mutateAsync: updateVideoStatus } = useUpdateVideoStatus();

  const onFinish = async (data: UploadVideoModel) => {
    const newData = {
      ...data,
      tags: tags,
      file_type: file.type,
      video_size: file.size,
      image_url: data.image_url,
    };

    await uploadVideo(newData, {
      onSuccess: async (response: ResponseVideoModel) => {
        await upVideo({ data: file, url: response.preSignedUrl });
        await updateVideoStatus({
          id: response.video.id,
          status: privateStatus,
        });
        onSave();
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTag = () => {
    const trimmedValue = inputValue.trim();

    if (trimmedValue && !tags.includes(trimmedValue)) {
      setTags([...tags, trimmedValue]);
      setInputValue("");
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const handleRemoveTag = useCallback(
    (tagToRemove: string) => {
      setTags(tags.filter((tag) => tag !== tagToRemove));
    },
    [tags],
  );

  return (
    <div>
      <Form
        className="space-y-4 md:space-y-6"
        form={form}
        initialValues={{ title: file.name }}
        name="normal_login"
        onFinish={onFinish}
      >
        <Form.Item hidden name="image_url">
          <Input />
        </Form.Item>
        <UploadField
          onChange={(url) => {
            form.setFieldsValue({ image_url: url });
          }}
        />

        <CustomFormItem label="Tiêu đề" name="title" />

        <CustomFormTextareaItem
          label="Mô tả"
          name="description"
          placeholder="Nhập mô tả về video của bạn"
        />

        <Form.Item>
          <p className="text-gray-500 mb-2">Tags:</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <Chip key={index} onClose={() => handleRemoveTag(tag)}>
                {tag}
              </Chip>
            ))}
          </div>
          <div className="flex gap-2 justify-center items-center content-center">
            <Input
              placeholder="Nhập tag và nhấn Enter hoặc Thêm"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
            />
            <Button onClick={addTag}>Thêm</Button>
          </div>
        </Form.Item>

        <RadioGroup
          color="warning"
          defaultValue="1"
          label="Quyền riêng tư"
          onValueChange={(value: string) => {
            setPrivateStatus(Number(value));
          }}
        >
          <Radio description="Tất cả mọi người đều thấy." value="1">
            Công khai
          </Radio>
          <Radio description="Chỉ mình bạn xem được video này." value="0">
            Riêng tư
          </Radio>
        </RadioGroup>

        <Form.Item>
          <Button
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            htmlType="submit"
            size="large"
            type="primary"
          >
            Tải lên
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
