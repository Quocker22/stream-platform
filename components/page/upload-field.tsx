"use client";

import React, { useState, useCallback } from "react";
import { Flex, message, Upload } from "antd";
import { RcFile, UploadFile } from "antd/es/upload";
import { UploadChangeParam } from "antd/es/upload";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop/types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { useUploadImage } from "@/hooks/useUploadImage";

type IProps = {
  onChange: (url: string) => void;
};

const UploadField: React.FC<IProps> = ({ onChange }: IProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imageUrl, setImageUrl] = useState<string>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [currentFile, setCurrentFile] = useState<RcFile | null>(null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [],
  );

  const handleChange = (info: UploadChangeParam<UploadFile<any>>) => {
    const file = info.file.originFileObj as RcFile;

    setCurrentFile(file);
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImageUrl(reader.result as string);
      onOpen();
    });
    reader.readAsDataURL(file);
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
      <div style={{ marginTop: 8 }}>thumbnail</div>
    </button>
  );

  const { mutateAsync: uploadImage } = useUploadImage();

  const handleCropSave = async () => {
    if (croppedAreaPixels && currentFile) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const image = new Image();

      image.src = imageUrl!;
      await new Promise((resolve) => {
        image.onload = resolve;
      });

      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;

      ctx!.drawImage(
        image,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
      );

      canvas.toBlob(async (blob) => {
        if (blob) {
          const formData = new FormData();

          formData.append("file", blob, currentFile.name);

          try {
            const url = await uploadImage(formData);

            setImageUrl(url);
            onChange(url);
          } catch (error) {
            // Error handling is done in the mutation
          }
        }
      }, currentFile.type);
    }
    onOpenChange();
  };

  return (
    <Flex wrap gap="middle">
      <Upload
        beforeUpload={beforeUpload}
        className="avatar-uploader"
        listType="picture-card"
        showUploadList={false}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img alt="avatar" src={imageUrl} style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
      <Modal isOpen={isOpen} size="2xl" onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Crop Image</ModalHeader>
          <ModalBody>
            <div style={{ height: 300, position: "relative" }}>
              <Cropper
                aspect={16 / 9}
                crop={crop}
                image={imageUrl}
                zoom={zoom}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onOpenChange}>
              Close
            </Button>
            <Button color="primary" onPress={handleCropSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export { UploadField };
