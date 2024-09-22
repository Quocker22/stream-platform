/* eslint-disable jsx-a11y/media-has-caption */
"use client";

import React, { FC } from "react";
import Link from "next/link";

import { useGetVideoDetail } from "@/hooks/useGetVideoDetail";
import { useGetVideo } from "@/hooks/useGetVideo";
import { VideoModel } from "@/models/Video";
import { useQueryRequest } from "@/components/utils/useQueryRequest";

type ListVideoModel = {
  readonly videos: VideoModel[];
};

const VideoList: FC<ListVideoModel> = ({ videos }) => {
  return (
    <div className="space-y-3">
      {videos?.map((item) => (
        <Link
          key={item.id}
          className="flex space-x-2"
          href={`/watch-video/${item.id}`}
        >
          <div className="flex-shrink-0 w-40">
            <img
              alt="Thumbnail"
              className="w-full h-24 object-cover rounded-lg"
              src={item.thumbnail}
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.user.user_name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              1,1 N người xem
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default function WatchVideoPage({ params }: { params: { id: string } }) {
  const { queryString, updateQueryState } = useQueryRequest({
    pageSize: 20,
    page: 1,
  });
  const { data: VideoDetail, refetch } = useGetVideoDetail(params.id);

  const { data: videos } = useGetVideo(queryString);

  const handleSave = () => {
    refetch();
  };

  return (
    <section className="bg-[#f9f9f9] dark:bg-[#0f0f0f] antialiased">
      <div className="max-w-[2160px] mx-auto px-4 py-4 lg:py-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <video
                controls
                className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
              >
                <source src={VideoDetail?.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-3">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                {VideoDetail?.title}
              </h1>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <img
                    alt="Channel avatar"
                    className="w-10 h-10 rounded-full mr-3"
                    src={VideoDetail?.user.user_avatar}
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {VideoDetail?.user.user_name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      702 N người đăng ký
                    </p>
                  </div>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-full font-semibold dark:bg-white dark:text-black">
                  Theo dõi
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 mt-6 lg:mt-0">
            <div className="space-y-3">
              <VideoList videos={videos?.data ?? []} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
