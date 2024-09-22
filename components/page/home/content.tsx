"use client";

import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { RiTimer2Fill } from "react-icons/ri";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useGetVideo } from "@/hooks/useGetVideo";
import { useQueryRequest } from "@/components/utils/useQueryRequest";
import { ImageWithSkeleton } from "@/components/image/imageWithSkeleton";

const SkeletonLoader = () => (
  <div className="relative overflow-hidden rounded-xl sm:my-5 !mx-auto duration-300 group max-w-80 bg-white shadow-md">
    <ImageWithSkeleton alt="Loading..." height="180px" src="" width="320px" />
    <div className="h-40 p-4 bg-gray-100">
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-gray-300 rounded animate-pulse w-1/2" />
        <div className="h-4 bg-gray-300 rounded animate-pulse w-5/6" />
        <div className="flex justify-between mt-4">
          <div className="h-4 bg-gray-300 rounded animate-pulse w-1/3" />
          <div className="h-4 bg-gray-300 rounded animate-pulse w-1/3" />
        </div>
      </div>
    </div>
  </div>
);

export function Content() {
  const { updateQueryState, queryString } = useQueryRequest();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const { data: videoData, isLoading } = useGetVideo(queryString);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    updateQueryState({ page });
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 antialiased min-h-screen py-8">
      <div className="max-w-screen-2xl px-4 mx-auto lg:px-6 mb-12">
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {isLoading
            ? [...Array(pageSize)].map((_, index) => (
                <SkeletonLoader key={index} />
              ))
            : videoData?.data?.map((i) => (
                <Link key={i.id} href={`/watch-video/${i.id}`}>
                  <div className="relative overflow-hidden rounded-xl sm:my-5 !mx-auto duration-300 group cursor-pointer max-w-80 hover:!shadow-2xl hover:-translate-y-1 transition-all bg-white shadow-md">
                    <ImageWithSkeleton
                      alt={i.title}
                      height="180px"
                      src={i.thumbnail || "/images/fallback.png"}
                      width="320px"
                    />
                    <div className="h-40 p-4 bg-white">
                      <div className="text-start flex flex-col justify-between h-full">
                        <div>
                          <p className="text-base font-bold text-black line-clamp-2">
                            {i.title}
                          </p>
                          <p className="text-sm font-bold text-danger-500 mt-1">
                            {i.status} Miễn phí
                          </p>
                        </div>
                        <div className="flex w-full justify-between mt-2">
                          <span className="flex items-center text-sm font-medium text-gray-600">
                            <FaUser size={16} />{" "}
                            <span className="ps-2">Nguyễn thành</span>
                          </span>
                          <span className="flex items-center text-sm font-medium text-gray-600">
                            <RiTimer2Fill size={16} />{" "}
                            <span className="ps-2">32:41</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
        <div className="flex justify-center mt-8">
          <Pagination
            showControls
            page={currentPage}
            total={videoData?.total_pages || 1}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
}
