"use client";

import React from "react";
import {
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { IoMdAddCircleOutline } from "react-icons/io";

import { VerticalDotsIcon } from "@/components/tables/VerticalDotsIcon";
import { SearchIcon } from "@/components/tables/SearchIcon";
import { VideoModal } from "@/components/video-modal";
import { useGetVideo } from "@/hooks/useGetVideo";

export interface VideoModel {
  id: string;
  user: {
    user_id: string;
    user_name: string;
    user_avatar: string;
  };
  time: string;
  title: string;
  description: string;
  view: number;
  like: number;
  thumbnail: string;
  status: null;
  statusNum: number;
  tags: string[];
  fileType: string;
  videoUrl: string;
}

const columns = [
  { name: "VIDEO", uid: "video" },
  { name: "CREATOR", uid: "creator" },
  { name: "VIEWS", uid: "view" },
  { name: "LIKES", uid: "like" },
  { name: "TIME", uid: "time" },
  { name: "ACTIONS", uid: "actions" },
];

export default function CreateCourse() {
  const { data: videos } = useGetVideo();
  const [filterValue, setFilterValue] = React.useState("");

  const renderCell = React.useCallback(
    (video: VideoModel, columnKey: React.Key) => {
      switch (columnKey) {
        case "video":
          return (
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <img
                  alt={video.title}
                  className="w-20 h-12 rounded object-cover"
                  src={video.thumbnail}
                />
                <div>
                  <p className="font-medium">{video.title}</p>
                  <p className="text-xs text-gray-500 truncate max-w-xs">
                    {video.description}
                  </p>
                </div>
              </div>
              <div className="mt-1">
                {video.tags.map((tag, index) => (
                  <Chip key={index} className="mr-1 mb-1" size="sm">
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>
          );
        case "creator":
          return (
            <User
              avatarProps={{ src: video.user.user_avatar, size: "sm" }}
              name={video.user.user_name}
            />
          );
        case "view":
          return video.view.toLocaleString();
        case "like":
          return video.like.toLocaleString();
        case "time":
          return new Date(video.time).toLocaleString();
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <VerticalDotsIcon className="text-default-300" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem>View</DropdownItem>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return null;
      }
    },
    [],
  );

  const onSearchChange = React.useCallback((value?: string) => {
    setFilterValue(value || "");
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
  }, []);

  const filteredVideos = React.useMemo(() => {
    return videos?.filter((video) =>
      video.title.toLowerCase().includes(filterValue.toLowerCase()),
    );
  }, [videos, filterValue]);

  return (
    <section className="bg-gray-50 py-3 sm:py-5">
      <div className="px-4 mx-auto lg:px-6">
        <div className="relative p-2 overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="py-5">
            <div className="flex flex-col gap-4 sm:mb-4">
              <div className="flex justify-between gap-3 items-end">
                <Input
                  isClearable
                  className="w-full sm:max-w-[44%]"
                  placeholder="Search by title..."
                  startContent={<SearchIcon />}
                  value={filterValue}
                  onClear={onClear}
                  onValueChange={onSearchChange}
                />
                <div className="flex gap-3">
                  <VideoModal>
                    <IoMdAddCircleOutline />
                    Thêm video
                  </VideoModal>
                </div>
              </div>
            </div>
            <Table aria-label="Video table">
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.uid}
                    align={column.uid === "actions" ? "center" : "start"}
                  >
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={filteredVideos || []}>
                {(item) => (
                  <TableRow key={item.id}>
                    {(columnKey) => (
                      <TableCell>{renderCell(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
}
