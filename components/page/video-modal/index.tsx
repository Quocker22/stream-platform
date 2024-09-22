"use client";

import { Button, ButtonProps } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Tab, Tabs } from "@nextui-org/tabs";
import { MdInfo, MdVideoLibrary } from "react-icons/md";
import React, { useState } from "react";

import { ChooseFile } from "../../molecules/upload";
import { customTabsStyle } from "../../utils/common";

import { FileDetails } from "./file-details";

interface Props extends ButtonProps {
  onSave?: () => void;
}

const VideoModal = (props: Props): JSX.Element => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const [activeTab, setActiveTab] = useState("upload-video");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  return (
    <>
      <style>{customTabsStyle}</style>
      <Button
        {...props}
        onPress={() => {
          onOpen();
        }}
      />

      <Modal
        isOpen={isOpen}
        placement="top"
        size="4xl"
        onClose={onClose}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="min-h-[500px]">
          <ModalHeader className="flex flex-col gap-1">
            Tải video lên
          </ModalHeader>
          <ModalBody>
            <div className="flex w-full flex-col">
              <Tabs
                fullWidth
                aria-label="Options"
                className="non-interactive-tabs"
                color="primary"
                selectedKey={activeTab}
                variant="underlined"
              >
                <Tab
                  key="upload-video"
                  title={
                    <div className="flex items-center space-x-2">
                      <MdVideoLibrary />
                      <span>Tải video lên</span>
                    </div>
                  }
                >
                  <ChooseFile
                    onChange={(file: File | null) => {
                      if (file) {
                        setUploadedFile(file);
                        setActiveTab("detail-video");
                      }
                    }}
                  />
                </Tab>
                <Tab
                  key="detail-video"
                  title={
                    <div className="flex items-center space-x-2">
                      <MdInfo />
                      <span>Thông tin</span>
                    </div>
                  }
                >
                  {uploadedFile ? (
                    <FileDetails
                      file={uploadedFile}
                      onSave={() => {
                        onClose();
                        props.onSave?.();
                        setActiveTab("upload-video");
                      }}
                    />
                  ) : (
                    <div>Không có tệp nào được tải lên</div>
                  )}
                </Tab>
              </Tabs>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export { VideoModal };
