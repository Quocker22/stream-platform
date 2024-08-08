export interface VideoModel {
  id: string;
  user_id: string;
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
  status: string;
}
