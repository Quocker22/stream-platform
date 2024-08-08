import React, { useState, useEffect } from "react";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

const DotLoading = () => (
  <div className="flex justify-center items-center absolute inset-0">
    <div className="flex space-x-2">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
          style={{ animationDelay: `${index * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  width = "320px",
  height = "180px",
  className = "",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      if (imgRef.current.complete) {
        handleImageLoaded();
      } else {
        imgRef.current.onload = handleImageLoaded;
      }
    }

    return () => {
      if (imgRef.current) {
        imgRef.current.onload = null;
      }
    };
  }, [src]);

  const handleImageLoaded = () => {
    if (imgRef.current) {
      imgRef.current
        .decode()
        .then(() => {
          setImageLoaded(true);
        })
        .catch(() => {
          // If decoding fails, we still show the image
          setImageLoaded(true);
        });
    }
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-t-xl">
          <DotLoading />
        </div>
      )}
      <img
        ref={imgRef}
        alt={alt}
        className={`object-cover w-full h-full ${
          imageLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        src={src}
      />
    </div>
  );
};
