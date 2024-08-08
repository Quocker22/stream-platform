"use client";

import { Button } from "@nextui-org/button";
import { Progress } from "@nextui-org/react";
import React, { useState, DragEvent, ChangeEvent, useEffect } from "react";
import { FileIcon, UploadIcon, XIcon } from "./icons";

interface Props {
  readonly onChange: (file: File | null) => void;
}

export function ChooseFile({ onChange }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    onChange(file);
  }, [file]);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("video/")) {
      setFile(file);
    } else {
      alert("Chỉ cho phép tải lên tệp video.");
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file && file.type.startsWith("video/")) {
      setFile(file);
    } else {
      alert("Chỉ cho phép tải lên tệp video.");
    }
  };

  const handleCancel = () => {
    setFile(null);
    setProgress(0);
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-primary-foreground p-8 transition-colors hover:border-primary"
    >
      {file ? (
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <FileIcon className="h-6 w-6 text-primary-foreground" />
              <div>
                <div className="font-medium">{file.name}</div>
                <div className="text-sm text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={handleCancel}
              className="text-muted-foreground hover:bg-muted/50"
            >
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Cancel upload</span>
            </Button>
          </div>
          <div className="w-full">
            <Progress value={progress} className="h-2 rounded-full" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <UploadIcon className="h-12 w-12 text-primary-foreground" />
          <div className="text-center">
            <div className="text-2xl font-bold">Kéo và thả video vào đây</div>
            <div className="text-muted-foreground">
              hoặc click chọn file upload
            </div>
          </div>
          <input
            type="file"
            className="hidden"
            accept="video/*"
            onChange={handleFileChange}
          />
          <Button
            onClick={() => {
              const fileInput = document.querySelector(
                'input[type="file"]'
              ) as HTMLInputElement | null;
              fileInput?.click();
            }}
          >
            Chọn file
          </Button>
        </div>
      )}
    </div>
  );
}
