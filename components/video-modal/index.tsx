"use client";

import { Button, ButtonProps } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Tab, Tabs } from "@nextui-org/tabs";
import { FaCheckCircle, FaImage } from "react-icons/fa";
import { MdInfo, MdLibraryMusic, MdVideoLibrary } from "react-icons/md";
import React, { useState } from "react";
import { ChooseFile } from "../upload";
import { FileDetails } from "./file-details";

const VideoModal = (props: ButtonProps): JSX.Element => {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const [activeTab, setActiveTab] = useState("photos");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const customTabsStyle = `
    .non-interactive-tabs .nextui-tabs-tab:hover {
      cursor: default;
      background: transparent;
    }
    .non-interactive-tabs .nextui-tabs-tab:active {
      transform: none;
    }
  `;

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
        onClose={onClose}
        onOpenChange={onOpenChange}
        size="4xl"
      >
        <ModalContent className="min-h-[500px]">
          <ModalHeader className="flex flex-col gap-1">
            Tải video lên
          </ModalHeader>
          <ModalBody>
            <div className="flex w-full flex-col">
              <Tabs
                aria-label="Options"
                color="primary"
                variant="underlined"
                fullWidth
                selectedKey={activeTab}
                className="non-interactive-tabs"
              >
                <Tab
                  key="photos"
                  title={
                    <div className="flex items-center space-x-2">
                      <MdVideoLibrary />
                      <span>Tải video lên</span>
                    </div>
                  }
                >
                  <ChooseFile
                    onChange={(file: File | null) => {
                      console.log("file", file);
                      if (file) {
                        setUploadedFile(file);
                        setActiveTab("music");
                      }
                    }}
                  />
                </Tab>
                <Tab
                  key="music"
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
                        console.log('setActiveTab("videos")');
                        setActiveTab("videos");
                      }}
                    />
                  ) : (
                    <div>Không có tệp nào được tải lên</div>
                  )}
                </Tab>
                <Tab
                  key="videos"
                  title={
                    <div className="flex items-center space-x-2">
                      <FaCheckCircle />
                      <span>Kiểm tra</span>
                    </div>
                  }
                >
                  <div>Kiểm tra video...</div>
                </Tab>
              </Tabs>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Thoát
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { VideoModal };
