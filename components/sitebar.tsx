"use client";

import {
  MdOutlineDriveFolderUpload,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { TbLivePhoto } from "react-icons/tb";

import { siteConfig } from "@/config/site";
import { useAuth } from "@/redux/useAuth";

export const Sitebar = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-w-full lg:min-w-80 overflow-y-auto py-4 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          alt={currentUser?.dislayName}
          className="mx-auto mb-4 w-20 h-20 rounded-full"
          src={currentUser?.avatarUrl}
        />
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="/">{currentUser?.dislayName || "~"}</a>
        </h3>
        <p className="font-light text-gray-500 dark:text-gray-400">
          {currentUser?.email || "~"}
        </p>
        <ul className="flex justify-center mb-4 space-x-1">
          <li>
            <a
              className="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="inline-flex text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              href="#"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li>
          <a
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            href="/"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-primary transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                fillRule="evenodd"
              />
            </svg>
            <span className="ml-3">Giới thiệu</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            href={siteConfig.create.video}
          >
            <MdOutlineOndemandVideo className="text-primary" size={26} />
            <span className="ml-3">Tải video lên</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            href={siteConfig.create.meet}
          >
            <TbLivePhoto className="text-primary" size={26} />
            <span className="ml-3">Tạo phòng học</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            href={siteConfig.create.course}
          >
            <MdOutlineDriveFolderUpload className="text-primary" size={26} />
            <span className="ml-3">Tạo khóa học</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
