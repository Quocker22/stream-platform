/* eslint-disable jsx-a11y/media-has-caption */
import React from "react";

interface VideoPlayerProps {
  src: string;
  type: string;
  captionSrc?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, type, captionSrc }) => {
  return (
    <div className="mt-4">
      <video controls className="w-full rounded-lg">
        <source src={src} type={type} />
        {captionSrc ? (
          <track
            kind="captions"
            label="English"
            src={captionSrc}
            srcLang="en"
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <track kind="captions" />
        )}
        Your browser does not support the video tag.
      </video>
      {!captionSrc && (
        <p className="mt-2 text-sm text-gray-500">
          Captions are not available for this video.
        </p>
      )}
    </div>
  );
};

export default VideoPlayer;
