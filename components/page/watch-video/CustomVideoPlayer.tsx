import React, { useState, useRef, useEffect } from "react";
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";

interface CustomVideoPlayerProps {
  url: string;
  poster?: string;
  autoPlay?: boolean;
  onEnded?: () => void;
  captionSrc?: string;
  captionLang?: string;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  url,
  poster,
  autoPlay,
  onEnded,
  captionSrc,
  captionLang = "en",
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (): void => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (): void => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgress = (): void => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;

      setProgress(progress);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleProgress);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleProgress);
      }
    };
  }, []);

  return (
    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
        poster={poster}
        onClick={togglePlay}
        onEnded={onEnded}
      >
        <source src={url} type="video/mp4" />
        {captionSrc && (
          <track
            kind="captions"
            label={`${captionLang} captions`}
            src={captionSrc}
            srcLang={captionLang}
          />
        )}
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
          <div
            className="bg-red-600 h-1.5 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="text-white" onClick={togglePlay}>
            {isPlaying ? (
              <PauseIcon className="h-8 w-8" />
            ) : (
              <PlayIcon className="h-8 w-8" />
            )}
          </button>
          <button className="text-white" onClick={toggleMute}>
            {isMuted ? (
              <SpeakerXMarkIcon className="h-8 w-8" />
            ) : (
              <SpeakerWaveIcon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
