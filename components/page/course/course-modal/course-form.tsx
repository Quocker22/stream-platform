"use client";

import { Button, Form } from "antd";
import { Input, Textarea } from "@nextui-org/input";
import { useState, useCallback, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import { Chip } from "@nextui-org/react";

import { CourseModel, FormCourseModel } from "@/models/Course";
import { useCreateCourse } from "@/hooks/useCreateCourse";
import { useGetCourseDetail } from "@/hooks/useGetCourseDetail";
import { useUpdateCourse } from "@/hooks/useUpdateCourse";

type FormItemName = keyof FormCourseModel;

interface FormItemProps {
  name: FormItemName;
  label: string;
  rules?: any[];
  placeholder?: string;
  type?: string;
}

const CustomFormItem: React.FC<FormItemProps> = ({
  name,
  label,
  rules,
  placeholder,
  type,
}) => (
  <Form.Item name={name} rules={rules}>
    <Input label={label} placeholder={placeholder} size="lg" type={type} />
  </Form.Item>
);

const CustomFormTextareaItem: React.FC<FormItemProps> = ({
  name,
  label,
  rules,
  placeholder,
}) => (
  <Form.Item name={name} rules={rules}>
    <Textarea label={label} placeholder={placeholder} size="lg" />
  </Form.Item>
);

export interface CourseFormProps {
  onSave?: (data: FormCourseModel) => void;
  readonly course?: CourseModel;
}

export const CourseForm: React.FC<CourseFormProps> = ({ onSave, course }) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [form] = useForm<FormCourseModel>();

  const { data: courseDetail } = useGetCourseDetail(course?._id);

  useEffect(() => {
    if (courseDetail && course?._id) {
      form.setFieldsValue({
        title: courseDetail.title,
        desc: courseDetail.desc,
        courseDetail: courseDetail.courseDetail,
        price: courseDetail.price,
        discount: courseDetail.discount,
      });
      setTags(courseDetail.tags || []);
    } else {
      form.setFieldsValue({});
    }
  }, [courseDetail, form, course?._id]);

  const { mutateAsync: createCourse } = useCreateCourse();
  const { mutateAsync: updateCourse } = useUpdateCourse();

  const action = !!course?._id
    ? (data: FormCourseModel) => updateCourse({ ...data })
    : createCourse;

  const onFinish = async (data: FormCourseModel) => {
    const courseData = {
      ...data,
      tags: tags,
    };

    await action(courseData);

    onSave?.(courseData);
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
      <Form form={form} name="course_form" onFinish={onFinish}>
        <CustomFormItem
          label="Tiêu đề khóa học"
          name="title"
          rules={[
            { required: true, message: "Vui lòng nhập tiêu đề khóa học" },
          ]}
        />

        <CustomFormTextareaItem
          label="Mô tả ngắn"
          name="desc"
          placeholder="Nhập mô tả ngắn về khóa học của bạn"
        />

        <CustomFormTextareaItem
          label="Chi tiết khóa học"
          name="courseDetail"
          placeholder="Nhập chi tiết về khóa học của bạn"
        />

        <CustomFormItem
          label="Giá"
          name="price"
          rules={[{ required: true, message: "Vui lòng nhập giá khóa học" }]}
          type="number"
        />

        <CustomFormItem
          label="Giảm giá (%)"
          name="discount"
          placeholder="Nhập phần trăm giảm giá (nếu có)"
          type="number"
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

        <Form.Item>
          <Button
            className="w-full mt-6 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            htmlType="submit"
            size="large"
            type="primary"
          >
            {!!course?._id ? "Cập nhật" : "Tạo khóa học"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
