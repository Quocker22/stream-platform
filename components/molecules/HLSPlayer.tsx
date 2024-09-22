import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HLSPlayerProps {
  src: string;
}
const hls = new Hls();

const HLSPlayer: React.FC<HLSPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      if (Hls.isSupported()) {
        hls.on(Hls.Events.ERROR, (event, data) => {
          console.log(event, data);
        });
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
        });
        hls.on(Hls.Events.FRAG_PARSED, () => {
          video.play();
        });
        hls.on(Hls.Events.FRAG_LOADED, () => {
          video.play();
        });
        hls.on(Hls.Events.FRAG_LOADING, () => {
          video.play();
        });
        hls.loadSource("http://localhost:8888/hls/test/index.m3u8");
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      controls
      height="500"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      width="1000"
    >
      <track
        kind="captions"
        label="English"
        src="path/to/captions.vtt"
        srcLang="en"
      />
    </video>
  );
};

export { HLSPlayer };
