export interface UploadVideoModel {
  title: string;
  description: string;
  image_url: string;
  video_size: number;
  file_type: string;
  tags: string[];
}

export interface ResponseVideoModel {
  preSignedUrl: string;
  video: {
    id: string;
    user_id: string;
    time: string;
    title: string;
    description: string;
    view: number;
    like: number;
    thumbnail: string;
    status: number;
    statusNum: number;
    videoSize: number;
    fileType: string;
    tags: string[];
  };
}
