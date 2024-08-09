"use client";

import { Button, Collapse, Image } from "antd";
import { FC, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircleOutline, IoMdAddCircleOutline } from "react-icons/io";

export interface VideoModal {
  course_id: string;
  created_at: string;
  group_id: string;
  id: string;
  name: string;
  order: number;
  total_time: string;
  type: string;
  updated_at: string;
  video_url: string;
}

export interface CourseGroupModal {
  course_id: string;
  created_at: string;
  id: string;
  name: string;
  order: number;
  updated_at: string;
  videos: VideoModal[];
}

export interface CourseModel {
  description: string;
  id: string;
  name: string;
  price: number;
  slug: string;
  status: string;
  target_skills: string;
  thumbnail: string;
  video_intro: string;
  code?: string;
  count_student?: number;
  count_videos?: number;
  created_at?: string;
  group_videos?: CourseGroupModal[];
  labels?: string[];
  levels?: string[];
  require_skills?: string[];
  seo_des?: string;
  seo_keywords?: string;
  seo_title?: string;
}

interface IProps {
  readonly refetch: () => void;
  readonly courseDetail?: CourseModel;
}

export const CourseMenu: FC<IProps> = ({ courseDetail }) => {
  const [openPanels, setOpenPanels] = useState<number[]>([]);
  const [openCollapses, setOpenCollapses] = useState<number[]>([]);
  const [isEditChap, setIsEditChap] = useState<string>();
  const groupVideos = courseDetail?.group_videos;

  return (
    <Collapse
      accordion
      activeKey={openCollapses}
      bordered={false}
      expandIconPosition="start"
      style={{ background: "#fff" }}
      onChange={(e) => setOpenCollapses([Number(e)])}
    >
      {groupVideos?.map((groupVideo, indexGroupVideo) => (
        <Collapse.Panel
          key={indexGroupVideo}
          className="mb-4 fs-2 rounded"
          extra={
            isEditChap === groupVideo.id || (
              <div
                role="button"
                tabIndex={0}
                onClick={(event) => {
                  setIsEditChap(groupVideo.id);
                  event.stopPropagation();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setIsEditChap("edit");
                }}
              >
                <Button size="large" type="dashed">
                  <FaRegEdit />
                </Button>
              </div>
            )
          }
          header={
            isEditChap === groupVideo.id ? (
              <>
                <div>update video</div>
                {/* <UpdateGroupModal
                  groupName={groupVideo.name}
                  groupVideoID={groupVideo.id}
                  order={indexGroupVideo + 1}
                  onHide={() => setIsEditChap("")}
                  onSaved={refetch}
                /> */}
              </>
            ) : (
              <div
                className="w-100 d-flex align-items-center pt-2"
                style={{ color: "#666" }}
              >
                <Image
                  preview={false}
                  src="/media/icons/duotune/general/layer_group.svg"
                  width={20}
                />
                <span className="ms-3">
                  {" "}
                  {groupVideo.name}
                  <div className="ms-3 fs-5">
                    {groupVideo.videos.length} bài
                  </div>
                </span>
              </div>
            )
          }
          showArrow={false}
          style={{ backgroundColor: "rgb(239, 242, 251)" }}
        >
          <Collapse
            accordion
            activeKey={openPanels}
            expandIcon={() => (
              <Button size="middle" type="dashed">
                <FaRegEdit />
              </Button>
            )}
            expandIconPosition="end"
            onChange={(e) => {
              setOpenPanels([Number(e)]);
            }}
          >
            {groupVideo.videos?.map(
              (video, indexVideo) =>
                video.group_id === groupVideo.id &&
                video.course_id === courseDetail?.id && (
                  <Collapse.Panel
                    key={indexVideo}
                    collapsible="icon"
                    header={
                      <div className="d-flex">
                        <div className="pe-2">video</div>
                        <strong>{video.name}</strong>
                        <span className="px-3">•</span>
                        <span className="px-1">Độ dài:</span>
                        <strong>{video.total_time}</strong>
                        <span className="px-3">•</span>
                        <div>{video.type}</div>
                        <span className="px-3">•</span>
                        <span>Link video: </span>
                        <a
                          className="px-3"
                          href={video.video_url}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {video.video_url}
                        </a>
                      </div>
                    }
                  >
                    video
                  </Collapse.Panel>
                )
            )}
            <Collapse.Panel
              key={-2}
              className="bg-muted"
              header={
                <div className="d-flex justify-content-center">
                  <div className="pe-2">
                    <IoMdAddCircleOutline />
                  </div>
                  <div className="text-dark fw-bolder">Thêm bài học</div>
                </div>
              }
              showArrow={false}
            >
              video
            </Collapse.Panel>
          </Collapse>
        </Collapse.Panel>
      ))}
      <Collapse.Panel
        key={-1}
        className="mb-2 fs-2 rounded"
        header={
          <div className="d-flex justify-content-center">
            <div className="pe-2">
              <IoIosAddCircleOutline />
            </div>
            <div className="text-primary" style={{ color: "#666" }}>
              Thêm chương
            </div>
          </div>
        }
        showArrow={false}
        style={{ backgroundColor: "rgb(239, 242, 251)" }}
      >
        Create
      </Collapse.Panel>
    </Collapse>
  );
};
