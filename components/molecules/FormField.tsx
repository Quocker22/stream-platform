import React from "react";
import { Form, FormProps as AntFormProps } from "antd";
import { FormInstance } from "antd/lib";

interface FormFieldProps<T extends object> extends Omit<AntFormProps, "form"> {
  form: FormInstance<T>;
  onFinish: (values: T) => void;
  children: React.ReactNode;
}

function FormField<T extends object>({
  onFinish,
  children,
  form,
  ...restProps
}: FormFieldProps<T>) {
  return (
    <Form form={form} onFinish={onFinish} {...restProps}>
      {children}
    </Form>
  );
}

export { FormField };
