/* eslint-disable jsx-a11y/media-has-caption */
"use client";

import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import { HiEmojiHappy } from "react-icons/hi";
import { RiMoreFill } from "react-icons/ri";
import { HiHandRaised } from "react-icons/hi2";
import { useState } from "react";
import {
  FaCommentDots,
  FaMicrophone,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

const HLSPlayer = () => {
  const videoRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const hls = new Hls();

      hls.loadSource(
        "https://watching.hightfive.click/hls/6ocQhMNtar/index.m3u8",
      );
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        videoRef.current?.play();
      });
    }
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gray-800">
      <div className="relative w-4/5 h-4/5 mt-8 rounded-xl">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-4 left-4 text-white font-semibold">
          Đinh Việt Quốc
        </div>
        <button
          className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded-full"
          onClick={toggleFullScreen}
        >
          {isFullScreen ? <FaCompress /> : <FaExpand />}
        </button>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="bg-red-500 text-white p-2 rounded-full">
          <FaMicrophone />
        </button>
        <button className="bg-gray-700 text-white p-2 rounded-full">
          <HiEmojiHappy />
        </button>
        <button className="bg-gray-700 text-white p-2 rounded-full">
          <HiHandRaised />
        </button>
        <button className="bg-gray-700 text-white p-2 rounded-full">
          <FaCommentDots />
        </button>
        <button className="bg-gray-700 text-white p-2 rounded-full">
          <RiMoreFill />
        </button>
      </div>
      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full">
        End Call
      </button>
    </div>
  );
};

export default HLSPlayer;
