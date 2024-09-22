"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundBack, IoMdAddCircleOutline } from "react-icons/io";
import { FaEye, FaThumbsUp } from "react-icons/fa";

import { useGetCourseDetail } from "@/hooks/useGetCourseDetail";
import VideoPlayer from "@/components/page/VideoPlayer";
import { VideoModel } from "@/models/Video";
import { LessonModal } from "@/components/page/course/lesson-modal";

export default function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: courseDetail, refetch } = useGetCourseDetail(params.id);

  const handleSave = () => {
    refetch();
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", { notation: "compact" }).format(num);
  };

  const renderVideoContent = (video: VideoModel) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        {/* <Avatar alt={video.user.user_name} src={video.user.user_avatar} /> */}
        <div>
          {/* <p className="font-semibold">{video.user.user_name}</p> */}
          <p className="text-sm text-gray-500">{video.time}</p>
        </div>
      </div>
      <p className="text-sm">{video.description}</p>
      <div className="flex space-x-4 text-sm text-gray-500">
        <span className="flex items-center">
          <FaEye className="mr-1" /> {formatNumber(video.view)}
        </span>
        <span className="flex items-center">
          <FaThumbsUp className="mr-1" /> {formatNumber(video.like)}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {video.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-200 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      {video.videoUrl && (
        <VideoPlayer src={video.videoUrl} type={`video/${video.fileType}`} />
      )}
    </div>
  );

  return (
    <section className="py-3 sm:py-5">
      <div className="px-4 mx-auto lg:px-6">
        <div className="flex w-full justify-between items-center mb-4">
          <Link
            className="hover:underline flex items-center text-primary"
            href="/profile/course"
          >
            <IoIosArrowRoundBack className="pe-1" /> Trở lại
          </Link>
          <LessonModal idLesson={params.id} onSave={handleSave}>
            <IoMdAddCircleOutline />
            Thêm bài học
          </LessonModal>
        </div>
        <Accordion variant="splitted">
          {(courseDetail?.videos ?? []).map((video) => (
            <AccordionItem
              key={video.id}
              aria-label={`Video ${video.id}`}
              subtitle={`${formatNumber(video.view)} views • ${formatNumber(video.like)} likes`}
              title={video.title}
            >
              {renderVideoContent(video)}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
