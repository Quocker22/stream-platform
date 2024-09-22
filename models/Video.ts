export interface VideoModel {
  id: string;
  user: {
    user_id: string;
    user_name: string;
    user_avatar: string;
  };
  time: string;
  title: string;
  description: string;
  view: number;
  like: number;
  thumbnail: string;
  status: null;
  statusNum: number;
  tags: string[];
  fileType: string;
  videoUrl: string;
}

export interface VideoStatus {
  id: string;
  status: number;
}
